import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import { preset } from 'vue-cli-plugin-vuetify-preset-basil/preset'
import { preset } from 'vue-cli-plugin-vuetify-preset-shrine/preset'

Vue.use(Vuetify);

export default new Vuetify({
  preset,
});