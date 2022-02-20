const chemistry = document.querySelector("#chemistry");
const button = document.querySelector("button");
const addNames = async () => {
  const jokeText = await getNobelPrizeData();
};

const getNobelPrizeData = async () => {
  try {
    const res = await axios.get("http://api.nobelprize.org/v1/prize.json");

    // console.log(res.data.prizes[0]);
    for (let i = 0; i < res.data.prizes.length; i++) {
      if (
        res.data.prizes[i].year >= 2000 &&
        res.data.prizes[i].year <= 2019 &&
        res.data.prizes[i].category === "chemistry"
      ) {
        for (let j = 0; j < res.data.prizes[i].laureates.length; j++) {
          let name =
            res.data.prizes[i].laureates[j].firstname +
            " " +
            res.data.prizes[i].laureates[j].surname;
          const newLI = document.createElement("LI");
          newLI.append(name);
          chemistry.append(newLI);
          console.log(name);
        }
      }
    }
    return res;
  } catch (e) {
    return "No Data Available! Sorry :(";
  }
};

button.addEventListener("click", addNames);
