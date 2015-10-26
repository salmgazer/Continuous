<?php

include "adb.php";

class farmland extends adb{

    /**
     * @param $username
     * @return bool
     */
	function getFarmsByUsername($username){
		$str_sql = "select * from land where username = '$username'";
        $this->query($str_sql);
        $row = $this->fetch();
        if($row == null){
            return false;
        }
        return $row;
	}
}
