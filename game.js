let roll = 0;
let playerDice = 0;
let dragonDice = 0;
let playerHealth = 100;
let dragonHealth = 100;
let turnCount = 0;

//Text & rectangle elements adapted from:
//https://www.html5canvastutorials.com/tutorials/html5-canvas-element/

var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      

      //Border
      context.beginPath();
      context.rect(5, 5, 1300, 600);
      context.fillStyle = 'lightgreen';
      context.fill();
      context.lineWidth = 7;
      context.strokeStyle = 'black';
      context.stroke();

      //Rule Sheet
      context.beginPath();
      context.rect(950, 5, 357, 600);
      context.fillStyle = 'lightgreen';
      context.fill();
      context.lineWidth = 7;
      context.strokeStyle = 'black';
      context.stroke();


      context.font = '30pt Times New Roman';
      context.fillStyle = 'black';
      context.fillText('Rolls:', 1000, 50);

      context.font = '16pt Times New Roman';
      context.fillStyle = 'black';
      context.fillText('(1): Self inflict 30 hp', 975, 100);

      context.font = '16pt Times New Roman';
      context.fillStyle = 'black';
      context.fillText('(2-9): Self inflict (10 - dice) hp', 975, 150);

      context.font = '16pt Times New Roman';
      context.fillStyle = 'black';
      context.fillText('(10): Miss', 975, 200);

      context.font = '16pt Times New Roman';
      context.fillStyle = 'black';
      context.fillText('(11-19): Deal dice amount hp', 975, 250);

      context.font = '16pt Times New Roman';
      context.fillStyle = 'black';
      context.fillText('(20): Deal 30 hp', 975, 300);

      context.font = '16pt Times New Roman';
      context.fillStyle = 'black';
      context.fillText('Score: turns taken if player wins', 975, 350);

      context.font = '16pt Times New Roman';
      context.fillStyle = 'black';
      context.fillText('(lower = better)', 975, 400);


      //Dice

      context.font = '30pt Times New Roman';
      context.fillStyle = 'purple';
      context.fontweight = 'bold';
      context.fillText('Roll', 65, 140);

      context.beginPath();
      context.rect(50, 150, 100, 100);
      context.fillStyle = 'black';
      context.fill();
      context.lineWidth = 7;
      context.strokeStyle = 'black';
      context.stroke();



      //Player Rolled

      context.font = '30pt Times New Roman';
      context.fillStyle = 'purple';
      context.fillText('You rolled:', 710, 40);

      context.beginPath();
      context.rect(200, 50, 500, 100);
      context.fillStyle = 'DeepSkyBlue';
      context.fill();
      context.lineWidth = 7;
      context.strokeStyle = 'black';
      context.stroke();

      context.font = '25pt Times New Roman';
      context.fillStyle = 'purple';
      context.fillText('Player Health: ' + playerHealth, 225, 90);

      context.beginPath();
      context.rect(200, 115, ((playerHealth)*5), 35);
      context.fillStyle = 'red';
      context.fill();
      context.lineWidth = 7;
      context.strokeStyle = 'black';
      context.stroke();

      context.beginPath();
      context.rect(700, 50, 200, 100);
      context.fillStyle = 'blue';
      context.fill();
      context.lineWidth = 7;
      context.strokeStyle = 'black';
      context.stroke();

    function playerHealthCounter()
    {
      context.clearRect(200, 50, 500, 100);
      context.beginPath();
      context.rect(200, 50, 500, 100);
      context.fillStyle = 'DeepSkyBlue';
      context.fill();
      context.lineWidth = 7;
      context.strokeStyle = 'black';
      context.stroke();

      context.font = '25pt Times New Roman';
      context.fillStyle = 'purple';
      context.fillText('Player Health: ' + playerHealth, 225, 90);

      context.beginPath();
      context.rect(200, 115, ((playerHealth)*5), 35);
      context.fillStyle = 'red';
      context.fill();
      context.lineWidth = 7;
      context.strokeStyle = 'black';
      context.stroke();

        
    }
    

    function playerRoll(n)
    {
        context.clearRect(700, 50, 200, 100);
        context.beginPath();
        context.rect(700, 50, 200, 100);
        context.fillStyle = 'blue';
        context.fill();
        context.lineWidth = 7;
        context.strokeStyle = 'black';
        context.stroke();
        
        context.font = '30pt Times New Roman';
        context.fillStyle = 'black';
        context.fillText(n.toString(), 750, 100);
    }

      //dragon's roll

      context.font = '30pt Times New Roman';
      context.fillStyle = 'purple';
      context.fillText('Dragon rolled:', 690, 235);

      context.beginPath();
      context.rect(200, 250, 500, 100);
      context.fillStyle = 'DeepSkyBlue';
      context.fill();
      context.lineWidth = 7;
      context.strokeStyle = 'black';
      context.stroke();

      context.font = '25pt Times New Roman';
      context.fillStyle = 'purple';
      context.fillText('Dragon Health: ' + dragonHealth, 225, 290);

      context.beginPath();
      context.rect(200, 315, ((dragonHealth)*5), 35);
      context.fillStyle = 'red';
      context.fill();
      context.lineWidth = 7;
      context.strokeStyle = 'black';
      context.stroke();

      context.beginPath();
      context.rect(700, 250, 200, 100);
      context.fillStyle = 'orange';
      context.fill();
      context.lineWidth = 7;
      context.strokeStyle = 'black';
      context.stroke();

    function dragonHealthCounter()
    {
        context.clearRect(200, 250, 500, 100);
        context.beginPath();
        context.rect(200, 250, 500, 100);
        context.fillStyle = 'DeepSkyBlue';
        context.fill();
        context.lineWidth = 7;
        context.strokeStyle = 'black';
        context.stroke();
  
        context.font = '25pt Times New Roman';
        context.fillStyle = 'purple';
        context.fillText('Dragon Health: ' + dragonHealth, 225, 290);
  
        context.beginPath();
        context.rect(200, 315, ((dragonHealth)*5), 35);
        context.fillStyle = 'red';
        context.fill();
        context.lineWidth = 7;
        context.strokeStyle = 'black';
        context.stroke();

        
    }

      function dragonRoll(n)
    {
        //context.clearRect(0,0,canvas.width,canvas.height)
        context.clearRect(700, 250, 200, 100);
        context.beginPath();
        context.rect(700, 250, 200, 100);
        context.fillStyle = 'orange';
        context.fill();
        context.lineWidth = 7;
        context.strokeStyle = 'black';
        context.stroke();
        
        context.font = '30pt Times New Roman';
        context.fillStyle = 'black';
        context.fillText(n.toString(), 750, 300);
    }



      //interaction menu
      context.beginPath();
      context.rect(50, 400, 850, 150);
      context.fillStyle = 'orange';
      context.fill();
      context.lineWidth = 7;
      context.strokeStyle = 'black';
      context.stroke();


      context.beginPath();
      context.rect(750, 400, 150, 150);
      context.fillStyle = 'orange';
      context.fill();
      context.lineWidth = 7;
      context.strokeStyle = 'black';
      context.stroke();


      function printScore()
      {
        context.font = '20pt Times New Roman';
        context.fillStyle = 'black';
        if (playerHealth > 0)
        {
            context.fillText(('Score: ' + turnCount), 760, 475)
        }
        else
        {
            context.fillText(('Score: N/A'), 760, 475)
        }
      }

      function gameControl(p,d)
      {
        
        if (playerHealth <= 0)
        {
            return;
        }
        if (dragonHealth <= 0)
        {
            return;
        }

        context.clearRect(50, 400, 850, 150);
        context.beginPath();
        context.rect(50, 400, 850, 150);
        context.fillStyle = 'orange';
        context.fill();
        context.lineWidth = 7;
        context.strokeStyle = 'black';
        context.stroke();

        context.beginPath();
        context.rect(750, 400, 150, 150);
        context.fillStyle = 'orange';
        context.fill();
        context.lineWidth = 7;
        context.strokeStyle = 'black';
        context.stroke();


        //player's turn
        if (p == 1)
        {
            playerHealth = (playerHealth - 30)

            context.font = '25pt Times New Roman';
            context.fillStyle = 'purple';
            context.fillText('Nat 1! 30 hp self inflicted! (Ouch!)', 65, 435);
        }
        else if (p >= 2 && p <= 9)
        {
            playerHealth = (playerHealth - (10 - p))

            context.font = '25pt Times New Roman';
            context.fillStyle = 'purple';
            context.fillText('You missed... and dealt ' + (10-p) + ' damage to yourself!', 65, 435);
        }
        else if (p == 10)
        {
            context.font = '25pt Times New Roman';
            context.fillStyle = 'purple';
            context.fillText('10... You missed!', 65, 435);

        }
        else if (p >= 11 && p <= 19)
        {
            dragonHealth = (dragonHealth - p)

            context.font = '25pt Times New Roman';
            context.fillStyle = 'purple';
            context.fillText('You dealt ' + p + ' Damage against dragon!', 65, 435);
        }
        else
        {
            dragonHealth = (dragonHealth - 30)

            context.font = '25pt Times New Roman';
            context.fillStyle = 'purple';
            context.fillText('Nat 20! 30 damage against dragon!', 65, 435);
        }

        turnCount++;
        
        //check if player or dragon are defeated
        if (playerHealth <= 0 && dragonHealth <= 0)
        {
            playerHealth = 0;
            dragonHealth = 0;
            context.font = '25pt Times New Roman';
            context.fillStyle = 'purple';
            context.fillText('Its a tie!', 65, 515);
            playerHealthCounter()
            dragonHealthCounter()
            printScore()
            return;
        }
        else if (playerHealth <= 0)
        {
            playerHealth = 0;
            context.font = '25pt Times New Roman';
            context.fillStyle = 'purple';
            context.fillText('Game over! Dragon wins!', 65, 515);
            playerHealthCounter()
            dragonHealthCounter()
            printScore()
            return;
        }
        else if (dragonHealth <= 0)
        {
            dragonHealth = 0;
            context.font = '25pt Times New Roman';
            context.fillStyle = 'purple';
            context.fillText('You Win! (You defeated the dragon!)', 65, 515);
            playerHealthCounter()
            dragonHealthCounter()
            printScore()
            return;
        }

        playerHealthCounter()
        dragonHealthCounter()


        //dragon's turn
        if (d == 1)
        {
            dragonHealth = (dragonHealth - 30)

            context.font = '25pt Times New Roman';
            context.fillStyle = 'purple';
            context.fillText('Nat 1! 30 hp self inflicted to dragon! (Ouch!)', 65, 475);
        }
        else if (d >= 2 && d <= 9)
        {
            dragonHealth = (dragonHealth - (10 - d))

            context.font = '25pt Times New Roman';
            context.fillStyle = 'purple';
            context.fillText('Dragon missed... and dealt ' + (10-d) + ' damage to themself!', 65, 475);
        }
        else if (d == 10)
        {
            context.font = '25pt Times New Roman';
            context.fillStyle = 'purple';
            context.fillText('10... You dodged the dragon attack!', 65, 475);

        }
        else if (d >= 11 && d <= 19)
        {
            playerHealth = (playerHealth - d)

            context.font = '25pt Times New Roman';
            context.fillStyle = 'purple';
            context.fillText('Dragon dealt ' + d + ' Damage to you!', 65, 475);
        }
        else
        {
            playerHealth = (playerHealth - 30)

            context.font = '25pt Times New Roman';
            context.fillStyle = 'purple';
            context.fillText('Nat 20! Dragon launched fireball, dealing 30 hp!', 65, 475);
        }

        //check if player or dragon are defeated
        if (playerHealth <= 0 && dragonHealth <= 0)
        {
            playerHealth = 0;
            dragonHealth = 0;
            context.font = '25pt Times New Roman';
            context.fillStyle = 'purple';
            context.fillText('Its a tie!', 65, 515);
            playerHealthCounter()
            dragonHealthCounter()
            printScore()
            return;
        }

        if (playerHealth <= 0)
        {
            playerHealth = 0;
            context.font = '25pt Times New Roman';
            context.fillStyle = 'purple';
            context.fillText('Game over! Dragon wins!', 65, 515);
            playerHealthCounter()
            dragonHealthCounter()
            printScore()
            return;
        }
        else if (dragonHealth <= 0)
        {
            dragonHealth = 0;
            context.font = '25pt Times New Roman';
            context.fillStyle = 'purple';
            context.fillText('You Win! (Dragon defeated!)', 65, 515);
            playerHealthCounter()
            dragonHealthCounter()
            printScore()
            return;
        }

        playerHealthCounter()
        dragonHealthCounter()
        
      }

      //Dice button implementation


      //Dice's event listener adapted from:
      //https://stackoverflow.com/questions/9880279/how-do-i-add-a-simple-onclick-event-handler-to-a-canvas-element

      var elem = document.getElementById('myCanvas'),
      elemLeft = elem.offsetLeft + elem.clientLeft,
      elemTop = elem.offsetTop + elem.clientTop,
      context = elem.getContext('2d'),
      elements = [];


      elem.addEventListener('click', function(event) {
        var x = event.pageX - elemLeft,
            y = event.pageY - elemTop;
    

        //instructions for rolling if clicked
        elements.forEach(function(element) {
            if (y > element.top && y < element.top + element.height 
                && x > element.left && x < element.left + element.width) {
                playerDice = (Math.floor(Math.random() * 20) + 1);
                playerRoll(playerDice)

                
                dragonDice = (Math.floor(Math.random() * 20) + 1);
                dragonRoll(dragonDice)


                gameControl(playerDice,dragonDice)
            }
        });
    
    }, false);

      elements.push({
      colour: 'gold',
      width: 90,
      height: 90,
      top: 155,
      left: 55,
      });

      elements.forEach(function(element) {
      context.fillStyle = element.colour;
      context.fillRect(element.left, element.top, element.width, element.height);
      });


      context.beginPath();
      context.rect(73, 170, 8, 8);
      context.rect(73, 220, 8, 8);
      context.rect(120, 170, 8, 8);
      context.rect(120, 220, 8, 8);
      context.rect(96.5, 195, 8, 8);
      context.fillStyle = 'black';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();