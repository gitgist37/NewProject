let v1 = document.getElementsByClassName('list-group-item');
// console.log(v1[2]);
// console.log(v1[2].textContent);
v1[2].textContent = 'baloo';
v1[2].style.fontWeight = 'bold';
v1[2].style.backgroundColor = 'green';

let allItems = document.getElementsByTagName('li');
for(let i=0;i<allItems.length;i++)
{
    allItems[i].style.fontWeight = 'bold';
}



