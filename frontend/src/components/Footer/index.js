import React from 'react';
import "./footer.css"

function Footer() {
    return (
        <footer id='footer-outer-wrapper'>
            <div id='footer-inner-wrapper'>
                <div id='footer-lists-wrapper'>
                    <div id='footer-column-about' className='footer-column'>
                        <div className='footer-column-title-wrapper'>
                            <span id='footer-about-title' className='footer-column-title'>About</span>
                        </div>

                        <ul id='footer-column-ul-about' className='footer-column-ul'>
                            <li className='footer-column-li'>
                                <a className='footer-link' href='https://github.com/calvinlieu/StairBnB' target='_blank' rel='noreferrer'>About StairBnB</a>
                            </li>
                        </ul>
                    </div>

                    <div id='footer-column-developers' className='footer-column'>
                        <div className='footer-column-title-wrapper'>
                            <span id='footer-developers-title' className='footer-column-title'>Developer</span>
                        </div>

                        <ul id='footer-column-ul-developers' className='footer-column-ul'>
                            <li className='footer-column-li'>
                                <a className='linked-in' href='https://www.linkedin.com/in/calvin-lieu-3049b4228/' target='_blank' rel='noreferrer'>
                                    <i className="fa-brands fa-linkedin fa-sm" />
                                </a>
                                <a className='github' href='https://github.com/calvinlieu' target='_blank' rel='noreferrer'>
                                    <i className="fa-brands fa-github fa-sm" />
                                </a>
                                <a className='portfolio' href='https://calvinlieu.github.io/' target='_blank' rel='noreferrer'>
                                    <span className='footer-dev-name'>Calvin Lieu</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id='footer-column-languages-countries' className='footer-column'>
                        <div id='footer-languages-title-wrapper' className='footer-column-title-wrapper'>
                            <span id='footer-languages-title' className='footer-column-title'>Language</span>
                        </div>

                        <span className='footer-languages-countries-span'>English</span>


                        <div id='footer-countries-title-wrapper' className='footer-column-title-wrapper'>
                            <span id='footer-countries-title' className='footer-column-title'>Country</span>
                        </div>

                        <span className='footer-languages-countries-span'>United States</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;