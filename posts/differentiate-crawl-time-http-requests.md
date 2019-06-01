---
title: How To Change Render Behavior During Crawl-Time (when using Coveo)
tags:
  - Sitecore
  - Coveo
  - Indexing
description: Tutorial for how to change rendering behavior during crawl time by testing whether the current rendering context was triggered by the Coveo crawler
featuredImage: uservscrawler.png
date: 2018-01-21 19:34:44
---
[[snippet]]
| You know how it's super easy to change how a rendering is rendered based on `Sitecore.Context.PageMode`? If you've ever wished there was a similar check available for `PageMode.IsIndexCrawlerCrawling`, then read on.
![User VS Index Crawler](/images/uservscrawler.png)

<!-- more --> 

## Why does crawler context matter
1. If you have renderings that show alerts to front-end users (for example, cookie consent or legal disclaimers), it makes sense not to render these at crawl time since their HTML shouldn’t show up in search results.
2. If you have dynamic renderings that AJAX their content, you may want to provide a static version for the index.
3. If you have renderings that inject user tracking code, it makes sense to keep this code out of the indexed version of the page.

## Let's code!

### Wrap the default `HtmlContentInBodyWithRequestsProcessor`
By default, Coveo uses the `HtmlContentInBodyWithRequestsProcessor` class to index a page's content. This class makes an HTTP request to the page's URI and indexes the HTML that is returned. Unfortunately, `HtmlContentInBodyWithRequestsProcessor` is mostly non-virtual and private methods, so it's difficult to customize. But we can get around this by creating a wrapper.

``` csharp
using System;
using System.IO;
using Coveo.Framework.Configuration;
using Coveo.Framework.Http;
using Coveo.Framework.Processor;
using Coveo.SearchProvider.Pipelines;
using Coveo.SearchProvider.Processors;

namespace Website.Search.Processors
{
	/// <summary>
	/// Wraps <see cref="HtmlContentInBodyWithRequestsProcessor"/> to add query string
	/// parameter to Http Request that denotes the request as coming from index crawler.
	/// </summary>
	public class CustomHtmlContentInBodyWithRequestsProcessor
		: IProcessor<CoveoPostItemProcessingPipelineArgs>
	{
		private readonly object _lock = new object();

		private HtmlContentInBodyWithRequestsProcessor _baseProcessor;

		/// <inheritdoc/>
		public void Process(CoveoPostItemProcessingPipelineArgs args)
		{
			if (_baseProcessor == null)
			{
				lock (_lock)
				{
					if (_baseProcessor == null)
					{
						_baseProcessor = new HtmlContentInBodyWithRequestsProcessor(new CustomItemContentFetcher(new HttpRequestBuilder(), args.IndexConfiguration));
					}
				}
			}

			_baseProcessor.Process(args);
		}

		private class CustomItemContentFetcher : IItemContentFetcher
		{
			private readonly HtmlItemContentFetcher _baseFetcher;

			public CustomItemContentFetcher(IHttpRequestBuilder requestBuilder, CoveoIndexConfiguration indexConfiguration)
			{
				_baseFetcher = new HtmlItemContentFetcher(requestBuilder, indexConfiguration);
			}

			public Stream FetchItemContent(string url) => _baseFetcher.FetchItemContent(FixUrl(url));

			public IHttpWebResponse FetchHttpWebResponse(string url) => _baseFetcher.FetchHttpWebResponse(FixUrl(url));

			/// <summary>
			/// Adds a "isIndexCrawl" query string parameter to the item's default URI
			/// </summary>
			private string FixUrl(string url)
			{
				var uriBuilder = new UriBuilder(url);
				var query = System.Web.HttpUtility.ParseQueryString(uriBuilder.Query);
				query["isIndexCrawl"] = "1";
				uriBuilder.Query = query.ToString();
				return uriBuilder.ToString();
			}
		}
	}
}
```

### Configuration patch
Replace default processor with custom processor in configuration

``` xml
<configuration xmlns:patch="http://www.sitecore.net/xmlconfig/">
	<sitecore>
		<pipelines>
			<coveoPostItemProcessingPipeline>
				<processor type="Coveo.SearchProvider.Processors.HtmlContentInBodyWithRequestsProcessor, Coveo.SearchProviderBase">
					<patch:delete />
				</processor>
				<processor type="Website.Search.Processors.CustomHtmlContentInBodyWithRequestsProcessor, Website" />
			</coveoPostItemProcessingPipeline>
		</pipelines>
	</sitecore>
</configuration>

```

### Set up renderings
Now we just need to make our renderings aware of whether the special query string parameter is present. Add this `IsCrawl` property to your Rendering Model class. You can test for this property in your View and change rendering output accordingly.

``` csharp
public bool IsIndexCrawler => Sitecore.Context.Request.QueryString["isIndexCrawl"] == "1";
```



Bon Appétit!