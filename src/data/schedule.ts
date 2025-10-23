export interface Event {
  title: string;
  time: string;
  location: string;
  description: string;
}

export interface Day {
  name: string;
  date: string;
  events: Event[];
}

export const scheduleData: Day[] = [
  {
    name: "Monday",
    date: "November 3",
    events: [
      {
        title: "Opening Ceremony",
        time: "7PM - 8PM",
        location: "Student Center (Pacific Ballroom C)",
        description: "Come out to our opening ceremony to learn about the schedule, rules, and resources for WebJam! As part of opening ceremony, we'll also be having a social where you can meet other WebJam participants and also meet teammates if you're looking for a team!"
      },
      {
        title: "ICSSC Projects - Intro to Web Dev",
        time: "8PM - 9PM",
        location: "Student Center (Pacific Ballroom C)",
        description: "Learn the basics of web development, including foundational concepts of HTML and CSS, to get your projects started."
      }
    ]
  },
  {
    name: "Tuesday",
    date: "November 4",
    events: [
      {
        title: "CareTech - Intro to API Integration",
        time: "6PM - 7PM",
        location: "DBH 3011",
        description: "Learn how to fetch and display real time health or fitness data using a public API. Explore the concept of APIs and asynchronous JavaScript in a simple, interactive way."
      },
      {
        title: "Blockchain - Intro to Developing a Decentralized App",
        time: "7PM - 8PM",
        location: "DBH 3011",
        description: "Get introduced to decentralized applications (dApps) and their tech stack. Learn how to build a dApp by connecting pre-written smart contracts to a frontend, and brainstorm potential Web3 ideas. Work on your own basic dApp using your web development skills to bring a cool blockchain concept to life."
      },
      {
        title: "Work Time",
        time: "7PM - 8PM",
        location: "DBH 4011",
        description: "Dedicated time to work with your team. Mentors will be available to assist you with any challenges you encounter."
      }
    ]
  },
  {
    name: "Wednesday",
    date: "November 5",
    events: [
      {
        title: "CTC - From Idea to Interface",
        time: "6PM - 7PM",
        location: "DBH 3011",
        description: "A fast-paced, hands-on workshop where you'll turn rough concepts into polished designs. Learn core Figma fundamentals, build interactive interfaces, and leave ready to bring your ideas to life."
      },
      {
        title: "Cyber @ UCI - Intro to Application Security",
        time: "7PM - 8PM",
        location: "DBH 3011",
        description: "Get introduced to the world of application security and learn how to secure your web applications."
      },
      {
        title: "Work Time",
        time: "6PM - 8PM",
        location: "DBH 5011",
        description: "Dedicated time to work with your team. Mentors will be available to assist you with any challenges you encounter."
      },
      {
        title: "Boba Social",
        time: "8PM - 9PM",
        location: "DBH 3011/5011",
        description: "Meet other WebJam participants and enjoy some boba together!"
      }
    ]
  },
  {
    name: "Thursday",
    date: "November 6",
    events: [
      {
        title: "VGDC - Gamifying Your App",
        time: "6PM - 7PM",
        location: "DBH 3011",
        description: "Learn how to gamify your web application to make it more engaging and fun for users."
      },
      {
        title: "Work Time",
        time: "7PM - 8PM",
        location: "DBH 3011",
        description: "Final work session to prepare your project. Utilize our mentors' guidance and make the most out of this time."
      }
    ]
  },
  {
    name: "Friday",
    date: "November 7",
    events: [
      {
        title: "Presentations / Deliberation",
        time: "6PM - 7:30PM",
        location: "Student Center (Pacific Ballroom C)",
        description: "Present your completed projects in front of our judges and audience. The judges will then deliberate to select the winners."
      },
      {
        title: "Closing Ceremony",
        time: "7:30PM - 8PM",
        location: "Student Center (Pacific Ballroom C)",
        description: "Celebrate the end of WebJam with the announcement of winners and prize distribution. Thank you for participating!"
      }
    ]
  }
];

