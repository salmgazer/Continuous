/* u is url */
/* function by Mr Aelaf Dafla */
var myurl = "logic/master.php?";
var currentCity = "";
function sendRequest(u) {
    // Send request to server
    //u a url as a string
    //async is type of request
    var obj = $.ajax({url: u, async: false});
    //Convert the JSON string to object
    var result = $.parseJSON(obj.responseText);
    return result;	//return object
}

$(function () {
  $('#login').submit(function(e) {
    e.preventDefault();
    Login();
  });
});

$(function () {
  $('#signup').submit(function(e) {
    e.preventDefault();
    signUpForm();
  });
});

function getResponse(myloc){
    var strUrl = "http://api.openweathermap.org/data/2.5/weather?q="+myloc+"&type=accurate&mode=json&cnt=16&appid=bfac6bfb72fcbb48a2edcf1778447d95";
    var objResult = sendRequest(strUrl);
    var main = objResult.main;
    var sys = objResult.sys;
    var weather = objResult.weather[0];
    currentCity = objResult.name;
    document.getElementById("information").innerHTML = "city: "+objResult.name+"<br>  country : "+sys['country']+"<br>Humidity: "+main['humidity']+"<br> Temp: "+main['temp']+"<br> Pressure:"+main['pressure']+
    "<br> main: "+weather['main']+"<br> description : "+weather['description'];
}


function Login(){
    /*username*/
    var username = $("#username").val();
    /*password*/
    var password = $("#password").val();

    /* empty username */
    if(username.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty username<i class="material-icons">close</i></div>';
        return
        }
    if(password.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty password<i class="material-icons">close</i></div>';
        return;
    }
    var strUrl = myurl+"cmd=1&username="+username+"&password="+password;
    var objResult = sendRequest(strUrl);
    var errorArea = document.getElementById("error_area");
    document.getElementById("error_area").innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
    if(objResult.result == 0) {
    document.getElementById("error_area").innerHTML = '<div class="chip red white-text">'+objResult.message+'<i class="material-icons">close</i></div>';
    return;
    }
    window.location.href = "home.html";
}

function getFarmsById(){
    var strUrl = myurl+"cmd=2";
    var objResult = sendRequest(strUrl);

    if(objResult.result == 0){
        alert(objResult.message);
        return;
    }
    var lands  = objResult.mylands;
    landscontent = "";
    getResponse(lands[0]['city']);
    for(i = 0; i < lands.length; i++){
        landscontent += '<div class="listed_farms" onclick=getResponse("'+lands[i]['city']+'")><a href="#">'+lands[i]['farm_name']+'</a></div><br>';
    }
    document.getElementById("farm_lands").innerHTML = landscontent;
}

function cropToGrow(){
    alert(currentCity);
}

function getUser(){

}

function signUpForm(){
    $("#logside").load("views/signup.html");
}
function signUpUser(){
    /*username*/
    var username = $("#susername").val();
    /*password*/
    var password = $("#pPassword").val();
      /*farmer name*/
    var farmername = $("#farmername").val();
      /*phone*/
    var phone = $("#phone").val();

    /* empty username */
    if(username.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty username<i class="material-icons">close</i></div>';
        return
        }
    if(password.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty password<i class="material-icons">close</i></div>';
        return;
    }
    if(farmername.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty Farmer Name<i class="material-icons">close</i></div>';
        return;
    }
    if(phone.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty Phone<i class="material-icons">close</i></div>';
        return;
    }
    var strUrl = myurl+"cmd=3&username="+username+"&password="+password+"&farmername="+farmername+"&phone="+phone;
    var objResult = sendRequest(strUrl);
    var errorArea = document.getElementById("error_area");
    document.getElementById("error_area").innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
    if(objResult.result == 0) {
    document.getElementById("error_area").innerHTML = '<div class="chip red white-text">'+objResult.message+'<i class="material-icons">close</i></div>';
    return;
    }
    $("#susername").val('');
    $("#pPassword").val('');
    $("#phone").val('');
    $("#farmername").val('');
    document.getElementById("error_area").innerHTML = '<div class="chip green white-text">'+objResult.message+'<i class="material-icons">close</i></div>';
   
    // window.location.href = "index.html";
}

