import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import FolderUpLoad from './folderUpLoad/FolderUpLoad';
import FileUpLoad from './fileUpLoad/FileUpLoad';

function App() {

  return (
    <div>
    drobox
    {/* // <Uploadform/> */}
     <br></br>
    <FolderUpLoad/>
    <FileUpLoad/>
    </div>
  );
}


export default App;
