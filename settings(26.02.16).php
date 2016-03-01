<?php
	include("ini/head.php");
	include("ini/menu_after_log_in.php");

	if ($_REQUEST["mode"] == "Update") {
    User_update();
	}
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
        <div class="frm_area my_account">
        	<label>First Name</label>
            <input name="" class="name_fld" type="text">
        	<label>Last Name</label>
            <input name="" class="name_fld" type="text">
			<label>Address Line1</label>
            <input name="add1" class="name_fld" type="text">
			<label>Address Line2</label>
            <input name="add2" class="name_fld" type="text">
            <label>City</label>
            <input name="city" class="name_fld" type="text">
            <div class="state_fld clearfix">
            	<div class="state">
                    <label>State</label>
                    <input name="state" class="name_fld" type="text">
                </div>
                <div class="zip">
                    <label>Zip Code</label>
                    <input name="zip" class="name_fld" type="text">
                </div>
            </div>
            <label>Phone Number</label>
            <input name="contact" class="name_fld" type="text">
            <div class="try text-center"><a href="javascript:void(0)" class="update_user">Update</a></div>
        </div>
		 </form>
    </div>
	<?php
		include("ini/footer.php");
		
		function User_update(){
			//$value="(select * from address where userid=$id)";
			navigation_message(SITEURL . "settings.php");
		}
	?>