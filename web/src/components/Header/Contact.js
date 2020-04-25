import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { config } from "../../config";

const Style = styled.div`
  a {
    color: ${config.colorGrey};
    text-decoration: none;

    svg {
      margin-right: 5px;
    }
  }
`;

const Contact = ({ href, icon, text }) => {
  return (
    <Style>
      <a href={href}>
        <FontAwesomeIcon icon={icon} />
        {text}
      </a>
    </Style>
  );
};

export default Contact;
