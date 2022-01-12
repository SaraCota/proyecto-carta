import React from 'react';
import './App.css';

class App extends React.Component {
    render(){
        return(
            <div className="letter">
                <div className="content">
                    <h1>Escribe tu carta!</h1>
                    <p className='small-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue nibh, ullamcorper ac eros quis, faucibus tincidunt quam. Nullam ac nisl rhoncus, posuere elit eget, rhoncus purus. Ut ultricies a metus ac dapibus. </p>
                    <form className='letter-form'>
                        <input type="text" placeholder='Destinatario'></input>
                        <input type="text" placeholder='Tu nombre'></input>
                        <textarea id='message' name='message' rows='5' cols='50'></textarea>
                    </form>
                    <div className='food-elements'>
                        <div className='food-category'>Platillo</div>
                        <div className='food-items'>2</div>
                        <div className='food-category'>Bebida</div>
                        <div className='food-items'>4</div>
                        <div className='food-category'>Postre</div>
                        <div className='food-items'>6</div>
                    </div>
                </div>
            </div>
        );
    };
}

export default App;