import PropTypes from 'prop-types';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar,Grid, Box,Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
//import './help.css'
// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';


// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: '50%',
        top: -85,
        right: -95,
        [theme.breakpoints.down('sm')]: {
            top: -105,
            right: -140
        }
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: '50%',
        top: -125,
        right: -15,
        opacity: 0.5,
        [theme.breakpoints.down('sm')]: {
            top: -155,
            right: -70
        }
    }
}));


// ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //

const Dashboard2 = ({ isLoading }) => {
    const theme = useTheme();

    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <CardWrapper 
                
                border={false} content={false}>
                    <Box sx={{ p: 2 }}>
                    <Grid container direction="column">
                            <Grid item>
                                <Grid container justifyContent="space-between">


                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container alignItems="center">
                                    <Grid item>
                                        <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                            Rebolt
                                        </Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid className="rebolt-box" item sx={{ mb: 1.25 }}>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: theme.palette.secondary[200]
                                    }}
                                >
                                    ReBolt is Boltzmann’s synthesis planning tool to accelerate the process of synthesis. Plan and Design your reaction pathways within a few minutes by just a few clicks.
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: theme.palette.secondary[200]
                                    }}
                                >
                                    Synthesis process made Effortless, Economical and Expeditious with ReBolt.
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: theme.palette.secondary[200]
                                    }}
                                >
                                    Chemistry with AI making it a powerful tool.
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: theme.palette.secondary[200]
                                    }}
                                >
                                    Check the various pathways ranked accordingly for your desired compound.
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: theme.palette.secondary[200]
                                    }}
                                >
                                    Choose the pathway and start your process immediately. There’s no need to check it again manually.
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: theme.palette.secondary[200],
                                    }}
                                >
                                    Ordering the desired chemicals or starting materials is also made easy. Commercial availability of desired chemical or starting material is 3-4 clicks away, by choosing the type of vendor, price, and lead time from the mentioned list.
                                </Typography>
                                <Button variant='outline' size='large'>Start</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

Dashboard2.propTypes = {
    isLoading: PropTypes.bool
};

export default Dashboard2;
