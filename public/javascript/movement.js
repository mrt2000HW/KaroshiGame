//keycode numbers
var Key = {LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40};

//listen for keyup events
window.addEventListener('keyup', function(event) {
    if(event.keyCode === Key.LEFT){
      socket.emit('keyPress', { inputId: 'left', press : false})
    }
    else if(event.keyCode === Key.RIGHT){
      socket.emit('keyPress', {inputId: 'right', press: false});
    }
    else if(event.keyCode === Key.UP){
      socket.emit('keyPress', {inputId: 'up', press: false});
    }
    else if(event.keyCode === Key.DOWN){
      socket.emit('keyPress', {inputId: 'down', press: false});
    }
  });
// listen for keydown events 
window.addEventListener('keydown', function(event){
    if(event.keyCode === Key.LEFT){
        socket.emit('keyPress', { inputId: 'left', press : true});
      }
      else if(event.keyCode === Key.RIGHT){
        socket.emit('keyPress', {inputId: 'right', press: true});
      }
      else if(event.keyCode === Key.UP){
        socket.emit('keyPress', {inputId: 'up', press: true});
      }
      else if(event.keyCode === Key.DOWN){
        socket.emit('keyPress', {inputId: 'down', press: true});
        console.log(Key.LEFT);
      }
});





//data will contain list of player info that server sends. e.g data = [{score: 44564, name: 'doughnut', x: 500, y: 625},
//                                                  {score: 44524, name: 'binks', x: 532, y: 852}]
var pos = [];
//socket listens for player movement updates
socket.on('updatePos', function(positions){
    pos = positions;
});






function updateMovementPositions(){
    let board = document.querySelector('.game-board');
    //remove all virus elements before adding new ones with updated position
    while (document.getElementsByClassName('virus')[0]) {
        document.getElementsByClassName('virus')[0].remove();
    }
    // clearViruses(document.querySelectorAll('.virus'));
    for(var i = 0; i < pos.length; i++){
        let virus = document.createElement('img');
        virus.setAttribute('src', '../images/redvir.png');
        virus.className = 'icon';
        virus.style.position = 'absolute';
        virus.style.width = '50px';
        virus.style.height = '50px';
        virus.style.zIndex = '-1';
        virus.style.left = pos[i].x + 'px';
        virus.style.top = pos[i].y + 'px';
        board.appendChild(virus);
    }   
};

//function invoked every 50 ms to update virus positions
setInterval(updateMovementPositions, 50);



