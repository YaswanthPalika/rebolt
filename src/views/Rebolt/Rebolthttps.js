import axios from "axios";


const senddataretrosynthesis = () => {
    axios.post('https://retro-ft62j4bfna-uc.a.run.app/retrosyn/', {
        "experiment_id": '',
        "target_mol": '',
        "user_id": ''
    })
}

const senddataforwardreaction = () => {

}


export {senddataretrosynthesis,senddataforwardreaction}