import React from 'react'
import Box from '@mui/material/Box';
import Dashboard from '../Components/Dashboard/Dashboard';
import Navbar from '../Components/Navbar'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function Home() {
  return (
    <>
    <Navbar/>
    <Box height ={70}/>
    <Box sx={{ display: 'flex' }}>
        <Dashboard/>  
        <Box component="main"
        sx={{ flexGrow: 1,  p: 3 }}
      >
        <Grid container spacing={2}>
        <Grid item xs={8}>
        <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </Grid>

      <Box height ={20}/>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </Grid>
      </Box>
    </Box>
    </>
    
  )
}
