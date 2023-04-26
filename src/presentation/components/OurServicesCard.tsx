import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

type myProps = {
    url: string,
    title: string,
}
const OurServicesCard:React.FC<myProps> = ({url, title}) => {
  return (
    <Box>
        <Card style={{textAlign: 'center', padding: 10, margin: 10}}>
            <img src={url} alt="service" width="100%" style={{aspectRatio: 3/2, objectFit: 'contain'}}/>
            <Typography className='animatedHeading' sx={{color: '#ffa500', fontWeight: 'bold', fontFamily: 'Raleway, sans-serif', fontSize: 20, marginTop: 4, letterSpacing: 3}}>{title}</Typography>
        </Card>
    </Box>
  )
}

export default OurServicesCard