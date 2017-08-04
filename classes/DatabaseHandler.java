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

public class DatabaseHandler{

public static String dataInsertMOut(String sku , String date , int quantity){
String message ="";
    String query = "insert into merchandise_out(sku,date,quantity) values(\"" + sku + "\",\"" + date + "\",\"" + quantity + "\")";
      String q1="select on_hand_quantity from on_hand where sku=\"" + sku + "\"";
      Vector<String []> data1 = DBHelper.runQuery(q1);
      String str[]=data1.elementAt(0);
        for(int i=0;i <str.length;i++){
          message += str[i];
        }
      int quantityFromDB=Integer.parseInt(message);
      int result=quantityFromDB-quantity;
      String q2 = "update on_hand set last_date_modified=\"" + date + "\",on_hand_quantity=\"" + result + "\" where sku=\"" + sku + "\"";
      int execute= DBHelper.executeCommand(q2);
      int rows = DBHelper.executeCommand(query);
      message="Data updated successfully!";
    return message;
  }

  public static String dataHandler(String sku){
String message ="";
    String query = "select manuID,vendor.name,category.name,image from product, vendor, category where product.venID=vendor.id and product.catID=category.id and sku=\"" + sku + "\"";
    Vector<String []> data = DBHelper.runQuery(query);
  
    String str[]=data.elementAt(0);
      for(int i=0;i <str.length;i++){
        message += str[i];
    		message += "|";
      }
    return message;
  }

  public static String updateOut(String sku , String date , int quantity){
    String message1="",message="";
    String query="select on_hand_quantity from on_hand where sku=\"" + sku + "\"";
    Vector<String []> data6 = DBHelper.runQuery(query);
    String str3[]=data6.elementAt(0);
    for(int i=0;i <str3.length;i++){
      message += str3[i];
    }
    int quantityFromDB=Integer.parseInt(message);
    if(quantity <= quantityFromDB){
      String query1 = "insert into merchandise_out(sku,date,quantity) values(\"" + sku + "\",\"" + date + "\",\"" + quantity + "\")";
      int rows = DBHelper.executeCommand(query1);
      int total=quantityFromDB-quantity;
      String query2 = "update on_hand set last_date_modified=\"" + date + "\",on_hand_quantity=\"" + total + "\" where sku=\"" + sku + "\"";
      int rows1= DBHelper.executeCommand(query2);
      message1="success";
    }
    else{
      message1="fail";
    }

    return message1;
  }

  public static String dataInsertMIn(String sku , String date , int quantity){
String message ="";
String message1 ="";
    String query = "insert into merchandise_in(sku,date,quantity) values(\"" + sku + "\",\"" + date + "\",\"" + quantity + "\")";
    String q1="select sku from on_hand where sku=\"" + sku + "\"";
    Vector<String []> data = DBHelper.runQuery(q1);
    if(data.size()==0){
    String q2 = "insert into on_hand(sku,last_date_modified,on_hand_quantity) values(\"" + sku + "\",\"" + date + "\",\"" + quantity + "\")";
    int rows = DBHelper.executeCommand(query);
    int rows1= DBHelper.executeCommand(q2);
    message="Data added successfully!";
    }
    else
    {
      String q3="select on_hand_quantity from on_hand where sku=\"" + sku + "\"";
      Vector<String []> data1 = DBHelper.runQuery(q3);
      String str[]=data1.elementAt(0);
        for(int i=0;i <str.length;i++){
          message1 += str[i];
        }
      int quantityFromDB=Integer.parseInt(message1);
      int result=quantityFromDB+quantity;
      String q4 = "update on_hand set last_date_modified=\"" + date + "\",on_hand_quantity=\"" + result + "\" where sku=\"" + sku + "\"";
      int execute= DBHelper.executeCommand(q4);
      int rows = DBHelper.executeCommand(query);
      message="Data updated successfully!";
    }

    return message;
  }
}
