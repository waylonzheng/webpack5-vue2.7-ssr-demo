const path = require('path');

// eslint-disable-next-line require-jsdoc
const resolve = dir => {
    const { NODE_ENV } = process.env;
    if (NODE_ENV === 'dev') {
        return path.resolve(__dirname, '..', dir);
    }
    return path.resolve(__dirname, dir);
};

const join = dir => {
    const { NODE_ENV } = process.env;
    if (NODE_ENV === 'dev') {
        return path.join(__dirname, '..', dir);
    }
    return path.join(__dirname, dir);
};

module.exports = { resolve, join };