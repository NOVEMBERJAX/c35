var database,ball,position;
function setup()
{
    createCanvas(800,700);
    database=firebase.database();
    ball=createSprite(400,300,20,20);
    ball.shapeColor="red";
    var dbref=database.ref("ball/position");
    dbref.on("value",readdb);
}
function draw()
{
    background("lightblue");

    if(keyDown(LEFT_ARROW))
    {
        writedb(-1,0);
    }
    else if(keyDown(RIGHT_ARROW))
    {
        writedb(1,0);
    }
    else if(keyDown(UP_ARROW))
    {
        writedb(0,-1);
    }
    else if(keyDown(DOWN_ARROW))
    {
        writedb(0,+1);
    }

    drawSprites();
}
function readdb(data)
{
  position = data.val();
  ball.x = position.x;
  ball.y = position.y;
}

function writedb(x,y)
{
  database.ref("ball/position").set({"x":position.x+x,"y" :position.y+y})
}
