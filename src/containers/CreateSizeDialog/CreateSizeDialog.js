import React, { useState, useContext } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Dialog, DialogTitle, Button, TextField, DialogContent, DialogActions, FormHelperText, FormControl } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
// import { useFormControl } from '@mui/material/FormControl';
import { TubeContext } from '../../contexts/TubeContext';

const useStyles = makeStyles({
    root: {
        position: "absolute",
        bottom: '20px',
        right: '20px',
    },
  });
  

export default function CreateSizeDialog({ closeDialog }) {
    const classes = useStyles();
    const { tubes, setTubes } = useContext(TubeContext);
 
    const [size, setSize] = useState("");
    const [isError, setError] = useState(false);

    const handleSizeSubmit = () => {
        if (!size) {
            setError(true);
            return
        }

        console.log(size)

        if (!/^\d+[хХxX]\d+[хХxX]\d+$/.test(size)) {
            setError(true);
            return
        }

        setTubes({ ...tubes, [size]: [] })

        closeDialog();
    };

    const handleSizeChange = (event) => {
        const text = event.target.value;
        setSize(text);

        if (text) setError(false);
    }

    const handleSizeBlur = (event) => {
        if (!event.target.value) setError(true);
    }

    const getError = () => {
        if (!size) return "Пустое поле";

        return "Неверный формат, введите в формате 40x40x2"
    };

    const handleKeyPress = (e) => {
        if (e.keyCode == 13){
            handleSizeSubmit();
        }
    }

    return (
        <>
            <Dialog
                open
                onClose={closeDialog}
            >
                <DialogTitle>Добавьте размер трубы</DialogTitle>

                <DialogContent>
                    <FormControl>
                        <TextField
                            onChange={handleSizeChange}
                            onBlur={handleSizeBlur}
                            onKeyDown={handleKeyPress}
                            label="Размер трубы"
                            placeholder="40x40x2"
                            variant="standard"
                        />

                        {isError && <FormHelperText error>{getError()}</FormHelperText>}
                    </FormControl>

                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={handleSizeSubmit}
                        variant="text"
                    >
                        Добавить
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}