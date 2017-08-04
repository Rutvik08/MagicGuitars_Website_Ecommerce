<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<!--
	Name: Desai, Rutvik
	Class Account#: jadrn010
	Project #2
-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache, no-store">
    <meta http-equiv="Expires" CONTENT="-1">
    <title>Magic Guitars</title>
    <link rel="stylesheet" href="/jadrn010/css/login.css">
    <script src="/jquery/jquery.js"></script>
    <script src="/jquery/jQueryUI.js"></script>
    <script src="/jadrn010/js/ajax_get_lib.js"></script>
    <script src="/jadrn010/js/login.js"></script>
</head>
<body>
    <div id="loginPage">
        <div class="company_name">Magic Guitars</div>
        <div class="login_page">
            <form class="login_form" method="post" action="/jadrn010/servlet/Login">
                <div class="form">
                    <input type="text" name="user" id="user" placeholder="username" autofocus required/>
                    <input type="password" name="password" id="pass" placeholder="password" required/>
                    <input class="clear_button" type="reset" id="loginReset" value="Reset" />
                    <input type="submit" class="login_button button" value="Login" id="login" />
                </div>
                <div id="loginStatus">You are now Logged out!</div>
            </form>
        </div>
    </div>
</body>
</html>
