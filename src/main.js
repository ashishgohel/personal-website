import './styles/main.css';

function loadAboutMe() {
    const aboutSection = document.getElementById('about');
    aboutSection.querySelector('p').textContent = "I'm a passionate software engineer with expertise in web technologies and a keen interest in building innovative solutions.";
}

function loadSkills() {
    const skills = [
        'JavaScript', 'React', 'Node.js', 'Python', 'Docker', 'Cloud Computing'
    ];
    const skillsContainer = document.getElementById('skills-container');
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'bg-primary text-white p-3 rounded text-center';
        skillElement.textContent = skill;
        skillsContainer.appendChild(skillElement);
    });
}

function loadProjects() {
    const projects = [
        { name: 'Project 1', description: 'A web application that...', technologies: ['React', 'Node.js'] },
        { name: 'Project 2', description: 'An innovative solution for...', technologies: ['Python', 'Machine Learning'] }
    ];
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'bg-gray-100 p-6 rounded-lg';
        projectCard.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${project.name}</h3>
            <p class="text-gray-700 mb-4">${project.description}</p>
            <div class="flex gap-2">
                ${project.technologies.map(tech => `<span class="bg-secondary text-white px-2 py-1 rounded text-sm">${tech}</span>`).join('')}
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadAboutMe();
    loadSkills();
    loadProjects();
});