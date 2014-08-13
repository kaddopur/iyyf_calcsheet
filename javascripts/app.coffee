TabFactory = ->
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

  this


ContestFactory = ->
  this.contestName = 'TYYC14'
  this.contestDate = '2014-08-13'
  this.divisionName = '1A'
  this.newClickerJudge = {}
  this.clickerJudges = [
    {name: 'Jason Kao'}
    {name: 'Bambino Qiu'}
  ]
  this.newEvaluationJudge = {}
  this.evaluationJudges = [
    {name: 'Bruce Lan'}
    {name: 'Leo Huang'}
    {name: 'Jason Huang'}
  ]


  this.checkClickerJudges = ->
    newJudges = [] 
    for judge in this.clickerJudges
      newJudges.push(judge) if judge.name

    newJudges.push(this.newClickerJudge) if this.newClickerJudge.name
    this.newClickerJudge = {}
    this.clickerJudges = newJudges

  this.addNewClickerJudge = (e) ->
    this.checkClickerJudges() if e.keyCode == 13

  this.checkEvaluationJudges = ->
    newJudges = [] 
    for judge in this.evaluationJudges
      newJudges.push(judge) if judge.name

    newJudges.push(this.newEvaluationJudge) if this.newEvaluationJudge.name
    this.newEvaluationJudge = {}
    this.evaluationJudges = newJudges

  this.addNewEvaluationJudge = (e) ->
    this.checkEvaluationJudges() if e.keyCode == 13

  this


PlayerFactory = ->
  this.players = [
    {name: 'JIANG Shanzhen'}
    {name: 'LIN Jiahe'}
    {name: 'HE Haoxuan'}
    {name: 'YU Zonglun'}
  ]

  this.checkPlayers = ->
    newPlayers = [] 
    for player in this.players
      newPlayers.push(player) if player.name

    newPlayers.push(this.newPlayer) if this.newPlayer.name
    this.newPlayer = {}
    this.players = newPlayers

  this.addNewPlayer = (e) ->
    this.checkPlayers() if e.keyCode == 13

  this


TabCtrl = (TabFactory) ->
  this.onClickTab = (tab) ->
    this.currentTab = tab.url
  
  this.isActiveTab = (tabUrl) ->
    tabUrl == this.currentTab

  this.tabs = TabFactory.tabs
  this.currentTab = 'set-up.html'

  this


SetUpCtrl = (ContestFactory) ->
  this.contest = ContestFactory
  this


PlayerCtrl = (PlayerFactory) ->
  this.player = PlayerFactory
  this


RawTexCtrl = (ContestFactory, PlayerFactory) ->
  this.contest = ContestFactory
  this.player = PlayerFactory
  this


RawTevPevCtrl = (ContestFactory, PlayerFactory) ->
  this.contest = ContestFactory
  this.player = PlayerFactory
  this


ResultCtrl = (ContestFactory, PlayerFactory) ->
  this.contest = ContestFactory
  this.player = PlayerFactory
  this


angular
  .module('app', [])
  .controller('TabCtrl', TabCtrl)
  .controller('SetUpCtrl', SetUpCtrl)
  .controller('PlayerCtrl', PlayerCtrl)
  .controller('RawTexCtrl', RawTexCtrl)
  .controller('RawTevPevCtrl', RawTevPevCtrl)
  .controller('SetUpCtrl', SetUpCtrl)
  .controller('ResultCtrl', ResultCtrl)
  .factory('TabFactory', TabFactory)
  .service('ContestFactory', ContestFactory)
  .service('PlayerFactory', PlayerFactory)
