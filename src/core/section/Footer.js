

import { useTranslation } from 'react-i18next';

function Footer() {

  const { t } = useTranslation();

  return (
    <footer className="footer">
        <div className="h4 title text-center">{t('footer.title')}</div>
        <div className="text-center text-muted">
            <p>{t('footer.conditions')}</p>
        </div>
    </footer>
  );
}

export default Footer;
  