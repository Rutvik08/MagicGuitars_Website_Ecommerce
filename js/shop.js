// Name: Desai, Rutvik
// Class Account#: jadrn010
// Project #3

$(document).ready( function() {
	
$.get('http://jadran.sdsu.edu/jadrn010/servlet/FetchData', fetchData);
$.get("TotalAmount",totalAmountB);

$('#filter').bind('click', function() {
filterData();
    });
$('#reset').bind('click', function() {
clearForm();
    });

$("#quantity").focus(function() {
$("#error").attr("hidden",true);
    });

$('.continue').bind('click', function() {
window.location.href = 'http://jadran.sdsu.edu/jadrn010/proj3.html';
    });

$('.checkout').bind('click', function() {
window.location.href = 'http://jadran.sdsu.edu/jadrn010/billing.jsp';
    });

$('#home').bind('click', function() {
window.location.href = 'http://jadran.sdsu.edu/jadrn010/proj3.html';
    });

$('#contact').bind('click', function() {
window.location.href = 'http://jadran.sdsu.edu/jadrn010/contact.html';
    });

$('#about').bind('click', function() {
window.location.href = 'http://jadran.sdsu.edu/jadrn010/about.html';
    });

$('#goToCart').bind('click', function() {
window.location.href = 'http://jadran.sdsu.edu/jadrn010/servlet/ShowCart';
    });

$('#cancel').bind('click', function() {
window.location.href = 'http://jadran.sdsu.edu/jadrn010/servlet/ShowCart';
    });

$('#continueB').bind('click', function() {
validation();
    });

$("#cancelO").bind("click", function() {
				$("#myModalC").css({"display" : "none"});
			});



document.getElementsByClassName("accordion")[0].click();
var acc = document.getElementsByClassName("accordion");
for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

$(".close").on("click", function() {
				$("#myModal").css({"display" : "none"});
			});

});

$(document).on('click','.details',function(){
	var sku=$(this).attr("id");
      	var url='servlet/ProductDetails?sku=';
      	url+=sku;
      	$.get(url, modalDisplay);
});

$(document).on('click','#addCartModal',function(){
var quantity = $("#quantity").val();
var onHandQuantity = $("#onHand").val();
//alert(quantity);
if (quantity) {
            if (validQuantityM(quantity)) {
                    if(quantity-onHandQuantity>0){
$("#error").attr("hidden",false);
$("#error").html("Not enough quantity available!");
}
else{
addToCart();
}
            } else {
		$("#error").attr("hidden",false);
$("#error").html("Enter valid quantity.");
            }
        } else {
		$("#error").attr("hidden",false);
$("#error").html("Enter quantity.");
        }});

function modalOrder(){
var name = $('#nameS').val();
var add1 = $('#address1S').val();
var add2 = $('#address2S').val();
var city = $('#cityS').val();
var state = $('#stateS').val();
var country = $('#countryS').val();
var zip = $('#zipS').val();
var phone =$('#phoneS').val();
var add=$('#address1S').val()+" ,"+$('#address2S').val()+" ,"+$('#cityS').val()+" ,"+$('#stateS').val()+" ,"+$('#countryS').val()+"-"+$('#zipS').val()+". Phone: "+$('#phoneS').val();
$("#nameModal").text(name);
$("#addressModal").text(add);
$.get("TotalAmount",totalAmountB);
$("#myModalC").css({"display" : "block"});

}


function fetchData(response){
  var result = response.split("|");
  topx=150;
  leftx=300;
    for(i=0; i<result.length; i++) {
      tmp = result[i].split(",");
      image = "<img src='/~jadrn010/proj1/_uploadedimages/"+tmp[3]+"' width='250px' height='250px'>";
      dataDiv=$('<div id="product"></div>');
      $('#allData').append(dataDiv.css({top: topx, left: leftx, position:'absolute'}).html(image));      
      manuID=$('<table><tr><td>Manufacturing ID: '+tmp[0]+'</tr></table>');
      retail=$('<table><tr><td>Cost:$ '+tmp[1]+'</td></tr></table>');
      if(tmp[2]>0){
        stock=$('<table id="in"><tr><td>In Stock</td></tr></table>');}
      else if(tmp[2]==0){
        stock=$('<table id="out"><tr><td>More On The Way</td></tr></table>');}
      else{
        stock=$('<table id="soon"><tr><td>Coming Soon</td></tr></table>');}
button=$('<input type="button" id="'+tmp[4]+'" name="button'+i+'" value="Details" class="details">');
     
      dataDiv.append(manuID);
      dataDiv.append(retail);
      dataDiv.append(stock); 
	dataDiv.append(button);

      leftx+=350;
      if(leftx > 1000){
       topx+=430;
       leftx=300;
     }
 
}
}

