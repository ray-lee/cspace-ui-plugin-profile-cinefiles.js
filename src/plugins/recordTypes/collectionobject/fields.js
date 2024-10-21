import { defineMessages } from 'react-intl';
import { computeDocDisplayName } from '../utils';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    OptionPickerInput,
    TextInput,
    TermPickerInput,
    CheckboxInput,
    URLInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:collectionobjects_cinefiles': {
        [config]: {
          compute: computeDocDisplayName,
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/local/cinefiles',
          },
        },
        docTitleArticle: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.docTitleArticle.name',
                defaultMessage: 'Article',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'articles',
              },
            },
          },
        },
        docTitle: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.docTitle.name',
                defaultMessage: 'Name',
              },
              fullName: {
                id: 'field.collectionobjects_cinefiles.docTitle.fullName',
                defaultMessage: 'Title name',
              },
            }),
            required: true,
            view: {
              type: TextInput,
            },
          },
        },
        docDisplayName: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.docDisplayName.name',
                defaultMessage: 'Display name',
              },
            }),
            searchView: {
              type: TextInput,
            },
            view: {
              type: TextInput,
              props: {
                readOnly: true,
              },
            },
          },
        },
        docType: {
          [config]: {
            defaultValue: 'urn:cspace:cinefiles.cspace.berkeley.edu:vocabularies:name(doctype):item:name(2)\'article\'',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.docType.name',
                defaultMessage: 'Document type',
              },
            }),
            required: true,
            view: {
              type: TermPickerInput,
              props: {
                source: 'doctype',
              },
            },
          },
        },
        source: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.source.name',
                defaultMessage: 'Source',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'organization/local',
              },
            },
          },
        },
        pageInfo: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.pageInfo.name',
                defaultMessage: 'Original pagination',
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
                id: 'field.collectionobjects_cinefiles.accessCode.name',
                defaultMessage: 'Access code override',
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
        hasCastCr: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasCastCr.name',
                defaultMessage: 'Cast cr.',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasTechCr: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasTechCr.name',
                defaultMessage: 'Tech cr.',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasBoxInfo: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasBoxInfo.name',
                defaultMessage: 'Box office',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasFilmog: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasFilmog.name',
                defaultMessage: 'Filmography',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasBiblio: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasBiblio.name',
                defaultMessage: 'Bibliography',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasDistCo: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasDistCo.name',
                defaultMessage: 'Dist. co.',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasProdCo: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasProdCo.name',
                defaultMessage: 'Prod. co.',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasCostInfo: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasCostInfo.name',
                defaultMessage: 'Cost info',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        hasIllust: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_cinefiles.hasIllust.name',
                defaultMessage: 'With illus.',
              },
            }),
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput,
            },
          },
        },
        docLanguages: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          docLanguage: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_cinefiles.docLanguage.name',
                  defaultMessage: 'Document language',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'languages',
                },
              },
            },
          },
        },
        nameSubjects: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          nameSubject: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_cinefiles.nameSubject.name',
                  defaultMessage: 'Name subject',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,organization/local,organization/committee',
                },
              },
            },
          },
        },
        filmSubjects: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          filmSubject: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_cinefiles.filmSubject.name',
                  defaultMessage: 'Film subject',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'work/local',
                },
              },
            },
          },
        },
        docSubjects: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          docSubject: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_cinefiles.docSubject.name',
                  defaultMessage: 'Document subject',
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
      },
      'ns2:collectionobjects_common': {
        objectNumber: {
          [config]: {
            view: {
              props: {
                source: 'document,stills',
              },
            },
          },
        },
        collection: {
          [config]: {
            defaultValue: 'urn:cspace:cinefiles.cspace.berkeley.edu:vocabularies:name(collection):item:name(cinefiles)\'CineFiles\'',
            view: {
              type: TermPickerInput,
              props: {
                source: 'collection',
              },
            },
          },
        },
        responsibleDepartments: {
          responsibleDepartment: {
            [config]: {
              defaultValue: 'urn:cspace:cinefiles.cspace.berkeley.edu:vocabularies:name(department):item:name(pfalibrary)\'PFA Library\'',
              view: {
                type: TermPickerInput,
                props: {
                  source: 'department',
                },
              },
            },
          },
        },
        referenceGroupList: {
          referenceGroup: {
            reference: {
              [config]: {
                view: {
                  props: {
                    source: 'organization/local',
                  },
                },
              },
            },
            referenceNote: {
              [config]: {
                view: {
                  type: URLInput,
                },
              },
            },
          },
        },
        contentConcepts: {
          contentConcept: {
            [config]: {
              view: {
                props: {
                  source: 'concept/associated,concept/genre',
                },
              },
            },
          },
        },
        contentOrganizations: {
          contentOrganization: {
            [config]: {
              view: {
                props: {
                  source: 'organization/local,organization/committee',
                },
              },
            },
          },
        },
        objectProductionPersonGroupList: {
          objectProductionPersonGroup: {
            objectProductionPersonRole: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'productionpersonrole',
                  },
                },
                defaultValue: 'urn:cspace:cinefiles.cspace.berkeley.edu:vocabularies:name(productionpersonrole):item:name(author)\'Author\'',
              },
            },
          },
        },
        objectCountGroupList: {
          [config]: {
            messages: defineMessages({
              required: {
                id: 'field.collectionobjects_common.objectCountGroupList.required',
                defaultMessage: 'Number of pages is required. Please enter a value.',
              },
            }),
            required: true,
          },
          objectCountGroup: {
            objectCount: {
              [config]: {
                required: true,
              },
            },
          },
        },
      },
    },
  };
};
