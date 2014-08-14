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


ContestFactory = (PlayerFactory) ->
  contest = {}
  contest.clickerJudges = [
  ]
  contest.evaluationJudges = [
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
    this.cleanUpPlayerJudges()

  contest.checkEvaluationJudges = ->
    judgeList = []
    this.newEvaluationJudge ||= {}
    for judge in this.evaluationJudges
      judgeList.push(judge) if judge.name

    judgeList.push(this.newEvaluationJudge) if this.newEvaluationJudge.name
    this.newEvaluationJudge = {}
    this.evaluationJudges = judgeList
    this.cleanUpPlayerJudges()

  contest.cleanUpPlayerJudges = ->
    clickerJudgeName = (judge.name for judge in this.clickerJudges)
    evaluationJudgeName = (judge.name for judge in this.evaluationJudges)
    for player in PlayerFactory.players
      for judge, score of player.clicker
        delete player.clicker[judge] if clickerJudgeName.indexOf(judge) == -1
      for judge, score of player.givens
        delete player.givens[judge] if evaluationJudgeName.indexOf(judge) == -1

  contest.checkGivenTevValues = ->
    valueList = []
    this.newGivenTevValue ||= {}
    for tev in this.givenTevValues
      valueList.push(tev) unless this.isEmptyValue(tev)

    valueList.push(this.newGivenTevValue) unless this.isEmptyValue(this.newGivenTevValue)
    this.newGivenTevValue = {}
    this.givenTevValues = valueList
    this.getGivenAbbrs()
    this.cleanUpPlayerGiven()
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
    this.cleanUpPlayerGiven()
    this.getPointHash()

  contest.cleanUpPlayerGiven = ->
    for player in PlayerFactory.players
      for judge, score of player.givens
        for k, v of score
          delete player.givens[judge][k] if this.givenAbbrs.indexOf(k) == -1

      for k, v of player.avgGivens
        delete player.avgGivens[k] if this.givenAbbrs.indexOf(k) == -1

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

  contest.tevSum = ->
    sum = 0
    for tev in this.givenTevValues
      sum += parseInt(tev.point)
    sum

  contest.pevSum = ->
    sum = 0
    for pev in this.givenPevValues
      sum += parseInt(pev.point)
    sum

  contest.isEmptyValue = (value) ->
    not (value.name || value.abbr || value.point)

  contest


PlayerFactory = ->
  player = {}
  player.players = []

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
    totalMax = -999
    for player in this.players
      this.getRawTexTotal(player, judge) unless player.clicker[judge.name]
      totalMax = player.clicker[judge.name].total if player.clicker[judge.name].total > totalMax
    judge.texMax = totalMax

    for player in this.players
      player.clicker[judge.name].adjTotal = (player.clicker[judge.name].total / totalMax * 100) || 0
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

  this


RawTevPevCtrl = (ContestFactory, PlayerFactory) ->
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

  this


ResultCtrl = (ContestFactory, PlayerFactory) ->
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

  this.weightedTex = (player) ->
    player.weightedTex = player.tex * this.contest.clickerValue.point / this.contest.pointTotal

  this.weightedGiven = (player, given) ->
    player.avgGivens[given.abbr] * this.contest.pointHash[given.abbr] / 10

  this.weightedTev = (player) ->
    sum = 0
    for tev in this.contest.givenTevValues
      sum += this.weightedGiven(player, tev)
    player.weightedTev = sum

  this.weightedPev = (player) ->
    sum = 0
    for pev in this.contest.givenPevValues
      sum += this.weightedGiven(player, pev)
    player.weightedPev = sum

  this.totalScore = (player) ->
    player.totalScore = this.weightedTex(player) + this.weightedTev(player) + this.weightedPev(player)

  this.deductionScore = (player, deduction) ->
    -1 * parseInt(player.deductions[deduction.name] || 0) * parseInt(deduction.point)

  this.totalDeduction = (player) ->
    sum = 0
    for deduct in this.contest.deductionValues
      sum += this.deductionScore(player, deduct)
    totalDeduction = sum

  this.finalScore = (player) ->
    player.finalScore = this.totalScore(player) + this.totalDeduction(player)

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
