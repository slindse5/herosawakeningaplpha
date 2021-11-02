
const ParticlesConfig =

{
fpsLimit: 60,

    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#FEF9E6"]
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false,
          startValue: "min",
          destroy: "max"
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "destroy",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "attract"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.8,
          }
        },
        bubble: {
          distance: 250,
          size: 8,
          duration: 2,
          opacity: 0,
          speed: 3
        },
        repulse: {
          distance: 50,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        },
        trail: {
          delay: 0.005,
          quantity: 1,
          pauseOnStop: true
        },
        twinkle: {
         
            enable: true,
            color: "#e6e85e",
            frequency: 0.03,
            opacity: 1
          },
      },
    },
    retina_detect: true
  }


export default ParticlesConfig;