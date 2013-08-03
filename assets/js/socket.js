var socket = io.connect("http://localhost:1337");
socket.on('connect', function() {
  socket.request('/message', {} , function(messages){
    $.each(messages, function(i, value) {
      $("#chattable").append("<li id='item'>" + value.message + "</li>");
    });
  });
  socket.on('message', function(obj){
    $("#chattable").append("<li id='item'>" + obj.data.message + "</li>");
  });
});
