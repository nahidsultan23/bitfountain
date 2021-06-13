import {
    useEffect,
    useState
} from 'react';
import { useParams } from 'react-router-dom';

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

import Dashboard from './index';
import { getModelData } from '../../Context/actions/modelActions';

interface DeviceDType {
    Id: number;
    DataType: string;
    Brand: string;
    Model: number;
    Name: string;
    DisplayName: string;
    Description: string;
    Status: string;
    GroupId: string;
    ProtocolOrder: string;
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

const ModelData = () => {
    const classes = useStyles();
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    let { brand, model }: {
        brand: string,
        model: string
    } = useParams();

    useEffect(() => {
        setLoading(true);
        const result = getModelData(brand, model);

        result.then(res => {
            setData(res);
        }).catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

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
                            <StyledTableCell align="center">DataType</StyledTableCell>
                            <StyledTableCell align="center">Brand</StyledTableCell>
                            <StyledTableCell align="center">Model</StyledTableCell>
                            <StyledTableCell align="center">Name</StyledTableCell>
                            <StyledTableCell align="center">DisplayName</StyledTableCell>
                            <StyledTableCell align="center">Description</StyledTableCell>
                            <StyledTableCell align="center">Status</StyledTableCell>
                            <StyledTableCell align="center">GroupId</StyledTableCell>
                            <StyledTableCell align="center">ProtocolOrder</StyledTableCell>
                        </TableRow>
                    </TableHead>
                <TableBody>
                    {data.map((row: DeviceDType) => (
                        <StyledTableRow key={row.Id}>
                            <StyledTableCell component="th" scope="row" align="center">
                                {row.Id}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.DataType}</StyledTableCell>
                            <StyledTableCell align="center">{row.Brand}</StyledTableCell>
                            <StyledTableCell align="center">{row.Model}</StyledTableCell>
                            <StyledTableCell align="center">{row.Name}</StyledTableCell>
                            <StyledTableCell align="center">{row.DisplayName}</StyledTableCell>
                            <StyledTableCell align="center">{row.Description}</StyledTableCell>
                            <StyledTableCell align="center">{row.Status}</StyledTableCell>
                            <StyledTableCell align="center">{row.GroupId}</StyledTableCell>
                            <StyledTableCell align="center">{row.ProtocolOrder}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

const ModelDataPage = (props: any) => {
    return <Dashboard children={ModelData} />
}

export default ModelDataPage;