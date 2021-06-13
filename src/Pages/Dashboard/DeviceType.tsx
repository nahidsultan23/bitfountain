import {
    useEffect,
    useState
} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Dashboard from './index';
import { getDeviceType } from '../../Context/actions/deviceActions';

interface DeviceDType {
    Id: number,
    Description: string
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        }
    }
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 658
    }
});

const DeviceType = () => {
    const classes = useStyles();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        setLoading(true);
        const result = getDeviceType();
        result.then(res => {
            setData(res);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [])


    if (loading) {
        return <p style={{ textAlign: "center" }}>Data is loading...</p>;
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Id</StyledTableCell>
                            <StyledTableCell align="center">Description</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row: DeviceDType) => (
                            <StyledTableRow key={row.Id}>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {row.Id}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.Description}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

const DeviceTypePage = (props: any) => {
    return <Dashboard children={DeviceType} />
}

export default DeviceTypePage;