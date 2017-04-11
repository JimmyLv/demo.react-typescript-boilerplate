/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';

import enLocaleData = require('react-intl/locale-data/en');
import deLocaleData = require('react-intl/locale-data/de');

addLocaleData(enLocaleData);
addLocaleData(deLocaleData);

export const appLocales = [
  'en',
  'de',
];

const enTranslationMessages = require('./translations/en.json');
const deTranslationMessages = require('./translations/de.json');

export const formatTranslationMessages = (messages) => {
  const formattedMessages = {};
  for (const message of messages) {
    formattedMessages[message.id] = message.message || message.defaultMessage;
  }

  return formattedMessages;
};

export const translationMessages = {
  en: formatTranslationMessages(enTranslationMessages),
  de: formatTranslationMessages(deTranslationMessages),
};
