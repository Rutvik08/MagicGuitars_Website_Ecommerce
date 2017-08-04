/*
	Name: Desai, Rutvik
	Class Account#: jadrn010
	Project #2
*/

import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;

public class QuantityCheck extends HttpServlet {
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException {
processRequest(request, response);
	
    	}

    public void doPost(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {
    	processRequest(request, response);
    }

    private void processRequest(HttpServletRequest request,
              HttpServletResponse response) 
                        throws IOException, ServletException {  
	String message ="";      
        PrintWriter out = response.getWriter();
	String sku = request.getParameter("sku");
	int quantity = Integer.parseInt(request.getParameter("quantity"));
	String query = "SELECT on_hand_quantity from on_hand WHERE sku=\"" + sku + "\"";
	Vector<String []> data = DBHelper.runQuery(query);
	response.setContentType("text/html");
	if(data.size() == 0){
		out.print("sku not found");}
	else{
	String str[]=data.elementAt(0);
        for(int i=0;i <str.length;i++){
          message += str[i];
        }
      	int quantityFromDB=Integer.parseInt(message);
	if(quantity > quantityFromDB)
		out.print("Invalid Quantity");
	else{
		out.print("Valid Quantity");
	}
	}
        }   
}