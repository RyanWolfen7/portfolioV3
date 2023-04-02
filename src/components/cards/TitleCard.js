"use client";

const { default: Image } = require("next/image")
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { bgcolor } from '@mui/system';

const TitleCard = ({
    title, 
    src, 
    alt,
    color, 
    svgSize = { width: 100, height: 100 } 
}) => {
    
    return (
        <Card 
            sx={{
                p: 2,
                textAlign: 'center',
                width: "100%",
                color: '#ffffff',
                bgcolor: color
            }}
        >
            
            <Image src={src} alt={alt} width={svgSize.width} height={svgSize.height}/>
            <Typography fontSize={{xs: 16, md: 21}} fontWeight={600}>
                {title}
            </Typography>
        </Card>
    )
}

export default TitleCard
