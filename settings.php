<?php
	include("ini/head.php");
	include("ini/menu_after_log_in.php");
	$id =$_REQUEST['userid'];
	if($_REQUEST["mode"] == "Update"){
		User_update();
	}
	//$Query =("SELECT people.*,address.address1,address.address2,address.city,address.state,address.zip,address.phone FROM (people,address) where people.id = ".$id." and address.userid = people.id");
	////echo $Query;die;
	//$getQuery = mysql_query($Query);
	//while($row = mysql_fetch_array($getQuery))
	//{
	//	$first_name= $row['first_name'];
	//	$last_name= $row['last_name'];
	//	$address1= $row['address1'];
	//	$address2= $row['address2'];
	//	$city= $row['city'];
	//	$state= $row['state'];
	//	$zip= $row['zip'];
	//	$phone= $row['phone'];
	//}
?>
<div class="login_area">
    	<div class="login_head clearfix">
        	<div class="pull-left">
			My account
			<div class="sml_txt">Personal Information</div>
          </div>
          <span><a href="coupon.php"><img src="rawhtml/images/cross.png" alt=""></a></span>
     </div>
	<form action="" name="userUpdate" id="userUpdate" method="post">
		<input type="hidden" name="mode" id="mode" value="Update">
		<input type="hidden" name="userid" id="userid" value="">
		<div class="frm_area my_account">
			<div>
				<label>First Name<span style="color:red">*</span></label>
				<input class="name_fld" type="text" name="fname" value="" id="fname" maxlength="25" autocomplete=off>
				<div id="fname_error" class="error_div" style="color:red;"></div>
			</div>
			<div>
				<label>Last Name<span style="color:red">*</span></label>
				<input class="name_fld" type="text" name="lname" value="" id="lname" maxlength="25" autocomplete=off>
				<div id="lname_error" class="error_div" style="color:red;"></div>
			</div>
			<!--<label>Email</label>
			<input class="name_fld" type="text" name="email" value="" id="email" maxlength="70" autocomplete=off>-->
			<div>
				<label>Address Line1</label>
				<input class="name_fld" type="text" name="add1" value="" id="add1" maxlength="50" autocomplete=off>
				<div id="add1_error" class="error_div" style="color:red;"></div>
			</div>
			<div>
				<label>Address Line2</label>
				<input class="name_fld" type="text" name="add2" value="" id="add2" maxlength="50" autocomplete=off>
			</div>
			<div>
				<label>City</label>
				<input class="name_fld" type="text" name="city" value="" id="city" maxlength="50" autocomplete=off>
				<div id="city_error" class="error_div" style="color:red;"></div>
			</div>
			<div class="state_fld clearfix">
				<div class="state">
					<label>State</label>
					<input class="name_fld" type="text" name="state" value="" id="state" maxlength="50" autocomplete=off>
					<div id="state_error" class="error_div" style="color:red;"></div>
				</div>
				<div class="zip">
					<label>Zip Code</label>
					<input class="name_fld" type="text" name="zip" value="" id="zip" maxlength="10" autocomplete=off>
					<div id="zip_error" class="error_div" style="color:red;"></div>
				</div>
			</div>
			<div>
				<label>Phone Number</label>
				<input class="name_fld" type="text" name="contact" value="" id="contact" maxlength="10" autocomplete=off>
				<div id="contact_error" class="error_div" style="color:red;"></div>
			</div>
			<div class="try text-center">
				<a href="javascript:void(0)" class="update_userdetalis">Update</a>
			</div>
		</div>
	</form>
</div>
<?php
	function User_update()
	{
		//echo $_REQUEST["email"];die;
		//echo $_REQUEST["userid"]." ".$_REQUEST["fname"]." ".$_REQUEST["lname"]." ".$_REQUEST["add1"]." ".$_REQUEST["add2"]." ".$_REQUEST["city"]." ".$_REQUEST["state"];die;
		$id=$_REQUEST["userid"];
		$query1 =("UPDATE people SET first_name = '".replaceThrash($_REQUEST["fname"])."', last_name = '".replaceThrash($_REQUEST["lname"])."' WHERE id = ".$id);
		//echo $query1;die;
		$updatepeople=mysql_query($query1);
		if($updatepeople)
		{
			//echo "hi";die;
			$addressquery=mysql_query("select * from address where userid='".$id."'");
			$peoplenum=mysql_num_rows($addressquery);
			if($peoplenum>0)
			{
			    $updataddress = mysql_query("UPDATE address SET address1 = '".replaceThrash($_REQUEST["add1"])."',address2 ='".replaceThrash($_REQUEST["add2"])."',city ='".replaceThrash($_REQUEST["city"])."',state = '".replaceThrash($_REQUEST["state"])."',zip = '".replaceThrash($_REQUEST["zip"])."',phone = '".replaceThrash($_REQUEST["contact"])."' WHERE userid = ".$id);
			}
			else{
				//echo "hi";die;
				//$Query2=("insert into address set userid = '".$id."' address1 = '".replaceThrash($_REQUEST["add1"])."',address2 = '".replaceThrash($_REQUEST["add2"])."',city = '".replaceThrash($_REQUEST["city"])."',state = '".replaceThrash($_REQUEST["state"])."',zip = '".replaceThrash($_REQUEST["zip"])."',phone = '".replaceThrash($_REQUEST["contact"]."'"));
				$Query2=("insert into address (userid,address1,address2,city,state,zip,phone) VALUES ('".$id."','".replaceThrash($_REQUEST["add1"])."','".replaceThrash($_REQUEST["add2"])."','".replaceThrash($_REQUEST["city"])."','".replaceThrash($_REQUEST["state"])."','".replaceThrash($_REQUEST["zip"])."','".replaceThrash($_REQUEST["contact"])."')");
				//echo $Query2;die;
				$updataddress=mysql_query($Query2);
			}
			if($updataddress){
				navigation_message(SITEURL . "settings.php", "Data successfully updated.", "0");
			}
			else{
				navigation_message(SITEURL . "settings.php", "Failed to update data.", "1");
			}
		}
		else{
			navigation_message(SITEURL . "settings.php", "Failed to update data.", "1");
		}
	}
	include("ini/footer.php");
?>