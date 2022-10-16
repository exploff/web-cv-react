import { useTranslation } from 'react-i18next';
import School from './fragment/School';

function Education() {

  const { t } = useTranslation();

  return (
    <div className="section" id="education">
        <div className="container cc-education">
            <div className="h4 text-center mb-4 title">{t('education.title')}</div>
                <School level={t('education.schools.0.level')} 
                    date={t('education.schools.0.date')} 
                    school={t('education.schools.0.school')} 
                    title={t('education.schools.0.title')} 
                    description={t('education.schools.0.description')} />
                <School level={t('education.schools.1.level')} 
                    date={t('education.schools.1.date')} 
                    school={t('education.schools.1.school')} 
                    title={t('education.schools.1.title')} 
                    description={t('education.schools.1.description')} />
                <School level={t('education.schools.2.level')} 
                    date={t('education.schools.2.date')} 
                    school={t('education.schools.2.school')} 
                    title={t('education.schools.2.title')} 
                    description={t('education.schools.2.description')} />
                <School level={t('education.schools.3.level')} 
                    date={t('education.schools.3.date')} 
                    school={t('education.schools.3.school')} 
                    title={t('education.schools.3.title')} 
                    description={t('education.schools.3.description')} />
                <School level={t('education.schools.4.level')} 
                    date={t('education.schools.4.date')} 
                    school={t('education.schools.4.school')} 
                    title={t('education.schools.4.title')} 
                    description={t('education.schools.4.description')} />
        </div>
    </div>
  );
}

export default Education;
  