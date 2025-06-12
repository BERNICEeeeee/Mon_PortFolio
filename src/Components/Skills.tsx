import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faPhp, faGit } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faCogs, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type Skill = {
  name: string;
  icon: IconDefinition;
};

const languageSkills: Skill[] = [
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3Alt },
  { name: 'JavaScript', icon: faJs },
  { name: 'TypeScript', icon: faCode },
  { name: 'C#', icon: faCode },
  { name: 'PHP', icon: faPhp },
];

const toolSkills: Skill[] = [
  { name: 'React', icon: faReact },
  { name: '.NET', icon: faProjectDiagram },
  { name: 'Git', icon: faGit },
  { name: 'WPF / XAML', icon: faProjectDiagram },
  { name: 'PostgreSQL', icon: faDatabase },
  { name: 'Entity Framework', icon: faCogs },
];

const highlights = [
  '⚡ Passionnée par la création d’interfaces fluides et intuitives avec React',
  '⚡ J’aime concevoir des apps logicielles rapides et responsives avec des technologies modernes',
  '⚡ J’intègre facilement des services externes comme des bases de données ou des API pour enrichir l’expérience utilisateur',
];

const SkillsContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  justify-items: center;
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground || '#fff'};
  border: 1px solid ${({ theme }) => theme.cardBorder || '#ddd'};
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  text-align: center;
  font-size: 1rem;
`;

const Highlights = styled.div`
  margin-top: 3rem;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

type SkillSectionProps = {
  title: string;
  skills: Skill[];
};

const SkillSection: React.FC<SkillSectionProps> = ({ title, skills }) => (
  <>
    <SectionTitle>{title}</SectionTitle>
    <Grid>
      {skills.map((skill, index) => (
        <SkillCard
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <FontAwesomeIcon icon={skill.icon} size="2x" />
          <div style={{ marginTop: '0.5rem' }}>{skill.name}</div>
        </SkillCard>
      ))}
    </Grid>
  </>
);

const Skills = () => (
  <SkillsContainer>
    <Title>Mes Compétences</Title>
    <SkillSection title="Langages" skills={languageSkills} />
    <SkillSection title="Outils & Frameworks" skills={toolSkills} />
    <Highlights>
      {highlights.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </Highlights>
  </SkillsContainer>
);

export default Skills;
