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

public class DuplicateCheck extends HttpServlet {
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
        PrintWriter out = response.getWriter();
	String sku = request.getParameter("sku");
	String query = "SELECT sku from product WHERE sku=\"" + sku + "\"";
	Vector<String []> data = DBHelper.runQuery(query);
	response.setContentType("text/html");
	if(data.size() == 0){
		out.print("ok");}
	else{
		out.print("duplicate");}
        }   
}