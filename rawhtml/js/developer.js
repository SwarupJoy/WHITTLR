var site_url = "https://aldenteapp.com/chrome/";
/////IF LOGIN THEN KICK OUT ////

var pageURL = window.location.href ;
var userLocalID=localStorage.id;
if (  ((typeof userLocalID!="undefined") && (userLocalID>0)) && (pageURL.indexOf("login.php") != "-1" || pageURL.indexOf("signup.php")!="-1")) {
    //code
    window.location=site_url+"codesselect.php";
}
if (  ((typeof userLocalID=="undefined") || (userLocalID<=0)) && (pageURL.indexOf("codesselect.php")!="-1")) {
    $('#purchasenavi').attr('href',"login.php");
}
if (  ((typeof userLocalID!="undefined") && (userLocalID>0)) && (pageURL.indexOf("settings.php")!="-1")) {
    //alert("hi");
    $(document).ready(function () {
        //alert(userLocalID);
        //alert(site_url + "getuserdetails.php");
        $.ajax({
            url: site_url + "getuserdetails.php",
            data:{userid:userLocalID},
            async: true,
            success:function(response){
                var usrinfo=$.parseJSON(response);
                console.log(usrinfo);
                $("#fname").val(usrinfo['first_name']);
                $("#lname").val(usrinfo['last_name']);
                //$("#email").val(usrinfo['email']);
                $("#add1").val(usrinfo['add1']);
                $("#add2").val(usrinfo['add2']);
                $("#city").val(usrinfo['city']);
                $("#state").val(usrinfo['state']);
                $("#zip").val(usrinfo['zip']);
                $("#contact").val(usrinfo['phone']);
                $("#userid").val(userLocalID);
            }        
        });
    });  
    $(document).ready(function () {//address update
        $(".update_user").click(function(e){
            //alert(add1);
            //alert('hi');
            $.ajax({
                url: site_url + "address.php",
                async: false,
                type: 'post',
                data:{userid:userLocalID,add1:add1,add2:add2,city:city,state:state,zip:zip,contact:contact},
				success:function(response){
                    console.log(response);
                    //if (response==success) {
                    //    
                    //    //alert('hello');
                    //    //window.location=site_url+"address.php";
                    //}   
                }        
            });
        })
    });
}


//////// END ////////


///////Login sesstion //////

var User_id = getQueryVariable("userid");
if ((typeof User_id!="undefined") && (User_id>0)) {
    localStorage.id = User_id;
    
}

if ((typeof localStorage.id == "undefined") || (localStorage.id=="")) {
    $("#afterlogin_menu").attr("style","display:none");
    $("#beforelogin_menu").attr("style","display:block");
    setTimeout(function(){$(".m_success").fadeOut("slow");},2000);
    setTimeout(function(){$(".m_error").fadeOut("slow");},2000);
}
else
{
    $("#afterlogin_menu").attr("style","display:block");
    $("#beforelogin_menu").attr("style","display:none");
    setTimeout(function(){$(".m_success").fadeOut("slow");},2000);
    setTimeout(function(){$(".m_error").fadeOut("slow");},2000);
}
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  } 
  //alert('Query Variable ' + variable + ' not found');
}
////////End Login sesstion //////


