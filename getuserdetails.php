<?php
     //echo "hiiii";die;
     include("config/define.php");
     $userid=$_REQUEST['userid'];
     //$Query =("SELECT people.*,address.address1,address.address2,address.city,address.state,address.zip,address.phone FROM (people,address) where people.id = ".$userid." and address.userid = people.id");
     //$Query =("SELECT people.*,address.address1,address.address2,address.city,address.state,address.zip,address.phone FROM people RIGHT  JOIN address ON  people.id = ".$userid." and address.userid=people.id");
     
     //get people table data
     $peopleQuery=("select * from people where id=".$userid);
	$getQuery = mysql_query($peopleQuery);
     $FetchDatabasePeople= mysql_fetch_array($getQuery);
     //get address table data
     $addressQuery=("select * from address where userid=".$userid);
	$getQueryaddress = mysql_query($addressQuery);
     $FetchDatabaseAddress= mysql_fetch_array($getQueryaddress);
     //Store data in array
     $arrayDatabase["first_name"]=$FetchDatabasePeople["first_name"];
     $arrayDatabase["last_name"]=$FetchDatabasePeople["last_name"];
     $arrayDatabase["email"]=$FetchDatabasePeople["email"];
     $arrayDatabase["add1"]=$FetchDatabaseAddress["address1"];
     $arrayDatabase["add2"]=$FetchDatabaseAddress["address2"];
     $arrayDatabase["city"]=$FetchDatabaseAddress["city"];
     $arrayDatabase["state"]=$FetchDatabaseAddress["state"];
     $arrayDatabase["zip"]=$FetchDatabaseAddress["zip"];
     $arrayDatabase["phone"]=$FetchDatabaseAddress["phone"];
     echo json_encode($arrayDatabase);
?>