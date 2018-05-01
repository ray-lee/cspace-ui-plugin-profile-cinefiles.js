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
        <Field name="workTermGroupList">
          <Field name="workTermGroup">
            <Field name="termDisplayName" />
          </Field>
        </Field>

        <Field name="creatorGroupList">
          <Field name="creatorGroup">
            <Field name="creator" />
          </Field>
        </Field>
      </Row>

      <Field name="countries" subpath="ns2:works_cinefiles">
        <Field name="country" />
      </Field>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
