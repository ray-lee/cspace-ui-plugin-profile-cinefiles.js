import { defineMessages } from 'react-intl';

// FIXME: Plugins shouldn't have to import react-intl, since this unnecessarily increases the size
// when built as a standalone package. Instead, defineMessages should be supplied in the
// pluginContext. But this means that messages won't be extracted by the Babel plugin, since it
// only operates on files that import react-intl.

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
      temporary: {
        id: 'option.recordStatuses.temporary',
        defaultMessage: 'Temporary',
      },
      new: {
        id: 'option.recordSratuses.new',
        defaultMessage: 'New',
      },
      'in-process': {
        id: 'option.recordStatuses.in-process',
        defaultMessage: 'In process',
      },
      approved: {
        id: 'option.recordStatuses.approved',
        defaultMessage: 'Approved',
      },
      'review-media': {
        id: 'option.recordStatuses.review-media',
        defaultMessage: 'Review media',
      },
    }),
  },
};
