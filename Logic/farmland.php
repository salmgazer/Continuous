<?php

include "adb.php";

class farmland extends adb{

    /**
     * @param $username
     * @return bool
     */
	function getFarmsByUsername($username){
		$str_sql = "SELECT * from land where username = '$username'";
        $this->query($str_sql);
        $row = $this->fetch();
        if($row == null){
            return false;
        }
        return $row;
	}
     function addMyFarm($username,$farmname,$longitude,$latitude,$city,$cityId,$farmSize)
    {
     $str_sql = "INSERT into land set 
        username='$username', latitude='$latitude',farm_name='$farmname', longitude='$longitude',city='$city',city_id='$cityId',farm_size='$farmSize'";
       return $this->query($str_sql);   
    }
}
