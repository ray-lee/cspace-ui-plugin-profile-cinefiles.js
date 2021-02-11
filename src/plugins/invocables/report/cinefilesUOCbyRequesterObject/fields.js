import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    TextInput,
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    params: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      Requester: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.cinefilesUOCbyRequesterObject.Requester.name',
              defaultMessage: 'Requester',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'person/local,person/shared,organization/local,organization/shared,organization/committee',
              showQuickAdd: false,
            },
          },
        },
      },
      ObjectNumber: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.cinefilesUOCbyRequesterObject.ObjectNumber.name',
              defaultMessage: 'Object number',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
    },
  };
};
