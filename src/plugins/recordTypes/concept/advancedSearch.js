export default (pluginContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
  } = pluginContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = pluginContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_CONTAIN,
        path: 'ns2:concepts_common/conceptTermGroupList/conceptTermGroup/termDisplayName',
      },
      {
        op: OP_EQ,
        path: 'ns2:concepts_common/conceptTermGroupList/conceptTermGroup/termStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:concepts_common/conceptTermGroupList/conceptTermGroup/termLanguage',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
