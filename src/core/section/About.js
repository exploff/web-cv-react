import { useTranslation } from 'react-i18next';

function About() {

  const { t } = useTranslation();

  return (
    <div className="section" id="about">
      <div className="container">
        <div className="card" data-aos="fade-up" data-aos-offset="10">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">{t('about.title')}</div>
                <p>{t('about.description.0')}</p>
                <ul className="text-left">
                  <li>{t('about.description.1')}</li>
                  <li>{t('about.description.2')}</li>
                  <li>{t('about.description.3')}</li>
                  <li>{t('about.description.4')}</li>
                  <li>{t('about.description.5')}</li>
                </ul>
                <p>{t('about.description.6')}</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">{t('about.basicInformation')}</div>
                <div className="row">
                  <div className="col-sm-4"><strong className="text-uppercase">{t('about.age.0')}</strong></div>
                  <div className="col-sm-8">{t('about.age.1')}</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4"><strong className="text-uppercase">{t('about.email.0')}:</strong></div>
                  <div className="col-sm-8">{t('about.email.1')}</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4"><strong className="text-uppercase">{t('about.address.0')}</strong></div>
                  <div className="col-sm-8">{t('about.address.1')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
