$(function() {
$(document).keydown(function(e) {
    if(e.which == 13) {
    	loadtext();
  //alert( "Handler for .keyup() called." );
}
});

})

// Functions

// function to create token on admin.php
function loadtext() {
	var text = $("#meat").text();
	console.log(text);
	$.ajax({url: "../../actions/textme.php",
		type: "post",
		data: {"action": "textme"},
		dataType: "text",
		success: function(data) {
			//console.log(data);
			if (data != 'failure'){
				$('#meat').html(data);
			}
			else {alert("fail");}
		},
      	error: function(xhr){
        	alert("AJAX Error with adding group");
      	}	

	});
}