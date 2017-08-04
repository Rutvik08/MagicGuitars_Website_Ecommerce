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

public class OrderPlaced extends HttpServlet {

    public void doPost(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {
    	doGet(request, response);
    }

public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException {
          response.setContentType("text/html");
          PrintWriter out = response.getWriter();
          String sku[]=request.getParameterValues("sku");
          int len=sku.length;
          String date[]=request.getParameterValues("date");
          String quantity[]=request.getParameterValues("quantity");
          ArrayList<String> arraylist=new ArrayList<String>();
          for(int i=0;i < len;i++)
          {
              String output=DatabaseHandler.updateOut(sku[i],date[i],Integer.parseInt(quantity[i]));
              arraylist.add(output);
          }
          if(!(arraylist.contains("fail")))
          {
		String toDo = "/WEB-INF/jsp/AfterOrderPlaced.jsp";
            RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo);
            dispatcher.forward(request, response);
          }
}

}
