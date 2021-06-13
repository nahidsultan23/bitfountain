import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <div>
        <Link to='/'>
        <ListItem button>
            <ListItemIcon>
            <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Device Type" />
        </ListItem>
        </Link>
        <Link to='/model-type'>
        <ListItem button>
            <ListItemIcon>
            <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Model Type" />
        </ListItem>
        </Link>
        <Link to='/add-model'>
        <ListItem button>
            <ListItemIcon>
            <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Add Model Type" />
        </ListItem>
        </Link>
    </div>
);
