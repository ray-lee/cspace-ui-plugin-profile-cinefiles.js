const template = (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  const {
    Field,
  } = pluginContext.recordComponents;

  return (
    <Field name="document">
      <Field
        name="relation-list-item"
        subpath="rel:relations-common-list"
        showChildren={false}
        showSiblings={false}
      />

      <Field name="foundingPlace" />
      <Field name="foundingDateGroup" />
      <Field name="accessCode" subpath="ns2:organizations_cinefiles" />
    </Field>
  );
};

export default pluginContext => ({
  template: template(pluginContext),
});

