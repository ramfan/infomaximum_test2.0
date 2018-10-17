/* eslint-disable import/prefer-default-export */
export const validate = (values) => {
    const errors = {};
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.username.length < 4) {
        errors.password = 'Short';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};