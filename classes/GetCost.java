/*
	Name: Desai, Rutvik
	Class Account#: jadrn010
	Project #3
*/


import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;

public class GetCost extends HttpServlet {
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException {

	response.setContentType("text/html");
  PrintWriter out = response.getWriter();
  String sku=request.getParameter("sku");
    String query = "select retail from product where sku=\"" + sku + "\"";
    Vector<String []> tmp = DBHelper.runQuery(query);
  	String output ="";
    String s[]=tmp.elementAt(0);
      for(int i=0;i < s.length;i++){
        output += s[i];
      }
  out.print(output);
}

    public void doPost(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {
    	doGet(request, response);
    }
}
