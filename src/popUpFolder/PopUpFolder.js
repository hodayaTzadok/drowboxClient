import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import * as React from "react";
import { useState } from "react";
import FileUpLoad from "../fileUpLoad/FileUpLoad";


export default function PopUpFolder() {
  const [open, setOpen] = React.useState(false);
  const [addParam, setAddParam] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  //Add a new folder
  const handleAddAndClose = () => {
    fetch(`http://localhost:3500/create/:folderName`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ name: addParam }),
    })
      .then((res) => res.json())
      .then((data) => {});
    setOpen(false);

  };



  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="popupAddFolder">
      <Button
        id="addFolderPlus"
        variant="outlined"
        onClick={handleClickOpen}
        className="addFolder"
      >
      תיקיה חדשה +
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            value={addParam}
            onChange={(e) => setAddParam(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            variant="standard"
            placeholder="folder name"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddAndClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}