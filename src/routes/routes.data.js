import App from "../App"
import PageCard from "../components/screens/pageCard/PageCard"

export const routes = [
    {
        path: '/',
        component: App,
        auth: false
    },
    /*{
        path: '/pageCard',
        component: PageCard,
        auth: false
    },*/
   
    {
        //path: '/users',
        path: '/user/:id',
        /*component: BigCard,*/
        component: PageCard,
        auth: false
    },
]
