$(document).ready(() => {
  $("#submit").click(() => {
    let url = "battles.json";

    $.ajax({
      url: url,
      type: "get",
      dataType: "json",
      success: (result) => {
        let win = 0;
        let loss = 0;
        let total_defender_size = 0;
        let minOfDef = result[0].defender_size;
        let maxOfDef = result[0].defender_size;
        let attacker_king = result[0].attacker_king;
        let defender_king = result[0].defender_king;
        let region = result[0].region;
        let name = result[0].name;
        var arr = new Set();

        for (var i = 0; i < result.length; i++) {
          if (result[i].attacker_outcome == "win") {
            win += 1;
          } else {
            loss += 1;
          }

          total_defender_size += result[i].defender_size;
          arr.add(result[i].battle_type + " ");

          if (
            result[i].defender_size > maxOfDef &&
            result[i].defender_size != null
          )
            maxOfDef = result[i].defender_size;

          if (
            result[i].defender_size < minOfDef &&
            result[i].defender_size != null
          ) {
            minOfDef = result[i].defender_size;
            console.log(minOfDef);
          }
        }

        document.write("Most Active ");
        document.write("<br>");
        document.write("Attacker King :" + attacker_king);
        document.write("<br>");
        document.write("Defender King :" + defender_king);
        document.write("<br>");
        document.write("Name :" + name);
        document.write("<br>");
        document.write("Region :" + region);
        document.write("<br>");
        document.write("<br>");
        document.write("Attacker Outcome ");
        document.write("<br>");
        document.write("Win :" + win);
        document.write("<br>");
        document.write("Loss :" + loss);
        document.write("<br>");
        document.write("<br>");
        document.write("Battle Type ");
        document.write("Battle Type :" + Array.from(arr));
        document.write("<br>");
        document.write("<br>");
        document.write("Defender Size");
        document.write("<br>");
        document.write(
          "Average :" + Math.round(total_defender_size / result.length)
        );
        document.write("<br>");
        document.write("Minimum :" + minOfDef);
        document.write("<br>");
        document.write("Maximum :" + maxOfDef);
      },
      error: function (error) {
        alert("Something Went Wrong :(!");
      },
    });
  });
});
