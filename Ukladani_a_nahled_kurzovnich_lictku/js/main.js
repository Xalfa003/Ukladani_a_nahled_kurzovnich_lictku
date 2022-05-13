let url = "https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e"
async function fetchText(){
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  var htmlData = "";
  for (var i = 0; i < data.length; i++)
  {
    console.log(data[i]);
    htmlData += `<tr> <td>`+ data[i].shortName +
      `</td> <td>`+ data[i].validFrom
      +`</td> <td>`+ data[i].name
      +`</td> <td>`+ data[i].country
      +`</td> <td>`+ data[i].move
      +`</td> <td>` + data[i].amount
      +`</td> <td>` + data[i].valBuy
      +`</td> <td>` + data[i].valSell
      +`</td> <td>` + data[i].valMid
      +`</td> <td>`+ data[i].currBuy
      +`</td> <td>` + data[i].currSell
      +`</td> <td>` + data[i].currMid
      +`</td> <td>` + data[i].version
      +`</td> <td>` + data[i].cnbMid
      +`</td> <td>` + data[i].ecbMid +`</td></tr>`;
  }
  let manipulator = document.querySelector(".Star1");
  manipulator.innerHTML = htmlData;
}
fetchText();



