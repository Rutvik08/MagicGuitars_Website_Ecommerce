/*
	Name: Desai, Rutvik
	Class Account#: jadrn010
	Project #3
*/


import java.util.ArrayList;

public class GetterSetter {
public String sku,manuID, image;
    public int quantity;
    public double cost, total;


    public GetterSetter(String sku, String manuID, String image, int quantity, double cost) {
        this.sku = sku;
        this.manuID = manuID;
        this.image = image;
        this.quantity = quantity;
        this.cost = cost;
    }

    public GetterSetter() {
    
    }

    public String getSku() {
    
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public String getManuID() {
        return manuID;
    }

    public void setManuID(String manuID) {
        this.manuID = manuID;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
public double getTotal() {
	return total;
}
public void setTotal(double total) {
	this.total = total;
}
    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    }