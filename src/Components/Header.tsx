// src/Components/Header.tsx
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme.cardBorder};
`;

const Brand = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.highlight};
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Brand>&lt;Grace Tomegah /&gt;</Brand>
      <Nav>
        <NavLink href="#skills">Compétences</NavLink>
        <NavLink href="#projects">Projets</NavLink>
        <NavLink href="#cv">CV</NavLink>
        <NavLink href="#contact">Me contacter</NavLink>
        <NavLink href="#passions">Passions</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
