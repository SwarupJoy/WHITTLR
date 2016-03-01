
		<?php
			include("ini/head.php");
			if($_REQUEST["mode"]=="insert_signup")
			{
				insert_signup();
			}
		?>





    <div class="sign_out_area">
    	<a href="login.php">Login</a>
        <span>or</span>
        <a href="signup.php">Sign Up</a>
    </div>
    
    <div class="login_area">
    	<div class="login_head clearfix">
        	Sign Up
            <span><a href="#"><img src="rawhtml/images/cross.png" alt=""></a></span>
        </div>
        <div class="socila_btn">
        	<a href="#" id="loginBtn" ><img src="rawhtml/images/fb_btn.png" alt=""></a>
            <a href="#" id="gp_login" onclick="googleAuth()"><img src="rawhtml/images/google_btn.png" alt=""></a>
        </div>
        <div class="frm_area">
		<form action="" name="registerSignup" id="registerSignup" method="post">
			<input type="hidden" name="mode" id="mode" value="insert_signup">
			<label>First Name</label>
			<input  class="name_fld" type="text" name="fname" id="fname" maxlength="25" autocomplete=off>
			<label>Last Name</label>
			<input  class="name_fld" type="text" name="lname" id="lname" maxlength="25" autocomplete=off>
			    <label>Email</label>
			<input class="name_fld" type="email" name="email" id="email" maxlength="50" autocomplete=off>
			<label>Password</label>
			<input class="name_fld" type="password" name="password" id="password" maxlength="20" autocomplete=off>
			<div class="checkbox">
			    <input type="checkbox" id="check" name="check" value="1">
			    <label for="check">Remember me</label><br>
				    </div>
			<div class="try text-center"><a href="javascript:void(0)" class="registerUser">Register</a></div>
			<div class="paswrd_area clearfix">
			    <span>
				    Already a member?
				    <a href="login.php">Sign In</a>
			    </span>
			</div>
		</form>
        </div>
    </div>
    
	<?php
		function insert_signup()
		{
			 $mysqlEmailRow=mysql_num_rows(mysql_query("select * from people where email = '".replaceThrash($_REQUEST["email"])."'"));
			if($mysqlEmailRow>0)
			{
				navigation_message(SITEURL."signup.php","The email address already exist, please try with other option","1");
			}
			else
			{
				$InsertQuery=mysql_query("insert into people set first_name='".replaceThrash($_REQUEST["fname"])."',last_name ='".replaceThrash($_REQUEST["lname"])."', email ='".replaceThrash($_REQUEST["email"])."',password='".md5(replaceThrash($_REQUEST["password"]))."', status=1" );
				$id= mysql_insert_id();
				navigation_message(SITEURL."coupon.php?userid=".$id,"You have successfully signed up.","0");
				
			}
		}
		include("ini/footer.php");
	?>


	