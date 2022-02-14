export const colours = [
  { main: "#85a1ac", secondary: "#6868ac" },
  { main: "#6868ac", secondary: "#e9435e" },
  { main: "#e9435e", secondary: "#ecc371" },
  { main: "#ecc371", secondary: "#85a1ac" },
];

export const projects = [
  { title: "Current Weather Project", link: "/projects/current-weather" },
  { title: "Wikipedia", link: "/projects/wikipedia-viewer" },
  { title: "Twitch", link: "/projects/twitch-streamers" },
  { title: "Image Search", link: "/projects/image-search" },
  { title: "Tic Tac Toe", link: "/projects/tic-tac-toe" },
  { title: "Simon Game", link: "/projects/simon-game" },
];

export const TwitchStreamerData = [
  { name: "ESL_SC2", logo: "", isOnline: false, details: "Offline" },
  { name: "OgamingSC2", logo: "", isOnline: false, details: "Offline" },
  { name: "cretetion", logo: "", isOnline: false, details: "Offline" },
  { name: "freecodecamp", logo: "", isOnline: false, details: "Offline" },
  { name: "storbeck", logo: "", isOnline: false, details: "Offline" },
  { name: "habathcx", logo: "", isOnline: false, details: "Offline" },
  { name: "RobotCaleb", logo: "", isOnline: false, details: "Offline" },
  { name: "noobs2ninjas", logo: "", isOnline: false, details: "Offline" },
];

// Questions:
// title: "title",
// link: "link",
// about: "about",
// userStories: ["",""]
// whatHappened: "What did I do",
// keywords: ["", ""]
// challenges: "what are some challenges I faced",
// learnt: "what are new things I learnt",
// future: "what are some things I would do differently in the future"

export const writeUpContent = {
  currentWeatherApp: {
    title: "Current Weather App",
    link: "https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/show-the-local-weather",
    about:
      "This is a classic beginner problem that I have tackled a couple of times before (seen HERE!! and HERE!!). The goal is to get the current weather for the location of the user.",
    userStories: [
      "I can see the weather in my current location.",
      "I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.",
      "I can push a button to toggle between Fahrenheit and Celsius.",
    ],
    whatHappened:
      "Starting this project, I followed a similar problem breakdown as I had previously. I got the location using the Geolocation API, followed by using Axios to create an API call and receive a JSON response. Since I had done this before, I wanted to increase the complexity by adding a randomised loading spinner for each page reload.",
    keywords: [
      "axios",
      "useState",
      "useEffect",
      "Geolocation API",
      "react-spinner",
    ],
    //TODO: add spinner + error handling then do challenges + learnt
    challenges: "what are some challenges I faced",
    learnt: "what are new things I learnt",
    future:
      "The good thing about this project was that I already had the know-how to get it up to working standards pretty quickly. Looking into the future for projects like this, I want to focus on the following goals: optimising the code, and paying attention to best practises.",
  },
};
