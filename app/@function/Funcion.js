import { ruleFootball } from "./constant";

export const convertTotalFootball = (t1, t2) => {
  if (!t1 && !t2) return "";
  if (t1 === t2) {
    return "Draw";
  }
  if (t1 > t2) {
    return "Victory";
  }
  return "";
};

export const convertStatusFootball = (key, goal1, goal2) => {
  switch (key) {
    case ruleFootball.Goal: {
      if (goal1 && goal2) {
        return goal1 + " - " + goal2;
      }
      return "Goal";
    }
    case ruleFootball.YellowCard: {
      return (
        <div
          style={{
            background: "yellow",
            width: "10px",
            height: "15px",
            borderRadius: "5PX",
          }}
        ></div>
      );
    }
    case ruleFootball.RedCard: {
      return (
        <div
          style={{
            background: "RED",
            width: "10px",
            height: "15px",
            borderRadius: "5PX",
          }}
        ></div>
      );
    }
    case ruleFootball.PenaltyScored: {
      return "Penalty";
    }
    case ruleFootball.OwnGoal: {
      return "Own Goal";
    }
    case ruleFootball.SecondYellowCard: {
      return "Second Yellow Card";
    }
    case ruleFootball.Substitution: {
      return "Substitution";
    }
    case ruleFootball.PenaltyMissed: {
      return "PenaltyMissed";
    }
    case ruleFootball.VideoReferee: {
      return "Var";
    }
    // case ruleFootball.NORMALSHOT: {
    //   return (
    //     <svg
    //       stroke="currentColor"
    //       fill="currentColor"
    //       strokeWidth="0"
    //       viewBox="0 0 24 24"
    //       height="1em"
    //       width="1em"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <g>
    //         <path fill="none" d="M0 0h24v24H0z"></path>
    //         <path d="M12 2a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm10-5a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zM7 12a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zm12.071 7.071a1 1 0 0 1-1.414 0l-2.121-2.121a1 1 0 0 1 1.414-1.414l2.121 2.12a1 1 0 0 1 0 1.415zM8.464 8.464a1 1 0 0 1-1.414 0L4.93 6.344a1 1 0 0 1 1.414-1.415L8.464 7.05a1 1 0 0 1 0 1.414zM4.93 19.071a1 1 0 0 1 0-1.414l2.121-2.121a1 1 0 1 1 1.414 1.414l-2.12 2.121a1 1 0 0 1-1.415 0zM15.536 8.464a1 1 0 0 1 0-1.414l2.12-2.121a1 1 0 0 1 1.415 1.414L16.95 8.464a1 1 0 0 1-1.414 0z"></path>
    //       </g>
    //     </svg>
    //   );
    // }

    default:
      break;
  }
};

export const stringSplit = (string, index) => {
  if (string && index) {
    return string.split(",")[index];
  } else {
    return "";
  }
};

export const groupData = (array, groupField, sortField) => {
  var groups = {}; // This object will end being keyed by groups, and elements will be arrays of the rows within the given array, which have been sorted by the sortField
  // Put all the rows into groups
  for (var i = 0; i < array?.length; i++) {
    var row = array[i];
    var groupValue = row[groupField];
    groups[groupValue] = groups[groupValue] || [];
    groups[groupValue].push(row);
  }
  //Sort each group
  for (var groupValue in groups) {
    groups[groupValue] = groups[groupValue].sort(function (a, b) {
      return a[sortField] - b[sortField];
    });
  }
  const final = [];

  for (const key in groups) {
    final.push({
      round: key,
      children: groups[key]
    })
  }
  // Return the results
  return final.reverse();
};

export const groupDataNotReverse = (array, groupField, sortField) => {
  var groups = {}; // This object will end being keyed by groups, and elements will be arrays of the rows within the given array, which have been sorted by the sortField
  // Put all the rows into groups
  for (var i = 0; i < array?.length; i++) {
    var row = array[i];
    var groupValue = row[groupField];
    groups[groupValue] = groups[groupValue] || [];
    groups[groupValue].push(row);
  }
  //Sort each group
  for (var groupValue in groups) {
    groups[groupValue] = groups[groupValue].sort(function (a, b) {
      return a[sortField] - b[sortField];
    });
  }
  const final = [];

  for (const key in groups) {
    final.push({
      round: key,
      children: groups[key]
    })
  }
  return final;
};