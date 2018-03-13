import { defineMessages } from 'react-intl';

/**
 * This plugin provides option lists that are shared by multiple record types. Option lists that
 * are used by only one record type are defined in the plugin for that record type.
 */
export default () => ({
  optionLists: {
    accessCodes: {
      values: [
        'PFA Staff Only',
        'In House Only',
        'Campus (UCB)',
        'Education (*.edu)',
        'World',
      ],
      messages: defineMessages({
        'PFA Staff Only': {
          id: 'option.collections.PFA Staff Only',
          defaultMessage: 'PFA Staff Only',
        },
        'In House Only': {
          id: 'option.collections.In House Only',
          defaultMessage: 'In House Only',
        },
        'Campus (UCB)': {
          id: 'option.collections.Campus (UCB)',
          defaultMessage: 'Campus (UCB)',
        },
        'Education (*.edu)': {
          id: 'option.collections.Education (*.edu)',
          defaultMessage: 'Education (*.edu)',
        },
        World: {
          id: 'option.collections.World',
          defaultMessage: 'World',
        },
      }),
    },
  },
});
