import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {GrFacebookOption} from 'react-icons/gr'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar,Grid, Box,Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
//import './help.css'
// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import './dashboard2.css'

const Dashboard2 = ({ isLoading }) => {
    

    return (
        <>

        <nav  class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div class="container">
                    <img src="https://res.cloudinary.com/doaejwdmk/image/upload/v1646285557/ezgif.com-gif-maker_1_grin8b_er0dlq.gif"
                     class="rebolt-logo" 
                     alt="logo"/>
                <div class="nav-items" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                        <a class="nav-link active" id="navItem1" href="#home">
                            Home
                        </a>
                        <a class="nav-link" href="#why" id="navItem2">Why Rebolt</a>
                        <a class="nav-link" href="#faq" id="navItem3">Faq</a>
                        <a class="nav-link" href="#user" id="navItem4">User Manual</a>
                        <a class="nav-link" href="#contact" id="navItem5">Contact</a>
                    </div>
                </div>
            </div>
        </nav>


            <div  className='main-card'  id="home">
                <div className='card'>
                    <div className='card-1'>
                        <h1 style={{textAlign:'center'}}>Rebolt</h1>
                        <p>
                        ReBolt is Boltzmann’s synthesis planning tool to accelerate the process of synthesis. 
                        Plan and Design your reaction pathways within a few minutes by just a few clicks.<br/>
                        Synthesis process made Effortless, Economical and Expeditious with ReBolt.<br/>
                        <span className='span-p'>Chemistry with AI making it a powerful tool. </span> 
                        Check the various pathways ranked accordingly for your desired compound. 
                        Choose the pathway and start your process immediately. There’s no need to check 
                        it again manually. Ordering the desired chemicals or starting materials is also made easy. 
                        Commercial availability of desired chemical or starting material is 3-4 clicks away, by 
                        choosing the type of vendor, price, and lead time from the mentioned list.
                        ReBolt includes features like Retrosynthesis, Forward reaction, Atom Mapping, and many 
                        more filtering features to choose and design the synthesis route accordingly.
                        </p>
                        <div className='start-button'>
                        <button>
                            <Link className='butonn' to="/Rebolt/RetrosynthesisInput">
                                Start
                            </Link>
                        </button>
                        </div>
                    </div>
                    
                </div>
                <div className='card'>
                    <img src="https://res.cloudinary.com/doaejwdmk/image/upload/v1646290974/rebolt_cu1n0w.png"
                      alt='retro'
                      style={{padding:'25px'}}
                      className='imagess'/>
                    <div className='card-2'>
                        <h1>RETROSYNTHESIS</h1>
                        <p>Input your complex target molecule and spot the synthesis route ending with 
                            Simpler and commercially available starting materials within no time.<br/>
                            Choose and Design your desired pathways based on various customized filters 
                            available.<br/>
                            <span className='span-p'>Template-based Retrosynthesis</span> - locates a reliable template from a huge 
                            set of templates, which are molecular subgraph patterns to your target, 
                            and proposes the routes accordingly.<br/>
                            <span className='span-p'>Template Free Retrosynthesis</span>- bypass templates by learning a direct
                             mapping of the product to reactants.<br/>
                        </p>
                    </div>
                </div>
                <div className='card'>
                    
                    <div className='card-2'>
                        <h1>FORWARD REACTION</h1>
                        <p><span className='span-p'>Input your starting materials and check the list 
                        of possible products. </span>
                            Also, be sure by checking the pathways proposed by the Retrosynthetic 
                            analysis and Atom Mapping of the specified reaction.
                        </p>
                        
                    </div>
                    <img src="https://res.cloudinary.com/doaejwdmk/image/upload/v1646292054/rebolt3_jbpwva.png"
                      alt='retro'
                      className='imagess'/>
                </div>
                <br/>
                <br/>
                <br id='why'/>
                <div >
                    <h1>Why ReBolt?<br/>What are we trying to do?</h1>
                    <p>
                        We have seen Chemists manually exploring the available data and designing the synthesis 
                        paths for molecules which usually takes a few days to weeks of time. So, in order to make
                         the process of synthesis planning easy, we have automated it with the help of AI, Machine 
                         learning, and deep learning models which predict Economical and feasible pathways within a
                          few seconds to minutes of time.<br/>
                        ReBolt suggests the pathways and ranks them accordingly by various filters. 
                        The recommended pathways come with References which include the yield, procedure,
                         reaction, purity, and many others.
                    </p>
                </div>
                <br/>
                <br/>
                <br id='faq'/>
                <h1 style={{textAlign:'center'}} >Faq</h1>
                <div className='faq'>
                    <p>
                    <span className='span-p'>Using ReBolt </span>
                    Detailed explanation on how to use the platform is explained in the USER MANUAL.
                     Click here to view the User Manual.

                    </p>
                    <p>
                    <span className='span-p'>Chemical hazards </span>- Any chemical stated in the predicted pathway that is hazardous should be 
                    taken care of by the authorized person. ReBolt doesn’t take any such obligations.
                    </p>
                    
                    <h3>How safe is my personal and Experimental data with ReBolt?</h3>
                    <p>We have a strict encryption program set up that no one apart from you can get access 
                    to your data. We have it password protected to ensure none other than the authorized user 
                    can access your data.
                    </p>
                    <h3>Can I use ReBolt with my colleagues?</h3>
                    <p>
                    We have a collaboration feature where you can share your results with your colleagues.
                    </p>      
                </div>
                <br/>
                <br/>
                <br id='user'/>
                <h1 style={{textAlign:'center'}} >User Manual</h1>
                <div className='user-manual'>
                    <h3>Projects</h3>
                    <p>Creating a New Project contains the Name and Description which need to be added wherein the description is not mandatory for you to enter.

                        As soon as a project is created, it’ll automatically get added to the list of projects. There are Edit and Delete icons present. All the experiments in the project are deleted once you choose the Delete option.

                        You can create a number of  Experiments in each project.

                        You can visualize the status of the experiment. Once you give input and search, that experiment is shown as pending and it’ll automatically change to Completed once the output is available. This whole process will typically take a couple of minutes.

                        There is also one special feature in the experiments section. You can see in the top right there is a filter option that contains Template Based Retrosynthesis, Template Free Retrosynthesis, Forward Reaction. You can see your experiments accordingly. Please do not forget to change the filter once you’re using different experiments.
                        </p>
                    <h3>ReBolt - Retrosynthesis </h3>
                    <p>As an input, you have to give the Experiment name, SMILES of the compound or 
                        you can also choose to draw the structure using Sketcher and also select the type wherein it has Template based and Template Free types and click on search.
                    </p>
                    <h4>If you choose Template Based Retrosynthesis, 
                    </h4>
                    <p>Once the output is available, you can first see the Retro Cards which contain the target molecule structure, USPTO I’d, score, and a number of steps. Each card contains a different pathway for the same target molecule. In simpler terms, the number of cards for each target molecule is equal to the number of pathways and is placed accordingly.

                    Select a card and click on the view where the pathway is displayed in the form of a tree.

                    The blue outline/ box for the structures represents the target molecule or the intermediates of the pathway.

                    The green outline/ box for the structures represents the commercially/readily available starting materials. You can buy that chemical if you click on the options present there which redirects it to that particular database in which that particular chemical is available.

                    References are also provided in between each reaction. It gives you an idea about the brief procedure, Time, USPTO I’d, USPTO link, and score.

                    There is also an option provided to copy the SMILES of all the structures present in the pathway.

                    You can also download the shown pathway by clicking the download option present in the extreme down of the output tree screen.
                    </p>
                    <h4>If you choose Template Free Retrosynthesis,
                    </h4>
                    <p>
                    Once the output is available, you can first see the Retro Cards which contain the target molecule structure, score, and a number of steps. Each card contains a different pathway for the same target molecule. In simpler terms, the number of cards for each target molecule is equal to the number of pathways.

                    Select a card and click on the view where the pathway is displayed in the form of a tree.

                    The blue outline/ box for the structures represents the target molecule or the intermediates of the pathway.

                    The green outline/ box for the structures represents the commercially/readily available starting materials. You can buy that chemical if you click on the options present there which redirects it to that particular database in which that particular chemical is available.

                    There is also an option provided to copy the SMILES of all the structures present in the pathway.

                    You can also download the shown pathway by clicking the download option present in the extreme down of the output tree screen.
                    </p>
                    <h4>
                    ReBolt - Forward Reaction
                    </h4>
                    <p>
                        As an input you have to give the Experiment name, SMILES of the compounds (Reactants) or you can also choose to draw the structure using Sketcher and you can also add solvent or Catalyst if any. 
                        You can add more than one reactant in the same sketcher

                        You can see the Output in the form of a table which contains a list of possible products which are ranked accordingly, the 2D structure of the products, SMILES to copy, and some basic properties of that product.
                    </p>
                
                
                
                
                
                </div>
                
            </div>
            <div id="contact" className='contact-us'>
                    <div>
                        <p>contact us at Boltzmann Labs Pvt Ltd © 2021 | <a 
                        style={{color:'rgb(69, 137, 214)'}} href="contact@boltzmann.co">contact@boltzmann.co</a></p>
                    </div>
                    <div className='react-icons-container'>
                        <a target='_blank' rel='noreferrer'
                         href='https://www.facebook.com/boltzmannlabs2019' className='react-iconss' >
                            <GrFacebookOption size={30}  />
                        </a>
                        <a target='_blank' rel='noreferrer'
                         href='https://twitter.com/bayeslabs?lang=en' className='react-iconss' >
                            <AiOutlineTwitter size={30} />
                        </a>
                        <a target='_blank' rel='noreferrer'
                        href='https://www.linkedin.com/company/boltzmann-labs-pvt-ltd/mycompany/' className='react-iconss' >
                            <BsLinkedin size={30} />
                        </a>    
                    </div>
            </div>
        </>
    );
};



export default Dashboard2;

/*
<span className='span-p'>
<p><span
                     style={{fontWeight:'bold'}}>Feedback</span><br/>Want to share your feedback?</p>
                     */
