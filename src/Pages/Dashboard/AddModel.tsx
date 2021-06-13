import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';

import Dashboard from './index';
import { addNewModelReq } from '../../Context/actions/modelActions';

export const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const AddModel = () => {
    const classes = useStyles();

    const [brandId, setBrandId] = useState('');
    const [name, setName] = useState('');
    const [typeId, setTypeId] = useState('');
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');
    const [succes, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        const result = addNewModelReq({
            BrandId: brandId,
            Name: name,
            TypeId: parseInt(typeId),
            Comment: comment
        });

        result.then(res => {
            if (res.errors) {
                setError(res.message);
                setSuccess(false);
            } else {
                setError('');
                setSuccess(true);
            }
        })
        .finally(() => {
            setLoading(false);
        });
    }

    return (
        <>
            <form className={classes.form} noValidate>
                {
                    error !== '' && <Alert severity="error">{error}</Alert>
                }
                {
                    succes && <Alert severity="success">{'Model successfully added'}</Alert>
                }
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    value={brandId} onChange={(e) => setBrandId(e.target.value)}
                    label="Brand ID"
                    name="brand-id"
                    autoComplete="off"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    value={name} onChange={(e) => setName(e.target.value)}
                    label="Name"
                    name="name-id"
                    autoComplete="off"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    value={typeId} onChange={(e) => setTypeId(e.target.value)}
                    label="Type ID"
                    name="typeId"
                    autoComplete="off"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    value={comment} onChange={(e) => setComment(e.target.value)}
                    label="Commen"
                    name="comment"
                    autoComplete="off"
                    autoFocus
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={loading}
                    className={classes.submit}
                >
                    Add
                </Button>
            </form>
        </>
    );
}

const AddModelPage = (props: any) => {
    return <Dashboard children={AddModel} />
}

export default AddModelPage;