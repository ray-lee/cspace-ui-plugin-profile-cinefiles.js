/* global cspaceUIPluginProfileCineFiles */
/* The cspaceUIPluginProfileCineFiles global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import messages from './messages';
import plugins from './plugins';
import logo from '../images/logo.png';
import styles from '../styles/cspace-ui-plugin-profile/cinefiles.css';

module.exports = () => ({
  logo,
  messages,
  className: styles.common,
  prettyUrls: true,
  tenantId: '50',
  pluginInfo: {
    cspaceUIPluginProfileCineFiles: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileCineFiles.name',
          defaultMessage: 'CineFiles profile',
        },
      }),
      version: cspaceUIPluginProfileCineFiles.packageVersion,
    },
  },
  recordTypes: {
    citation: {
      vocabularies: {
        worldcat: {
          disabled: true,
        },
      },
    },
    concept: {
      vocabularies: {
        material: {
          disabled: true,
        },
        activity: {
          disabled: true,
        },
      },
    },
    organization: {
      vocabularies: {
        ulan: {
          disabled: true,
        },
      },
    },
    location: {
      vocabularies: {
        offsite: {
          disabled: true,
        },
      },
    },
    person: {
      vocabularies: {
        ulan: {
          disabled: true,
        },
      },
    },
    place: {
      vocabularies: {
        tgn: {
          disabled: true,
        },
      },
    },
    work: {
      vocabularies: {
        cona: {
          disabled: true,
        },
      },
    },
  },
  plugins: plugins.map(plugin => plugin()),
});
