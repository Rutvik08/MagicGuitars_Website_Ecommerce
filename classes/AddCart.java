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

public class AddCart extends HttpServlet {
int output;
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
  HttpSession session = request.getSession();
  CartGS cartgs = null;  
  String sku=request.getParameter("sku");
  String manuID=request.getParameter("manuID");
  double cost=Double.parseDouble(request.getParameter("retail"));
  String image=request.getParameter("image");
  int quantity=Integer.parseInt(request.getParameter("quantity"));

  Object object = session.getAttribute("cartgs");

  if(object!=null) {
   cartgs = (CartGS) object ;
  } else {
   cartgs = new CartGS();
   session.setAttribute("cartgs", cartgs);
  }
  if(cartgs.checkSku(sku) == -1){
    output=cartgs.addItem(sku, manuID, cost, image , quantity);
    out.print("Success");
  }
  else{
    output=cartgs.updateCartQuantity(sku,quantity);
    out.print("update");
  }
}
}