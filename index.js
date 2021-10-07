import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import styles from './styles';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid'; 
import { STATUSES } from './../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';

const listTask = [
    {
        id: 1,
        title : "Read book",
        description : "Read material ui book",
        status : 0
    },
    {
        id: 2,
        title : "Play soccer",
        description : "With my friend",
        status : 2
    },
    {
        id: 3,
        title : "Read game",
        description : "",
        status : 1
    }
]

class TaskBoard extends Component {
    state = {
        open: false
    };

    renderBoard(){
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status) => {
                        const taskFiltered = listTask.filter(task => task.status === status.value)
                        return <TaskList key={status.value} tasks={taskFiltered} status={status}/>
                    })}
            </Grid>
        );

        return xhtml;
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    openForm = () =>{
        this.setState({
            open: true
        });
    }

    renderForm(){
        const { open } = this.state;
        let xhtml = null;
        xhtml = (
            <TaskForm open={open} onClose={this.handleClose}/>
        );
        return xhtml;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskBoard}>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.openForm}>
                    <AddIcon /> Thêm mới công việc
                </Button>
                {this.renderBoard()}
                {this.renderForm()}
            </div>
        );
    }
}

export default withStyles(styles)(TaskBoard);
