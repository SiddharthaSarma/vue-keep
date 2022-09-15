import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import './assets/css/tailwind.css';
import Archive from './components/routes/Archive.vue';
import EditLabels from './components/routes/EditLabels.vue';
import Notes from './components/routes/Notes.vue';
import Reminders from './components/routes/Reminders.vue';
import TrashScreen from './components/routes/TrashScreen.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/notes',
  },
  {
    path: '/notes',
    component: Notes,
  },
  {
    path: '/reminders',
    component: Reminders,
  },
  {
    path: '/edit-labels',
    component: EditLabels,
  },
  {
    path: '/archive',
    component: Archive,
  },
  {
    path: '/trash',
    component: TrashScreen,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'bg-yellow-100',
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
