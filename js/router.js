import routes from './routes';
import Router from 'react-router';
import {HistoryLocation} from 'react-router';

const router = Router.create({
    location: HistoryLocation,
    routes: routes
});

export default router;
