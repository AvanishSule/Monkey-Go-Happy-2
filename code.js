var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","ffae8f6b-7e6d-434f-be77-37057c7fa06e"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"TkdbxCAgUwhHLBe1XkNKxukP.mXwI54s","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"E38mgEO9bvXVN6pL9i4Jf3y_RO20adYO","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"lH66LPr8JHYrN6JpSkJJsnTchnmRnfU3","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"ffae8f6b-7e6d-434f-be77-37057c7fa06e":{"name":"meadow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK/category_backgrounds/meadow.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK/category_backgrounds/meadow.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var scene = createSprite(0,0,400,400);
scene.setAnimation("meadow_1");
scene.scale=2;
scene.velocityX=-2;
scene.x = scene.width/2;

var player = createSprite(100,340,20,50);
player.setAnimation("monkey");
player.scale = 0.1;

var ground = createSprite(400,350,800,10);

ground.velocityX = -4;
ground.x = ground.width/2;

var invisibleground = createSprite(400,355,800,5);
invisibleground.visible = false;

var bananagroup = createGroup();
var obstaclegroup = createGroup();

var count = 0;

function draw() {
  
  background("scene");
  if(scene.x<0){
    scene.x = scene.width/2;
  }
  
  ground.velocityX = (-6);
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  ground.visible = false;
  
  if(keyDown("space")){
    player.velocityY = -12;
  }
  player.velocityY = player.velocityY + 0.8;
  player.collide(invisibleground);
  
  if (count = 30){
    player.scale = 0.10;
  }
  
  if(obstaclegroup.isTouching(player)){
    player.scale = 0.2;
  }
  
  if (bananagroup.isTouching(player)){
    count = count + 2;
  }
  
  createEdgeSprites();
  
 spawnbanana();
 spawnobstacle();
 
  
  drawSprites();
  
   textSize(20);
  text("score:" + count,200,20);  
  
}
function spawnbanana(){
  if(World.frameCount % 80 === 0){
    var banana = createSprite(400,150,10,5);
    var rand = randomNumber(1,6);
    banana.y = randomNumber(140,220);
    banana.setAnimation("Banana");
    banana.scale = 0.10;
    banana.velocityX = -3;
    
    banana.setlifetime = 134;
    
    bananagroup.add(banana);
  }
}
function spawnobstacle(){
  if(World.frameCount % 300 === 0){
    var obstacle = createSprite(400,345,20,10);
    obstacle.scale = 0.10;
    obstacle.velocityX = -5;
    obstacle.setAnimation("Stone");
    obstacle.setlifetime = 80;
    
    obstaclegroup.add(obstacle);
  }
}




  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
