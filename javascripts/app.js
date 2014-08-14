(function() {
  var ContestFactory, MainCtrl, PlayerCtrl, PlayerFactory, RawTevPevCtrl, RawTexCtrl, ResultCtrl, SetUpCtrl, TabCtrl, TabFactory;

  TabFactory = function() {
    var tabs;
    tabs = [
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
    return tabs;
  };

  ContestFactory = function() {
    var contest;
    contest = {};
    contest.name = 'TYYC14';
    contest.date = '2014-08-13';
    contest.divisionName = '1A';
    contest.clickerJudges = [
      {
        name: 'Jason Kao'
      }, {
        name: 'Bambino Qiu'
      }
    ];
    contest.evaluationJudges = [
      {
        name: 'Bruce Lan'
      }, {
        name: 'Leo Huang'
      }, {
        name: 'Jason Huang'
      }
    ];
    contest.clickerValue = {
      name: 'Technical Execution',
      abbr: 'T.Ex',
      point: 60
    };
    contest.givenTevValues = [
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
    contest.givenPevValues = [
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
    contest.deductionValues = [
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
    contest.checkClickerJudges = function() {
      var judge, judgeList, _i, _len, _ref;
      judgeList = [];
      this.newClickerJudge || (this.newClickerJudge = {});
      _ref = this.clickerJudges;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        judge = _ref[_i];
        if (judge.name) {
          judgeList.push(judge);
        }
      }
      if (this.newClickerJudge.name) {
        judgeList.push(this.newClickerJudge);
      }
      this.newClickerJudge = {};
      return this.clickerJudges = judgeList;
    };
    contest.checkEvaluationJudges = function() {
      var judge, judgeList, _i, _len, _ref;
      judgeList = [];
      this.newEvaluationJudge || (this.newEvaluationJudge = {});
      _ref = this.evaluationJudges;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        judge = _ref[_i];
        if (judge.name) {
          judgeList.push(judge);
        }
      }
      if (this.newEvaluationJudge.name) {
        judgeList.push(this.newEvaluationJudge);
      }
      this.newEvaluationJudge = {};
      return this.evaluationJudges = judgeList;
    };
    contest.checkGivenTevValues = function() {
      var tev, valueList, _i, _len, _ref;
      valueList = [];
      this.newGivenTevValue || (this.newGivenTevValue = {});
      _ref = this.givenTevValues;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        tev = _ref[_i];
        if (!this.isEmptyValue(tev)) {
          valueList.push(tev);
        }
      }
      if (!this.isEmptyValue(this.newGivenTevValue)) {
        valueList.push(this.newGivenTevValue);
      }
      this.newGivenTevValue = {};
      this.givenTevValues = valueList;
      this.getGivenAbbrs();
      return this.getPointHash();
    };
    contest.checkGivenPevValues = function() {
      var pev, valueList, _i, _len, _ref;
      valueList = [];
      this.newGivenPevValue || (this.newGivenPevValue = {});
      _ref = this.givenPevValues;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        pev = _ref[_i];
        if (!this.isEmptyValue(pev)) {
          valueList.push(pev);
        }
      }
      if (!this.isEmptyValue(this.newGivenPevValue)) {
        valueList.push(this.newGivenPevValue);
      }
      this.newGivenPevValue = {};
      this.givenPevValues = valueList;
      this.getGivenAbbrs();
      return this.getPointHash();
    };
    contest.addNewClickerJudge = function(e) {
      if (e.keyCode === 13) {
        return this.checkClickerJudges();
      }
    };
    contest.addNewEvaluationJudge = function(e) {
      if (e.keyCode === 13) {
        return this.checkEvaluationJudges();
      }
    };
    contest.addNewTevValue = function(e) {
      if (e.keyCode === 13) {
        return this.checkGivenTevValues();
      }
    };
    contest.addNewPevValue = function(e) {
      if (e.keyCode === 13) {
        return this.checkGivenPevValues();
      }
    };
    contest.getGivenAbbrs = function() {
      var pev, tev;
      return this.givenAbbrs = ((function() {
        var _i, _len, _ref, _results;
        _ref = this.givenTevValues;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          tev = _ref[_i];
          _results.push(tev.abbr);
        }
        return _results;
      }).call(this)).concat((function() {
        var _i, _len, _ref, _results;
        _ref = this.givenPevValues;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          pev = _ref[_i];
          _results.push(pev.abbr);
        }
        return _results;
      }).call(this));
    };
    contest.getPointHash = function() {
      var deduct, pev, pointHash, pointTotal, tev, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
      pointHash = {};
      pointTotal = 0;
      pointHash[this.clickerValue.abbr] = parseInt(this.clickerValue.point);
      pointTotal += pointHash[this.clickerValue.abbr];
      _ref = this.givenTevValues;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        tev = _ref[_i];
        pointHash[tev.abbr] = parseInt(tev.point);
        pointTotal += pointHash[tev.abbr];
      }
      _ref1 = this.givenPevValues;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        pev = _ref1[_j];
        pointHash[pev.abbr] = parseInt(pev.point);
        pointTotal += pointHash[pev.abbr];
      }
      _ref2 = this.deductionValues;
      for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
        deduct = _ref2[_k];
        pointHash[deduct.name] = parseInt(deduct.point);
      }
      this.pointHash = pointHash;
      return this.pointTotal = pointTotal;
    };
    contest.tevSum = function() {
      var sum, tev, _i, _len, _ref;
      sum = 0;
      _ref = this.givenTevValues;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        tev = _ref[_i];
        sum += parseInt(tev.point);
      }
      return sum;
    };
    contest.pevSum = function() {
      var pev, sum, _i, _len, _ref;
      sum = 0;
      _ref = this.givenPevValues;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        pev = _ref[_i];
        sum += parseInt(pev.point);
      }
      return sum;
    };
    contest.isEmptyValue = function(value) {
      return !(value.name || value.abbr || value.point);
    };
    return contest;
  };

  PlayerFactory = function() {
    var player;
    player = {};
    player.players = [
      {
        name: 'JIANG Shanzhen',
        deductions: {
          Stop: "4",
          Discard: "1",
          Cut: "0"
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
        },
        clicker: {
          "Jason Kao": {
            plus: "80",
            minus: "2"
          },
          "Bambino Qiu": {
            plus: "60",
            minus: "2"
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
    player.checkPlayers = function() {
      var playerList, _i, _len, _ref;
      playerList = [];
      this.newPlayer || (this.newPlayer = {});
      _ref = this.players;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        player = _ref[_i];
        if (player.name) {
          playerList.push(player);
        }
      }
      if (this.newPlayer.name) {
        playerList.push(this.initPlayer(this.newPlayer));
      }
      this.newPlayer = {};
      return this.players = playerList;
    };
    player.addNewPlayer = function(e) {
      if (e.keyCode === 13) {
        return this.checkPlayers();
      }
    };
    player.initPlayer = function(player) {
      player.clicker || (player.clicker = {});
      player.deductions || (player.deductions = {});
      player.givens || (player.givens = {});
      player.avgGivens || (player.avgGivens = {});
      return player;
    };
    player.getRawTexTotal = function(player, judge) {
      var _base, _base1, _name;
      (_base = player.clicker)[_name = judge.name] || (_base[_name] = {});
      player.clicker[judge.name].total = (parseInt(player.clicker[judge.name].plus) || 0) - (parseInt(player.clicker[judge.name].minus) || 0);
      (_base1 = player.clicker[judge.name]).total || (_base1.total = 0);
      return this.getAdjTexTotal(judge);
    };
    player.getAdjTexTotal = function(judge) {
      var totalMax, _i, _j, _len, _len1, _ref, _ref1;
      totalMax = 0;
      _ref = this.players;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        player = _ref[_i];
        if (!player.clicker[judge.name]) {
          this.getRawTexTotal(player, judge);
        }
        if (player.clicker[judge.name].total > totalMax) {
          totalMax = player.clicker[judge.name].total;
        }
      }
      judge.texMax = totalMax;
      _ref1 = this.players;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        player = _ref1[_j];
        player.clicker[judge.name].adjTotal = player.clicker[judge.name].total / totalMax * 100;
      }
      return this.getAvgTexTotal();
    };
    player.getAvgTexTotal = function() {
      var judge, judgeCount, score, texAvg, _i, _len, _ref, _ref1, _results;
      _ref = this.players;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        player = _ref[_i];
        judgeCount = 0;
        texAvg = 0;
        _ref1 = player.clicker;
        for (judge in _ref1) {
          score = _ref1[judge];
          texAvg += score.adjTotal;
          judgeCount += 1;
        }
        texAvg /= judgeCount;
        _results.push(player.tex = texAvg);
      }
      return _results;
    };
    player.getAvgGiven = function(player, givenAbbr) {
      var givenAvg, judge, judgeCount, score, _ref;
      givenAvg = 0;
      judgeCount = 0;
      _ref = player.givens;
      for (judge in _ref) {
        score = _ref[judge];
        givenAvg += parseInt(score[givenAbbr]) || 0;
        judgeCount += 1;
      }
      givenAvg /= judgeCount;
      return player.avgGivens[givenAbbr] = givenAvg;
    };
    player.getAllAvgGiven = function(player, givenAbbrs) {
      var givenAbbr, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = givenAbbrs.length; _i < _len; _i++) {
        givenAbbr = givenAbbrs[_i];
        _results.push(this.getAvgGiven(player, givenAbbr));
      }
      return _results;
    };
    return player;
  };

  TabCtrl = function(TabFactory) {
    this.onClickTab = function(tab) {
      return this.currentTab = tab.url;
    };
    this.isActiveTab = function(tabUrl) {
      return tabUrl === this.currentTab;
    };
    this.tabs = TabFactory;
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
    var judge, player, _base, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _m, _n, _name, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
    this.contest = ContestFactory;
    this.player = PlayerFactory;
    this.contest.getGivenAbbrs();
    this.contest.getPointHash();
    _ref = this.contest.clickerJudges;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      judge = _ref[_i];
      _ref1 = this.player.players;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        player = _ref1[_j];
        this.player.initPlayer(player);
      }
      _ref2 = this.player.players;
      for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
        player = _ref2[_k];
        this.player.getRawTexTotal(player, judge);
      }
      this.player.getAdjTexTotal(judge);
    }
    _ref3 = this.contest.evaluationJudges;
    for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
      judge = _ref3[_l];
      _ref4 = this.player.players;
      for (_m = 0, _len4 = _ref4.length; _m < _len4; _m++) {
        player = _ref4[_m];
        (_base = player.givens)[_name = judge.name] || (_base[_name] = {});
      }
    }
    _ref5 = this.player.players;
    for (_n = 0, _len5 = _ref5.length; _n < _len5; _n++) {
      player = _ref5[_n];
      this.player.getAllAvgGiven(player, this.contest.givenAbbrs);
    }
    return this;
  };

  RawTevPevCtrl = function(ContestFactory, PlayerFactory) {
    var judge, player, _base, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _m, _n, _name, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
    this.contest = ContestFactory;
    this.player = PlayerFactory;
    this.contest.getGivenAbbrs();
    this.contest.getPointHash();
    _ref = this.contest.clickerJudges;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      judge = _ref[_i];
      _ref1 = this.player.players;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        player = _ref1[_j];
        this.player.initPlayer(player);
      }
      _ref2 = this.player.players;
      for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
        player = _ref2[_k];
        this.player.getRawTexTotal(player, judge);
      }
      this.player.getAdjTexTotal(judge);
    }
    _ref3 = this.contest.evaluationJudges;
    for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
      judge = _ref3[_l];
      _ref4 = this.player.players;
      for (_m = 0, _len4 = _ref4.length; _m < _len4; _m++) {
        player = _ref4[_m];
        (_base = player.givens)[_name = judge.name] || (_base[_name] = {});
      }
    }
    _ref5 = this.player.players;
    for (_n = 0, _len5 = _ref5.length; _n < _len5; _n++) {
      player = _ref5[_n];
      this.player.getAllAvgGiven(player, this.contest.givenAbbrs);
    }
    return this;
  };

  ResultCtrl = function(ContestFactory, PlayerFactory) {
    var judge, player, _base, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _m, _n, _name, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
    this.contest = ContestFactory;
    this.player = PlayerFactory;
    this.contest.getGivenAbbrs();
    this.contest.getPointHash();
    _ref = this.contest.clickerJudges;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      judge = _ref[_i];
      _ref1 = this.player.players;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        player = _ref1[_j];
        this.player.initPlayer(player);
      }
      _ref2 = this.player.players;
      for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
        player = _ref2[_k];
        this.player.getRawTexTotal(player, judge);
      }
      this.player.getAdjTexTotal(judge);
    }
    _ref3 = this.contest.evaluationJudges;
    for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
      judge = _ref3[_l];
      _ref4 = this.player.players;
      for (_m = 0, _len4 = _ref4.length; _m < _len4; _m++) {
        player = _ref4[_m];
        (_base = player.givens)[_name = judge.name] || (_base[_name] = {});
      }
    }
    _ref5 = this.player.players;
    for (_n = 0, _len5 = _ref5.length; _n < _len5; _n++) {
      player = _ref5[_n];
      this.player.getAllAvgGiven(player, this.contest.givenAbbrs);
    }
    this.weightedTex = function(player) {
      return player.weightedTex = player.tex * this.contest.clickerValue.point / this.contest.pointTotal;
    };
    this.weightedGiven = function(player, given) {
      return player.avgGivens[given.abbr] * this.contest.pointHash[given.abbr] / 10;
    };
    this.weightedTev = function(player) {
      var sum, tev, _len6, _o, _ref6;
      sum = 0;
      _ref6 = this.contest.givenTevValues;
      for (_o = 0, _len6 = _ref6.length; _o < _len6; _o++) {
        tev = _ref6[_o];
        sum += this.weightedGiven(player, tev);
      }
      return player.weightedTev = sum;
    };
    this.weightedPev = function(player) {
      var pev, sum, _len6, _o, _ref6;
      sum = 0;
      _ref6 = this.contest.givenPevValues;
      for (_o = 0, _len6 = _ref6.length; _o < _len6; _o++) {
        pev = _ref6[_o];
        sum += this.weightedGiven(player, pev);
      }
      return player.weightedPev = sum;
    };
    this.totalScore = function(player) {
      return player.totalScore = this.weightedTex(player) + this.weightedTev(player) + this.weightedPev(player);
    };
    this.deductionScore = function(player, deduction) {
      return -1 * parseInt(player.deductions[deduction.name] || 0) * parseInt(deduction.point);
    };
    this.totalDeduction = function(player) {
      var deduct, sum, totalDeduction, _len6, _o, _ref6;
      sum = 0;
      _ref6 = this.contest.deductionValues;
      for (_o = 0, _len6 = _ref6.length; _o < _len6; _o++) {
        deduct = _ref6[_o];
        sum += this.deductionScore(player, deduct);
      }
      return totalDeduction = sum;
    };
    this.finalScore = function(player) {
      return player.finalScore = this.totalScore(player) + this.totalDeduction(player);
    };
    return this;
  };

  MainCtrl = function(ContestFactory, PlayerFactory) {
    var judge, player, _base, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _m, _n, _name, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _results;
    this.contest = ContestFactory;
    this.player = PlayerFactory;
    this.contest.getGivenAbbrs();
    this.contest.getPointHash();
    _ref = this.contest.clickerJudges;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      judge = _ref[_i];
      _ref1 = this.player.players;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        player = _ref1[_j];
        this.player.initPlayer(player);
      }
      _ref2 = this.player.players;
      for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
        player = _ref2[_k];
        this.player.getRawTexTotal(player, judge);
      }
      this.player.getAdjTexTotal(judge);
    }
    _ref3 = this.contest.evaluationJudges;
    for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
      judge = _ref3[_l];
      _ref4 = this.player.players;
      for (_m = 0, _len4 = _ref4.length; _m < _len4; _m++) {
        player = _ref4[_m];
        (_base = player.givens)[_name = judge.name] || (_base[_name] = {});
      }
    }
    _ref5 = this.player.players;
    _results = [];
    for (_n = 0, _len5 = _ref5.length; _n < _len5; _n++) {
      player = _ref5[_n];
      _results.push(this.player.getAllAvgGiven(player, this.contest.givenAbbrs));
    }
    return _results;
  };

  angular.module('app', []).controller('MainCtrl', MainCtrl).controller('TabCtrl', TabCtrl).controller('SetUpCtrl', SetUpCtrl).controller('PlayerCtrl', PlayerCtrl).controller('RawTexCtrl', RawTexCtrl).controller('RawTevPevCtrl', RawTevPevCtrl).controller('SetUpCtrl', SetUpCtrl).controller('ResultCtrl', ResultCtrl).factory('TabFactory', TabFactory).service('ContestFactory', ContestFactory).service('PlayerFactory', PlayerFactory);

}).call(this);
