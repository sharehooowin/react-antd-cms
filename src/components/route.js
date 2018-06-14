import PageNotFound from './PageNotFound/PageNotFound';
import Page500 from './Page500/Page500';
import Login from './Login/Login';
import Fail from './Result/Fail';
import Success from './Result/Success';
export const routes =  [
    {
        url:'/page/404',
        component:PageNotFound,
    },
    {
        url:'/page/500',
        component:Page500,
    },
    {
        url:'/page/login',
        component:Login,
    },
    {
        url:'/result/success',
        component:Success,
    },
    {
        url:'/result/fail',
        component:Fail,
    }
];