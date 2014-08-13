TabCtrl = ->
  this.onClickTab = (tab) ->
    this.currentTab = tab.url
  
  this.isActiveTab = (tabUrl) ->
    tabUrl == this.currentTab

  this.tabs = [
    {
      title: 'SET-UP'
      url: 'set-up.html'
    }
    {
      title: 'PLAYER'
      url: 'player.html'
    }
    {
      title: 'RAW-TEx',
      url: 'raw-tex.html'
    }
    {
      title: 'RAW-TEvPEv',
      url: 'raw-tevpev.html'
    }
    {
      title: 'Result',
      url: 'result.html'
    }
  ]

  this.currentTab = 'set-up.html'





angular
  .module('app', [])
  .controller('TabCtrl', TabCtrl)
