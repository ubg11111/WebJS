const quotes = [ 
  {
    quote: "불운을 극복하는 것은 노력하는 것이다",
    author: "해리골든",
  },
  {
    quote: "생각하는 대로 된다.",
    author: "마하트마 간디",
  },
  {
    quote: "쉽게 빠져나가는 방법은 없다",
    author: "오프라 윈프리",
  },
  {
    quote: "당신의 노력을 존중하며, 당신 자신을 존중하라",
    author: "클린트 이스트우드",
  },
  {
    quote: "운은 계획에서 비롯된다",
    author: "브랜치 리키",
  },
  {
    quote: "성공하기까지는 항상 실패를 거친다",
    author: "미키 루니",
  },
  {
    quote: "성공은 영원하지 않고, 실패는 치명적이지 않다",
    author: "마이크 디트카",
  },
  {
    quote: "실패하는 것은 곧 성공으로 한 발짝 더 나아가는 것이다",
    author: "메리 케이 애쉬",
  },
  {
    quote: "인생이란 결코 공평하지 않다",
    author: "빌 게이츠",
  },
  {
    quote: "반성하지 않는 삶은 살 가치가 없다",
    author: "소크라테스",
  },
  {
    quote: "태어나면서부터 현명한 이는 없다",
    author: "미겔 데 세르반테스",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;