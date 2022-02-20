const button = document.querySelector("button");
const table = document.getElementById("myTable");
const getData = async () => {
  const jokeText = await getAirlinesData();
};
const getAirlinesData = async () => {
  try {
    const res = await axios.get(
      "https://think.cs.vt.edu/corgis/datasets/json/airlines/airlines.json"
    );
    const details = res.data;
    for (let i = 0; i < details.length; i++) {
      let code = details[i].Airport.Name;
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = code;
      let flight = details[i].Statistics.Flights;

      if (
        flight.Cancelled +
          flight.Delayed +
          flight.Diverted +
          flight["On Time"] ==
        flight.Total
      ) {
        cell2.innerHTML = "YES";
      } else {
        cell2.innerHTML = "NO";
      }
    }
  } catch (e) {
    return "No Data Available! Sorry :(";
  }
};

button.addEventListener("click", getData);
