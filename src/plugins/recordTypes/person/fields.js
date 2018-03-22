import { defineMessages } from 'react-intl';

export default (pluginContext) => {
  const {
    TermPickerInput,
    TextInput,
    OptionPickerInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  return {
    document: {
      'ns2:persons_cinefiles': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/person/local/cinefiles',
          },
        },
        birthCity: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_cinefiles.birthCity.name',
                defaultMessage: 'City of birth',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        birthState: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_cinefiles.birthState.name',
                defaultMessage: 'State of birth',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        accessCode: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_cinefiles.accessCode.name',
                defaultMessage: 'Publication access code',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'accessCodes',
              },
            },
          },
        },
      },
      'ns2:persons_common': {
        birthPlace: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'country',
              },
            },
          },
        },
      },
    },
  };
};
