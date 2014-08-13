(function() {
  var ContestFactory, MainCtrl, TabCtrl, TabFactory;

  TabFactory = function() {
    this.tabs = [
      {
        title: 'SET-UP',
        url: 'set-up.html'
      }, {
        title: 'PLAYER',
        url: 'player.html'
      }, {
        title: 'RAW-TEx',
        url: 'raw-tex.html'
      }, {
        title: 'RAW-TEvPEv',
        url: 'raw-tevpev.html'
      }, {
        title: 'Result',
        url: 'result.html'
      }
    ];
    return this;
  };

  ContestFactory = function() {
    this.contestName = 'TYYC14';
    this.divisionName = '1A';
    this.clickerJudges = [
      {
        name: 'Jason Kao'
      }, {
        name: 'Bambino Qiu'
      }
    ];
    this.evaluationJudges = [
      {
        name: 'Bruce Lan'
      }, {
        name: 'Leo Huang'
      }, {
        name: 'Jason Huang'
      }
    ];
    return this;
  };

  TabCtrl = function(TabFactory) {
    this.onClickTab = function(tab) {
      return this.currentTab = tab.url;
    };
    this.isActiveTab = function(tabUrl) {
      return tabUrl === this.currentTab;
    };
    this.tabs = TabFactory.tabs;
    this.currentTab = 'set-up.html';
    return this;
  };

  MainCtrl = function(ContestFactory) {
    this.contest = ContestFactory;
    this.checkClickerJudges = function() {
      var judge, newJudges, _i, _len, _ref;
      newJudges = [];
      _ref = this.contest.clickerJudges;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        judge = _ref[_i];
        if (judge.name) {
          newJudges.push(judge);
        }
      }
      if (this.contest.newClickerJudge.name) {
        newJudges.push(this.contest.newClickerJudge);
      }
      this.contest.newClickerJudge = {};
      return this.contest.clickerJudges = newJudges;
    };
    this.checkEvaluationJudges = function() {
      var judge, newJudges, _i, _len, _ref;
      newJudges = [];
      _ref = this.contest.evaluationJudges;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        judge = _ref[_i];
        if (judge.name) {
          newJudges.push(judge);
        }
      }
      if (this.contest.newEvaluationJudge.name) {
        newJudges.push(this.contest.newEvaluationJudge);
      }
      this.contest.newEvaluationJudge = {};
      return this.contest.evaluationJudges = newJudges;
    };
    return this;
  };

  angular.module('app', []).controller('TabCtrl', TabCtrl).controller('MainCtrl', MainCtrl).factory('TabFactory', TabFactory).service('ContestFactory', ContestFactory);

}).call(this);
