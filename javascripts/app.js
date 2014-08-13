(function() {
  var ContestFactory, PlayerCtrl, PlayerFactory, RawTevPevCtrl, RawTexCtrl, ResultCtrl, SetUpCtrl, TabCtrl, TabFactory;

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
    this.checkClickerJudges = function() {
      var judge, newJudges, _i, _len, _ref;
      newJudges = [];
      _ref = this.clickerJudges;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        judge = _ref[_i];
        if (judge.name) {
          newJudges.push(judge);
        }
      }
      if (this.newClickerJudge.name) {
        newJudges.push(this.newClickerJudge);
      }
      this.newClickerJudge = {};
      return this.clickerJudges = newJudges;
    };
    this.checkEvaluationJudges = function() {
      var judge, newJudges, _i, _len, _ref;
      newJudges = [];
      _ref = this.evaluationJudges;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        judge = _ref[_i];
        if (judge.name) {
          newJudges.push(judge);
        }
      }
      if (this.newEvaluationJudge.name) {
        newJudges.push(this.newEvaluationJudge);
      }
      this.newEvaluationJudge = {};
      return this.evaluationJudges = newJudges;
    };
    return this;
  };

  PlayerFactory = function() {
    this.players = [
      {
        name: 'JIANG Shanzhen'
      }, {
        name: 'LIN Jiahe'
      }, {
        name: 'HE Haoxuan'
      }, {
        name: 'YU Zonglun'
      }
    ];
    this.checkPlayers = function() {
      var newPlayers, player, _i, _len, _ref;
      newPlayers = [];
      _ref = this.players;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        player = _ref[_i];
        if (player.name) {
          newPlayers.push(player);
        }
      }
      if (this.newPlayer.name) {
        newPlayers.push(this.newPlayer);
      }
      this.newPlayer = {};
      return this.players = newPlayers;
    };
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

  SetUpCtrl = function(ContestFactory) {
    this.contest = ContestFactory;
    return this;
  };

  PlayerCtrl = function(PlayerFactory) {
    this.player = PlayerFactory;
    return this;
  };

  RawTexCtrl = function(ContestFactory, PlayerFactory) {
    this.contest = ContestFactory;
    this.player = PlayerFactory;
    return this;
  };

  RawTevPevCtrl = function(ContestFactory, PlayerFactory) {
    this.contest = ContestFactory;
    this.player = PlayerFactory;
    return this;
  };

  ResultCtrl = function(ContestFactory, PlayerFactory) {
    this.contest = ContestFactory;
    this.player = PlayerFactory;
    return this;
  };

  angular.module('app', []).controller('TabCtrl', TabCtrl).controller('SetUpCtrl', SetUpCtrl).controller('PlayerCtrl', PlayerCtrl).controller('RawTexCtrl', RawTexCtrl).controller('RawTevPevCtrl', RawTevPevCtrl).controller('SetUpCtrl', SetUpCtrl).controller('ResultCtrl', ResultCtrl).factory('TabFactory', TabFactory).service('ContestFactory', ContestFactory).service('PlayerFactory', PlayerFactory);

}).call(this);
