import {
    useEffect,
    useState
} from 'react';
import { useHistory } from 'react-router-dom';

import {
    withStyles,
    makeStyles
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';

import Dashboard from './index';
import { getModelType } from '../../Context/actions/modelActions';

interface DeviceDType {
    Id: number;
    BrandId: string;
    Name: string;
    TypeId: number;
    Comment: string;
    Description: string;
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
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

const ModelType = () => {
    const classes = useStyles();
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    useEffect(() => {
        setLoading(true);
        const result = getModelType();

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
                            <StyledTableCell align="center">Show Data</StyledTableCell>
                            <StyledTableCell align="center">Id</StyledTableCell>
                            <StyledTableCell align="center">BrandId</StyledTableCell>
                            <StyledTableCell align="center">Name</StyledTableCell>
                            <StyledTableCell align="center">TypeId</StyledTableCell>
                            <StyledTableCell align="center">Comment</StyledTableCell>
                            <StyledTableCell align="center">Description</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row: DeviceDType) => (
                            <StyledTableRow key={row.Id}>
                                <StyledTableCell component="th" scope="row" >
                                    <IconButton
                                        aria-label="simple"
                                        size="small"
                                        onClick={() => history.push(`/model-data/${row.BrandId}/${row.Name}`)}
                                    >
                                        <VisibilityIcon fontSize="inherit" />
                                    </IconButton>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.Id}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.BrandId}</StyledTableCell>
                                <StyledTableCell align="center">{row.Name}</StyledTableCell>
                                <StyledTableCell align="center">{row.TypeId}</StyledTableCell>
                                <StyledTableCell align="center">{row.Comment}</StyledTableCell>
                                <StyledTableCell align="center">{row.Description}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

const ModelTypePage = (props: any) => {
    return <Dashboard children={ModelType} />
}

export default ModelTypePage;