//////For Signup process///////
$(document).ready(function () {
    //alert(localStorage.id);
    if ((typeof localStorage.id !="undefined") && (localStorage.id>0))
    {
            $.ajax({
                url: site_url+"ajax_page/pullInformation.php",
                data : {"userid" :localStorage.id},
                sync : true,
                success : function(suc){
                    //console.log(suc);  
                    var arInfo=$.parseJSON(suc);
                    //alert(arInfo["first_name"]);
                    $("#name_sec").html("Welcome "+arInfo["first_name"]);
                }
            });
    }
    $(".registerUser").click(function (e) {
        var existemail = 0;
        if ($.trim($("#fname").val()) == "") {
            $('#fname_error').html('Please Enter First Name');
            $("#fname").css({"border": "1px solid #8A0808"});
            $("#fname").focus();
            return false;
        }
        else {
            $('#fname_error').html('');
            $("#fname").removeAttr("style");
        }
        if ($.trim($("#lname").val()) == "") {
            $('#lname_error').html('Please Enter Last Name');
            $("#lname").css({"border": "1px solid #8A0808"});
            $("#lname").focus();
            return false;
        }
        else {
            $('#lname_error').html('');
            $("#lname").removeAttr("style");
        }
        if ($.trim($("#email").val()) == "") {
            $('#email_error').html('Please Enter Email');
            $("#email").css({"border": "1px solid #8A0808"});
            $("#email").focus();
            return false;
        }
        else {
            $('#email_error').html('');
            $("#email").removeAttr("style");
        }
        if (!emailValid($("#email").val())) {
            $('#email_error').html('Please Enter Valid Email');
            $("#email").css({"border": "1px solid #8A0808"});
            $("#email").focus();
            return false;
        }
        else {
            var email = $("#email").val();
            //alert(site_url);
            //return false;
            $.ajax({
                url: site_url + "email_check.php",
                async: false,
                data: {email: email},
                success: function (response) {
                    //console.log(response);
                    //alert(response);
                    if (response == 1) {
                        //alert('if');
                        //alert("Email address already exist, try with another email address");
                        $('#email_error').html('Email address already exist, try with another email address');
                        $("#email").css({"border": "1px solid #8A0808"});
                        $("#email").focus();
                        existemail = 1;
                        return false;
                    }
                    else {
                        $('#email_error').html('');
                        $("#email").removeAttr("style");
                        existemail = 0;
                        if (existemail == 1) {
                            return false;
                        }
                        if (existemail == 0) {
                            //if ($.trim($("#password").val()) == "") {
                            //    $('#password_error').html('Please Enter Password');
                            //    $("#password").css({"border": "1px solid #8A0808"});
                            //    $("#password").focus();
                            //    return false;
                            //}
                            //else {
                            //    $("#password").removeAttr("style");
                            //}
                            if($.trim($('#password').val())=='' || $.trim($('#password').val())==0)
                            {
                                $('#password_error').html('Please Enter Password');
                                //$('#first_name').css('border-color','red');
                                $('#password').focus();
                                return false;
                            }
                            else {
                                $('#password_error').html('');
                                $("#password").removeAttr("style");
                            }
                            //if(/^[A-Z0-9- ]*$/.test(document.getElementById('password').value) == true){
                            //    $('#password_error').html('Letters, Numbers, and a Special Character(_) are required.');
                            //    //$('#first_name').css('border-color','red');
                            //    $('#password').focus();
                            //    return false;
                            //}
                            //else {
                            //    $('#password_error').html('');
                            //    $("#password").removeAttr("style");
                            //}
                            if($.trim($('#password').val().length)<7)
                            {
                                $('#password_error').html('Password must be 7 digits');
                                //$('#first_name').css('border-color','red');
                                $('#password').focus();
                                return false;
                            }
                            else {
                                $('#password_error').html('');
                                $("#password").removeAttr("style");
                            }
                            if($.trim($('#confirmed_password').val())=='' || $.trim($('#confirmed_password').val())==0)
                            {
                                $('#confirmed_password_error').html('Please Re Enter Password');
                                //$('#first_name').css('border-color','red');
                                $('#confirmed_password').focus();
                                return false;
                            }
                            else {
                                $('confirmed_password_error').html('');
                                $("#confirmed_password").removeAttr("style");
                            }
                            if($.trim($('#password').val()) != $.trim($('#confirmed_password').val())) {
                                $('#confirmed_password_error').html('Confirmed Password not match with password');
                                //$('#first_name').css('border-color','red');
                                $('#confirmed_password').focus();
                                return false;
                            }
                            else {
                                $('#confirmed_password_error').html('');
                                $("#confirmed_password").removeAttr("style");
                            }
                        }
                        document.getElementById("registerSignup").submit();
                    }
                }
            });
        }
    });
    $(".update_userdetalis").click(function (e) {
        //alert(userLocalID);
        existemail=0;
        if ($.trim($("#fname").val()) == "") {
            $('#fname_error').html('Please enter first name');
            $("#fname").css({"border": "1px solid #8A0808"});
            $("#fname").focus();
            return false;
        }
        else {
            $('#fname_error').html('');
            $("#fname").removeAttr("style");
        }
        if ($.trim($("#lname").val()) == "") {
            $('#lname_error').html('Please enter last name');
            $("#lname").css({"border": "1px solid #8A0808"});
            $("#lname").focus();
            return false;
        }
        else {
            $('#lname_error').html('');
            $("#lname").removeAttr("style");
        }
        if ($.trim($("#add1").val()) == "") {
            $('#add1_error').html('Please enter address1');
            $("#add1").css({"border": "1px solid #8A0808"});
            $("#add1").focus();
            return false;
        }
        else {
            $('#add1_error').html('');
            $("#add1").removeAttr("style");
        }
        if ($.trim($("#city").val()) == "") {
            $('#city_error').html('Please enter city');
            $("#city").css({"border": "1px solid #8A0808"});
            $("#city").focus();
            return false;
        }
        else {
            $('#city_error').html('');
            $("#city").removeAttr("style");
        }
        if ($.trim($("#state").val()) == "") {
            $('#state_error').html('Please enter state');
            $("#state").css({"border": "1px solid #8A0808"});
            $("#state").focus();
            return false;
        }
        else {
            $('#state_error').html('');
            $("#state").removeAttr("style");
        }
        if ($.trim($("#zip").val()) == "") {
            $('#zip_error').html('Please enter zip');
            $("#zip").css({"border": "1px solid #8A0808"});
            $("#zip").focus();
            return false;
        }
        else {
            $('#zip_error').html('');
            $("#zip").removeAttr("style");
        }
        var zip_length=document.getElementById('zip').value;
        if(/^[0-9- ]*$/.test(zip_length) == false) {
            $('#zip_error').html('Zip code should be numeric');
            //$('#first_name').css('border-color','red');
            $('#zip').focus();
            return false;
        }
        else{
            $('#zip_error').html('');
            $("#zip").removeAttr("style");
        }
       /// alert(zip_length);
        if(zip_length != "") {
           //// alert(zip_length.length);
            if(zip_length.length !="5" && zip_length.length <="5")
            {
                //alert("1");
                $('#zip_error').html('Zip code has to be either 5 or 9 digits');
                $('#zip').focus();
                return false;
            }
            else if (zip_length.length !="9") {
                //alert("2");
                if(zip_length.length=="5") {
                    //alert("3");
                    $('#zip_error').html('');
                    $("#zip").removeAttr("style");
                   /// return true;
                }
                else
                {
                    $('#zip_error').html('Zip code has to be either 5 or 9 digits');
                    $('#zip').focus();
                    return false;
                }
            }
            else {
                $('#zip_error').html('');
                $("#zip").removeAttr("style");
            }
        }
        if($.trim($("#contact").val()) == "") {
            $('#contact_error').html('Please enter contact number');
            $("#contact").css({"border": "1px solid #8A0808"});
            $("#contact").focus();
            return false;
        }
        else {
            $('#contact_error').html('');
            $("#contact").removeAttr("style");
        }
        var phn_len = document.getElementById('contact').value;
        if(phn_len != "") {
            if(phn_len.length<10)
            {
                $('#contact_error').html('Contact number should be 10 digits');
                $('#contact').focus();
                return false;
            }
            else {
                $('#contact_error').html('');
                $("#contact").removeAttr("style");
            }
        }
        if(/^[0-9- ]*$/.test(phn_len) == false) {
            $('#contact_error').html('Contact number should be numeric');
            //$('#first_name').css('border-color','red');
            $('#contact').focus();
            return false;
        }
        else{
            $('#contact_error').html('');
            $("#contact").removeAttr("style");
        }
        //if ($.trim($("#email").val()) == "") {
        //    $("#email").css({"border": "1px solid #8A0808"});
        //    $("#email").focus();
        //    return false;
        //}
        //else {
        //    $("#email").removeAttr("style");
        //}
        //if (!emailValid($("#email").val())) {
        //    $("#email").css({"border": "1px solid #8A0808"});
        //    $("#email").focus();
        //    return false;
        //}
        //else {
        //    $("#email").removeAttr("style");
        //}
        //if ($.trim($("#email").val()) != "") {
        //    var email = $("#email").val();
        //    $.ajax({
        //        url: site_url + "getemail.php",
        //        async: false,
        //        data: {email: email,id:localStorage.id},
        //        success: function (response) {
        //            //console.log(response);
        //            //alert(response);
        //            if (response == 1) {
        //                //alert('if');
        //                alert("Email address already exist, try with another email address");
        //                $("#email").css({"border": "1px solid #8A0808"});
        //                $("#email").focus();
        //                existemail = 1;
        //                return false;
        //            }
        //            else {
        //                existemail=0;
        //                $("#email").removeAttr("style");
        //            }
        //        }
        //    });
        //}
        //if (existemail==0) {
           document.getElementById("userUpdate").submit();
        //}
    });
    function emailValid(sEmail) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(sEmail)) {
            return true;
        }
        else {
            return false;
        }
    }
    $(".logClick").on("click",function(){
        localStorage.id="";
        window.location=site_url+"login.php";
    });
});
//////End of Signup process//////

