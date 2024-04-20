import styled from "styled-components";
import { Link } from "react-router-dom";

import Alert from "react-bootstrap/Alert";


function ErrorAlert(pag) {

  return (
    <>
      {pag === "promozionescelta" && (
        <>
          <Contenitore>
            <Alert>
              <Alert.Heading>
                Attenzione! La pagina cercata non esiste!
              </Alert.Heading>
              <Link to="/Promozioni">
                <div className="container">
                  <button>Torna Indietro</button>
                </div>
              </Link>
            </Alert>
          </Contenitore>
        </>
      )}

      {pag === "informazioni" && (
        <>
          <Contenitore>
            <Alert>
              <Alert.Heading>
                Attenzione! La pagina cercata non esiste!
              </Alert.Heading>
              <Link to="/Abbonamenti">
                <div className="container">
                  <button>Torna Indietro</button>
                </div>
              </Link>
            </Alert>
          </Contenitore>
        </>
      )}


    </>
  );


}





const Contenitore = styled.div`
  .fade {
    width: 50%;
    margin-left: 25%;
    margin-top: 20%;
    color: rgb(33 37 41);
    background-color: rgb(227 12 12 / 95%);
    border-radius: 9px;

    .alert-heading {
      text-align: center;
      padding: 4%;
      font-size: 30px;
      font-weight: 600;
    }

    .container {
      display: flex;
      justify-content: center;

      button {
        width: 30%;
        font-weight: 600;
        font-size: 17px;
        padding: 3px;
        border-radius: 9px;
        background-color: rgb(187 187 135);
        color: rgb(33 37 41);
      }
      button:hover {
        color: rgba(236, 236, 15, 0.904);
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out;
      }
    }
    a {
      text-decoration: none;
    }
  }
`;





export default ErrorAlert;
