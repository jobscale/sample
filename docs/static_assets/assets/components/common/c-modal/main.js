document.addEventListener('DOMContentLoaded', function () {
  MicroModal.init({
    disableScroll: true,
    disableFocus: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
    onClose: (function (modal) {
      var nodelist = modal.querySelectorAll('.c-modal__movie__source');
      var node = Array.prototype.slice.call(nodelist);
      node.forEach(function (iframe) {
        iframe.setAttribute('src', iframe.getAttribute('src'));
      });
    })
  });
}());