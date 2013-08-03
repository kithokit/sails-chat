$('#send').on('click',function() {
  data = $('#message').val();
  console.log("data");
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

return false;
})

socket.get('/messages/', function(messages){
  $.each(messages, function(i, value) {
    $("#chattable").append("<li id='item'>" + value.messages + "</li>");
  });
});
socket.on('message', function(obj){
    $("#chattable").append("<li id='item'>" + obj.data.messages + "</li>");
});
