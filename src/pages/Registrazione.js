import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DatePicker, Input } from "antd";
import { Link } from "react-router-dom";

/*
CHIEDRE A DANILO

1) se clicco sul label prende anche input // SOLUZIONE // pare che htmlFor e id se hanno lo stesso nome si associano

2) se provo ad usare un input o un datapicker mi mostra un secondo riquadro e non capisco perché // SOLUZIONE // se lasciavo il css dentro il contenitore dati si sovrapponevano gli style CSS

3) ho cambiato il formato di datapicker ma mi lancia un nuovo errore dicendo che non può leggere le proprietà di null alla riga  60, l'errore si attiva solo se cancello una data dopo che l'ho inserita

4)Non mi lancia più il messaggio di campo vuoto su datapicker
*/

const dateFormatList = ["DD/MM/YYYY"];

const Registrazione = () => {
  //use state con oggetto i value di default dei parametri
  const [formValues, setFormValues] = useState({
    nome: "",
    cognome: "",
    data: "",
    email: "",
    telefono: "",
    cellulare: "",
    password: "",
    confermaPassword: "",
    privacy: false,
  });

  //variabile di stato per la gestione degli errori

  const [error, setError] = useState({});

  //variabile di stato per il set della validazione form
  const [valido, setValido] = useState(false);


  // gestione cambiamento valore del form
  const handleOnChange = (evento) => {
    setFormValues({
      //spread array con i valori di base
      ...formValues,
      //target sul nome
      [evento.target.name]:
        //se il tipo di evento non è checkbox
        evento.target.type !== "checkbox"
          ? //esegui un trim degli spazi vuoti
            evento.target.value.trim()
          : //altrimenti segna come checked
            evento.target.checked,
    });
    if (
      evento.target.name === "password" ||
      evento.target.name === "confermaPassword"
    ) {
      passwordValide();
    }
  };

  const handleOnChangeData = (event) => {
    setFormValues({ ...formValues, data: event.$d });
  };

  //gestione degli errori
  const validazioneCampi = (evento) => {
    //destrutturazione oggetto che prende come valori un nome e value degli elementi target (quelli negli input del form)
    const { name, value } = evento.target;
    //taglio degli spazi vuoti ai valori inseriti tramite tim, se il nome è vuoto, stampa il messaggio di errore
    if (value.trim() === "") {
      setError((prevError) => ({
        ...prevError,
        [name]: "Perfavore, completa il campo",
      }));
    } else {
      //campo di regole da rispettare per la email valida
      if (name === "email") {
        //regex che stabilisce le regole
        const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        //condizione per la quale se la regex è falsa stampa l'errore
        if (!emailRegex.test(value)) {
          setError((prevError) => ({
            ...prevError,
            [name]: "Il campo email deve essere valido",
          }));
        } else {
          //se non ci sono errori non lasciare nessun errore
          setError((prevError) => ({
            ...prevError,
            [name]: undefined,
          }));
        }
      } //campo di regole da rispettare per password valida
      else if (name === "password") {
        //regola che da i parametri per la password valida
        const passwordRegex =
          /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;

        //se la password non rispetta queste regole
        if (!passwordRegex.test(value)) {
          setError((prevError) => ({
            ...prevError,
            [name]: "Il campo password non è valido, inseriscine una corretta",
          }));
        } else {
          //se non ci sono errori chiudi
          setError((prevError) => ({
            ...prevError,
            [name]: undefined,
          }));
        }
      } else if (name === "cellulare" || name === "telefono") {
        const phoneRegex =
          /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{4})[-.\s]?(\d{2})[-.\s]?(\d{2})/;

        if (!phoneRegex.test(value)) {
          setError((prevError) => ({
            ...prevError,
            [name]: "Il numero di telefono non è valido",
          }));
        } else {
          setError((prevError) => ({
            ...prevError,
            [name]: undefined,
          }));
        }
      } else {
        setError((prevError) => ({
          ...prevError,
          [name]: undefined,
        }));
      }
    }
  };

  //convalida delle password se sono uguali
  const passwordValide = () => {
    const password = formValues.password;
    const confermaPassword = formValues.confermaPassword;
    //se la password è diversa dalla conferma
    if (password !== confermaPassword) {
      setError((prevError) => ({
        ...prevError,
        confermaPassword: "Le password non corrispondono",
      }));
      return false;
    } else {
      setError((prevError) => ({
        ...prevError,
        confermaPassword: undefined,
      }));
      return true;
    }
  };

  //onSubmit per prevenire il defeult del form all'invio del form
  function onSubmitF(evento) {
    evento.preventDefault();
    console.log("campi del form ", formValues);
  }

  useEffect(() => {
    //se in un valore dell'oggetto è presente un errore, questa è valorizzata e quindi lancia l'errore, altrimenti non ci sono errori
    const isValid = Object.values(error).every((error) => !error);

    const condizioni = Object.values(formValues).every(
      (value) =>
        value !== undefined &&
        value !== null &&
        value !== "" &&
        value !== false &&
        value !== "false"
    );
    setValido(isValid && condizioni);
    //all'aggiornamento controlla questi campi
  }, [formValues, error]);

  //useEffect per le password valide ed uguali
  useEffect(() => {
    passwordValide();
  }, [formValues.password, formValues.confermaPassword]);

  return (
    <>
      <Contenitore>
        <div className="container">
          {/* inizio form registrazione */}

          <form className="registrazione" onSubmit={onSubmitF}>
            <h2 className="titolo">
              Benvenuto! Per registrarti compila il modulo seguente
            </h2>
            {/* div dati anagrafici inizio */}

            <div className="Dati">
              <label className="label" htmlFor="nome1">
                Inserisci il tuo nome :
              </label>
              <Input
                type="text"
                name="nome"
                id="nome"
                className={`control ${error.nome ? "errore" : ""}`}
                value={formValues.nome}
                onChange={handleOnChange}
                onBlur={validazioneCampi}
              />
              <div className="prova">
                {error.nome && <p className="help ">{error.nome}</p>}
              </div>

              <label className="label" htmlFor="cognome1">
                Inserisci il tuo cognome :
              </label>

              <Input
                type="text"
                name="cognome"
                id="cognome"
                className={`control ${error.cognome ? "errore" : ""}`}
                value={formValues.cognome}
                onChange={handleOnChange}
                onBlur={validazioneCampi}
              />
              <div className="prova">
                {error.cognome && <p className="help ">{error.cognome}</p>}
              </div>

              <label className="label" htmlFor="data1">
                Inserisci la data di nascita :
              </label>
              
                <DatePicker format={dateFormatList}
                  type="date"
                  id="data"
                  name="data"
                  className={`control ${error.data ? "errore" : ""}`}
                  onChange={handleOnChangeData}
                />
              

              {/* fine anagrafici ----- inizio contatti */}

              <div className="prova">
                {error.data && <p className="help ">{error.data}</p>}
              </div>
              <label className="label" htmlFor="email1">
                Inserisci la tua mail :
              </label>

              <Input
                type="email"
                name="email"
                id="email"
                className={`control ${error.email ? "errore" : ""}`}
                value={formValues.email}
                onChange={handleOnChange}
                onBlur={validazioneCampi}
              />
              <div className="prova">
                {error.email && <p className="help ">{error.email}</p>}
              </div>
              <label className="label" htmlFor="telefono1">
                Inserisci un telefono fisso :
              </label>

              <Input
                type="text"
                name="telefono"
                id="telefono"
                className={`control ${error.telefono ? "errore" : ""}`}
                value={formValues.telefono}
                onChange={handleOnChange}
                onBlur={validazioneCampi}
              />
              <div className="prova">
                {error.telefono && <p className="help ">{error.telefono}</p>}
              </div>
              <label className="label" htmlFor="cellulare1">
                Inserisci un telefono cellulare :
              </label>

              <Input
                type="text"
                name="cellulare"
                id="cellulare"
                className={`control ${error.cellulare ? "errore" : ""}`}
                value={formValues.cellulare}
                onChange={handleOnChange}
                onBlur={validazioneCampi}
              />
              <div className="prova">
                {error.cellulare && <p className="help ">{error.cellulare}</p>}
              </div>
              {/* fine contatti ---------- inizio password */}

              <label className="label" htmlFor="password1">
                Scegli una Password :
              </label>

              <Input.Password
                type="password"
                name="password"
                id="password"
                className={`control ${error.password ? "errore" : ""}`}
                value={formValues.password}
                onChange={handleOnChange}
                onBlur={validazioneCampi}
              />
              <div className="prova">
                {error.password && <p className="help ">{error.password}</p>}
              </div>

              <label className="label" htmlFor="confermaPassword1">
                Conferma la Password :
              </label>

              <Input.Password
                type="password"
                name="confermaPassword"
                id="confermaPassword"
                className={`control ${
                  error.confermaPassword ? "errore" : ""
                }`}
                value={formValues.confermaPassword}
                onChange={handleOnChange}
                onBlur={validazioneCampi}
              />
              <div className="prova">
                {error.confermaPassword && (
                  <p className="help ">{error.confermaPassword}</p>
                )}
              </div>
              {/* fine accesso ----------- inizio privacy */}

              <div className="termini">
                <label className="label" htmlFor="">
                  Accetto i termini sulla privacy :
                </label>

                <input
                  type="checkbox"
                  name="privacy"
                  id="privacy"
                  className={`control ${error.accetto ? "errore" : ""}`}
                  value={formValues.accetto}
                  onChange={handleOnChange}
                />
                <div className="prova">
                  {error.accetto && <p className="help ">{error.accetto}</p>}
                </div>
              </div>
              <div className="bottone">
                <button type="submit" className="invia" disabled={!valido}>
                  Conferma Registrazione
                </button>
              </div>
            </div>
          </form>
          <div className="img"></div>
        </div>
      </Contenitore>
    </>
  );
};

