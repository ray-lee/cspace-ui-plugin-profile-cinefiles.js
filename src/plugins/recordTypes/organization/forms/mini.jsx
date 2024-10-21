const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

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

export default (configContext) => ({
  template: template(configContext),
});
