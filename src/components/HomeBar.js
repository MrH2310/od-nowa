import {Link} from 'react-scroll';

import HomePic from '../assets/home_bar_pic2.jpg';

const HomeBar = () => {
    return (
        <div className='home' style={{
            backgroundImage: `url(${HomePic})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}>
            <div className='home-info'>
                <h2>Klinika urody i relaksu</h2>
                <h1>Od Nowa</h1>
                <p>Pozwół zadbać o swoje piękno!</p>
                <Link to='contact' smoot={true} duration={800} className='to-contact'>Kontakt</Link>
            </div>
        </div>
    )
};

export default HomeBar;