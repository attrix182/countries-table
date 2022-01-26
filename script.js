async function getCountries() {
  const response = await fetch('https://restcountries.com/v2/all');
  var data = await response.json();
  console.log(data);
  show(data);
}

getCountries().then(console.log('listando paises'));

function show(data) {
  let tab = `<tr>
     
        <th>Region</th>
        <th>Country</th>
        <th>Capital</th>
        <th>Flag</th>
       </tr>`;

  // Loop to access all rows
  for (let r of data) {
    tab += `<tr> 
    <td>${r.region} </td>
  <td>${r.name} </td>
  <td>${r.capital} </td>
  <td><img src="${r.flag}" height="30px"> </td>
</tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById('countries').innerHTML = tab;
}
