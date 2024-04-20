import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <>
        
            <Contenitore>
<div className="footer"></div>
        </Contenitore>
        </>
    )
}

const Contenitore = styled.div`
  .footer {
    height: 130px;
    background-color: rgb(187 187 135);
  }
`;

export default Footer;