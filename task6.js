//1st Deliverable
var access2ndItem = document.querySelector('.list-group-item:nth-child(2)');
//console.log(accessItems);
access2ndItem.style.backgroundColor = 'green';
var access3rdItem = document.querySelector('.list-group-item:nth-child(3)');
access3rdItem.style.visibility = 'hidden';

//2nd Deliverable
var secondItem = document.querySelectorAll('li:nth-child(2)');
secondItem[0].style.color = 'green';

var onlyOdd = document.querySelectorAll('li:nth-child(odd)');
//console.log(onlyOdd);

for(var i=0;i<onlyOdd.length;i++)
{
    onlyOdd[i].style.backgroundColor = 'green';
}
