$(document).ready(function(){
    $(".registerUser").click(function(e){
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
                 $("#email").removeAttr("style");
            }
            if ($.trim($("#password").val()) == "") {
                $("#password").css({"border" :"1px solid #8A0808"});
                $("#password").focus();
                return false;
            }
            else
            {
                 $("#password").removeAttr("style");
            }
            document.getElementById("registerSignup").submit();
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