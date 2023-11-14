var formTake = document.getElementById('demo');
var captureuL = document.getElementById('displayUsers');


formTake.addEventListener('submit',copyData);

window.onload = function()
{
    axios.get("https://crudcrud.com/api/5d5091cb996b44d081e80ce2a1678203/a")
    .then(value=>
        {
            showUser(value);
        })
    .catch(err=>console.log(err));
}



function showUser(value)
{
    for(let i=0;i<value.data.length;i++)
    {
        if(value.data[i].Name===undefined)
        {
            continue;
        }
        let createLi = document.createElement('li');
        createLi.textContent = " Name: " + value.data[i].Name + " Email: " + value.data[i].Email + " Contact-Number: " + value.data[i].Phone + " Time of Appointment: " + value.data[i].Time;
        createLi.style.color = "white";
        captureuL.appendChild(createLi);

        let DeleteBanao = document.createElement('button');
        DeleteBanao.setAttribute('id','hatao');
        DeleteBanao.textContent = 'Remove';
        captureuL.appendChild(DeleteBanao);

        let key = value.data[i]._id;
        DeleteBanao.addEventListener('click', remove4mCrud);
        DeleteBanao.myParam = key;
        
    }
}




function remove4mCrud(e)
{
    e.preventDefault();
    console.log(e.target.myParam);
    e.target.parentNode.remove();
    // axios.delete("https://crudcrud.com/api/5d5091cb996b44d081e80ce2a1678203/a",
    // {
    //     params:
    //     {
    //         "_id":e.target.myParam
    //     }
    // });
    axios.delete(`https://crudcrud.com/api/5d5091cb996b44d081e80ce2a1678203/a/${e.target.myParam}`);
    
    
}





function copyData(e)
{
    e.preventDefault();
    var userName = document.getElementById('Name').value;
    var userEmail = document.getElementById('Email').value;
    var userContact = document.getElementById('Phone').value;
    var time = document.getElementById('board').value;
    
    // let options = {
    //     method: 'post',
    //     url: 'https://crudcrud.com/api/c5ee0adad57b4447815c92a84b0a5abc/abc',
    //     headers: {
    //         Content_type:'application/json'
    //     }, 
    //     data: {
    //         'Name':userName,
    //         'Email':userEmail,
    //         'Phone':userContact,
    //         'Time':time
    //     }
    // }


    let myObj = {
            'Name':userName,
            'Email':userEmail,
            'Phone':userContact,
            'Time':time
    };

    // let data = {
    //     "name":"subham"
    // }

    axios.post("https://crudcrud.com/api/5d5091cb996b44d081e80ce2a1678203/a", myObj )
    .then((value)=>
    {
        //console.log(value);
    //    document.getElementById('displayUsers').innerHTML = value.data["Name"];
    })
    .catch((err) => {
        console.log(err);
    });

    let key = new Date().toLocaleString();
    
    
    //  var showUser = document.createElement('li');
    //  showUser.textContent = "Name:" + userName + " Email:" + userEmail + " Contact-Number:" + userContact + " Time of Appointment:" + time;
    //  showUser.style.color = "white";
     

    //  var DeleteBanao = document.createElement('button');
    //  DeleteBanao.setAttribute('id','hatao');
    //  DeleteBanao.textContent = 'Remove';
    //  showUser.appendChild(DeleteBanao);

    //  var editBanao = document.createElement('button');
    //  editBanao.setAttribute('id','makechanges');
    //  editBanao.textContent = 'Edit';
    //  showUser.appendChild(editBanao);
     
    //  captureuL.appendChild(showUser);

    //  editBanao.addEventListener('click',editData);
    //  editBanao.myParam = key;

    //  //var removeItem = document.getElementById('hatao');
    //  DeleteBanao.addEventListener('click',removeData);
    //  DeleteBanao.myParam = key;

      


     document.getElementById('Name').value = "";
     document.getElementById('Email').value = "";
     document.getElementById('Phone').value = "";
     document.getElementById('board').value = "";

        

     
}

function removeData(e)
{
    e.preventDefault();
    //console.log(e.target.parentNode.value);
    e.target.parentNode.remove();
    localStorage.removeItem(e.target.myParam);
    
}

function editData(e)
{
    e.preventDefault();
    var taken = JSON.parse(localStorage.getItem(e.target.myParam));
    document.getElementById('Name').value = taken.Name;
    document.getElementById('Email').value = taken.Email;
    document.getElementById('Phone').value = taken.Phone;
    document.getElementById('board').value = taken.Time;

    e.target.parentNode.remove();
    localStorage.removeItem(e.target.myParam);

}


