/*
	Name: Desai, Rutvik
	Class Account#: jadrn010
	Project #3
*/


import java.io.IOException;
import java.io.PrintWriter;
import java.util.*;

import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;

public class ProductDetails extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException  {
	PrintWriter out = response.getWriter();
	String output = "";
	String sku=request.getParameter("sku");
	Vector<String[]> data = DBHelper.runQuery("select prod.sku, prod.manuID, prod.description, prod.features, prod.retail, prod.image, cat.name, ven.name, quan.on_hand_quantity from product prod, on_hand quan, vendor ven, category cat where prod.sku=\""+sku+"\" and prod.catID=cat.id and prod.venID=ven.id and quan.sku=prod.sku;");
	for(int i=0; i < data.size(); i++)  {
		String [] tmp = data.elementAt(i);
		for(int j=0; j < tmp.length; j++)
		      output += tmp[j]+"~";
		}  
	//output = output.substring(0,output.length()-1);
	out.print(output);						    
    }
}
