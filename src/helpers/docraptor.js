const getPdf = () => {
  var bodyFormData = new FormData();
  bodyFormData.append('user_credentials', 'YOUR_API_KEY_HERE');
  bodyFormData.append('doc[test]', true);
  bodyFormData.append('doc[type]', 'pdf');
  bodyFormData.append(
    'doc[document_content]',
    '<div><h3>Hello</h3><h2>HI</h2></div>'
  );

  axios({
    method: 'post',
    url: 'https://docraptor.com/docs/',
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
    responseType: 'blob',
  })
    .then(function (response) {
      let blob = new Blob([response.data], {
        type: 'application/pdf',
      });
      saveAs(blob, 'report.pdf');
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
};
