function jij(){
    window.location = "giveaway.html";
}





function xt(){
    window.location = "process.html";
}


var freefireid = 0;
var diamonds = 0;
var gold = 0;







function xxx(){





    
    freefireid = Number(document.getElementById("ffid").value);
    gold = Number(document.getElementById("go").value);
    diamonds = Number(document.getElementById("dia").value);




document.getElementById("iii").innerHTML = "This is your free fire id: " + freefireid;
document.getElementById("ggg").innerHTML ="You will get " +  gold + " gold.";
document.getElementById("ddd").innerHTML ="You will get " + diamonds + " diamonds.";


















    speak();

function speak(){
    var synth= window.speechSynthesis;


    speak_data = "So, you need " + diamonds + " diamonds and You need " + gold + " gold. Your free fire account is" + freefireid + ". Just check wheather everything is fine.";

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);



}
















}





function ppp(){
    window.location = "thankyou.html";




}











