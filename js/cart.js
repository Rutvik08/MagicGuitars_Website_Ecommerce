// Name: Desai, Rutvik
// Class Account#: jadrn010
// Project #3

$(document).ready( function() {
$.get("CheckCart",checkCart);
$.get("TotalAmount",totalAmount);

$("#sameAddress").change(function() {
    if(this.checked) {
$('#billingData *').attr('disabled',true);
        var name = $('#nameS').val();
var add1 = $('#address1S').val();
var add2 = $('#address2S').val();
var city = $('#cityS').val();
var state = $('#stateS').val();
var country = $('#countryS').val();
var zip = $('#zipS').val();
var phone = $('#phoneS').val();
        $('#nameB').val(name);
$('#address1B').val(add1);
$('#address2B').val(add2);
$('#cityB').val(city);
$('#stateB').val(state);
$('#countryB').val(country);
$('#zipB').val(zip);
$('#phoneB').val(phone);
    }
else{
$('#billingData *').children().attr('disabled',false);
        $('#nameB').val("");
$('#address1B').val("");
$('#address2B').val("");
$('#cityB').val("");
$('#stateB').val("");
$('#countryB').val("");
$('#zipB').val("");
$('#phoneB').val("");
}
});

id;
});

$(document).on('click','.update',function(){
id=$(this).attr("id");
var quantity=$("#quantity"+id).val();
if (quantity) {
            if (validQuantityM(quantity)) {
                           var url="QuantityCheck?sku="+id + "&quantity="+quantity;
      $.get(url,onHandQuantiyCheck);
     } else {
        $("#err"+id).attr("hidden",false);
	$("#err"+id).html("Enter Valid Quantity!");
            }
        } else {
        $("#err"+id).attr("hidden",false);
	$("#err"+id).html("Enter Quantity!");
}      
    });

$(document).on('click','.delete',function(){
id=$(this).attr("id");
var url="DeleteItem?sku="+id;
      $.get(url,deleteItem);
    });


function onHandQuantiyCheck(response){
    if (response.startsWith("Valid")) {
var url="GetCost?sku="+id;
      $.get(url,handleCost);
    } else if (response.startsWith("Invalid")) {
var id1=$('#err'+id).val();
        $("#err"+id).attr("hidden",false);
	$("#err"+id).html("Not enough quantity available!");    }
}

function validQuantityM(q) {
    if (new RegExp('^[0-9]*$').test($("#quantity"+id).val())) {
        return true;
    } else {
        return false;
    }
}

function handleCost(response){
var quantity= $("#quantity"+id).val();
var total = response*quantity;
$("#cost"+id).text("$ "+total+".0");
var url="UpdateCart?sku="+id+"&quantity="+quantity+"&cost="+total;
      $.get(url,updateCart);
}
function updateCart(response){
if(response > -1){
$.get("TotalAmount",totalAmount);
         }
}

function totalAmount(response){
var amount = parseFloat(response);
var shipping=5;
var afterShipping = parseFloat(amount+shipping);
var afterTax = parseFloat(((afterShipping*8)/100).toFixed(2));
$('#sumCost').text("Total Merchandise Cost: $"+amount);
$('#tax').text("Tax(8%): $"+afterTax);
        $('#totalCost').text("Total Amount: $"+(afterTax+afterShipping).toFixed(2));
}

function deleteItem(response){
if(response > -1){
               $('#tableRow'+id).remove();
$.get("TotalAmount",totalAmount);
$.get("CheckCart",checkCart);
             }
}

function checkCart(response){
if(response.startsWith("empty")){
     $('#noData').removeClass('hidden');
     $('#cartData').addClass('hidden');

             }
else if(response.startsWith("notempty")){
     $('#cartData').removeClass('hidden');
     $('#noData').addClass('hidden');

}
}


