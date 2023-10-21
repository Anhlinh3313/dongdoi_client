const getOddsData = (res, id) => {
  let data = [];
  let companyList = [
    { id: 3, name: "Crown" },
    { id: 4, name: "Ladbrokes" },
    { id: 1, name: "Macauslot" },
    { id: 7, name: "SNAI" },
    { id: 8, name: "Bet365" },
    { id: 9, name: "William Hill" },
    { id: 12, name: "Easybets" },
    { id: 14, name: "Vcbet" },
    { id: 17, name: "Mansion88" },
    { id: 19, name: "Interwette" },
    { id: 22, name: "10BET" },
    { id: 23, name: "188bet" },
    { id: 24, name: "12bet" },
    { id: 31, name: "Sbobet" },
    { id: 35, name: "Wewbet" },
    { id: 42, name: "18bet" },
    { id: 47, name: "Pinnacle" },
    { id: 48, name: "HK Jockey Club" },
  ];

  let bigData = companyList.map((item, index) => {
    return {
      key: index,
      company: item.name,
      handicap: res.handicap
        .map((item1) => {
          if (parseInt(item1.split(",")[1]) === item.id) {
            let newHandicap =
              item1.split(",").length > 0
                ? {
                    matchId: item1.split(",")[0],
                    companyId: item1.split(",")[1],
                    initialHandicap: item1.split(",")[2],
                    initialHome: item1.split(",")[3],
                    initialAway: item1.split(",")[4],
                    instantHandicap: item1.split(",")[5],
                    instantHome: item1.split(",")[6],
                    instantAway: item1.split(",")[7],
                    maintenance: item1.split(",")[8],
                    inPlay: item1.split(",")[9],
                    changeTime: item1.split(",")[10],
                    close: item1.split(",")[11],
                    type: item1.split(",")[12],
                  }
                : [];
            return newHandicap;
          }
        })
        .filter((item) => item !== undefined),
      europeOdds: res.europeOdds
        .map((item1) => {
          if (parseInt(item1.split(",")[1]) === item.id) {
            let newEuropeOdds =
              item1.split(",").length > 0
                ? {
                    matchId: item1.split(",")[0],
                    companyId: item1.split(",")[1],
                    initialHome: item1.split(",")[2],
                    initialDraw: item1.split(",")[3],
                    initialAway: item1.split(",")[4],
                    instantHome: item1.split(",")[5],
                    instantDraw: item1.split(",")[6],
                    instantAway: item1.split(",")[7],
                    changeTime: item1.split(",")[8],
                    close: item1.split(",")[9],
                    type: item1.split(",")[10],
                  }
                : [];
            return newEuropeOdds;
          }
        })
        .filter((item) => item !== undefined),
      overUnder: res.overUnder
        .map((item1) => {
          if (parseInt(item1.split(",")[1]) === item.id) {
            let newOverUnder =
              item1.split(",").length > 0
                ? {
                    matchId: item1.split(",")[0],
                    companyId: item1.split(",")[1],
                    initialHandicap: item1.split(",")[2],
                    initialOver: item1.split(",")[3],
                    initialUnder: item1.split(",")[4],
                    instantHandicap: item1.split(",")[5],
                    instantOver: item1.split(",")[6],
                    instantUnder: item1.split(",")[7],
                    changeTime: item1.split(",")[9],
                    close: item1.split(",")[9],
                    type: item1.split(",")[10],
                  }
                : [];
            return newOverUnder;
          }
        })
        .filter((item) => item !== undefined),
      handicapHalf: res.handicapHalf
        .map((item1) => {
          if (parseInt(item1.split(",")[1]) === item.id) {
            let newHandicap =
              item1.split(",").length > 0
                ? {
                    matchId: item1.split(",")[0],
                    companyId: item1.split(",")[1],
                    initialHandicap: item1.split(",")[2],
                    initialHome: item1.split(",")[3],
                    initialAway: item1.split(",")[4],
                    instantHandicap: item1.split(",")[5],
                    instantHome: item1.split(",")[6],
                    instantAway: item1.split(",")[7],
                    changeTime: item1.split(",")[8],
                    type: item1.split(",")[9],
                  }
                : [];
            return newHandicap;
          }
        })
        .filter((item) => item !== undefined),
      overUnderHalf: res.overUnderHalf
        .map((item1) => {
          if (parseInt(item1.split(",")[1]) === item.id) {
            let newOverUnder =
              item1.split(",").length > 0
                ? {
                    matchId: item1.split(",")[0],
                    companyId: item1.split(",")[1],
                    initialHandicap: item1.split(",")[2],
                    initialOver: item1.split(",")[3],
                    initialUnder: item1.split(",")[4],
                    instantHandicap: item1.split(",")[5],
                    instantOver: item1.split(",")[6],
                    instantUnder: item1.split(",")[7],
                    changeTime: item1.split(",")[8],
                    type: item1.split(",")[9],
                  }
                : [];
            return newOverUnder;
          }
        })
        .filter((item) => item !== undefined),
    };
  });
  return bigData;
};

export default getOddsData;
