<?php
	include("ini/head.php");
?>


    <div class="sign_out_area">
    	<a href="login.php">Login</a>
        <span>or</span>
        <a href="signup.php">Sign Up</a>
    </div>
    
    <div class="login_area">
    	<div class="login_head clearfix">
        	Login
            <span><a href="coupon.php"><img src="rawhtml/images/cross.png" alt=""></a></span>
        </div>
        <div class="socila_btn">
        	<a href="#"><img src="rawhtml/images/fb_btn.png" alt=""></a>
            <a href="#"><img src="rawhtml/images/google_btn.png" alt=""></a>
        </div>
        <div class="frm_area">
        	<label>Email</label>
            <input name="" class="name_fld" type="text">
            <label>Password</label>
            <input name="" class="name_fld" type="text">
            <div class="checkbox">
                <input type="checkbox" id="cb1" name="cb" value="">
                <label for="cb1">Remember me</label><br>
			</div>
            <div class="try text-center"><a href="coupon.php">Sign In</a></div>
            <div class="paswrd_area clearfix">
            	<a href="signup.php" class="pull-left">Sign Up</a>
                <a href="#" class="pull-right">Forgot Password?</a>
            </div>
        </div>
    </div>
     <?php
		include("ini/footer.php");
	?>