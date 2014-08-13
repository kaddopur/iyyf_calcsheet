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
    this.contestDate = '2014-08-13';
    this.divisionName = '1A';
    this.newClickerJudge = {};
    this.clickerJudges = [
      {
        name: 'Jason Kao'
      }, {
        name: 'Bambino Qiu'
      }
    ];
    this.newEvaluationJudge = {};
    this.evaluationJudges = [
      {
        name: 'Bruce Lan'
      }, {
        name: 'Leo Huang'
      }, {
        name: 'Jason Huang'
      }
    ];
    this.clickerValue = {
      name: 'Technical Execution',
      abbr: 'T.Ex',
      point: 60
    };
    this.givenTevValues = [
      {
        name: 'Cleanliness',
        abbr: 'CLN',
        point: 5
      }, {
        name: 'Variation',
        abbr: 'VAR',
        point: 5
      }, {
        name: 'Rareness',
        abbr: 'RAR',
        point: 5
      }, {
        name: 'Execution',
        abbr: 'EXE',
        point: 5
      }
    ];
    this.givenPevValues = [
      {
        name: 'Music Use',
        abbr: 'MSC',
        point: 5
      }, {
        name: 'Body Control',
        abbr: 'BDY',
        point: 5
      }, {
        name: 'Space Use',
        abbr: 'SPC',
        point: 5
      }, {
        name: 'Showmanship',
        abbr: 'SHW',
        point: 5
      }
    ];
    this.deductionValues = [
      {
        name: 'Stop',
        point: 1
      }, {
        name: 'Discard',
        point: 3
      }, {
        name: 'Cut',
        point: 5
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
    this.addNewClickerJudge = function(e) {
      if (e.keyCode === 13) {
        return this.checkClickerJudges();
      }
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
    this.addNewEvaluationJudge = function(e) {
      if (e.keyCode === 13) {
        return this.checkEvaluationJudges();
      }
    };
    this.checkGivenTevValues = function() {
      var newValues, value, _i, _len, _ref;
      newValues = [];
      _ref = this.givenTevValues;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        value = _ref[_i];
        if (value.name || value.abbr || value.point) {
          newValues.push(value);
        }
      }
      if (this.newGivenTevValue.name || this.newGivenTevValue.abbr || this.newGivenTevValue.point) {
        newValues.push(this.newGivenTevValue);
      }
      this.newGivenTevValue = {};
      return this.givenTevValues = newValues;
    };
    this.checkGivenPevValues = function() {
      var newValues, value, _i, _len, _ref;
      newValues = [];
      _ref = this.givenPevValues;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        value = _ref[_i];
        if (value.name || value.abbr || value.point) {
          newValues.push(value);
        }
      }
      if (this.newGivenPevValue.name || this.newGivenPevValue.abbr || this.newGivenPevValue.point) {
        newValues.push(this.newGivenPevValue);
      }
      this.newGivenPevValue = {};
      return this.givenPevValues = newValues;
    };
    this.pointSum = function() {
      var sum, value, _i, _j, _len, _len1, _ref, _ref1;
      sum = 0;
      _ref = this.givenTevValues;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        value = _ref[_i];
        sum += parseInt(value.point) || 0;
      }
      _ref1 = this.givenPevValues;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        value = _ref1[_j];
        sum += parseInt(value.point) || 0;
      }
      sum += parseInt(this.clickerValue.point) || 0;
      return sum;
    };
    this.tevSum = function() {
      var sum, value, _i, _len, _ref;
      sum = 0;
      _ref = this.givenTevValues;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        value = _ref[_i];
        sum += parseInt(value.point) || 0;
      }
      return sum;
    };
    this.pevSum = function() {
      var sum, value, _i, _len, _ref;
      sum = 0;
      _ref = this.givenPevValues;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        value = _ref[_i];
        sum += parseInt(value.point) || 0;
      }
      return sum;
    };
    return this;
  };

  PlayerFactory = function() {
    this.players = [
      {
        name: 'JIANG Shanzhen',
        deductions: {
          Stop: "1",
          Discard: "2",
          Cut: "3"
        }
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
    this.addNewPlayer = function(e) {
      if (e.keyCode === 13) {
        return this.checkPlayers();
      }
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
    this.currentTab = 'raw-tex.html';
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
