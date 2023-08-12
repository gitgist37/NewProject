var formTake = document.getElementById('demo');


formTake.addEventListener('submit',copyData);

function copyData(e)
{
    e.preventDefault();
    var userName = document.getElementById('Name').value;
    var userEmail = document.getElementById('Email').value;
    var userContact = document.getElementById('Phone').value;
    var time = document.getElementById('board').value;

    //console.log(userName,userEmail,userContact,time);

    // localStorage.setItem('Name',userName);
    // localStorage.setItem('Email',userEmail);
    // localStorage.setItem('Phone',userContact);
    // localStorage.setItem('Time',time);

    var myObj = {
        'Name':userName,
        'Email':userEmail,
        'Phone':userContact,
        'Time':time

    };
    
    var myObj_stringForm = JSON.stringify(myObj);
    //console.log(myObj_serialized);


     localStorage.setItem('myObj',myObj_stringForm);
     //console.log(localStorage);

     var myObj_objectForm = JSON.parse(myObj_stringForm);
     console.log(myObj_objectForm);

}


