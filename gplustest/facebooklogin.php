<body style="background:  rgba(0,0,0,.7);color: #ccc">
<button id="loginBtn">Facebook Login</button>
<div id="response"></div>
<script type="text/javascript">
    function getUserData() {
        FB.api('/me?fields=id,first_name,last_name,email,gender,locale,picture,birthday', function (response) {
            console.log(response.first_name);
            document.getElementById('response').innerHTML = 'Hello ' + response.first_name;
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
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                //user is authorized
                document.getElementById('loginBtn').style.display = 'none';
                getUserData();
            } else {
                //user is not authorized
            }
        });
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
    document.getElementById('loginBtn').addEventListener('click', function () {
        //do the login
        FB.login(function (response) {
            if (response.authResponse) {
                //user just authorized your app
                document.getElementById('loginBtn').style.display = 'none';
                getUserData();
            }
        }, {scope: 'email,public_profile', return_scopes: true});
    }, false);

</script>
</body>