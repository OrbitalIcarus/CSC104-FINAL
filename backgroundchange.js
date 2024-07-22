// Here I have added the functionality of my buttons. I add an event listener that looks out for the user click of my nav buttons. Once this occurs it removes any previous of my images and covers the backgroudn with the new.
document.addEventListener('DOMContentLoaded', function() {
document.getElementById('nav1').addEventListener('click', function() {
    document.body.classList.remove('background-image2', 'background-image3');
    document.body.classList.add('background-image1');
});

document.getElementById('nav2').addEventListener('click', function() {
    document.body.classList.remove('background-image1', 'background-image3');
    document.body.classList.add('background-image2');
});

document.getElementById('nav3').addEventListener('click', function() {
    document.body.classList.remove('background-image1', 'background-image2');
    document.body.classList.add('background-image3');
});
});