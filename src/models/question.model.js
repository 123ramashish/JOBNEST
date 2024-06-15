const questionArray = [
  {
    title: "HTML",
    questions: [
      {
        question: "What does HTML stand for?",
        answer:
          "HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages and web applications.",
        year: 2017,
        company: "Coding Ninja",
      },
      {
        question: "What are HTML tags?",
        answer:
          "HTML tags are keywords surrounded by angle brackets used to define the structure and content of web pages. They are used to create elements such as headings, paragraphs, links, images, and more.",
        year: 2018,
        company: "ByteWorks Inc",
      },
      {
        question: "What is the purpose of the 'DOCTYPE' declaration in HTML?",
        answer: "It specifies the version of HTML the document is written in.",
        year: 2021,
        company: "ABC Corp",
      },
      {
        question: "How do you create a hyperlink in HTML?",
        answer: "You create a hyperlink in HTML using the anchor tag <a>.",
        year: 2020,
        company: "XYZ Inc",
      },
      // Add more HTML questions and answers here
    ],
  },
  {
    title: "CSS",
    questions: [
      {
        question: "What does CSS stand for?",
        answer:
          "CSS stands for Cascading Style Sheets. It is a style sheet language used for describing the presentation of a document written in HTML.",
        year: 2022,
        company: "CodeCraft Solutions",
      },
      {
        question: "What is a CSS selector?",
        answer:
          "A CSS selector is a pattern used to select the elements you want to style in an HTML document. It targets specific elements based on their tag name, class, ID, attributes, etc.",
        year: 2023,
        company: "TechNest Labs",
      },
      {
        question: "What is the box model in CSS?",
        answer:
          "It describes how elements are rendered on the web page, including padding, border, margin, and content.",
        year: 2019,
        company: "DEF Ltd",
      },
      {
        question: "What is CSS specificity?",
        answer:
          "CSS specificity determines which CSS rule is applied by the browser when multiple conflicting CSS rules target the same element.",
        year: 2022,
        company: "PQR Co",
      },
    ],
  },
  {
    title: "JavaScript",
    questions: [
      {
        question: "What is JavaScript?",
        answer:
          "JavaScript is a high-level, interpreted programming language used to create interactive effects within web browsers. It is often used for frontend development, but it can also be used on the server-side with platforms like Node.js.",
        year: 2024,
        company: "DataSphere Technologies",
      },
      {
        question: "What are the different data types in JavaScript?",
        answer:
          "JavaScript has several data types including number, string, boolean, null, undefined, object, and symbol (added in ECMAScript 6).",
        year: 2018,
        company: "WebWise Innovations",
      },
      {
        question: "What is JavaScript hoisting?",
        answer:
          "JavaScript hoisting is a mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase.",
        year: 2020,
        company: "GHI Corp",
      },
      {
        question: "What is closure in JavaScript?",
        answer:
          "A closure is a function that has access to its outer function's scope chain even after the outer function has finished executing.",
        year: 2021,
        company: "JKL Inc",
      },
    ],
  },
  {
    title: "React.js",
    questions: [
      {
        question: "What is JSX in React?",
        answer:
          "JSX (JavaScript XML) is a syntax extension for JavaScript which allows you to write HTML elements in JavaScript code. It is used with React to describe what the UI should look like.",
        year: 2019,
        company: "CloudForge Systems",
      },
      {
        question: "What are React components?",
        answer:
          "React components are reusable pieces of UI that can be composed together to build complex UIs. They can be either class components or functional components.",
        year: 2020,
        company: "LogicMinds Software",
      },
      {
        question: "What is React.js?",
        answer:
          "React.js is a JavaScript library for building user interfaces.",
        year: 2020,
        company: "GHI Corp",
      },
      {
        question: "What are props in React?",
        answer:
          "Props (short for properties) are a way of passing data from parent to child components in React.",
        year: 2021,
        company: "JKL Inc",
      },
    ],
  },
  {
    title: "Node.js",
    questions: [
      {
        question: "What is Node.js?",
        answer:
          "Node.js is an open-source, server-side JavaScript runtime environment built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code on the server, enabling the development of scalable and high-performance web applications.",
        year: 2020,
        company: "PixelPulse Technologies",
      },
      {
        question: "What is npm?",
        answer:
          "npm (Node Package Manager) is the default package manager for Node.js. It allows developers to install, share, and manage packages or modules of JavaScript code to build powerful and efficient applications.",
        year: 2018,
        company: "MindScape Solutions",
      },
      {
        question: "What is Node.js?",
        answer:
          "Node.js is a runtime environment that executes JavaScript code outside the web browser.",
        year: 2019,
        company: "DEF Ltd",
      },
      {
        question: "Explain the event-driven architecture of Node.js.",
        answer:
          "Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.",
        year: 2022,
        company: "PQR Co",
      },
    ],
  },
  {
    title: "Express.js",
    questions: [
      {
        question: "What is Express.js?",
        answer:
          "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It is designed for building single-page, multi-page, and hybrid web applications.",
        year: 2020,
        company: "CodeGenius Software",
      },
      {
        question: "What is middleware in Express.js?",
        answer:
          "Middleware functions in Express.js are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. They can modify the request and response objects, end the request-response cycle, or call the next middleware function.",
        year: 2019,
        company: "ByteForge Technologies",
      },
      {
        question: "What is Express.js?",
        answer: "Express.js is a web application framework for Node.js.",
        year: 2021,
        company: "XYZ Corp",
      },
      {
        question: "Explain middleware in Express.js.",
        answer:
          "Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle.",
        year: 2020,
        company: "ABC Inc",
      },
    ],
  },
  {
    title: "MongoDB",
    questions: [
      {
        question: "What is MongoDB?",
        answer:
          "MongoDB is a NoSQL, document-oriented database that provides high performance, high availability, and automatic scaling. It stores data in flexible, JSON-like documents, allowing for a dynamic and schema-less data model.",
        year: 2020,
        company: "DataSphere Technologies",
      },
      {
        question: "What is a document in MongoDB?",
        answer:
          "In MongoDB, a document is a data structure composed of field-value pairs. It is similar to a JSON object and is the basic unit of data storage.",
        year: 2022,
        company: "ByteForge Technologies",
      },
      {
        question: "What is MongoDB?",
        answer:
          "MongoDB is a NoSQL database program, which uses JSON-like documents with optional schemas.",
        year: 2018,
        company: "LMN Corp",
      },
      {
        question: "Explain the difference between SQL and NoSQL databases.",
        answer:
          "SQL databases are relational databases, while NoSQL databases are non-relational or distributed databases.",
        year: 2017,
        company: "QRS Ltd",
      },
    ],
  },
];

export default class quesionModel {
  getQuestions() {
    return questionArray;
  }
}
