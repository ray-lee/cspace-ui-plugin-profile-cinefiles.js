import { defineMessages } from 'react-intl';

export default {
  committee: {
    messages: defineMessages({
      name: {
        id: 'vocab.organization.committee.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Committees',
      },
      collectionName: {
        id: 'vocab.organization.committee.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Committees',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(organization)',
    },
    sortOrder: 0,
  },
};
