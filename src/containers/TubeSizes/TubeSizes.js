import React, { useContext } from 'react';
import { TubeContext } from '../../contexts/TubeContext';
import TubeSizeBlock from '../TubeSizeBlock';

export default function TubeSizes() {
    const { tubes, setTubes } = useContext(TubeContext);

    return(
        <>
            {Object.keys(tubes).map((size) => {
                return (<TubeSizeBlock size={size} tubesArray={tubes[size]} />)
            })}
        </>
    );
}