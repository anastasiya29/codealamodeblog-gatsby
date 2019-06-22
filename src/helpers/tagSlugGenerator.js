const tagSlugGenerator = tag => {
  if (!tag || typeof tag !== 'string') {
    throw new Error('invalid tag');
  }

  return `/tags/${tag
    .replace(/\./g, '')
    .replace(/\s/g, '-')
    .toLocaleLowerCase()}`;
};

module.exports = { tagSlugGenerator };
