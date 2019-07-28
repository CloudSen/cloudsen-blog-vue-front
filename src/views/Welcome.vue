<template>
  <fragment>
    <v-content v-resize="onResize">
      <v-container
        fill-height
        fluids
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            md8
            sm8
            xs12
          >
            <v-card
              :height="this.$vuetify.breakpoint.xsOnly ? '250px' : '380px'"
              class="hack-typing green--text text--darken-3 text-xs-left black font-weight-light"
            >
              <v-card-text>
                <p class="red--text font-weight-regular">WARNING</p>
                <p>Hello, and, again,</p>
                <p>You are accessing CloudS3n</p>
                <p>personal web site.</p>
                <p>Now starting fucking awesome AI system...</p>
                <p>
                  <span class="system-success-info">[ OK ]</span> Checking filesystems
                </p>
                <p>
                  <span class="system-success-info">[ OK ]</span> Mounting /root
                </p>
                <p>
                  <span class="system-success-info">[ OK ]</span> ......
                </p>
                <p>
                  <span class="system-success-info">[ OK ]</span> Auto login
                </p>
                <p>
                  > Good Luck, Have fun
                  <span class="smile">:)</span>
                </p>
                <p>Arch Linux (tty1)</p>
                <p>
                  <span class="user-info">[ visitor@GLaDOS ~]$&nbsp;&nbsp;</span>
                  <span class="user-input">{{ getUserInput }}</span>
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <ParticlesBackground :pageHeight="pageHeight"></ParticlesBackground>
      </v-container>
    </v-content>
  </fragment>
</template>

<script>
import ParticlesBackground from '@/components/Welcome/ParticlesBackground'

export default {
  name: 'welcome',
  components: {
    ParticlesBackground,
  },
  data: () => ({
    pageHeight: 0,
    isCombinationMode: false,
    isNormalMode: true,
    userInput: [],
    supportedCombination: ['C', 'T', 'H', 'D', 'L'],
    supportedCommand: ['login', 'clear', 'info', 'screenfetch', 'cloudsen', 'exit'],
  }),
  methods: {
    onResize () {
      console.group('Resize')
      this.pageHeight = this.caculatePageHeight()
      console.log(`current page height is: ${this.pageHeight}`)
      console.groupEnd()
    },
    caculatePageHeight () {
      const { body } = document
      const html = document.documentElement
      return Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight,
      )
    },
    appendInput (keyCode) {
      this.userInput.push(String.fromCharCode(keyCode))
    },
    comfirmInput () {
      const command = this.userInput.join('')
      const index = this.supportedCommand.indexOf(command)
      this.clearInput()
      console.log(`输入命令：${command}`)
      if (index < 0) {
        console.log(`暂不支持的命令: ${this.userInput.join('')}`)
      } else {
        console.log(`支持的命令: ${command}`)
        switch (command) {
          case 'cloudsen':
            break
          case 'login':
            this.$router.push('/cloudable')
            break
          case 'exit':
            break
          default:
            break
        }
      }
    },
    deleteInput () {
      if (this.userInput.length > 0) {
        this.userInput.pop()
      }
    },
    clearInput () {
      // length = 0 not working
      this.userInput.splice(0, this.userInput.length)
      console.log(`clear user input: size=${this.userInput.length}`)
    },
    clearScreen () {

    },
    startCombination (keyCode) {
      const key = String.fromCharCode(keyCode)
      const index = this.supportedCombination.indexOf(key)
      console.log(`组合键：${key}`)
      if (index < 0) {
        console.log(`暂不支持的组合键: Ctrl + ${key}`)
        this.changeToNormalMode()
      } else {
        console.log(`支持的组合键: Ctrl + ${key}`)
        if (this.supportedCombination[index] === 'H') {
          this.$router.push('/cloudable')
        }
      }
    },
    changeToCombinationMode () {
      console.log('进入组合键模式')
      this.isNormalMode = false
      this.isCombinationMode = true
    },
    changeToNormalMode () {
      console.log('进入普通输入模式')
      this.isNormalMode = true
      this.isCombinationMode = false
    },
  },
  computed: {
    getUserInput () {
      return this.userInput.join('')
    },
  },
  mounted () {
    this.userInput.length = 0
    this.pageHeight = this.caculatePageHeight()
    window.addEventListener('keypress', (e) => {
      console.log(`keypress code: ${e.keyCode}`)
      const isNumber = e.keyCode >= 48 && e.keyCode <= 57
      const isWord = (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)
      const isCommaOrDot = (e.keyCode === 44 || e.keyCode === 46)
      if (this.isNormalMode) {
        switch (true) {
          case (isNumber || isWord || isCommaOrDot):
            this.appendInput(e.keyCode)
            break
          default:
            console.log('暂不支持的输入')
            break
        }
      }
    })

    window.addEventListener('keydown', (e) => {
      console.log(`keydown code: ${e.keyCode}`)
      const isWord = e.keyCode >= 65 && e.keyCode <= 90
      switch (true) {
        // 回车
        case e.keyCode === 13:
          e.preventDefault()
          this.comfirmInput()
          break
        // 回退
        case e.keyCode === 8:
          e.preventDefault()
          this.deleteInput()
          break
        // esc退出模式
        case e.keyCode === 27:
          e.preventDefault()
          this.changeToNormalMode()
          break
        // 进入组合键模式
        case e.keyCode === 17:
          this.changeToCombinationMode()
          break
        // 检测组合键
        case isWord && this.isCombinationMode:
          e.preventDefault()
          this.startCombination(e.keyCode)
          break
        default:
          break
      }
    })
  },
}
</script>

