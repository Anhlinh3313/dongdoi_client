function findMatchData(matchesAnalytics, matchesInfor) {
  if(!matchesAnalytics || ! matchesInfor){
    return {
      
    }
  }
  let homeId = matchesInfor?.homeId ? matchesInfor.homeId : "";
  let awayId = matchesInfor?.awayId ? matchesInfor.awayId : "";
  let data = {
    headToHead:
      exportToMatches(matchesAnalytics?.headToHead, homeId, awayId) || [],
    homeLastMatches:
      exportToMatches(matchesAnalytics?.homeLastMatches, homeId, null) || [],
    awayLastMatches:
      exportToMatches(matchesAnalytics?.awayLastMatches, null, awayId) || [],
    homeScore: exportWinLose(matchesAnalytics?.homeLastMatches, homeId) || [],
    awayScore: exportWinLose(matchesAnalytics?.awayLastMatches, awayId) || [],
    homeSchedule: exportToSchedule(matchesAnalytics?.homeSchedule),
    awaySchedule: exportToSchedule(matchesAnalytics?.awaySchedule),
    homeOdds: exportOdds(matchesAnalytics?.homeOdds),
    awayOdds: exportOdds(matchesAnalytics?.awayOdds),
    homeGoals: exportGoal(matchesAnalytics?.homeGoals),
    awayGoals: exportGoal(matchesAnalytics?.awayGoals),
    homeHT: exportHT(matchesAnalytics?.homeHT),
    awayHT: exportHT(matchesAnalytics?.awayHT),
    homeShootTime: exportShootTime(matchesAnalytics?.homeShootTime),
    awayShootTime: exportShootTime(matchesAnalytics?.awayShootTime),
  };
  return data;
}

function exportShootTime(data) {
  if (data?.length === 0) return [];
  let totalShootSplit = data?.[0]?.split(",");
  let homeShootSplit = data?.[1]?.split(",");
  let awayShootSplit = data?.[2]?.split(",");
  let firstShootTotalSplit = data?.[3]?.split(",");
  let firstShootHomeSplit = data?.[4]?.split(",");
  let firstShootAwaySplit = data?.[5]?.split(",");
  let total = {
    to10: totalShootSplit?.[0],
    to20: totalShootSplit?.[1],
    to30: totalShootSplit?.[2],
    to40: totalShootSplit?.[3],
    to45: totalShootSplit?.[4],
    to50: totalShootSplit?.[5],
    to60: totalShootSplit?.[6],
    to70: totalShootSplit?.[7],
    to80: totalShootSplit?.[8],
    to90: totalShootSplit?.[9],
  };
  let home = {
    to10: homeShootSplit?.[0],
    to20: homeShootSplit?.[1],
    to30: homeShootSplit?.[2],
    to40: homeShootSplit?.[3],
    to45: homeShootSplit?.[4],
    to50: homeShootSplit?.[5],
    to60: homeShootSplit?.[6],
    to70: homeShootSplit?.[7],
    to80: homeShootSplit?.[8],
    to90: homeShootSplit?.[9],
  };
  let away = {
    to10: awayShootSplit?.[0],
    to20: awayShootSplit?.[1],
    to30: awayShootSplit?.[2],
    to40: awayShootSplit?.[3],
    to45: awayShootSplit?.[4],
    to50: awayShootSplit?.[5],
    to60: awayShootSplit?.[6],
    to70: awayShootSplit?.[7],
    to80: awayShootSplit?.[8],
    to90: awayShootSplit?.[9],
  };
  let firstShootTotal = {
    to10: firstShootTotalSplit?.[0],
    to20: firstShootTotalSplit?.[1],
    to30: firstShootTotalSplit?.[2],
    to40: firstShootTotalSplit?.[3],
    to45: firstShootTotalSplit?.[4],
    to50: firstShootTotalSplit?.[5],
    to60: firstShootTotalSplit?.[6],
    to70: firstShootTotalSplit?.[7],
    to80: firstShootTotalSplit?.[8],
    to90: firstShootTotalSplit?.[9],
  };
  let firstShootHome = {
    to10: firstShootHomeSplit?.[0],
    to20: firstShootHomeSplit?.[1],
    to30: firstShootHomeSplit?.[2],
    to40: firstShootHomeSplit?.[3],
    to45: firstShootHomeSplit?.[4],
    to50: firstShootHomeSplit?.[5],
    to60: firstShootHomeSplit?.[6],
    to70: firstShootHomeSplit?.[7],
    to80: firstShootHomeSplit?.[8],
    to90: firstShootHomeSplit?.[9],
  };
  let firstShootAway = {
    to10: firstShootAwaySplit?.[0],
    to20: firstShootAwaySplit?.[1],
    to30: firstShootAwaySplit?.[2],
    to40: firstShootAwaySplit?.[3],
    to45: firstShootAwaySplit?.[4],
    to50: firstShootAwaySplit?.[5],
    to60: firstShootAwaySplit?.[6],
    to70: firstShootAwaySplit?.[7],
    to80: firstShootAwaySplit?.[8],
    to90: firstShootAwaySplit?.[9],
  };
  return {
    total: total || [],
    away: away || [],
    home: home || [],
    firstShootTotal: firstShootTotal || [],
    firstShootHome: firstShootHome || [],
    firstShootAway: firstShootAway || [],
  };
}

