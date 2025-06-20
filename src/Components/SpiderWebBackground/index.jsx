// components/SpiderWebBackground.jsx
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const SpiderWebBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#000000"
          }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 150,
              line_linked: {
                opacity: 1
              }
            }
          }
        },
        particles: {
          color: {
            value: "#ffffff"
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            outModes: {
              default: "bounce"
            }
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 60
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 3 }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default SpiderWebBackground;
