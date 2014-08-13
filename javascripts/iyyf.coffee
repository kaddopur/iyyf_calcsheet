$ ->

  $('[data-toggle=tab]').click (e) ->
    e.preventDefault()
    e.stopPropagation()

    $('.tab-pane').removeClass('active')
    $('[data-toggle=tab]').parent().removeClass('active')

    $($(this).data('target')).addClass('active')
    $(this).parent().addClass('active')