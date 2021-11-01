import AboutUsPic from '../assets/Od_nowa_about_us.jpg';

const AboutUs = () => {
    return(
        <div className='about-us' id='about-us'>
            <img src={AboutUsPic} alt='our brand'/>
            <div className='info-about-us'>
                <h1>O nas</h1>
                <span/>         
                <p>Od nowa to połączenie dwóch niezwykle zdolnych kobiet, wkładających całą swoją pasję w pracę, która przekłada się na najwyższy poziom wykonywanych zabiegów.
                   Wasze oczekiwania i satysfakcja to nasz priorytet w codziennej pracy. W naszym salonie stawiamy na bezwzględną jakość wykonywanych usług. 
                   Bez przerwy dążymy do doskonałości idąc za nowymi trendami – szkolimy się po to by każdy zabieg był wykonany perfekcyjnie i dał zamierzone rezultaty, 
                   a co za tym idzie szkolenia odbywają się tylko i wyłącznie pod okiem ekspertów praktyków z zakresu kosmetologii i medycyny estetycznej.
                </p>
                <button className='to-procedures'>Zabiegi</button>
            </div>
        </div>
    )
};

export default AboutUs;