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
        orgTermGroupList: {
          orgTermGroup: {
            termStatus: {
              [config]: {
                defaultValue: 'provisional',
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
                defaultMessage: 'Foundation state',
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
                defaultMessage: 'Foundation city',
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
                  defaultMessage: 'Member',
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
    },
  };
};
