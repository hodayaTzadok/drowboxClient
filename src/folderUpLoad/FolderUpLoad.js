import './FolderUpLoad.css';
import {useState} from "react"
import PopUpFolder from '../popUpFolder/PopUpFolder';
import FileUpLoad from '../fileUpLoad/FileUpLoad';

export default function FolderUpLoad() {
  const [folder,setFolder] = useState("");
  const [popup, setPopup] = useState(false);

 function upLoadFolder(){
    console.log("in function");
    setPopup(true);
 }

  return(
    <>
    <button type="button" className="btn btn-primary" onClick={()=>upLoadFolder()}>root</button>
    {popup && <PopUpFolder/>}
    {folder && <FileUpLoad/>}
    
    
    Hello World!
    </>
  )

 
}

