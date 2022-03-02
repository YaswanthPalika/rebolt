import PropTypes from 'prop-types';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar,Grid, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
//import './help.css'
// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';


// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
        borderRadius: '50%',
        top: -160,
        right: -130
    }
}));

// ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //

const Help = ({ isLoading }) => {
    const theme = useTheme();

    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <CardWrapper 
                
                border={false} content={false}>
                    <Box sx={{ p: 2 }}>
                    <Grid className="image-box" container direction="column">
                            <Grid item>
                                <Grid container justifyContent="space-between">


                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container alignItems="center">
                                <Grid>
                                <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                PROJECTS
                                </Typography>
                            </Grid>
                            <Grid className="rebolt-box" item sx={{ mb: 1.25 }}>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: theme.palette.grey
                                    }}
                                >
                                   Creating a New Project contains the Name and Description which need to be added wherein the description is not mandatory for you to enter.<br/>

                                    As soon as a project is created, it’ll automatically get added to the list of projects. There are Edit and Delete icons present. All the experiments in the project are deleted once you choose the Delete option.<br/>

                                    You can create a number of  Experiments in each project.<br/>

                                    You can visualize the status of the experiment. Once you give input and search, that experiment is shown as pending and it’ll automatically change to Completed once the output is available. This whole process will typically take a couple of minutes.<br/>

                                    There is also one special feature in the experiments section. You can see in the top right there is a filter option that contains Template Based Retrosynthesis, Template Free Retrosynthesis, Forward Reaction. You can see your experiments accordingly. Please do not forget to change the filter once you’re using different experiments.<br/>



                                </Typography>
                              </Grid>
                                    <Grid item>
                                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                        ReBolt - Retrosynthesis 
                                        </Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid className="rebolt-box" item sx={{ mb: 1.25 }}>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: theme.palette.grey
                                    }}
                                >
                                    As an input, you have to give the Experiment name, SMILES of the compound or you can also choose to draw the structure using Sketcher and also select the type wherein it has Template based and Template Free types and click on search.

                                </Typography>
                                </Grid>
                            <Grid>
                                <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                If you choose Template Based Retrosynthesis,
                                </Typography>
                            </Grid>
                            <Grid className="rebolt-box" item sx={{ mb: 1.25 }}>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: theme.palette.grey
                                    }}
                                >
                                   Once the output is available, you can first see the Retro Cards which contain the target molecule structure, USPTO I’d, score, and a number of steps. Each card contains a different pathway for the same target molecule. In simpler terms, the number of cards for each target molecule is equal to the number of pathways and is placed accordingly.<br/>

Select a card and click on the view where the pathway is displayed in the form of a tree.<br/>

The blue outline/ box for the structures represents the target molecule or the intermediates of the pathway.<br/>

The green outline/ box for the structures represents the commercially/readily available starting materials. You can buy that chemical if you click on the options present there which redirects it to that particular database in which that particular chemical is available.<br/>

References are also provided in between each reaction. It gives you an idea about the brief procedure, Time, USPTO I’d, USPTO link, and score.<br/>

There is also an option provided to copy the SMILES of all the structures present in the pathway.<br/>

You can also download the shown pathway by clicking the download option present in the extreme down of the output tree screen.<br/>

                                </Typography>
                              </Grid>
                              <Grid>
                                <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                If you choose Template Free Retrosynthesis,
                                </Typography>
                            </Grid>
                            <Grid className="rebolt-box" item sx={{ mb: 1.25 }}>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: theme.palette.grey
                                    }}
                                >
                                    Once the output is available, you can first see the Retro Cards which contain the target molecule structure, score, and a number of steps. Each card contains a different pathway for the same target molecule. In simpler terms, the number of cards for each target molecule is equal to the number of pathways.<br/>

Select a card and click on the view where the pathway is displayed in the form of a tree.<br/>

The blue outline/ box for the structures represents the target molecule or the intermediates of the pathway.<br/>

The green outline/ box for the structures represents the commercially/readily available starting materials. You can buy that chemical if you click on the options present there which redirects it to that particular database in which that particular chemical is available.<br/>

There is also an option provided to copy the SMILES of all the structures present in the pathway.<br/>

You can also download the shown pathway by clicking the download option present in the extreme down of the output tree screen.<br/>

                                </Typography>
                              </Grid>
                              <Grid>
                                <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                ReBolt - Forward Reaction
                                </Typography>
                            </Grid>
                            <Grid className="rebolt-box" item sx={{ mb: 1.25 }}>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: theme.palette.grey
                                    }}
                                >
                                    As an input you have to give the Experiment name, SMILES of the compounds (Reactants) or you can also choose to draw the structure using Sketcher and you can also add solvent or Catalyst if any. 
You can add more than one reactant in the same sketcher

You can see the Output in the form of a table which contains a list of possible products which are ranked accordingly, the 2D structure of the products, SMILES to copy, and some basic properties of that product.
                                </Typography>
                              </Grid>
                              

                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

Help.propTypes = {
    isLoading: PropTypes.bool
};

export default Help;
