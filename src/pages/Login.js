import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Input } from "antd";
import { Link } from "react-router-dom";

import { Card, Button } from "react-bootstrap";




const Login = () => {

    //variabile di stato contenente i value di default del form
    const [formValues, setFormValues] = useState({

        email:"",
        password:""
    })

    // variabile di stato per la gestione degli errori
const [error, setError] = useState({})


    //variabile di stato per l'attivazione del pulsante se il form è valido

const [valido, setValido] = useState(false)

    const handleOnChange = (evento) => {
        setFormValues({
            ...formValues,
            [evento.target.name] : evento.target.value.trim()
        })
    }

    const validazioneCampi = (evento) => {
        const { name, value } = evento.target;

        if (value.trim() === "") {
            setError((prevErrore) => ({
                ...prevErrore,
                [name]: "Campo vuoto, per favore compila"
            }));
        } else {
            if (name === "email") {
                const emailRegex =
                    /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

                if (!emailRegex.test(value)) {
                    setError((prevErrore) => ({
                        ...prevErrore,
                        [name]: "Inserisci una mail valida",
                    }));
                } else {
                    setError((prevErrore) => ({
                        ...prevErrore,
                        [name]: undefined,
                    }));
                }
            } else if (name === "password") {
                const passwordRegex =
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;

                if (!passwordRegex.test(value)) {
                  setError((prevErrore) => ({
                    ...prevErrore,
                    [name]: [
                      <ul>
                        <li>Deve contenere una maiuscola</li>
                        <li>Deve contenere un carattere speciale</li>
                        <li>Deve contenere un numero</li>
                        <li>Deve avere 8 - 16 caratteri</li>
                      </ul>,
                    ],
                  }));
                } else {
                    setError((prevErrore) => ({
                        ...prevErrore,
                        [name]: undefined,
                    }))
                }
            } else {
                setError((prevErrore) => ({
                    ...prevErrore,
                    [name]: undefined,
                }));

            }
        }
    };
    function onSubmitFo(evento) {
        evento.preventDefault();
        console.log("campi form", formValues)
    }

    //useEffect dei campi non validi
    useEffect(() => {

        const Valid = Object.values(error).every((error) => !error)

        const condizioni = Object.values(formValues).every((value) =>
            value !== undefined &&
            value !== "" &&
            value !== null &&
            value !== false &&
            value !== "false"
      );

      setValido(Valid && condizioni)
    }, [formValues, error])


    return (
      <>
        <Container>
          <Card>
            <Card.Header>
              <Card.Title>Accesso</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <form onSubmit={onSubmitFo}>
                  <div className="contenitore">
                    {/* campo email */}
                    <label className="label" htmlFor="email1">
                      Inserisci email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className={`control ${error.email ? "is-valid" : ""}`}
                      value={formValues.email}
                      onChange={handleOnChange}
                      onBlur={validazioneCampi}
                    />
                    <div className="prova">
                      {error.email && <p className="help ">{error.email}</p>}
                    </div>

                     {/* campo password */}
                    <label className="label" htmlFor="email2">
                      Inserisci la password:
                    </label>
                    <Input.Password
                      type="password"
                      name="password"
                      id="password"
                      className={`control ${error.password ? "is-valid" : ""}`}
                      value={formValues.password}
                      onChange={handleOnChange}
                      onBlur={validazioneCampi}
                    />
                    <div className="prova">
                      {error.password && (
                        <p className="help ">{error.password}</p>
                      )}
                    </div>
                  </div>
                  <div className="cBottone">
                    <Button
                      type="submit"
                      className="conferma"
                      disabled={!valido}
                    >
                      Accedi
                    </Button>
                  </div>
                </form>
              </Card.Text>
              <Card.Text className="avviso">
                Registrandoti accetti tutti i termini e condizioni per mantenere
                un ambiente d'allenamento sano, rispettoso dell'altro e pulito,
                inoltre accetti tutte le normative sulla privacy, cookie, e
                pubblicità.
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="nota"><p>Non hai un account? <Link to ="/Registrazione">clicca qui!</Link></p></div>
        </Container>
      </>
    );
}


const Container = styled.div`
  .card {
    width: 25%;
    margin-top: 5%;
    margin-left: 35%;
  }

  .contenitore {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .label {
    margin-top: 5%;
    margin-bottom: 2%;
  }

  #email {
    position: relative;
    display: inline-flex;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    border-radius: 6px;
    transition: all 0.2s;
    border-color: #d9d9d9;
    border-style: solid;
    border-width: 1px;
  }

  #email:focus-within {
    border-color: #1677ff;
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    outline: 0;
    background-color: #ffffff;
  }

  .avviso {
    font-weight: 400;
    font-size: 12px;
  }

  .cBottone {
    display: flex;
    justify-content: center;
    margin-top: 3%;

    .conferma {
      background-color: rgb(187 187 135);
      border-color: rgb(187 187 135);
      color: rgb(33 37 41);
      font-weight: 600;
      font-size: 15px;
      height: 100%;
      width: 100%;
    }

    .conferma:hover {
      color: rgba(236, 236, 15, 0.904);
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out;
    }
  }
  .card-header {
    margin-bottom: -15px;
  }

  .nota {
    display: flex;
    justify-content: center;
    margin-right: 6%;
    margin-top: 1%;
  }

  .help {
    font-size: 13px;
    margin-top: 1%;
    color: #5a0001;
  }
`;


export default Login;
