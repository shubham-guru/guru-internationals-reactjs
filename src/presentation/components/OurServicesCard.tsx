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
            <img src={url} alt="service" width="50%" />
            <Typography sx={{color: '#ffa500', fontWeight: 'bold', fontFamily: 'Raleway, sans-serif'}}>{title}</Typography>
        </Card>
    </Box>
  )
}

export default OurServicesCard