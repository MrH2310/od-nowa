import AdressIco from '../assets/location.svg';
import ContactIco from '../assets/contact.svg';
import SocialsIco from '../assets/socials.svg';

const Contact = () => {
    return(
        <>
            <div className='contact-banner' id='contact'>
                <div className='adress'>
                    <img src={AdressIco} alt='adress'/>
                    <p>ul. Małgorzacka 8, 06-400 Ciechanów</p>
                    <p>Pon - pt 10:00 - 20:00</p>
                    <p>Sobota 10:00 - 15:00</p>
                </div>
                <div className='contact'>
                    <img src={ContactIco} alt='phone'/>
                    <p>Komórka: 501 657 694</p>
                    <p>adress@gmail.com</p>
                </div>
                <div className='socials'>
                    <img src={SocialsIco} alt='social media'/>
                    <a href="https://www.facebook.com/Klinika-Urody-i-Relaksu-Od-Nowa-104174671462394/?ref=page_internal">Facebook</a>
                </div>
            </div>
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Ma%C5%82gorzacka%208,%2006-400%20Ciechan%C3%B3w&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title='company-adress'></iframe>
                </div>
            </div>
        </>    
    )
};

export default Contact;