//////For Login Process///////
$(document).ready(function () {

    $(".loginuser").click(function (e) {
        var has_error = 0;
        if ($.trim($("#email").val()) == "") {
            $('#email_error').html('Please enter email');
            $("#email").css({"border": "1px solid #8A0808"});
            $("#email").focus();
            has_error++;
            return false;
        }
        else {
            $('#email_error').html('');
            $("#email").removeAttr("style");
        }
        if (!emailValid($("#email").val())) {
            $('#email_error').html('Please enter valid email');
            $("#email").css({"border": "1px solid #8A0808"});
            $("#email").focus();
            has_error++;
            return false;
        }
        else {
            $('#password_error').html('');
            $("#email").removeAttr("style");
        }
        if ($.trim($("#password").val()) == "") {
            $('#password_error').html('Please enter password');
            $("#password").css({"border": "1px solid #8A0808"});
            $("#password").focus();
            has_error++;
            return false;
        }
        else {
            $('#password_error').html('');
            $("#password").removeAttr("style");
        }
        if (has_error == 0) {
            var email = $("#email").val();
            var password = $("#password").val();
            //console.log('before ajax');
            document.getElementById("mode").value="user_login";
            document.getElementById("userlogin").submit();

        }
    });
    function emailValid(sEmail) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(sEmail)) {
            return true;
        }
        else {
            return false;
        }
    }


});


