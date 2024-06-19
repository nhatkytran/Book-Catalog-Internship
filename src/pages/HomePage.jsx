import styled from 'styled-components';
import { RecommendedBook } from '~/features/home';

function HomePage() {
  return (
    <StyledHomePage>
      <RecommendedBook />
    </StyledHomePage>
  );
}

const StyledHomePage = styled.div`
  flex: 1;
  padding: 3.2rem 2rem;
`;

export default HomePage;
