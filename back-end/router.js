const express = require('express')
const router = express.Router()
const axios = require('axios')



router.route('/news').get((request, response) => {

    var global = axios
        .get('https://newsapi.org/v2/top-headlines?country=fr&apiKey=5e5985b128cb4b1ea61193be15a2a48d')
        .then((httpResponse) => response.send(httpResponse.data))
})


/*router.route('/new').get((request, response) => {

    var id = axios
        .get('https://newsapi.org/v2/top-headlines?country=fr&apiKey=5e5985b128cb4b1ea61193be15a2a48d')
        .then((httpResponse) => response.send(httpResponse.data))
})*/

module.exports = router
