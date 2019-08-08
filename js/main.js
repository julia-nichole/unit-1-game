const players = [
  {
    name: " Trae Young ",
    team: "Atlanta Hawks",
    img: "images1/young.png"
  },
  {
    name: " Atlanta Hawks ",
    team: "Atlanta Hawks",
    img: " images1/atlanta-260x190.png"
  },
  {
    name: " Kemba Walker ",
    team: "boston celtics",
    img: "images1/walker.png"
  },
  {
    name: "boston celtics",
    team: "boston celtics",
    img: "images1/boston-260x190.png"
  },
  {
    name: " Kyrie Irving ",
    team: "Brooklyn Nets",
    img: "images1/Irving.png"
  },
  {
    name: " Brooklyn Nets ",
    team: "Brooklyn Nets",
    img: "images1/brooklyn-260x190.png "
  },
  {
    name: " Terry Rozier",
    team: "Charlotte Hornets",
    img: "images1/rozier.png"
  },
  {
    name: " Charlotte Hornets ",
    team: "Charlotte Hornets",
    img: "images1/charlotte-260x190.png"
  },
  {
    name: " Zach Lavine ",
    team: "Chicago Bulls",
    img: "images1/lavine.png"
  },
  {
    name: " Chicago Bulls ",
    team: "Chicago Bulls",
    img: "images1/chicago-260x190.png"
  },
  {
    name: " Kevin Love ",
    team: "Cleveland Cavaliers",
    img: "images1/love.png"
  },
  {
    name: " Cleveland Cavaliers ",
    team: "Cleveland Cavaliers",
    img: "images1/cleveland-260x190.png "
  },
  {
    name: " Luka Doncic ",
    team: "Dallas Mavericks",
    img: "images1/doncic.png"
  },
  {
    name: " Dallas Mavericks ",
    team: "Dallas Mavericks",
    img: "images1/dallas-260x190.png"
  },
  {
    name: " Nikola Jokic ",
    team: "Denver Nuggets",
    img: "images1/jokic.png"
  },
  {
    name: " Denver Nuggets ",
    team: "Denver Nuggets",
    img: "images1/denver-260x190.png"
  },
  {
    name: " Blake Griffin ",
    team: "Detroit Pistons",
    img: "images1/griffin.png"
  },
  {
    name: " Detroit Pistons ",
    team: "Detroit Pistons",
    img: "images1/detroit-260x190.png"
  },
  {
    name: " Stephen Curry ",
    team: "Golden State Warriors",
    img: "images1/curry.png"
  },
  {
    name: " Golden State Warriors ",
    team: "Golden State Warriors",
    img: "images1/golden-260x190.png"
  },
  {
    name: " James Harden ",
    team: "Houston Rockets",
    img: "images1/harden.png"
  },
  {
    name: " Houston Rockets ",
    team: "Houston Rockets",
    img: "images1/houston-260x190.png"
  },
  {
    name: " Victor Oladipo ",
    team: "Indiana Pacers",
    img: "images1/oladipo.png"
  },
  {
    name: " Indiana Pacers ",
    team: "Indiana Pacers",
    img: "images1/pacers-260x190.png"
  },
  {
    name: " Kawhi Leonard ",
    team: "LA Clippers",
    img: "images1/leonard.png"
  },
  {
    name: " LA Clippers ",
    team: "LA Clippers",
    img: "images1/clippers-260x190.png"
  },
  {
    name: " Lebron James ",
    team: "Los Angeles Lakers",
    img: "images1/james.png"
  },
  {
    name: " Los Angeles Lakers ",
    team: "Los Angeles Lakers",
    img: "images1/lakers-260x190.png"
  },
  {
    name: " Jonas Valanciunas ",
    team: "Memphis Grizzlies",
    img: "images1/valanciunas.png"
  },
  {
    name: " Memphis Grizzlies ",
    team: "Memphis Grizzlies",
    img: "images1/memphis-260x190.png"
  },
  {
    name: " Jimmy Butler ",
    team: "Miami Heat",
    img: "images1/butler.png"
  },
  {
    name: " Miami Heat ",
    team: "Miami Heat",
    img: "images1/miami-260x190.png"
  },
  {
    name: " Giannis Antetokounmpo ",
    team: "Milwaukee Bucks",
    img: "images1/giannis.png"
  },
  {
    name: " Milwaukee Bucks ",
    team: "Milwaukee Bucks",
    img: "images1/bucks-260x190.png"
  },
  {
    name: " Karl-Anthony Towns ",
    team: "Minnesota Timberwolves",
    img: "images1/towns.png"
  },
  {
    name: " Minnesota Timberwolves ",
    team: "Minnesota Timberwolves",
    img: "images1/minnesota-260x190.png"
  },
  {
    name: " Zion Williamson ",
    team: "New Orleans Pelicans",
    img: "images1/williamson.png"
  },
  {
    name: " New Orleans Pelicans ",
    team: "New Orleans Pelicans",
    img: "images1/pelicans-260x190.png"
  },
  {
    name: " Mitchell Robinson ",
    team: "New York Knicks",
    img: "images1/robinson.png"
  },
  {
    name: " New York Knicks ",
    team: "New York Knicks",
    img: "images1/knicks-260x190.png"
  },
  {
    name: " Chris Paul ",
    team: "Oklahoma City Thunder",
    img: "images1/paul.png"
  },
  {
    name: " Oklahoma City Thunder ",
    team: "Oklahoma City Thunder",
    img: "images1/thunder-260x190.png"
  },
  {
    name: " Aaron Gordon ",
    team: "Orlando Magic",
    img: "images1/gordon.png"
  },
  {
    name: " Orlando Magic ",
    team: "Orlando Magic",
    img: "images1/orlando-260x190.png"
  },
  {
    name: " Joel Embiid ",
    team: "Philadelphia 76ers",
    img: "images1/embiid.png"
  },
  {
    name: " Philadelphia 76ers ",
    team: "Philadelphia 76ers",
    img: "images1/philadelphia-260x190.png"
  },
  {
    name: " Devin Booker ",
    team: "Phoenix Suns ",
    img: "images1/booker.png"
  },
  {
    name: " Phoenix Suns ",
    team: "Phoenix Suns ",
    img: "images1/suns-260x190.png"
  },
  {
    name: " Damian Lillard ",
    team: "Portland Trail Blazers",
    img: "images1/lillard.png"
  },
  {
    name: " Portland Trail Blazers ",
    team: "Portland Trail Blazers",
    img: "images1/portland-260x190.png"
  },
  {
    name: " De'Araron Fox ",
    team: "Sacramento Kings",
    img: "images1/fox.png"
  },
  {
    name: " Sacramento Kings ",
    team: "Sacramento Kings",
    img: "images1/kings-260x190.png"
  },
  {
    name: " LaMarcus  Aldridge  ",
    team: "San Antonio Spurs",
    img: "images1/aldridge.png"
  },
  {
    name: " San Antonio Spurs ",
    team: "San Antonio Spurs",
    img: "images1/spurs-260x190.png"
  },
  {
    name: " Kyle Lowry ",
    team: "Toronto Raptors",
    img: "images1/lowry.png"
  },
  {
    name: " Toronto Raptors ",
    team: "Toronto Raptors",
    img: "images1/raptors-260x190.png"
  },

  {
    name: " Donovan Mitchell ",
    team: "Utah Jazz",
    img: "images1/mitchell.png"
  },

  {
    name: " Utah Jazz ",
    team: "Utah Jazz",
    img: "images1/jazz-260x190.png"
  },
  {
    name: " Bradley Beal ",
    team: "Washington Wizards",
    img: "images1/beal.png"
  },
  {
    name: " Washington Wizards",
    team: "Washington Wizards",
    img: "images1/wizards-260x190.png"
  }
];

