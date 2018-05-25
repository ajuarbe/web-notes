let put = document.querySelector('_put');

put.addEventListener('click', putNote);


function deleteNote(id) {
  let ajaxRequest = {
    url: '/notes/' + id,
    method: 'delete',
    success: window.location.reload()
  };
  $.ajax(ajaxRequest);
}
function putNote(id) {
  put.value;
  let ajaxRequest = {
    url: '/notes/' + id,
    method: 'put',
    success: window.location.reload()
  }
}