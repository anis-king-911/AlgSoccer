const CasesBg = {
  'win': '#4ade80',
  'loss': '#f87171',
  'draw': '#facc15'
}

const Options = {
  dateStyle: 'medium'
}

export function Row(key, { Team_1, Team_2, Gools_1, Gools_2, Coach, Time }) {
  const Case = Gools_1 === Gools_2 ? 'draw' : Gools_1 > Gools_2 ? 'win' : 'loss';
  const date = new Date(Time).toLocaleDateString('en-US', Options);

  return `
  <tr class="css" style="background: ${CasesBg[Case]};" id="${key}">
    <td>${date}</td>
    <td>${Team_1}</td>
    <td>${Gools_1}-${Gools_2}</td>
    <td>${Team_2}</td>
    <!--td>${Coach}</td-->
  </tr>
  `;
}
