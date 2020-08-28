import styled from 'styled-components';

const TextStepContainer = styled.div`
  flex-wrap: wrap;
  align-items: flex-end;
  display: flex;
  justify-content: ${props => (props.user ? 'flex-end' : 'flex-start')};
`;

export default TextStepContainer;
