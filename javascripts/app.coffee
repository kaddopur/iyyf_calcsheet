TabFactory = ->
  tabs = [
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
  tabs


ContestFactory = ->
  contest = {}
  contest.name = 'TYYC14'
  contest.date = '2014-08-13'
  contest.divisionName = '1A'
  contest.clickerJudges = [
    {name: 'Jason Kao'}
    {name: 'Bambino Qiu'}
  ]
  contest.evaluationJudges = [
    {name: 'Bruce Lan'}
    {name: 'Leo Huang'}
    {name: 'Jason Huang'}
  ]
  contest.clickerValue = {
    name: 'Technical Execution'
    abbr: 'T.Ex'
    point: 60
  }
  contest.givenTevValues = [
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
  contest.givenPevValues = [
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
  contest.deductionValues = [
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

  contest.checkClickerJudges = ->
    judgeList = []
    this.newClickerJudge ||= {}
    for judge in this.clickerJudges
      judgeList.push(judge) if judge.name

    judgeList.push(this.newClickerJudge) if this.newClickerJudge.name
    this.newClickerJudge = {}
    this.clickerJudges = judgeList

  contest.checkEvaluationJudges = ->
    judgeList = []
    this.newEvaluationJudge ||= {}
    for judge in this.evaluationJudges
      judgeList.push(judge) if judge.name

    judgeList.push(this.newEvaluationJudge) if this.newEvaluationJudge.name
    this.newEvaluationJudge = {}
    this.evaluationJudges = judgeList

  contest.checkGivenTevValues = ->
    valueList = []
    this.newGivenTevValue ||= {}
    for tev in this.givenTevValues
      valueList.push(tev) unless this.isEmptyValue(tev)

    valueList.push(this.newGivenTevValue) unless this.isEmptyValue(this.newGivenTevValue)
    this.newGivenTevValue = {}
    this.givenTevValues = valueList
    this.getGivenAbbrs()
    this.getPointHash()

  contest.checkGivenPevValues = ->
    valueList = []
    this.newGivenPevValue ||= {}
    for pev in this.givenPevValues
      valueList.push(pev) unless this.isEmptyValue(pev)

    valueList.push(this.newGivenPevValue) unless this.isEmptyValue(this.newGivenPevValue)
    this.newGivenPevValue = {}
    this.givenPevValues = valueList
    this.getGivenAbbrs()
    this.getPointHash()

  contest.addNewClickerJudge = (e) ->
    this.checkClickerJudges() if e.keyCode == 13

  contest.addNewEvaluationJudge = (e) ->
    this.checkEvaluationJudges() if e.keyCode == 13

  contest.addNewTevValue = (e) ->
    this.checkGivenTevValues() if e.keyCode == 13

  contest.addNewPevValue = (e) ->
    this.checkGivenPevValues() if e.keyCode == 13

  contest.getGivenAbbrs = ->
    this.givenAbbrs = (tev.abbr for tev in this.givenTevValues).concat(pev.abbr for pev in this.givenPevValues)

  contest.getPointHash = ->
    pointHash = {}
    pointTotal = 0
    pointHash[this.clickerValue.abbr] = parseInt(this.clickerValue.point)
    pointTotal += pointHash[this.clickerValue.abbr]

    for tev in this.givenTevValues
      pointHash[tev.abbr] = parseInt(tev.point)
      pointTotal += pointHash[tev.abbr]

    for pev in this.givenPevValues
      pointHash[pev.abbr] = parseInt(pev.point)
      pointTotal += pointHash[pev.abbr]

    for deduct in this.deductionValues
      pointHash[deduct.name] = parseInt(deduct.point)

    this.pointHash = pointHash
    this.pointTotal = pointTotal

  contest.isEmptyValue = (value) ->
    not (value.name || value.abbr || value.point)

  contest


PlayerFactory = ->
  player = {}
  player.players = [
    {
      name: 'JIANG Shanzhen'
      deductions: {
        Stop: "1", 
        Discard: "2", 
        Cut: "3"
      }
      givens: { 
        "Bruce Lan": {
          CLN: "1"
          VAR: "2"
          RAR: "3"
          EXE: "4"
          MSC: "5"
          BDY: "6"
          SPC: "7"
          SHW: "8"
        }
        "Leo Huang": {
          CLN: "2"
          VAR: "3"
          RAR: "4"
          EXE: "5"
          MSC: "6"
          BDY: "7"
          SPC: "8"
          SHW: "9"
        }
        "Jason Huang": {
          CLN: "3"
          VAR: "4"
          RAR: "5"
          EXE: "6"
          MSC: "7"
          BDY: "8"
          SPC: "9"
          SHW: "10"
        }
      }
      clicker: {
        "Jason Kao": {
          plus: "80"
          minus: "2"
        }
        "Bambino Qiu": {
          plus: "60"
          minus: "2"
        }
      }
    }
    {name: 'LIN Jiahe'}
    {name: 'HE Haoxuan'}
    {name: 'YU Zonglun'}
  ]

  player.checkPlayers = ->
    playerList = []
    this.newPlayer ||= {}
    for player in this.players
      playerList.push(player) if player.name

    playerList.push(this.initPlayer(this.newPlayer)) if this.newPlayer.name

    this.newPlayer = {}
    this.players = playerList

  player.addNewPlayer = (e) ->
    this.checkPlayers() if e.keyCode == 13

  player.initPlayer = (player) ->
    player.clicker ||= {}
    player.deductions ||= {}
    player.givens ||= {}
    player.avgGivens ||= {}
    player

  player.getRawTexTotal = (player, judge) ->
    player.clicker[judge.name] ||= {}
    player.clicker[judge.name].total = (parseInt(player.clicker[judge.name].plus) || 0 ) - (parseInt(player.clicker[judge.name].minus) || 0)
    player.clicker[judge.name].total ||= 0
    this.getAdjTexTotal(judge)

  player.getAdjTexTotal = (judge) ->
    totalMax = 0
    for player in this.players
      this.getRawTexTotal(player, judge) unless player.clicker[judge.name]
      totalMax = player.clicker[judge.name].total if player.clicker[judge.name].total > totalMax
    judge.texMax = totalMax

    for player in this.players
      player.clicker[judge.name].adjTotal = player.clicker[judge.name].total / totalMax * 100
    this.getAvgTexTotal()

  player.getAvgTexTotal = ->
    for player in this.players
      judgeCount = 0
      texAvg = 0
      for judge, score of player.clicker
        texAvg += score.adjTotal
        judgeCount += 1
      texAvg /= judgeCount
      player.tex = texAvg

  player.getAvgGiven = (player, givenAbbr) ->
    givenAvg = 0
    judgeCount = 0
    for judge, score of player.givens
      givenAvg += parseInt(score[givenAbbr]) || 0
      judgeCount += 1
    givenAvg /= judgeCount
    player.avgGivens[givenAbbr] = givenAvg

  player.getAllAvgGiven = (player, givenAbbrs) ->
    for givenAbbr in givenAbbrs
      this.getAvgGiven(player, givenAbbr)
  player


TabCtrl = (TabFactory) ->
  this.onClickTab = (tab) ->
    this.currentTab = tab.url
  
  this.isActiveTab = (tabUrl) ->
    tabUrl == this.currentTab

  this.tabs = TabFactory
  this.currentTab = 'raw-tevpev.html'

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

  this.avgGivenTevSum = (currentPlayer) ->
    tevSum = 0
    tevAbbrs = (v.abbr for v in this.contest.givenTevValues)

    for abbr, point of currentPlayer.avgGivens
      tevSum += point if tevAbbrs.indexOf(abbr) > -1
    tevSum

  this.avgGivenPevSum = (currentPlayer) ->
    pevSum = 0
    pevAbbrs = (v.abbr for v in this.contest.givenPevValues)

    for abbr, point of currentPlayer.avgGivens
      pevSum += point if pevAbbrs.indexOf(abbr) > -1
    pevSum

  this.deductionSum = (player, deduction) ->
    player.deductions = {} unless player.deductions
    -1 * (parseInt(player.deductions[deduction.name]) || 0) * deduction.point

  this


MainCtrl = (ContestFactory, PlayerFactory) ->
  this.contest = ContestFactory
  this.player = PlayerFactory

  this.contest.getGivenAbbrs()
  this.contest.getPointHash()

  # init for raw-tex
  for judge in this.contest.clickerJudges
    for player in this.player.players
      this.player.initPlayer(player)
    for player in this.player.players
      this.player.getRawTexTotal(player, judge)
    this.player.getAdjTexTotal(judge)

  # init for raw-tevpev
  for judge in this.contest.evaluationJudges
    for player in this.player.players
      player.givens[judge.name] ||= {}

  for player in this.player.players
    this.player.getAllAvgGiven(player, this.contest.givenAbbrs)

angular
  .module('app', [])
  .controller('MainCtrl', MainCtrl)
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
