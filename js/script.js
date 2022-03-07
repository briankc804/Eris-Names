let myForm=document.getElementById("myForm"); //gets element by id of myForm
let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
let maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let myBirthday = document.getElementById("myBirthDay").value;
let myGender = document.getElementsByName("gender");
let dateOfBirth = new Date(myBirthday);
let dayOfTheWeek = dateOfBirth.getDay();

myForm.addEventListener("submit",(e) => {
    e.preventDefault(); //stop default behaviour 
    const formData =new formData(e.target); //get inputs from HTML elements
    var dateEntered=new Date(formData.get("date")); // convert date inputs to date objects
    if(formData.get("gender") =="female") {
        document.getElementById('message').innerHTML = "Your name is" + femaleNames[dateEntered];
     } else {
         document.getElementById('message').innerHTML = "Your akan name is" + maleNames[dateEntered];
     }
    })

    