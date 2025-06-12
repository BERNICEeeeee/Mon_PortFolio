// src/Components/ProjectSection.tsx
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 40px;
  background-color: ${({ theme }) => theme.background};
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
  text-align: center;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 12px;
  padding: 20px;
  width: 300px;
  height: 200px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectSection = () => {
  const projects = [
    { title: 'L atelier d Archimed', description: ' Développer un outil de modélisation 3D simple et intuitif.' },
    { title: 'Compétencia', description: 'Outil intuitif pour les enseignants.' },
    { title: 'Arcadia ', description: ' Plateforme multimédia et gestion de trajets' },
    { title: 'Blackjack S.A.B.L ', description: 'Jeu de Blackjack revisité' },
  ];


  return (
    <Section>
      <Title>Mes Projets</Title>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </ProjectList>
    </Section>
  );
};

export default ProjectSection;
