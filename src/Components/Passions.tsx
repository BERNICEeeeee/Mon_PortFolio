// src/components/Passions.tsx
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PassionsContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;
const PassionList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const PassionItem = styled(motion.li)`
  background: ${(props) => props.theme.cardBackground};
  border: 1px solid ${(props) => props.theme.cardBorder};
  border-radius: 10px;
  margin: 10px;
  padding: 15px 25px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
`;

const passions = ['Musique', 'Voyages', 'Photographie', 'Cuisine', 'Lecture'];

const Passions = () => {
  return (
    <PassionsContainer>
      <h2>Mes Passions</h2>
      <PassionList>
        {passions.map((passion, index) => (
          <PassionItem
  whileHover={{ scale: 1.1, color: '#ff6347' }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: 'spring', stiffness: 250, delay: index * 0.2 }}
>

            {passion}
          </PassionItem>
        ))}
      </PassionList>
    </PassionsContainer>
  );
};

export default Passions;
