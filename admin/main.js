const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
 const { insertData } = await import('../dist/javascript/insertData.js');
  
  const obj = await {
    'Coach': form.Coach.value,
    'Team_1': form.Team_1.value,
    'Team_2': form.Team_2.value,
    'Gools_1': form.Gools_1.value,
    'Gools_2': form.Gools_2.value,
    'Time': new Date(form.date.value).getTime(),
  }

  insertData(obj);
  form.reset();
})
