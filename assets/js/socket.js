var socket = io.connect("http://localhost:1337");
socket.on('connect', function() {
  socket.request('/message', {} , function(messages){
    $.each(messages, function(i, value) {
      $("#chattable").append("<li class='list-group-item' id='item'>" + value.message + "</li>");
    });
  });
  socket.on('message', function(obj){
    $("#chattable").append("<li class='list-group-item' id='item'>" + obj.data.message + "</li>");
  });
});
