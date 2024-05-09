import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function generateTabs(count) {
  return '\t'.repeat(count);
}

function generateSpaces(count) {
  return ' '.repeat(count);
}


function TeacherCard({ title, description, imageUrl, imageTitle, navigateToRegisteredGroups, navigateToGroupsToSupervise, navigateToCoordinatorPage }) {
    const navigate = useNavigate();
  
    const handleClick = () => {
      if (navigateToRegisteredGroups){
        navigate('/RegisteredGroups');
      }
      if (navigateToGroupsToSupervise){
        navigate('/GroupsToSupervise');
      }
      if (navigateToCoordinatorPage){
        navigate('/CoordinatorPage');
      }
    };
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
    <Card sx={{ maxWidth: 330, height: '100%' }}>
      <CardMedia
        sx={{ height: 130 }}
        image={imageUrl || "/static/images/cards/contemplative-reptile.jpg"} 
        title={imageTitle || "green iguana"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title || "Lizard"} 
        </Typography>
        <div>
  {generateSpaces(4)}This content is indented by four spaces.
</div>
        <Typography variant="body2" color="text.secondary">
          {description || "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" onClick={handleClick}>Navigate</Button>
      </CardActions>
    </Card>
    </div>
  );

}
export default TeacherCard;

