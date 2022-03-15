import PropTypes from 'prop-types';
import * as React from 'react';

//for ketcher tool
import { StandaloneStructServiceProvider } from "ketcher-standalone";
import { Editor } from "ketcher-react";
import "ketcher-react/dist/index.css";
import {HiOutlinePencil} from 'react-icons/hi'

// @ts-ignore
import Miew from "miew";


// material-ui
import { Box, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Select } from '@mui/material';

import './index.css'

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { getAuth } from "firebase/auth";

import { db, uid } from 'index';
import { addDoc, collection ,query,where,getDocs,serverTimestamp} from '@firebase/firestore';


import axios from 'axios';

const httprequests = axios;



// ===============================||ketcher Tool||=============================== //
window.Miew = Miew;

const structServiceProvider = new StandaloneStructServiceProvider();
var template = "template_based"
var token
const KetcherApp = ()=>{
    return <>
            <Editor
                    staticResourcesUrl={""}
                    structServiceProvider={structServiceProvider}
                    onInit={(k)=>{
                    //console.log("hello")
                    window.ketcher = k
                    }}  
                        onSelectionChange={(k)=>{
                                console.log("onSelectionChange")
                                }} 
                        onElementEdit={(k)=>{
                                console.log("onElementEdit")
                                }} 
                        onEnhancedStereoEdit={(k)=>{
                                console.log("onEnhancedStereoEdit")
                                }} 
                        onQuickEdit={(k)=>{
                                console.log("onQuickEdit")
                                }} 
                        onBondEdit={(k)=>{
                                console.log("onBondEdit")
                                }} 
                        onRgroupEdit={(k)=>{
                                console.log("onRgroupEdit")
                                }} 
                        onSgroupEdit={(k)=>{
                                console.log("onSgroupEdit")
                                }} 
                        onSdataEdit={(k)=>{
                                console.log("onSdataEdit")
                                }} 
                        onRemoveFG={(k)=>{
                                console.log("onRemoveFG")
                                }} 
                        onMessage={(k)=>{
                                console.log("onMessage")
                                }} 
                        onAromatizeStruct={(k)=>{
                                console.log("onAromatizeStruct")
                                }} 
                        onDearomatizeStruct={(k)=>{
                                console.log("onDearomatizeStruct")
                                }} 
                        onAttachEdit={(k)=>{
                                console.log("onAttachEdit")
                                }} 
                        onCipChange={(k)=>{
                                console.log("onCipChange")
                                }} 
                        onConfirm={(k)=>{
                                console.log("onConfirm")
                                }} 
                            />
    </>
}

const funcc =async () => {
  const auth = getAuth();
  const { currentUser } = auth;

  token = await currentUser.getIdToken(/* forceRefresh */ false);
  console.log(token)
}
funcc()

// ===============================|| SHADOW BOX ||=============================== //

