import { useTranslation } from 'react-i18next';

function Header() {

  const { t } = useTranslation();

  return (
    <div className="profile-page">
      <div className="wrapper">
        <div className="page-header page-header-small" filter-color="green">
          <div className="page-header-image" data-parallax="true"></div>
          <div className="container">
            <div className="content-center">
              <div className="cc-profile-image"><img src={process.env.PUBLIC_URL + '/images/julien.jpg'} alt="Background header"/></div>
              <div className="h2 title">{t('header.name')}</div>
              <p className="category text-white">{t('header.job')}</p>
              <a className="btn btn-primary smooth-scroll mr-2" target="_blank" rel="noreferrer" href={process.env.PUBLIC_URL + '/files/BEDIAJULIENCV.pdf'} data-aos="zoom-in" data-aos-anchor="data-aos-anchor">{t('header.button.cv')}</a>
              <a className="btn btn-primary" href="#contact" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">{t('header.button.contact')}</a>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="button-container">
                <a className="btn btn-default btn-round btn-lg btn-icon" target="_blank" rel="noreferrer tooltip" href="https://linkedin.com/in/julien-bedia" title={t('header.tooltip.linkedin')}>
                  <i className="fa fa-linkedin"></i>
                </a>
                <a className="btn btn-default btn-round btn-lg btn-icon" target="_blank" rel="noreferrer tooltip" href="https://github.com/exploff" title={t('header.tooltip.github')}>
                  <i className="fa fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
  