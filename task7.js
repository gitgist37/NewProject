//Starter

var v1 = document.querySelector('#items');
console.log(v1.parentNode);
v1.parentNode.style.backgroundColor = "grey";
console.log(v1.parentNode.parentNode.parentNode);


console.log(v1.parentElement);
v1.parentElement.style.backgroundColor = "grey";
console.log(v1.parentElement.parentElement.parentElement);

console.log(v1.childNodes);
console.log(v1.children[2]);
v1.children[2].style.backgroundColor = "yellow";


//Main-Course

var v2 = document.createElement('div');
console.log(v2);
v2.title = 'demo-title';
v2.setAttribute('class','demo');
v2.setAttribute('id','demo-id');
//v2.textContent = 'Mera naam Joker';

var addText = document.createTextNode('Mera naam Joker');

v2.appendChild(addText);

var upar = document.querySelector('header .container');
var niche = document.querySelector('h1');
//console.log(upar);

upar.insertBefore(v2,niche);
addText.textContent = 'HEllo';


var secondDiv = document.createElement('li');
console.log(secondDiv);
secondDiv.setAttribute('class','list-group-item');
// secondDiv.setAttribute('class','demo-class');
// secondDiv.title = 'demo-title';

var msg = document.createTextNode('HEllo');

secondDiv.appendChild(msg);

var upar = document.querySelector('form');
//console.log(upar);
//var niche = document.querySelector('li');
var agla = upar.nextElementSibling;
agla.appendChild(secondDiv);


// Stackoverflow
// var a = document.getElementById('items');
// var b = document.createElement('li');
// b.appendChild(document.createTextNode('HEllo'));
// a.appendChild(b);




//upar.insertBefore(secondDiv,niche);