const ShadowBox = ({ shadow }, props) => {
  

  const [expname, setexpname] = React.useState()
  const [targetmol, settargetmol] = React.useState()
  const [open, setopen] = React.useState(false);
  const [projectsData,setprojectsData]=React.useState([]);
  const [projectid,setprojectid]=React.useState('')
  const [solvent,setsolvent] = React.useState('')
  const [open2,setopen2] = React.useState(false)
  const [desc,setdesc] = React.useState()
  const [solventKetcher,setsolventKecther] = React.useState(false)

  const handleclose = () => {
    setopen(false)
  }
  const handleopen = () => {
    setopen(true)
  }
  const openKetcher = () => {
    setopen2(true)
  }
  const closeKetcher = () => {
    setopen2(false)
  }
  const openKetcher2 = () => {
    setopen2(true)
    setsolventKecther(true)
  }
  const handleprojectid=(event)=>{
    console.log("yes")
    console.log(event.target.value)
    setprojectid(event.target.value)
  }
  
  

  const ketcherFunction = async () => {

            //console.log(window.ketcher.getSmiles())
            const x = await window.ketcher.getSmiles()
            //console.log(x)
            if(solventKetcher){
              setsolvent(x)
            }else{
              settargetmol(x)
            }
            setopen2(false)
            setsolventKecther(false)
  }
  function submitretroform() {
      addDoc(collection(db, "forward_reaction"), {
        createdAt : serverTimestamp(),
        expname: expname,
        description:desc,
        target_mol: targetmol,
        intermediates: solvent,
        uid: uid,
        project_id:projectid,
      }).then(res => axios.post('https://rebolt-api.azurewebsites.net/v1/retrosynthesis/forward_rxn', {
        "experiment_id": res.id,
        "target_mol": targetmol,
        "intermediates": solvent,
        "tokenid": token,
      })).then(setexpname("")).then(settargetmol(""))
      .then(()=>{
        setsolvent("")
        setdesc("")
        alert("experiment submitted succesfully!")
      })
      
      handleclose()
  }

  function getprojects(){
    const q = query(collection(db, 'projects'), where("owner.uid", "==", uid));
    const projects = []
    getDocs(q).then((snapshot) => {
      snapshot.docs.forEach((doc) => { projects.push({ ...doc.data(), id: doc.id }) });
      setprojectsData(projects);
    }).catch((err) => console.log(err));
  }

  React.useEffect(() => {
    getprojects();
  })

  return (<>
    <Card sx={{ mb: 3, boxShadow: shadow }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 2,
          bgcolor: 'primary.green',
          color: 'grey.800',
          margin: 'auto'
        }}
      >
        <Grid container spacing={1}>
          <Grid item xl={6} xs={6}>
            <TextField style={{ width: '100%' }} label="Experiment name"
              name="expname"
              onChange={(e) => setexpname(e.target.value)}
              value={expname}
              required
              margin="normal"
              inputProps={{ style: { fontSize: 15 } }}
            />
          </Grid>
          <Grid item xl={6} xs={6}>
            <TextField style={{ width: '100%' }} label="Description(optional)"
              name="expname"
              onChange={(e) => setdesc(e.target.value)}
              value={desc}
              
              margin="normal"
              inputProps={{ style: { fontSize: 15 } }}
            />
          </Grid>
          <Grid item xl={11} xs={11}  >
            
            <TextField style={{ width: '100%' }} 
              name="targetmol"
              placeholder = "Target molecules (SMILES)"
              onChange={(e) => settargetmol(e.target.value)}
              value={targetmol}
              required
              margin="normal"
              inputProps={{ style: { fontSize: 15 } }}
            />
            
          </Grid>
          <Grid item xl={1} xs={1}>
            <Button halfwidth className="ketcher-button" variant="contained" size="large" style={{ width: '100%' }} variant='outlined' onClick={openKetcher}>
            <HiOutlinePencil style={{height:"35px"}} />
            </Button>
          </Grid>
          <Grid item xl={11} xs={11}  >
            
            <TextField style={{ width: '100%' }} 
              name="targetmol"
              placeholder = "solvent or catalysts (optional)"
              onChange={(e) => setsolvent(e.target.value)}
              value={solvent}
              required
              margin="normal"
              inputProps={{ style: { fontSize: 15 } }}
            />
            
          </Grid>
          <Grid item xl={1} xs={1}>
            <Button halfwidth className="ketcher-button" variant="contained" size="large" 
            style={{ width: '100%' }} variant='outlined' onClick={openKetcher2}>
            <HiOutlinePencil style={{height:"35px"}} />
            </Button>
          </Grid>
          <Grid 
           container
           style={{ display: "flex", justifyContent: "center",marginTop:"10px" }}>
            <Button variant="contained" size="large" style={{ width: '50%' }} onClick={handleopen}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
    <div>

      <Dialog
        sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
        maxWidth="xs"
        open={open}
      >
        <DialogTitle>Select a project to save your project</DialogTitle>
        <DialogContent dividers>
          <RadioGroup
            aria-label="ringtone"
            name="ringtone"

          >
            {projectsData.map((data)=>(
                        <div style={{display:'flex'}}>
                        <FormControlLabel
                            value={data.id}
                            key={data.id}
                            control={<Radio />}
                            label=""
                            onClick={e=>{
                                console.log(e.target.value)
                                setprojectid(e.target.value)
                            }}
                        />
                        <p>{data.projectname}</p>
                    </div>
                      ))}
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleclose}>
            Cancel
          </Button>
          <Button autoFocus onClick={submitretroform}>Submit</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        sx={{ '& .MuiDialog-paper': { maxWidth: '100vw', height: '100%' } }}
        minWidth="xs"
        open={open2}
      >
        
        <DialogContent dividers>
          <KetcherApp />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeKetcher}>
            Cancel
          </Button>
          <Button autoFocus onClick={ketcherFunction}>Submit
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
  </>)
}

ShadowBox.propTypes = {
  shadow: PropTypes.string.isRequired,
};


export default function ForwardReaction() {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <MainCard title="Forward Reaction" >
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <SubCard>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6} md={4} lg={12}>
                  <ShadowBox shadow="0" />
                </Grid>
              </Grid>
            </SubCard>
          </Grid>
        </Grid>
      </MainCard>
    </>
  );
}



/*
const onSubmit = () => {
    addDoc(collection(db, "forward_reaction"), {
      expname: expName,
      targetmol: targetMol,
    }).then(res => axios.post('http://40.76.219.13:8003/retrosyn_fwd/', {
      "experiment_id": res.id,
      "target_mol": targetMol,
      "uid": uid,
    })).then(setExpName("")).then(setTargetMol(""));
  }
  */