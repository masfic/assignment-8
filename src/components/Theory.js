import React from 'react';
import './Theory.css'


const Theory = () => {
    return (
        <div className='theory-all'>
            <div className='theory'>
                <h2 h2 class="qus" > How react js works?</h2 >
                <p class="ans">
                    ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.

                </p>
            </div >
            <div className='theory'>
                <h2 class="qus">How useEffect works</h2>
                <p class="ans">
                    By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

                </p>
            </div>


            <div className='theory'>
                <h2 class="qus">Props vs state difference</h2>
                <p class="ans">
                    The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.
                </p>
            </div>

            <div className='theory'>
                information source : Google
            </div>


        </div >
    );
};

export default Theory;