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
    <title>Magic Guitars</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
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
</div>
<div id=searchDiv>
<button id="home">Home</button>
<button id="contact">Contact Us</button>
<button id="about">About us</button>
</div>
<div id="cartData" class="hidden"><div class="cartTable">
  <table id ="cartTableContent" class="cartTableContent">
    <tr class="cartContents">
          <th>Product Image</th><th>Manufacturing ID</th><th>Quantity</th><th>Product Cost</th>            
          <th></th>
      </tr>

<%
      for(int i=0;i<sessionID.size();i++){
        double total=sessionID.get(i).getCost()*sessionID.get(i).getQuantity();
        sessionID.get(i).setTotal(total);
%>
<tr id="tableRow<%=sessionID.get(i).getSku()%>">
<td> <img src="<%=sessionID.get(i).getImage()%>" width="100px" height="100px"></td>
<td><%=sessionID.get(i).getManuID()%></td>
<td><input type="number" min=1 class="quantity"  id="quantity<%=sessionID.get(i).getSku()%>" value="<%=sessionID.get(i).getQuantity()%>">
<input type="button" value="Update" class="update" id="<%=sessionID.get(i).getSku()%>"></br>
<label class="error" id="err<%=sessionID.get(i).getSku()%>" name="error"></label></td>
<td id="cost<%=sessionID.get(i).getSku()%>" class="cost">$ <%=sessionID.get(i).getTotal()%></td>
<td><input type="button" value="Delete" class="delete" id="<%=sessionID.get(i).getSku()%>"></td>
</tr>
<%
}
%>
</table>
<table>
<tr><div id="sumCost" class="totalCost">Total Merchandise Cost:</div></tr>
<tr><div id="shipping" class="shipping">Shipping: $5</div></tr>
<tr><div id="tax" class="tax">Tax(8%): </div></tr>
<tr><div id="totalCost" class="totalCost">Total Amount:</div></tr>
</table>
<div id=cartButtons>
<input type="button" value="Continue Shopping" class="continue" id="continue">
<input type="button" value="Check Out Now" class="checkout" id="checkout">
</div>
</div>
			</div></div>
<div id="noData" class="hidden">
<h1>The Cart is Empty!</h1>
<input type="button" value="Continue Shopping" class="continue" id="continue">
<div>

</div>
</div>
</body>

</html>
