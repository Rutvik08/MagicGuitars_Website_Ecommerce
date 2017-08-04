// Name: Desai, Rutvik
// Class Account#: jadrn010
// Project #2

$(document).ready(function() {
    $body = $("body");
    $(document).on({
        ajaxStart: function() {
            $body.addClass("loading");
        },
        ajaxStop: function() {
            $body.removeClass("loading");
        }
    });

    $("#edit_sku").focus(function() {
        $("#editConf").css("display", "none");
    });

    $('#edit_update').bind('click', function() {
        validationMO();
    });

    $('#edit_reset').bind('click', function() {
        document.getElementById("edit_sku_status").innerHTML = "";
        document.getElementById("edit_quantity_status").innerHTML = "";
        document.getElementById("edit_date_status").innerHTML = "";
	$("#edit_pic").html("");
        $('#edit_update').prop('disabled', true);
    });

    $("#edit_sku").on('blur', function(e) {
        var sku = $("#edit_sku").val();
        var url = 'DuplicateCheck?sku=';
        url += sku;
        if (sku) {
            if (validSKUMO(sku)) {
                document.getElementById("edit_sku_status").innerHTML = "";
                $.get(url, handleSkuMO);
            } else {
                document.getElementById("edit_sku_status").innerHTML = "Enter valid SKU, example: AAA-111.";
            }
        } else {
            document.getElementById("edit_sku_status").innerHTML = "";
            document.getElementById("edit_category").value = "";
            document.getElementById("edit_vendor").value = "";
            document.getElementById("edit_manufacturer").value = "";
	    $("#edit_pic").html("");
            $('#edit_update').prop('disabled', true);
        }

    });

    $("#edit_date").on('blur', function(e) {
        var date = $("#edit_date").val();
        if (date) {
            if (validDateMO(date)) {
                document.getElementById("edit_date_status").innerHTML = "";
            } else {
                document.getElementById("edit_date_status").innerHTML = "Enter valid Date of the form MM/DD/YYYY.";
            }
        }
    });
    $("#edit_quantity").on('blur', function(e) {
        var quantity = $("#edit_quantity").val();
        if (quantity) {
            if (validQuantityMO(quantity)) {
                if (quantity > 0) {
                    document.getElementById("edit_quantity_status").innerHTML = "";
                    var url = 'QuantityCheck?sku=' + $("#edit_sku").val() + '&quantity='
                    url += quantity;
                    $.get(url, onHandQuantiyCheck);
                } else {
                    document.getElementById("edit_quantity_status").innerHTML = "Quantity should be greater than 0.";
                }
            } else {
                document.getElementById("edit_quantity_status").innerHTML = "Enter valid quantity.";
            }
        } else {
            document.getElementById("edit_quantity_status").innerHTML = "";
        }
    });

});

function onHandQuantiyCheck(response) {
    if (response.startsWith("Valid")) {
        document.getElementById("edit_quantity_status").innerHTML = ""
    } else if (response.startsWith("Invalid")) {
        document.getElementById("edit_quantity_status").innerHTML = "Not enough quantity available!";
    }
}

function handleSkuMO(response) {
    if (response.startsWith("duplicate")) {
        document.getElementById("edit_sku_status").innerHTML = "";
        var url = 'GetData?sku='
        url += $("#edit_sku").val();
        $.get(url, fetchDataMO);
        //$('#edit_update').prop('disabled', false);
    } else if (response.startsWith("ok") && $('#edit_sku').val() != '') {
        document.getElementById("edit_sku_status").innerHTML = "SKU not Found.";
        document.getElementById("edit_category").value = "";
        document.getElementById("edit_vendor").value = "";
        document.getElementById("edit_manufacturer").value = "";
	$("#edit_pic").html("");
        $('#edit_update').prop('disabled', true);
    }
}

function skuOnHandCheck(response) {
    if (response.startsWith("yes")) {
        document.getElementById("edit_sku_status").innerHTML = "";
        $('#edit_update').prop('disabled', false);
    } else if (response.startsWith("no") && $('#edit_sku').val() != '') {
        document.getElementById("edit_sku_status").innerHTML = "Item not in stock!";
        $('#edit_update').prop('disabled', true);
    }
}

