import React from 'react';
import Images from '../Images'
import './search.css'
import WorkoutCard from './WorkoutCard';
import SearchIcon from './SearchIcon.svg';
import { useState, useEffect } from 'react';
import WorkoutData from './DATA.json'

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f568899c';


function Search() {
  const [workouts, setWorkouts] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");
  const searchWorkouts = async (name) => {
    let workoutResult = WorkoutData.find(o => o.Name === name);
  setWorkouts(workoutResult);
  console.log("atsearch", workouts);
  }    
  
  useEffect(() => {
    setWorkouts(WorkoutData);
 }, []);
  
  
  return (
        <div>
        <h1 className="searchwork">Search Workout</h1>
<div className="search Workout">

  <input
    placeholder="search for workout"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
<img src={SearchIcon}
alt="search"
onClick={() => {
searchWorkouts(searchTerm)
console.log('workout size: ', workouts);
  console.log('click workout: ', searchTerm);
  //setWorkouts(searchWorkouts(searchTerm));
}}


/>



</div>


{workouts?.length > 0
  ? (
    <div className="container">
  {workouts.map((workout) => (
    <WorkoutCard workout={workout}/>
  ))}
</div>
  ) : (
    <div className="empty">
    <h2>No workouts found</h2>
    </div>
  )
}

  </div>
        
       
    );
}
export default Search;