      let result = "";
      let playermoves = "";
      let computermoves = "";
      let elapsedTime = 0;
      let isTimerRunning = false;

      let name = localStorage.getItem("name") || undefined; // Retrieve name from localStorage

      const score = JSON.parse(localStorage.getItem("score")) || {
        wins: 0,
        losses: 0,
        ties: 0,
      };

      /*
            if (!score){
              score= {
                wins: 0,
                losses :0,
                ties:0
              };
             
            }*/
       windowonload();
      let  isautoplaying = false;
      let   intervalid;
      let  autodom  = 'Autoplay';
          document.querySelector('.jsplay').innerHTML=  autodom;

          const buttonelement= document.querySelector('.jsplay');

          function autoplay() {
            if (!isautoplaying) {
              intervalid = setInterval(function () {
                const playermove = pickComputerMove();
                playgame(playermove);
              }, 1000);
              isautoplaying = true;
              let autodom = 'Stop Autoplay';
              buttonelement.innerHTML = autodom;
              buttonelement.classList.add('autoplaystart');
              buttonelement.classList.remove('autoplay');
              
              startTimer()
              myTimer()
          
            } else {
              stopTimer()
              myTimer()
             
              clearInterval(intervalid);
              isautoplaying = false;
              let autodom = 'Autoplay';
              buttonelement.innerHTML = autodom;
              buttonelement.classList.remove('autoplaystart');
              buttonelement.classList.add('autoplay');
            }
          }

          function startTimer() {
            isTimerRunning = true;
        }
        
        function stopTimer() {
            isTimerRunning = false;
        }

          function myTimer() {
           
            if (isTimerRunning) {
              document.getElementById("demo").innerHTML = formatTime(elapsedTime);
              elapsedTime++;
          } else {
            elapsedTime=0
              document.getElementById("demo").innerHTML = formatTime(elapsedTime);
          }
          setTimeout(myTimer, 1000);
        }
        function formatTime(seconds) {
          const minutes = Math.floor(seconds / 60);
          const remainingSeconds = seconds % 60;
          return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
        }
        
        function padZero(number) {
          return number < 10 ? `0${number}` : number;
        }

        // Example of how to use start, stop, and reset functions
// Start the timer
startTimer();

      function playgame(playermove) {
        playermoves = playermove;

        const computermove = pickComputerMove();
        result = "";
        computermoves = computermove;

        if (playermove === "scissors") {
          if (computermove === "paper") {
            result = "you win.";
          } else if (computermove === "rock") {
            result = "you lose.";
          } else if (computermove === "scissors") {
            result = "equel tie.";
          }
        } else if (playermove === "rock") {
          if (computermove === "rock") {
            result = "equel tie.";
          } else if (computermove === "paper") {
            result = "you lose.";
          } else if (computermove === "scissors") {
            result = "you win.";
          }
        } else if (playermove === "paper") {
          if (computermove === "paper") {
            result = "equel tie.";
          } else if (computermove === "rock") {
            result = "you win.";
          } else if (computermove === "scissors") {
            result = "you lose.";
          }
        }

        if (result === "you win.") {
          score.wins += 1;
        } else if (result === "you lose.") {
          score.losses += 1;
        } else if (result === "equel tie.") {
          score.ties += 1;
        }

        updateScoreElement();
        localStorage.setItem("score", JSON.stringify(score));
      }

      function updateScoreElement() {
        document.querySelector(".js-winlose").innerHTML = `${result}`;

        document.querySelector(
          ".js-youpicked"
        ).innerHTML = `you <img src="img scrrioss/${playermoves}-emoji.png" class="move-icon" > <img src="img scrrioss/${computermoves}-emoji.png"  class="move-icon" > computer`;


        document.querySelector(
          ".js-score"
        ).innerHTML = `wins:${score.wins}  losses :${score.losses}  and ties:${score.ties}`;
      }

      function reset() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;

        localStorage.removeItem("score");
      }

      function pickComputerMove() {
        const randomNumber = Math.random(0, 1);
        let computermove = "";                   

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computermove = "rock";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computermove = "paper";
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computermove = "scissors";
        }
        return computermove;
      }
      function windowonload(){
        document.querySelector(
          ".js-score"
        ).innerHTML = `wins:${score.wins} losses :${score.losses} and ties:${score.ties}`;
      }
     
