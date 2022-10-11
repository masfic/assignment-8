import React from 'react';
import './Exercise.css'

const Exercise = ({ item, handleAddToList }) => {
    const { id, name, desc, age, img, time } = item
    return (
        <div className='exercise-card'>
            <img src={img} alt='Gym'></img>
            <div className='info'>
                <p className='name'>{name}</p>
                <p className='text'>Details: <span> </span>{desc}</p>
                <p className='text'>Required Age: {age}</p>
                <p className='text'>Time Required: {time}s</p>
            </div>
            <button onClick={() => handleAddToList(item)} className='btn-text'>
                <p>Add to List</p>
            </button>
        </div>
    );
};

export default Exercise;