import { defineMessages } from 'react-intl';
import { computeMediaTitle } from './utils';

export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    Immutable,
  } = configContext.lib;

  const {
    DATA_TYPE_INT,
  } = configContext.dataTypes;

  return {
    document: {
      [config]: {
        compute: args => computeMediaTitle(args, Immutable),
      },
      'ns2:media_common': {
        identificationNumber: {
          [config]: {
            required: false,
          },
        },
        title: {},
      },
      'ns2:media_cinefiles': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/media/local/cinefiles',
          },
        },
        page: {
          [config]: {
            required: true,
            cloneable: false,
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.media_cinefiles.page.name',
                defaultMessage: 'Page number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
    },
  };
};
