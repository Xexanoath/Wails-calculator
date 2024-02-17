import { useState } from 'react';
import './App.css';

function App ()
{

    const [ display, setDisplay ] = useState( '' );

    function appendToDisplay ( value: string )
    {
        return () =>
        {
            setDisplay( display + value );
        }
    }
    function calculate ()
    {
        return () =>
        {   try {
            setDisplay( eval( display ) );
        } catch (error) {
            setDisplay( 'Invalid math' );
        }
        }}
    function clearDisplay ()
    {
        return () =>
        {   
            setDisplay( '' );
        }   
    }
    return (
        <div id="App">
            <div id='calculator'>
                <input id="display" readOnly value={display}/>
                <div id='keys'>
                    <button onClick={ appendToDisplay( '+' ) } className="operator-btn">+</button>
                    <button onClick={ appendToDisplay( '7' ) }>7</button>
                    <button onClick={ appendToDisplay( '8' ) }>8</button>
                    <button onClick={ appendToDisplay( '9' ) }>9</button>
                    <button onClick={ appendToDisplay( '-' ) }  className="operator-btn">-</button>
                    <button onClick={ appendToDisplay( '4' ) }>4</button>
                    <button onClick={ appendToDisplay( '5' ) }>5</button>
                    <button onClick={ appendToDisplay( '6' ) }>6</button>
                    <button onClick={ appendToDisplay( '*' ) }  className="operator-btn">*</button>
                    <button onClick={ appendToDisplay( '1' ) }>1</button>
                    <button onClick={ appendToDisplay( '2' ) }>2</button>
                    <button onClick={ appendToDisplay( '3' ) }>3</button>
                    <button onClick={ appendToDisplay( '/' ) }  className="operator-btn">/</button>
                    <button onClick={ appendToDisplay( '0' ) }>0</button>
                    <button onClick={ appendToDisplay( '.' ) }  >.</button> 
                    <button onClick={ calculate() }  className="operator-btn">=</button>
                    <button onClick={ clearDisplay() }  className="operator-btn">C</button>
                    
                </div>

            </div>
        </div>
    )
}

export default App
