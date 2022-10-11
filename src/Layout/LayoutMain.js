import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart/Cart';
import Exercise from '../components/Exercise/Exercise';
import './LayoutMain.css';

const LayoutMain = () => {
    const [exercise, setExercise] = useState([])
    const [cart, setCart] = useState([])



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercise(data))
    }, [])

    const handleAddToList = (ex) => {

        const newCart = [...cart, ex]
        setCart(newCart)

    }
    return (
        <div className='layout'>
            <div className='exercise-container'>
                {
                    exercise.map(item => <Exercise
                        key={item.id}
                        item={item}
                        handleAddToList={handleAddToList}
                    ></Exercise>)
                }
            </div>
            <div className='info-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default LayoutMain;