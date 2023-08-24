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

    
    
    let key = new Date().toLocaleString();
    var myObj_stringForm = JSON.stringify(myObj);
    // //console.log(myObj_serialized);


      localStorage.setItem(key,myObj_stringForm);
      console.log(localStorage);

      


     document.getElementById('Name').value = "";
     document.getElementById('Email').value = "";
     document.getElementById('Phone').value = "";
     document.getElementById('board').value = "";

    
     



    //  var myObj_objectForm = JSON.parse(myObj_stringForm);
    //  console.log(myObj_objectForm);

    // var myObj_objectForm = JSON.parse(localStorage.getItem("myObj"));
    // myObj_objectForm.push();
    // localStorage.setItem("myObj", JSON.stringify(myObj_objectForm));

}

//formTake.reset();


