<?php
include("ini/head.php");
include("ini/before_login.php");
if($_REQUEST["mode"]=="user_login")
{
    check_login();
}
?>



    <div class="login_area">
        <div class="login_head clearfix">
            Login
            <span><a href="codesselect.php"><img src="rawhtml/images/cross.png" alt=""></a></span>
        </div>
        <div class="socila_btn">
            <a href="#" id="loginBtn"><img src="rawhtml/images/fb_btn.png" alt=""></a>
            <a href="#" id="gp_login" onclick="googleAuth()"><img src="rawhtml/images/google_btn.png" alt=""></a>
        </div>
        <div class="frm_area">
            <form action="" name="userlogin" id="userlogin" method="post">
            
                <input type="hidden" name="mode" id="mode" value="social_login">
                <label>Email</label>
                <input name="email" id="email" class="name_fld" type="text">
                <label>Password</label>
                <input name="password" id="password" class="name_fld" type="password">
                <div class="checkbox">
                    <input type="checkbox" id="cb1" name="cb" value="">
                    <label for="cb1">Remember me</label><br>
                </div>
                <div class="try text-center"><a href="javascript:void(0)" class="loginuser">Sign In</a></div>
                <div class="paswrd_area clearfix">
                    <a href="signup.php" class="pull-left">Sign Up</a>
                    <a href="#" class="pull-right">Forgot Password?</a>
                </div>
            </form>
        </div>
    </div>
<?php
function check_login()
{
    $email = $_REQUEST['email'];
    $password = $_REQUEST['password'];
    $epassword = md5($password);
    $query = mysql_query("select * from people where email='" . $email . "' and password='".$epassword."' and status=1");
    $num_rows = mysql_num_rows($query);
    if ($num_rows > 0) {
        $row = mysql_fetch_array($query);
            $id=$row['id'];
            navigation_message(SITEURL . "codesselect.php?userid=" . $id, "You have successfully logged in", "0");
    }
    else
    {
        navigation_message(SITEURL . "login.php", "The email or password was wrong!", "1");
    }
}

include("ini/footer.php");
?>