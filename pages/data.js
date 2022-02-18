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

export const writeUpContent = [
  {
    pagePath: "current-weather",
    title: "Current Weather App",
    link: "https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/show-the-local-weather",
    about: `This is a classic beginner problem that I have tackled a couple of times before, ${(
      <a href="https://weather-app-jrenaud.netlify.app/">
        once in vanilla JavaScript
      </a>
    )} and ${(
      <a href="https://weather-app-jrenaud.netlify.app/">once in React</a>
    )}. The goal is to get the current weather for the location of the user.`,
    userStories: [
      "I can see the weather in my current location.",
      "I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.",
      "I can push a button to toggle between Fahrenheit and Celsius.",
    ],
    whatHappened:
      "Starting this project, I followed a similar problem breakdown as I had previously. I got the location using the Geolocation API, followed by using Axios to fetch weather data from an API and receive a JSON response. Since I had done this before, I wanted to increase the complexity by adding a randomised loading spinner for each page reload.",
    keywords: [
      "axios",
      "useState",
      "useEffect",
      "Geolocation API",
      "react-spinner",
    ],
    //TODO: add spinner + error handling then do challenges
    challenges: "what are some challenges I faced",
    future:
      "The good thing about this project was that I already had the know-how to get it working pretty quickly. Looking into the future for projects like this, I want to focus on the following goals: optimising the code and paying attention to best practices.",
  },
  {
    pagePath: "wikipedia-viewer",
    title: "Wikipedia Viewer",
    link: "https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-a-wikipedia-viewer",
    about:
      "The goal of this project was to create a preview of Wikipedia pages based on a search query, that then link to their corresponding entry.",
    userStories: [
      "I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.",
      "I can click a button to see a random Wikipedia entry.",
    ],
    whatHappened:
      "I started this project by breaking it down into smaller steps to solve. Get the input, make a request to the API, handle the JSON, and display the data.",
    keywords: ["useState", "axios", "Wikipedia API"],
    challenges:
      "While this project was similar to the Current Weather project, using the Wikipedia API and the method encodeURIComponent() were new learning challenges. The Wikipedia API was a step up in difficulty from other APIs I have used in the past but allowed me to familiarise myself with new terminology and various methods. I found encodeURIComponent() was helpful because it make constructing a URL easy so I did not have to manually replace characters and trim white space. I will bear this in mind for future use.",
    future:
      "If I were to take another look at this project, I would work on inlining superfluous functions. The majority of the functions here could be anonymous which would make it easier to read.",
  },
  {
    pagePath: "twitch-streamers",
    title: "Use the Twitch JSON API",
    link: "https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/use-the-twitch-json-api",
    about:
      "The purpose of this project is to display a select number of Twitch streamers with their stream details and whether they are online or offline.",
    userStories: [
      "I can see whether freeCodeCamp is currently streaming on Twitch.tv.",
      "I can click the status output and be sent directly to the freeCodeCamp's Twitch.tv channel.",
      "if a Twitch user is currently streaming, I can see additional details about what they are streaming.",
    ],
    whatHappened:
      "To create the Twitch Streamer Viewer, I started by looking at the Fetch API. In the past, I have used Axios. While this has been a great introduction to requests and responses, I wanted to explore a more commonly used built-in API. After the hard part of getting the correct JSON, displaying the data correctly was relatively straightforward using the filter() method.",
    keywords: ["useState", "useEffect", "Fetch API"],
    challenges:
      "In preparation for using the Twitch API, I read through the documentation to understand which optional query parameters were needed for the project. The Twitch API requires an API key, however, FreeCodeCamp provides a workaround URL to use instead. While this was helpful in regards to the API key, it incurred separate issues due to outdated documentation on FreeCodeCamp's end. After an hour of research and experimentation on which URL to use for the API request, it works!",
    future:
      "Looking at how I would improve this project, I would look at how to write proper error handling. Currently, I am simply setting and logging the error to the console. I would prefer the user to be informed of what has happened and how to proceed.",
  },
  {
    pagePath: "image-search",
    title: "Build an Image Search Abstraction Layer",
    link: "https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-an-image-search-abstraction-layer",
    about: "about",
    userStories: [
      "You can get the image URLs, description and page URLs for a set of images relating to a given search string.",
      "You can paginate through the responses by adding a ?page=2 parameter to the URL.",
      "You can get a list of the most recently submitted search strings.",
    ],
    whatHappened: "What did I do",
    keywords: ["", ""],
    challenges: "what are some challenges I faced",
    future: "what are some things I would do differently in the future",
  },
  {
    pagePath: "tic-tac-toe",
    title: "Build a Tic Tac Toe Game",
    link: "https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-a-tic-tac-toe-game",
    about: "about",
    userStories: [
      "I can play a game of Tic Tac Toe with the computer.",
      "My game will reset as soon as it's over so I can play again.",
      "I can choose whether I want to play as X or O.",
    ],
    whatHappened: "What did I do",
    keywords: ["", ""],
    challenges: "what are some challenges I faced",
    future: "what are some things I would do differently in the future",
  },
  {
    pagePath: "simon-game",
    title: "Build a Simon Game",
    link: "https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-a-simon-game",
    about:
      "The task set for this project is to create a repeating light memory game. It is based on the cult classic game, Simon(LINK HEREERERER).",
    userStories: [
      "I am presented with a random series of button presses.",
      "Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.",
      "I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.",
      "If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.",
      "I can see how many steps are in the current series of button presses.",
      "If I want to restart, I can hit a button to do so, and the game will return to a single step.",
      "I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.",
      "I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.",
    ],
    whatHappened:
      "This game required more complex logic than the projects that had come before. The way I navigated this was to write comments in pseudo-code in the layout the program logic would require. This was key, in the end, to not only break down the steps needed to complete the project but also to create comments that allowed a quicker understanding of the code.",
    keywords: ["useState", "useEffect"],
    challenges:
      "There were more challenges in this project than you see at face value. Many instances of state were required, such as mistakes made, sequence of lights, whose turns it is.",
    future:
      "If I were to approach the Simon game project again, there are a few things I would change. The method useReducer() would be highly useful in this instance, it would save me clutter in the code as well as simplify the majority of the functions required to get the game running.",
  },
];
