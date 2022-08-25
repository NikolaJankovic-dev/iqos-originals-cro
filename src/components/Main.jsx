import React, { useEffect, useLayoutEffect, useState } from "react";
import style from "./Main.module.css";
import Modal from "./Modal";
import Confetti from "./Confetti";

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
  const [kitFounded, setKitFounded] = useState(false);
  const [nameStyle, setNameStyle] = useState(false);
  const [nameTransition, setNameTransition] = useState(false);
  const [nameFounded, setNameFounded] = useState(false);
  const [iqosOld, setIqosOld] = useState(style.iqosOld);
  const [iqosMedium, setIqosMedium] = useState(style.iqosMedium);
  const [iqosNew, setIqosNew] = useState(style.iqosNew);
  const [kitOld, setKitOld] = useState(style.kitOld);
  const [kitNew, setKitNew] = useState(style.kitNew);
  const [nameOld, setNameOld] = useState(style.nameOld);
  const [nameNew, setNameNew] = useState(style.nameNew);

  const [buttonStyle, setButtonStyle] = useState(style.button)

  const [buttonPosition, setButtonPosition] = useState(document.getElementById("iqosNew")?.offsetHeight/2 + document.getElementById("iqosNew")?.offsetTop) 

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
      <span>Sretno</span>
    </p>
  );
  const [modalBtn, setModalBtn] = useState("Zaigraj");

  const [confettiQuantity, setConfettiQuantity] = useState(0);

  
  
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
          Uspešno ste našli vse 4 razlike.
          <br />
          Osvojili ste <span>200</span> točk
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
    if (!openModal){
    setIqosOld(style.iqosOldFade);
    setIqosMedium(style.iqosMediumUp);
    setIqosStyle(1); 
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
  }
  };
  const handleIqosMedium = () => {
    if (!openModal){
    // setIqosMedium(style.iqosMediumFade);
    setButtonStyle(style.buttonZoom)
    setIqosNew(style.iqosNewUp);
    setIqosStyle(2); 
    setModalHeader(<h1>Nova tipka</h1>);
    setModalText(
      <div>
        <img src={require("../assets/exp.png")} alt="exp" draggable={false}/>
      <p>
        Vidljiva tirkizna tipka 
        <br />
        Upotpunjuje dizajn!  
      </p></div>
    );
    setModalBtn("Nastavi");
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 2000);
  }
  };
  const handleIqos = () => {
    if (!openModal){
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
          <img src={require("../assets/exp.png")} alt="exp" draggable={false}/>
        <p>
          Svetlo turkizna barva gumba <br />
          dopolnjuje dizajn in poskribi za
          <br />
          večjo opaznost.
        </p></div>
      );
      setModalBtn("Nadaljujte");
      const timer = setTimeout(() => {
        setOpenModal(true);
      }, 2000);
    }
  }
  };

  const handleKit = () => {
    if (!openModal){
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
          alat za čiščenje.
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
    if (!openModal){
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
          <span>IQOS ORIGINALS DUO</span>
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
  useEffect(()=>{
    const positionDown = document.getElementById("iqosMedium")?.offsetHeight/2.02 + document.getElementById("iqosMedium")?.offsetTop
    if (loaded){
    setButtonPosition(positionDown) 
    console.log(positionDown)  } 
    if (buttonStyle === style.buttonZoom){
      setButtonPosition(positionDown) 
    }
    window.addEventListener("resize", ()=>{
      setButtonPosition(positionDown)
    })
  },[buttonPosition, buttonStyle, loaded, "resize"])

  return ( 
    <div
      className={style.main}
      style={{
        minHeight: window.innerHeight,
      }}
    >
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
      <div className={!loaded ? style.loading : style.loaded}>Učitavam</div>
      <div className={style.background}>
        <div className={style.content}>
          {/* <img
            onLoad={() => setImg1Loaded(true)}
            draggable={false}
            src={require("../assets/iqosNew.png")}
            alt="iqos"
            className={style.iqosNew}
            style={{
              opacity: iqosStyle === 2 ? 1 : 0,

              transform: iqosTransition ? "scale(1.2)" : "scale(1)",
              filter: iqosTransition
                ? "drop-shadow(0 0 0.5rem rgba(5,2,2,0.83))"
                : "drop-shadow(0 0 0.5rem rgba(5,2,2,0))",
            }}
          />
          <img
            onLoad={() => setImg2Loaded(true)}
            draggable={false}
            src={require("../assets/iqosMedium.png")}
            alt="iqos"
            className={style.iqosmedium}
            style={{
              opacity: iqosStyle === 1 ? 1 : 0,
              cursor: iqosStyle === 1 ? "pointer" : "default",
              transform: iqosTransition ? "scale(1.2)" : "scale(1)",
              filter: iqosTransition
                ? "drop-shadow(0 0 0.5rem rgba(5,2,2,0.83))"
                : "drop-shadow(0 0 0.5rem rgba(5,2,2,0))",
            }}
          /> */}

          <img
            onLoad={() => setImg1Loaded(true)}
            draggable={false}
            src={require("../assets/iqosold.png")}
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
              bottom: "58%",
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
            src={require("../assets/kitOld.png")}
            alt="iqos"
            className={kitOld}
            onPointerDown={handleKit}
          />
          {/* <img
            onLoad={() => setImg5Loaded(true)}
            draggable={false}
            src={require("../assets/kitNew.png")}
            alt="iqos"
            className={style.kitNew}
            style={{
              opacity: kitNew ? 1 : 0,
              cursor: kitNew ? "pointer" : "default",
              transform: kitTransition ? "scale(1.2)" : "scale(1)",
              filter: kitTransition
                ? "drop-shadow(0 0 0.5rem rgba(5,2,2,0.83))"
                : "drop-shadow(0 0 0.5rem rgba(5,2,2,0))",
            }}
          /> */}
          {/* <img
            onLoad={() => setImg6Loaded(true)}
            draggable={false}
            src={require("../assets/nameNew.png")}
            alt="iqos"
            className={style.nameNew}
            style={{
              opacity: nameStyle ? 1 : 0,
              transform: nameTransition ? "scale(1.2)" : "scale(1)",
              filter: nameTransition
                ? "drop-shadow(0 0 0.5rem rgba(5,2,2,0.83))"
                : "drop-shadow(0 0 0.5rem rgba(5,2,2,0))",
            }}
          /> */}
          <img
            onLoad={() => setImg3Loaded(true)}
            draggable={false}
            src={require("../assets/nameOld.png")}
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
      <div className={style.background}>
        <div className={style.content}>
          {/* <img
            onLoad={() => setImg4Loaded(true)}
            draggable={false}
            src={require("../assets/iqosNew.png")}
            alt="iqos"
            className={iqosNew}
            style={{
              opacity: iqosStyle === 0 ? 0 : 1,
            }}
          /> */}
          

          <img
            onLoad={() => setImg5Loaded(true)}
            draggable={false}
            src={require("../assets/iqosNew.png")}
            alt="iqos"
            className={style.iqosNew}
            // style={{
            //   opacity: iqosStyle === 0 ? 0 : 1,
            // }}
            onPointerDown={handleIqosMedium}
            id="iqosNew"
          />
          <img
            onLoad={() => setImg6Loaded(true)}
            draggable={false}
            src={require("../assets/iqosMedium.png")}
            alt="iqos"
            className={iqosMedium}
            id="iqosMedium"
          />
           <img
           onLoad={()=>setImg4Loaded(true)}
           draggable={false}
           src={require("../assets/button.png")}
           alt="button"
           className={buttonStyle}
           style={{
            top: buttonPosition
           }} 
           />
          <div
            style={{
              width: document?.getElementById("iqosOld")?.offsetWidth,
              height: document?.getElementById("iqosOld")?.offsetHeight,
              position: "absolute",
              bottom: "6%",
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
            onLoad={() => setImg7Loaded(true)}
            draggable={false}
            src={require("../assets/kitNew.png")}
            alt="iqos"
            className={style.kitNew}
          />
          <img
            onLoad={() => setImg8Loaded(true)}
            draggable={false}
            src={require("../assets/kitNew.png")}
            alt="iqos"
            className={kitNew}
          />
          <img
            onLoad={() => setImg9Loaded(true)}
            draggable={false}
            src={require("../assets/nameNew.png")}
            alt="iqos"
            className={style.nameNew}
            // style={{
            //   opacity: kitNew ? 0 : 1,
            // }}
          />
          <img
            onLoad={() => setImg10Loaded(true)}
            draggable={false}
            src={require("../assets/nameNew.png")}
            alt="iqos"
            className={nameNew}
            onPointerDown={handleName}
            // style={{
            //   opacity: kitNew ? 0 : 1,
            // }}
          />
        </div>

        <div className={style.buttons}>
          {/* <div
            className={style.btn2}
            onPointerDown={handleIqosMedium}
            style={{
              display: iqosStyle === 1 ? "block" : "none",
            }}
          ></div> */}

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
      <div className={style.eclipse}>
        <p>{number === 5 ? 4 : number}</p>
      </div>
    </div>
  );
};

export default Main;
