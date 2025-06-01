import React from 'react';
import { 
  Box, 
  List, 
  ListItem, 
  ListItemAvatar, 
  Avatar, 
  ListItemText, 
  TextField, 
  Paper,
  Typography,
  InputAdornment,
  IconButton,
  Container
} from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';

const Chat = () => {
  return (
    <Container maxWidth="xs"  sx={{
        display: 'flex',
      flexDirection: 'column',
        alignItems:'center',
        overflow: 'hidden'
    }}>
      <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
                  Chat App
                </Typography>
    <Paper 
      elevation={3}
      sx={{
        width: 350,
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
      >
         
      <Box sx={{ padding: '16px', borderBottom: '1px solid #e0e0e0' }}>
        <Typography variant="h6">Chat with Ahmed</Typography>
      </Box>
      
      <List sx={{ flex: 1, overflowY: 'auto', padding: '8px' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Ahmed" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Ahmed"
            secondary="Hello!"
          />
        </ListItem>
        
			  <ListItem alignItems="flex-start" sx={{ flexDirection: 'row' }}>
				   <ListItemAvatar>
            <Avatar alt="Ahmed" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="You"
            secondary="Hi, how are you?"
            sx={{ textAlign: 'left', mr: 2 }}
          />
        </ListItem>
      </List>
      
      <Box sx={{ padding: '16px', borderTop: '1px solid #e0e0e0' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          slotProps={{
			  input: {
				  startAdornment: (
					  <InputAdornment position="start">
						  <IconButton>
							  <EmojiEmotionsIcon color="primary" />
						  </IconButton>
					  </InputAdornment>
				  ),
				  endAdornment: (
					  <InputAdornment position="end">
						  <IconButton edge="end">
							  <SendIcon color="primary" />
						  </IconButton>
					  </InputAdornment>
				  ),
			  }
          }}
        />
      </Box>
      </Paper>
      </Container>
  );
};

export default Chat;