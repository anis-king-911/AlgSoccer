const CasesBg = {
  'win': 'limegreen',
  'loss': 'red',
  'draw': 'yellow'
}

export function Row({Team_1, Team_2, Gools_1, Gools_2, Coach}, TimeFunc, key) {
  const Case = Gools_1===Gools_2?'draw':Gools_1>Gools_2?'win':'loss';
  
  return `
<tr class="css" style="background: ${CasesBg[Case]};" id="${key}">
  <td>${TimeFunc}</td>
  <td>${Team_1}</td>
  <td>${Gools_1}-${Gools_2}</td>
  <td>${Team_2}</td>
  <!--td>${Coach}</td-->
</tr>
  `;
}