<style scoped>
.hack-typing {
  z-index: 10;
  overflow-y: auto;
  overflow-x: hidden;
}

.hack-typing p {
  font: 14px/1.5 Hack, Consolas, Monaco, Menlo !important;
  /* 刚开始不显示，通过动画显示 */
  width: 0;
  overflow: hidden;
  white-space: nowrap;
}

/* 第一行刚开始有高度 */
.hack-typing p:nth-child(1n + 2) {
  height: 0;
}

.user-info {
  color: bisque;
}

.system-success-info {
  color: cyan;
}

.smile {
  color: orange;
}

/* typing动画 */
.hack-typing p:nth-child(1) {
  animation: blink-caret 0.5s linear 0s 8 normal,
    typing 2s ease 4s 1 normal forwards;
}

.hack-typing p:nth-child(2) {
  animation: typing 4s ease 5s 1 normal forwards;
}

.hack-typing p:nth-child(3) {
  animation: typing 2s ease 7s 1 normal forwards;
}

.hack-typing p:nth-child(4) {
  animation: typing 2s ease 8s 1 normal forwards;
}

.hack-typing p:nth-child(5) {
  animation: typing 4s ease 9s 1 normal forwards;
}

.hack-typing p:nth-child(6) {
  animation: typing 4s ease 13s 1 normal forwards;
}

.hack-typing p:nth-child(7) {
  animation: typing 4s ease 15s 1 normal forwards;
}

.hack-typing p:nth-child(8) {
  animation: typing 4s ease 17s 1 normal forwards;
}

.hack-typing p:nth-child(9) {
  animation: typing 4s ease 19s 1 normal forwards;
}

.hack-typing p:nth-child(10) {
  animation: typing 4s ease 21s 1 normal forwards;
}

.hack-typing p:nth-child(11) {
  animation: typing 0.5s ease 23s 1 normal forwards;
}

.hack-typing p:nth-child(12) {
  animation: typing 0.5s ease 23.25s 1 normal forwards;
}

.hack-typing .user-input {
  animation: blink-caret 0.5s linear 23.95s infinite normal;
}

@keyframes typing {
  from {
    width: 0px;
    height: 21px;
  }

  to {
    width: 100%;
    height: 21px;
    border: none;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-right: 4px solid #20c20e;
  }
  50% {
    border-color: transparent;
  }
}

/* terminal 滚动条样式 */
.hack-typing::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #000;
}

.hack-typing::-webkit-scrollbar {
  width: 10px;
  background-color: #000;
}

.hack-typing::-webkit-scrollbar-thumb {
  background-color: #20c20e;
  border: 2px solid #20c20e;
}
</style>
