function getCookie(name)
{
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?

            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

$.ajaxSetup({ 
     beforeSend: function(xhr, settings) {
         if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
             // Only send the token to relative URLs i.e. locally.
             xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
         }
     } 
});


submit.onclick = function create(){
	var text = document.getElementById("add").value; 
	console.log(text);
	$.ajax({
	  url: '/my_ajax_request/',
	  dataType: 'json',
	  type: 'POST',
	  data: {	  	
	  	'message': text,
	  },
      success: function (data) {
            var id = data.id;
            $('#field').append('<li data-id="'+id+'" class="companydelete">'+text+' '+'<a href="#">Удалить</a></li><hr>');
	  }
	});
	$('#add').val('');
	
}

$(".companydelete").click(function(){
	var id = $(this).data("id")
	console.log('trigger')
	$.ajax({
	  url: '/companydeleteitem/',
	  data: {
	  	'id': id,
	  },
	  dataType: 'json',
	  type: 'POST',
	});
})




$("#submit2").click(function (){
	$('#field2').append('<li class="cd">123</li>');
});

$("#field2").on('click', "li.cd",function(){
	console.log('allright')
});


var counter = 0;
$("#generate").click(function() {
    $("h2").append("<p class='test'>click me " + (++counter) + "</p>")
});

// With on():

$("h2").on("click", "p.test", function(){
    console.log($(this).text());
});