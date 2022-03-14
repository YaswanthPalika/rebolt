import PropTypes from 'prop-types';
import { useState } from 'react';
import {Link } from 'react-router-dom'

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Button, Grid, Menu, MenuItem, Typography } from '@mui/material';
import './index.css'
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

// assets
import EarningIcon from 'assets/images/icons/earning.svg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import GetAppTwoToneIcon from '@mui/icons-material/GetAppOutlined';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfOutlined';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveOutlined';

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    
   
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const Faq = ({ isLoading }) => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <CardWrapper  border={false} content={false}>
                    <Box className="faq-card" sx={{ p: 2.25 }}>
                        <div >
                        <Grid   container direction="column">
                            <Grid item>
                                <Grid container justifyContent="space-between">


                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container alignItems="center">
                                <Grid>
                                <Typography
                                style={{color:'#000'}}
                                 sx={{ fontSize: '1.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                  Why ReBolt?<br/>
                                  What are we trying to do?
                                </Typography>
                            </Grid>
                            <Grid className="rebolt-box" item sx={{ mb: 1.25 }}>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: theme.palette.secondary.main
                                    }}
                                >
                                   We have seen Chemists manually exploring the available data and designing the synthesis 
                                   paths for molecules which usually takes a few days to weeks of time. So, in order to make 
                                   the process of synthesis planning easy, we have automated it with the help of AI, Machine 
                                   learning, and deep learning models which predict Economical and feasible pathways within a 
                                   few seconds to minutes of time.<br/>
                                   ReBolt suggests the pathways and ranks them accordingly by various filters. 
                                   The recommended pathways come with References which include the yield, procedure, reaction,
                                    purity, and many others.

                                </Typography>
                              </Grid>
                                    <Grid item>
                                        <Typography sx={{ fontSize: '1.125rem', 
                                        fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 ,
                                        color: theme.palette.secondary.dark}}
                                        style={{color:'#000'}}>
                                        Using ReBolt
                                        </Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid className="rebolt-box" item sx={{ mb: 1.25 }}>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: theme.palette.secondary.main
                                    }}
                                >
                                    Detailed explanation on how to use the platform is explained in the USER MANUAL. <Link to ="/help">Click here to view the User Manual.</Link>

                                </Typography>
                                </Grid>
                            <Grid>
                                <Typography
                                style={{color:'#000'}}
                                sx={{color: theme.palette.secondary.dark, fontSize: '1.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                  Chemical hazards
                                </Typography>
                            </Grid>
                            <Grid className="rebolt-box" item sx={{ mb: 1.25 }}>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: theme.palette.secondary.main
                                    }}
                                >
                                    Any chemical stated in the predicted pathway that is hazardous should be taken care of by the authorized person. ReBolt doesn’t take any such obligations.
                                </Typography>
                              </Grid>
                              <Grid>
                                <Typography
                                style={{color:'#000'}}
                                sx={{color: theme.palette.secondary.dark, fontSize: '1.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                How safe is my personal and Experimental data with ReBolt?
                                </Typography>
                            </Grid>
                            <Grid className="rebolt-box" item sx={{ mb: 1.25 }}>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: theme.palette.secondary.main
                                    }}
                                >
                                    We have a strict encryption program set up that no one apart from you can get access to your data. We have it password protected to ensure none other than the authorized user can access your data.
                                </Typography>
                              </Grid>
                              <Grid>
                                <Typography sx={{color: theme.palette.secondary.dark, fontSize: '1.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                Can I use ReBolt with my colleagues?
                                </Typography>
                            </Grid>
                            <Grid className="rebolt-box" item sx={{ mb: 1.25 }}>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: theme.palette.secondary.main
                                    }}
                                >
                                    We have a collaboration feature where you can share your results with your colleagues.                                </Typography>
                              </Grid>
                              <Grid>
                                <Typography
                                style={{color:'#000'}}
                                sx={{color: theme.palette.secondary.dark, fontSize: '1.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                Feedback
                                </Typography>
                            </Grid>
                            <Grid className="rebolt-box" item sx={{ mb: 1.25 }}>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: theme.palette.secondary.main
                                    }}
                                >
                                    Want to share your feedback? <br/>
                                    Contact us at <a target="_blank" href="contact@boltzmann.co">contact@boltzmann.co</a> to report an issue

                                </Typography>
                              </Grid>

                        </Grid>

                        </div>
                        
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

Faq.propTypes = {
    isLoading: PropTypes.bool
};

export default Faq;
