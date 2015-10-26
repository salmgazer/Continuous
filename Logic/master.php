<?php session_start();

// $_SESSION['username'] = "salifu123";
// $_SESSION['password'] = "mole123##";

if(!isset($_REQUEST['cmd'])){
	echo '{"result": 0, "message": "Unknown command"}';
	return;
}

$cmd = $_REQUEST['cmd'];

switch ($cmd) {
	case 1:
  Login();
  break;
  case 2:
  getFarmsById();
  break;
  case 3:
  userSignUp();
  break;
  case 4:
  addFarm();
  break;
  case 5:
  getuserSession();
  break;
  case 6:
  logout();
  break;
  default:
  echo '{"result": 0, "message": "Unknown command"}';
  return;
  break;
}


function Login(){
	include "appuser.php";

    $myuser = new appuser();

    $username = $_GET['username'];
    $password = $_GET['password'];

    if(!$myuser->Login($username, $password)){
        echo '{"result": 0, "message": "Wrong details"}';
        return;
    }
    session_destroy();
    session_start();

    $_SESSION['username'] = $username;
    $_SESSION['password'] = $password;
    echo '{"result": 1, "message": "Sign in successful"}';
    return;
}

function logout(){

    if(!$_SESSION['username']){
        echo '{"result": 0, "message": "User not loged in"}';
        return;
    }
    session_destroy();
    echo '{"result": 1, "message": "Loged out successfully"}';
    return;
}
function getFarmsById(){
    if(!isset($_SESSION['username']) && isset($_SESSION['password'])){
        echo '{"result": 0, "message": "You need to sign in"}';
        return;
    }
    $username = $_SESSION['username'];
    include "farmland.php";
    $mylands = new farmland();
    $farms = $mylands->getFarmsByUsername($username);
    if(!$farms){
        echo '{"result": 0, "message": "You have not added farms yet"}';
        return;
    }

    echo '{"result": 1, "mylands": [';
    while($farms){
        echo json_encode($farms);
        $farms = $mylands->fetch();
        if($farms){
            echo ',';
        }
    }
    echo "]}";
    return;
}
function userSignUp(){
    include "appuser.php";

    $myuser = new appuser();
    $username = $_GET['username'];
    $password = $_GET['password'];
    $phone = $_GET['phone'];
    $farmername = $_GET['farmername'];

    if(!$myuser->signUp($username,$password,$farmername,$phone)){
        echo '{"result": 0, "message": "User not created"}';
        return;
    }
    echo '{"result": 1, "message": "Sign up was successful"}';

    return;
}
function addFarm(){
    include "farmland.php";

    $myuser = new farmland();
    $farmname = $_GET['farmname'];
    $longitude = $_GET['longitude'];
    $latitude = $_GET['latitude'];
    $city = $_GET['city'];
    $cityId = $_GET['cityId'];
    $farmSize = $_GET['farmSize'];
    $username=$_SESSION['username'];

    if(!$myuser->addMyFarm($username,$farmname,$longitude,$latitude,$city,$cityId,$farmSize)){
        echo '{"result": 0, "message": "land was not added"}';
        return;
    }
    echo '{"result": 1, "message": "land was added successful"}';

    return;
}
function getuserSession(){
    if(!$_SESSION["username"]){
      echo '{"result": 0, "message": "No session stored"}';
        return;  
    }
    echo '{"result": 1, "message": "'.$_SESSION["username"].'"}';

    return;

}

?>
