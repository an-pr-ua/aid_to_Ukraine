import PageMain from "./PageMain";

function Footer() {
    return(
        <div className="footer">
            <div className="footer-left">
                <h1>Запит на додаткову 
інформацію</h1>
<p>Якщо ви не знайшли інформацію, яка вас цікавить, заповніть, будь ласка, форму за посиланням нижче. Ми надішлемо відповідь на вашу електронну пошту.</p>
<a href=""><img src="images/state-layer (8).png" alt="bottun-qu-info"/></a>
            </div>
            <div className="footer-right">
                <h1>Контакти</h1>
                <h4>Контактний номер</h4>
                <p>+380 (96) 052 72 91</p>
                <h4>Email</h4>
                <p>3232605@gmail.com</p>
                <h4>Адреса</h4>
                <p>м. Харків, вул. Повздовжня, 4</p> 
                <div className="block-logo">
                    <a href=""><img src="images/Group.png" alt="fb-logo"/></a>
                    <a href=""><img src="images/Group1.png" alt="inst-logo"/></a>
                    <a href=""><img src="images/Vector (2).png" alt="twit-logo"/></a>
                    <a href=""><img src="images/Vector4.png" alt="tel-logo"/></a>
                </div>
            </div>
        </div>

    );
    
}

export default Footer;