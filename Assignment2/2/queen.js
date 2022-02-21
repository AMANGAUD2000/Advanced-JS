function getData() {
  let qR = document.getElementById("yrRow").value;
  let qC = document.getElementById("yrColumn").value;
  let oR = document.getElementById("oppRow").value;
  let oC = document.getElementById("oppColumn").value;
  class Queen {
    constructor() {
      this.qR = qR;
      this.qC = qC;
      this.oR = oR;
      this.oC = oC;
    }
    canAttack() {
      if (this.qR == this.oR) return true;
      if (this.qC == this.oC) return true;
      if (Math.abs(this.qR - this.oR) == Math.abs(this.qC - this.oC))
        return true;

      return false;
    }
  }
  let que = new Queen(qR, qC, oR, oC);
  if (que.canAttack(qR, qC, oR, oC)) alert("Queens in Attaching position");
  else alert("Queens cannot attack each other");
}
