import styled from 'styled-components';
import { array } from 'prop-types';

/**
 * Loader component.
 * @param {Object} props - Component props.
 * @param {Array} props.UI - Array of styled-components CSS template literals for custom styling.
 */
function Loader({ UI }) {
  return (
    <StyledLoader $UI={UI} viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" aria-label="Loader Icon">
      <circle cx="15" cy="15" r="15">
        <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate>
        <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate>
      </circle>
      <circle cx="60" cy="15" r="9" fillOpacity="0.3">
        <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite" ></animate>
        <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate>
      </circle>
      <circle cx="105" cy="15" r="15">
        <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate>
        <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate>
      </circle>
    </StyledLoader>
  );
}

const StyledLoader = styled.svg`
  display: block;
  width: 5rem;
  fill: var(--color-neutral-800);
  ${props => props.$UI}
`;

Loader.propTypes = { UI: array }; // css``

export default Loader;
