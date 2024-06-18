import { useEffect } from "react";
import React, { useState } from "react";
import NoOvers from "./NoOvers";
import AlertsCricket from "../components/AlertsCricket";
import Alerts from "../components/AlertsCricket";
import virat from "../components/virat.jpeg";
import cricket from "../components/cricket.jpeg";
import rohit from "../components/rohit.jpeg";
import hardik from "../components/hardik.jpeg";

export default function Home(props) {
  const [totalRuns, setTotalRuns] = useState(0);
  const [text, setText] = useState("");
  const [ballCount, setBallCount] = useState(0);
  const [over, setOver] = useState(1);
  const [overSecond, setOverSecond] = useState(1);
  const [matchlimit, setmatchlimit] = useState(1);
  const [alert, setAlert] = useState(null);
  const [matchalert, setMatchAlert] = useState(null);
  const [runScored, setrunScored] = useState(0);
  const [numberBall, setnumberBall] = useState(0);
  const [innings, setinnings] = useState(1);
  const [batsman, setBatsman] = useState("Batsman");
  const [nonbatsman, setnonBatsman] = useState("Non-Strike Batsman");
  const [bowler, setBowler] = useState("bowler");
  const [isMatchStarted, setIsMatchStarted] = useState(true);
  const [batsmanout, setbatsmanout] = useState("batsman out");
  const [wicket, setwicket] = useState("0");
  const [checkwicketdown, setcheckwicketdown] = useState(false);
  const [widefaced, setwidefaced] = useState(false);
  const [byefaced, setbyefaced] = useState(false);
  const [legbyefaced, setlegbyefaced] = useState(false);
  const [noballfaced, setnoballfaced] = useState(false);
  const [allbatsmanruns1, setallbatsmanruns1] = useState("0");
  const [allbatsmanruns2, setallbatsmanruns2] = useState("0");
  const [manofmatch, setmanofmatch] = useState(null);
  const [matchended, setmatchended] = useState(false);

  const [winner, setWinner] = useState("");
  const [batsmanscore1, setbatsmanscores1] = useState({
    Virat: 0,
    Rohit: 0,
    Hardik: 0,
  });
  const [batsmanscore2, setbatsmanscores2] = useState({
    Virat: 0,
    Rohit: 0,
    Hardik: 0,
  });
  const [ballfaced, setballfaced] = useState({
    Virat: 0,
    Rohit: 0,
    Hardik: 0,
  });

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const show2Alert = (message, type) => {
    setMatchAlert({ message, type });
    // setTimeout(() => {
    //   setAlert(null);
    // }, 2000);
    console.log("Showing alert:", message, type);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleNullRun = () => {
    setText("warning No run was scored");
    setTotalRuns(totalRuns);
    setBallCount(ballCount + 1);
    setrunScored(0);
    setnumberBall(numberBall + 1);
    setbatsmanscores1((prevBatsmanscores) => {
      return {
        ...prevBatsmanscores,
        [batsman]: prevBatsmanscores[batsman] + 0,
      };
    });
    setbatsmanscores2((prevBatsmanscores) => {
      return {
        ...prevBatsmanscores,
        [batsman]: prevBatsmanscores[batsman] + 0,
      };
    });
    setballfaced((prevBallfaced) => {
      return {
        ...prevBallfaced,
        [batsman]: prevBallfaced[batsman] + 0,
      };
    });
  };

  const handleOneRun = () => {
    setText("Straight to the fielder! Just a single");
    setTotalRuns(totalRuns + 1);
    setBallCount(ballCount + 1);
    setrunScored(1);
    setnumberBall(numberBall + 1);
    setbatsmanscores1((prevBatsmanscores) => {
      return {
        ...prevBatsmanscores,
        [batsman]: prevBatsmanscores[batsman] + 1,
      };
    });
    setbatsmanscores2((prevBatsmanscores) => {
      return {
        ...prevBatsmanscores,
        [batsman]: prevBatsmanscores[batsman] + 1,
      };
    });
    setballfaced((prevBallfaced) => {
      return {
        ...prevBallfaced,
        [batsman]: prevBallfaced[batsman] + 1,
      };
    });
  };

  const handleTwoRun = () => {
    setText("Straight to the fielder! Manages to take a double");
    setTotalRuns(totalRuns + 2);
    setBallCount(ballCount + 1);
    setrunScored(2);
    setnumberBall(numberBall + 1);
    setbatsmanscores1((prevBatsmanscores) => {
      return {
        ...prevBatsmanscores,
        [batsman]: prevBatsmanscores[batsman] + 2,
      };
    });
    setbatsmanscores2((prevBatsmanscores) => {
      return {
        ...prevBatsmanscores,
        [batsman]: prevBatsmanscores[batsman] + 2,
      };
    });
    setballfaced((prevBallfaced) => {
      return {
        ...prevBallfaced,
        [batsman]: prevBallfaced[batsman] + 1,
      };
    });
  };

  const handleThreeRun = () => {
    setText("Great running between the wickets, Three runs scored");
    setTotalRuns(totalRuns + 3);
    setBallCount(ballCount + 1);
    setrunScored(3);
    setnumberBall(numberBall + 1);
    setbatsmanscores1((prevBatsmanscores) => {
      return {
        ...prevBatsmanscores,
        [batsman]: prevBatsmanscores[batsman] + 3,
      };
    });
    setbatsmanscores2((prevBatsmanscores) => {
      return {
        ...prevBatsmanscores,
        [batsman]: prevBatsmanscores[batsman] + 3,
      };
    });
    setballfaced((prevBallfaced) => {
      return {
        ...prevBallfaced,
        [batsman]: prevBallfaced[batsman] + 1,
      };
    });
  };

  const handleFourRun = () => {
    setText("That would be a Four!");
    setTotalRuns(totalRuns + 4);
    setBallCount(ballCount + 1);
    setrunScored(4);
    setnumberBall(numberBall + 1);
    setbatsmanscores1((prevBatsmanscores) => {
      return {
        ...prevBatsmanscores,
        [batsman]: prevBatsmanscores[batsman] + 4,
      };
    });
    setbatsmanscores2((prevBatsmanscores) => {
      return {
        ...prevBatsmanscores,
        [batsman]: prevBatsmanscores[batsman] + 4,
      };
    });
    setballfaced((prevBallfaced) => {
      return {
        ...prevBallfaced,
        [batsman]: prevBallfaced[batsman] + 1,
      };
    });
  };

  const handleSixRun = () => {
    setText("Mahi finishes off in style! That's a Maximum");
    setTotalRuns(totalRuns + 6);
    setBallCount(ballCount + 1);
    setrunScored(6);
    setnumberBall(numberBall + 1);
    setbatsmanscores1((prevBatsmanscores) => {
      return {
        ...prevBatsmanscores,
        [batsman]: prevBatsmanscores[batsman] + 6,
      };
    });
    setbatsmanscores2((prevBatsmanscores) => {
      return {
        ...prevBatsmanscores,
        [batsman]: prevBatsmanscores[batsman] + 6,
      };
    });
    setballfaced((prevBallfaced) => {
      return {
        ...prevBallfaced,
        [batsman]: prevBallfaced[batsman] + 1,
      };
    });
  };

  const milestones = () => {
    if (batsmanscore1["Virat"] >= 50 && batsmanscore1["Virat"] < 100) {
      return `Congratulations Virat for the Half century in ${ballfaced["Virat"]}`;
    } else if (totalRuns >= 100) {
      return `Congratulations Virat for the Century in ${ballfaced["Virat"]}`;
    } else if (totalRuns >= 200) {
      return `Congratulations Virat for the Double century in ${ballfaced["Virat"]}`;
    } else if (totalRuns >= 300) {
      return `Congratulations Virat for the Tripple century in ${ballfaced["Virat"]}`;
    }
    if (batsmanscore1["Rohit"] >= 50 && batsmanscore1["Rohit"] < 100) {
      return `Congratulations Rohit for the Half century in ${ballfaced["Rohit"]}`;
    } else if (totalRuns >= 100) {
      return `Congratulations Rohit for the Century in ${ballfaced["Rohit"]}`;
    } else if (totalRuns >= 200) {
      return `Congratulations Rohit for the Double century in ${ballfaced["Rohit"]}`;
    } else if (totalRuns >= 300) {
      return `Congratulations Rohit for the Tripple century in ${ballfaced["Rohit"]}`;
    }
    if (batsmanscore1["Hardik"] >= 50 && batsmanscore1["Hardik"] < 100) {
      return `Congratulations Hardik for the Half century in ${ballfaced["Hardik"]}`;
    } else if (totalRuns >= 100) {
      return `Congratulations Hardik for the Century in ${ballfaced["Hardik"]}`;
    } else if (totalRuns >= 200) {
      return `Congratulations Hardik for the Double century in ${ballfaced["Hardik"]}`;
    } else if (totalRuns >= 300) {
      return `Congratulations Hardik for the Tripple century in ${ballfaced["Hardik"]}`;
    }
    if (batsmanscore2["Virat"] >= 50 && batsmanscore2["Virat"] < 100) {
      return `Congratulations Virat for the Half century in ${ballfaced["Virat"]}`;
    } else if (totalRuns >= 100) {
      return `Congratulations Virat for the Century in ${ballfaced["Virat"]}`;
    } else if (totalRuns >= 200) {
      return `Congratulations Virat for the Double century in ${ballfaced["Virat"]}`;
    } else if (totalRuns >= 300) {
      return `Congratulations Virat for the Tripple century in ${ballfaced["Virat"]}`;
    }
    if (batsmanscore2["Rohit"] >= 50 && batsmanscore2["Rohit"] < 100) {
      return `Congratulations Rohit for the Half century in ${ballfaced["Rohit"]}`;
    } else if (totalRuns >= 100) {
      return `Congratulations Rohit for the Century in ${ballfaced["Rohit"]}`;
    } else if (totalRuns >= 200) {
      return `Congratulations Rohit for the Double century in ${ballfaced["Rohit"]}`;
    } else if (totalRuns >= 300) {
      return `Congratulations Rohit for the Tripple century in ${ballfaced["Rohit"]}`;
    }
    if (batsmanscore2["Hardik"] >= 50 && batsmanscore2["Hardik"] < 100) {
      return `Congratulations Hardik for the Half century in ${ballfaced["Hardik"]}`;
    } else if (totalRuns >= 100) {
      return `Congratulations Hardik for the Century in ${ballfaced["Hardik"]}`;
    } else if (totalRuns >= 200) {
      return `Congratulations Hardik for the Double century in ${ballfaced["Hardik"]}`;
    } else if (totalRuns >= 300) {
      return `Congratulations Hardik for the Tripple century in ${ballfaced["Hardik"]}`;
    }
    return "";
  };

  const handleNewOver = () => {
    if (over < 2 * matchlimit) {
      props.verybadalert();
    }
    console.log("Bowler state:", bowler);
    setBallCount(0);
    setOver(over + 1);
    setOverSecond(overSecond + 1);
    setnumberBall(0);
    setBatsman(nonbatsman);
    setnonBatsman(batsman);
    console.log("Bowler state:", bowler);
    setrunScored("null");
    setBowler("bowler");
    setwidefaced(false);
    console.log("over", over);
    console.log("oversecond", overSecond);
  };

  useEffect(() => {
    if (over > matchlimit && innings === 1) {
      setinnings(2);
      setOverSecond(1);
      setbatsmanscores1["Virat"] = 0;
      setbatsmanscores1["Rohit"] = 0;
      setbatsmanscores1["Hardik"] = 0;
      setallbatsmanruns2(
        batsmanscore2["Virat"] +
          batsmanscore2["Rohit"] +
          batsmanscore2["Hardik"]
      );
      // showAlert("This is the second innings", "success");
    }
    // if (ove) {
    //   show2Alert("Select a Bowler", "warning");
    // }
    // if (over < 2 * matchlimit && winner === "The winner will be decided soon") {
    //   setmanofmatch("Some one From the Team");
    // }
    if (ballCount === 6) {
      showAlert("End of the over", "success");
    }
    if (over >= 0 && over < matchlimit) {
      setinnings(1);
    }
    if (over > 2 * matchlimit) {
      showAlert("End of Match", "warning");
      setmatchended(true);
    }

    if (batsmanout === "Virat" && wicket <= 1) {
      if (nonbatsman === "Rohit") {
        setBatsman("Hardik");
      } else {
        setBatsman("Rohit");
      }
    } else if (batsmanout === "Rohit" && wicket <= 1) {
      if (nonbatsman === "Virat") {
        setBatsman("Hardik");
      }
      setBatsman("Virat");
    } else if (batsmanout === "Hardik" && wicket <= 1) {
      if (nonbatsman === "Virat") {
        setBatsman("Rohit");
      }
      setBatsman("Virat");
    }
    if (innings === 1) {
      setallbatsmanruns1(
        batsmanscore1["Virat"] +
          batsmanscore1["Rohit"] +
          batsmanscore1["Hardik"]
      );
    }
    if (innings === 2) {
      setallbatsmanruns2(
        batsmanscore2["Virat"] +
          batsmanscore2["Rohit"] +
          batsmanscore2["Hardik"]
      );
    }
    if (wicket > 1) {
      setBallCount(0);
      setBatsman("Batsman");
      setBowler("Bowler");
      setIsMatchStarted("false");
      setOver(1);
      setOverSecond(1);
      setText(" ");
      setTotalRuns(0);
      setinnings("null");
      setmatchlimit(1);
      setnonBatsman("Non Striker Batsman");
      setnumberBall(0);
      setrunScored(0);
      show2Alert("The match has Ended", "success");
    }
    if (innings === 2) {
      setbatsmanscores1(0);
      setallbatsmanruns2(
        batsmanscore2["Virat"] +
          batsmanscore2["Rohit"] +
          batsmanscore2["Hardik"]
      );
    }
    // const sendalert = () => {
    //   if (over > 2 * matchlimit) {
    //     props.verybadalert2();
    //   }
    // };

    const determineWinner = () => {
      if (matchended) {
        if (allbatsmanruns1 > allbatsmanruns2) {
          setWinner("Team 1 is the winner");
        } else if (allbatsmanruns1 < allbatsmanruns2) {
          setWinner("Team 2 is the Winner");
        } else {
          setWinner("The winner will be decided soon");
        }
      } else {
        setWinner("The winner will be decided soon");
      }
    };

    const determineManOfTheMatch = () => {
      let motm = "";
      if (matchended) {
        if (allbatsmanruns1 > allbatsmanruns2) {
          if (
            batsmanscore1["Virat"] > batsmanscore1["Rohit"] &&
            batsmanscore1["Virat"] > batsmanscore1["Hardik"]
          ) {
            motm = "Virat";
          } else if (
            batsmanscore1["Rohit"] > batsmanscore1["Virat"] &&
            batsmanscore1["Rohit"] > batsmanscore1["Hardik"]
          ) {
            motm = "Rohit";
          } else if (
            batsmanscore1["Hardik"] > batsmanscore1["Virat"] &&
            batsmanscore1["Hardik"] > batsmanscore1["Rohit"]
          ) {
            motm = "Hardik";
          } else {
            motm = "Someone From the Team";
          }
        } else {
          if (
            batsmanscore2["Virat"] > batsmanscore2["Rohit"] &&
            batsmanscore2["Virat"] > batsmanscore2["Hardik"]
          ) {
            motm = "Virat";
          } else if (
            batsmanscore2["Rohit"] > batsmanscore2["Virat"] &&
            batsmanscore2["Rohit"] > batsmanscore2["Hardik"]
          ) {
            motm = "Rohit";
          } else if (
            batsmanscore2["Hardik"] > batsmanscore2["Virat"] &&
            batsmanscore2["Hardik"] > batsmanscore2["Rohit"]
          ) {
            motm = "Hardik";
          } else if (
            batsmanscore2["Hardik"] === batsmanscore2["Virat"] &&
            batsmanscore2["Hardik"] > batsmanscore2["Rohit"]
          ) {
            motm =
              ballfaced["Hardik"] > ballfaced["Virat?"] ? "Virat" : "Hardik";
          } else if (
            batsmanscore2["Hardik"] === batsmanscore2["Rohit"] &&
            batsmanscore2["Hardik"] > batsmanscore2["Virat"]
          ) {
            motm =
              ballfaced["Hardik"] > ballfaced["Rohit"] ? "Rohit" : "Hardik";
          } else if (
            batsmanscore2["Virat"] === batsmanscore2["Rohit"] &&
            batsmanscore2["Hardik"] < batsmanscore2["Rohit"]
          ) {
            motm = ballfaced["Rohit"] > ballfaced["Virat"] ? "Virat" : "Rohit";
          } else {
            motm = "Some one From the Team";
          }
        }
      } else {
        motm = "Some one From the Team";
      }

      setmanofmatch(motm);
    };

    determineWinner();
    determineManOfTheMatch();
    // sendalert();
  }, [
    allbatsmanruns1,
    allbatsmanruns2,
    batsmanscore1,
    batsmanscore2,
    ballCount,
    matchlimit,
    over,
    winner,
    batsmanout,
    nonbatsman,
    wicket,
    innings,
    overSecond,
    matchended,
    ballfaced,
  ]);

  const renderPhoto = () => {
    if (winner !== "The winner will be decided soon") {
      if (manofmatch === "Virat") {
        return virat;
      } else if (manofmatch === "Rohit") {
        return rohit;
      } else if (manofmatch === "Hardik") {
        return hardik;
      } else {
        return cricket;
      }
    } else {
      return cricket;
    }
  };
  const setcolor = () => {
    return document.body.style.backgroundColor === "black" ? "white" : "black";
  };
  const setuniquecolor = () => {
    return document.body.style.backgroundColor === "black" ? "#fff" : "black";
  };

  const handlesetmatchlimit = (limit) => {
    setmatchlimit(limit);
    setOver(1);
    setinnings(1);
    showAlert(`This is a ${limit} overs Match`, "success");
    console.log("matchlimit is set");
  };
  const setPerBallScorefor1 = () => {
    if (numberBall === 1) {
      return runScored;
    }
    if (numberBall === 1 && byefaced === true) {
      return "BYE";
    }
    if (numberBall === 1 && legbyefaced === true) {
      return "L BYE";
    }
  };
  const setPerBallScorefor2 = () => {
    if (numberBall === 2) {
      return runScored;
    }
    if (numberBall === 2 && widefaced === "true") {
      return "WI";
    }
  };
  const setPerBallScorefor3 = () => {
    if (numberBall === 3) {
      return runScored;
    } else if (numberBall === 3 && widefaced === "true") {
      return "WI";
    }
  };
  const setPerBallScorefor4 = () => {
    if (numberBall === 4) {
      return runScored;
    } else if (numberBall === 4 && widefaced === "true") {
      return "WI";
    }
  };
  const setPerBallScorefor5 = () => {
    if (numberBall === 5) {
      return runScored;
    } else if (numberBall === 5 && widefaced === "true") {
      return "WI";
    }
  };
  const setPerBallScorefor6 = () => {
    if (numberBall === 6) {
      return runScored;
    } else if (numberBall === 6 && widefaced === "true") {
      return "WI";
    }
  };
  const display = () => {
    if (innings === 1) {
      return `Innings 1 Over ${over}`;
    } else if (innings === 2) {
      return `Innings 2 Over ${overSecond}`;
    }
  };
  const handleBatsman = (batsman) => {
    setBatsman(batsman);

    batsman !== nonbatsman
      ? showAlert(`${batsman} is selected as ON-Strike batsman`, "success")
      : show2Alert(
          "Same batsman cannot be selected as strike and non stike batsman",
          "warning"
        );
  };
  const handlenonbatsman = (nonbatsman) => {
    setnonBatsman(nonbatsman);
    batsman !== nonbatsman
      ? showAlert(`${nonbatsman} is selected as NON-Strike batsman`, "success")
      : show2Alert(
          "Same batsman cannot be selected as strike and non stike batsman",
          "warning"
        );
  };
  const handleBowler = (bowler) => {
    setBowler(bowler);
    if (innings === 1) {
      showAlert(
        `${bowler} is bowler for over ${over} of First innings`,
        "success"
      );
    } else if (innings === 2) {
      showAlert(
        `${bowler} is bowler for over ${overSecond} of Second innings`,
        "success"
      );
    }
  };
  const startmatch = () => {
    setIsMatchStarted(false);
    showAlert("This is the First innings", "success");
  };
  const handlecheckbatsman = () => {
    if (batsman === nonbatsman) {
      return "true";
    }
  };
  const restartmatch = () => {
    setBallCount(0);
    setBatsman("Batsman");
    setBowler("Bowler");
    setIsMatchStarted("false");
    setOver(1);
    setOverSecond(1);
    setText(" ");
    setTotalRuns(0);
    setinnings("null");
    setmatchlimit(1);
    setnonBatsman("Non Striker Batsman");
    setnumberBall(0);
    setrunScored(0);
    show2Alert("The match has Re-Started", "success");
  };
  const displayingText = () => {
    if (innings === 1) {
      switch (batsman) {
        case "Virat":
        case "Rohit":
        case "Hardik":
          return `Total runs scored by the ${batsman} is ${batsmanscore1[batsman]}`;
        default:
          return "";
      }
    }
    if (innings === 2) {
      switch (batsman) {
        case "Virat":
        case "Rohit":
        case "Hardik":
          return `Total runs scored by the ${batsman} is ${batsmanscore2[batsman]}`;
        default:
          return "";
      }
    }
  };
  const calculatestrikerate = (batsman) => {
    if (innings === 1) {
      if (ballfaced[batsman] === 0) {
        return "Null";
      }
      let strike = batsmanscore1[batsman] / ballfaced[batsman];
      return 100 * strike;
    }
    if (innings === 2) {
      if (ballfaced[batsman] === 0) {
        return "Null";
      }
      let strike = batsmanscore2[batsman] / ballfaced[batsman];
      return 100 * strike;
    }
  };
  // const check = () => {
  //   let button = document.getElementByClassName("btn btn-primary");
  //   button.addEventListner("click", () => {
  //     show2Alert("Select a bowler", "warning");
  //     console.log("click+1");
  //   });
  // };
  const handledisabled = (limit) => {
    if (matchlimit > 1) {
      return true;
    }
    return false;
  };
  const handlewicket = (type) => {
    show2Alert(`${batsman} is ${type}!`, "warning");
    if (wicket > 1) {
      show2Alert("No other batsman is letf,Match Ended!", "warning");
    }
    setbatsmanout(batsman);
    setwicket(wicket + 1);
    console.log("Wicket is down");
    setBallCount(ballCount + 1);
    setcheckwicketdown(true);
  };

  const handlecheckbatout = (batsman) => {
    if (batsman === batsmanout) {
      return true;
    } else {
      return false;
    }
  };
  const handlewide = () => {
    setallbatsmanruns1(allbatsmanruns1 + 1);
    setallbatsmanruns2(allbatsmanruns2 + 1);
    // setBallCount(ballCount + 1);
    setwidefaced(true);
  };
  const handlebye = () => {
    setballfaced((prevBallfaced) => {
      return {
        ...prevBallfaced,
        [batsman]: prevBallfaced[batsman] + 1,
      };
    });
    setallbatsmanruns1(allbatsmanruns1 + 1);
    setallbatsmanruns2(allbatsmanruns2 + 1);
    setBallCount(ballCount + 1);
    setbyefaced(true);
  };
  const handlelegbye = () => {
    setballfaced((prevBallfaced) => {
      return {
        ...prevBallfaced,
        [batsman]: prevBallfaced[batsman] + 1,
      };
    });
    setbatsmanscores1((prevBatsmanscores) => {
      return {
        ...prevBatsmanscores,
        [batsman]: prevBatsmanscores[batsman] + 1,
      };
    });
    setbatsmanscores2((prevBatsmanscores) => {
      return {
        ...prevBatsmanscores,
        [batsman]: prevBatsmanscores[batsman] + 1,
      };
    });
    setBallCount(ballCount + 1);
    setlegbyefaced(true);
  };
  const handlenoball = () => {
    setbatsmanscores1((prevBatsmanscores) => {
      return {
        ...prevBatsmanscores,
        [batsman]: prevBatsmanscores[batsman] + 1,
      };
    });
    setbatsmanscores2((prevBatsmanscores) => {
      return {
        ...prevBatsmanscores,
        [batsman]: prevBatsmanscores[batsman] + 1,
      };
    });
    setnoballfaced(true);
  };
  const displaytotalruns = () => {
    if (innings === 1) {
      return allbatsmanruns1;
    }
    if (innings === 2) {
      return allbatsmanruns2;
    }
  };

  const rendercomponenet = () => {
    if (widefaced) {
      return (
        <div
          className="mx-3"
          style={{
            width: "50px",
            float: "left",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            backgroundColor: "#bbb",
            borderRadius: "50%",
            // display: "inline-block",
            textAlign: "center",
          }}
        >
          Wide
        </div>
      );
    } else if (noballfaced) {
      return (
        <div
          className="mx-3"
          style={{
            width: "50px",
            float: "left",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            backgroundColor: "#bbb",
            borderRadius: "50%",
            // display: "inline-block",
            textAlign: "center",
          }}
        >
          No-ball
        </div>
      );
    } else if (byefaced) {
      return (
        <div
          className="mx-3"
          style={{
            width: "50px",
            float: "left",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            backgroundColor: "#bbb",
            borderRadius: "50%",
            // display: "inline-block",
            textAlign: "center",
          }}
        >
          BYE
        </div>
      );
    } else if (legbyefaced) {
      return (
        <div
          className="mx-3"
          style={{
            width: "50px",
            float: "left",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            backgroundColor: "#bbb",
            borderRadius: "50%",
            // display: "inline-block",
            textAlign: "center",
          }}
        >
          L-BYE
        </div>
      );
    } else if (checkwicketdown) {
      return (
        <div
          className="mx-3"
          style={{
            width: "50px",
            float: "left",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            backgroundColor: "#bbb",
            borderRadius: "50%",
            // display: "inline-block",
            textAlign: "center",
          }}
        >
          W
        </div>
      );
    } else {
      return "";
    }
  };
  // const displayawards = () => {
  //   if (allbatsmanruns1 > allbatsmanruns2) {
  //     return "Team 1 is the winner";
  //   } else if (allbatsmanruns1 < allbatsmanruns2) {
  //     return "Team 2 is the Winner";
  //   } else {
  //     return "The winner will the decided soon";
  //   }
  // };
  // const displaymanofthematch = () => {
  //   if (allbatsmanruns1 > allbatsmanruns2) {
  //     if (batsmanscore1["Virat"] > batsmanscore1["Rohit"]) {
  //       if (batsmanscore1["Virat"] > batsmanscore1["Hardik"]) {
  //         setmanofmatch("Virat");
  //         return "The Man Of The Match is Virat Kohli";
  //       } else {
  //         setmanofmatch("Hardik");
  //         return "The Man Of The Match is Hardik Pandaya";
  //       }
  //     }
  //     if (batsmanscore1["Rohit"] > batsmanscore1["Virat"]) {
  //       if (batsmanscore1["Rohit"] > batsmanscore1["Hardik"]) {
  //         setmanofmatch("Rohit");
  //         return "The Man Of The Match is Rohit Sharma";
  //       } else {
  //         setmanofmatch("Hardik");
  //         return "The Man Of The Match is Hardik Pandaya";
  //       }
  //     }
  //   } else {
  //     if (batsmanscore2["Virat"] > batsmanscore2["Rohit"]) {
  //       if (batsmanscore2["Virat"] > batsmanscore2["Hardik"]) {
  //         setmanofmatch("Virat");
  //         return "The Man Of The Match is Virat Kohli";
  //       } else {
  //         setmanofmatch("Hardik");
  //         return "The Man Of The Match is Hardik Pandaya";
  //       }
  //     }
  //     if (batsmanscore2["Rohit"] > batsmanscore2["Virat"]) {
  //       if (batsmanscore2["Rohit"] > batsmanscore2["Hardik"]) {
  //         setmanofmatch("Rohit");
  //         return "The Man Of The Match is Rohit Sharma";
  //       } else {
  //         setmanofmatch("Hardik");
  //         return "The Man Of The Match is Hardik Pandaya";
  //       }
  //     }
  //   }
  // };

  return (
    <>
      <AlertsCricket alert={alert} />
      <Alerts alert={matchalert} />

      <h1
        style={{
          textAlign: "center",
          color: setcolor(),
          marginTop: "20px",
        }}
      >
        Cricket Mania
      </h1>
      <NoOvers
        setmatchoverlimit={handlesetmatchlimit}
        setBatsman={handleBatsman}
        setNonBatsman={handlenonbatsman}
        setBowler={handleBowler}
        startmatch={startmatch}
        restartmatch={restartmatch}
        checkbatsman={handlecheckbatsman}
        disabled={handledisabled}
        checkbatout={handlecheckbatout}
      />
      <div className="container-fluid">
        <div className="d-flex">
          <div className="p-0 m-3 mx-0" style={{ flex: "1" }}>
            <div className="btn-group-vertical">
              <h2
                style={{ color: props.mode === "dark" ? "white" : "#02081b" }}
              >
                Hit the ball!
              </h2>
              <button
                type="button"
                className="btn btn-primary my-1"
                onClick={handleNullRun}
                disabled={
                  ballCount === 6 ||
                  over > 2 * matchlimit ||
                  isMatchStarted ||
                  bowler === "bowler"
                }
              >
                No run
              </button>
              <button
                type="button"
                className="btn btn-primary my-1"
                onClick={handleOneRun}
                disabled={
                  ballCount === 6 ||
                  over > 2 * matchlimit ||
                  isMatchStarted ||
                  bowler === "bowler"
                }
              >
                Single
              </button>
              <button
                type="button"
                className="btn btn-primary my-1"
                onClick={handleTwoRun}
                disabled={
                  ballCount === 6 ||
                  over > 2 * matchlimit ||
                  isMatchStarted ||
                  bowler === "bowler"
                }
              >
                Double
              </button>
              <button
                type="button"
                className="btn btn-primary my-1"
                onClick={handleThreeRun}
                disabled={
                  ballCount === 6 ||
                  over > 2 * matchlimit ||
                  isMatchStarted ||
                  bowler === "bowler"
                }
              >
                Triple
              </button>
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle my-1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  disabled={
                    ballCount === 6 ||
                    over > 2 * matchlimit ||
                    isMatchStarted ||
                    bowler === "bowler"
                  }
                >
                  Boundary
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      type="button"
                      className="btn btn-primary my-1"
                      onClick={handleFourRun}
                      disabled={
                        ballCount === 6 ||
                        over > 2 * matchlimit ||
                        isMatchStarted ||
                        bowler === "bowler"
                      }
                    >
                      Four
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="btn btn-primary my-2"
                      onClick={handleSixRun}
                      disabled={
                        ballCount === 6 ||
                        over > 2 * matchlimit ||
                        isMatchStarted ||
                        bowler === "bowler"
                      }
                    >
                      Six
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="p-9 m-3 mx-0"
            style={{ flex: "3", paddingRight: "200px" }}
          >
            <div className="Textform">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                <h2
                  style={{ color: props.mode === "dark" ? "white" : "#02081b" }}
                >
                  Preview
                </h2>
              </label>
              <textarea
                className={`form-control navbar-expand-lg bg-${props.mode}`}
                id="exampleFormControlTextarea1"
                rows="8"
                value={text}
                onChange={handleOnChange}
                style={{ color: props.mode === "dark" ? "white" : "#02081b" }}
              ></textarea>
            </div>
          </div>
          <div
            className="p-9 m-4 btn-group-vertical"
            style={{ marginRight: "-100px" }}
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleNewOver}
              disabled={
                ballCount !== 6 || over > 2 * matchlimit || bowler === "null"
              }
              style={{ width: "106px", height: "40px", color: setcolor() }}
            >
              New Over
            </button>
            <div
              className="btn-group-vertical"
              style={{ marginRight: "150px" }}
            >
              <button
                type="button"
                className="btn btn-primary my-1"
                onClick={handlenoball}
                disabled={
                  ballCount === 6 ||
                  over > 2 * matchlimit ||
                  isMatchStarted ||
                  bowler === "bowler"
                }
              >
                No-Ball
              </button>
              <button
                type="button"
                className="btn btn-primary my-1"
                onClick={handlebye}
                disabled={
                  ballCount === 6 ||
                  over > 2 * matchlimit ||
                  isMatchStarted ||
                  bowler === "bowler"
                }
              >
                Bye
              </button>
              <button
                type="button"
                className="btn btn-primary my-1"
                onClick={handlelegbye}
                disabled={
                  ballCount === 6 ||
                  over > 2 * matchlimit ||
                  isMatchStarted ||
                  bowler === "bowler"
                }
              >
                Leg bye
              </button>
              <button
                type="button"
                className="btn btn-primary my-1"
                onClick={handlewide}
                disabled={
                  ballCount === 6 ||
                  over > 2 * matchlimit ||
                  isMatchStarted ||
                  bowler === "bowler"
                }
              >
                Wide
              </button>
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle my-1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Wicket!
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      type="button"
                      className="btn btn-primary my-1"
                      onClick={() => {
                        handlewicket("Caught out");
                      }}
                      disabled={
                        wicket > 1 ||
                        ballCount === 6 ||
                        over > 2 * matchlimit ||
                        isMatchStarted ||
                        bowler === "bowler"
                      }
                    >
                      Caught
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="btn btn-primary my-2"
                      onClick={() => {
                        handlewicket("Bowled out");
                      }}
                      disabled={
                        wicket > 1 ||
                        ballCount === 6 ||
                        over > 2 * matchlimit ||
                        isMatchStarted ||
                        bowler === "bowler"
                      }
                    >
                      Bowled
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="btn btn-primary my-2"
                      onClick={() => {
                        handlewicket("lbw Out");
                      }}
                      disabled={
                        wicket > 1 ||
                        ballCount === 6 ||
                        over > 2 * matchlimit ||
                        isMatchStarted ||
                        bowler === "bowler"
                      }
                    >
                      LBW
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="btn btn-primary my-2"
                      onClick={() => {
                        handlewicket("Stumped Out");
                      }}
                      disabled={
                        wicket > 1 ||
                        ballCount === 6 ||
                        over > 2 * matchlimit ||
                        isMatchStarted ||
                        bowler === "bowler"
                      }
                    >
                      Stumped
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="btn btn-primary my-2"
                      onClick={() => {
                        handlewicket("Hit-Wicket Out");
                      }}
                      disabled={
                        wicket > 1 ||
                        ballCount === 6 ||
                        over > 2 * matchlimit ||
                        isMatchStarted ||
                        bowler === "bowler"
                      }
                    >
                      Hit-Wicket
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="btn btn-primary my-2"
                      onClick={() => {
                        handlewicket("Run Out");
                      }}
                      disabled={
                        wicket > 1 ||
                        ballCount === 6 ||
                        over > 2 * matchlimit ||
                        isMatchStarted ||
                        bowler === "bowler"
                      }
                    >
                      Run-Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="btn-group">
        <h2
          className="mx-3"
          style={{ color: props.mode === "dark" ? "white" : "#02081b" }}
        >
          Scoreboard
        </h2>

        <div
          style={{
            color: setcolor(),
            marginLeft: "300px",
            marginRight: "0px",
            marginTop: "23px",
          }}
          className="haha"
        >
          <b>{display()}</b>
        </div>

        <div className="row" style={{ marginLeft: "10px", marginTop: "10px" }}>
          <div
            className="mx-3"
            style={{
              width: "50px",
              float: "left",
              height: "50px",
              backgroundColor: "#bbb",
              borderRadius: "50%",
              // display: "inline-block",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {setPerBallScorefor1()}
          </div>
          <div
            className="mx-3"
            style={{
              width: "50px",
              float: "left",
              height: "50px",

              backgroundColor: "#bbb",
              borderRadius: "50%",
              // display: "inline-block",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {setPerBallScorefor2()}
          </div>
          <div
            className="mx-3"
            style={{
              width: "50px",
              float: "left",
              height: "50px",

              backgroundColor: "#bbb",
              borderRadius: "50%",
              // display: "inline-block",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {setPerBallScorefor3()}
          </div>
          <div
            className="mx-3"
            style={{
              width: "50px",
              float: "left",
              height: "50px",

              backgroundColor: "#bbb",
              borderRadius: "50%",
              // display: "inline-block",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {setPerBallScorefor4()}
          </div>
          <div
            className="mx-3"
            style={{
              width: "50px",
              float: "left",
              height: "50px",

              backgroundColor: "#bbb",
              borderRadius: "50%",
              // display: "inline-block",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {setPerBallScorefor5()}
          </div>
          <div
            className="mx-3"
            style={{
              width: "50px",
              float: "left",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              backgroundColor: "#bbb",
              borderRadius: "50%",
              // display: "inline-block",
              textAlign: "center",
            }}
          >
            {setPerBallScorefor6()}
          </div>
          {rendercomponenet()}
        </div>
      </div>
      <div className="mx3" style={{ marginTop: "-20px", marginBottom: "30px" }}>
        <p
          className="mx-3"
          style={{
            color: props.mode === "dark" ? "white" : "#02081b",
          }}
        >
          {`${batsman} to ${bowler} ${runScored}`}
          <br></br>
          {`${nonbatsman} on Non-Striker's End`}
          <br></br>
          {displayingText()}
        </p>
        <p
          className="he"
          style={{ color: props.mode === "dark" ? "white" : "#02081b" }}
        >
          {milestones()}
        </p>
      </div>
      <h2 className="mx-3" style={{ color: setcolor() }}>
        Points Table
      </h2>
      <table className="table btn-group">
        {/* <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Batsman</th>
            <th scope="col">Score</th>
            <th scope="col">Strike Rate</th>
          </tr>
        </thead> */}
        <tbody
          className="mx-3"
          style={{ backgroundColor: setuniquecolor(), color: setcolor() }}
        >
          <tr>
            <th scope="row">S.no</th>
            <td>
              <b>Batsman</b>
            </td>
            <td>
              <b>Score</b>
            </td>
            <td>
              <b>Strike Rate</b>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Virat Kohli</td>
            <td>
              {innings === 1 ? batsmanscore1["Virat"] : batsmanscore2["Virat"]}
            </td>
            <td>{calculatestrikerate("Virat")}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Rohit Sharma</td>
            <td>
              {innings === 1 ? batsmanscore1["Rohit"] : batsmanscore2["Rohit"]}
            </td>
            <td>{calculatestrikerate("Rohit")}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Hardik Pandaya</td>
            <td>
              {innings === 1
                ? batsmanscore1["Hardik"]
                : batsmanscore2["Hardik"]}
            </td>
            <td>{calculatestrikerate("Hardik")}</td>
          </tr>
          <tr>
            <th scope="row">*</th>
            <td>Team Score</td>
            <td>{displaytotalruns()}</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <div
        className="card"
        style={{ width: "18rem", marginLeft: "450px", marginTop: "-280px" }}
      >
        <img src={renderPhoto()} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Awards!</h5>
          <p className="card-text">{winner}</p>
          <p className="card-text">{`The Man Of The Match is ${manofmatch}`}</p>
        </div>
      </div>
    </>
  );
}
