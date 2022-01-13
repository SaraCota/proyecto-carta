import React from 'react';
import '../style.css';

class App extends React.Component {
    render(){
        return(
            <div className="letter">
                <div className="content rounded-lg container">
                    <div className='container intro'>
                        <h1>¡Escribe tu carta!</h1>
                        <p className='small-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue nibh, ullamcorper ac eros quis, faucibus tincidunt quam. Nullam ac nisl rhoncus, posuere elit eget, rhoncus purus. Ut ultricies a metus ac dapibus. </p>
                        <form className='letter-form w-1024 md:w-768 sm:w-640'>
                            <input className='w-30 sm:w-200' type="text" placeholder='Destinatario'></input>
                            <input type="text" placeholder='Tu nombre'></input>
                            <textarea id='message' name='message' rows='5' cols='80'></textarea>
                            <p style={{color:'gray'}}>Mensaje</p>
                        </form>
                    </div>
                    <div className='food-elements container' id='platillos'>
                        <div className='food-category'>Platillo</div>
                        <div className='food-items'>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                        </div>
                        <div className='food-category'>Bebida</div>
                        <div className='food-items'>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                        <div className='food-category'>Postre</div>
                        <div className='food-items'>
                            <div>1</div>
                            <div>2</div>
                        </div>
                    </div>
                    <div className='section-3'>
                        <div className='fonts container grid grid-cols-3 place-items-center' id='fuentes'>
                            <div id='typo1'>Verdana</div>
                            <div id='typo2'>Times New Roman</div>
                            <div id='typo3'>Arial</div>
                        </div>
                        <div className='backgrounds grid grid-cols-5 place-items-center' id='fondos'>
                            <div id='bkg1'></div>
                            <div id='bkg2'></div>
                            <div id='bkg3'></div>
                            <div id='bkg4'></div>
                            <div id='bkg5'></div>
                        </div>
                    </div>
                </div>
                <button className='submit-button'>ENVIAR</button>
            </div>
        );
    };
}

export default App;