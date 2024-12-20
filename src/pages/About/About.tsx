import React from 'react';
import './About.css'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="project-container">
      <h2>{t('about.title')}</h2>
      <p>{t('about.description')}</p>
      <p>{t('about.goal')}</p>
    </div>
  );
};

export default About;
