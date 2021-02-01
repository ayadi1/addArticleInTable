var td1,
  td2,
  tr,
  article,
  articleText,
  table,
  BSuprime,
  BModufer,
  td3,
  inputText,
  inputPrix;
// get element by id

table = document.getElementById("table");
var x = document.getElementById("button");
x.addEventListener("click", f1);
function f1() {
  var row = document.createElement("tr");
  table.appendChild(row);
  var text1 = document.getElementById("atricle").value;
  var text2 = document.getElementById("prix").value;
  var col1 = document.createElement("td");
  var col2 = document.createElement("td");
  var col3 = document.createElement("td");
  var col = document.createElement("td");

  for (var i = 0; i < 3; i++) {
    if (i == 0) {
      col1.appendChild(document.createTextNode(text1));
      col = col1;
    } else if (i == 1) {
      // col.appendChild(document.createTextNode(text2));
      if (text2 < 1000) {
        col2.appendChild(document.createTextNode(text2));
        col2.style.color = "red";
        col = col2;
      } else {
        col2.appendChild(document.createTextNode(text2));
        col2.style.color = "blue";
        col = col2;
      }
    } else {
      var button1 = document.createElement("input");
      var button2 = document.createElement("input");
      button1.setAttribute("type", "button");
      button2.setAttribute("type", "button");
      button1.setAttribute("value", "modifair");
      button2.setAttribute("value", "supr");
      col3.appendChild(button1);
      col3.appendChild(button2);
      col = col3;
    }
    row.appendChild(col);
  }
  var valid = document.createElement("input");
  valid.setAttribute("type", "button");
  valid.setAttribute("value", "valid");
  button1.addEventListener("click", function () {
    var inputText = document.createElement("input");
    var inputPrix = document.createElement("input");

    inputPrix.setAttribute("type", "text");
    inputText.setAttribute("type", "text");
    inputText.setAttribute("value", row.childNodes[0].childNodes[0].nodeValue);
    inputPrix.setAttribute("value", row.childNodes[1].childNodes[0].nodeValue);
    console.log(col2.childNodes[0].nodeValue);
    console.log(row.childNodes[1].childNodes[0].nodeValue);
    row.childNodes[0].replaceChild(inputText, row.childNodes[0].childNodes[0]);
    row.childNodes[1].replaceChild(inputPrix, row.childNodes[1].childNodes[0]);

    row.childNodes[2].replaceChild(valid, row.childNodes[2].childNodes[0]);
    // row.childNodes[2]
  });
  // modifaire row
  valid.addEventListener("click", function () {
    var newArticleName = document.createElement("td");
    var newArticlePrix = document.createElement("td");
    var text = document.createTextNode(row.childNodes[0].childNodes[0].value);
    var Prix = document.createTextNode(row.childNodes[1].childNodes[0].value);

    if (Prix.nodeValue < 1000) {
      newArticlePrix.style.color = "red";
    } else if (Prix.nodeValue > 1000) {
      newArticlePrix.style.color = "blue";
    } else {
      newArticlePrix.style.color = "black";
    }
    newArticlePrix.appendChild(Prix);
    newArticleName.appendChild(text);
    //
    row.replaceChild(newArticleName, row.childNodes[0]);
    //
    // col1.replaceChild(newArticleName,col1.childNodes[0]);
    row.replaceChild(newArticlePrix, row.childNodes[1]);
    // console.log(col3.childNodes[0]);
    //
    row.childNodes[2].replaceChild(button1, row.childNodes[2].childNodes[0]);
  });
  //delet Row
  button2.addEventListener("click", function () {
    // this.parentElement.parentElement.remove();
    var conf = confirm("are you  sure ?");
    if (conf == true) {
      this.parentElement.parentElement.remove();
    }
  });
}
