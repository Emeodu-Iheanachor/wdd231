const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces students to the building blocks of programming including variables, decisions, loops, arrays, and input/output.',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces students to the World Wide Web and the fundamentals of web design and development.',
    technology: ['HTML','CSS'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Students learn to organize programs by writing and using functions, debugging code, and handling errors.',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces object-oriented programming concepts such as classes, objects, inheritance, and polymorphism.',
    technology: ['C#'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Students learn to create dynamic websites using JavaScript to respond to events and update content.',
    technology: ['HTML','CSS','JavaScript'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Focuses on user experience, accessibility, performance optimization, and API usage in modern web development.',
    technology: ['HTML','CSS','JavaScript'],
    completed: false
  }
];

const container = document.querySelector("#courses");
const creditDisplay = document.querySelector("#credits");
const buttons = document.querySelectorAll(".buttons button");

function displayCourses(courseList) {
  container.innerHTML = "";

  courseList.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course");
    if(course.completed){
      card.classList.add("completed");
    }
    card.textContent = `${course.subject} ${course.number}`;
    container.appendChild(card);
  });

  const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
  creditDisplay.textContent = totalCredits;
}

// Initially display all courses
displayCourses(courses);

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.textContent.toUpperCase();
    if(filter === "ALL") {
      displayCourses(courses);
    } else {
      displayCourses(courses.filter(c => c.subject === filter));
    }
  });
});