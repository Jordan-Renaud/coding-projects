export const titleWords = ["fun", "take home", "learning", "mini"];

export const projects = [
  {
    title: "current-weather",
    link: "/coding-projects/current-weather",
  },
  {
    title: "wikipedia-viewer",
    link: "/coding-projects/wikipedia-viewer",
  },
  {
    title: "twitch-streamers",
    link: "/coding-projects/twitch-streamers",
  },
  { title: "image-search", link: "/coding-projects/image-search" },
  { title: "tic-tac-toe", link: "/coding-projects/tic-tac-toe" },
  { title: "simon-game", link: "/coding-projects/simon-game" },
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
    about: (
      <p>
        This is a classic beginner problem that I have tackled a couple of times
        before,{" "}
        <a
          href="https://weather-app-jrenaud.netlify.app/"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          once in vanilla JavaScript
        </a>{" "}
        and{" "}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://weather-app-jrenaud.netlify.app/"
        >
          once in React
        </a>
        . The goal is to get the current weather for the location of the user.
      </p>
    ),
    userStories: [
      "I can see the weather in my current location.",
      "I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.",
      "I can push a button to toggle between Fahrenheit and Celsius.",
    ],
    whatHappened:
      "Starting this project, I followed a similar problem breakdown as I had previously. I got the location using the Geolocation API, followed by using Axios to fetch weather data from an API and receive a JSON response.",
    keywords: [
      "axios",
      "useState",
      "useEffect",
      "Geolocation API",
      "react-spinner",
    ],
    challenges:
      "There weren't too many challenges when making the project. However, I originally planned to add a randomised spinner on page load. After fighting it for a couple of days and consulting with other programmers, I learned when to cut my losses. While potentially I could get it working, it was not what I wanted to focus on. As well as the library I was using turned out not to be compatible with Next.js as it so claimed.",
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
    about:
      "The original project brief on FreeCodeCamp was somewhat vague when describing the purpose of said project. Due to this, I pivoted the project to instead look at the Unsplash API. The new brief was to use the API to search for images with a query provided by the user. Below are updated user stories relating to the new project.",
    userStories: ["You can get images relating to a given search string."],
    whatHappened:
      "When I started the Image Search project, I looked at the Unsplash API documentation. This specific API uses a key that prompted me to learn how to store variables in an ENV file. As well as this, I learnt how to use the SDK surrounding Unsplash. I like how this looks in the code, makes it look simple and clean.",
    keywords: ["createApi from unsplash-js", "useState"],
    challenges:
      "Overall, once I figured out how to store API keys securely, this was a relatively simple project. I enjoyed how quick it was to create and it has shown me how far I have come in learning how to code.",
    future:
      "Coming back to this project, I would include more details about each image result, such as the photographer and title of the image.",
  },
  {
    pagePath: "tic-tac-toe",
    title: "Build a Tic Tac Toe Game",
    link: "https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-a-tic-tac-toe-game",
    about:
      "On the surface, this is a simple project. The goal is to create a game of Tic Tac Toe with the option of playing against the computer or another person. ",
    userStories: [
      "I can play a game of Tic Tac Toe with the computer.",
      "My game will reset as soon as it's over so I can play again.",
    ],
    whatHappened:
      "When I started working on this project, I only vaguely knew of the existence of useReducer. So, I began creating a convoluted web of useEffects, and useStates. It got to the point of being buried so deep in functions, I had to walk away for a few days before tackling it again.",
    keywords: ["useReducer", "useEffect"],
    challenges:
      "On my second try (Tic Tac Toe 2: The Reckoning), I explored useReducer. After gutting out the majority of the HTML into separate components, I was left with a more understandable mess to tackle into a reducer. It is safe to say that useReducer quickly become the light of my life, bringing ten functions down to three.",
    future:
      "Hands down, I will be exploring useReducer more in the future. I would like to explore it a few more times to make sure I properly grasp the full understanding of it.",
  },
  {
    pagePath: "simon-game",
    title: "Build a Simon Game",
    link: "https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-a-simon-game",
    about: (
      <p>
        The task set for this project is to create a repeating light memory
        game. It is based on the cult classic game,{" "}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/Simon_(game)"
        >
          Simon
        </a>
        .
      </p>
    ),
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

//working image/variables --> delete when done
import questionMark from "../public/twitch-streamers-images/questionMark.png";

//TODO: add more descriptive alts when the images are added.

// Varibles for the home page

export const cardData = [
  {
    frontOfCard: {
      image: questionMark,
      alt: "this is the back of the card",
    },
    backOfCard: {
      title: "Weather App",
      image: questionMark,
      link: "https://festive-carson-9c68d7.netlify.app",
      content: [
        "Displays the current and future forecast in your location, with searchable regions.",
        "Languages used: HTML, CSS, JavaScript, React.",
        "Accessed multiple APIs to retrieve and display weather data.",
        "Used built in browser APIs, geolocation.",
        "Created a cohesive design.",
      ],
      alt: "A screen shot of the website described above.",
    },
  },
  {
    frontOfCard: {
      image: questionMark,
      alt: "this is the back of the card",
    },
    backOfCard: {
      title: "Stitch Itch Landing Page",
      image: questionMark,
      link: "https://stitchitch.netlify.app",
      content: [
        "Create a responsive landing page.",
        "Languages used: HTML, CSS, JavaScript.",
        "Used Figma to create both resources and the design.",
        "Implemented a light and dark mode.",
        "Fully responsive, works on mobile, tablet, and desktop sizes.",
      ],
      alt: "A screen shot of the website described above.",
    },
  },
  {
    frontOfCard: {
      image: questionMark,
      alt: "this is the back of the card",
    },
    backOfCard: {
      title: "Component Based Recipes",
      image: questionMark,
      link: "https://easy-recipes-jr.netlify.app",
      content: [
        "Create a website that lets you make staple recipes where you choose your ingredients.",
        "Languages used: HTML, CSS, JavaScript, React.",
        "Dealt with dynamic data in React.",
        "Implemented simple state management in React.",
        "Fully responsive, works on mobile, tablet, and desktop sizes.",
      ],
      alt: "A screen shot of the website described above.",
    },
  },
  {
    frontOfCard: {
      image: questionMark,
      alt: "this is the back of the card",
    },
    backOfCard: {
      title: "World of Picasso",
      image: questionMark,
      link: "https://world-of-picasso.netlify.app/",
      content: [
        "Recreate a given design on the web.",
        "Languages used: HTML, CSS, JavaScript, React, CSS Grid.",
        "Used non-liner grid based design.",
        "Added interactive elements with React.",
        "Fully responsive, works on mobile, tablet, and desktop sizes.",
      ],
      alt: "A screen shot of the website described above.",
    },
  },
  //TODO: add this section
  {
    frontOfCard: {
      image: questionMark,
      alt: "this is the back of the card",
    },
    backOfCard: {
      title: "Coding Projects",
      image: questionMark,
      link: "https://jordan-renaud-coding-projects.netlify.app/coding-projects",
      content: [
        "Create a responsive landing page.",
        "Languages used: HTML, CSS, JavaScript.",
        "Used Figma to create both resources and the design.",
        "Implemented a light and dark mode.",
        "Fully responsive, works on mobile, tablet, and desktop sizes.",
      ],
      alt: "A screen shot of the website described above.",
    },
  },
];

export const icons = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
      </svg>
    ),
    link: "https://www.facebook.com/jordan.renaud3",
    title: "Facebook",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
      </svg>
    ),
    link: "https://www.instagram.com/jordan__renaud/",
    title: "Instagram",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
      </svg>
    ),
    link: "https://twitter.com/jordan_renaud",
    title: "Twitter",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
      </svg>
    ),
    link: "https://www.linkedin.com/in/jordan-renaud-064a8a167/",
    title: "LinkedIn",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
      </svg>
    ),
    link: "https://github.com/Jordan-Renaud",
    title: "GitHub",
  },
];
