import axios from 'axios'

var news = axios
    .get('http://localhost:8080/news')
    .then((response) => {
        return (response.data.articles)

        WebSocket.send(response.data.articles)
    })

console.log(news)


news.then(function (requetes) {
    requetes.forEach(function (element, index) {
        var article = document.getElementById('articles').innerHTML +=
            '<div id="articlenum'+index+'" class="col-lg-4">' +
            '<div class="card" style="width: 18rem;">'+
                '<img class="card-img-top" src="' + element.urlToImage  + '" alt="Card image cap"> </img>' +
                '<div class="card-body">'+
                '<h5 class="card-title" ><em>'+ element.title +'</em></h5>'+
                '<p class="card-text">' + element.description  +'</p>'+
                '</div>'+

                '<button onclick="ouvrir_popup('+index+')"> Go somewhere; </button>'+
                '</div>'

    })



})



// connection websocket + event etc
const ws = new WebSocket('ws://localhost:8880/')



ws.onopen = (event) => {

    ws.send('helloz')

}

ws.onmessage = (message) => {

    console.log('message du serveur ' + message.data)

}







export {news}

