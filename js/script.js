// Business (or back-end) logic:
var akan = function(year, month, day, gender) {
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var date= new Date(year, --month, date);
    if (g === "Female") {
        return date && femaleNames[date.getDay()];
    } else {
        return date && maleNames[date.getDay()];
    }
}
//function akan(date,month,year) {
    // this.date=date;
    // this.month=month;
    // this.year=year
// }
// date constructors
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let females=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let males=["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let button=documen.getElementById("SUBMIT")
button.addEventListener("click");
function submit() {
    let date=document.getElementById("date").value
    let year=new Date(date);
    let dayWeek=year.getDay();//numbers
     // alert(dayweek);
     alert(female[dayWeek])
     // alert(female[dayWeek])
}