let login = document.querySelector(".logedIn");
// const user = document.querySelector(".username");

function validateForm(){
    var x =document.forms["myForm"]["fname"].value;
    var y =document.forms["myForm"]["pass"].value;

    if(x=="" || y==""){
        alert("Enter Valid Username and Password !!!");
        return false;
    }
    else{
            alert("Login Sucessfull !!!");
            return true;
            
    }
}
