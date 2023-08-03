console.log(document);
console.log(document.URL);
console.log(document.links);
console.log(document.forms);

let accessHead = document.getElementById('main');
console.log(accessHead);
//accessHead.firstElementChild.fontWeight = 'bold';
document.getElementById('main').firstElementChild.style.fontWeight = '900';
document.getElementById('main').firstElementChild.style.color = 'green';