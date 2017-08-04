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

public class ShowCart extends HttpServlet {

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
  HttpSession session = request.getSession();
  CartGS cartgs;
  cartgs= (CartGS) session.getAttribute("cartgs");
  if(cartgs == null){
      cartgs = new CartGS();
      session.setAttribute("cartgs", cartgs);
  }
  ArrayList<GetterSetter> gs= cartgs.getItems();
  session.setAttribute("items",gs);
  String toDo = "/WEB-INF/jsp/cart.jsp";
  RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo);
  dispatcher.forward(request, response);
}


}
