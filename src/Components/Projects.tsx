import { useState } from "react";
import styled from "styled-components";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  gallery: string[];
  startDate: string;
  endDate: string;
  role: string;
  teamSize: number;
  technologies: string[];
}

const projectList: Project[] = [
  {
    id: 1,
    title: "L’atelier d’Archimède",
    description: "Développer un outil de modélisation 3D simple et intuitif.",
    image: "/images/archimede.png",
    gallery: [
      "/images/archimede1.png",
      "/images/archimede2.png",
      "/images/archimede3.png",
    ],
    startDate: "Avril 2025",
    endDate: "",
    role: "Développeuse fullstack",
    teamSize: 4,
    technologies: ["C#", "React", "ASP.NET Core", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Compétencia",
    description: "Outil de gestion de compétences pour les enseignants.",
    image: "/images/competencia.png",
    gallery: [
      "/images/competencia1.png",
      "/images/competencia2.png",
    ],
    startDate: "Octobre 2024",
    endDate: "Février 2025",
    role: "Scrum Master, développeuse fullstack",
    teamSize: 3,
    technologies: ["C#", "WPF", "PostgreSQL", "ASP.NET"],
  },
];
;

const Projects = () => {
  const [projects] = useState<Project[]>(projectList);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Section id="projects">
      <Title>Mes Projets</Title>
      <Grid>
        {projects.map((project) => (
          <Card key={project.id} onClick={() => setSelectedProject(project)}>
            {project.image && (
              <ProjectImage src={project.image} alt={project.title} />
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ProjectMeta>
              <span>📆 {project.startDate} – {project.endDate || "En cours"}</span>
              <span>👥 {project.teamSize} personnes</span>
              <span>🧩 Rôle : {project.role}</span>
              <span>🛠️ Tech : {project.technologies.join(", ")}</span>
            </ProjectMeta>
          </Card>
        ))}
      </Grid>

      {/* Modal Projet */}
      {selectedProject && (
        <ModalOverlay onClick={() => setSelectedProject(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <Gallery>
              {selectedProject.gallery.map((img, index) => (
                <GalleryImage
                  key={index}
                  src={img}
                  alt={`${selectedProject.title} ${index + 1}`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </Gallery>
            <CloseButton onClick={() => setSelectedProject(null)}>✖</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Modal Zoom Image */}
      {selectedImage && (
        <ModalOverlay onClick={() => setSelectedImage(null)}>
          <ModalImageZoom src={selectedImage} alt="Image agrandie" />
        </ModalOverlay>
      )}
    </Section>
  );
};

export default Projects;
const Section = styled.section`
  width: 100%;
  padding: 2rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBackground || '#fff'};
  color: ${({ theme }) => theme.text || '#000'};
  border: 1px solid ${({ theme }) => theme.cardBorder || '#ccc'};
  padding: 1rem;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 160px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 1rem;
  background-color: #f0f0f0;
`;

const ProjectMeta = styled.div`
  margin-top: 1rem;
  font-size: 0.95rem;
  color: #777;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.cardBackground || '#fff'};
  padding: 2rem;
  border-radius: 12px;
  max-width: 90vw;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;

const Gallery = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const GalleryImage = styled.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ModalImageZoom = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
