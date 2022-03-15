import {Component} from 'react'
import { db , uid } from 'index';
import { doc, onSnapshot, collection,updateDoc, getDocs,deleteDoc ,query, where} from '@firebase/firestore';
import SubCard from 'ui-component/cards/SubCard';
import EarningCard from 'ui-component/cards/Skeleton/EarningCard'; 

class ProgressList extends Component{
    state = {
        retro : 0,
        retro_tf : 0,
        fwd :0,
        cretro : 0,
        cretro_tf : 0,
        cfwd :0,

        isLoading : true
    }

    getexperiments = async() => {
        console.log("yes")
        // where("uid", "==", uid ),where("pid","==",pid.trim())
        var q = query(collection(db, 'retrosynthesis'),where("uid", "==", uid ))
        var experiments = []
        await getDocs(q).then((snapshot) => {
            snapshot.docs.forEach((doc) => { experiments.push({ ...doc.data(),id:doc.id}) });
            experiments.forEach(each => {
                if(each.status !== "completed"){
                    this.setState(prevState => {
                        return {retro:prevState.retro +1}
                    })

                }
                else{
                    this.setState(prevState => {
                        return {cretro:prevState.cretro +1}
                    })
                }
            })
            
        }).catch((err) => console.log(err));

        q = query(collection(db, 'retrosynthesis_tf'),where("uid", "==", uid ))
        experiments = []
        await getDocs(q).then((snapshot) => {
            snapshot.docs.forEach((doc) => { experiments.push({ ...doc.data(),id:doc.id}) });
            experiments.forEach(each => {
                if(each.status !== "completed"){
                    this.setState(prevState => {
                        return {retro_tf:prevState.retro_tf +1}
                    })
                }
                else{
                    this.setState(prevState => {
                        return {cretro_tf:prevState.cretro_tf  +1}
                    })
                }
            })
            
        }).catch((err) => console.log(err));

        q = query(collection(db, 'forward_reaction'),where("uid", "==", uid ))
        experiments = []
        await getDocs(q).then((snapshot) => {
            snapshot.docs.forEach((doc) => { experiments.push({ ...doc.data(),id:doc.id}) });
            experiments.forEach(each => {
                if(each.status !== "completed"){
                    this.setState(prevState => {
                        return {fwd:prevState.fwd +1}
                    })
                }
                else{
                    this.setState(prevState => {
                        return {cfwd:prevState.cfwd +1}
                    })
                }
            })
            
        }).catch((err) => console.log(err));




        this.setState({isLoading:false})
    }

    componentDidMount = () =>{
        this.getexperiments()
    }
    

    render(){
        

        const {retro,isLoading,retro_tf,fwd,cfwd,cretro,cretro_tf} = this.state
        
        return (
            <div>
                {isLoading ? <div>
                    <EarningCard></EarningCard>
                    <EarningCard></EarningCard>
                </div> : 
                <div>
                    <SubCard title="Pending">
                        <p>retrosynthesis template based : {retro}</p>
                        <p>retrosynthesis template free  : {retro_tf}</p>
                        <p>Forward Reaction : {fwd}</p>
                    </SubCard>
                    <SubCard title="Completed">
                        <p>retrosynthesis template based : {cretro}</p>
                        <p>retrosynthesis template free  : {cretro_tf}</p>
                        <p>Forward Reaction : {cfwd}</p>
                    </SubCard>
                </div>
                
                }
            </div>

        )
    }
}

export default ProgressList