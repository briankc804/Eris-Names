let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let akanFemale = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
let akanMale = ["Kwasi","Kwadwo","Kwabenaa","Kwaku","Yaw","Kofi","Kwame"];


let button = document.getElementById("btn");

let myform = document.getElementById("myform");

myform.addEventListener("submit", (e) =>{
    e.preventDefault();
    let formData = new FormData(e.target);
    let date = new Date(formData.get("name"));
    let dayWeek = date.getDay();


    let gender = document.getElementsByName("gender");

    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked)
            var genderValue = gender[i].value;
    };




    if(genderValue == "Male"){
       document.getElementById("message").innerHTML = "Your Akan Name is " +akanFemale[dayWeek]+"!";
    }
    else{
       document.getElementById("message").innerHTML = "Your Akan Name is " +akanFemale[dayWeek]+"!";


    }

    


});
 function resetaall(){
     document.getElementById("message").innerHTML = ""
 }