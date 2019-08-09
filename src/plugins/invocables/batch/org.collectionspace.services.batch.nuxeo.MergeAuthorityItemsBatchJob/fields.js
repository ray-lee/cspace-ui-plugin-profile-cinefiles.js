export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    params: {
      targetCSID: {
        [config]: {
          view: {
            props: {
              source: 'citation/local,concept/genre,concept/theme,concept/associated,organization/local,organization/committee,person/local,place/local,location/local,work/local',
              showQuickAdd: false,
            },
          },
        },
      },
    },
  };
};
