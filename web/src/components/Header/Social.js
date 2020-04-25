import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "../../config";

const Style = styled.div`
  a {
    color: ${config.colorGrey};
    transition: color ease 0.3s;

    &:hover {
      color: ${props => props.color};
    }
  }
`;

const Social = ({ icon, color, href }) => {
  return (
    <Style color={color}>
      <a href={href} rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon icon={icon} />
      </a>
    </Style>
  );
};

export default Social;
