import {
  database, ref, child, set, onValue
} from '../javascript/export.js';

const GetDate = (arg) => {
  const string = `${arg.month} ${arg.day}, ${arg.year}`
  const date = new Date(string)
  const time = date.getTime()
  
  return time
}


const DateForm = document.querySelector('.DateForm')

if(DateForm) {
  DateForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    
    const date = {
      'month': DateForm.month.value,
      'day': DateForm.day.value,
      'year': DateForm.year.value
    }
    
    const newDate = GetDate(date)
  
    const obj = {
      'Coach': DateForm.Coach.value,
      'Team_1': DateForm.Team_1.value,
      'Team_2': DateForm.Team_2.value,
      'Gools_1': DateForm.Gools_1.value,
      'Gools_2': DateForm.Gools_2.value,
      'date': newDate
    }
    
    console.log(obj);
    PushFirebase(obj);
  })
}

const PushFirebase = (obj)=> {
  const database_ref = ref(database, 'AlgVs/');
  const database_child = child(database_ref, `${obj.date}/`);
  
  set(database_child, {
    Coach: obj.Coach,
    Team_1: obj.Team_1,
    Team_2: obj.Team_2,
    Gools_1: obj.Gools_1,
    Gools_2: obj.Gools_2,
    Time: obj.date
  }).then(()=> {
    console.log('done')
    DateForm.reset()
  }).catch((error)=> {
    console.log(error)
  });
}
