import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import MobileDatePicker from '@mui/lab/MobileDatePicker';
import MobileTimePicker from '@mui/lab/MobileTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';



function AdminEventCreate() {

    const dispatch = useDispatch();
    const newEvent = useSelector(store => store.addEvent);

    // ------- Date Time Dispatches -------------------------------------------------------------- //

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date(), 'hh:mm:ss');
    const [endTime, setEndTime] = useState(new Date(), 'hh:mm:ss');

    const dispatchStartDate = (newStartDate) => {
        setStartDate(newStartDate);
        dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'start_date', value: startDate } })
    }
    const dispatchEndDate = (newEndDate) => {
        setEndDate(newEndDate);
        dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'end_date', value: endDate } })
    }
    const dispatchStartTime = (newStartTime) => {
        setStartTime(newStartTime);
        dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'start_time', value: startTime } })
    }
    const dispatchEndTime = (newEndTime) => {
        setEndTime(newEndTime);
        dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'end_time', value: endTime } })
    }
    // ------------------------------------------------------------------------------------------ //

    const handleSubmit = () => {
        dispatch({ type: 'POST_EVENT', payload: newEvent })
        console.log('newEvent":', newEvent);
    }

    return (
        <>
            <TextField
                label="Event Name"
                autoComplete="off"
                value={newEvent.name}
                onChange={e => dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'name', value: e.target.value } })}
                required
            />
            <br /><br />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                    label="Start Date"
                    inputFormat="MM/dd/yyyy"
                    value={startDate}
                    onChange={dispatchStartDate}
                    renderInput={(params) => <TextField {...params} />}
                />
                <br />
                <MobileDatePicker
                    label="End Date"
                    value={endDate}
                    onChange={dispatchEndDate}
                    renderInput={(params) => <TextField {...params} />}
                />
                <br /><br />
                <MobileTimePicker
                    label="Start Time"
                    value={startTime}
                    onChange={dispatchStartTime}
                    renderInput={(params) => <TextField {...params} />}
                />
                <br />
                <MobileTimePicker
                    label="End Time"
                    value={endTime}
                    onChange={dispatchEndTime}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <br /><br />
            <TextField
                label="Description"
                autoComplete="off"
                value={newEvent.description}
                onChange={e => dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'description', value: e.target.value } })}
                required
                minRows={3}
                multiline
            />
            <br /><br />
            <TextField
                label="Email"
                autoComplete="off"
                value={newEvent.email}
                onChange={e => dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'email', value: e.target.value } })}
            />
            <br /><br />
            <TextField
                label="Phone #"
                autoComplete="off"
                value={newEvent.phone}
                onChange={e => dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'phone', value: e.target.value } })}
            />
            <br /><br />
            <TextField
                label="Sign Up Link"
                autoComplete="off"
                value={newEvent.link}
                onChange={e => dispatch({ type: 'SET_ADD_EVENT', payload: { property: 'link', value: e.target.value } })}
                required
            />
            <br /><br />
            <Button
                variant="contained"
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </>
    )
}

export default AdminEventCreate;