import styled from 'styled-components';
import { string } from 'prop-types';

import { px400, px500, px600, px700 } from '~/styles/GlobalStyles';

/**
 * A reusable banner component that displays text over a background image or color.
 * The banner has a fixed height and responsive text styling.
 * @param {Object} props - The component props.
 * @param {string} props.url - The URL of the background image.
 * @param {string} props.text - The text to display in the banner.
 */
function Banner({ url, text }) {
  return (
    <StyledBanner $url={url}>
      <TextBoxUI>
        <TextUI>{text}</TextUI>
      </TextBoxUI>
    </StyledBanner>
  );
}

const StyledBanner = styled.div`
  height: 24rem;
  background-color: var(--color-orange-400);
  background-image: url(${props => props.$url});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  text-transform: uppercase;

  @media only screen and (max-width: ${px700}) {
    height: 20rem;
  }
  @media only screen and (max-width: ${px500}) {
    height: 16rem;
  }
  @media only screen and (max-width: ${px400}) {
    height: 14rem;
  }
`;

const TextBoxUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--shadow-modal);
`;

const TextUI = styled.p`
  background-color: var(--color-orange-600);
  background-image: linear-gradient(
    135deg,
    var(--color-orange-600) 50%,
    var(--color-blue-600) 50%
  );
  color: var(--color-white);
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 4px;
  line-height: 1;
  padding: 1rem 1.6rem;
  box-shadow: var(--shadow-md);
  animation: 0.5s cubic-bezier(0.42, 0, 0.002, 1) 0s 1 normal none running open;

  @media only screen and (max-width: ${px600}) {
    font-size: 1.2rem;
    padding: 0.6rem 1.2rem;
  }
`;

Banner.propTypes = {
  url: string.isRequired,
  text: string.isRequired,
};

export default Banner;
