import styled from 'styled-components';

const Section = styled.section`
  margin: 20px auto;
  max-width: 600px;
  padding: 0 15px;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.5;
`;

const AboutMe = () => {
  return (
    <Section>
      <Title>À propos de moi</Title>
      <Text>
        Etudiante en 2e année d'informatique, je suis passionnée par le développement et l'innovation technologique. Curieuse et motivée, j’apprends vite et aime relever des défis, que ce soit en solo ou en équipe. Engagée dans deux associations, j’organise régulièrement des événements et des collectes solidaires. Je pratique aussi le tennis, un sport qui m’a appris rigueur, persévérance et esprit d’équipe. Toujours en quête de nouvelles compétences, je suis prête à mettre mon énergie au service de projets ambitieux !
 
      </Text>
    </Section>
  );
};

export default AboutMe;
