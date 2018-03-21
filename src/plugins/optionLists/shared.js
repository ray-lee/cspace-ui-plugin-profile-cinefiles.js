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
          id: 'option.accessCodes.PFA Staff Only',
          defaultMessage: 'PFA staff only',
        },
        'In House Only': {
          id: 'option.accessCodes.In House Only',
          defaultMessage: 'In house only',
        },
        'Campus (UCB)': {
          id: 'option.accessCodes.Campus (UCB)',
          defaultMessage: 'Campus (UCB)',
        },
        'Education (*.edu)': {
          id: 'option.accessCodes.Education (*.edu)',
          defaultMessage: 'Education (*.edu)',
        },
        World: {
          id: 'option.accessCodes.World',
          defaultMessage: 'World',
        },
      }),
    },
  },
});
