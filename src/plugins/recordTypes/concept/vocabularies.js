import { defineMessages } from 'react-intl';

export default {
  genre: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.genre.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Genre',
      },
      collectionName: {
        id: 'vocab.concept.genre.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Genres',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(genre)',
    },
  },
  theme: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.theme.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Theme',
      },
      collectionName: {
        id: 'vocab.concept.theme.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Themes',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(theme)',
    },
  },
};
