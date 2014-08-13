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
  this.clickerValue = {
    name: 'Technical Execution'
    abbr: 'T.Ex'
    point: 60
  }
  this.givenTevValues = [
    {
      name: 'Cleanliness'
      abbr: 'CLN'
      point: 5
    }
    {
      name: 'Variation'
      abbr: 'VAR'
      point: 5
    }
    {
      name: 'Rareness'
      abbr: 'RAR'
      point: 5
    }
    {
      name: 'Execution'
      abbr: 'EXE'
      point: 5
    }
  ]
  this.givenPevValues = [
    {
      name: 'Music Use'
      abbr: 'MSC'
      point: 5
    }
    {
      name: 'Body Control'
      abbr: 'BDY'
      point: 5
    }
    {
      name: 'Space Use'
      abbr: 'SPC'
      point: 5
    }
    {
      name: 'Showmanship'
      abbr: 'SHW'
      point: 5
    }
  ]
  this.deductionValues = [
    {
      name: 'Stop'
      point: 1
    }
    {
      name: 'Discard'
      point: 3
    }
    {
      name: 'Cut'
      point: 5
    }
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

  this.checkGivenTevValues = ->
    newValues = [] 
    for value in this.givenTevValues
      newValues.push(value) if value.name || value.abbr || value.point

    newValues.push(this.newGivenTevValue) if this.newGivenTevValue.name || this.newGivenTevValue.abbr || this.newGivenTevValue.point
    this.newGivenTevValue = {}
    this.givenTevValues = newValues

  this.checkGivenPevValues = ->
    newValues = [] 
    for value in this.givenPevValues
      newValues.push(value) if value.name || value.abbr || value.point

    newValues.push(this.newGivenPevValue) if this.newGivenPevValue.name || this.newGivenPevValue.abbr || this.newGivenPevValue.point
    this.newGivenPevValue = {}
    this.givenPevValues = newValues

  this.pointSum = ->
    sum = 0
    for value in this.givenTevValues
      sum += (parseInt(value.point) || 0)

    for value in this.givenPevValues
      sum += (parseInt(value.point) || 0)

    sum += (parseInt(this.clickerValue.point) || 0)
    sum

  this.tevSum = ->
    sum = 0
    for value in this.givenTevValues
      sum += (parseInt(value.point) || 0)
    sum

  this.pevSum = ->
    sum = 0
    for value in this.givenPevValues
      sum += (parseInt(value.point) || 0)
    sum

  this


PlayerFactory = ->
  this.players = [
    {
      name: 'JIANG Shanzhen'
      deductions: {
        Stop: "1", 
        Discard: "2", 
        Cut: "3"
      }
    }
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
  this.currentTab = 'result.html'

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
