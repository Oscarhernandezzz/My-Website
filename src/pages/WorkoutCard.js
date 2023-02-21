import React from 'react'

const WorkoutCard = ({ workout }) => {
    return (
        <div className="workout">
  <div>
     <p>{workout.Type}</p>
  </div>
  <div>
    <img src={workout.Poster !== 'N/A' ? workout.Poster : 'https//via.placeholder.com/400'} alt={workout.Name}/>
  </div>

<div>
<span>{workout.Type2}</span> 
  <h3>{workout.Name}</h3>
</div>
</div>
    );
}
export default WorkoutCard;