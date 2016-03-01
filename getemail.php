<?php
     include("config/define.php");
     $email=$_REQUEST['email'];
     $id=$_REQUEST['id'];
	//echo $email."  ".$id;die;
	$query=("select * from people where email='".$email."' and id != '".$id."'");
	//echo $query;die;
     $peoplequery=mysql_query($query);
     //$FetchDatabaseAddress= mysql_fetch_array($peoplequery);
     $peoplenum=mysql_num_rows($peoplequery);
     if($peoplenum >0)
	{
		echo 1;
	}
	else{
		echo 0;
	}
	?>