import React, { useState } from 'react';
import './main.css';
import Slider from "../Slider/Slider";
import SimpleMap from "../GoogleMap/googleMap";
import Footer from '../Footer/footer';
import ScrollTop from '../ScrollTop/scrollTop';
import useWindowDimensions from '../hooks/useWindowDimensions';

const Main = () => {
    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {    
       if (!showScroll && window.pageYOffset > 400){
          setShowScroll(true)    
       } else if (showScroll && window.pageYOffset <= 400){
          setShowScroll(false)    
       }  
    };
    window.addEventListener('scroll', checkScrollTop);
    return (
    <div className="main">
        <div id="services" className="slider">
            <Slider />
        </div>
        <div className="content_container">
            <div id="employees" className="employees">

            <div className="title_container">
                <span className="title">Про персонал</span>
            </div>
            <div className="employee_cards">
                <div className="employee_card">
                    <img className="card_img" src="https://tvojarabota.pl/img/e29b722e35040b88678e25a1ec032a21.jpg" alt="employee" />
                    <div className="employee_text">
                            <span className="employee_name">Анатолій</span>
                            <span className="employee_about">Заправщик зі стажем у 5 років.</span> 
                            <span className="employee_about">Всім задоволений та справно виконує свою роботу.</span>
                    </div>
                </div>
                <div className="employee_card">
                    <img className="card_img" src="https://tvojarabota.pl/img/98994c4349015b8585779bf0ea5b4618.jpg" alt="employee" />
                    <div className="employee_text">
                            <span className="employee_name">Валерій</span>
                            <span className="employee_about">Заправщик зі стажем у 27 років.</span> 
                            <span className="employee_about">За такий довгий період роботи, не мав ніяких скарг та проблем.</span>
                    </div>
                </div>
                <div className="employee_card">
                    <img className="card_img" src="https://tvojarabota.pl/img/29282505fa1675d9c26d7ad4868b8727.jpg" alt="employee" />
                    <div className="employee_text">
                            <span className="employee_name">Людмила</span>
                            <span className="employee_about">Касир зі стажем у 3 роки.</span> 
                            <span className="employee_about">Швидко та оперативно проб'є ваш товар.</span>
                    </div>
                </div>
            </div>
            </div>

            <div id="aboutUs" className="aboutAss">
                <div className="title_container">
                    <span className="title">Про нас</span>
                </div>
                <div className="aboutAss_wrapper"> 
                    <div className="about_us_container">
                        <div className="about_us_content">  
                            <div className="about_us_text">
                                <div className="about_us_perevags about_us_smth">

                                        <span className="bullets"> - Відносно низькі ціни</span>   
                                        <span className="bullets"> - Вигідне розміщення</span>    
                                        <span className="bullets"> - Вбудований міні-магазин</span>
                                </div>

                                <div className="about_us_problems">
                                    <span className="bullets"> - Швидкий перекус в дорозі</span> 
                                    <span className="bullets"> - Місце відпочинку</span>
                                    <span className="bullets"> - Дешева заправка</span>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="googleMap">
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d663.2894998819648!2d25.90822088521219!3d48.31904332696805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473407b4335964d7%3A0xa2658b35dfa64537!2z0ITQstGA0L4g0J3QsNGE0YLQsCAo0JXQstGA0L4g0J3QsNGE0YLQsCk!5e0!3m2!1suk!2sua!4v1635958033222!5m2!1suk!2sua" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
        </div>
        
           <Footer />
        </div>
        {
            showScroll ? <ScrollTop /> : null
        }
        
    </div>)
}

export default Main;