const URL = "https://api.github.com/search/repositories?q=";

async function searchGitHub() {
  await searchRepo();
}

function searchRepo() {
  inputData = getInput();
  if (inputData.owner !== "" || inputData.repo !== "") {
    let url =
      URL + "Repository:" + inputData["owner"] + "/" + inputData["repo"];
    $.get(url, (data, status) => {
      console.log(data.items);
      $(".result").html("Results on console");
    });
  } else {
    alert("User/Repo not found");
  }
}

function getInput() {
  let inputData = {};
  inputData["owner"] = document.getElementById("owner").value;
  inputData["repo"] = document.getElementById("repo").value;
  return inputData;
}
