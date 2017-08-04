// Name: Desai, Rutvik
// Class Account#: jadrn010
// Project #2

$(document).ready(function() {
    $body = $("body");    
    $("#sku").focus(function() {
        $("#addConf").css("display", "none");
    });
    $('#submit').bind('click', function() {
        validationMI();
    });
    $('#logout').bind('click', function() {
        $("body").html("<h1>You Are Logged Out!</h1>");
        window.location.replace("http://jadran.sdsu.edu/jadrn010/servlet/Logout");
    });


    $('#reset').bind('click', function() {
        document.getElementById("sku_status").innerHTML = "";
        document.getElementById("quantity_status").innerHTML = "";
        document.getElementById("date_status").innerHTML = "";
	$("#pic").html("");
        $('#submit').prop('disabled', true);
    });

    $("#sku").on('blur', function(e) {
        var sku = $("#sku").val()
        var url = 'DuplicateCheck?sku=';
        url += sku;
        if (sku) {
            if (validSKUMI(sku)) {
                document.getElementById("sku_status").innerHTML = "";
                $.get(url, handleSkuMI);
            } else {
                document.getElementById("sku_status").innerHTML = "Enter valid SKU, example: AAA-111.";
            }
        } else {
            document.getElementById("sku_status").innerHTML = "";
            document.getElementById("category").value = "";
            document.getElementById("vendor").value = "";
            document.getElementById("manufacturer").value = "";
	    $("#pic").html("");
            $('#submit').prop('disabled', true);
        }

    });
    $("#date").on('blur', function(e) {
        var date = $("#date").val();
        if (date) {
            if (validDateMI(date)) {
                document.getElementById("date_status").innerHTML = "";
            } else {
                document.getElementById("date_status").innerHTML = "Enter valid Date of the form MM/DD/YYYY.";
            }
        }
    });
    $("#quantity").on('blur', function(e) {
        var quantity = $("#quantity").val();
        if (quantity) {
            if (validQuantityMI(quantity)) {
                if (quantity > 0) {
                    document.getElementById("quantity_status").innerHTML = "";
                } else {
                    document.getElementById("quantity_status").innerHTML = "Quantity should be greater than 0.";
                }
            } else {
                document.getElementById("quantity_status").innerHTML = "Enter valid quantity.";
            }
        } else {
            document.getElementById("quantity_status").innerHTML = "";
        }
    });

});

function handleSkuMI(response) {
    if (response.startsWith("duplicate")) {
        document.getElementById("sku_status").innerHTML = "";
        var url = 'GetData?sku='
        url += $("#sku").val();
        $.get(url, fetchDataMI);
        $('#submit').prop('disabled', false);
    } else if (response.startsWith("ok") && $('#sku').val() != '') {
        document.getElementById("sku_status").innerHTML = "SKU not Found.";
        document.getElementById("category").value = "";
        document.getElementById("vendor").value = "";
        document.getElementById("manufacturer").value = "";
	$("#pic").html("");
        $('#submit').prop('disabled', true);
    }
}

function fetchDataMI(response) {
    var rows = response.split("|");
    document.getElementById("manufacturer").value = rows[0];
    document.getElementById("vendor").value = rows[1];
    document.getElementById("category").value = rows[2];
    var display = "<img src=\"/~jadrn010/proj1/_uploadedimages/" + rows[3] + "\"'width='140px' height='140px' />";
    $("#pic").html(display);
}

function sendDataMIn() {
    var sku = document.getElementById("sku").value;
    var date = document.getElementById("date").value;
    var quantity = document.getElementById("quantity").value;
    var url = 'DataInsertMIn?sku=' + sku + '&date=' + date + '&quantity=' + quantity;
    $.get(url, insertDataMI);
    ClearFormMI();
}


function insertDataMI(response) {
    document.getElementById("addConf").innerHTML = response;
}

function validationMI() {
    var date = document.getElementById("date").value;
    var sku = document.getElementById("sku").value;
    var quantity = document.getElementById("quantity").value;
    if (!date) {
        document.getElementById("date_status").innerHTML = "Please enter Date.";
    } else {
        document.getElementById("date_status").innerHTML = "";
    }
    if (!sku) {
        document.getElementById("sku_status").innerHTML = "Please enter SKU.";
    } else {
        document.getElementById("sku_status").innerHTML = "";
    }
    if (!quantity) {
        document.getElementById("quantity_status").innerHTML = "Please enter Quantity.";
    } else {
        if (!validQuantityMI(quantity)) {
            document.getElementById("quantity_status").innerHTML = "Enter valid quantity.";
        } else {
            if (quantity == 0) {
                document.getElementById("quantity_status").innerHTML = "Quantity should be greater than 0.";
            } else {
                document.getElementById("quantity_status").innerHTML = "";
            }
        }
    }
    if (!validSKUMI(sku)) {
        document.getElementById("sku_status").innerHTML = "Enter valid SKU, example: AAA-111.";
    } else {
        document.getElementById("sku_status").innerHTML = "";
    }
    if (!validDateMI(date)) {
        document.getElementById("date_status").innerHTML = "Enter valid Date of the form MM/DD/YYYY.";
    } else {
        document.getElementById("date_status").innerHTML = "";
    }
    if (sku && date && quantity) {
        if (validSKUMI(sku) && validDateMI(date) && validQuantityMI(quantity) && quantity > 0) {
            sendDataMIn();
        }
    }
}

function validSKUMI(r) {
    var sku = /^[A-Z]{3}-[0-9]{3}$/;
    if (sku.test(r) == false) {
        document.getElementById("category").value = "";
        document.getElementById("vendor").value = "";
        document.getElementById("manufacturer").value = "";
        $('#submit').prop('disabled', true);
	$("#pic").html("");
        return false;
    } else {
        return true;
    }
}

function validDateMI(d) {
    var date = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (date.test(d) == false) {
        return false;
    } else {
        return true;
    }
}

function validQuantityMI(q) {
    if (new RegExp('^[0-9]*$').test(document.getElementById("quantity").value)) {
        return true;
    } else {
        return false;
    }
}

function emptyCheckMI(string) {
    return (!string || 0 === string.length);
}

function ClearFormMI() {
    document.getElementById("sku_status").innerHTML = "";
    document.getElementById("sku").value = "";
    document.getElementById("category").value = "";
    document.getElementById("vendor").value = "";
    document.getElementById("manufacturer").value = "";
    document.getElementById("quantity").value = "";
    $("#pic").html("");
    $('#submit').prop('disabled', true);
    $('#addConf').css('display', "block");
}