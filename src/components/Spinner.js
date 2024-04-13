import React from "react";
import styled from "styled-components";

const Spinner = () => {
    return (
      <>
        <Contenitore>
          <div className="container-spinner">
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </Contenitore>
      </>
    );
}


const Contenitore = styled.div`
  .container-spinner {
    width: 50%;
    margin-left: 25%;
    margin-top: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spinner-border {
    width: 100px;
    height: 100px;
    font-size: 50px;
  }
`;

export default Spinner