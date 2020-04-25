import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
const Style = styled.div`
  .logo {
    img {
      width: 150px;
      height: auto;
    }
  }
`;

export const Logo = () => (
  <Style>
    <div className="logo">
      <a href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>
    </div>
  </Style>
);
