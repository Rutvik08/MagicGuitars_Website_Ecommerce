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

public class DataInsertMOut extends HttpServlet {

public void doPost(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {
    	processRequest(request, response);
	}

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException {
	processRequest(request, response);
  
} 

private void processRequest(HttpServletRequest request,
              HttpServletResponse response) 
                        throws IOException, ServletException {        
	PrintWriter out = response.getWriter();
 	String sku=request.getParameter("sku");
	String date=request.getParameter("date");
	String quantity=request.getParameter("quantity");
	int q = Integer.parseInt(quantity);
  	String result=DatabaseHandler.dataInsertMOut(sku,date,q);
	response.setContentType("text/html");
  	out.print(result);
        }       
}
