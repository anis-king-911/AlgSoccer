const form = document.querySelector('form')

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
 const { insertData } = await import('../dist/javascript/insertData.js');
  
  const obj = await {
    'Coach': form.Coach.value,
    'Team_1': form.Team_1.value,
    'Team_2': form.Team_2.value,
    'Gools_1': form.Gools_1.value,
    'Gools_2': form.Gools_2.value,
    'date': GetDate({
        'month': form.month.value,
        'day': form.day.value,
        'year': form.year.value
      })
  }

  insertData(obj);
})

function GetDate(props) {
  const { day, month, year } = props;
  const string = `${month} ${day}, ${year}`;
  const date = new Date(string);
  const time = date.getTime();

  return time;
}
