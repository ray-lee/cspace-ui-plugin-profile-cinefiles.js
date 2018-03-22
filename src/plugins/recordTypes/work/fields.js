import { defineMessages } from 'react-intl';
import { computeWorkDisplayName } from '../utils';

export default (pluginContext) => {
  const {
    CompoundInput,
    TermPickerInput,
    TextInput,
    AutocompleteInput,
    OptionPickerInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  return {
    document: {
      'ns2:works_cinefiles': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/work/local/cinefiles',
          },
        },
        genres: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          genre: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.works_cinefiles.genre.name',
                  defaultMessage: 'Genre',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/genre',
                },
              },
            },
          },
        },
        countries: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          country: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.works_cinefiles.country.name',
                  defaultMessage: 'Country',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'country',
                },
              },
            },
          },
        },
        languages: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          language: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.works_cinefiles.language.name',
                  defaultMessage: 'Language',
                },
              }),
              repeating: true,
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'language',
                },
              },
            },
          },
        },
        subjects: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          subject: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.works_cinefiles.subject.name',
                  defaultMessage: 'Subject',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/associated',
                },
              },
            },
          },
        },
        themes: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          theme: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.works_cinefiles.theme.name',
                  defaultMessage: 'Theme',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/theme',
                },
              },
            },
          },
        },
      },
      'ns2:works_common': {
        workTermGroupList: {
          workTermGroup: {
            [config]: {
              compute: computeWorkDisplayName,
            },
            termDisplayName: {
              [config]: {
                view: {
                  props: {
                    readOnly: true,
                  },
                },
                searchView: {
                  type: TextInput,
                  props: {
                    readOnly: false,
                  },
                },
              },
            },
            termQualifier: {
              [config]: {
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'articles',
                  },
                },
              },
            },
          },
        },
        publisherGroupList: {
          publisherGroup: {
            publisher: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,organization/local,organization/committee',
                  },
                },
              },
            },
            publisherType: {
              [config]: {
                defaultValue: 'urn:cspace:cinefiles.cspace.berkeley.edu:vocabularies:name(workpublishertype):item:name(productioncompany)\'Production Company\'',
              },
            },
          },
        },
        workType: {
          [config]: {
            defaultValue: 'urn:cspace:cinefiles.cspace.berkeley.edu:vocabularies:name(worktype):item:name(film)\'Film\'',
          },
        },
        creatorGroupList: {
          creatorGroup: {
            creator: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,organization/local,organization/committee',
                  },
                },
              },
            },
            creatorType: {
              [config]: {
                defaultValue: 'urn:cspace:cinefiles.cspace.berkeley.edu:vocabularies:name(workcreatortype):item:name(director)\'Director\'',
              },
            },
          },
        },
      },
    },
  };
};
