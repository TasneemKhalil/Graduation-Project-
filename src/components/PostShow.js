import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@material-ui/core';
import { Delete as DeleteIcon, Send as SendIcon, Close as CloseIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const CustomTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0078AA',
    },
    '& .MuiInputLabel-root': {
      color: '#0078AA',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0078AA',
    },
    '&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0078AA',
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  card: {
    marginBottom: theme.spacing(2),
    width: '400px', // Adjust the width as needed
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: theme.spacing(1),
  },
  deleteIcon: {
    marginLeft: theme.spacing(2),
  },
  closeButton: {
    color: '#0078AA',
  },
  sendFeedbackButton: {
    color: '#0078AA',
  },
  
}));

const PostShow = () => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [feedback, setFeedback] = useState('');

  const [postsWithReports, setPostsWithReports] = useState([
    {
      id: 1,
      title: 'Post 1',
      body: 'I hate studying',
      reports: 3,
      author: 'tasneem',
      publishedDate: 'May 1, 2023',
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'i do not like tasneem',
      reports: 5,
      author: 'asma',
      publishedDate: 'May 2, 2023',
    },
    // Add more posts with reports as needed
  ]);

  const handleDelete = (postId) => {
    // Implement the delete functionality here
    const updatedPosts = postsWithReports.filter((post) => post.id !== postId);
    setPostsWithReports(updatedPosts);
    setOpenDialog(false);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSendFeedback = () => {
    // Implement the send feedback functionality here
    console.log(`Sending feedback: ${feedback}`);
    setFeedback('');
    setOpenDialog(false);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setOpenDialog(true);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1">
        Posts with Reports
      </Typography>
      {postsWithReports.map((post) => (
        <Card key={post.id} className={classes.card} onClick={() => handlePostClick(post)}>
          <CardContent className={classes.cardContent}>
            <div>
              <Typography variant="h6" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body1" component="p">
                {post.body}
              </Typography>
            </div>
            <IconButton
              aria-label="delete"
              className={classes.deleteIcon}
              onClick={(event) => {
                event.stopPropagation();
                handleDelete(post.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        classes={{ paper: classes.feedbackBox }}
      >
        {selectedPost && (
          <>
            <DialogTitle>{selectedPost.title}</DialogTitle>
            <DialogContent>
              <Typography variant="body2" gutterBottom>
                Author: {selectedPost.author}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Published Date: {selectedPost.publishedDate}
              </Typography>
              <Typography variant="body1">{selectedPost.body}</Typography>
              <CustomTextField
  label="Feedback"
  variant="outlined"
  value={feedback}
  onChange={handleFeedbackChange}
  fullWidth
  margin="normal"
/>     
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => setOpenDialog(false)}
                className={classes.closeButton}
                startIcon={<CloseIcon />}
              >
                Close
              </Button>
              <Button
                onClick={handleSendFeedback}
                className={classes.sendFeedbackButton}
                startIcon={<SendIcon />}
              >
                Send Feedback
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default PostShow;
