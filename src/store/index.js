import Vue from 'vue'
import Vuex from 'vuex'
import { vm } from '@/main'

Vue.use(Vuex)

const state = {
    list: [],
}

const actions = {
    // asynchronous operations
    async addTask({commit}, user) {
        commit("addTask", user);
        await vm.$router.push('/list')
    },
    async removeTask({commit}, id) {
        commit("removeTask", id)
    },
    async updateTask({commit}, data) {
        commit("updateTask", data)
    },
}

const mutations = {
    // isolated data mutations
    addTask({ list }, object) {
        object.id = list.length ? list[list.length - 1].id + 1 : 1;
        object.isDeleted = false;
        list.push(object);
    },
    removeTask: ({ list }, id) => {
        let index = list.findIndex(i => i.id === id);
        list[index].isDeleted = true;
    },
    updateTask: ({ list }, data) => {
        let index = list.findIndex(i => i.id === parseInt(data.id));
        list[index].description = data.data.description;
        list[index].status = data.data.status;
    }
}

const getters = {
    // reusable data accessors
    list: state => state.list.filter(item => {
        return item.isDeleted === false;
    }),
    deletedList: state => state.list.filter(item => {
        return item.isDeleted === true;
    }),
    getTAskById: (state) => (id) => {
        return state.list.find(item => item.id === parseInt(id))
    }
}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})

export default store