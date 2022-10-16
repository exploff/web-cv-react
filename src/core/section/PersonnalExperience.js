import { useTranslation } from 'react-i18next';
import Personnal from './fragment/Personnal';

function PersonnalExperience() {

  const { t } = useTranslation();

  return (
    <div className="section" id="perExperience">
        <div className="container cc-experience">
            <div className="h4 text-center mb-4 title">{t('personnalExperience.title')}</div>
            <Personnal title={t('personnalExperience.experiences.0.title')}
                description={t('personnalExperience.experiences.0.description')}
                pathImage={t('personnalExperience.experiences.0.pathImage')}/>
            <Personnal title={t('personnalExperience.experiences.1.title')}
                description={t('personnalExperience.experiences.1.description')}
                pathImage={t('personnalExperience.experiences.1.pathImage')}/>
            <Personnal title={t('personnalExperience.experiences.2.title')}
                description={t('personnalExperience.experiences.2.description')}
                pathImage={t('personnalExperience.experiences.2.pathImage')}/>
            <Personnal title={t('personnalExperience.experiences.3.title')}
                description={t('personnalExperience.experiences.3.description')}
                pathImage={t('personnalExperience.experiences.3.pathImage')}/>
        </div>
    </div>
  );
}

export default PersonnalExperience;
  