//function listener(evt, element, fn) {
    //     if (window.addEventListener) 
    //         element.addEventListener(evt, fn, false);
    //     else
    //       element.attachEvent('on' + evt, fn);
    //   }
      
    
    //   function move(evt) {
    //     if (!evt)
    //       evt = window.event;
    //     var keycode = evt.keyCode || evt.which; 
      
    //     var info = document.getElementById("chat-list");
    //     var blob = document.getElementById("icon");
    //     switch (keycode) {
    //         case Key.LEFT:
    
    //           blob.style.left = parseInt(blob.style.left) - 5 + 'px';
    //           movePointer(keycode);
    //           direction = "Left";
    //           checkBoundary(blob,direction);
    //         break;
    //         case Key.UP:
    //           blob.style.top = parseInt(blob.style.top) - 5 + 'px';
    //           movePointer(keycode);
    //           direction = "Up";
    //           checkBoundary(blob,direction);
    //         break;
    //         case Key.RIGHT:
    //           blob.style.left = parseInt(blob.style.left) + 5 + 'px';
    //           movePointer(keycode);
    //           direction = "Right";
    //           checkBoundary(blob,direction);
    
    //         break;
    //         case Key.DOWN:
    //           blob.style.top = parseInt(blob.style.top) + 5 + 'px';
    //           movePointer(keycode);
    //           direction = "Down";
    //           checkBoundary(blob,direction);
    //         break;
    //         case 32: // space button
                
    //             switch (direction) {
    //               case "Left":
    //                 playerShootLeft();
    //               break;
    //               case "Right":
    //                 playerShootRight();
    //               break;
    //               case "Up":
    //                 playerShootUp();
    //               break;
    //               case "Down":
    //                 playerShootDown();
    //               break;
    //             }
    //         break;
    //         default:
    //             return;
    //     }
    //     for (let i = 0; i < pelletes.length; i++){
    //       if (cross(pelletes[i], blob)){
    //         var board = document.querySelector(".game-board");
    //         board.removeChild(pelletes[i]);
    //         playerScore= playerScore + 5;
    //         score.innerHTML = userName+" : "+playerScore;
    //           pelletes.splice(i, 1);
    //         pelletes.push(createpellet());
    //       }
    //     }
    //     for (let i = 0; i < masks.length; i++){
    //       if (cross(masks[i], blob)){
    //         var board = document.querySelector(".game-board");
    //         board.removeChild(masks[i]);
    //           playerScore = playerScore - 2;
    //         score.innerHTML = userName+" : "+playerScore;
    //           masks.splice(i, 1);
    //         masks.push(spawnmasks());
    //       }
    //     }
    //     for (let i = 0; i < sanitizers.length; i++){
    //       if (cross(sanitizers[i], blob)){
    //         var board = document.querySelector(".game-board");
    //         board.removeChild(sanitizers[i]);
    //         playerScore= playerScore - 3;
    //         score.innerHTML = userName+" : "+playerScore;
    //           sanitizers.splice(i, 1);
    //         sanitizers.push(spawnsan());
    //       }
          
    //     }
    // }
    // listener('keydown', document, move);
    
    // window.addEventListener('keydown', function() {
    //   document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
    // });
    // function checkBoundary(element, direction){
    //   // var blob = document.getElementById("icon");
    //   switch (direction) {
    //     case "Left":
    //       if(10 > parseInt(element.style.left)){
    //         element.style.left = parseInt(element.style.left) + 5 + 'px';
    //       }
    //     break;
    //     case "Right":
    //       if(950 < parseInt(element.style.left)){
    //         element.style.left = parseInt(element.style.left) - 5 + 'px';
    //       }
    //     break;
    //     case "Up":
    //       if(10 > parseInt(element.style.top)){
    //         element.style.top = parseInt(element.style.top) + 5 + 'px';
    //       }
    //     break;
    //     case "Down":
    //       if(600 < parseInt(element.style.top)){
    //         element.style.top = parseInt(element.style.top) - 5 + 'px';
    //       }
    //     break;
    //   }
    // }
    
    //   function message()//to display the chat text
    //   {
    //       var chat = document.getElementById("chat-input");
    //       document.getElementById("chat-list").innerHTML = chat.value;
    //   }
      
    //   function playerShootUp(){ // to shoot bullets upwards
    //     var element = document.getElementById("icon");
    //     var laser = document.getElementById("laser");
    //     laser.style.top = parseInt(element.style.top) + 50 + 'px';
    //     laser.style.left = parseInt(element.style.left) + 50 +'px';
    //     let start = Date.now();
    
    //     let timer = setInterval(function() {
    //     let timePassed = Date.now() - start;
    //     laser.style.top = parseInt(laser.style.top) -8 +'px';
        
    //     shootSanitizer();
    //     shootMask();
    //     if (timePassed >= 2000)
    //     {clearInterval(timer); return;}
    //   }, 20);}
    
    //   function playerShootDown(){ // to shoot bullets downwards
    //     var element = document.getElementById("icon");
    //     var laser = document.getElementById("laser");
    //     laser.style.top = parseInt(element.style.top) + 50 + 'px';
    //     laser.style.left = parseInt(element.style.left) + 50 +'px';
    //     let start = Date.now();
    
    //     let timer = setInterval(function() {
    //     let timePassed = Date.now() - start;
    
        
    //     laser.style.top = parseInt(laser.style.top) +8 +'px';
    
    //     shootSanitizer();
    //     shootMask();
    //     if (timePassed >= 2000)
    //     {clearInterval(timer); return;}
        
    //   }, 20);}
    
    //   function playerShootRight(){// to shoot bullets to the right
    //     var element = document.getElementById("icon");
    //     document.getElementById("laser").style.transform = "rotate(90deg)";
    //     var laser = document.getElementById("laser");
    //     laser.style.top = parseInt(element.style.top) + 50 + 'px';
    //     laser.style.left = parseInt(element.style.left) + 50 +'px';
    //     let start = Date.now();
    
    //     let timer = setInterval(function() {
    //     let timePassed = Date.now() - start;
    
    //     if (timePassed >= 2000)
    //     {clearInterval(timer); return;}
    //     laser.style.left = parseInt(laser.style.left) +8 +'px';
    
    //     shootSanitizer();
    
    //     shootMask();
    //   }, 20);}
    
    //   function playerShootLeft(){ // to shoot bullets to the left
    //     var element = document.getElementById("icon");
    //     document.getElementById("laser").style.transform = "rotate(90deg)";
    //     var laser = document.getElementById("laser");
    //     laser.style.top = parseInt(element.style.top) + 50 + 'px';
    //     laser.style.left = parseInt(element.style.left) + 50 +'px';
    //     let start = Date.now();
    
    //     let timer = setInterval(function() {
    //     let timePassed = Date.now() - start;
    
    //     if (timePassed >= 2000)
    //     {clearInterval(timer); return;}
    //     laser.style.left = parseInt(laser.style.left) -8 +'px';
    
    //     shootSanitizer();
    
    //     shootMask();
    
    //   }, 20);}
    
    //   function movePointer(keycode){
    //       var pointer = document.getElementById("arrow");
    //       var element = document.getElementById("icon");
    //         switch (keycode) {
            
    //         //Left
    //         case 37:
    //             document.getElementById("arrow").style.transform = "rotate(135deg)";
    //             pointer.style.top = parseInt(element.style.top) + 50 + 'px';
    //             pointer.style.left = parseInt(element.style.left) + 50 +'px';
    //         break;
    //         //Right
    //         case 39:
    //             document.getElementById("arrow").style.transform = "rotate(-45deg)";
    //             pointer.style.top = parseInt(element.style.top) + 50 + 'px';
    //             pointer.style.left = parseInt(element.style.left) + 50 +'px';
    //         break;
    //         //Up
    //         case 38:
    //             document.getElementById("arrow").style.transform = "rotate(-135deg)";
    //             pointer.style.top = parseInt(element.style.top) + 50  + 'px';
    //             pointer.style.left = parseInt(element.style.left) + 50 +'px';
    //         break;
    //         //Down
    //         case 40:
    //             document.getElementById("arrow").style.transform = "rotate(45deg)";
    //             pointer.style.top = parseInt(element.style.top) + 50 + 'px';
    //             pointer.style.left = parseInt(element.style.left) + 50 +'px';
    //         break;
    // }}
    
    
    // function cross(element1, element2) {
    //   left1 = element1.offsetLeft; //i1x
    //   top1 = element1.offsetTop; //i1y
    //   right1 = element1.offsetLeft + element1.offsetWidth; //r1x
    //   bottom1 = element1.offsetTop + element1.offsetHeight; //r1y
    
    //   left2 = element2.offsetLeft; //i2x
    //   top2 = element2.offsetTop; //i2y
    //   right2 = element2.offsetLeft + element2.offsetWidth; //r2x
    //   bottom2 = element2.offsetTop + element2.offsetHeight; //r2y
    
    //   x_overlap = Math.max(0, Math.min(right1, right2) - Math.max(left1, left2));
    //   y_overlap = Math.max(0, Math.min(bottom1, bottom2) - Math.max(top1, top2));
    //   overlapArea = x_overlap * y_overlap;
    
    //   if (overlapArea == 0 || isNaN(overlapArea)) {
    //       return false;
    //   }
    //   return true;
    
    // }
    
    // function shootSanitizer (){
    //   for(let i = 0; i < sanitizers.length; i++){
    //     if(cross(sanitizers[i],laser)){
    //       var board = document.querySelector(".game-board");
    //       board.removeChild(sanitizers[i]);
    //       sanitizers.push(spawnsan());
    //     }
    //   }
    // }
    
    // function shootMask(){
    //   for (let i = 0; i < masks.length; i++){
    //     if (cross(masks[i], laser)){
    //       var board = document.querySelector(".game-board");
    //       board.removeChild(masks[i]);
    //       masks.push(spawnmasks());
    //     }
    //   }
    // }
    // pelletes = new Array();
    // for (var i = 0; i < 200; i++ ){
    //   pelletes.push(createpellet());
    // }
    
    // sanitizers = new Array();
    // for (var i = 0; i < 10; i++ ) {
    //     sanitizers.push(spawnsan());
    // }
    // masks = new Array();
    // for (var i = 0; i < 10; i++ ) {
    //     masks.push(spawnmasks());
    // 