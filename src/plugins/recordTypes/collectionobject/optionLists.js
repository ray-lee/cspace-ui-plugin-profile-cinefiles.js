import { defineMessages } from 'react-intl';

// FIXME: Plugins shouldn't have to import react-intl, since this unnecessarily increases the size
// when built as a standalone package. Instead, defineMessages should be supplied in the
// pluginContext. But this means that messages won't be extracted by the Babel plugin, since it
// only operates on files that import react-intl.

export default {
  departments: {
    values: [
      'pfalibrary',
    ],
    messages: defineMessages({
      pfalibrary: {
        id: 'option.departments.pfalibrary',
        defaultMessage: 'PFA Library',
      },
    }),
  },
  collections: {
    values: [
      'cinefiles',
      'pfastills',
    ],
    messages: defineMessages({
      cinefiles: {
        id: 'option.collections.cinefiles',
        defaultMessage: 'CineFiles',
      },
      pfastills: {
        id: 'option.collections.pfastills',
        defaultMessage: 'PFA stills',
      },
    }),
  },
};
