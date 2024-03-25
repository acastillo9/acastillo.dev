import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { useStore } from "@nanostores/react";
import { theme } from "../stores/ThemeStore.ts";
import { loadSlim } from "@tsparticles/slim";

export default function TsParticles() {
  const $theme = useStore(theme);

  const color = $theme === "light" ? "#8839ef" : "#b4befe";

  const options: ISourceOptions = {
    fullScreen: {
      zIndex: -1,
    },
    fps_limit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { particles_nb: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: color },
      links: {
        color: color,
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: "out",
        random: false,
        speed: 2,
        straight: false,
      },
      number: { density: { enable: true }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: 5 },
    },
    detectRetina: true,
  };

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return <></>;
  }
  return <Particles id="tsparticles" options={options} />;
}
