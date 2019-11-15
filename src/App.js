import React, { useState, useEffect } from "react";
import axios from "axios";

import Select from "components/Select/Select";
import Checkbox from "components/Checkbox/Checkbox";
import Modal from "components/Modal/Modal";

import MessengerIcon from "assets/icons/messenger-icon.svg";
import WhatsappIcon from "assets/icons/whatsapp-icon.svg";
import FacebookIcon from "assets/icons/facebook-icon.svg";

import styles from "./styles.module.scss";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [segundos, setSegundos] = useState([]);
  const [bytes, setBytes] = useState([]);
  const [ilimitedSms, setIlimitedSms] = useState(true);
  const [currentBytesPlan, setCurrentBytesPlan] = useState(0);
  const [currentSecondsPlan, setCurrentSecondsPlan] = useState(0);
  const [smsPlan, setSmsPlan] = useState(0);

  useEffect(() => {
    axios
      .get("https://apidev.cuy.pe/api/v1/challenge/bundle/list", {
        headers: {
          Authorization:
            "Cuy-oauthtoken sys_sk_test_2sH8WCPqZa50NqUM6jJc9IqY8vplNk1H2SQZpZBfdG0dmc5"
        }
      })
      .then(response => {
        const planes = response.data.list;
        const segundos = [];
        const bytes = [];
        planes.forEach(plan => {
          if (plan.bundleType.id === 1) {
            segundos.push(plan);
          }
          if (plan.bundleType.id === 2) {
            bytes.push(plan);
          }
          if (plan.bundleType.id === 3) {
            setSmsPlan(plan);
          }
        });
        setSegundos(segundos);
        setBytes(bytes.reverse());
        setCurrentBytesPlan(bytes[0]);
        setCurrentSecondsPlan(segundos[0]);
      });
  }, []);

  if (bytes.length === 0 || segundos.length === 0) {
    return (
      <div className={styles.loadingPage}>
        <h1>Loading...</h1>
      </div>
    );
  }
  const totalPlanPrice = (
    currentBytesPlan.price +
    currentSecondsPlan.price +
    (ilimitedSms ? smsPlan.price : 0)
  ).toFixed(2);

  return (
    <div className={styles.appBackground}>
      <div className={styles.appContainer}>
        <h1>Arma tu plan</h1>
        <div className={styles.iconList}>
          <p>Incluye gratis</p>
          <ul>
            <li>
              <img src={MessengerIcon} alt="messenger-icon" />
            </li>
            <li>
              <img src={WhatsappIcon} alt="whatsapp-icon" />
            </li>
            <li>
              <img src={FacebookIcon} alt="facebook-icon" />
              <span>foto</span>
            </li>
          </ul>
        </div>
        <div className={styles.priceContainer}>
          <span>s/</span>
          <p>{totalPlanPrice}</p>
        </div>
        <p className={styles.days}>Por 30 días</p>
        <hr className={styles.divider} />
        <Select
          defaultValue={bytes[0]}
          options={bytes}
          onChange={value => {
            setCurrentBytesPlan(value);
          }}
        />
        <hr className={styles.divider} />
        <Select
          defaultValue={segundos[0]}
          options={segundos}
          onChange={value => {
            setCurrentSecondsPlan(value);
          }}
        />
        <hr className={styles.divider} />
        <p>Sms Ilimitado</p>
        <Checkbox
          toggleIsChecked={() => {
            setIlimitedSms(!ilimitedSms);
          }}
          isChecked={ilimitedSms}
        />
        <hr className={styles.divider} />
        <button>Me interesa</button>
        <p
          className={styles.info}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          ¿Qué es arma tu plan?
        </p>
        <p
          className={styles.info}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          ¿Portabilidad?
        </p>
        <Modal
          isOpen={isModalOpen}
          closeModal={() => {
            setIsModalOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default App;
