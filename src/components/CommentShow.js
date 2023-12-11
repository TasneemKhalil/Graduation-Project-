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

const CommentShow = () => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const [reply, setReply] = useState('');

  const [commentsWithReports, setCommentsWithReports] = useState([
    {
      id: 1,
      text: 'What?! you want help in this lol',
      reports: 3,
      author: 'Naya',
      publishedDate: 'May 1, 2023',
    },
    {
      id: 2,
      text: 'This is so stupid.',
      reports: 5,
      author: 'Ahmad',
      publishedDate: 'May 2, 2023',
    },
    // Add more comments with reports as needed
  ]);

  const handleDelete = (commentId) => {
    // Implement the delete functionality here
    const updatedComments = commentsWithReports.filter((comment) => comment.id !== commentId);
    setCommentsWithReports(updatedComments);
    setOpenDialog(false);
  };

  const handleReplyChange = (event) => {
    setReply(event.target.value);
  };

  const handleSendReply = () => {
    // Implement the send reply functionality here
    console.log(`Sending reply: ${reply}`);
    setReply('');
    setOpenDialog(false);
  };

  const handleCommentClick = (comment) => {
    setSelectedComment(comment);
    setOpenDialog(true);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1">
        Comments with Reports
      </Typography>
      {commentsWithReports.map((comment) => (
        <Card key={comment.id} className={classes.card} onClick={() => handleCommentClick(comment)}>
          <CardContent className={classes.cardContent}>
            <div>
              <Typography variant="body1" component="p">
                {comment.text}
              </Typography>
              {/* <Typography variant="body2" gutterBottom>
                Author: {comment.author}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Published Date: {comment.publishedDate}
              </Typography> */}
            </div>
            <IconButton
              aria-label="delete"
              className={classes.deleteIcon}
              onClick={(event) => {
                event.stopPropagation();
                handleDelete(comment.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        {selectedComment && (
          <>
            <DialogTitle>Comment</DialogTitle>
            <DialogContent>
              <Typography variant="body1">{selectedComment.text}</Typography>
              <Typography variant="body2" gutterBottom>
                Author: {selectedComment.author}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Published Date: {selectedComment.publishedDate}
              </Typography>
              <CustomTextField
                label="Reply"
                variant="outlined"
                value={reply}
                onChange={handleReplyChange}
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
                onClick={handleSendReply}
                className={classes.sendFeedbackButton}
                startIcon={<SendIcon />}
              >
                Send Reply
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default CommentShow;
