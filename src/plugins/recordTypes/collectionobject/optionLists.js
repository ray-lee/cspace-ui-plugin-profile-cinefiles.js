import { defineMessages } from 'react-intl';

export default {
  recordStatuses: {
    values: [
      'temporary',
      'new',
      'in-process',
      'approved',
      'review-media',
    ],
    messages: defineMessages({
      'review-media': {
        id: 'option.recordStatuses.review-media',
        defaultMessage: 'review media',
      },
    }),
  },
};
