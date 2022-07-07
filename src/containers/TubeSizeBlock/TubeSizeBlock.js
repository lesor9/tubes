import React, { useContext } from 'react';
import { Card, CardContent, CardActions, Button, Typography } from "@material-ui/core";

export default function TubeSizeBlock({ size, tubesArray }) {

    return(
        <Card style={{maxWidth: 350, margin: 'auto',  marginTop: 30,}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {size}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    5 труб по 3 метра
                </Typography>
            </CardContent>

            <CardActions style={{justifyContent: "center"}}>
                <Button size="small" color="primary">
                    Добавить труб
                </Button>
            </CardActions>
        </Card>
    );
}