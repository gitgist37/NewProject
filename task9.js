var formInput = document.getElementById('addForm');
var listOutput = document.getElementById('items');
//console.log(listOutput);
//var outputArray = document.querySelector('.list-group').childElementCount;
//console.log(outputArray);
var ListerValue = document.getElementById('filter');

var newBox = document.createElement('input');
newBox.setAttribute('type','text2');
newBox.setAttribute('class','form-control mr-2');
newBox.setAttribute('id','item2');
newBox.setAttribute('style','margin-left:8px');
 
// var a = document.querySelector('form #item');
// //console.log(a);
// var b = document.querySelector('.btn btn-dark');
// console.log(b);

formInput.appendChild(newBox);





 


formInput.addEventListener('submit', pushItem);
listOutput.addEventListener('click', deltItem);
ListerValue.addEventListener('keyup',findItem);

function pushItem(e)
{
    e.preventDefault();
   

    var pushedItem = document.getElementById('item').value;
    var pushedItem2 = document.getElementById('item2').value;
    var li = document.createElement('li');
    li.setAttribute('class','list-group-item');
    //li.setAttribute('id',pushedItem);
    var out = pushedItem + "\n" + pushedItem2;
    li.appendChild(document.createTextNode(out));
    
    
    // var createHeader = document.createElement('p');
    // createHeader.appendChild(document.createTextNode(pushedItem));
    // var createPara = document.createElement('p');
    // createPara.appendChild(document.createTextNode(pushedItem2));

    // //console.log(createHeader.textContent);
    // //console.log(createPara.textContent);
    
    // var total = createHeader.textContent + "\n" + createPara.textContent;
    // console.log(total);
    // var problemNode = document.createTextNode(total);
    
 
    //li.appendChild(out);


    
    //var value_here = e.target.id;
    //console.log(value_here);
    


    var editBtn = document.createElement('button');
    editBtn.setAttribute('class','btn btn-success btn-sm');
    editBtn.setAttribute('style','margin-left:650px');
    editBtn.appendChild(document.createTextNode('edit'));
    
    
    
    var deleteBtn = document.createElement('button');

    deleteBtn.setAttribute('class','btn btn-danger btn-sm float-right delete');
    deleteBtn.appendChild(document.createTextNode('X'));

    

   

   


   
         var upper = document.querySelector('li');
         var lower = document.querySelector('button');
        //  //console.log(upper);
        //  //console.log(lower);

         upper.insertBefore(editBtn,lower);
    
    

     li.appendChild(deleteBtn);
     li.appendChild(editBtn);
    //editBtn.appendChild(deleteBtn);
     listOutput.appendChild(li);

}

function deltItem(e)
{
    e.preventDefault();
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Positive?'))
        {
            var itemToDelete = e.target.parentElement;
            listOutput.removeChild(itemToDelete);
        }
    }
}



function findItem(e)
{
    e.preventDefault();
    var filterValue = e.target.value.toLowerCase();
    //console.log(filterValue);
    var itemList = listOutput.getElementsByTagName('li');
    //console.log(itemList);
    var itemList_to_Array = Array.from(itemList);
    //console.log(itemList_to_Array);
    for(var i=0;i<itemList_to_Array.length;i++)
    {
        var toShow = itemList_to_Array[i].firstChild.textContent;
        if(toShow.toLowerCase().includes(filterValue)===true)
        {
            itemList_to_Array[i].style.display = 'block';
        }
        else
        {
            itemList_to_Array[i].style.display = 'none';
        }
    }

}