import styled from "styled-components";

export const Primary = styled.button`
  background-color: ${props =>
    props.theme.button.colors[props.color].background};
  padding: 0.9rem 3.7rem;
  border: none;
  transition: 0.3s;
  outline: none;
  cursor: pointer;
  color: ${props => props.theme.button.colors[props.color].color};
  width: ${props => (props.fullWidth ? "100%" : "auto")};

  &:active {
    background-color: ${props =>
      props.theme.button.colors[props.color].activeBackground};
    box-shadow: -3px 3px 14px 0px rgba(129, 67, 67, 0.2);
  }
`;

export const Text = styled.span`
  text-transform: uppercase;
  font-size: ${props => props.theme.button.typography.fontSize};
  font-weight: ${props => props.theme.typography.boldFontWeight};
  line-height: ${props => props.theme.typography.baseLineHeight};
`;
