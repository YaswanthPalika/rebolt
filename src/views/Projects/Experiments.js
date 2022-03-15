import React, { useState,Component } from 'react';
import { Link,history,withRouter} from 'react-router-dom';
import {useParams} from "react-router-dom";
import {BallTriangle} from 'react-loader-spinner'
import ArrowBack from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom'
//mui imports
import { Add, Delete, Edit } from '@mui/icons-material';
import { Fab, IconButton, Paper, Table, TableBody, tableCellClasses, TableContainer } from '@mui/material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import { TableHead, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Navigate } from 'react-router';

import { db , uid } from 'index';
import { doc, onSnapshot, collection,updateDoc, getDocs,deleteDoc ,query, where} from '@firebase/firestore';
import './experiment.css'

var template = "retrosynthesis"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border 
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const array = ['retrosynthesis','retrosynthesis_tf','forward_reaction']



const Experiments = () => {
    var newExperiment = '/Rebolt/RetrosynthesisInput'
    //const history = useHistory();
    var navigate = useNavigate()
    const { pid } = useParams();
    console.log(pid)
    const [editBox,setEditBox] = useState(false)
    const [name,setName] = useState('')
    const [desc,setDesc] = useState('')
    const [eid,setEid] = useState()
    const [experimentsdata, setexperimentsdata] = useState([])
    const [experimentType, setExperimentType] = useState(array[0])
    const [newExp,setNewExp] = useState()
    const [deleteAlert,setDeleteAlert] = React.useState(false)
    const [did,setDid] = React.useState([])
    const [newExpType,setNewExpType] = useState('/Rebolt/RetrosynthesisInput')
    const [isLoading,setLoader] = React.useState(true)

    const deleteData =async () => {
        await deleteDoc(doc(db, template, did));
        getexperiments()
        setDid(null)
        setDeleteAlert(false)
      }

    const closeDeleteAlert = () => {
        setDeleteAlert(false)
        setDid(null)
      }
    
    const openNewExpBox = () => {
        setNewExp(true)
    }
    const onStartExperiment = () => {
        console.log(newExperiment)
        //console.log("working exp")
        
        if(newExpType === 'Retrosynthesis'){
          //<Navigate to='/Rebolt/RetrosynthesisInput' replace/>
          //<Redirect to='/Rebolt/RetrosynthesisInput' />
           //history.push('/Rebolt/RetrosynthesisInput')
           console.log("retro")
        }else{
           //<Navigate to='/Rebolt/ForwardReaction'/>
           //history.push('/Rebolt/ForwardReaction')
        }
    }

    const getexperiments = async() => {
        console.log("yes")
        console.log(template,uid)
        setLoader(true)
       const q = query(collection(db, template),where("uid", "==", uid ),where("project_id","==",pid.trim()))
       //const q = collection(db, template)
        // where("uid", "==", uid ),where("pid","==",pid.trim())
        const experiments = []
        await getDocs(q,).then((snapshot) => {
            snapshot.docs.forEach((doc) => { experiments.push({ ...doc.data(),id:doc.id}) });
            console.log(experiments)
            setexperimentsdata(experiments);
            
        }).catch((err) => console.log(err));
        setLoader(false)
    }
    

    React.useEffect(() => {
        getexperiments();
    }, [])

    const LoaderBox = () => (
        <div className="loader">
          <BallTriangle color="#00BFFF" height={80} width={80} />
        </div>
      )

      const deleteExperiment = (id) => {
        setDid(id)
        setDeleteAlert(true)
      }

    const OutputData = () => (
            experimentsdata.map((data, index) => {
                return (
                    <>
                        <StyledTableRow className='experiment-table'>
                            <StyledTableCell align='left'>{index+1}</StyledTableCell>
                            <StyledTableCell align='left'>{data.expname}</StyledTableCell>
                            <StyledTableCell align='left'>{data.description}</StyledTableCell>
                            
                            <StyledTableCell align='left'>
                                    {data.status === 'completed' ? "completed" : "pending"}
                            </StyledTableCell>
                            <StyledTableCell align='left'>
                                {data.status === 'completed' ?<Link to={`/Rebolt/${template}/${data.id}`}>View</Link>  
                                :<p>view</p> }
                                
                            </StyledTableCell>
                            <StyledTableCell align='left'>
                                <IconButton 
                                onClick={()=> editProject(data.expname,data.description,data.id)}
                                ><Edit /></IconButton>
                                <IconButton onClick={() => deleteExperiment(data.id)}><Delete /></IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    </>
                )
            })
        )

        //edit experiment
        const editProject = (name,desc,eid) => {
            console.log(name,desc)
            setName(name)
            setDesc(desc)
            setEid(eid)
            setEditBox(true)
          }

          const onEditProject =async () => {
            const projectUpdateRef= doc(db, template, eid);
            updateDoc(projectUpdateRef, {
                expname : name,
                description:desc,
             });
             setEditBox(false)
             getexperiments()
             getexperiments()
           }

    return (
        <>
            <div className='experiment'>
                
                <grid>
                    <Fab variant="extended" sx={{ mb: 2 }} onClick={()=>{
                        //history.push("/dashboard")
                        //history.back()
                        navigate(-1)
                    }} style={{marginRight:'10px'}}>
                        <ArrowBack />
                    </Fab>
                    <Fab variant="extended" sx={{ mb: 2 }} onClick={()=>setNewExp(true)}>
                        <Add sx={{ mr: 1 }} />
                        Create new experiment
                    </Fab>
                </grid>
                <select value={template}  onChange={e => {
                    console.log(e.target.value)
                    template = e.target.value
                    getexperiments()
                    }
                    }>
                    <option  value="retrosynthesis">Retrosynthesis Template Based</option>
                    <option value="retrosynthesis_tf">Retrosynthesis Template Free</option>
                    <option value="forward_reaction">Forward Reaction</option>
                </select>
            </div>
            
            <TableContainer component={Paper} elevation='4'>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell align='left'>S.No</StyledTableCell>
                            <StyledTableCell align='left'>Experiment Name</StyledTableCell>
                            <StyledTableCell align='left'>Description</StyledTableCell>
                            <StyledTableCell align='left'>Status</StyledTableCell>
                            <StyledTableCell align='left'>Output</StyledTableCell>
                            <StyledTableCell align='left'>Actions</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {isLoading && <LoaderBox />}
                        {!isLoading && <OutputData/>}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={newExp} onClose={()=>{}} >
                <DialogContent>
                <DialogContentText>
                    
                <RadioGroup
                    aria-label="ringtone"
                    name="ringtone"

                >
                    <div style={{display:'flex'}}>
                        <FormControlLabel
                            value="/Rebolt/RetrosynthesisInput"
                            key="/Rebolt/RetrosynthesisInput"
                            control={<Radio />}
                            label=""
                            onClick={e=>{
                                console.log("retrorrs")
                                setNewExpType(e.target.value)
                            }}
                        />
                        <p>Retrosynthesis</p>
                    </div>
                    <div style={{display:'flex'}}>
                        <FormControlLabel
                            value="/Rebolt/ForwardReaction"
                            key="/Rebolt/ForwardReaction"
                            control={<Radio />}
                            label=""
                            onClick={e=>{
                                console.log("forw")
                                setNewExpType(e.target.value)
                                console.log(newExpType)
                            }}
                        />
                        <p>Forward Reaction</p>
                    </div>
                    
                </RadioGroup>
                </DialogContentText>
                    
                </DialogContent>
                <DialogActions>
                <Button onClick={()=>setNewExp(false)}>Close</Button>
                <Link to={newExpType}><Button >Start Experiment</Button></Link>
                </DialogActions>
        </Dialog>

        <Dialog open={deleteAlert} onClose={closeDeleteAlert} >
        <DialogContent>
          <DialogContentText>
            ALERT
          </DialogContentText>
           <p>Are you sure, all the data will be permanently erased</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteAlert}>Close</Button>
          <Button onClick={deleteData}>delete</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={editBox} onClose={()=>{setEditBox(false)}} >
        <DialogContent>
          <DialogContentText>
            Edit Experiment Data
          </DialogContentText>
           <p>Experiment name : <input value={name} onChange={e=>{setName(e.target.value)}}/></p>
           <p>Experiment description : <input value={desc} onChange={e=>{setDesc(e.target.value)}}/></p>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setEditBox(false)}>Close</Button>
          <Button onClick={()=>onEditProject()}>edit</Button>
        </DialogActions>
      </Dialog>

        </>
    );
}



export default Experiments