
var site_url= "http://esolz.co.in/lab3/chrome/";

$(document).ready(function(){
    $(".registerUser").click(function(e){
            var existemail=0;
            if ($.trim($("#fname").val()) == "")
            {
                $("#fname").css({"border" :"1px solid #8A0808"});
                $("#fname").focus();
                return false;
            }
            else
            {
                 $("#fname").removeAttr("style");
            }
            if ($.trim($("#lname").val()) == "") {
                $("#lname").css({"border" :"1px solid #8A0808"});
                $("#lname").focus();
                return false;
            }
            else
            {
                 $("#lname").removeAttr("style");
            }
            if ($.trim($("#email").val()) == "") {
                $("#email").css({"border" :"1px solid #8A0808"});
                $("#email").focus();
                return false;
            }
            else
            {
                 $("#email").removeAttr("style");
            }
            if (!emailValid($("#email").val())) {
                $("#email").css({"border" :"1px solid #8A0808"});
                $("#email").focus();
                return false;
            }
            else
            {
                var email=$("#email").val();
                //alert(site_url);
                //return false;
                $.ajax({
                        url: site_url+"email_check.php",
                        async: false,
                        data: { email: email },
                        success: function (response)
                        {
                            //console.log(response);
                            //alert(response);
                            if (response==1)
                            {
                        //alert('if');
                                alert("Email address already exist, try with another email address");
                                $("#email").css({"border" :"1px solid #8A0808"});
                                $("#email").focus();
                                existemail=1;
                                return false;
                            }
                            else
                            {
                                $("#email").removeAttr("style");
                                existemail=0;
                                if (existemail==1) {
                                    return false;
                                }
                                if (existemail==0) {
                                    if ($.trim($("#password").val()) == "")
                                    {
                                        $("#password").css({"border" :"1px solid #8A0808"});
                                        $("#password").focus();
                                        return false;
                                    }
                                    else
                                    {
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
    
    
});