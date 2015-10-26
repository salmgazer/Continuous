<?php session_start();

$_SESSION['username'] = "salifu123";
$_SESSION['password'] = "mole123##";

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
    echo '{"result": 1, "message": "Sign in successful"}';
    $_SESSION['username'] = $username;
    $_SESSION['password'] = $password;
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

?>
