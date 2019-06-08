import axios from 'axios';

export function retrieveAllWorkoutRoutines () {
    return axios.get('http://localhost:3000/routines');
}
