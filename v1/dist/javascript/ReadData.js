import { database, ref, onValue } from './export.js';
const CurrentCoach = 'Vladimir Petkovic';

const CasesBg = {
  'win': '#4ade80',
  'loss': '#f87171',
  'draw': '#facc15'
}

const CaseSt = item => item['Gools_1'] === item['Gools_2'] ? 'draw' : item['Gools_1'] > item['Gools_2'] ? 'win' : 'loss'

async function LoadData(table, boxs, score) {
  const databaseRef = ref(database, 'AlgVs');

  onValue(databaseRef, async (snapshot) => {
    table.innerHTML = '';

    const { Row } = await import('./Row.js');
    Object.entries(snapshot.val()).reverse().map(([key, data]) => {
      data['Coach'] === CurrentCoach ? table.innerHTML += Row(key, data) : '';
    })

    const games = Object.values(snapshot.val()).filter(item => item['Coach'] === CurrentCoach);
    const gamesCases = games.map(item => CaseSt(item));

    boxs.forEach((box) => {
      box.innerHTML = '';
      box.style.background = CasesBg[box.classList[1]];
      const casesSize = gamesCases.filter(i => i === box.classList[1]);
      box.innerHTML += `${casesSize.length} ${box.classList[1]}`;
    })

    const scored = games.map(i => i.Gools_1).map(i => Number(i)).reduce((a, b) => a + b);
    const received = games.map(i => i.Gools_2).map(i => Number(i)).reduce((a, b) => a + b);

    score.innerHTML = `Scored ${scored}, received ${received}`;
  })
}

export default LoadData;