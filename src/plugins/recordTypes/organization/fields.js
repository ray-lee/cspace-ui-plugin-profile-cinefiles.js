import { defineMessages } from 'react-intl';

export default (pluginContext) => {
  const {
    TextInput,
//     OptionPickerInput,
//     CheckboxInput,
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
        historyNotes: {
          historyNote: {
            [config]: {
              repeating: false,
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
                    defaultMessage: 'member',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            memberNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.organizations_cinefiles.memberNote.name',
                    defaultMessage: 'memberNote',
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
                    defaultMessage: 'memberAuthority',
                  },
                }),
                view: {
                  type: TextInput,
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
              type: TextInput,
            },
          },
        },
      },
    },
  };
};
