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

    localStorage.setItem('Name',userName);
    localStorage.setItem('Email',userEmail);
    localStorage.setItem('Phone',userContact);
    localStorage.setItem('Time',time);

    
}

