const cracker = document.getElementById("crackerWrapper");
const leftCracker = document.getElementById("leftCracker");
const rightCracker = document.getElementById("rightCracker");
const message = document.getElementById("message");
const jokeWrap = document.getElementById("jokeWrap");
const joke = document.getElementById("joke");
const punchline = document.getElementById("punchline");

let counter = 0;
let jokeDemo = [
  { Q: "What do you call a blind reindeer?", A: "No-eye deer." },
  {
    Q: "Why are mummies such big fans of Christmas?",
    A: "Because they enjoy wrapping.",
  },
  {
    Q: "Why did Santa have to go to the hospital?",
    A: "Because of his poor elf.",
  },
  {
    Q: "What do you get when you cross a snowman with a vampire?",
    A: "Frostbite.",
  },
  {
    Q: "Why did no-one bid for Rudolph and Blitzen on eBay?",
    A: "Because they were two deer.",
  },
  { Q: "What do you call an old snowman?", A: "Water." },
  { Q: "What do snowmen have for breakfast?", A: "Snowflakes!" },
  { Q: "What is white and minty?", A: "A polo bear!" },
  { Q: "Who is a Christmas tree’s favorite singer?", A: "Spruce Springsteen!" },
  {
    Q: "Why don’t penguins fly?",
    A: "Because they’re not tall enough to be pilots!",
  },
];
let jokes = [
  { Q: "聖誕節會被表白？", A: "並不會請清醒點。" },
  { Q: "聖誕節會被表白？", A: "會喔，加油。" },
  { Q: "聖誕節會被表白？", A: "單身萬歲；單身狗無罪。" },
  { Q: "聖誕節會中大獎嗎？", A: "醒醒睡吧。" },
  { Q: "聖誕節會中大獎嗎？", A: "會喔，加油。" },
  { Q: "聖誕節會中大獎嗎？", A: "並不會請清醒點。" },
  { Q: "跨年怎麼過？", A: "一個人過吧，單身狗。" },
  { Q: "跨年怎麼過？", A: "有人會想您表白噢～" },
  { Q: "跨年怎麼過？", A: "睡過～" },
];
let num = Math.floor(Math.random() * jokes.length);

cracker.addEventListener("click", () => {
  if (counter < 10) {
    counter++;
  } else {
    joke.textContent = jokes[num].Q;
    punchline.textContent = jokes[num].A;
    leftCracker.style.animation = "left 1s forwards";
    rightCracker.style.animation = "right 1s forwards";
    message.style.animation = "title 1s forwards";
    jokeWrap.style.animation = "joke 2s forwards";
    cracker.style.transform = "scaleX(1)";
  }
});

function Loop() {
  window.requestAnimationFrame(Loop);
  if (counter > 0 && counter < 13) {
    cracker.style.transform = `scaleX(${1 + counter / 100})`;
    counter -= 0.05;
  }
}

const languageVersion = () => {
  const message = document.getElementById("message");
  const instructions = document.getElementById("instructions");

  const messageText = ["Merry <br> Christmas", "聖誕節快樂"];
  const instructionsText = [
    "Tap the cracker to pull it apart",
    "連續點擊糖果，會有驚喜哦～",
  ];

  let random = Math.floor(Math.random() * messageText.length);

  message.innerHTML = "";
  message.innerHTML = messageText[random];
  instructions.innerHTML = "";
  instructions.innerHTML = instructionsText[random];
};

Loop();
languageVersion();
