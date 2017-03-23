var notes = ['B','c','c#','d','d#','e','f','f#','g','g#','a','a#','b','C'];
var keybind = ['S','D','R','F','T','G','H','U','J','I','K','O','L','P'];

$(document).ready(function() {
  ws = new WebSocket("ws://localhost:8080");

  ws.onopen = function() {
  };
  ws.onclose = function() {};

  ws.onmessage = function(evt) {
    console.log(evt.data);
    $('#content').append("<h1> " + evt.data + " </h1>");
    var message = JSON.parse(evt.data);

 // code to update the page given the incoming message

 // send a dummy message back to initiate
 // the onmessage callback again
 ws.send("next message please!");


}
});


$(function(){
  setup();
  


  $("html").addClass("keybind");
    

  $(document).keydown(function(e){
    var pressed = String.fromCharCode(e.which);
    //console.log(pressed);
    if(keybind.indexOf(pressed) !== -1){
      var index = keybind.indexOf(pressed);
         
      $('.key[data-note="' + notes[index] + '"]').mousedown();
      

      setTimeout(function(){
        $(".key").removeClass("active").unbind("mouseover");      
      }, 300);
    }
  });

  $(".key").mousedown(function(){
    var $this = $(this);
    var note = $(this).attr("data-note");
    var octave = $(this).attr("data-octave");
    var key = $(this).attr("data-bind");
    
    play($this, key);
    
    $(".key").mouseover(function(){
      var $this = $(this);
      var note = $(this).attr("data-note");
      var octave = $(this).attr("data-octave");

      play($this, note, octave);    
    });
    
    $(document).mouseup(function(){
      $(".key").unbind("mouseover");
    });
  });
});

function setup() {
    $.each(notes, function(i, note){
      var octave = 5;

      if(note === "B"){
        var octave = octave - 1;
      }
      if(note === "C"){
        var octave = octave + 1;
      }
    
      var $key = $('<button class="key" data-bind="' + keybind[i] + '" data-note=' + note + ' data-octave=' + octave + '></button>');
    
      $(".keyboard").append($key);
    });
}


function play($this, key) {
   console.log(key);
  //console.log(note + octave);
  ws.send(key.toLowerCase());
  $this.addClass("active");

  
}
