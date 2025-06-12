import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: ${(props) => props.theme.cardBackground};
  border: 1px solid ${(props) => props.theme.cardBorder};
  border-radius: 8px;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

interface ProjectCardProps {
  title: string;
  description: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, delay = 0 }) => {
  return (
    <Card
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
};

export default ProjectCard;
