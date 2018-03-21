import { defineMessages } from 'react-intl';

export default {
  committee: {
    messages: defineMessages({
      name: {
        id: 'vocab.organization.committee.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Committee',
      },
      collectionName: {
        id: 'vocab.organization.committee.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Committees',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(committee)',
    },
  },
};
