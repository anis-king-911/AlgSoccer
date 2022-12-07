let column;

//['yellow', 'limegreen', 'red']

export function Row({Team_1, Team_2, Gools_1, Gools_2, Coach}, TimeFunc, key) {
  let bg = Gools_1===Gools_2?bg='yellow':'';
  return `
  
<tr class="css" style="background: ${bg};" id="${key}">
  <td>${TimeFunc}</td>
  <td>${Team_1}</td>
  <td>${Gools_1}-${Gools_2}</td>
  <td>${Team_2}</td>
  <td>${Coach}</td>
</tr>
  
  `;
}

export const DataForm = (arg, TimeFunc, key) => {
  if (arg.Gools_1 === arg.Gools_2) {
    column =
      `
        <tr class="css" style="background: yellow;" data-filter="${arg.Coach}" id="${key}">
          <td>${TimeFunc}</td>
          <td>${arg.Team_1}</td>
          <td>${arg.Gools_1}-${arg.Gools_2}</td>
          <td>${arg.Team_2}</td>
          <td>${arg.Coach}</td>
        </tr>
      `
    // if win
  } else if (arg.Gools_1 > arg.Gools_2) {
    column =
      `
        <tr class="css" style="background: limegreen;" data-filter="${arg.Coach}" id="${key}">
          <td>${TimeFunc}</td>
          <td>${arg.Team_1}</td>
          <td>${arg.Gools_1}-${arg.Gools_2}</td>
          <td>${arg.Team_2}</td>
          <td>${arg.Coach}</td>
        </tr>
      `
    // else lost
  } else {
    column =
      `
        <tr class="css" style="background: red;" data-filter="${arg.Coach}" id="${key}">
          <td>${TimeFunc}</td>
          <td>${arg.Team_1}</td>
          <td>${arg.Gools_1}-${arg.Gools_2}</td>
          <td>${arg.Team_2}</td>
          <td>${arg.Coach}</td>
        </tr>
      `
  }
  return column
}
