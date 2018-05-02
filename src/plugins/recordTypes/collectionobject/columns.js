import { defineMessages } from 'react-intl';

export default () => ({
  default: {
    title: {
      disabled: true,
    },
    docDisplayName: {
      messages: defineMessages({
        label: {
          id: 'column.collectionobject.default.docDisplayName',
          defaultMessage: 'Display name',
        },
      }),
      order: 20,
      sortBy: 'collectionobjects_cinefiles:docTitle',
      width: 450,
    },
  },
  narrow: {
    title: {
      disabled: true,
    },
    docDisplayName: {
      messages: defineMessages({
        label: {
          id: 'column.collectionobject.narrow.docDisplayName',
          defaultMessage: 'Display name',
        },
      }),
      order: 20,
      sortBy: 'collectionobjects_cinefiles:docTitle',
      width: 450,
    },
  },
});
