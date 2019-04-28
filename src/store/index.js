import Vue from 'vue';
import Vuex from 'vuex'
import airtabledata from './modules/airtabledata';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    airtabledata
  }
})
