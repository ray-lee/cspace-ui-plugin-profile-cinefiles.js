import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      termStatus: {
        disabled: true,
      },
      creator: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.works.default.creator',
            defaultMessage: 'Creator',
          },
        }),
        order: 30,
        sortBy: 'works_common:creatorGroupList/0/creator',
        width: 250,
      },
    },
  };
};