function exportHT(data) {
  if (data?.length === 0) return [];
  let totalSplit = data?.[0]?.split(",");
  let homeSplit = data?.[1]?.split(",");
  let awaySplit = data?.[2]?.split(",");
  let total = {
    halfWinFullWin: totalSplit?.[0],
    halfWinFullDraw: totalSplit?.[1],
    halfWinFullLose: totalSplit?.[2],
    halfDrawFullWin: totalSplit?.[3],
    halfDrawFullDraw: totalSplit?.[4],
    halfDrawFullLose: totalSplit?.[5],
    halfLoseFullWin: totalSplit?.[6],
    halfLoseFullDraw: totalSplit?.[7],
    halfLoseFullLose: totalSplit?.[8],
  };
  let home = {
    halfWinFullWin: homeSplit?.[0],
    halfWinFullDraw: homeSplit?.[1],
    halfWinFullLose: homeSplit?.[2],
    halfDrawFullWin: homeSplit?.[3],
    halfDrawFullDraw: homeSplit?.[4],
    halfDrawFullLose: homeSplit?.[5],
    halfLoseFullWin: homeSplit?.[6],
    halfLoseFullDraw: homeSplit?.[7],
    halfLoseFullLose: homeSplit?.[8],
  };
  let away = {
    halfWinFullWin: awaySplit?.[0],
    halfWinFullDraw: awaySplit?.[1],
    halfWinFullLose: awaySplit?.[2],
    halfDrawFullWin: awaySplit?.[3],
    halfDrawFullDraw: awaySplit?.[4],
    halfDrawFullLose: awaySplit?.[5],
    halfLoseFullWin: awaySplit?.[6],
    halfLoseFullDraw: awaySplit?.[7],
    halfLoseFullLose: awaySplit?.[8],
  };
  return {
    home: home || [],
    away: away || [],
    total: total || [],
  };
}
function exportGoal(data) {
  if (data?.length === 0) return [];
  let totalSplit = data?.[0]?.split(",");
  let homeSplit = data?.[1]?.split(",");
  let awaySplit = data?.[2]?.split(",");
  let total = {
    noGoals: totalSplit?.[0],
    oneGoals: totalSplit?.[1],
    twoGoals: totalSplit?.[2],
    threeGoals: totalSplit?.[3],
    fourAndMoreGoals: totalSplit?.[4],
    firstHalf: totalSplit?.[5],
    secondHalf: totalSplit?.[6],
  };
  let home = {
    noGoals: homeSplit?.[0],
    oneGoals: homeSplit?.[1],
    twoGoals: homeSplit?.[2],
    threeGoals: homeSplit?.[3],
    fourAndMoreGoals: homeSplit?.[4],
    firstHalf: homeSplit?.[5],
    secondHalf: homeSplit?.[6],
  };
  let away = {
    noGoals: awaySplit?.[0],
    oneGoals: awaySplit?.[1],
    twoGoals: awaySplit?.[2],
    threeGoals: awaySplit?.[3],
    fourAndMoreGoals: awaySplit?.[4],
    firstHalf: awaySplit?.[5],
    secondHalf: awaySplit?.[6],
  };
  return {
    total: total || [],
    home: home || [],
    away: away || [],
  };
}
function exportOdds(data) {
  if (data?.length === 0) return [];
  let totalSplit = data?.[0]?.[0].split(",");
  let homeSplit = data?.[1]?.[0].split(",");
  let awaySplit = data?.[2]?.[0].split(",");
  let totalHalfSplit = data?.[4]?.[0].split(",");
  let homeHalfSplit = data?.[5]?.[0].split(",");
  let awayHalfSplit = data?.[6]?.[0].split(",");
  let total = {
    count: totalSplit?.[0],
    oddsWin: totalSplit?.[1],
    oddsVoid: totalSplit?.[2],
    oddsLose: totalSplit?.[3],
    oddsWinRate: totalSplit?.[4],
    oddsOver: totalSplit?.[5],
    oddsOverRate: totalSplit?.[6],
    oddsUnder: totalSplit?.[7],
    oddsUnderRate: totalSplit?.[8],
  };
  let totalHalf = {
    count: totalHalfSplit?.[0],
    oddsWin: totalHalfSplit?.[1],
    oddsVoid: totalHalfSplit?.[2],
    oddsLose: totalHalfSplit?.[3],
    oddsWinRate: totalHalfSplit?.[4],
    oddsOver: totalHalfSplit?.[5],
    oddsOverRate: totalHalfSplit?.[6],
    oddsUnder: totalHalfSplit?.[7],
    oddsUnderRate: totalHalfSplit?.[8],
  };
  let home = {
    count: homeSplit?.[0],
    oddsWin: homeSplit?.[1],
    oddsVoid: homeSplit?.[2],
    oddsLose: homeSplit?.[3],
    oddsWinRate: homeSplit?.[4],
    oddsOver: homeSplit?.[5],
    oddsOverRate: homeSplit?.[6],
    oddsUnder: homeSplit?.[7],
    oddsUnderRate: homeSplit?.[8],
  };
  let homeHalf = {
    count: homeHalfSplit?.[0],
    oddsWin: homeHalfSplit?.[1],
    oddsVoid: homeHalfSplit?.[2],
    oddsLose: homeHalfSplit?.[3],
    oddsWinRate: homeHalfSplit?.[4],
    oddsOver: homeHalfSplit?.[5],
    oddsOverRate: homeHalfSplit?.[6],
    oddsUnder: homeHalfSplit?.[7],
    oddsUnderRate: homeHalfSplit?.[8],
  };
  let away = {
    count: awaySplit?.[0],
    oddsWin: awaySplit?.[1],
    oddsVoid: awaySplit?.[2],
    oddsLose: awaySplit?.[3],
    oddsWinRate: awaySplit?.[4],
    oddsOver: awaySplit?.[5],
    oddsOverRate: awaySplit?.[6],
    oddsUnder: awaySplit?.[7],
    oddsUnderRate: awaySplit?.[8],
  };
  let awayHalf = {
    count: awayHalfSplit?.[0],
    oddsWin: awayHalfSplit?.[1],
    oddsVoid: awayHalfSplit?.[2],
    oddsLose: awayHalfSplit?.[3],
    oddsWinRate: awayHalfSplit?.[4],
    oddsOver: awayHalfSplit?.[5],
    oddsOverRate: awayHalfSplit?.[6],
    oddsUnder: awayHalfSplit?.[7],
    oddsUnderRate: awayHalfSplit?.[8],
  };
  let recentSix = data?.[3]?.map((item) => {
    let splitRecent = item.split(",");
    return {
      count: splitRecent?.[0],
      handicapResult: splitRecent?.[1],
      oddsWinRate: splitRecent?.[2],
      overUnderResult: splitRecent?.[3],
    };
  });
  let recentSixHalf = data?.[7]?.map((item) => {
    let splitRecent = item.split(",");
    return {
      count: splitRecent?.[0],
      handicapResult: splitRecent?.[1],
      oddsWinRate: splitRecent?.[2],
      overUnderResult: splitRecent?.[3],
    };
  });
  return {
    total: total || [],
    home: home || [],
    away: away || [],
    recentSix: recentSix || [],
    totalHalf: totalHalf || [],
    homeHalf: homeHalf || [],
    awayHalf: awayHalf || [],
    recentSixHalf: recentSixHalf || [],
  };
}
function exportWinLose(data, id) {
  if (data?.length === 0) return [];
  let a = {
    home: [],
    away: [],
  };
  let b = data?.map((item) => {
    let splitItem = item.split(",");
    if (splitItem[5] === id) {
      return {
        home: 1,
        score: parseInt(splitItem[8]) - parseInt(splitItem[9]),
      };
    } else {
      return {
        home: 0,
        score: parseInt(splitItem[8]) - parseInt(splitItem[9]),
      };
    }
  });
  return b;
}
function exportToMatches(data, homeId, awayId) {
  if (data?.length === 0) return [];
  let b = data?.map((item, index) => {
    let splitItem = item.split(",");
    let home = {};
    let away = {};
    let isHome = false;
    if (homeId === null) {
      if (splitItem[5] === awayId) {
        home = {
          homeName: splitItem[4],
          homeTeamId: splitItem[5],
          scoreHome: splitItem[8],
          homeHalfScore: splitItem[10],
          homeRed: splitItem[12],
          homeCorner: splitItem[14],
        };
        away = {
          awayName: splitItem[6],
          awayTeamId: splitItem[7],
          scoreAway: splitItem[9],
          awayHalfScore: splitItem[11],
          awayRed: splitItem[13],
          awayCorner: splitItem[15],
        };
        isHome = true;
      } else {
        home = {
          homeName: splitItem[6],
          homeTeamId: splitItem[7],
          scoreHome: splitItem[9],
          homeHalfScore: splitItem[11],
          homeRed: splitItem[13],
          homeCorner: splitItem[15],
        };
        away = {
          awayName: splitItem[4],
          awayTeamId: splitItem[5],
          scoreAway: splitItem[8],
          awayHalfScore: splitItem[10],
          awayRed: splitItem[12],
          awayCorner: splitItem[14],
        };
      }
    } else if (awayId === null && homeId !== null) {
      if (parseInt(splitItem[5]) === parseInt(homeId)) {
        home = {
          homeName: splitItem[4],
          homeTeamId: splitItem[5],
          scoreHome: splitItem[8],
          homeHalfScore: splitItem[10],
          homeRed: splitItem[12],
          homeCorner: splitItem[14],
        };
        away = {
          awayName: splitItem[6],
          awayTeamId: splitItem[7],
          scoreAway: splitItem[9],
          awayHalfScore: splitItem[11],
          awayRed: splitItem[13],
          awayCorner: splitItem[15],
        };
        isHome = true;
      } else {
        home = {
          homeName: splitItem[6],
          homeTeamId: splitItem[7],
          scoreHome: splitItem[9],
          homeHalfScore: splitItem[11],
          homeRed: splitItem[13],
          homeCorner: splitItem[15],
        };
        away = {
          awayName: splitItem[4],
          awayTeamId: splitItem[5],
          scoreAway: splitItem[8],
          awayHalfScore: splitItem[10],
          awayRed: splitItem[12],
          awayCorner: splitItem[14],
        };
      }
    } else {
      if (parseInt(splitItem[5]) === parseInt(homeId)) {
        home = {
          homeName: splitItem[4],
          homeTeamId: splitItem[5],
          scoreHome: splitItem[8],
          homeHalfScore: splitItem[10],
          homeRed: splitItem[12],
          homeCorner: splitItem[14],
        };
        away = {
          awayName: splitItem[6],
          awayTeamId: splitItem[7],
          scoreAway: splitItem[9],
          awayHalfScore: splitItem[11],
          awayRed: splitItem[13],
          awayCorner: splitItem[15],
        };
        isHome = true;
      } else {
        home = {
          homeName: splitItem[6],
          homeTeamId: splitItem[7],
          scoreHome: splitItem[9],
          homeHalfScore: splitItem[11],
          homeRed: splitItem[13],
          homeCorner: splitItem[15],
        };
        away = {
          awayName: splitItem[4],
          awayTeamId: splitItem[5],
          scoreAway: splitItem[8],
          awayHalfScore: splitItem[10],
          awayRed: splitItem[12],
          awayCorner: splitItem[14],
        };
      }
    }

    let a = {
      matchesId: splitItem[0],
      league: splitItem[1],
      leagueId: splitItem[2],
      matchTime: splitItem[3],
      home: home,
      away: away,
      initialHandicapHome: splitItem[16],
      initialHandicap: splitItem[17],
      initialHandicapAway: splitItem[18],
      instantHandicapHome: splitItem[19],
      instantHandicap: splitItem[20],
      instantHandicapAway: splitItem[21],
      initialHome: splitItem[22],
      initialDraw: splitItem[23],
      initialAway: splitItem[24],
      instantHome: splitItem[25],
      instantDraw: splitItem[26],
      instantAway: splitItem[27],
      initialOver: splitItem[28],
      initialTotal: splitItem[29],
      initialUnder: splitItem[30],
      instantOver: splitItem[31],
      instantTotal: splitItem[32],
      instantUnder: splitItem[33],
      isHome: isHome,
    };

    return a;
  });
  return b;
}
function exportToSchedule(data) {
  if (data?.length === 0) return [];
  let schedule = data?.map((item) => {
    let splitItem = item.split(",");
    return {
      matchId: splitItem[0],
      league: splitItem[1],
      leagueId: splitItem[2],
      matchTime: splitItem[3],
      home: splitItem[4],
      homeTeamId: splitItem[5],
      away: splitItem[6],
      awayTeamId: splitItem[7],
      day: parseInt(splitItem[8]),
    };
  });
  return schedule;
}

export default findMatchData;
