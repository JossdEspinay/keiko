import React, { ReactNode } from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';

import { flattenMessages } from 'services/i18n/intl';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import enMessages from 'translations/en.json';
import frMessages from 'translations/fr.json';
import Style from './Root.style';

const locales = {
  fr: flattenMessages(frMessages),
  en: flattenMessages(enMessages),
};

addLocaleData([...fr, ...en]);

interface Props {
  children: ReactNode;
}

const Root: React.FunctionComponent<Props> = ({ children }) => (

  <IntlProvider locale="fr" messages={locales.fr}>
    <Style.Wrapper>
      <Style.Header>
        <Style.HeaderWrapper>
          <Style.Logo
            src="https://fontmeme.com/permalink/190314/03655fc9c0c5ef371245622978eaa0a7.png"
            alt="pokemon-go-font"
          />
        </Style.HeaderWrapper>
      </Style.Header>
      {children}
    </Style.Wrapper>
  </IntlProvider>
);

export default Root;
