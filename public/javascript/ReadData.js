async function LoadData(table) {
  const { database, ref, onValue } = await import('./export.js');
  const { DataForm, Row } = await import('./DataForm.js');
  const { GetReversedTime } = await import('./ReverseTime.js');
  const databaseRef = await ref(database, 'AlgVs/');

  await onValue(databaseRef, (snapshot) => {
    table.innerHTML = '';
    snapshot.forEach((Game) => {
      const key = Game.key;
      const data = Game.val();
      const TimeFunc = GetReversedTime(data.Time);

      data.Coach === 'Jamal Belmadi' ?
        table.innerHTML += DataForm(data, TimeFunc, key) :
        '';
    })
  })
}


export default LoadData;
////////////////////////////////////////////////////////////////////////
/*
export const UpdateData = () => {
  const database_ref = ref(database, 'AlgCoachList/')

  const CoachList = [
    {
      'id': 49,
      'Name': 'Vahid Halilhodzic',
      'Year': '22/06/2011--07/072014',
      'matches': '31'
      },
    {
      'id': 50,
      'Name': 'Christian Gourcuff',
      'Year': '01/08/2014--03/04/2016',
      'matches': '21'
      },
    {
      'id': 51,
      'Name': 'Nabil Naghiz',
      'Year': '04/042016--30/06/2016',
      'matches': '01'
      },
    {
      'id': 52,
      'Name': 'Milovan Rajevac',
      'Year': '01/07/2016--11/10/2016',
      'matches': '02'
      },
    {
      'id': 53,
      'Name': 'George Leekens',
      'Year': '27/10/2016-24/01/2017',
      'matches': '12'
      },
    {
      'id': 54,
      'Name': 'Lucas Alcaraz',
      'Year': '13/04/2017--18/10/2017',
      'matches': '05'
      },
    {
      'id': 55,
      'Name': 'Rabah Madjer',
      'Year': '19/10/2017--24/01/2018',
      'matches': ''
      },
    {
      'id': 56,
      'Name': 'Jamal Belmadi',
      'Year': '02/08/2018--31/12/2022',
      'matches': ''
      }
    ]

  const MapList = CoachList.map((Coach) => {
    set(child(database_ref, `${Coach.id}/`), {
      Name: Coach.Name,
      Year: Coach.Year
    }).then(() => {
      console.log('done')
    }).catch((error) => {
      console.log(error)
    })
  })

  return Promise.all(MapList);
}
*/
