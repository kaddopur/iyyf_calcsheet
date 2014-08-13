(function() {
  $(function() {
    return $('[data-toggle=tab]').click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('.tab-pane').removeClass('active');
      $('[data-toggle=tab]').parent().removeClass('active');
      $($(this).data('target')).addClass('active');
      return $(this).parent().addClass('active');
    });
  });

}).call(this);
