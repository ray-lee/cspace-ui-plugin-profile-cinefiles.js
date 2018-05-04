import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatTimestamp,
  } = configContext.formatHelpers;

  return {
    default: {
      identificationNumber: {
        disabled: true,
      },
      page: {
        messages: defineMessages({
          label: {
            id: 'column.media.default.page',
            defaultMessage: 'Page number',
          },
        }),
        order: 20,
        sortBy: 'media_cinefiles:page',
        width: 100,
      },
      title: {
        width: 480,
      },
    },
    narrow: {
      page: {
        messages: defineMessages({
          label: {
            id: 'column.media.narrow.page',
            defaultMessage: 'Page',
          },
        }),
        order: 10,
        sortBy: 'media_cinefiles:page',
        width: 100,
      },
      title: {
        messages: defineMessages({
          label: {
            id: 'column.media.narrow.title',
            defaultMessage: 'Title',
          },
        }),
        order: 20,
        sortBy: 'media_common:title',
        width: 550,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.media.default.updatedAt',
            defaultMessage: 'Updated',
          },
        }),
        order: 30,
        sortBy: 'collectionspace_core:updatedAt',
        width: 150,
      },
    },
  };
};
