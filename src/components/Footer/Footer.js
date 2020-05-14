import React from 'react';

function Footer() {
    return (
        <div className="bg-dark footer-main">
            <div className="footer-main-div">
                <p className="footer-text">&copy; {new Date().getFullYear()} <span className="wb-title">Food</span>
                    It. <span className="footer-author">Designed By Jimoh Rildwan Adekunle</span>
                </p>
                <p className="footer-icon">
                    <a href="https://www.facebook.com/profile.php?id=100007507815563" target="_blank" rel="noopener noreferrer"> 
                        <img src="https://img.icons8.com/color/24/000000/facebook-new.png" alt="fb-icon" />
                    </a>&nbsp; &nbsp;
                    <a href="https://twitter,com/JnrJimoh?s=09" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/color/24/000000/twitter.png" alt="twitter-icon"/>
                    </a>&nbsp; &nbsp;
                    <a href="https://www.linkedin.com/in/jimoh-rildwan-adekunle-" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/color/24/000000/linkedin.png" alt="linkedin" />
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Footer;
