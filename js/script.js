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
        landscontent += '<div class="listed_farms" onclick=getResponse("'+lands[i]['city']+'")><a href="#" class="white-text">'+lands[i]['farm_name']+'</a></div><br>';
    }
    document.getElementById("farm_lands").innerHTML = landscontent;
}

function cropToGrow(){
    alert(currentCity);
}

function getUser(){
    var strUrl = myurl+"cmd=5";
    var objResult = sendRequest(strUrl);

    if(objResult.result == 0){
        alert(objResult.message);
        return;
    }
    document.getElementById("username").innerHTML=objResult.message;

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

/**
Adding a new farm
*/
function addFarm(){
    /*Farm name*/
    var farmname = $("#farmname").val();
    /*longitude*/
    var longitude = $("#longitude").val();
      /*latitude*/
    var latitude = $("#latitude").val();
    /*City */
    var city = $("#city").val();
      /*City Id*/
    var cityId = $("#cityId").val();
     /*Farm size*/
    var farmSize = $("#farmSize").val();

    /* empty username */
    if(farmname.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty Farm name<i class="material-icons">close</i></div>';
        return
        }
    if(longitude.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty longitude<i class="material-icons">close</i></div>';
        return;
    }
    if(latitude.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty Latitude<i class="material-icons">close</i></div>';
        return;
    }
    if(city.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty City<i class="material-icons">close</i></div>';
        return;
    }
    if(cityId.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty City Id<i class="material-icons">close</i></div>';
        return;
    }
    if(farmSize.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty Farm Size<i class="material-icons">close</i></div>';
        return;
    }
    var strUrl = myurl+"cmd=4&farmname="+farmname+"&longitude="+longitude+"&latitude="+latitude+"&city="+city+"&cityId="+cityId+"&farmSize="+farmSize;
    var objResult = sendRequest(strUrl);
    var errorArea = document.getElementById("error_area");
    document.getElementById("error_area").innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
    if(objResult.result == 0) {
    document.getElementById("error_area").innerHTML = '<div class="chip red white-text">'+objResult.message+'<i class="material-icons">close</i></div>';
    return;
    }
    $("#farmname").val('');
    $("#longitude").val('');
    $("#latitude").val('');
    $("#cityId").val('');
    $("#city").val('');
    $("#farmSize").val('');
    document.getElementById("error_area").innerHTML = '<div class="chip green white-text">'+objResult.message+'<i class="material-icons">close</i></div>';
   
    window.location.href = "home.html";
}
function logout(){
     var strUrl = myurl+"cmd=6";
    var objResult = sendRequest(strUrl);

    if(objResult.result == 0){
        alert(objResult.message);
        return;
    }
    alert(objResult.message);
    window.location.href = "./index.html";

}

