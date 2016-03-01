<?php
	include("ini/head.php");
	include("ini/menu_after_log_in.php");
?>

    
    <div class="login_area">
    	<div class="login_head clearfix">
        	<div class="pull-left">
                My account
                <div class="sml_txt">Personal Information</div>
            </div>
            <span><a href="coupon.php"><img src="rawhtml/images/cross.png" alt=""></a></span>
        </div>
        <div class="frm_area my_account">
        	<label>First Name</label>
            <input name="" class="name_fld" type="text">
        	<label>Last Name</label>
            <input name="" class="name_fld" type="text">
            <label>City</label>
            <input name="" class="name_fld" type="text">
            <div class="state_fld clearfix">
            	<div class="state">
                    <label>State</label>
                    <input name="" class="name_fld" type="text">
                </div>
                <div class="zip">
                    <label>Zip Code</label>
                    <input name="" class="name_fld" type="text">
                </div>
            </div>
            <label>Phone Number</label>
            <input name="" class="name_fld" type="text">
            <div class="try text-center"><a href="#">Update</a></div>
        </div>
    </div>
	<?php
		include("ini/footer.php");
	?>