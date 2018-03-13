import { defineMessages } from 'react-intl';

export default (pluginContext) => {
  const {
    TextInput,
    OptionPickerInput,
    AutocompleteInput,
    TermPickerInput,
    CompoundInput,
  } = pluginContext.inputComponents;


  const {
    configKey: config,
  } = pluginContext.configHelpers;

//   const {
    // DATA_TYPE_INT,
    // DATA_TYPE_BOOL,
//   } = pluginContext.dataTypes;

  return {
    document: {
      'ns2:organizations_common': {
        foundingPlace: {
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
      'ns2:organizations_cinefiles': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/organization/local/cinefiles',
          },
        },
        foundingState: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.organizations_cinefiles.foundingState.name',
                defaultMessage: 'Founding state',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        foundingCity: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.organizations_cinefiles.foundingCity.name',
                defaultMessage: 'Founding city',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        memberGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          memberGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.organizations_cinefiles.memberGroup.name',
                  defaultMessage: 'Members',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            member: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.organizations_cinefiles.member.name',
                    defaultMessage: 'Name',
                  },
                  fullName: {
                    id: 'field.organizations_cinefiles.member.fullName',
                    defaultMessage: 'Member name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local',
                  },
                },
              },
            },
            memberNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.organizations_cinefiles.memberNote.name',
                    defaultMessage: 'Note',
                  },
                  fullName: {
                    id: 'field.organizations_cinefiles.memberNote.fullName',
                    defaultMessage: 'Member note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            memberAuthority: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.organizations_cinefiles.memberAuthority.name',
                    defaultMessage: 'Authority',
                  },
                  fullName: {
                    id: 'field.organizations_cinefiles.memberAuthority.fullName',
                    defaultMessage: 'Member authority',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'citation/local',
                  },
                },
              },
            },
          },
        },
        accessCode: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.organizations_cinefiles.accessCode.name',
                defaultMessage: 'accessCode',
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
    },
  };
};
