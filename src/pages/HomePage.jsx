import styled from 'styled-components';

function HomePage() {
  return <StyledHomePage>Home page</StyledHomePage>;
}

const StyledHomePage = styled.div`
  flex: 1;
  background-color: var(--color-neutral-100);
`;

export default HomePage;
