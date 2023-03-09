function isPhoneNumber(value: string) {
    // Define regular expression for phone number
    const phoneRegex = /^\+?\d{1,3}\s?\-?\(?\d{3}\)?\s?\-?\d{3}\s?\-?\d{4}$/;

    // Test the value against the regular expression
    return phoneRegex.test(value);
}


export default isPhoneNumber