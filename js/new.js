let name = prompt("What is your pet name?");
document.getElementById("name").innerHTML=name;
var output = 10;
// function to add points when feeding
let addPoints = () => {
    //add 5 points
    output = output + 5;
    //display added points
    document.getElementById("feedPoints").innerText=output;
}
// function to subtract points when playing
let subtractPoints = () => {
    //subtract 5 points
    output = output - 5;
    //display points
    document.getElementById("playPoints").innerHTML=output;
    if(output < 0){
        output = 0;
        document.getElementById("noEnergyLeft").innerHTML="No More Energy";
        //hiding the result
        document.getElementById("playPoints").style.display="none";
    }
        else{
                document.getElementById("noEnergyLeft").innerHTML=output;
    }
}
