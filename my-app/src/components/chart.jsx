import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { useState, useEffect } from "react";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip);

const backgroundColors = [
  "rgba(54, 162, 235, 0.5)",
  "rgba(255, 206, 86, 0.5)",
  "rgba(255, 99, 132, 0.5)",
  "rgba(75, 192, 192, 0.5)",
  "rgba(153, 102, 255, 0.5)",
  "rgba(255, 159, 64, 0.5)",
  "rgba(199, 199, 199, 0.5)",
  "rgba(83, 102, 255, 0.5)",
  "rgba(40, 159, 64, 0.5)",
  "rgba(210, 199, 199, 0.5)",
  "rgba(78, 52, 199, 0.5)",
];

const borderColors = [
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(255, 99, 132, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(159, 159, 159, 1)",
  "rgba(83, 102, 255, 1)",
  "rgba(40, 159, 64, 1)",
  "rgba(210, 199, 199, 1)",
  "rgba(78, 52, 199, 1)",
];

export default function Chart() {
  const [data, setdata] = useState({
    labels: [],
    datasets: [
      {
        label: "# of members",
        data: [],
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 3,
      },
    ],
  });

  useEffect(() => {
    axios
      .get("https://thronesapi.com/api/v2/Characters")
      .then((resp) => {
        setdata(getData(resp.data));
        return resp;
      })
      .catch((err) => {
        console.log("Error:\n" + err);
      });
  }, []);

  return <Doughnut className="p-3" data={data} />;
}

/* creats a chart data object with the character data*/
function getData(data) {
  let families = [];
  let numMembers = [];

  for (let i = 0; i < data.length; i++) {
    let family = data[i].family;
    let index = matchHouse(family, families);

    //consolidate families that don't have 'House ' in the name
    if (index === -1 && !family.includes("House ")) {
      family = "Non-House Family";
      index = families.findIndex((e) => e.includes(family));
    }

    if (index < 0) {
      families.push(family);
      numMembers.push(1);
    } else {
      numMembers[index] += 1;
    }
  }

  return {
    labels: families,
    datasets: [
      {
        label: "# of members",
        data: numMembers,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 3,
      },
    ],
  };
}

function matchHouse(fam, families) {
  //if the name is already in the list or its a part of another name
  const i = families.findIndex((e) => e.includes(fam));
  if (i > -1) return i;
  //check if there are names spelt similarly (Typos)
  const j = families.findIndex(
    (e) =>
      levenshteinDistance(
        fam.replace("House ", ""),
        e.replace("House ", "")
      ) === 1
  );
  return j;
}

/*
 Levenshtein Distance: Finds the number of differences between 2 strings
 From https://www.tutorialspoint.com/levenshtein-distance-in-javascript
*/
function levenshteinDistance(str1 = "", str2 = "") {
  const track = Array(str2.length + 1)
    .fill(null)
    .map(() => Array(str1.length + 1).fill(null));
  for (let i = 0; i <= str1.length; i += 1) {
    track[0][i] = i;
  }
  for (let j = 0; j <= str2.length; j += 1) {
    track[j][0] = j;
  }
  for (let j = 1; j <= str2.length; j += 1) {
    for (let i = 1; i <= str1.length; i += 1) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      track[j][i] = Math.min(
        track[j][i - 1] + 1, // deletion
        track[j - 1][i] + 1, // insertion
        track[j - 1][i - 1] + indicator // substitution
      );
    }
  }
  return track[str2.length][str1.length];
}
