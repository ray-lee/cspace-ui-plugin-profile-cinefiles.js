export default {
  popup: {
    subresource: (recordData) => {
      const mimeType = recordData && recordData.getIn(['document', 'ns2:blobs_common', 'mimeType']);

      return ((mimeType && mimeType.startsWith('image/')) ? 'derivativeOriginalJpeg' : 'original');
    },
  },
};
