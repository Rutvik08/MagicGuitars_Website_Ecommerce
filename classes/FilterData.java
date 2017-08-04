
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

public class FilterData extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException  {
	String output = "";	
	int category=0,brand=0,counter=0;
	PrintWriter out = response.getWriter();
	int selected=Integer.parseInt(request.getParameter("selected"));
	for(int i=0;i<selected;i++)
	{
	String value="checked"+i;
	int param=Integer.parseInt(request.getParameter(value));
	if(param<=2){category+=1;}
	else{brand+=1;}	
}	
if(category==0){
for(int i=0;i<selected;i++){
	String value="checked"+i;
	int param=Integer.parseInt(request.getParameter(value));
	param-=2;
String query="select prod.manuID,prod.retail,quant.on_hand_quantity,prod.image,prod.sku from product prod, on_hand quant where quant.sku=prod.sku and prod.catID=\""+param+"\"";
	Vector<String[]> data = DBHelper.runQuery(query);
	for(int j=0; j < data.size(); j++)  {
		String [] tmp = data.elementAt(j);
		for(int k=0; k < tmp.length; k++)
		      output += tmp[k]+",";
		output += "|";
		}  
}		    
    }
else if(brand==0)
{
for(int i=0;i<selected;i++){
	String value="checked"+i;
	int param=Integer.parseInt(request.getParameter(value));
String query="select prod.manuID,prod.retail,quant.on_hand_quantity,prod.image,prod.sku from product prod, on_hand quant where quant.sku=prod.sku and prod.catID=\""+param+"\"";
	Vector<String[]> data = DBHelper.runQuery(query);
	for(int j=0; j < data.size(); j++)  {
		String [] tmp = data.elementAt(j);
		for(int k=0; k < tmp.length; k++)
		      output += tmp[k]+",";
		output += "|";
		}  
}
} 
else
{
String combined="";
for(int i=0;i<selected;i++){
	String value="checked"+i;
	int param=Integer.parseInt(request.getParameter(value));
	if(param<=2){
String query="select sku from product where catID=\""+param+"\"";
	Vector<String[]> data = DBHelper.runQuery(query);
	for(int j=0; j < data.size(); j++)  {
		String [] tmp = data.elementAt(j);
		for(int k=0; k < tmp.length; k++)
		      combined += tmp[k]+"~";
		}}
	else
{
param-=2;
String query="select sku from product where venID=\""+param+"\"";
	Vector<String[]> data = DBHelper.runQuery(query);
	for(int j=0; j < data.size(); j++)  {
		String [] tmp = data.elementAt(j);
		for(int k=0; k < tmp.length; k++)
		    combined += tmp[k]+"~";
}
		}
}
String[] finalOutput = combined.split("~");
String[] finalOutput1 = new String[20];
for (int i = 0; i < finalOutput.length; i++) {
 for (int j = i + 1 ; j < finalOutput.length; j++) { 
 
if (finalOutput[i].equals(finalOutput[j])) { 
  finalOutput1[counter]=finalOutput[i];
counter++;
}	
} 
} 

for(int l=0;l<finalOutput1.length;l++)
{
String query="select prod.manuID,prod.retail,quant.on_hand_quantity,prod.image,prod.sku from product prod, on_hand quant where quant.sku=prod.sku and prod.sku=\""+finalOutput1[l]+"\"";
	Vector<String[]> data = DBHelper.runQuery(query);
	for(int j=0; j < data.size(); j++)  {
		String [] tmp = data.elementAt(j);
		for(int k=0; k < tmp.length; k++)
		      output += tmp[k]+",";
		output += "|";
		}
 }}
output = output.substring(0,output.length()-2);
out.print(output);
}
}

