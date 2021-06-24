/**
 * All ENVs MUST START WITH REACT_APP_{VARIABLE NAME}
 */
module.exports = new Promise(resolve => {
    resolve({
        local: {
            PORT: 3002,
            REACT_APP_AUTH_API_URL: 'http://localhost:4018',
        },
        dev: {
            PORT: 3002,
        },
        development: {
            PORT: 3002,
        },
        production: {
            PORT: 3002,
        },
    });
});
