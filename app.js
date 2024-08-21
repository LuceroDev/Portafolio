// Datos de proyectos
const projects = [
    {
        title: "Análisis de Ventas",
        description: "Un análisis de ventas usando Excel. Incluye visualizaciones.",
        image: "./assets/ventas.png", // Reemplaza con la ruta de tu imagen
        githubLink: "https://github.com/LuceroDev/Proyectos-de-analisis-de-datos/tree/main/Ventas", // Enlace a GitHub
        reportLink: "https://drive.google.com/file/d/1tSZN0pZyEjuvo2dtEH8YXznfVWFpFWj7/view?usp=sharing" // Enlace al reporte o resultado
    },
    /*
    {
        title: "Análisis de Sentimientos",
        description: "Análisis de sentimientos de opiniones en redes sociales utilizando Python y técnicas de NLP.",
        image: "project2.jpg", // Reemplaza con la ruta de tu imagen
        githubLink: "https://github.com/tuusuario/project2", // Enlace a GitHub
        reportLink: "https://example.com/report2" // Enlace al reporte o resultado
    },
    {
        title: "Visualización de Datos de Spotify",
        description: "Visualización de las canciones más populares en Spotify utilizando Python y bibliotecas de visualización.",
        image: "project3.jpg", // Reemplaza con la ruta de tu imagen
        githubLink: "https://github.com/tuusuario/project3", // Enlace a GitHub
        reportLink: "https://example.com/report3" // Enlace al reporte o resultado
    }*/
];

// Función para agregar proyectos al DOM
function loadProjects() {
    const projectGrid = document.getElementById('project-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 8px;">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.githubLink}" class="button github" target="_blank">Ver Código en GitHub</a>
            <a href="${project.reportLink}" class="button" target="_blank">Ver Reporte</a>
        `;

        projectGrid.appendChild(projectCard);
    });
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', loadProjects);
