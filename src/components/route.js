import PageNotFound from './PageNotFound/PageNotFound';
import Page500 from './Page500/Page500';
export const routes =  [
    {
        url:'/page/404',
        component:PageNotFound,
    },
    {
        url:'/page/500',
        component:Page500,
    },
];