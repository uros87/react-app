import axios from 'axios';
import { saveAs } from 'file-saver';
import moment from 'moment';

export const createPdf = (id) => {
  let markup = document.querySelector(`#${id}`);

  var bodyFormData = new FormData();
  bodyFormData.append('user_credentials', 'YOUR_API_KEY_HERE');
  bodyFormData.append('doc[test]', true);
  bodyFormData.append('doc[type]', 'pdf');
  bodyFormData.append('doc[document_content]', markup.innerHTML);

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
      saveAs(blob, `report-${moment().format('YYYY-MM-DD')}.pdf`);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
};
