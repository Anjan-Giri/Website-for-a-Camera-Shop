/* JavaScript For Feedback Form Validation */   
function validateForm(event){
    event.preventDefault();

    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if(firstname != "" && lastname != "" && email != "" && message != ""){
        alert("Thanks For Your Feedback!");
        document.getElementById('myForm').reset();
    }
    else if(firstname == "" && lastname == "" && email == "" && message == ""){
        alert("Please Give Us Feedback!");
    }
    else if(firstname == "" || lastname == "" || email == "" || message == ""){
        if(firstname == ""){
            alert("Please enter firstname");
        }
        else if(lastname == ""){
            alert("Please enter lastname");
        }
        else if(email == ""){
            alert("Please enter your email");
        }
        else if(message == ""){
            alert("Please write a message");
        }
    }
}