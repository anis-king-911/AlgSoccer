import { database, ref, child, set } from './export.js';

async function insertData({ Game_Type, Coach, Time, Team_1, Gools_1, Team_2, Gools_2 }) {
  const databaseRef = ref(database, 'AlgVs/');
  const databaseChild = child(databaseRef, `${Time}/`);

  set(databaseChild, { GameType: Game_Type, Coach, Time, Team_1, Gools_1, Team_2, Gools_2 })
    .then(() => console.log('done'))
    .catch(error => console.log(error));
}

export { insertData }
