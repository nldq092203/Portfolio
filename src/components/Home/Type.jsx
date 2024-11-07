import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from 'react-i18next';

function Type() {
  const { t } = useTranslation();
  return (
    <Typewriter
      options={{
        strings: [
          t('typewriter.engineeringStudent'),
          t('typewriter.webDeveloper'),
          t('typewriter.fullStackDeveloper'),
          t('typewriter.opportunitiesSeeker'),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;