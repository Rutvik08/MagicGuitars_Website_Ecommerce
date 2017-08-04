// Name: Desai, Rutvik
// Class Account#: jadrn010
// Project #2

$(document).ready(function() {
    $("[name='username']").focus();

    $("#user").keyup(function(event) {
        if (event.keyCode == 13) {
            $("#login").click();
        }
    });
    $("#pass").keyup(function(event) {
        if (event.keyCode == 13) {
            $("#login").click();
        }
    });

    $("#loginReset").on('click', function(e) {
        document.getElementById("loginStatus").innerHTML = "";
    });

    $(':submit').on('click', function(e) {
        var username = document.getElementById('user').value;
        var password = document.getElementById('pass').value;
        if (!username && !password) {
            document.getElementById("loginStatus").innerHTML = "Enter Username and Password!";
            $("#user").focus();
            e.preventDefault();
        } else if (!username) {
            document.getElementById("loginStatus").innerHTML = "Enter Username!";
            $("#user").focus();
            e.preventDefault();
        } else if (!password) {
            document.getElementById("loginStatus").innerHTML = "Enter Password!";
            $("#pass").focus();
            e.preventDefault();
        } else {
            return;
        }
    });

});