//////End of Login Process///////


//////Google plus login//////

function gPOnLoad() {
    // G+ api loaded
    try
    {
        document.getElementById('gp_login').style.display = 'block';
    }
    catch(e)
    {
        
    }
}
function googleAuth() { //for credentials details
    gapi.auth.signIn({
        callback: gPSignInCallback,
        clientid: "685433537093-4jf3u5ogm411ksfr6c6qgslke5p5fuv8.apps.googleusercontent.com",
        cookiepolicy: "single_host_origin",
        requestvisibleactions: "http://schema.org/AddAction",
        scope: "https://www.googleapis.com/auth/plus.login email"
    })
}

function gPSignInCallback(e) {
    //alert("hi"+e);
//    console.log(e);
    //return false;
    if (e["status"]["signed_in"]) {
        gapi.client.load("plus", "v1", function () {
            if (e["access_token"]) {

                getProfile();
            } else if (e["error"]) {
                console.log("There was an error");
            }
        })
    } else {
        console.log("Sign-in state: ");
    }
}

function getProfile() {//Getting Profile Data

    var e = gapi.client.plus.people.get({
        userId: "me"
    });

    e.execute(function (e) {

        if (e.error) {
            console.log(e.message);
            return
        } else if (e.id) {
            // save profile data
            console.log(e);
            var first_name = e.result.name.givenName;
            var last_name = e.result.name.familyName;
            var gplus_id = e.id;
            var email = e.emails[0].value;
            console.log(first_name);
            console.log(last_name);
            console.log(gplus_id);
            console.log(email);
            $.ajax({
                url: site_url + "gpluscheck.php",
                async: false,
                data: {email: email, gplus_id: gplus_id},
                success: function (response) {
                    //console.log(response);
                    //alert(response);
                    //console.log(response);
                    if (response) {
                        //alert('if');
                        window.location = site_url + "codesselect.php" + '?' + 'userid=' + response;
                        //return false;
                    }
                    else {
                        $.ajax({
                            url: site_url + "gplusdata.php",
                            async: false,
                            data: {first_name: first_name, last_name: last_name, gplus_id: gplus_id, email: email},
                            success: function (response) {
                                //console.log(response);
                                if (response) {
                                    alert('You are successfully signed up');
                                    //window.location="http://esolz.co.in/lab3/chrome/coupon.php"+'?'+'userid='+response;
                                    window.location = site_url + "codesselect.php" + '?' + 'userid=' + response;

                                    //document.getElementById("registerSignup").submit();
                                }
                            }
                        });

                    }

                }
            });

        }
    })
}
if ((typeof localStorage.id=="undefined") || (localStorage.id=="")) {
        (function () {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        })();
}


