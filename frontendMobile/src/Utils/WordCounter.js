const countWords = (text) => {
    const trimmedText = text.trim();
    const words = trimmedText.split(/\s+/);
    const filteredWords = words.filter((word) => word !== '');
    return filteredWords.length;
};

export default countWords;
