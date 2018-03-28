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
        <Field name="birthPlace" />
        <Field name="birthDateGroup" />
      </Row>

      <Field name="accessCode" subpath="ns2:persons_cinefiles" />
    </Field>
  );
};

export default pluginContext => ({
  template: template(pluginContext),
});
