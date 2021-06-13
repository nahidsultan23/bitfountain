import {
    useEffect,
    useState
} from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';

import { useStyles } from './styles';
import { getCookie } from '../../Cookie/index';
import {
    loginUser,
    useAuthState,
    useAuthDispatch
} from '../../Context';

const Login = (props: any) => {
    const classes = useStyles();
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const dispatch = useAuthDispatch(); //get the dispatch method from the useDispatch custom hook
    const { loading, errorMessage } = useAuthState(); //read the values of loading and errorMessage from context
  
  
    const handleLogin = async (e: any) => {
        e.preventDefault()
        let payload = { password, email };

        try {
            let response = await loginUser(dispatch, payload); //loginUser action makes the request and handles all the neccessary state changes
            if (!response.user) return;
            props.history.push('/') //navigate to dashboard on success
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const app_tok = getCookie('app_token');
    
        if (app_tok && app_tok.length > 30) {
            props.history.push('/');
        }
    }, [])
  
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log in
                </Typography>
                {
                    errorMessage && <Alert severity="error">{errorMessage}</Alert>
                }
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                        disabled={loading}
                        className={classes.submit}
                    >
                    Login
                    </Button>
                </form>
            </div>
        </Container>
    );
  }
  
  export default Login;