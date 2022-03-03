//core imports
import React, { useState } from "react";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { History } from "@mui/icons-material";
//mui imports
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, Fab, Grid, IconButton, TableFooter, TextField } from "@mui/material";
import { Add, ArrowBack, Delete, Edit } from "@mui/icons-material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './experiment.css'
//user data imports
import { db, email, name, uid } from 'index';
//firebase imports
import { collection, getDocs,updateDoc, setDoc, deleteDoc, doc, addDoc, serverTimestamp, query, where } from "@firebase/firestore";
import { Link } from "react-router-dom";
import { gridSpacing } from "store/constant";
import { getAuth } from "firebase/auth";


//styling table cell
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
//styling table row
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border 
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

//project component
const Projects = () => {
  // ==================================firebase id token================================================
  const funcc =async () => {
    const auth = getAuth();
    const { currentUser } = auth;

    const token = await currentUser.getIdToken(/* forceRefresh */ false);
    console.log(token)
  }
  funcc()
  // ==================================firebase id token================================================
  var navigate = useNavigate()
  const [did,setDid] = React.useState([])
  const [projectsData, setprojectsData] = React.useState([]);
  const [projectsdialog, setprojectsdialog] = React.useState(false);
  const [deleteAlert,setDeleteAlert] = React.useState(false)
  const [editBox,setEditBox] = React.useState(false)
  const [name,setName] = React.useState()
  const [desc,setDesc] = React.useState()
  const [pid,setPid] = React.useState()
  const [projectformdata, setprojectformdata] = React.useState({
    createdAt: '',
    projectname: '',
    projectdesc: '',

  }
  )
  const errorMsg = "Project name or description should not be empty!"
  const [showErrMsg,setErrMsgFunction] = React.useState(false)

  const showErrMsgFunction = flag => {
    if(flag === true){
      setErrMsgFunction(true)
    }else{
      setErrMsgFunction(false)
    }
  }

  const closeEditBox = () => {
    setEditBox(false)
  }
  const openEditBox = () => {
    setEditBox(true)
  }

  const openprojectform = () => {
    setprojectsdialog(true);
  }
  const closeprojectform = () => {
    showErrMsgFunction(false)
    setprojectsdialog(false);
  }
  const closeDeleteAlert = () => {
    setDeleteAlert(false)
    setDid(null)
  }

  //project form handling
  const projectformhandle = (event) => {
    setprojectformdata({
      ...projectformdata,
      [event.target.name]: event.target.value,
    });
  }

  //get projects data
  const q = query(collection(db, 'projects'), where("owner.uid", "==", uid));

  const getprojects = () => {
    const projects = []
    getDocs(q).then((snapshot) => {
      snapshot.docs.forEach((doc) => { 
        console.log(doc,doc.id)
        projects.push({ ...doc.data(), id: doc.id }) });
      setprojectsData(projects)
    }).catch((err) => console.log(err));
  }

  //add project
  const projectref = collection(db, 'projects');
  const addproject = () => {
    console.log(projectformdata.projectname,projectformdata.projectdesc,email,name,uid)
    if(projectformdata.projectname === '' || projectformdata.projectdesc === ''){
      console.log(errorMsg)
      showErrMsgFunction(true)  
    }else{
      showErrMsgFunction(false)
    addDoc(projectref, {
      createdAt: serverTimestamp(),
      projectname: projectformdata.projectname,
      projectdesc: projectformdata.projectdesc,
      owner: {
        email: email,
        uid: uid
      }
    })
    .then(res=>{
      console.log(res.id)
      
    })
    .then(setprojectformdata(
      {
        createdAt: '',
        projectname: '',
        projectdesc: '',
        owner: {
          email: '',
          uid: ''
        }
      }
    
    ))
      getprojects()
      closeprojectform()
    }
  }
  

  //rendering table
  const renderTable = ()=>{
    return (
      projectsData.map((data, index) => {
        return (
          <StyledTableRow>
            <StyledTableCell align="left">{index + 1}</StyledTableCell>
            <StyledTableCell align="left">{data.projectname}</StyledTableCell>
            <StyledTableCell align="left">{data.projectdesc}</StyledTableCell>
            
            <StyledTableCell align="center"><Link to={`/Experiments/${data.id}`}>view</Link></StyledTableCell>
            <StyledTableCell align="center"> <IconButton className="icon12"
            onClick={()=> editProject(data.projectname,data.projectdesc,data.id)}><Edit /></IconButton>
            <IconButton className="icon12"
            onClick={() => deleteproject(data.id)}><Delete /></IconButton></StyledTableCell>
          </StyledTableRow>
        )
      }) 
    )
  }


  //delete project
  const deleteproject = (id) => {
    setDid(id)
    setDeleteAlert(true)
  }
  const deleteData =async () => {
    deleteDoc(doc(db, "projects", did));
    await getprojects()
    setDid(null)
    setDeleteAlert(false)
  }

  //edit project
  const editProject = (name,desc,pid) => {
    console.log(name,desc)
    setName(name)
    setDesc(desc)
    setPid(pid)
    setEditBox(true)
  }

  const onEditProject =async () => {
   const projectUpdateRef= doc(db, "projects", pid);
   updateDoc(projectUpdateRef, {
    projectname : name,
    projectdesc:desc,
    });
    setEditBox(false)
    getprojects()
  }

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  useEffect(() => {
    getprojects()
  }, [])
  return (
    <><grid>
      <Fab variant="extended" sx={{ mb: 2 }} onClick={()=>{
        //history.push("/dashboard")
        //history.back()
        navigate(-1)
      }} style={{marginRight:'10px'}}>
        <ArrowBack />
      </Fab>

      <Fab variant="extended" sx={{ mb: 2 }} onClick={openprojectform}>
        <Add sx={{ mr: 1 }} />
        Create new project
      </Fab>

    </grid>
      
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item lg={12} md={12} sm={12} xs={12}>

              <TableContainer component={Paper} elevation={4} isLoading={isLoading}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell >S.No</StyledTableCell>
                      <StyledTableCell align="left">project name</StyledTableCell>
                      <StyledTableCell align="left">Description</StyledTableCell>
                      <StyledTableCell align="center">view</StyledTableCell>
                      <StyledTableCell align="center">Actions</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {renderTable()}
                  </TableBody>
                  <TableFooter>
                  </TableFooter>
                </Table>
              </TableContainer>

            </Grid>
          </Grid>
        </Grid>
      </Grid>




      {/*create project popup dialague*/}
      <Dialog open={projectsdialog} onClose={closeprojectform} >
        <DialogContent>
          <DialogContentText>
            Create New Project
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Project Name"
            type="text"
            fullWidth
            variant="standard"
            name="projectname"
            onChange={projectformhandle}
            value={projectformdata.projectname}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            name="projectdesc"
            onChange={projectformhandle}
            value={projectformdata.projectdesc}
          />
          {showErrMsg && <p>{errorMsg}</p>}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeprojectform}>Close</Button>
          <Button onClick={addproject}>Create</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={deleteAlert} onClose={closeDeleteAlert} >
        <DialogContent>
          <DialogContentText>
            ALERT
          </DialogContentText>
           <p>Are you sure, all the data will be perementally erased</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteAlert}>Close</Button>
          <Button onClick={()=>{
            deleteData()
            getprojects()
          }}>delete</Button>
        </DialogActions>
      </Dialog>

    
      <Dialog open={editBox} onClose={closeEditBox} >
        <DialogContent>
          <DialogContentText>
            Edit Project Data
          </DialogContentText>
           <p>Project name : <input value={name} onChange={e=>{setName(e.target.value)}}/></p>
           <p>Project description : <input value={desc} onChange={e=>{setDesc(e.target.value)}}/></p>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setEditBox(false)}>Close</Button>
          <Button onClick={()=>onEditProject()}>edit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}


export default Projects;
