import './index.scss'
import Whats from '../../assets/images/icons/whatsappIcon.svg'

export default function Whatsapp(){

    const handleCardClick = () => {
        const url = 'https://wa.me/+5511993673706?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20Don%20Corleone%27s%20Pizza%20';
        window.open(url, '_blank');
    };

    return(
        <main className='cardWhats' onClick={handleCardClick}>
            <div className='whatsicon'>
                <img src={Whats} alt='whatsapp icon'/>
            </div>
            <div className='direitaWhats'>
                <h3>Precisa de Ajuda?</h3>
                <p>Considere falar com nossa equipe via Whatsapp.</p>
            </div>
        </main>
    )
}