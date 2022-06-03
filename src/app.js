import "core-js/stable";
import "regenerator-runtime/runtime";

import { createApp } from 'vue';
import Hello from './component/hello.vue';

document.addEventListener('DOMContentLoaded', () => {
  createApp(Hello).mount('#app');
});