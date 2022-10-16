import { useTranslation } from 'react-i18next';
import Work from './fragment/Work';

function WorkExperience() {

  const { t } = useTranslation();

  return (
    <div className="section" id="proExperience">
        <div className="container cc-experience">
            <div className="h4 text-center mb-4 title">{t('workExperience.title')}</div>

            <Work title={t('workExperience.experiences.0.title')} 
                company={t('workExperience.experiences.0.company')}
                date={t('workExperience.experiences.0.date')} 
                description={t('workExperience.experiences.0.description')}
                competences={t('workExperience.experiences.0.competences')}/>
            <Work title={t('workExperience.experiences.1.title')} 
                company={t('workExperience.experiences.1.company')}
                date={t('workExperience.experiences.1.date')} 
                description={t('workExperience.experiences.1.description')}
                competences={t('workExperience.experiences.1.competences')}/>
        </div>
    </div>
  );
}

export default WorkExperience;
  