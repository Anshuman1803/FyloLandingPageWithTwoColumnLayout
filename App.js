let ErrorMsg = document.getElementById("ErrorMsg");
let EmailInput = document.getElementById("EmailBox");
let GetStarted = document.getElementById("GetStartedButton");


let GetStartedFree = document.getElementById("GetStartedFree");
let EmailInput2 = document.getElementById("FreeEmailBox");
let ErrorMsg2 = document.getElementById("ErrorMsg-2");
let ValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

GetStarted.addEventListener('click', ()=>{
    if(EmailInput.value.match(ValidEmail))
    {
        ErrorMsg.style.visibility = "hidden";
    }
    else{
        ErrorMsg.style.visibility = "visible";
        EmailInput.focus();
    }
});

GetStartedFree.addEventListener('click', ()=>{
    if(EmailInput2.value.match(ValidEmail))
    {
        ErrorMsg2.style.display = "none";
    }
    else{
        ErrorMsg2.style.display = "block";
        EmailInput2.focus();
    }
});