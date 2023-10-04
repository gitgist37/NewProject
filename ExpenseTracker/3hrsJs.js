let captureItem = document.getElementById('pushitem'); 
captureItem.addEventListener('click', itemList);



// let serial = 1;

function itemList(e)
{
    e.preventDefault();
    //console.log('hello');

    //let userDate = new Date().toUTCString().split(' ').splice(0,4).join(' ');
    let userDate = new Date();
    let userAmount = document.getElementById('amount').value;
    let userCategory = document.getElementById('category').value;
    let userItemType = document.getElementById('description').value;
    
    let obj_table = {
    
        'Date':userDate,
        'Amount':userAmount,
        'Category':userCategory,
        'Desc':userItemType                      
    };     

   


    //let key = new Date().toLocaleString();
    let obj_table_stringForm = JSON.stringify(obj_table);
    localStorage.setItem(userDate,obj_table_stringForm);                

    let myTable = document.getElementById('showitems').getElementsByTagName('tbody')[0];
    document.getElementById('showitems').style.display = 'table';
    // console.log(document.getElementById('showitems'));
    let row = myTable.insertRow();
   
    
    
    //let cell_s_no = row.insertCell(0);
    let cell_r_date = row.insertCell(0);
    let cell_r_amount = row.insertCell(1);
    let cell_r_category = row.insertCell(2);
    let cell_r_desc = row.insertCell(3);
    let cell_r_modify = row.insertCell(4);

    //cell_s_no.innerHTML = obj_table["S.no"];
    cell_r_date.innerHTML = obj_table.Date;
    cell_r_amount.innerHTML = obj_table.Amount;
    cell_r_category.innerHTML = obj_table.Category;
    cell_r_desc.innerHTML = obj_table.Desc;

    let editBtn = document.createElement('button');
    editBtn.setAttribute('id','editBtn');
    editBtn.textContent = "edit";
    cell_r_modify.appendChild(editBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('id','deleteBtn');
    deleteBtn.textContent = "remove";
    editBtn.nextElementSibling = deleteBtn;
    cell_r_modify.appendChild(deleteBtn);


    editBtn.addEventListener('click', editItems);
    editBtn.myParam = userDate;

    deleteBtn.addEventListener('click', removeItems);
    deleteBtn.myParam = userDate;

    
    document.getElementById('amount').value = "";
    document.getElementById('category').value = "";
    document.getElementById('description').value = "";
    
}


function removeItems(e)
{
    e.preventDefault();
    e.target.parentNode.parentNode.remove();
    localStorage.removeItem(e.target.myParam);
}



function editItems(e)
{
    e.preventDefault();
    var taken = JSON.parse(localStorage.getItem(e.target.myParam));
    document.getElementById('amount').value = taken.Amount;
    document.getElementById('category').value = taken.Category;
    document.getElementById('description').value = taken.Desc;
    
    e.target.parentNode.parentNode.remove();
    localStorage.removeItem(e.target.myParam);

                                                     
}
