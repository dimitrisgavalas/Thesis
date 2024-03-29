// constant array that contains path to image file. Used it as example.
// Will change in future
const images = [
  "/images/thumbnail.png",
  "/images/thumbnail1.png",
  "/images/thumbnail2.png",
  "/images/thumbnail3.png",
  "/images/thumbnail4.png",
  "/images/thumbnail5.png",
  "/images/thumbnail6.png",
  "/images/thumbnail7.png",
];

const img = ["/images/thumbnail.png"]; //teaching
const img2 = ["/images/thumbnail2.png"]; //art
const img3 = ["/images/thumbnail3.png"]; //teaching & psychology
const img4 = ["/images/thumbnail4.png"]; //physics
const img5 = ["/images/thumbnail5.png"]; //history
const img6 = ["/images/thumbnail6.png"]; //Java
const img7 = ["/images/thumbnail7.png"]; //Math

export const EcoursesData = {
  // method that returns an array of Ecourse objects that appear in Home page
  getHomePageEcourseData() {
    return [
      {
        id: "2000",
        title: "Web Dev Bootcamp",
        image: img6,
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
        id: "2001",
        title: "Algebra 2",
        image: img7,
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
        id: "2002",
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
        id: "2003",
        title: "Algebra 1",
        image: img7,
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
        id: "2004",
        title: "Python Bootcamp",
        image: img6,
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
        id: "2005",
        title: "Greek Language",
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
        id: "2006",
        title: "Linguistics 3",
        image: img3,
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
        id: "2007",
        title: "Psychology 3",
        image: img3,
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
        id: "2008",
        title: "WW2 DDAY",
        image: img5,
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
  getHomePageEcourseData() {
    // localStorage.clear();

    const localStorageData =
      JSON.parse(localStorage.getItem("publishedCourses")) || [];

    const staticData = [
      {
        id: "1000",
        title: "Web Development Bootcamp",
        image: img6,
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
        rating: 3,
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
        image: img7,
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
        image: img2,
        price: 60,
        category: "Physics",
        ecourseLocation: "On Campus",
        university: "University of Piraeus",
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
        id: "1003",
        title: "Algebra 1",
        image: img4,
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
        image: img6,
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
        title: "CONTEMPORARY ART",
        image: img2,
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
        title: "Linguistics 5",
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
        title: "Psychology Introduction",
        image: img3,
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
        title: "WW2 DDAY",
        image: img5,
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
        title: "What if?",
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
        title: "Build a rocket",
        image: img4,
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
        title: "Clay Sculptures",
        image: img2,
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
        title: "C# Bootcamp",
        image: img6,
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
        title: "Geometry",
        image: img7,
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
        title: "Quantum Physics Intro",
        image: img4,
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
        title: "Mitochondria",
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
        title: "English 3",
        image: img3,
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
        title: "Introduction to the Greek Alphabet",
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
        title: "Linguistics 1",
        image: img3,
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
        title: "Moon Landing",
        image: img5,
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
        title: "Psychology 3",
        image: img3,
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
        title: "Linguistics 4",
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
        title: "Greek Philosophers",
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
        title: "Thermodynamics 1",
        image: img4,
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
        title: "Renaissance",
        image: img5,
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
        title: "SQL",
        image: img6,
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
        title: "ReactJs Basics",
        image: img6,
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
        title: "Build a Game in 30 days",
        image: img6,
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

    const allData = [...localStorageData, ...staticData];

    return allData;
  },
  // method that returns an array of All Ecourse objects
  getAllEcoursesData() {
    // localStorage.clear();

    const localStorageData =
      JSON.parse(localStorage.getItem("publishedCourses")) || [];

    const staticData = [
      {
        id: "1000",
        title: "Web Development Bootcamp",
        image: img6,
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
        rating: 3,
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
        image: img7,
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
        image: img2,
        price: 60,
        category: "Physics",
        ecourseLocation: "On Campus",
        university: "University of Piraeus",
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
        id: "1003",
        title: "Algebra 1",
        image: img4,
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
        image: img6,
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
        title: "CONTEMPORARY ART",
        image: img2,
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
        title: "Linguistics 5",
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
        title: "Psychology Introduction",
        image: img3,
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
        title: "WW2 DDAY",
        image: img5,
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
        title: "What if?",
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
        title: "Build a rocket",
        image: img4,
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
        title: "Clay Sculptures",
        image: img2,
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
        title: "C# Bootcamp",
        image: img6,
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
        title: "Geometry",
        image: img7,
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
        title: "Quantum Physics Intro",
        image: img4,
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
        title: "Mitochondria",
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
        title: "English 3",
        image: img3,
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
        title: "Introduction to the Greek Alphabet",
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
        title: "Linguistics 1",
        image: img3,
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
        title: "Moon Landing",
        image: img5,
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
        title: "Psychology 3",
        image: img3,
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
        title: "Linguistics 4",
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
        title: "Greek Philosophers",
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
        title: "Thermodynamics 1",
        image: img4,
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
        title: "Renaissance",
        image: img5,
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
        title: "SQL",
        image: img6,
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
        title: "ReactJs Basics",
        image: img6,
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
        title: "Build a Game in 30 days",
        image: img6,
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

    const allData = [...localStorageData, ...staticData];

    return allData;
  },
  //  method that returns a Promise that resolves with all ecourses from getHomePageEcourseData.
  getEcoursesHomePage() {
    return Promise.resolve(this.getHomePageEcourseData());
  },
  //  method that returns a Promise that resolves with all Ecourses from getAllEcourses.
  getAllEcourses() {
    return Promise.resolve(this.getAllEcoursesData());
  },

  getLocalStorageData() {
    return new Promise((resolve) => {
      const localStorageData =
        JSON.parse(localStorage.getItem("publishedCourses")) || [];
      resolve(localStorageData);
    });
  },

  getLocalStorageFavoritesData() {
    return new Promise((resolve) => {
      const localStorageData =
        JSON.parse(localStorage.getItem("favoriteCourses")) || [];
      resolve(localStorageData);
    });
  },
};

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

// University of Piraeus
// National and Kapodistrian University of Athens
// EMP
// Univesity of West Attica
// OPA
// Panteion university
// Aristotle University of Thessaloniki
