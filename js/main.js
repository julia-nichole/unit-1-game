
 const players = [
    {
        name: "Trae Young",
        team: "Atlanta Hawks",
        img: "young.png"
    },
    {
        name: "Atlanta Hawks",
        team: "Atlanta Hawks",
        img:" "
    },
    {
        name: "Kemba Walker",
        team: "Boston Cetlics",
        img: "walker.png"
    },
    {
        name: "Boston Cetlics",
        team: "Boston Celtics",
        img:""
    },
    {
        name: "Kyrie Irving",
        team: "Brooklyn Nets",
        img: "Irving.png"
    },
    {
        name: "Brooklyn Nets ",
        team: "Brookyln Nets",
        img: " "
    },
    {
        name: "Terry Rozier",
        team: "Charlotte Hornets",
        img: "rozier.png"
    },
    {
        name: "Charlotte Hornets",
        team: "Charlotte Hornets",
        img:""
    },
    {
        name: "Zach Lavine",
        team: "Chicago Bulls",
        img: "lavine.png"
    },
    {
        name: "Chicago Bulls",
        team: "Chicago Bulls",
        img:""
    },
    {
        name: "Kevin Love",
        team: "Cleveland Cavaliers",
        img: "love.png"
    },
    {
        name: "Cleveland Cavaliers",
        team: "Cleveland Cavilers",
        img: " "
    },
    {
        name: "Luka Doncic",
        team: "Dallas Mavericks",
        img:"doncic.png"
    },
    {
        name: "Dallas Mavericks",
        team: "Dallas Mavericks",
        img:""
    },
    {
        name: "Nikola Jokic",
        team: "Denver Nuggets",
        img: "jokic.png"
    },
    {
        name: "Denver Nuggets",
        team: "Denver Nuggets",
        img: ""
    },
    {
        name: "Blake Griffin",
        team: "Detroit Pistons",
        img: "griffin.png"
    },
    {
        name: "Detroit Pistons",
        team: "Detroit Pistons",
        img:""
    },
    {
        name: "Stephen Curry",
        team: "Golden State Warriors",
        img: "curry.png"
    },
    {
        name: "Golden State Warriors",
        team: "Golden State Warriors",
        img:""
    },
    {
        name: "James Harden",
        team: "Houston Rockets",
        img: "harden.png"
    },
    {
        name: "Houston Rockets",
        team: "Houston Rockets",
        img:""
    },
    {
        name: "Victor Oladipo",
        team: "Indiana Pacers",
        img: "oladipo.png"
    },
    {
        name: "Indiana Pacers",
        team: "Indiana Pacers",
        img:""
    },
    {
        name: "Kawhi Leonard",
        team: "LA Clippers",
        img: "leonard.png"
    },
    {
        name: "LA Clippers",
        team: "LA Clippers",
        img:""
    },
    {
        name: "Lebron James",
        team: "Los Angeles Lakers",
        img: "james.png"
    },
    {
        name: "Los Angeles Lakers",
        team: "Los Angeles Lakers",
        img:""
    },
    {
        name: "Jonas Valanciunas",
        team: "Memphis Grizzlies",
        img: "valanciunas.png"
    },
    {
        name: "Memphis Grizzlies",
        team: "Memphis Grizzlies",
        img:""
    },
    {
        name: "Jimmy Butler",
        team: "Miami Heat",
        img: "butler.png"
    },
    {
        name: "Miami Heat",
        team: "Miami Heat",
        img:""
    },
    {
        name: "Giannis Antetokounmpo",
        team: "Milwaukee Bucks",
        img: "antetokounmpo.png"
    },
    {
        name: "Milwaukee Bucks",
        team: "Milwaukee Bucks",
        img:""
    },
    {
        name: "Karl-Anthony Towns",
        team: "Minnesota Timberwolves",
        img:"towns.png"
    },
    {
        name: "Minnesota Timberwolves",
        team: "Minnesota Timberwolves",
        img:""
    },
    {
        name: "Zion Williamson",
        team: "New Orleans Pelicans",
        img:"wiliamson.png"
    },
    {
        name: "New Orleans Pelicans",
        team: "New Orleans Pelicans",
        img:""
    },
    {
        name: "Mitchell Robinson",
        team: "New York Knicks",
        img: "robinson.png"
    },
    {
        name: "New York Knicks",
        team: "New York Knicks",
        img:""
    },
    {
        name: "Chris Paul",
        team: "Oklahoma City Thunder",
        img: "paul.png"
    },
    {
        name: "Oklahoma City Thunder",
        team: "Oklahoma City Thunder",
        img:" "
    },
    {
        name: "Aaron Gordon",
        team: "Orlando Magic",
        img: "gordan.png"
    },
    {
        name: "Orlando Magic",
        team: "Orlando Magic",
        img:""
    },
    {
        name: "Joel Embiid",
        team: "Philadelphia 76ers",
        img: "embiid.png"
    },
    {
        name: "Philadelphia 76ers",
        team: "Philadelphia 76ers",
        img:""
    },
    {
        name: "Devin Booker",
        team: "Phoenix Suns ",
        img:"booker.png"
    },
    {
        name: "Phoenix Suns ",
        team: "Phoenix Suns ",
        img:""
    },
    {
        name: "Damian Lillard",
        team: "Portland Trail Blazers",
        img: "lillard.png"
    },
    {
        name: "Portland Trail Blazers",
        team: "Portland Trail Blazers",
        img:""
    },
    {
        name: "De'Araron Fox ",
        team: "Sacramento Kings",
        img: "fox.png"
    },
    {
        name: "Sacramento Kings",
        team: "Sacramento Kings",
        img: ""
    },
    {
        name: "LaMarcus Aldridge",
        team: "San Antonio Spurs",
        img: "aldridge.png"
    },
    {
        name: "San Antonio Spurs",
        team: "San Antonio Spurs",
        img: ""
    },
    {
        name: "Kyle Lowry",
        team: "Toronto Raptors",
        img: "lowry.png"
    },
    {
        name: "Toronto Raptors",
        team: "Toronto Raptors",
        img: ""
    },

    {
        name: "Donovan Mitchell",
        team: "Utah Jazz",
        img: "mitchell.png"
    },

    {
        name: "Utah Jazz",
        team: "Utah Jazz",
        img:""
    },
    {
        name: "Bradley Beal",
        team: "Washington Wizards",
        img : "beal.png"
    },
    {
        name: "Washington Wizards",
        team: "Washington Wizards",
        img: ""
    },
]

const cards = players.map((players) => {
    return (
        `<div><h1>${players.name}</h1></div>`
    )}).sort(()=>  0.5 - Math.random )
 









    //function render(cards){
    //body.append(cards)
//}
//  let button = document.getElementById("end").addEventListener("click",function(){
// alert('help');
//  });
// document.body.appendChild();
 

