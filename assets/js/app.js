// For Checkbox
let mainCheck = document.querySelector("#mainCheck")
let check = document.querySelector("#check");
let checkAll = document.querySelectorAll("#check");
let checks = document.querySelectorAll("#check");
let editIcon = document.querySelector(".employee_icon_3_container");

checks.forEach(check => {
    check.addEventListener('change', (e)=> {
        let arr = [];
        for(let i = 0;i<checks.length;i++){
            arr.push(checks[i].checked);
        }
        if(arr.includes(true)){
            mainCheck.checked = true;
            editIcon.style.display = "block";
        }
        else{
            mainCheck.checked = false;
            editIcon.style.display = "none";
        }
    });
});

// Main Check
mainCheck.addEventListener('change',()=>{
    if(!mainCheck.checked){
        for(let i = 0; i < checks.length ; i++){
            checks[i].checked = false;
            editIcon.style.display = "none";
            checks[i].parentElement.parentElement.style.borderLeft = "none";
        }
    }
    else{
        for(let i = 0; i < checks.length ; i++){
            checks[i].checked = true;
            editIcon.style.display = "block";
            checks[i].parentElement.parentElement.style.borderLeft = "3px solid #1ED292";
        }
    }
});

//For Border Left
checks.forEach(check => {
    check.addEventListener('change',()=>{
        if(check.checked){
            check.parentElement.parentElement.style.borderLeft = "3px solid #1ED292";
        }
        else{
            check.parentElement.parentElement.style.borderLeft = "none";
        }
    });
});




