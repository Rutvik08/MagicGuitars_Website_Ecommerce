/*
	Name: Desai, Rutvik
	Class Account#: jadrn010
	Project #3
*/


import java.util.ArrayList;
import sdsu.*;

public class CartGS {
private ArrayList<GetterSetter> items = new ArrayList<GetterSetter>();
int counter, position, total;
String empty="empty", notempty="notempty";

 public ArrayList getItems() {
  return items;
 }

public int checkSku(String sku){
    position=-1;
      for(int i = 0; i < items.size(); i++)
      {
         if(sku.equals(items.get(i).getSku())){
           position=i;
           break;
         }
      }
      return position;
    }

public String checkCart(){
if(items.isEmpty())
{
    return empty;
}
else{
return notempty;
}
}


public int addItem(String sku, String manuID, double retail, String image , int quantity) {
  GetterSetter cart = new GetterSetter();
  try {    
    cart.setSku(sku);
    cart.setManuID(manuID);
    cart.setCost(retail);
    cart.setImage(image);
    cart.setQuantity(quantity);
    items.add(cart);
    counter=items.size();
   }
   catch (Exception e) {
   System.out.println(e.getMessage());
   counter=0;
  }
  return counter;
 }
    public int updateCartQuantity(String sku,int quantity){
      position=-1;
      total=0;
      for(int i=0;i<items.size();i++)
      {
        GetterSetter gs = items.get(i);
        if (gs.getSku().equals(sku))
        {
            position=i;
            total=gs.getQuantity()+1;
        }
      }
      items.get(position).setQuantity(total);
      return position;
    }

public double totalAmount(){
      double total= 0;
      for(int i=0;i<items.size();i++)
      {
        GetterSetter g = items.get(i);
        total+=(g.getCost()*g.getQuantity());
      }
      return total;
    }

    public int updateOrder(String sku,int quantity,double cost){
      position=-1;
      total=0;
      for(int i=0;i<items.size();i++)
      {
        GetterSetter gs = items.get(i);
        if (gs.getSku().equals(sku))
        {
            position=i;
        }
      }
      items.get(position).setQuantity(quantity);
      items.get(position).setTotal(cost);
    return position;
  }

public int deleteItem(String sku){
      int position=-1;
      for(int i=0;i<items.size();i++)
      {
        GetterSetter g = items.get(i);
        if (g.getSku().equals(sku))
        {
            position=i;
        }
      }
     items.remove(position);
     return position;
    }

}