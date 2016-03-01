var site_url = "https://aldenteapp.com/chrome/";
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
    if ((typeof localStorage.id !="undefined") && (localStorage.id>0))
    {
            $.ajax({
                url: site_url+"ajax_page/pullInformation.php",
                data : {"userid" :localStorage.id},
                sync : true,
                success : function(suc){

                    var arInfo=$.parseJSON(suc);
                    $("#name_sec").html("Welcome "+arInfo["first_name"]);
                }
            });
    }
    $(".registerUser").click(function (e) {
        var existemail = 0;
        if ($.trim($("#fname").val()) == "") {
            $("#fname").css({"border": "1px solid #8A0808"});
            $("#fname").focus();
            return false;
        }
        else {
            $("#fname").removeAttr("style");
        }
        if ($.trim($("#lname").val()) == "") {
            $("#lname").css({"border": "1px solid #8A0808"});
            $("#lname").focus();
            return false;
        }
        else {
            $("#lname").removeAttr("style");
        }
        if ($.trim($("#email").val()) == "") {
            $("#email").css({"border": "1px solid #8A0808"});
            $("#email").focus();
            return false;
        }
        else {
            $("#email").removeAttr("style");
        }
        if (!emailValid($("#email").val())) {
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
                        alert("Email address already exist, try with another email address");
                        $("#email").css({"border": "1px solid #8A0808"});
                        $("#email").focus();
                        existemail = 1;
                        return false;
                    }
                    else {
                        $("#email").removeAttr("style");
                        existemail = 0;
                        if (existemail == 1) {
                            return false;
                        }
                        if (existemail == 0) {
                            if ($.trim($("#password").val()) == "") {
                                $("#password").css({"border": "1px solid #8A0808"});
                                $("#password").focus();
                                return false;
                            }
                            else {
                                $("#password").removeAttr("style");
                            }
                        }

                        document.getElementById("registerSignup").submit();
                    }

                }
            });
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
            $("#email").css({"border": "1px solid #8A0808"});
            $("#email").focus();
            has_error++;
            return false;
        }
        else {
            $("#email").removeAttr("style");
        }
        if (!emailValid($("#email").val())) {
            $("#email").css({"border": "1px solid #8A0808"});
            $("#email").focus();
            has_error++;
            return false;
        }
        else {
            $("#email").removeAttr("style");
        }
        if ($.trim($("#password").val()) == "") {
            $("#password").css({"border": "1px solid #8A0808"});
            $("#password").focus();
            has_error++;
            return false;
        }
        else {
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
            //console.log(first_name);
            //console.log(last_name);
            //console.log(gplus_id);
            //console.log(email);
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
                        window.location = site_url + "coupon.php" + '?' + 'userid=' + response;
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
                                    window.location = site_url + "coupon.php" + '?' + 'userid=' + response;

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
                    window.location = site_url + "coupon.php" + '?' + 'userid=' + response;
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
                                window.location = site_url + "coupon.php" + '?' + 'userid=' + response;

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