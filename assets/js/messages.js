$('#send').on('click',function() {
  data = $('#message').val();
  $.ajax({
          url: "http://localhost:1337/messages",
          type: 'post',
          data: {"messages":data},
          success: function (data) {
              if (data.success) {
              } else {
              }
          }
  });
  $('#message').val('');

return false;
})


$('#message').keypress(function(e) {
  if(e.which == 13) {
     $('#send').trigger('click');
  }
});

socket.get('/messages/', function(messages){
  $.each(messages, function(i, value) {
    $("#chattable").append("<li id='item'>" + value.messages + "</li>");
  });
});
socket.on('message', function(obj){
    $("#chattable").append("<li id='item'>" + obj.data.messages + "</li>");
});
