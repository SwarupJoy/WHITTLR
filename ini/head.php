<?php
include("config/define.php");
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />

		<title>WHITTLR</title>
        
        
		<meta name="description" content="" />
		<meta name="author" content="admin" />
		<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
	
		<link href="rawhtml/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
		<link href="rawhtml/css/bootstrap.css" rel="stylesheet" type="text/css"/>
		<link href="rawhtml/css/bootstrap-select.css" rel="stylesheet" type="text/css"/>
		    <link href="rawhtml/css/custom.css" rel="stylesheet" type="text/css" />
		<link href="rawhtml/css/developer.css" rel="stylesheet" type="text/css" />
		<link href="rawhtml/css/responsive.css" rel="stylesheet" type="text/css" />
	</head>
       <body>
		<div class="whittlr_panel">
			<div class="logo"><a href="#"><img src="rawhtml/images/logo.png" alt=""></a></div>
			<?php
			if($_SESSION["success_message"]!="")
			{
				?>
				<div class="m_success"><?php echo $_SESSION["success_message"];?></div>
				<?php
				unset($_SESSION["success_message"]);
			}
			else if($_SESSION["error_message"] !="")
			{
				?>
				<div class="m_error"><?php echo $_SESSION["error_message"];?></div>
				<?php
				unset($_SESSION["error_message"]);
			}
			?>