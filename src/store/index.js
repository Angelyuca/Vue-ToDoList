import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        value: '',
        tasks: []
    },

    plugins: [createPersistedState()],


    mutations: {
        mutationValue(state, payload) {
            state.value = payload;
        },
        mutationTasks(state, payload) {
            state.tasks = payload;
        }
    },
    actions: {
        actionValue(context, payload) {
            context.commit('mutationValue', payload)
        },
        actionTasks(context, payload) {
            context.commit('mutationTasks', payload)
        }
    },
    getters: {
        getValue(state) {
            return state.value
        },
        getTasks(state) {
            return state.tasks
        }
    }
})
