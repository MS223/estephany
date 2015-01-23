function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("funny-cartoon-gifs-when-im-driving")) {
        image.src = "http://media.giphy.com/media/me4avHR05wefm/giphy.gif";
    } else {
        image.src = "http://toongifs.com/wp-content/uploads/2012/01/funny-cartoon-gifs-when-im-driving.gif";
    }
}