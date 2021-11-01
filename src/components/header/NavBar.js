import {Link} from 'react-scroll';

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <p className='logo'>Od Nowa</p>
            <a href='#home'>Strona główna</a>
            <Link to='about-us' smooth={true} duration={200}>O nas</Link>
            <a href='#procedures'>Zabiegi</a>
            <a href='#pricelist'>Cennik</a>
            <Link to='contact' smooth={true} duration={1000}>Kontakt</Link>
        </div>
    )
};

export default NavBar;