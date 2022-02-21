
const table = document.getElementById("myTable");
const getData = async () => {
  const request = await fetch(
    "https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json"
  );
  const data = await request.json();
  return data;
};
getData()
  .then((result) => {
    let name = "";
    let movies = "";
    let type = "";
    for (let i = 0; i < result.length; i++) {
      if (result[i].cast != null && result[i].cast != "") {
        name = result[i].cast;
      } else {
        name = "N/A";
      }

      if (result[i].genres != null && result[i].genres != "") {
        type = result[i].genres;
      } else {
        type = "N/A";
      }

      if (result[i].title != null && result[i].title != "") {
        movies = result[i].title;
      } else {
        movies = "N/A";
      }
      
      var row = table.insertRow(2);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      cell1.innerHTML = name;
      cell2.innerHTML = movies;
      cell3.innerHTML = type;
      cell4.innerHTML = movies;
      
    }
  })
  .catch((error) => {
    document.write("Cannot be displayed!");
  });
