let column;

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