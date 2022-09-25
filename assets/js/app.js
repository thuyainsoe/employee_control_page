// For Checkbox
let mainCheck = document.querySelector("#mainCheck")
let check = document.querySelector("#check");
let checkAll = document.querySelectorAll("#check");
let checks = document.querySelectorAll("#check");
let empCard = document.querySelectorAll('.employee_card');
checks.forEach(check => {
    check.addEventListener('change', (e)=> {
        let arr = [];
        for(let i = 0;i<checks.length;i++){
            arr.push(checks[i].checked);
        }
        if(arr.includes(true)){
            mainCheck.checked = true;
        }
        else{
            mainCheck.checked = false;
        }
    });
});




//For Border Left
