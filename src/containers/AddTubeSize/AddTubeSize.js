import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
// import { useFormControl } from '@mui/material/FormControl';
import CreateSizeDialog from "../CreateSizeDialog";

const useStyles = makeStyles({
    root: {
        position: "absolute",
        bottom: '20px',
        right: '20px',
    },
  });
  

export default function AddTubeSize() {
    const classes = useStyles();

    const [isDialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => {
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };

    return (
        <>
            <Fab
                onClick={openDialog}
                className={classes.root}
                color="primary"
                aria-label="add"
            >
                <AddIcon />
            </Fab>

            {isDialogOpen && <CreateSizeDialog closeDialog={closeDialog} />}     
        </>
    )
}