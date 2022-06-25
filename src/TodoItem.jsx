import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import './TodoItem.css'

function TodoItem(props) {
  const onComplete = () => {
      console.log("task completed!");
  }

  const onDelete = () => {
      console.log("task Deleted!");
  }
  return (
    <div>
      <List>
        <ListItem disablePadding>
          <ListItemIcon onClick={onComplete}>
            <DoneIcon color={props.completed ? 'success' : ''} />
          </ListItemIcon>
          <ListItemButton>
            <ListItemText className={`${props.completed && 'TodoItem-p--complete'}`} primary={props.text}/>
          </ListItemButton>
          <ListItemIcon onClick={onDelete}>
            <DeleteIcon sx={{ color: 'red' }} />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
    
  );
}

export { TodoItem };