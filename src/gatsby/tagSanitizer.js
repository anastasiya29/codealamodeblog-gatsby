const tagSanitizer = (tag) => {
    if (!tag || typeof (tag) !== 'string') {
        throw new Error('invalid tag');
    }

    return tag.replace(/./g, '').replace(/\s/g, '-').toLocaleLowerCase();
};

module.exports = { tagSanitizer };