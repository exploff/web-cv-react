import { useTranslation } from 'react-i18next';

function Skills() {

  const { t } = useTranslation();

  return (
    <div className="section" id="skills">
        <div className="container">
            <div className="h4 text-center mb-4 title">{t('skills.title')}</div>
            <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                    <div className="progress-container progress-primary"><span className="progress-badge">Java / Jakarta EE</span>
                        <div className="progress">
                        <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%"}}></div><span className="progress-value">85%</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="progress-container progress-primary"><span className="progress-badge">Docker / Kubernetes</span>
                        <div className="progress">
                        <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div><span className="progress-value">75%</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <div className="progress-container progress-primary"><span className="progress-badge">React JS / Angular JS</span>
                        <div className="progress">
                        <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "65%"}}></div><span className="progress-value">65%</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="progress-container progress-primary"><span className="progress-badge">PHP</span>
                        <div className="progress">
                        <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div><span className="progress-value">80%</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <div className="progress-container progress-primary"><span className="progress-badge">C / C++</span>
                        <div className="progress">
                        <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}></div><span className="progress-value">60%</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="progress-container progress-primary"><span className="progress-badge">Liferay</span>
                        <div className="progress">
                        <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div><span className="progress-value">75%</span>
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

export default Skills;
  