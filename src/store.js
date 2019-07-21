import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackMessageQueue: [

    ],
  },
  getters: {
    getAllSnackMessageWithStyle (state) {
      console.log('VUEX getting all snack messages')
      const queue = state.snackMessageQueue
      const newQueue = []
      if (queue.length > 1) {
        queue.forEach((snack, index) => {
          const styleObj = { cssStyle: {} }
          styleObj.cssStyle.marginTop = `${(index) * 60}px`
          newQueue.push(Object.assign({}, snack, styleObj))
        })
        return newQueue
      }
      return queue
    },
    getMessageById: state => (id) => {
      console.log(`VUEX getting snack message by id: ${id}`)
      state.snackMessageQueue.find(snack => snack.id === id)
    },
  },
  mutations: {
    /**
     * @summary 向消息队列中添加新的消息。
     * @description 队列中消息的总数量不可超过6个，当队列满时，会删掉最旧的一条非重要消息。
     * 若重要消息占满队列后，再收到消息，删除最旧的一条重要消息
     * @param {*} state vuex
     * @param {Object} payload 消息对象
     */
    addSnackMessage (state, payload) {
      console.log(`VUEX adding global snack message: ${JSON.stringify(payload)}`)
      const queue = state.snackMessageQueue
      if (queue.length >= 6) {
        const needRemove = queue
          .filter(snack => snack.color !== 'error')
          .pop()
        // needRemove是undefined，说明队列中都是重要消息，indexOf返回-1，此时splice和pop作用一样
        queue.splice(queue.indexOf(needRemove), 1)
      }
      queue.unshift(payload)
    },
    /**
     * @summary 根据消息ID删除消息队列中的消息
     * @param {*} state vux
     * @param {Object} payload 消息id
     */
    deleteSnackMessage (state, payload) {
      console.log(`VUEX deleting global snack message: ${JSON.stringify(payload)}`)
      const queue = state.snackMessageQueue
      if (queue.length === 0) {
        return
      }
      queue.splice(queue.indexOf(queue.find(snack => snack.id === payload.id)), 1)
    },
    /**
     * @summary 将消息的show字段更新为false
     * @description 当消息是定时显示时，消失的时候会调用此方法将show字段改为false
     * @param {*} state vuex
     * @param {Object} payload 消息id
     */
    hideSnackById (state, payload) {
      console.log(`VUEX hide snack message: ${JSON.stringify(payload)}`)
      const queue = state.snackMessageQueue
      const needUpdateSnack = queue.find(snack => snack.id === payload.id)
      if (needUpdateSnack) {
        needUpdateSnack.show = false
      }
    },
    cleanAllSnack (state) {
      console.log('VUEX clean all snack message...')
      state.snackMessageQueue.length = 0
    },
  },
  actions: {

  },
})
