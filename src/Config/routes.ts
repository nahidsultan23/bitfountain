import { RouteType } from '../Components/CustomTypes';

import Login from '../Pages/Login';
import DeviceTypePage from '../Pages/Dashboard/DeviceType';
import ModelTypePage from '../Pages/Dashboard/ModelType';
import ModelDataPage from '../Pages/Dashboard/ModelData';
import AddModelPage from '../Pages/Dashboard/AddModel';
import PageNotFound from '../Pages/NotFound';

const routes: RouteType[] = [
    {
        path: '/',
        exact: true,
        isPrivate: true,
        component: DeviceTypePage
    },
    {
        path: '/login',
        isPrivate: false,
        component: Login
    },
    {
        path: '/device-type',
        isPrivate: true,
        component: DeviceTypePage
    },
    {
        path: '/model-type',
        isPrivate: true,
        component: ModelTypePage
    },
    {
        path: '/model-data/:brand/:model',
        isPrivate: true,
        component: ModelDataPage
    },
    {
        path: '/add-model',
        isPrivate: true,
        component: AddModelPage
    },
    {
        path: '/*',
        isPrivate: true,
        component: PageNotFound
    }
]
  
export default routes;