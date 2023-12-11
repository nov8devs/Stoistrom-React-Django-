// This file will help format the date time

function dateTimeFormat(dateObject, locale = 'en-US') {
    const formattedDate = new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    }).format(new Date(dateObject));

    return formattedDate
}

export default dateTimeFormat;