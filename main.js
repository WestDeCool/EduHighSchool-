// Sample Data
const courses = [
    {
        id: 1,
        title: 'Mathematics',
        grade: 9,
        teacher: 'Mr. Johnson',
        description: 'Algebra, Geometry, and Trigonometry',
        image: 'assets/images/math.jpg'
    },
    // Add more courses
];

const resources = [
    {
        id: 1,
        title: 'Math Textbook',
        type: 'PDF',
        subject: 'Mathematics',
        grade: 9,
        url: 'assets/resources/math_textbook.pdf'
    },
    // Add more resources
];

// DOM Elements
const loginBtn = document.querySelector('.login-btn');
const modal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');

// Event Listeners
loginBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Add login logic here
    console.log('Login attempt:', { email, password });
});

// Render Courses
function renderCourses() {
    const coursesGrid = document.querySelector('.courses-grid');
    
    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'course-card';