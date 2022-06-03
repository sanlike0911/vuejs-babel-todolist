import "core-js/stable";
import "regenerator-runtime/runtime";

import { createApp } from 'vue';
import todolist from './components/todolist.vue';

createApp(todolist).mount("#app");
// document.addEventListener('DOMContentLoaded', () => {
//   createApp(todolist).mount('#app');
// });