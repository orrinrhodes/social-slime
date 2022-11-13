/*hacker mane*/

var scripts = document.getElementsByTagName('script');
var path = scripts[0].src.split('?')[0];
var curdir = path.split('/').slice(0, -1).join('/')+'/';

var newdir = `${curdir}../media/imgs/furry.jpg`;
console.log(newdir);
window.open(newdir);