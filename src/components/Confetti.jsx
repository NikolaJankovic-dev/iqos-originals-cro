import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Confetti = ({ confettiQuantity }) => {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    console.log(confettiQuantity);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);
  const getRandomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // background: {
        //   //   color: {
        //   //     value: "#0f0400",
        //   //   },
        // },
        fullScreen: {
          enable: true,
          zIndex: 9999,
        },
        interactivity: {
          detectsOn: "window",
        },
        emitters: {
          position: {
            x: 50,
            y: 0,
          },
          rate: {
            quantity: getRandomNumberBetween(1, 20) * confettiQuantity,
            delay: 0.5,
          },
        },
        particles: {
          color: {
            value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
          },
          move: {
            decay: 0.05,
            direction: "top",
            enable: true,
            gravity: {
              enable: true,
              maxSpeed: 150,
            },
            outModes: {
              top: "none",
              default: "destroy",
            },
            speed: { min: 25, max: 50 },
          },
          number: {
            value: 0,
          },
          opacity: {
            value: 1,
          },
          rotate: {
            value: {
              min: 0,
              max: 360,
            },
            direction: "random",
            animation: {
              enable: true,
              speed: 30,
            },
          },
          tilt: {
            direction: "random",
            enable: true,
            value: {
              min: 0,
              max: 360,
            },
            animation: {
              enable: true,
              speed: 30,
            },
          },
          size: {
            value: 4,
          },
          roll: {
            darken: {
              enable: true,
              value: 25,
            },
            enable: true,
            speed: {
              min: 5,
              max: 15,
            },
          },
          wobble: {
            distance: 30,
            enable: true,
            speed: {
              min: -7,
              max: 7,
            },
          },
          shape: {
            type: [
              "circle",
              "square",
              "polygon",
              
            ],
            options: {
    
              polygon: [
                {
                  sides: 5,
                },
                {
                  sides: 6,
                },
              ],
             
            },
          },
        },
      }}
    />
  );
};

export default Confetti;
