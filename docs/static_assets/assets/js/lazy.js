(function () {
  var Lazyload = function Lazyload() {
    if (!window.lozad) return;
    const observer = lozad('.js-lazy', {
      rootMargin: '0% 0% 15% 0%',
      load: function(el) {
        el.src = el.getAttribute('data-src');
        el.onload = function() {
          el.classList.add('js-lazy-fade')
        }
      }
    });
    observer.observe();
  };
  Lazyload();
})();