// Sample project data - replace with your actual projects
const projects = [
    {
        id: 1,
        title: "Data Visualization Dashboard",
        description: "Interactive dashboard for visualizing sales metrics and performance indicators.",
        image: "placeholder-project1.jpg", // Replace with actual image path
        tags: ["React", "D3.js", "API Integration"],
        demoUrl: "https://project1.nshrt.com",
        codeUrl: "https://github.com/yourusername/project1",
        promptUsed: "Create a React dashboard that visualizes sales data with interactive charts..."
    },
    {
        id: 2,
        title: "AI-Powered Search Tool",
        description: "Semantic search interface for technical documentation with AI-powered results ranking.",
        image: "placeholder-project2.jpg", // Replace with actual image path
        tags: ["JavaScript", "NLP", "Search Algorithms"],
        demoUrl: "https://project2.nshrt.com",
        codeUrl: "https://github.com/yourusername/project2",
        promptUsed: "Build a semantic search tool that can index and search through technical documentation..."
    },
    {
        id: 3,
        title: "Product Configurator",
        description: "Interactive 3D product configurator for customizing solutions before purchase.",
        image: "placeholder-project3.jpg", // Replace with actual image path
        tags: ["Three.js", "React", "WebGL"],
        demoUrl: "https://project3.nshrt.com",
        codeUrl: "https://github.com/yourusername/project3",
        promptUsed: "Develop a 3D product configurator that allows users to customize product features..."
    },
    {
        id: 4,
        title: "API Playground",
        description: "Interactive tool for testing and exploring API endpoints with real-time results.",
        image: "placeholder-project4.jpg", // Replace with actual image path
        tags: ["API", "REST", "Developer Tools"],
        demoUrl: "https://project4.nshrt.com",
        codeUrl: "https://github.com/yourusername/project4",
        promptUsed: "Create an API playground that lets developers test endpoints and see response data..."
    }
];

// Function to generate project cards
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-image" style="background-image: url('/images/${project.image}')"></div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.demoUrl}" class="project-link" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="${project.codeUrl}" class="project-link" target="_blank">
                        <i class="fab fa-github"></i> Source Code
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects);
