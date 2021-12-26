import homePage from './pages/home-page.cmp.js';
import mailApp from './pages/mail-app.cmp.js';
import keepApp from './pages/keep-app.cmp.js';
import mailDetails from './apps/mail/pages/mail-details.cmp.js';
import bookDetails from './apps/book/pages/book-details.cmp.js';
import bookAdd from './apps/book/pages/book-add.cmp.js';
import bookApp from './pages/book-app.cmp.js';





const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/mail',
        component: mailApp
    },
    {
        path: '/mail/:mailId',
        component: mailDetails
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/add',
        component: bookAdd
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
];

export const router = new VueRouter({ routes });