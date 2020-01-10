import { defineMessages } from 'react-intl';
import { computeMediaTitle } from './utils';

export default (configContext) => {
  const {
    TextInput,
    OptionPickerInput,
    CheckboxInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_INT,
    DATA_TYPE_BOOL,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:media_common': {
        identificationNumber: {
          [config]: {
            required: false,
          },
        },
        title: {
          [config]: {
            compute: computeMediaTitle,
          },
        },
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
      'ns2:media_piction': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/media',
          },
        },
        primaryDisplay: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.media_piction.primaryDisplay.name',
                defaultMessage: 'Primary display',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        websiteDisplayLevel: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.media_piction.websiteDisplayLevel.name',
                defaultMessage: 'Website display level',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'websiteDisplayLevels',
              },
            },
          },
        },
        imageNumber: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.media_piction.imageNumber.name',
                defaultMessage: 'Image number',
              },
            }),
            required: true,
            view: {
              type: TextInput,
            },
          },
        },
        pictionId: {
          [config]: {
            dataType: DATA_TYPE_INT,
            readOnly: true,
          },
        },
        pictionImageHash: {
          [config]: {
            readOnly: true,
          },
        },
      },
    },
  };
};
