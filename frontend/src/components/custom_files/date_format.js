function dateTimeFormat(dateObject) {
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    }).format(new Date(dateObject));

    return formattedDate
}

export default dateTimeFormat;