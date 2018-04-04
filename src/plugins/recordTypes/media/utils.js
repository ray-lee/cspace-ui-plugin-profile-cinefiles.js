/* eslint-disable import/prefer-default-export */

export const computeMediaTitle = ({ data, subrecordData }, Immutable) => {
  const blobCommonData = subrecordData.getIn(['blob', 'document', 'ns2:blobs_common']);
  const page = data.getIn(['ns2:media_cinefiles', 'page']);
  const name = blobCommonData.get('name');
  const fileList = blobCommonData.get('file');

  const fileName = fileList && fileList.length > 0 ? fileList[0].name : null;
  const title = [name, page, fileName].filter(part => !!part).join(' ');

  return Immutable.fromJS({
    'ns2:media_common': {
      title,
    },
  });
};
