import PageNotFound from './components/PageNotFound/PageNotFound';
import MainLayout from './components/MainLayout/MainLayout';
import Login from './components/Login/Login';
export const routes =  [
    {
        url:'/login',
        component:Login,
    },
    {
        url:"/404",
        component:PageNotFound
    },
    {
        url:"/",
        component:MainLayout
    },
];