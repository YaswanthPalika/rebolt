import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';


// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Google from 'assets/images/icons/social-google.svg';

//firebase.js imports
import { signinwithgoogle } from 'index';
import { auth } from 'index';

import { onAuthStateChanged } from "@firebase/firestore";
import { collection, CollectionReference, where , query , doc, setDoc ,getDocs, addDoc ,serverTimestamp } from '@firebase/firestore';
import { db } from 'index';



// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);
    const [checked, setChecked] = useState(true);

    const googleHandler = async () => {
        console.error('Login');
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const navigate = useNavigate()
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                const createp = async () => {
                    const userRef = collection(db, 'users');
                    return await setDoc(doc(userRef,user.uid), {
                        name: user.displayName,
                        email: user.email,
                        photo:user.photoURL,
                        uid: user.uid
                    });
                }
                createp()
                const createSampleProject =async () =>{
                    const q = query(collection(db, 'projects'), where("owner.uid", "==", user.uid));
                    await getDocs(q).then((snapshot) => {
                        if(snapshot.docs.length === 0){
                            console.log("yes its null")
                        addDoc(collection(db, 'projects'), {
                            createdAt: serverTimestamp(),
                            projectname: "sample",
                            projectdesc: "sample project",
                            owner: {
                            email: user.email,
                            uid: user.uid
                            }
                        })
                        setTimeout(() => {
                            console.log("over")
                            }, 2000);
                        } 
                        console.log("haaaa")
                    }).catch((err) => console.log(err));
                }
                createSampleProject()
                setTimeout(() => {
                    navigate('/dashboard/default');
                }, 0);
            }
            
        }
        

    )

}, []);
return (
    <>
        <Grid container direction="column" justifyContent="center" spacing={2}>
            <Grid item xs={12}>
                <AnimateButton>
                    <Button
                        disableElevation
                        fullWidth
                        size="large"
                        variant="outlined"
                        sx={{
                            color: 'grey.700',
                            backgroundColor: theme.palette.grey[50],
                            borderColor: theme.palette.grey[100]
                        }}
                        onClick={signinwithgoogle}
                    >
                        <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                            <img src={Google}  alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
                        </Box>
                        Sign in with Google
                    </Button>
                </AnimateButton>
            </Grid>
            <Grid item xs={12}>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex'
                    }}
                >
                    <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

                    <Button
                        variant="outlined"
                        sx={{
                            cursor: 'unset',
                            m: 2,
                            py: 0.5,
                            px: 7,
                            borderColor: `${theme.palette.grey[100]} !important`,
                            color: `${theme.palette.grey[900]}!important`,
                            fontWeight: 500,
                            borderRadius: `${customization.borderRadius}px`
                        }}
                        disableRipple
                        disabled
                    >
                    </Button>

                    <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                </Box>
            </Grid>
            <Grid item xs={12} container alignItems="center" justifyContent="center">
                <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1">Sign in with Email address</Typography>
                </Box>
            </Grid>
        </Grid>

        <Formik
            initialValues={{
                email: '',
                password: '',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={values=>console.log(values)}
        >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate onSubmit={handleSubmit} {...others}>
                    <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                        <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-email-login"
                            type="email"
                            value={values.email}
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            label="Email Address / Username"
                            inputProps={{}}
                        />
                        {touched.email && errors.email && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {errors.email}
                            </FormHelperText>
                        )}
                    </FormControl>

                    <FormControl
                        fullWidth
                        error={Boolean(touched.password && errors.password)}
                        sx={{ ...theme.typography.customInput }}
                    >
                        <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password-login"
                            type={showPassword ? 'text' : 'password'}
                            value={values.password}
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        size="large"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            inputProps={{}}
                        />
                        {touched.password && errors.password && (
                            <FormHelperText error id="standard-weight-helper-text-password-login">
                                {errors.password}
                            </FormHelperText>
                        )}
                    </FormControl>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked}
                                    onChange={(event) => setChecked(event.target.checked)}
                                    name="checked"
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />
                        <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                            Forgot Password?
                        </Typography>
                    </Stack>
                    {errors.submit && (
                        <Box sx={{ mt: 3 }}>
                            <FormHelperText error>{errors.submit}</FormHelperText>
                        </Box>
                    )}

                    <Box sx={{ mt: 2 }}>
                        <AnimateButton>
                            <Button
                                disableElevation
                                disabled={isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                color="secondary"
                            >
                                Sign in
                            </Button>
                        </AnimateButton>
                    </Box>
                </form>
            )}
        </Formik>
    </>
);
};

export default FirebaseLogin;
