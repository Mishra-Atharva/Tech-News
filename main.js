var date = new Date();
var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();
document.getElementById('date').innerHTML = year + '-' + month + '-' + day;
var url = 'https://newsapi.org/v2/everything?' +
          //'sources=bbc-news, Allsides, apnews, techcrunch, wired&'+
          'q=Technology&' +
        //   'from='+year + '-'+ month + '-' + day + '&' +
          'sortBy=popularity&' +
          'apiKey=4b46be4c26c34dbf8d0f7d009612f36d';

var req = new Request(url);
var outside = 2;

fetch(req)
    .then((a) => a.json())
    .then((response) => {
        for(i = 0; i <= 11; i++) {
            var author = response.articles[i].author;
            var title = response.articles[i].title;
            var imgurl = response.articles[i].urlToImage;
            var context = response.articles[i].content;
            var link = response.articles[i].url;
            const image = new Image();
            image.src = imgurl;
            if (i == 2 || i == 5 || i == 8 || i == 11) {
                author == null ? document.getElementById("news").innerHTML += "<div id='articles2'> <h1 id='title'> "+ title +" </h1>" + " <a href=" + link + "> <img src =" + imgurl + "> </a>" + "<p>" + "unkown" + "</p>" + "<span>" + context + "</span> </div>": document.getElementById("news").innerHTML += "<div id='articles2'> <h1 id='title'> "+ title +" </h1>" + " <a href=" + link + "> <img src =" + imgurl + "> </a>" + "<p>" + author + "</p>" + "<span>" + context + "</span> </div>";
            } else {
                author == null ? document.getElementById("news").innerHTML += "<div id='articles'> <h1 id='title'> "+ title +" </h1>" + " <a href=" + link + "> <img src =" + imgurl + "> </a>" + "<p>" + "unkown" + "</p>" + "<span>" + context + "</span> </div>": document.getElementById("news").innerHTML += "<div id='articles'> <h1 id='title'> "+ title +" </h1>" + " <a href=" + link + "> <img src =" + imgurl + "> </a>" + "<p>" + author + "</p>" + "<span>" + context + "</span> </div>";
            }
        }
    });

function open(link){
    window.open(link);
}