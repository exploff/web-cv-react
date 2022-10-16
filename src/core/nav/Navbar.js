import { useTranslation } from 'react-i18next';

function Navbar() {

    const { t } = useTranslation();

    return (
        <header>
            <div className="profile-page sidebar-collapse">
                <nav className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary" color-on-scroll="400">
                <div className="container">
                    <div className="navbar-translate">
                        <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-bar bar1"></span><span className="navbar-toggler-bar bar2"></span><span className="navbar-toggler-bar bar3"></span></button>
                        </div>
                        <div className="collapse navbar-collapse justify-content-end" id="navigation">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link smooth-scroll" href="#about">{t('navbar.0')}</a></li>
                            <li className="nav-item"><a className="nav-link smooth-scroll" href="#skills">{t('navbar.1')}</a></li>
                            <li className="nav-item"><a className="nav-link smooth-scroll" href="#proExperience">{t('navbar.2')}</a></li>
                            <li className="nav-item"><a className="nav-link smooth-scroll" href="#perExperience">{t('navbar.3')}</a></li>
                            <li className="nav-item"><a className="nav-link smooth-scroll" href="#education">{t('navbar.4')}</a></li>
                            <li className="nav-item"><a className="nav-link smooth-scroll" href="#contact">{t('navbar.5')}</a></li>
                        </ul>
                    </div>
                </div>
                </nav>
            </div>
        </header>
    );
  }
  
  export default Navbar;
  