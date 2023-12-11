import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import InputMask from 'react-input-mask';
import DateTimePicker from 'react-datetime-picker';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  addButton: {
    marginBottom: theme.spacing(2),
  },
  taskList: {
    marginTop: theme.spacing(2),
  },
}));

const TaskInput = () => {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editedTask, setEditedTask] = useState(null);
  const [taskSubject, setTaskSubject] = useState(''); // Added state for subject
  const [taskName, setTaskName] = useState('');
  const [taskDeadline, setTaskDeadline] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [taskType, setTaskType] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleTimeChange = (e) => {
    setTaskTime(e.target.value);
  };

  const openEditDialogHandler = (task) => {
    setEditedTask(task);
    setTaskSubject(task.subject); // Updated to set the subject value
    setTaskName(task.name);
    setTaskDeadline(task.deadline);
    setTaskTime(task.time);
    setTaskType(task.type);
    setTaskDescription(task.description);
    setOpenEditDialog(true);
  };

  const closeEditDialogHandler = () => {
    setOpenEditDialog(false);
    setTaskSubject(''); // Reset subject value
    setTaskName('');
    setTaskDeadline('');
    setTaskTime('');
    setTaskType('');
    setTaskDescription('');
    setEditedTask(null);
  };

  const addTask = (e) => {
    e.preventDefault();

    if (taskSubject && taskName && taskDeadline && taskTime && taskType) {
      const newTask = {
        id: tasks.length + 1,
        subject: taskSubject, // Added subject property
        name: taskName,
        deadline: taskDeadline,
        time: taskTime,
        type: taskType,
        description: taskDescription,
        status: 'Incomplete',
      };

      setTasks([...tasks, newTask]);

      setTaskSubject(''); // Reset subject value
      setTaskName('');
      setTaskDeadline('');
      setTaskTime('');
      setTaskType('');
      setTaskDescription('');
    }
  };

  const updateTask = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id
        ? {
            ...task,
            subject: taskSubject, // Updated to include subject
            name: taskName,
            deadline: taskDeadline,
            time: taskTime,
            type: taskType,
            description: taskDescription,
          }
        : task
    );

    setTasks(updatedTasks);
    closeEditDialogHandler();
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom style={{ marginLeft: '10rem' }}>
        Add New Task
      </Typography>
      <form onSubmit={addTask} style={{ marginLeft: '10rem' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Subject" // Added subject placeholder
              value={taskSubject}
              onChange={(e) => setTaskSubject(e.target.value)}
              fullWidth
              required
              className="custom-textfield"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              fullWidth
              required
              className="custom-textfield"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Deadline"
              type="date"
              value={taskDeadline}
              onChange={(e) => setTaskDeadline(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputMask
              mask="99:99"
              placeholder="Time"
              value={taskTime}
              onChange={handleTimeChange}
              maskChar={null}
            >
              {(inputProps) => (
                <TextField
                  {...inputProps}
                  type="text"
                  inputProps={{
                    inputMode: 'numeric',
                    pattern: '^([01]?[0-9]|2[0-3]):[0-5][0-9]$',
                    title: 'Please enter time in HH:mm format',
                  }}
                  fullWidth
                  required
                />
              )}
            </InputMask>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <Select
                value={taskType}
                onChange={(e) => setTaskType(e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Select Task Type' }}
              >
                <MenuItem value="" disabled>
                  Select Task Type
                </MenuItem>
                <MenuItem value="Homework">Homework</MenuItem>
                <MenuItem value="Project">Project</MenuItem>
                <MenuItem value="Quiz">Quiz</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ backgroundColor: '#0078AA' }}
              className={classes.addButton}
            >
              Add Task
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* ...Edit Task Dialog code here... */}
      <Dialog open={openEditDialog} onClose={closeEditDialogHandler}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  placeholder="Subject" // Added subject placeholder
                  value={taskSubject}
                  onChange={(e) => setTaskSubject(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  placeholder="Task Name"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  placeholder="Deadline"
                  type="date"
                  value={taskDeadline}
                  onChange={(e) => setTaskDeadline(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputMask
                  mask="99:99"
                  placeholder="Time"
                  value={taskTime}
                  onChange={handleTimeChange}
                  maskChar={null}
                >
                  {(inputProps) => (
                    <TextField
                      {...inputProps}
                      type="text"
                      inputProps={{
                        inputMode: 'numeric',
                        pattern: '^([01]?[0-9]|2[0-3]):[0-5][0-9]$',
                        title: 'Please enter time in HH:mm format',
                      }}
                      fullWidth
                      required
                    />
                  )}
                </InputMask>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <Select
                    value={taskType}
                    onChange={(e) => setTaskType(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Select Task Type' }}
                  >
                    <MenuItem value="" disabled>
                      Select Task Type
                    </MenuItem>
                    <MenuItem value="Homework">Homework</MenuItem>
                    <MenuItem value="Project">Project</MenuItem>
                    <MenuItem value="Quiz">Quiz</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  placeholder="Description"
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEditDialogHandler} style={{ color: '#0078AA' }}>
            Cancel
          </Button>
          <Button onClick={updateTask} style={{ color: '#0078AA' }}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Task list */}

      <Paper elevation={3} style={{ padding: '1rem', marginLeft: '10rem' }} className={classes.taskList}>
      <Grid container alignItems="center" style={{ marginBottom: '1rem' }}>
  <Grid item xs={2}>
    <Typography variant="subtitle1">Subject</Typography>
  </Grid>
  <Grid item xs={2}>
    <Typography variant="subtitle1">Task Name</Typography>
  </Grid>
  <Grid item xs={2}>
    <Typography variant="subtitle1">Deadline</Typography>
  </Grid>
  <Grid item xs={2}>
    <Typography variant="subtitle1">Due Time</Typography>
  </Grid>
  <Grid item xs={2}>
    <Typography variant="subtitle1">Type</Typography>
  </Grid>
  <Grid item xs={2} style={{ display: 'flex' }}>
    <Typography variant="subtitle1">Actions</Typography>
  </Grid>
</Grid>

        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Grid container alignItems="center" key={task.id}>
              <Grid item xs={2}>
                <Typography variant="body1">{task.subject}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">{task.name}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">{task.deadline}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">{task.time}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">{task.type}</Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  style={{ color: '#0078AA' }}
                  onClick={() => openEditDialogHandler(task)}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  style={{ color: '#0078AA' }}
                  onClick={() => deleteTask(task.id)}
                >
                  <Delete />
                </IconButton>
              </Grid>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" align="center">
            No tasks added yet
          </Typography>
        )}
      </Paper>
    </div>
  );
};

export default TaskInput;
