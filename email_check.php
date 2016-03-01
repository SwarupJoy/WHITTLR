
<?php
	 include("config/define.php");
	  $email=urldecode($_REQUEST['email']);
	 
	 $peoplequery=mysql_query("select * from people where email='".$email."'");
	 $peoplenum=mysql_num_rows($peoplequery);
	 if($peoplenum>0)
	 {
		echo "1";
	 }
		
	?>