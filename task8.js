var formInput = document.getElementById('addForm');
var listOutput = document.getElementById('items');
//console.log(listOutput);
var outputArray = document.querySelector('.list-group').childElementCount;
//console.log(outputArray);


 //FOR EDIT OPTION IN ALL LI

// for(var i=0;i<outputArray;i++)
// {
//      var editBtn = document.createElement('button');

//      editBtn.setAttribute('class','btn btn-danger btn-sm float-center');
//      editBtn.appendChild(document.createTextNode('edit'));

//      li.appendChild(editBtn);

//      var upper = document.querySelector('li');
//      var lower = document.querySelector('button')

//      upper.insertBefore(editBtn,lower);

// }



formInput.addEventListener('submit', pushItem);
listOutput.addEventListener('click', deltItem);

function pushItem(e)
{
    e.preventDefault();
   

    var pushedItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.setAttribute('class','list-group-item');
    //li.setAttribute('id',pushedItem);
    li.appendChild(document.createTextNode(pushedItem));

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



// var editBtn = document.createElement('button');
// editBtn.setAttribute('class','btn btn-danger btn-sm');
// editBtn.appendChild(document.createTextNode('Edit'));

// deleteBtn.appendChild(editBtn);




