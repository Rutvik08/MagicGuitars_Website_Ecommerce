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
    <title>Magic Guitars</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <link rel="stylesheet" href="/jadrn010/css/tab.css">
    <script src="/jquery/jquery.js"></script>
    <script src="/jquery/jQueryUI.js"></script>
    <script src="/jadrn010/js/tab.js"></script>
    <script src="/jadrn010/js/inventory_received.js"></script>
    <script src="/jadrn010/js/inventory_out.js"></script>
</head>
<body>
    <%
        String user=(String)session.getAttribute("username");
        if(user==null){
            response.sendRedirect("/jadrn010/login.html");
        }
	       else{
            RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher("/WEB-INF/jsp/main.jsp");
        }
  %>
    <%@ page language="java" import="cal.*" %>
            <jsp:useBean id="date" scope="session" class="cal.TableBean" />
    <%
    date.processRequest(request);
   %>
                <div id="homePage">
                    <div id="head">
                        <div id="symbol">
                            <h1><a href="#" id="title">~ Magic Guitars ~</a></h1>
                        </div>
                        <div id="log">
                            <a href="#" id="logout">Logout Now</a>
                        </div>
                    </div>
                    <div class="tabs">
                        <ul class="tab_link">
                            <li class="active"><a href="#tab1">Inventory Received</a></li>
                            <li><a href="#tab2">Inventory Sent Out</a></li>
                        </ul>
                        <div class="tab_content">
                            <div id="tab1" class="tab active">
                                <form method="post" enctype="multipart/form-data" id="form1" name="dataForm" action="">
                                    <div>
                                        <h4>Welcome <%=user%></h4>
                                        <h2>Inventory Received</h2>
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Date:
                                                    <font color="red">*</font>
                                                </td>
                                                <td><input type="date" name="date" id="date" size="20" placeholder="mm/dd/yyyy" value=<%=date.getDate() %>></td>
                                                <td>
                                                    <div class="val" id="date_status"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>SKU:
                                                    <font color="red">*</font>
                                                </td>
                                                <td><input type="text" name="sku" id="sku" maxlength="7" size="20" placeholder="ABC-123" autofocus></td>
                                                <td>
                                                    <div class="val" id="sku_status"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Category:
                                                    <font color="red">*</font>
                                                </td>
                                                <td><input type="text" name="category" id="category" size="20" disabled></td>
                                                <td>
                                                    <div id="validation2" class="val"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Vendor:
                                                    <font color="red">*</font>
                                                </td>
                                                <td><input type="text" name="vendor" id="vendor" size="20" disabled></td>
                                                <td>
                                                    <div id="validation4" class="val"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Manufacturer's Identifier:
                                                    <font color="red">*</font>
                                                </td>
                                                <td><input type="text" name="manufacturer" id="manufacturer" size="20" disabled></td>
                                                <td>
                                                    <div id="validation5" class="val"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Product Image:
                                                </td>
                                                <td>
                                                    <div id="pic" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Quantity:
                                                    <font color="red">*</font>
                                                </td>
                                                <td><input type="text" name="quantity" id="quantity" size="20"></td>
                                                <td>
                                                    <div class="val" id="quantity_status"></div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td> <button class="clear_button" id="reset" type="reset">Reset</button>&nbsp &nbsp &nbsp
                                                    <button type="button" class="submit_button" id="submit" disabled>Submit Inventory</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div id="addTemp"></div>
                                </form>
                                <div id="addConf"></div>
                            </div>
                            <div id="tab2" class="tab">
                                <form method="post" enctype="multipart/form-data" id="form2" name="editForm" action="">
                                    <h4>Welcome <%=user%></h4>
                                    <h2>Inventory Sent Out</h2>
                                    <div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Date:
                                                        <font color="red">*</font>
                                                    </td>
                                                    <td><input type="date" name="edit_date" id="edit_date" size="20" placeholder="mm/dd/yyyy" value=<%=date.getDate() %>></td>
                                                    <td>
                                                        <div class="val" id="edit_date_status"></div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>SKU:
                                                        <font color="red">*</font>
                                                    </td>
                                                    <td><input type="text" name="edit_sku" id="edit_sku" maxlength="7" size="20" placeholder="ABC-123" autofocus></td>
                                                    <td>
                                                        <div id="edit_sku_status" class="val"></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Category:
                                                        <font color="red">*</font>
                                                    </td>
                                                    <td><input type="text" name="edit_category" id="edit_category" size="20" disabled></td>
                                                    <td>
                                                        <div id="edit_validation2" class="val"></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Vendor:
                                                        <font color="red">*</font>
                                                    </td>
                                                    <td><input type="text" name="edit_vendor" id="edit_vendor" size="20" disabled></td>
                                                    <td>
                                                        <div id="edit_validation4" class="val"></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Manufacturer's Identifier:
                                                        <font color="red">*</font>
                                                    </td>
                                                    <td><input type="text" name="edit_manufacturer" id="edit_manufacturer" size="20" disabled></td>
                                                    <td>
                                                        <div id="edit_validation5" class="val"></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Product Image:
                                                    </td>
                                                    <td>
                                                        <div id="edit_pic" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Quantity:
                                                        <font color="red">*</font>
                                                    </td>
                                                    <td><input type="text" name="edit_quantity" id="edit_quantity" size="20"></td>
                                                    <td>
                                                        <div class="val" id="edit_quantity_status"></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button class="clear_button" id="edit_reset" type="reset">Reset</button>&nbsp &nbsp &nbsp
                                                        <button type="button" class="button" id="edit_update" disabled>Submit Inventory</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div id="editConf"></div>
                                        <div id="temp"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
<div id="wait"></div>
</body>
</html>
