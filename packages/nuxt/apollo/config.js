// /apollo/config.js
module.exports = function(ctx) {
    return {
        connectToDevTools: true,
        // required  
        httpEndpoint: process.env.GRAPH_URL,
        // optional
        // See https://www.apollographql.com/docs/link/links/http.html#options
        httpLinkOptions: {
            credentials: 'same-origin'
        },
        persisting: false,
    }
}
