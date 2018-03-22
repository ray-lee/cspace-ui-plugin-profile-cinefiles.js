const template = (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  const {
    Row,
  } = pluginContext.layoutComponents;

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

      <Row>
        <Field name="foundingPlace" />
        <Field name="foundingDateGroup" />
      </Row>

      <Field name="accessCode" subpath="ns2:organizations_cinefiles" />
    </Field>
  );
};

export default pluginContext => ({
  template: template(pluginContext),
});

