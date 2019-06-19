import Vue from 'vue';
import Router from 'vue-router';

import dashboard from './views/dashboard.vue';
import tokens from './views/tokens.vue';
import transfer from './views/transfer.vue';
import topup from './views/topup.vue';
import contacts from './views/contacts.vue';
import transactions from './views/transactions.vue';
import settings from './views/settings.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard,
      meta: {
        breadcrumb: {
          name: null
        }
      }
    },
    {
      path: '/tokens',
      name: 'tokens',
      component: tokens,
      meta: {
        breadcrumb: {
          name: 'Tokens'
        }
      }
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: transfer,
      meta: {
        breadcrumb: {
          name: 'Transfer'
        }
      }
    },
    {
      path: '/topup',
      name: 'topup',
      component: topup,
      meta: {
        breadcrumb: {
          name: 'Topup'
        }
      }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: contacts,
      meta: {
        breadcrumb: {
          name: 'Contacts'
        }
      }
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: transactions,
      meta: {
        breadcrumb: {
          name: 'Transactions'
        }
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings,
      meta: {
        breadcrumb: {
          name: 'Settings'
        }
      }
    }
  ]
});
