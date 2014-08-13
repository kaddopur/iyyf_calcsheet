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
  this.divisionName = '1A'
  this.clickerJudges = [
    {name: 'Jason Kao'}
    {name: 'Bambino Qiu'}
  ]
  this.evaluationJudges = [
    {name: 'Bruce Lan'}
    {name: 'Leo Huang'}
    {name: 'Jason Huang'}
  ]
  this


TabCtrl = (TabFactory) ->
  this.onClickTab = (tab) ->
    this.currentTab = tab.url
  
  this.isActiveTab = (tabUrl) ->
    tabUrl == this.currentTab

  this.tabs = TabFactory.tabs
  this.currentTab = 'set-up.html'

  this


MainCtrl = (ContestFactory) ->
  this.contest = ContestFactory

  this.checkClickerJudges = ->
    newJudges = [] 
    for judge in this.contest.clickerJudges
      newJudges.push(judge) if judge.name

    newJudges.push(this.contest.newClickerJudge) if this.contest.newClickerJudge.name
    this.contest.newClickerJudge = {}
    this.contest.clickerJudges = newJudges


  this.checkEvaluationJudges = ->
    newJudges = [] 
    for judge in this.contest.evaluationJudges
      newJudges.push(judge) if judge.name

    newJudges.push(this.contest.newEvaluationJudge) if this.contest.newEvaluationJudge.name
    this.contest.newEvaluationJudge = {}
    this.contest.evaluationJudges = newJudges

  this


angular
  .module('app', [])
  .controller('TabCtrl', TabCtrl)
  .controller('MainCtrl', MainCtrl)
  .factory('TabFactory', TabFactory)
  .service('ContestFactory', ContestFactory)
