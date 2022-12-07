async function insertData(props) {
  const { database, ref, child, set } = await import('./export.js');
  const { Coach, Team_1, Gools_1, Team_2, Gools_2, date } = props;
  const databaseRef = ref(database, 'AlgVs/');
  const databaseChild = child(databaseRef, `${date}/`);

  set(databaseChild, {
    Coach, Team_1, Team_2,
    Gools_1, Gools_2,
    Time: date
  }).then(() => {
    console.log('done')
    form.reset();
  }).catch(error => console.log(error));
}

export { insertData }
