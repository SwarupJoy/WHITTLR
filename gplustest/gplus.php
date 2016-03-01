<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
<a id="gp_login" href="javascript:void(0)" onclick="googleAuth()">Login using Google</a>

<script>
function gPOnLoad(){
     // G+ api loaded
     document.getElementById('gp_login').style.display = 'block';
}
function googleAuth() {
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
        gapi.client.load("plus", "v1", function() {
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

function getProfile() {

    var e = gapi.client.plus.people.get({
        userId: "me"
    });

    e.execute(function(e) {

        if (e.error) {
            console.log(e.message);
            return
        } else if (e.id) {
            // save profile data
            console.log(e);
        }
    })
}(function() {
    var e = document.createElement("script");
    e.type = "text/javascript";
    e.async = true;
    e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t)
})()
</script>