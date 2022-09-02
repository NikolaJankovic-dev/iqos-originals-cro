import React, { useEffect, useLayoutEffect, useState } from "react";
import style from "./Main.module.css";
import Modal from "./Modal";
import Confetti from "./Confetti";
import Hints from "./Hints";

const Main = () => {
  const [img1Loaded, setImg1Loaded] = useState(false);
  const [img2Loaded, setImg2Loaded] = useState(false);
  const [img3Loaded, setImg3Loaded] = useState(false);
  const [img4Loaded, setImg4Loaded] = useState(false);
  const [img5Loaded, setImg5Loaded] = useState(false);
  const [img6Loaded, setImg6Loaded] = useState(false);
  const [img7Loaded, setImg7Loaded] = useState(false);
  const [img8Loaded, setImg8Loaded] = useState(false);
  const [img9Loaded, setImg9Loaded] = useState(false);
  const [img10Loaded, setImg10Loaded] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [number, setNumber] = useState(5);
  const [iqosStyle, setIqosStyle] = useState(0);
  const [kitStyle, setKitStyle] = useState(0);
  const [iqosTransition, setIqosTransition] = useState(false);
  // const [kitNew, setKitNew] = useState(false);
  const [kitTransition, setKitTransition] = useState(false);
  // const [kitFounded, setKitFounded] = useState(false);
  const [nameStyle, setNameStyle] = useState(false);
  const [nameTransition, setNameTransition] = useState(false);
  // const [nameFounded, setNameFounded] = useState(false);
  const [iqosOld, setIqosOld] = useState(style.iqosOld);
  const [iqosMedium, setIqosMedium] = useState(style.iqosMedium);
  const [iqosNew, setIqosNew] = useState(style.iqosNew);
  const [kitOld, setKitOld] = useState(style.kitOld);
  const [kitNew, setKitNew] = useState(style.kitNew);
  const [nameOld, setNameOld] = useState(style.nameOld);
  const [nameNew, setNameNew] = useState(style.nameNew);

  const [hint, setHint] = useState("none");
  const [deviceFounded, setDeviceFounded] = useState(false);
  const [buttonFounded, setButtonFounded] = useState(false);
  const [kitFounded, setKitFounded] = useState(false);
  const [nameFounded, setNameFounded] = useState(false);

  const [buttonStyle, setButtonStyle] = useState(style.button);

  const [buttonPosition, setButtonPosition] = useState(
    document.getElementById("iqosNew")?.clientTop -
      document.getElementById("iqosNew")?.clientHeight
    // +
    // document.getElementById("iqosNew")?.offsetTop
  );

  const [openModal, setOpenModal] = useState(true);

  const [modalHeader, setModalHeader] = useState(<h1>Pronađi razlike</h1>);
  const [modalText, setModalText] = useState(
    <p>
      Obratite pažnju na detalje i
      <br /> pronađite 4 razlike na gornjoj
      <br /> fotografiji.
      <br />
      <br />
      Kliknite na razliku i saznajte što
      <br /> se promijenilo.
      <br />
      <br />
      <span>Sretno!</span>
    </p>
  );
  const [modalBtn, setModalBtn] = useState("Zaigraj");

  const [confettiQuantity, setConfettiQuantity] = useState(0);

  const handleHint = () => {
    console.log("click");
    if (!kitFounded) {
      setHint("kit");
    } else if (!nameFounded) {
      setHint("name");
    } else if (!deviceFounded) {
      setHint("device");
    } else if (!buttonFounded) {
      setHint("button");
    }
    const timer = setTimeout(() => {
      setHint("none");
    }, 5000);
    //  return clearTimeout(timer)
  };

  const handleClose = () => {
    if (number > 1) {
      setOpenModal(false);
      setNumber(number - 1);
      // setKitTransition(false);
      const timer = setTimeout(() => {
        setKitTransition(false);
        setIqosTransition(false);
        setNameTransition(false);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setNumber(0);
      setOpenModal(false);
      setConfettiQuantity(1);

      const timer = setTimeout(() => {
        setModalHeader(<h1>Čestitamo!</h1>);
        setModalText(
          <p>
            Uspješno ste pronašli sve <br /> 4 razlike.
            <br />
            <br />
            Osvojili ste{" "}
            <span
              style={{
                fontWeight: "bolder",
              }}
            >
              200
            </span>{" "}
            bodova
          </p>
        );
        setModalBtn("Preuzmi bodove");
        setKitTransition(false);
        setIqosTransition(false);
        setNameTransition(false);
        setOpenModal(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
    // return () => clearTimeout(timer);
  };
  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleIqosOld = () => {
    if (!openModal) {
      setIqosOld(style.iqosOldFade);
      setIqosMedium(style.iqosMediumUp);
      setIqosStyle(1);
      setDeviceFounded(true);
      setModalHeader(<h1>Nove boje</h1>);
      setModalText(
        <p>
          Dostupan je u 4 nove boje: <br />
          <span
            style={{
              display: "block",
              marginBottom: "60px",
            }}
          >
            turquoise, silver, scarlet i slate.
          </span>
        </p>
      );
      setModalBtn("Nastavi");
      const timer = setTimeout(() => {
        setOpenModal(true);
      }, 2000);
    }
  };
  const handleIqosMedium = () => {
    if (!openModal && iqosStyle === 1) {
      // setIqosMedium(style.iqosMediumFade);
      setButtonStyle(style.buttonZoom);
      setIqosNew(style.iqosNewUp);
      setIqosStyle(2);
      setModalHeader(<h1>Nova tipka</h1>);
      setModalText(
        <div>
          <img src={require("../assets/images/exp.png")} alt="exp" draggable={false} />
          <p
            style={{
              display: "block",
              marginBottom: "60px",
            }}
          >
            Vidljivija tirkizna tipka
            <br />
            upotpunjuje dizajn!
          </p>
        </div>
      );
      setModalBtn("Nastavi");
      const timer = setTimeout(() => {
        setOpenModal(true);
      }, 2000);
    }
  };
  const handleIqos = () => {
    if (!openModal) {
      if (iqosStyle === 0) {
        setIqosStyle(1);
        setIqosTransition(true);
        setModalHeader(<h1>Nove boje</h1>);
        setModalText(
          <p>
            Dostupan je u 4 nove boje: <br />
            <span>turquoise, silver, scarlet i slate</span>.
          </p>
        );
        setModalBtn("Nastavi");
        const timer = setTimeout(() => {
          setOpenModal(true);
        }, 2000);
      } else if (iqosStyle === 1) {
        setIqosStyle(2);
        setIqosTransition(true);
        setModalHeader(<h1>Turkizni gumb</h1>);
        setModalText(
          <div>
            <img
              src={require("../assets/images/exp.png")}
              alt="exp"
              draggable={false}
            />
            <p>
              Svetlo turkizna barva gumba <br />
              dopolnjuje dizajn in poskribi za
              <br />
              večjo opaznost.
            </p>
          </div>
        );
        setModalBtn("Nadaljujte");
        const timer = setTimeout(() => {
          setOpenModal(true);
        }, 2000);
      }
    }
  };

  const handleKit = () => {
    if (!openModal) {
      if (!kitFounded) {
        setKitOld(style.kitOldFade);
        setKitNew(style.kitNewUp);
        setKitStyle(1);
        setKitFounded(true);
        setModalHeader(
          <h1>
            Dvostruki alat za
            <br /> čiščenje
          </h1>
        );
        setModalText(
          <p>
            U pakiranju dolazi novi dvostuki <br />
            alat za čišćenje.
          </p>
        );
        setModalBtn("Nastavi");
        const timer = setTimeout(() => {
          setOpenModal(true);
        }, 2000);
      }
    }
  };

  const handleName = () => {
    if (!openModal) {
      if (!nameFounded) {
        setNameOld(style.nameOldFade);
        setNameNew(style.nameNewUp);
        // setNameStyle(true);
        // setNameTransition(true);
        setNameFounded(true);
        setModalHeader(<h1>Novi stil</h1>);
        setModalText(
          <p>
            Stigao je
            <br />
            <span
              style={{
                display: "block",
                marginBottom: "40px",
              }}
            >
              IQOS ORIGINALS DUO
            </span>
          </p>
        );
        setModalBtn("Nastavi");
        const timer = setTimeout(() => {
          setOpenModal(true);
        }, 2000);
      }
    }
  };

  useLayoutEffect(() => {
    if (
      img1Loaded &&
      img2Loaded &&
      img3Loaded &&
      img4Loaded &&
      img5Loaded &&
      img6Loaded &&
      img7Loaded &&
      img8Loaded &&
      img9Loaded &&
      img10Loaded
    ) {
      setLoaded(true);
    }
  }, [
    img1Loaded,
    img2Loaded,
    img3Loaded,
    img4Loaded,
    img5Loaded,
    img6Loaded,
    img7Loaded,
    img8Loaded,
    img9Loaded,
    img10Loaded,
  ]);
  useEffect(() => {
    const positionDown =
      document.getElementById("iqosMedium")?.offsetHeight / 2.03 +
      document.getElementById("iqosMedium")?.offsetTop;
    if (loaded) {
      setButtonPosition(positionDown);
      console.log(positionDown);
    }
    if (buttonStyle === style.buttonZoom) {
      setButtonPosition(positionDown);
    }
    window.addEventListener("resize", () => {
      setButtonPosition(positionDown);
    });
  }, [buttonPosition, buttonStyle, loaded, "resize"]);

  return (
    <div className={style.main}>
      <div
        style={{
          position: "absolute",
        }}
      >
        <Confetti confettiQuantity={confettiQuantity} />
      </div>{" "}
      <Modal
        openModal={openModal}
        handleClose={handleClose}
        setOpenModal={setOpenModal}
        modalHeader={modalHeader}
        modalText={modalText}
        modalBtn={modalBtn}
        number={number}
      />
      <Hints hint={hint} />
      <div className={!loaded ? style.loading : style.loaded}></div>
      <div className={style.background}>
        <div className={style.content}>
          <img
            onLoad={() => setImg1Loaded(true)}
            draggable={false}
            src={require("../assets/images/iqosold.png")}
            alt="iqos"
            className={iqosOld}
            // style={{
            //   opacity: iqosStyle === 0 ? 1 : 0,
            //   cursor: iqosStyle === 0 ? "pointer" : "default",
            // }}
            onPointerDown={handleIqosOld}
            id="iqosOld"
          />
          <div
            style={{
              width: document?.getElementById("iqosOld")?.offsetWidth,
              height: document?.getElementById("iqosOld")?.offsetHeight,
              position: "absolute",
              bottom: "54%",
              left: "16%",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                className={style.btn1}
                onPointerDown={handleIqosMedium}
                style={{
                  display: iqosStyle === 1 ? "block" : "none",
                }}
              ></div>
              <div
                className={style.btn3}
                onPointerDown={handleIqosOld}
                style={{
                  display: iqosStyle === 0 ? "block" : "none",
                }}
              ></div>
            </div>
          </div>
          <img
            onLoad={() => setImg2Loaded(true)}
            draggable={false}
            src={require("../assets/images/kitOld.png")}
            alt="iqos"
            className={kitOld}
            onPointerDown={handleKit}
          />

          <img
            onLoad={() => setImg3Loaded(true)}
            draggable={false}
            src={require("../assets/images/nameOld.png")}
            alt="iqos"
            className={nameOld}
            // style={{
            //   opacity: nameStyle ? 0 : 1,
            //   cursor: nameStyle ? "pointer" : "default",
            // }}
            onPointerDown={handleName}
          />
        </div>
      </div>
      <div className={style.background2}>
        <div className={style.content}>
          <img
            onLoad={() => setImg5Loaded(true)}
            draggable={false}
            src={require("../assets/images/iqosNew.png")}
            alt="iqos"
            className={style.iqosNew}
            onPointerDown={handleIqosMedium}
            id="iqosNew"
          />
          <img
            onLoad={() => setImg6Loaded(true)}
            draggable={false}
            src={require("../assets/images/iqosMedium.png")}
            alt="iqos"
            className={iqosMedium}
            id="iqosMedium"
          />
          <img
            onLoad={() => setImg4Loaded(true)}
            draggable={false}
            src={require("../assets/images/button.png")}
            alt="button"
            className={buttonStyle}
            style={{
              top: buttonPosition,
            }}
          />

          <div
            style={{
              width: document?.getElementById("iqosOld")?.offsetWidth,
              height: document?.getElementById("iqosOld")?.offsetHeight,
              position: "absolute",
              bottom: "4%",
              left: "16%",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              {" "}
              <div
                className={style.btn1}
                onPointerDown={handleIqosMedium}
                style={{
                  display: iqosStyle === 1 ? "block" : "none",
                }}
              ></div>
              <div
                className={style.btn3}
                onPointerDown={handleIqosOld}
                style={{
                  display: iqosStyle === 0 ? "block" : "none",
                }}
              ></div>
            </div>
          </div>
          <img
            onLoad={() => setImg7Loaded(true)}
            draggable={false}
            src={require("../assets/images/kitNew.png")}
            alt="iqos"
            className={style.kitNew}
          />
          <img
            onLoad={() => setImg8Loaded(true)}
            draggable={false}
            src={require("../assets/images/kitNew.png")}
            alt="iqos"
            className={kitNew}
          />
          <img
            onLoad={() => setImg9Loaded(true)}
            draggable={false}
            src={require("../assets/images/nameNew.png")}
            alt="iqos"
            className={style.nameNew}
          />
          <img
            onLoad={() => setImg10Loaded(true)}
            draggable={false}
            src={require("../assets/images/nameNew.png")}
            alt="iqos"
            className={nameNew}
            onPointerDown={handleName}
          />
        </div>

        <div className={style.buttons}>
          <div
            className={style.btn4}
            onPointerDown={handleIqosOld}
            style={{
              display: iqosStyle === 0 ? "block" : "none",
            }}
          ></div>
          <div
            className={style.btn5}
            onPointerDown={handleKit}
            style={{
              display: kitStyle === 0 ? "block" : "none",
            }}
          ></div>
          <div
            className={style.btn6}
            onPointerDown={handleKit}
            style={{
              display: kitStyle === 0 ? "block" : "none",
            }}
          ></div>
          <div
            className={style.btn7}
            onPointerDown={handleKit}
            style={{
              display: kitStyle === 0 ? "block" : "none",
            }}
          ></div>
          <div
            className={style.btn8}
            onPointerDown={handleKit}
            style={{
              display: kitStyle === 0 ? "block" : "none",
            }}
          ></div>
        </div>
      </div>
      <button className={style.eclipse} onClick={handleHint}>
        <div>
          <p>{number === 5 ? 4 : number}</p>
        </div>
      </button>
    </div>
  );
};

export default Main;
