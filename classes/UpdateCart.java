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

public class UpdateCart extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {
    	doPost(request, response);
    }

    public void doPost(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException {

	response.setContentType("text/html");
  PrintWriter out = response.getWriter();
  String sku=request.getParameter("sku");
  double cost=Double.parseDouble(request.getParameter("cost"));
  int quantity=Integer.parseInt(request.getParameter("quantity"));
  HttpSession session = request.getSession();
  CartGS cartgs = null;
  Object object = session.getAttribute("cartgs");
  if(object!=null) {
   cartgs = (CartGS) object ;
  } else {
   cartgs = new CartGS();
  }
  int output=cartgs.updateOrder(sku,quantity,cost);
  out.print(output);
}
}