const Contenitore = styled.div`
  .container {
    border: 1px solid black;
    padding: 0;
    display: flex;
    justify-self: center;
    /* background-color: red; */
    margin-top: 3%;
    margin-bottom: 3%;

    .img {
      width: 55%;
      background-image: url("/assets/images/poster-fitness.jpeg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .registrazione {
      width: 45%;

      .titolo {
        font-weight: 600;
        margin-left: 3%;
        margin-top: 3%;
      }

      .Dati {
        height: 100%;
        display: flex;
        flex-direction: column;
        margin: 3%;
      }

      .ant-picker {
        border-radius: 5px;
        border-width: 1px;
        border-color: grey;
        width: 95%;
        height: 40px;
        margin-bottom: 3%;
        text-align: center;
      }

      .bottone {
        display: flex;
        justify-content: center;
        margin-top: 15px;
      }
      .invia {
        border-radius: 5px;
        font-size: 17px;
        font-weight: 600;
        background-color: rgb(187 187 135);
        color: rgb(33 37 41);
        height: 100%;
        width: 80%;
        border: rgb(187 187 135);
      }

      .invia:hover {
        color: rgba(236, 236, 15, 0.904);
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out;
      }
    }
  }

  .help {
    color: #5a0001;
    font-size: 14px;
    font-weight: 600;
  }

  .prova {
    height: 15px;
    margin-bottom: 3%;
    margin-top: 1%;
  }

  .termini {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2%;

    #privacy {
      width: 8%;
      text-align: center;
      font-size: 15px;
      height: 15px;
    }
  }

  .label {
    margin-top: 1%;
    margin-bottom: 1%;
  }

  .errore {
    border-color: red;
  }
`;

export default Registrazione;
