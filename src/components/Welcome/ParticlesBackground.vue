<template>
  <div
    :style="dynamicBackgroundStyle"
    id="particles-js"
  ></div>
</template>

<script>
import 'particles.js'

export default {
  name: 'particles-background',
  props: {
    pageHeight: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
  }),
  methods: {
    initParticles () {
      window.particlesJS(
        'particles-js',
        {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#02a5ff',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#02a5ff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        },
      )
    },
  },
  computed: {
    dynamicBackgroundStyle () {
      console.group('particles computed')
      console.log(`{height: ${this.pageHeight}px}`)
      console.groupEnd()
      return `{height: ${this.pageHeight}px}`
    },
  },
  mounted () {
    console.group('particles mouted')
    console.log('Inital particles js')
    this.initParticles()
    console.groupEnd()
  },
}
</script>

<style scoped>
#particles-js {
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw !important;
  background-color: #0d1c2d;
}
</style>
