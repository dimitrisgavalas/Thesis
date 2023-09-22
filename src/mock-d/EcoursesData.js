// constant array that contains path to image file. Used it as example.
// Will change in future
const img = ["/images/thumbnail.png"];

export const EcoursesData = {
  // method that returns an array of Ecourse objects that appear in Home page
  getHomePageEcourseData() {
    return [
      {
        id: "1000",
        title: "Web Develoaaapment Bootcamp",
        image: img,
        price: 350,
        category: "Programming",
        ecourseLocation: "Hybrid",
        university: "University of Piraeus",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1001",
        title: "Algebra 2",
        image: img,
        price: 950,
        category: "Mathematics",
        ecourseLocation: "Online",

        university: "University of Piraeus",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1002",
        title: "AI Bootcamp",
        image: img,
        price: 60,
        category: "Physics",
        ecourseLocation: "Hybrid",
        university: "University of Piraeus",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1003",
        title: "Algebra 1",
        image: img,
        price: 650,
        category: "Biology",
        ecourseLocation: "On Campus",
        university: "University of Piraeus",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1004",
        title: "Python Bootcamp",
        image: img,
        price: 660,
        category: "English",
        ecourseLocation: "On Campus",
        university: "University of Piraeus",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1005",
        title: "Web Development Bootcamp",
        image: img,
        price: 90,
        category: "Greek",
        ecourseLocation: "Hybrid",
        university: "University of Piraeus",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1006",
        title: "Web Development Bootcamp",
        image: img,
        price: 6580,
        category: "Linguistics",
        ecourseLocation: "Online",
        university: "University of Piraeus",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1007",
        title: "Web Development Bootcamp",
        image: img,
        price: 320,
        category: "Psychology",
        ecourseLocation: "Hybrid",
        university: "University of Piraeus",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1008",
        title: "Web Development Bootcamp",
        image: img,
        price: 430,
        category: "History",
        ecourseLocation: "On Campus",
        university: "University of Piraeus",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
    ];
  },

  // method that returns an array of All Ecourse objects
  getAllEcoursesData() {
    return [
      {
        id: "1000",
        title: "Web Develoaaapment Bootcamp",
        image: img,
        price: 350,
        category: "Programming",
        ecourseLocation: "Hybrid",
        university: "University of Piraeus",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1001",
        title: "Algebra 2",
        image: img,
        price: 950,
        category: "Mathematics",
        ecourseLocation: "Online",

        university: "University of Piraeus",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1002",
        title: "AI Bootcamp",
        image: img,
        price: 60,
        category: "Physics",
        ecourseLocation: "Hybrid",
        university: "University of Piraeus",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1003",
        title: "Algebra 1",
        image: img,
        price: 650,
        category: "Biology",
        ecourseLocation: "On Campus",
        university: "University of Piraeus",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1004",
        title: "Python Bootcamp",
        image: img,
        price: 660,
        category: "English",
        ecourseLocation: "On Campus",
        university: "University of Piraeus",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1005",
        title: "Web Development Bootcamp",
        image: img,
        price: 90,
        category: "Greek",
        ecourseLocation: "Hybrid",
        university: "University of Piraeus",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1006",
        title: "Web Development Bootcamp",
        image: img,
        price: 6580,
        category: "Linguistics",
        ecourseLocation: "Online",
        university: "University of Piraeus",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1007",
        title: "Web Development Bootcamp",
        image: img,
        price: 320,
        category: "Psychology",
        ecourseLocation: "Hybrid",
        university: "University of Piraeus",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1008",
        title: "Web Development Bootcamp",
        image: img,
        price: 430,
        category: "History",
        ecourseLocation: "On Campus",
        university: "EMP",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1009",
        title: "Web Development Bootcamp",
        image: img,
        price: 870,
        category: "Philosophy",
        ecourseLocation: "Hybrid",
        university: "EMP",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 4,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1010",
        title: "Web Development Bootcamp",
        image: img,
        price: 2210,
        category: "Engineering",
        ecourseLocation: "Online",
        university: "EMP",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 3,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1011",
        title: "Web Development Bootcamp",
        image: img,
        price: 850,
        category: "Art",
        ecourseLocation: "On Campus",
        university: "EMP",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 2,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1012",
        title: "Web Development Bootcamp",
        image: img,
        price: 490,
        category: "Programming",
        ecourseLocation: "Online",
        university: "OPA",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 4,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1013",
        title: "Web Development Bootcamp",
        image: img,
        price: 50,
        category: "Mathematics",
        ecourseLocation: "Hybrid",
        university: "OPA",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 11,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1014",
        title: "Web Development Bootcamp",
        image: img,
        price: 90,
        category: "Physics",
        ecourseLocation: "Hybrid",
        university: "OPA",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1015",
        title: "Web Development Bootcamp",
        image: img,
        price: 120,
        category: "Biology",
        ecourseLocation: "On Campus",
        university: "OPA",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 4,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1016",
        title: "Web Development Bootcamp",
        image: img,
        price: 9990,
        category: "English",
        ecourseLocation: "Hybrid",
        university: "National and Kapodistrian University of Athens",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 4.5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1017",
        title: "Web Development Bootcamp",
        image: img,
        price: 650,
        category: "Greek",
        ecourseLocation: "On Campus",
        university: "National and Kapodistrian University of Athens",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1018",
        title: "Web Development Bootcamp",
        image: img,
        price: 650,
        category: "Linguistics",
        ecourseLocation: "Online",
        university: "National and Kapodistrian University of Athens",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1019",
        title: "Web Development Bootcamp",
        image: img,
        price: 650,
        category: "History",
        ecourseLocation: "Hybrid",
        university: "National and Kapodistrian University of Athens",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1020",
        title: "Web Development Bootcamp",
        image: img,
        price: 650,
        category: "Psychology",
        ecourseLocation: "Hybrid",
        university: "Panteion University",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1021",
        title: "Web Development Bootcamp",
        image: img,
        price: 650,
        category: "Linguistics",
        ecourseLocation: "Online",
        university: "Panteion University",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1022",
        title: "Web Development Bootcamp",
        image: img,
        price: 650,
        category: "Philosophy",
        ecourseLocation: "On Campus",
        university: "Panteion University",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1023",
        title: "Web Development Bootcamp",
        image: img,
        price: 650,
        category: "Engineering",
        ecourseLocation: "Hybrid",
        university: "Panteion University",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1024",
        title: "Web Development Bootcamp",
        image: img,
        price: 650,
        category: "Art",
        ecourseLocation: "On Campus",
        university: "Aristotle University of Thessaloniki",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1025",
        title: "Web Development Bootcamp",
        image: img,
        price: 650,
        category: "Programming",
        ecourseLocation: "Online",
        university: "Aristotle University of Thessaloniki",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1026",
        title: "Web Development Bootcamp",
        image: img,
        price: 650,
        category: "Programming",
        ecourseLocation: "On Campus",
        university: "Aristotle University of Thessaloniki",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
      {
        id: "1027",
        title: "Web Development Bootcamp",
        image: img,
        price: 650,
        category: "Programming",
        ecourseLocation: "Online",
        university: "Aristotle University of Thessaloniki",
        professors: ["Dimitris Dimitris", "Gavalas Gavalas"],
        duration: "12 weeks",
        ECTS: 6,
        language: ["Greek", "English"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        contact: [
          "+302100000000",
          "mailto:EMAILADDRESS",
          "instagram://user?username={USERNAME}",
        ],
        website: "https://www.ds.unipi.gr/",
      },
    ];
  },

  // method that returns an array of different universities.
  getUniversityName() {
    return [
      {
        id: "2000",
        name: "University of Piraeus",
      },
      {
        id: "2001",
        name: "National and Kapodistrian University of Athens",
      },
      {
        id: "2002",
        name: "EMP",
      },
      {
        id: "2003",
        name: "Univesity of West Attica",
      },
      {
        id: "2004",
        name: "OPA",
      },
      {
        id: "2005",
        name: "Panteion University",
      },
      {
        id: "2006",
        name: "Aristotle University of Thessaloniki",
      },
    ];
  },

  // method that returns an array of different universities.
  getFieldName() {
    return [
      {
        id: "3000",
        name: "Programming",
      },
      {
        id: "3001",
        name: "Mathematics",
      },
      {
        id: "3002",
        name: "Physics",
      },
      {
        id: "3003",
        name: "Biology",
      },
      {
        id: "3004",
        name: "English",
      },
      {
        id: "3005",
        name: "Greek",
      },
      {
        id: "3006",
        name: "Linguistics",
      },
      {
        id: "3007",
        name: "Psychology",
      },
      {
        id: "3008",
        name: "History",
      },
      {
        id: "3009",
        name: "Philosophy",
      },
      {
        id: "3010",
        name: "Engineering",
      },
      {
        id: "3011",
        name: "Art",
      },
    ];
  },

  //  method that returns a Promise that resolves with all ecourses from getHomePageEcourseData.
  getEcoursesHomePage() {
    return Promise.resolve(this.getHomePageEcourseData());
  },

  //  method that returns a Promise that resolves with all Ecourses from getAllEcourses.
  getAllEcourses() {
    return Promise.resolve(this.getAllEcoursesData());
  },
};

// Categories{
//   Computer Science
//   Programming
//   Mathematics
//   Physics
//   Biology
//   English
//   Greek
//   Linguistics
//   Law
//   Psychology
//   History-Archaeology
//   Philosophy
//   Engineering
//   Art

// Categories{
// Computer Science
// Programming
// Mathematics
// Physics
// Biology
// English
// Greek
// Linguistics
// Law
// Psychology
// History-Archaelogy
// Philosophy
// Engineering
// Art

// }

// Προγραμματισμός;
// Μαθηματικά;
// Φυσική;
// Βιολογία;
// Αγγλικά;
// Ελληνικά;
// Γλωσσολογία;
// Ψυχολογία;
// Ιστορία - Αρχαιολογία;
// Φιλοσοφία;
// Μηχανική;
// Τέχνη;

//  •	Ανθρωπιστικές Επιστήμες
// •	Παιδαγωγικές Επιστήμες
// •	Φιλολογικές Επιστήμες
// •	Ξένες Γλώσσες
// •	Κοινωνικές Επιστήμες
// •	Νομικές Επιστήμες
// •	Πολιτικές Επιστήμες
// •	Τεχνολογικές Επιστήμες
// •	Τουριστικών Σπουδών
// •	Οικονομία – Διοίκηση
// •	Χρηματοοικονομικά
// •	Τέχνες
// •	Γεωπονικές Επιστήμες
// •	Επιστήμες Υγείας
// •	Επιστήμες Φυσικής Αγωγής – Αθλητισμού
// •	Θετικές Επιστήμες
// •	Πληροφορική

// Programming
// Mathematics
// Physics
// Biology
// English
// Greek
// Linguistics
// Psychology
// History-Archaeology
// Philosophy
// Engineering
// Art

// University of Piraeus
// National and Kapodistrian University of Athens
// EMP
// Univesity of West Attica
// OPA
// Panteion university
// Aristotle University of Thessaloniki
