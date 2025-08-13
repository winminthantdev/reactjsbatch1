import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";

const ParticleBackground = () => {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  if (!engineReady) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        preset: "links",
        background: {
          color: {
            value: "transparent", 
          },
        },
        particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          speed: 0.5,
          straight: false,
        }
      },
      }}
    />
  );
};

export default ParticleBackground;
