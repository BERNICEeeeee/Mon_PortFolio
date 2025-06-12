import styled from 'styled-components';

const Section = styled.section`
  padding: 3rem 1.5rem;
  background-color: ${({ theme }) => theme.cardBackground || '#f9f9f9'};
  color: ${({ theme }) => theme.text || '#000'};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
const Message = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;
const Info = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Title>Me contacter ☎️</Title>
      <Message>
      Pas encore convaincu ?
          Je serais ravi de vous démontrer mes compétences lors d’un entretien      </Message>
      <Info>📧 Email : gtomegah@et.esiea.fr</Info>
      <Info>📞 Téléphone : 06 36 13 36 35</Info>
      <Info>💼 LinkedIn : <a href="https://www.linkedin.com/in/grace-tomegah/" target="_blank" rel="noopener noreferrer">Grace Tomegah</a></Info>
    </Section>
  );
};

export default Contact;
