$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createBadPlatform(0, 735, 1400, 50, "red");
createPlatform(0, 730, 140, 20, "green");
createPlatform(370, 620, 50, 5, "green");
createPlatform(630, 550, 100, 5, "green");
createPlatform(900, 700, 100, 5, "green");
createPlatform(1000,600, 5, 105, "green");
createPlatform(1000, 600, 100, 5, "green");
createPlatform(1200, 500, 100, 5, "green");
createPlatform(1000, 400, 100, 5, "green");
createPlatform(200, 500, 100, 5, "green");
createPlatform(200, 0, 5, 500, "green");
createPlatform(300, 300, 650, 5, "green");
createPlatform(400, 170, 500, 5, "green");
createPlatform(1000, 170, 1400, 5, "green");
createBadPlatform(480, 299, 25, 6, "red");
createBadPlatform(600, 299, 25, 6, "red");
createBadPlatform(720, 299, 25, 6, "red");
createBadPlatform(840, 299, 25, 6, "red");
createPlatform(1000, 170, 5, 135, "green", 1000, 1000, 0, 35, 170, 1);
    // TODO 3 - Create Collectables
createCollectable("database", 930, 650);
createCollectable("max",230, 450);
createCollectable("steve", 1330, 120);
    
    // TODO 4 - Create Cannons
createCannon("right", 630, 1050);
createCannon("left", 60, 1200);
createCannon("right", 500, 30000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
