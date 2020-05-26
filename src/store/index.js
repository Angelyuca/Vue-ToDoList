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
            state.tasks.unshift(payload);
        },
        mutationDone(state, payload) {
            let index = payload.index;
            let obj = payload.obj;
            state.tasks.splice(index, 1);
            state.tasks.splice(index, 0, obj);
        },
        mutationDelete(state, payload) {
            state.tasks.splice(payload, 1);
        }
    },
    actions: {
        actionValue(context, payload) {
            context.commit('mutationValue', payload)
        },
        actionTasks(context, payload) {
            context.commit('mutationTasks', payload)
        },
        actionDone(context, payload) {
            context.commit('mutationDone', payload)
        },
        actionDelete(context, payload) {
            context.commit('mutationDelete', payload)
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