let gv = [];
let points = []
let section = document.querySelector("section");
let butn = document.getElementById("end");
let match = document.querySelector("game");
let DisplayResults = document.querySelector(".result");
















let cards = players
  .map(players => {
    return { ...players };
  })
  .sort(() => Math.random() - 0.5);

function divMaker() {
  cards.forEach((el, idx) => {
    let div = document.createElement("div");
    div.classList.add("cardface");
    div.setAttribute("data-team", el.team);
    section.appendChild(div);
    div.innerHTML = `<img src="${el.img}">`;
  });
}

divMaker();

let divs = document.querySelectorAll("section");

divs.forEach(function(div) {
  div.addEventListener("click", function(evt) {
    let clickEvt = evt.target.parentElement.dataset.team;
    gv.push(clickEvt);
    checkMatch(gv, clickEvt,evt);
    console.log(gv);
    evt.target.style.border = "5px solid red "
  });
});

function checkMatch(clickAry, clickEvt,evt) {
  if (clickAry.length === 2) {
    console.log(clickAry);
    console.log(clickEvt);
    let [tm1, tm2] = clickAry; //  array deconstruction rather clever
    if (tm1 === tm2) {
      points ++
  // tried remove and set attribute 
     evt.target.style.border = "5px solid red "
     console.log(evt.target)
      Swal.fire("You found a Match");
     
    } else {
     Swal.fire("Try Again")
    // evt.target.style.border = "none"
    }
    gv = [];
  }
}



document.getElementById('start').addEventListener('click', function (){
  var oneMinute = 60,
  display = document.querySelector('.timer');
  startTimer(oneMinute, display);
  render();

});

function startTimer(duration, display){
  var timer = duration, minutes, seconds;
  setInterval(function (){
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 20 ? "0" + minutes : minutes;
      seconds = seconds < 20 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;
      document.querySelector('button').addEventListener('click', function(){
          render();
      })

      if (--timer < 0) {
          timer = "0";
          clearInterval(timer);
          
      };
         
      
  }, 1000)
  breakLoop(() =>{
    clearInterval(timer);
    swal.fire("GAME OVER TIMES UP !")
  },1000);

};

render();