function filterData(){
var u='http://jadran.sdsu.edu/jadrn010/servlet/FilterData?';
var i=0,j=0;
if(document.getElementById("c1").checked)
{
u+="checked"+i+"="+1+"&";
i+=1;
}
if(document.getElementById("c2").checked)
{
u+="checked"+i+"="+2+"&";
i+=1;
}
if(document.getElementById("c3").checked)
{
u+="checked"+i+"="+3+"&";
i+=1;
}
if(document.getElementById("c4").checked)
{
u+="checked"+i+"="+4+"&";
i+=1;
}
if(document.getElementById("c5").checked)
{
u+="checked"+i+"="+5+"&";
i+=1;
}
if(document.getElementById("c6").checked)
{
u+="checked"+i+"="+6+"&";
i+=1;
}
if(document.getElementById("c7").checked)
{
u+="checked"+i+"="+7+"&";
i+=1;
}
if(document.getElementById("c8").checked)
{
u+="checked"+i+"="+8+"&";
i+=1;
}
if(i==0){
$.get('http://jadran.sdsu.edu/jadrn010/servlet/FetchData', fetchData);
}
else{
u.substring(0,u.length-1);
u+="selected="+i;
$('#allData').empty();
$.get(u, fetchData);
}
}

function clearForm(){
$('#allData').empty();
$('input[type="checkbox"]:checked').prop('checked',false);
$.get('http://jadran.sdsu.edu/jadrn010/servlet/FetchData', fetchData);
}

function modalDisplay(response){
				var result = response.split("~");				
				$("#skuModal").val(result[0]);
				$("#onHand").val(result[8]);
				$("#manuIDModal").text(result[1]);
				$("#descriptionModal").text(result[2]);
				$("#featuresModal").text(result[3]);
				$("#retailModal").text(result[4]);
				$("#categoryModal").text(result[6]);
				$("#brandModal").text(result[7]);
				$("#productImage").attr('src','/~jadrn010/proj1/_uploadedimages/'+result[5]);
$("#error").attr("hidden",true);
      if(result[8]>0){
        $("#statusModal").text("In Stock");
					$("#addCartModal").attr("hidden",false);
$("#quantityModal").attr("hidden",false);
$("#quantity").attr("hidden",false);
					$("#statusModal").addClass("in");
					$("#statusModal").removeClass("soon");
					$("#statusModal").removeClass("out");
}
      else if(result[8]==0){
					$("#addCartModal").attr("hidden",true);
$("#quantityModal").attr("hidden",true);
$("#quantity").attr("hidden",true);
$("#statusModal").text("More On The Way");
        $("#statusModal").addClass("out");
					$("#statusModal").removeClass("in");
					$("#statusModal").removeClass("soon");
}
      else{					
$("#addCartModal").attr("hidden",true);
$("#quantityModal").attr("hidden",true);
$("#quantity").attr("hidden",true);
$("#statusModal").text("Coming Soon");
        $("#statusModal").addClass("soon");
					$("#statusModal").removeClass("in");
					$("#statusModal").removeClass("out");
        stock=$('<table id="soon"><tr><td>Coming Soon</td></tr></table>');}

				$("#myModal").css({"display" : "block"});   
}


function validQuantityM(q) {
    if (new RegExp('^[0-9]*$').test($("#quantity").val())) {
        return true;
    } else {
        return false;
    }
}

function addToCart() {

$.ajax({
            url: "servlet/AddCart",
            type: "post",
	    data: "&sku="+$("#skuModal").val()+"&manuID=" + $("#manuIDModal").text() + "&retail="+$("#retailModal").text()+ "&image="+$('#productImage').attr('src')+ "&quantity="+$("#quantity").val(),
            processData: false,
            contentType:'application/x-www-form-urlencoded; charset=UTF-8',
            success: function(response) {
               if(response.startsWith("Success")){
		$("#error").attr("hidden",false);
$("#error").html("Added to cart!");
var onHand = $("#onHand").val()-$("#quantity").val();
$("#onHand").val(onHand);
$("#quantity").val("1");
				}
else if(response.startsWith("update")){
		$("#error").attr("hidden",false);
$("#error").html("Added to cart!");
var onHand = $("#onHand").val()-$("#quantity").val();
$("#onHand").val(onHand);
$("#quantity").val("1");}
              },
            error: function(response) {
               alert("Something went wrong! Please try again later!");
                }
            });
}

function totalAmountB(response){
var amount = parseFloat(response);
var shipping=5;
var afterShipping = parseFloat(amount+shipping);
var afterTax = parseFloat(((afterShipping*8)/100).toFixed(2));
$('#sumCost').text("Total Merchandise Cost: $"+amount);
$('#tax').text("Tax(8%): $"+afterTax);
        $('#totalCost').text("Total Amount: $"+(afterTax+afterShipping).toFixed(2));

}


