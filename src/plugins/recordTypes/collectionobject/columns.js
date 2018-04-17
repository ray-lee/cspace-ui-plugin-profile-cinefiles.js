import { defineMessages } from 'react-intl';

export default () => ({
  default: {
    title: {
      disabled: true,
    },
    docDisplayName: {
      messages: defineMessages({
        label: {
          id: 'column.collectionobject.cinefiles.docDisplayName',
          defaultMessage: 'Display name',
        },
      }),
      order: 20,
      sortBy: 'collectionobjects_cinefiles:docTitle',
      width: 275,
    },
  },
  narrow: {
    title: {
      disabled: true,
    },
    docDisplayName: {
      messages: defineMessages({
        label: {
          id: 'column.collectionobject.cinefiles.docDisplayName',
          defaultMessage: 'Display name',
        },
      }),
      order: 20,
      sortBy: 'collectionobjects_cinefiles:docTitle',
      width: 400,
    },
  },
});
