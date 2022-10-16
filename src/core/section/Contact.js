import { useTranslation } from 'react-i18next';

function Contact() {

  const { t } = useTranslation();

  return (
    <div className="section" id="contact">
        <div className="cc-contact-information">
            <div className="container">
                <div className="cc-contact">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="card mb-0" data-aos="zoom-in">
                                <div className="h4 text-center title">{t('contact.title')}</div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-2 ">
                                        <p><strong>{t('contact.email')}</strong></p>
                                    </div>
                                    <div className="col-6">
                                        <p>{t('contact.emailValue')}</p>
                                    </div>
                                    <div className="col-4">
                                        <div className="row d-flex justify-content-evenly">
                                            <div className="col">
                                                <a className="cc-github btn btn-link" target="_blank" rel="noreferrer" href="https://github.com/exploff">
                                                    <i className="fa fa-github"></i>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a className="cc-linkedin btn btn-link" target="_blank" rel="noreferrer" href="https://linkedin.com/in/julien-bedia">
                                                    <i className="fa fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;
  