function validation() {
$("#errorS").attr("hidden",true);
$("#errorB").attr("hidden",true);
$("#errorC").attr("hidden",true);
var name = $('#nameS').val();
var add1 = $('#address1S').val();
var add2 = $('#address2S').val();
var city = $('#cityS').val();
var state = $('#stateS').val();
var country = $('#countryS').val();
var zip = $('#zipS').val();
var zipS = validZipS(zip);
var phone =$('#phoneS').val();
var phoneS = validphoneS(phone);
var name1 = $('#nameB').val();
var add11 = $('#address1B').val();
var add21 = $('#address2B').val();
var city1 = $('#cityB').val();
var state1 = $('#stateB').val();
var country1 = $('#countryB').val();
var zip1 = $('#zipB').val();
var zip1B = validZipB(zip1);
var phone1 = $('#phoneB').val()
var phone1B = validphoneB(phone1);
var cardNum = $('#card').val();
var cardNum1 = validCard(cardNum);
var expMon=$('#mon').val();
var expYear=$('#year').val();
var sc=$('#sc').val();
var sc1=validSC(sc);
var cardType;

if (document.getElementById('r1').checked) {
  cardType = document.getElementById('r1').value;
}
else if (document.getElementById('r2').checked) {
  cardType = document.getElementById('r2').value;
}


if(!name){$('#errorS').text("Enter Name!");
$("#errorS").attr("hidden",false);
$('#nameS').focus();
}
else if(!add1){$('#errorS').text("Enter Address!");
$("#errorS").attr("hidden",false);
$('#address1S').focus();
}
else if(!add2){$('#errorS').text("Enter Address!");
$("#errorS").attr("hidden",false);
$('#address2S').focus();
}
else if(!city){$('#errorS').text("Enter City!");
$("#errorS").attr("hidden",false);
$('#cityS').focus();
}
else if(!state){$('#errorS').text("Enter State!");
$("#errorS").attr("hidden",false);
$('#stateS').focus();
}
else if(!country){$('#errorS').text("Enter Country!");
$("#errorS").attr("hidden",false);
$('#countryS').focus();
}
else if(zipS==false){$('#errorS').text("Enter Valid Zip!");
$("#errorS").attr("hidden",false);
$('#zipS').focus();
}
else if(phoneS==false){$('#errorS').text("Enter Valid Phone!");
$("#errorS").attr("hidden",false);
$('#phoneS').focus();
}
else if(!name1){$('#errorB').text("Enter Valid Name!");
$("#errorB").attr("hidden",false);
$('#nameB').focus();
}
else if(!add11){$('#errorB').text("Enter Valid Address!");
$("#errorB").attr("hidden",false);
$('#address1B').focus();
}
else if(!add21){$('#errorB').text("Enter Valid Address!");
$("#errorB").attr("hidden",false);
$('#address2B').focus();
}
else if(!city1){$('#errorB').text("Enter Valid City!");
$("#errorB").attr("hidden",false);
$('#cityB').focus();
}
else if(!state1){$('#errorB').text("Enter Valid State!");
$("#errorB").attr("hidden",false);
$('#stateB').focus();
}
else if(!country1){$('#errorB').text("Enter Valid Country!");
$("#errorB").attr("hidden",false);
$('#countryB').focus();
}
else if(zip1B==false){$('#errorB').text("Enter Valid Zip!");
$("#errorB").attr("hidden",false);
$('#zipB').focus();
}
else if(phone1B==false){$('#errorB').text("Enter Valid Phone!");
$("#errorB").attr("hidden",false);
$('#phoneB').focus();
}
else if(cardNum==false){$('#errorC').text("Enter Valid Card Number!");
$("#errorC").attr("hidden",false);
$('#card').focus();
}
else if(expMon=="MM"){$('#errorC').text("Select Expiring Month!");
$("#errorC").attr("hidden",false);
$('#mon').focus();
}
else if(expYear=="YYYY"){$('#errorC').text("Select Expiring Year!");
$("#errorC").attr("hidden",false);
$('#year').focus();
}
else if(sc1==false){$('#errorC').text("Enter Valid Security Code!");
$("#errorC").attr("hidden",false);
$('#sc').focus();
}
else{
modalOrder();
}
}

function validZipS(z) {
    if (new RegExp('^[0-9]{5}$').test($("#zipS").val())) {
        return true;
    } else {
        return false;
    }
}

function validZipB(z) {
    if (new RegExp('^[0-9]{5}$').test($("#zipB").val())) {
        return true;
    } else {
        return false;
    }
}
function validphoneS(p) {
    if (new RegExp('^[0-9]{10}$').test($("#phoneS").val())) {
        return true;
    } else {
        return false;
    }
}
function validphoneB(p) {
    if (new RegExp('^[0-9]{10}$').test($("#phoneB").val())) {
        return true;
    } else {
        return false;
    }
}

function validCard(c) {
    if (new RegExp('^[0-9]{16}$').test($("#card").val())) {
        return true;
    } else {
        return false;
    }
}

function validSC(p) {
    if (new RegExp('^[0-9]{3}$').test($("#sc").val())) {
        return true;
    } else {
        return false;
    }
}



