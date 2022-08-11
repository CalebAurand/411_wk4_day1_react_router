import React from 'react'
import cars from '../cars.json'
import {useParams} from 'react-router-dom';
import { Container, Chip, Paper } from '@mui/material';

// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
    console.log("cars array", cars);
    const carId = useParams().id;
    console.log("carId is", carId, "type is", typeof carId);
    let car = cars.find(el=>el['id']===parseInt(carId));
    console.log("car is", car);
    let keys = Object.keys(car);
    console.log("keys for car are", keys)

    return (
        <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Paper elevation={2} sx={{width: 450, display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: 10, padding: 3, paddingTop: 1, backgroundColor: '#1976D2',  borderRadius: 15}} square>
                <h3 style={{backgroundColor: 'white', width: '100%', textAlign: 'center', padding: 9, borderRadius: 10}}>{car['Name']}</h3>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                    {keys.map((key, index)=>{
                        let property = key+": "+car[key];
                        return(
                            <Chip key={index} label={property} style={{backgroundColor: 'white', border: 'solid', borderWidth: 1, margin: 1}} variant="filled">
                            </Chip>
                        )
                    })}
                </div>
            </Paper>
        </Container>
    )
}

export default Car