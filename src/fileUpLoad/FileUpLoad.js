import {useState} from "react"
// import FolderUpLoad from './folderUpLoad/FolderUpLoad';

function FileUpLoad() {
    const [file,setFile] = useState("");
    const [isfileLoaded, setIsFileLoaded] = useState(false);
  
  
    const onSubmit = (e) => {
      e.preventDefault();
      const formData = Object.fromEntries(new FormData(e.target));
      console.log(formData);
    };
   
    const updateFileData=(e)=>{
     setFile(e.currentTarget.files[0]);
     console.log(e.currentTarget.files[0]);
     setIsFileLoaded(true);
    }
  
    return (
      <div>
      <form upload onSubmit={onSubmit}>
      <input type="file" name="uploadFile" multiple onChange={(e)=>updateFileData(e)}/>
      {isfileLoaded &&<div>Loaded file:</div>}
      {isfileLoaded && <div>Document type: {file.name.split(".")[1]}</div>}
      {isfileLoaded && <div>size: {file.size/1000} KB</div>}
    </form>
    </div>
    );
    }
    export default FileUpLoad;