import Vue from 'vue';
import Vuex from 'vuex';
import planes from './modules/planes'


Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        planes
    }
});