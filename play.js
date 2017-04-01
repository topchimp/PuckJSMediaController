var controls = require("ble_hid_controls");

NRF.setServices(undefined, { hid : controls.report });

function goBack(){
// Use the LEFT ARROW key to go to the next slide
  kb.tap(kb.KEY.LEFT, 0);
  LED2.set();
  setTimeout("LED2.reset()",1000);
}

function play(){
  controls.playpause();
  LED1.set();
  setTimeout("LED1.reset()",1000);
}

function skip(){
  controls.next();
  LED3.set();
  setTimeout("LED3.reset()",1000);
}

// debounce set to 50 to prevent unintended mechanical "bounce" triggers
setWatch(function(e) {
  var isLongPress = (e.time-e.lastTime)>0.4;
  if (isLongPress){
    skip();
  }
  else {
    play();
  }
}, BTN, {edge:"falling", debounce:50, repeat:true});
