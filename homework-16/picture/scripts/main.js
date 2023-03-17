const random = Math.floor(Math.random() * (10 - 1) + 1);
const images = ('<img alt="image" src="images/'+random+'.jfif" />');
document.getElementById('block').innerHTML = images;