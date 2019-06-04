

const ContentSearch = {

	ContentTile: props => {
		const showSubtitle = props.Subtitle && props.Subtitle.length;
		return (
			<li>
				<a href={props.clickUri}>
					{props.title}
					{showSubtitle && <span>-</span>}
					{props.Subtitle}
					</a>
				{props["Tile Short Description"]}
			</li>
		);
	},

	MediaTile: props => {
		return (
			<li>
				<a href={props.clickUri}>{props.title} <span>{props["File Type"]} {props["File Size"]}</span></a>
				{props["Tile Short Description"]}
			</li>
		);
	},

	LoadMore: props => {
		return (
			<div className="results-more">
				<button type="button" className="btn transparent" onClick={props.click}>
					{props.value}
				</button>
			</div>
		);
	},

	ResultsSummary: props => {
		if (!props.value) return null;

		// Parse text from "Showing {start} - {end} of {total}"
		const regEx = new RegExp("(?:^|})(.*?)(?:$|{)", "ig"), value = props.value, result = [];
		let match = regEx.exec(value), cur = 0, token;

		while (match) {
			if (match.index !== cur) {
				token = value.slice(cur + 1, match.index);
				if (token.indexOf("start") > -1) {
					result.push(<span key={cur}>{props.start}</span>);
				}
				else if (token.indexOf("end") > -1) {
					result.push(<span key={cur}>{props.start + props.count}</span>);
				}
				else if (token.indexOf("total") > -1) {
					result.push(<span key={cur}>{props.total}</span>);
				}
			}

			cur = match.index + match[1].length;
			result.push(<span key={match.index}>{match[1]}</span>);
			match = regEx.exec(value);
		}


		return result;
	},

	SearchResults: class SearchResults extends React.Component {
		constructor(props) {
			super(props);
			this.state = { tiles: null, showLoadMore: false, showSummary: false, endPage: this.props.startPage, total: 0 };
			this.loadMore = this.loadMore.bind(this);
		}

		loadMore(e) {
			e.preventDefault();
			this.query.endPage++;
			this.setState({ tiles: this.loadTiles(), endPage: this.query.endPage });
		}

		loadTiles() {
			this.props.searchService.getQueryResults(this.props.restUri, this.query).done(results => this.setState({
				showLoadMore: results.items.length < results.totalCount,
				showSummary: results.items.length > 1,
				total: results.totalCount,
				tiles: results.items.map((item) => {
					return item.isMediaItem ? <ContentSearch.MediaTile key={item.id} {...item} />
						: <ContentSearch.ContentTile key={item.id} {...item} />;
				})
			}));
		}

		componentDidMount() {
			this.start = this.props.startPage * this.props.perPage + 1;
			this.query = new this.props.searchService.Query(this.props);
			this.query.endPage = this.props.startPage;
			this.loadTiles();
		}

		render() {
			const showLoadMore = this.state.showLoadMore, showSummary = this.state.showSummary;

			return (
				<div className="results-list CoveoResultList" data-wait-animation="fade">
					<ol>{this.state.tiles}</ol>
					<div className="results-more">
						{showLoadMore && <ContentSearch.LoadMore value={this.props.viewMoreText} click={this.loadMore} />}
						{showSummary && <ContentSearch.ResultsSummary value={this.props.summaryText} start={this.start} count={this.state.tiles.length} total={this.state.total + 1} />}
					</div>
				</div>
			);
		}
	}
}

window.ReactHelper.register(
	"ContentSearch.SearchResults",
	ContentSearch.SearchResults,
	{ searchService: window.Atlas.CoveoService });
