export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:citations_common': {
        citationRelatedTermsGroupList: {
          citationRelatedTermsGroup: {
            relatedTerm: {
              [config]: {
                view: {
                  props: {
                    source: 'concept/ethculture,concept/genre,concept/associated,concept/theme',
                  },
                },
              },
            },
          },
        },
      },
    },
  };
};
