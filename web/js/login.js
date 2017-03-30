/**
 * Created by kyann.brown on 3/23/2017
 */
<!-- AJAX Post -->
function logOutButton() {

    var url = "api/logout_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        getLoginButton();
    });


}

function getLoginButton() {

    var url = "api/get_login_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        $('#getSessionResult').html(dataFromServer);

        if((dataFromServer.trim())===("You are not logged in."))
        {
            document.getElementById("logOutDiv").style.display = "none";
        } else {
            document.getElementById("logOutDiv").style.display = "block";
        }
    });
}

function loginButton() {

    var url = "api/login_servlet";

    //var loginKey = $("#sessionKey").val();
    var loginValue = $("#sessionValue").val();

    var dataToServer = {sessionValue : loginValue};

    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        //$("#sessionKey").val("");
        $("#sessionValue").val("");
        getLoginButton();

    });


}
button = $('#getLogin');
button.on("click", getLoginButton);

button = $('#login');
button.on("click", loginButton);


button = $('#logOut');
button.on("click", logOutButton);

getLoginButton();
