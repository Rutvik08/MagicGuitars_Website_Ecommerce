<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<!--
	Name: Desai, Rutvik
	Class Account#: jadrn010
	Project #3
-->

<head>
<meta charset="utf-8">
<title>Magic Guitars-Contact Us</title>
<link rel="stylesheet" href="/jadrn010/css/shop.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="/jquery/jquery.js"></script>
    <script src="/jquery/jQueryUI.js"></script>
<script src="/jadrn010/js/shop.js"></script>
<script src="/jadrn010/js/cart.js"></script>


</head>
<body>
<%@ page import ="java.util.*" %>
<%@ page import ="sdsu.*" %>
<%
ArrayList<GetterSetter> sessionID = (ArrayList<GetterSetter>)session.getAttribute("items");
   %>
<div id="header">
  <h1 id="logo">Magic Guitars</h1>
<a id="myCart" href="servlet/ShowCart"> <img border="0"src="/~jadrn010/proj1/images/cart.png" style="width:80px; height:80px"></a>
</div>
<div id=searchDiv>
<button id="home">Home</button>
<button id="contact">Contact Us</button>
<button id="about">About us</button>
</div>
<div id="shippingData"><div id="shippingContent">
			<h2 class="shippingHeader">Shipping Information</h2>
			  <table id ="shippingTable" class="shippingTable">
  <tr>
<td><label>Name:* </label></td>
    <td><input    class="shippingText" id="nameS" type="text" placeholder="Enter full name"></td>
  </tr>
  <tr>
<td><label>Address 1:* </label></td>
    <td><input    class="shippingText" id="address1S" type="text" placeholder="Street Address"></td>
  </tr>
  <tr>
<td><label>Address 2:* </label></td>
    <td><input     class="shippingText" id="address2S" type="text" placeholder="Apartment number"></td>
  </tr>
  <tr>
<td><label>City:* </label></td>
    <td><input    class="shippingText" id="cityS" type="text" placeholder="City"></td>
  </tr>
  <tr>
<td><label>State:* </label></td>
    <td><input    class="shippingText" id="stateS" type="text" placeholder="State"></td>
  </tr>
  <tr>
<td><label>Country:* </label></td>
    <td><input    class="shippingText" id="countryS" type="text" placeholder="Country"></td>
  </tr>
  <tr>
<td><label>Zipcode:* </label></td>
    <td><input    class="shippingText" id="zipS" type="text" maxlength=5 placeholder="Zip"></td>
  </tr>
  <tr>
<td><label>Phone:* </label></td>
    <td><input    class="shippingText" id="phoneS" maxlength=10 type="text" placeholder="Contact Phone"></td>
  </tr>
</table>

<label hidden="true" id="errorS" name="errorS">
		</div></div>
<div id="checkB"><input type="checkbox" id="sameAddress" >Select if billing address is same as shipping address!<br></div>
<div id="billingData"><div id="billingContent">
			<h2 class="billingHeader">Billing Information</h2>
			  <table id ="billingTable" class="billingTable">
  <tr>
<td><label>Name:* </label></td>
    <td><input  class="billingText" id="nameB" type="text" placeholder="Enter full name"></td>
  </tr>
  <tr>
<td><label>Address 1:* </label></td>
    <td><input  class="billingText" id="address1B" type="text" placeholder="Street Address"></td>
  </tr>
  <tr>
<td><label>Address 2:* </label></td>
    <td><input   class="billingText" id="address2B" type="text" placeholder="Apartment number"></td>
  </tr>
  <tr>
<td><label>City:* </label></td>
    <td><input  class="billingText" id="cityB" type="text" placeholder="City"></td>
  </tr>
  <tr>
<td><label>State:* </label></td>
    <td><input  class="billingText" id="stateB" type="text" placeholder="State"></td>
  </tr>
  <tr>
<td><label>Country:* </label></td>
    <td><input    class="billingText" id="countryB" type="text" placeholder="Country"></td>
  </tr>
  <tr>
<td><label>Zipcode:* </label></td>
    <td><input  class="billingText" id="zipB" type="text" maxlength=5 placeholder="Zip"></td>
  </tr>
  <tr>
<td><label>Phone:* </label></td>
    <td><input  class="billingText" id="phoneB" maxlength=10 type="text" placeholder="Contact Phone"></td>
  </tr>
</table><label hidden="true" id="errorB" name="errorB">
		</div></div>
<div id="checkB"></div>
<div id="payData"><div id="payContent">
			<h2 class="payHeader">Payment Information</h2>
			<table id="payTable" class="payTable">
<tr>

<td>Payment Method:*</td>
<td><input type="radio" id="r1" value="Debit Card" checked>Debit Card <input type="radio" value="Credit Card"  id="r2"> Credit Card</td></tr>
            <tr>

<td>Card Number:*</td>
                <td><input type="text" id="card" maxlength="16" class="billingText" placeholder="XXXXXXXXXXXXXXXX" colspan="2"></td></tr>	
            <tr>
<td>Expiration Date:*</td>
<td>  <select id="mon">
<option>MM</option>
                                      <option>1(Jan)</option>
                                      <option>2(Feb)</option>
                                      <option>3(Mar)</option>
                                      <option>4(Apr)</option>
                                      <option>5(May)</option>
                                        <option>6(Jun)</option>
                                        <option>7(Jul)</option>
                                        <option>8(Aug)</option>
                                        <option>9(Sep)</option>
                                        <option>10(Oct)</option>
                                        <option>11(Nov)</option>
                                        <option>12(Dec)</option>
                                    </select>

                                    <select id="year">
                                        <option>YYYY</option>
                                          <option>2014</option>
                                          <option>2015</option>
                                          <option>2016</option>
                                          <option>2017</option>
                                          <option>2018</option>
                                          <option>2019</option>
                                          <option>2020</option>
                                          <option>2021</option>
                                          <option>2021</option>
                                          <option>2022</option>
                                          <option>2023</option>
                                          <option>2024</option>
                                          <option>2025</option>
                                          <option>2026</option>
                                          <option>2027</option>
                                          <option>2028</option>
                                          <option>2029</option>
                                          <option>2030</option>

                                    </select></td>
                <td>Security Code:*<input type="text" id="sc" placeholder="XXX" size="3" class="billingText" maxlength="3" /></td>

</tr>
</table><label hidden="true" id="errorC" name="errorC">

		</div></div>
<div id=cartButtons>
<input type="button" value="Continue" class="details" id="continueB">
<input type="button" value="Cancel" class="details" id="cancel">
</div>
</div>
</div>
</div>
</body>
</html>
