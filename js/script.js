// Business (or back-end) logic:
var akan = function(year, month, day, gender) {
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var date= new Date(year, --month, date);
    if (g === "Female") {
        return date && femaleNames[date.getDay()];
    } else {
        return d && maleNames[d.getDay()];
    }
}
// User interface (or front-end) logic:
 (document).ready(function() {
     ("form#form").submit(function(event) {
         event.preventDefault();
         var y = parseInt($("#year").val());
         var m = parseInt($("#month").val());
         var d = parseInt($("#date").val());
         var g = ("input:radio[name=gender]:checked").val();
         var result = akan(y, m, d, g);
         alert("Your akan name is: " + result);
         //refresh page
         document.getElementById("form").reset();
     });
 });