var formTake = document.getElementById('demo');
var captureuL = document.getElementById('displayUsers');

//console.log(captureuL);


formTake.addEventListener('submit',copyData);



function copyData(e)
{
    e.preventDefault();
    var userName = document.getElementById('Name').value;
    var userEmail = document.getElementById('Email').value;
    var userContact = document.getElementById('Phone').value;
    var time = document.getElementById('board').value;
    
    var myObj = {
        'Name':userName,
        'Email':userEmail,
        'Phone':userContact,
        'Time':time

    };

    let key = new Date().toLocaleString();
    var myObj_stringForm = JSON.stringify(myObj);
    // //console.log(myObj_serialized);


      localStorage.setItem(key,myObj_stringForm);
      //console.log(localStorage);

     var showUser = document.createElement('li');
     showUser.textContent = "Name:" + userName + " Email:" + userEmail + " Contact-Number:" + userContact + " Time of Appointment:" + time;
     showUser.style.color = "white";
     

     var DeleteBanao = document.createElement('button');
     DeleteBanao.setAttribute('id','hatao');
     DeleteBanao.textContent = 'remove';
     showUser.appendChild(DeleteBanao);
     
     captureuL.appendChild(showUser);

     //var removeItem = document.getElementById('hatao');
     DeleteBanao.addEventListener('click',removeData);
     DeleteBanao.myParam = key;

      


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