/////End Google Plus Login//////


/////////Facebook Login////////
function getUserData() {
    FB.api('/me?fields=id,first_name,last_name,email,gender,locale,picture,birthday', function (response) {
        console.log(response);
        var fb_id = response.id;

        var first_name = response.first_name;
        var last_name = response.last_name;
        var fb_email = response.email;
        console.log(fb_email);
        console.log(fb_id);
        $.ajax({
            url: site_url + "fbcheck.php",
            async: false,
            data: {fb_email: fb_email, fb_id: fb_id},
            success: function (response) {
                //console.log(response);
                //alert(response);
                //console.log(response);
                if (response) {
                    //alert('if');
                    window.location = site_url + "codesselect.php" + '?' + 'userid=' + response;
                    //return false;
                }
                else {
                    $.ajax({
                        url: site_url + "fbdata.php",
                        async: false,
                        data: {first_name: first_name, last_name: last_name, fb_id: fb_id, fb_email: fb_email},
                        success: function (response) {
                            //console.log(response);
                            if (response) {
                                alert('You are successfully signed up');
                                //window.location="http://esolz.co.in/lab3/chrome/coupon.php"+'?'+'userid='+response;
                                window.location = site_url + "codesselect.php" + '?' + 'userid=' + response;

                                //document.getElementById("registerSignup").submit();
                            }
                        }
                    });

                }

            }
        });

    });
}

window.fbAsyncInit = function () {
    //SDK loaded, initialize it
    FB.init({
        appId: '488623324657327',
        xfbml: true,
        version: 'v2.2'
    });

    //check user session and refresh it
    //FB.getLoginStatus(function (response) {
    //    if (response.status === 'connected') {
    //        //user is authorized
    //        //document.getElementById('loginBtn').style.display = 'none';
    //        getUserData();
    //    } else {
    //        //user is not authorized
    //    }
    //});
};

//load the JavaScript SDK
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//add event listener to login button

if ((typeof localStorage.id=="undefined") || (localStorage.id==""))
{
    try
    {
        document.getElementById('loginBtn').addEventListener('click', function () {
            //do the login
            FB.login(function (response) {
                if (response.authResponse) {
                    getUserData();
                }
            }, {scope: 'email,public_profile', return_scopes: true});
        }, false);
    }
    catch(ex)
    {
        
    }
}
/////////End Facebook Login////////

////STICKY///
var heightPage=$(window).height();
var foot=$("#footsticky");
if(heightPage>=880)
{
    //alert("hi");
    foot.addClass("footSticky");
    $(".whittlr_panel").css({"height": heightPage+"px"});
}