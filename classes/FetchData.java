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

public class FetchData extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException  {
	PrintWriter out = response.getWriter();
	Vector<String[]> v = DBHelper.runQuery("select prod.manuID,prod.retail,quant.on_hand_quantity,prod.image,prod.sku from product prod, on_hand quant where quant.sku=prod.sku;");
	String answer = "";
	for(int i=0; i < v.size(); i++)  {
		String [] tmp = v.elementAt(i);
		for(int j=0; j < tmp.length; j++)
		      answer += tmp[j]+",";
		answer += "|";
		}
answer = answer.substring(0,answer.length()-2);  
	out.print(answer);						    
    }
}



