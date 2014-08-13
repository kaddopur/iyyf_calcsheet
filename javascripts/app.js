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
    this.newPlayer = {};
    this.players = [
      {
        name: 'JIANG Shanzhen',
        deductions: {
          Stop: "1",
          Discard: "2",
          Cut: "3"
        },
        givens: {
          "Bruce Lan": {
            CLN: "1",
            VAR: "2",
            RAR: "3",
            EXE: "4",
            MSC: "5",
            BDY: "6",
            SPC: "7",
            SHW: "8"
          },
          "Leo Huang": {
            CLN: "2",
            VAR: "3",
            RAR: "4",
            EXE: "5",
            MSC: "6",
            BDY: "7",
            SPC: "8",
            SHW: "9"
          },
          "Jason Huang": {
            CLN: "3",
            VAR: "4",
            RAR: "5",
            EXE: "6",
            MSC: "7",
            BDY: "8",
            SPC: "9",
            SHW: "10"
          }
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
    this.currentTab = 'result.html';
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
    this.calculateAvgGiven = function(currentPlayer) {
      var avgGivens, given, givens, judge, judges, k, v, value, _ref, _ref1;
      judges = (function() {
        var _i, _len, _ref, _results;
        _ref = this.contest.evaluationJudges;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          judge = _ref[_i];
          _results.push(judge.name);
        }
        return _results;
      }).call(this);
      givens = ((function() {
        var _i, _len, _ref, _results;
        _ref = this.contest.givenTevValues;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          value = _ref[_i];
          _results.push(value.abbr);
        }
        return _results;
      }).call(this)).concat((function() {
        var _i, _len, _ref, _results;
        _ref = this.contest.givenPevValues;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          value = _ref[_i];
          _results.push(value.abbr);
        }
        return _results;
      }).call(this));
      if (((function() {
        var _ref, _results;
        _ref = currentPlayer.givens;
        _results = [];
        for (k in _ref) {
          v = _ref[k];
          _results.push(k);
        }
        return _results;
      })()).length !== judges.length) {
        return;
      }
      _ref = currentPlayer.givens;
      for (judge in _ref) {
        given = _ref[judge];
        if (((function() {
          var _results;
          _results = [];
          for (k in given) {
            v = given[k];
            _results.push(k);
          }
          return _results;
        })()).length !== givens.length) {
          return;
        }
      }
      avgGivens = {};
      _ref1 = currentPlayer.givens;
      for (judge in _ref1) {
        given = _ref1[judge];
        for (k in given) {
          v = given[k];
          if (avgGivens[k]) {
            avgGivens[k] += parseInt(v);
          } else {
            avgGivens[k] = parseInt(v);
          }
        }
      }
      for (k in avgGivens) {
        v = avgGivens[k];
        avgGivens[k] = v / 3 * 0.5;
      }
      return currentPlayer.avgGivens = avgGivens;
    };
    return this;
  };

  ResultCtrl = function(ContestFactory, PlayerFactory) {
    this.contest = ContestFactory;
    this.player = PlayerFactory;
    this.avgGivenTevSum = function(currentPlayer) {
      var abbr, point, tevAbbrs, tevSum, v, _ref;
      tevSum = 0;
      tevAbbrs = (function() {
        var _i, _len, _ref, _results;
        _ref = this.contest.givenTevValues;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          v = _ref[_i];
          _results.push(v.abbr);
        }
        return _results;
      }).call(this);
      _ref = currentPlayer.avgGivens;
      for (abbr in _ref) {
        point = _ref[abbr];
        if (tevAbbrs.indexOf(abbr) > -1) {
          tevSum += point;
        }
      }
      return tevSum;
    };
    this.avgGivenPevSum = function(currentPlayer) {
      var abbr, pevAbbrs, pevSum, point, v, _ref;
      pevSum = 0;
      pevAbbrs = (function() {
        var _i, _len, _ref, _results;
        _ref = this.contest.givenPevValues;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          v = _ref[_i];
          _results.push(v.abbr);
        }
        return _results;
      }).call(this);
      _ref = currentPlayer.avgGivens;
      for (abbr in _ref) {
        point = _ref[abbr];
        if (pevAbbrs.indexOf(abbr) > -1) {
          pevSum += point;
        }
      }
      return pevSum;
    };
    this.deductionSum = function(player, deduction) {
      if (!player.deductions) {
        player.deductions = {};
      }
      return -1 * (parseInt(player.deductions[deduction.name]) || 0) * deduction.point;
    };
    return this;
  };

  angular.module('app', []).controller('TabCtrl', TabCtrl).controller('SetUpCtrl', SetUpCtrl).controller('PlayerCtrl', PlayerCtrl).controller('RawTexCtrl', RawTexCtrl).controller('RawTevPevCtrl', RawTevPevCtrl).controller('SetUpCtrl', SetUpCtrl).controller('ResultCtrl', ResultCtrl).factory('TabFactory', TabFactory).service('ContestFactory', ContestFactory).service('PlayerFactory', PlayerFactory);

}).call(this);
