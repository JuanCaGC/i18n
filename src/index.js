import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";

const userLanguage = "es";

const localeMessages = {
    "es": localeEsMessages,
    "en": localeEnMessages,
    // Agrega otros idiomas según sea necesario
  };
ReactDOM.render(
    <IntlProvider locale={userLanguage} messages= {localeMessages[userLanguage]}>
            <JobsList/>
    </IntlProvider>, document.getElementById("root")
); 