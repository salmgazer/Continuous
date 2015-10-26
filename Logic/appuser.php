<?php

include "adb.php";

class appuser extends adb{
    /**
     * @param $username
     * @param $user_password
     * @return bool
     */
    function Login($username, $user_password)
    {
        $str_sql = "SELECT * from appuser where username = '$username' AND user_password = '$user_password'";
       return $this->query($str_sql);
        // return ($this->fetch() != null);
    }
    function signUp($username, $user_password,$name,$phone)
    {
        $str_sql = "INSERT into appuser set 
        username='$username', user_password='$user_password', user_name='$name',user_phone='$phone'";
       return $this->query($str_sql);
        // return ($this->fetch() != null);
    }
}

/*$myuser =  new appuser();
echo $myuser->Login("salifu123", "mole12883##");
*/

?>