function fetchDataMO(response) {
    var rows = response.split("|");
    document.getElementById("edit_manufacturer").value = rows[0];
    document.getElementById("edit_vendor").value = rows[1];
    document.getElementById("edit_category").value = rows[2];
    var display = "<img src=\"/~jadrn010/proj1/_uploadedimages/" + rows[3] + "\"'width='140px' height='140px' />";
    $("#edit_pic").html(display);
    var sku = $("#edit_sku").val();
    var url1 = 'SkuOnHand?sku=';
    url1 += sku;
    $.get(url1, skuOnHandCheck);
}

function sendDataMOut() {
    var sku = document.getElementById("edit_sku").value;
    var date = document.getElementById("edit_date").value;
    var quantity = document.getElementById("edit_quantity").value;
    var url = 'DataInsertMOut?sku=' + sku + '&date=' + date + '&quantity=' + quantity;
    $.get(url, insertDataMO);
    ClearFormMO();
}

function insertDataMO(response) {
    document.getElementById("editConf").innerHTML = response;
}

function validationMO() {
    var date = document.getElementById("edit_date").value;
    var sku = document.getElementById("edit_sku").value;
    var quantity = document.getElementById("edit_quantity").value;
    if (!date) {
        document.getElementById("edit_date_status").innerHTML = "Please enter Date.";
    } else {
        document.getElementById("edit_date_status").innerHTML = "";
    }
    if (!sku) {
        document.getElementById("edit_sku_status").innerHTML = "Please enter SKU.";
    } else {
        document.getElementById("edit_sku_status").innerHTML = "";
    }
    if (!quantity) {
        document.getElementById("edit_quantity_status").innerHTML = "Please enter Quantity.";
    } else {
        if (!validQuantityMO(quantity)) {
            document.getElementById("edit_quantity_status").innerHTML = "Enter valid quantity.";
        } else {
            if (quantity == 0) {
                document.getElementById("edit_quantity_status").innerHTML = "Quantity should be greater than 0.";
            } else {
                if (quantity > 0) {
                    var url = 'QuantityCheck?sku=' + $("#edit_sku").val() + '&quantity='
                    url += quantity;
                    $.get(url, onHandQuantiyCheck);
                } else {
                    document.getElementById("edit_quantity_status").innerHTML = "";
                }
            }
        }
    }
    if (!validSKUMO(sku)) {
        document.getElementById("edit_sku_status").innerHTML = "Enter valid SKU, example: AAA-111.";
    } else {
        document.getElementById("edit_sku_status").innerHTML = "";
    }
    if (!validDateMO(date)) {
        document.getElementById("edit_date_status").innerHTML = "Enter valid Date of the form MM/DD/YYYY.";
    } else {
        document.getElementById("edit_date_status").innerHTML = "";
    }
    if (sku && date && quantity) {
        if (validSKUMO(sku) && validDateMO(date) && validQuantityMO(quantity) && quantity > 0 && document.getElementById("edit_quantity_status").innerHTML == "") {
            sendDataMOut();
        }
    }
}

function validSKUMO(r) {
    var sku = /^[A-Z]{3}-[0-9]{3}$/;
    if (sku.test(r) == false) {
        document.getElementById("edit_category").value = "";
        document.getElementById("edit_vendor").value = "";
        document.getElementById("edit_manufacturer").value = "";
        $('#edit_update').prop('disabled', true);
	$("#edit_pic").html("");
        return false;
    } else {
        return true;
    }
}

function emptyCheckMO(string) {
    return (!string || 0 === string.length);
}

function validDateMO(d) {
    var date = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (date.test(d) == false) {
        return false;
    } else {
        return true;
    }
}

function validQuantityMO(q) {
    if (new RegExp('^[0-9]*$').test(document.getElementById("edit_quantity").value)) {
        return true;
    } else {
        return false;
    }
}

function ClearFormMO() {
    document.getElementById("edit_sku_status").innerHTML = "";
    document.getElementById("edit_sku").value = "";
    document.getElementById("edit_category").value = "";
    document.getElementById("edit_vendor").value = "";
    document.getElementById("edit_manufacturer").value = "";
    document.getElementById("edit_quantity").value = "";
    $("#edit_pic").html("");
    $('#edit_update').prop('disabled', true);
    $('#editConf').css('display', "block");
}