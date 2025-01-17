import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function LandingPageCard({ title, description, imageUrl, imageTitle }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl || "/static/images/cards/contemplative-reptile.jpg"} 
        title={imageTitle || "green iguana"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title || "Lizard"} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description || "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Navigate</Button>
      </CardActions>
    </Card>
  );
}
