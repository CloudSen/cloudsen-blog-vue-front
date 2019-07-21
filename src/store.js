import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackMessageQueue: [

    ],
  },
  getters: {
    getAllSnackMessage (state) {
      return state.snackMessageQueue
    },
    getMessageById: state => id => state.snackMessageQueue.find(snack => snack.id === id),
  },
  mutations: {
    /**
     * <p>向消息队列中添加新的消息。</p>
     * <p>队列中消息的总数量不可超过6个，当队列满时，会删掉最旧的一条非重要消息。</p>
     * <p>若重要消息占满队列后，再收到消息，删除最旧的一条重要消息</p>
     * @param {*} state
     * @param {*} payload
     */
    addSnackMessage (state, payload) {
      console.log(`VUEX adding global snack message: ${payload}`)
      const queue = state.snackMessageQueue
      if (queue.length >= 6) {
        const needRemove = queue
          .filter(snack => snack.color === 'success' || snack.color === 'info')
          .pop()
        // needRemove是undefined，说明队列中都是重要消息，indexOf返回-1，此时splice和pop作用一样
        queue.splice(queue.indexOf(needRemove), 1)
      }
      queue.push(payload)
    },
    /**
     * <P>根据消息ID删除消息队列中的消息</P>
     * @param {*} state
     * @param {*} payload
     */
    deleteSnackMessage (state, payload) {
      const queue = state.snackMessageQueue
      if (queue.length === 0) {
        return
      }
      queue.splice(queue.indexOf(queue.find(snack => snack.id === payload.id)), 1)
    },
  },
  actions: {

  },
})
