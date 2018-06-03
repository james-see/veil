// keys that are accepted keyboard hotkeys
var items = [13,32,190,187,48];
// select one in a pseudo-random way
var item = items[Math.floor(Math.random()*items.length)];
$(document).ready(function() {
	if (item == 13) {
		var keytype = 'enter';
	}
	else if (item == 32) {
		var keytype = 'spacebar';
	}
	else if (item == 190) {
		var keytype = 'period';
	}
	else if (item == 187) {
		var keytype = 'equals';
	}
	else if (item == 48) {
		var keytype = 'delete';
	}
	$('.welcometoveil').html("<h1>Hello visitor. This site will only display content while you are pressing the <span id='hl'>"+keytype+"</span> key, otherwise it disappears</h1>");
});
$(function() {
// when you press the required key, display stuff and start appending
$(document).keydown(function(e) {
    var wordstuff = ['always be filling up junk', 'yes, I am a jerk', 'dont mind me, just wasting kilobytes', 'your mother was a snowblower', 'its not a tumour', 'not a browser, bowser', 'lol', '4 the lolz', 'love your mom', 'whos your daddy and what does he do?']
    if(e.which == item) {
    	$("#meat").css('display','block');
    	$("#lister").css('display','block');
    	console.log('you pressed enter!');
        $("#output1").text('you pressed enter!');
		var entry = wordstuff[Math.floor(Math.random()*wordstuff.length)];
		//var entry = 'hello';
        var $newdiv1 = $( "<br /><li><span id='output2'>"+entry+"</li>" );
        $( "#lister" ).append( $newdiv1 );
        // add the meat!
    	loadtext();
  //alert( "Handler for .keyup() called." );
}
});
// when you stop pressing that random key that was selected stop displaying anything
$(document).keyup(function(e) {
	       if(e.which == item) {
	        $("#meat").css('display','none');
	        $("#lister").css('display','none');
	        // console.log('you stopped pressing hot key!');
	        $("#output1").text('you stopped pressing hot key!').delay(1000).fadeOut(40);

	        }
	        	        setInterval(generate, 1000);
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
        	alert("AJAX Error with adding group, check to make sure php running properly");
      	}	

	});
}