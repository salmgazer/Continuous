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
        $str_sql = "select * from appuser where username = '$username' AND user_password = '$user_password'";
        $this->query($str_sql);
        return ($this->fetch() != null);
    }
}

/*$myuser =  new appuser();
echo $myuser->Login("salifu123", "mole12883##");
*/

?>
