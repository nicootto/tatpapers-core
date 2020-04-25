import React from "react";
import styled from "styled-components";
import Contact from "./Contact";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { config } from "../../config";
import Social from "./Social";

const Style = styled.div`
  header {
    display: flex;
    justify-content: space-between;

    font-size: 12px;
    font-family: "Poppins", sans-serif;
    height: 30px;
  }

  .header__contact,
  .header__social {
    display: flex;
    align-items: center;

    div {
      display: block;
      margin-right: 15px;

      &:last-child {
        margin-right: 0px;
      }
    }
  }

  .header__social {
    font-size: 18px;
  }
`;

export const Header = () => {
  return (
    <Style>
      <header>
        <div className="header__contact">
          <Contact
            href="tel:+59895345919"
            icon={faWhatsapp}
            text="095 345 919"
          />
          <Contact
            href="mailto:hola@tatpapers.com"
            icon={faEnvelope}
            text="hola@tatpapers.com"
          />
        </div>
        <div className="header__social">
          <Social
            href="https://www.facebook.com/tatpapers"
            icon={faFacebookF}
            color={config.facebookColor}
          />
          <Social
            href="https://instagram.com/tatpapers"
            icon={faInstagram}
            color={config.instagramColor}
          />
        </div>
      </header>
    </Style>
  );
};
