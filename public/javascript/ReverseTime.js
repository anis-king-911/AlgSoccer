 function GetReversedTime(arg) {
  const two = new Date(arg);
  const day = two.getDate();
  let month = two.getMonth();
  const year = two.getFullYear();
  
  switch(month) {
    case 0:
      month = 'jan'
    break;
    case 1:
      month = 'feb'
    break;
    case 2:
      month = 'mar'
    break;
    case 3:
      month = 'apr'
    break;
    case 4:
      month = 'may'
    break;
    case 5:
      month = 'jun'
    break;
    case 6:
      month = 'jul'
    break;
    case 7:
      month = 'agt'
    break;
    case 8:
      month = 'spt'
    break;
    case 9:
      month = 'oct'
    break;
    case 10:
      month = 'nov'
    break;
    case 11:
      month = 'dec'
    break;
  }
  
  const FullDate = `${month} ${day}, ${year}`;                                  
  return FullDate
}

export default GetReversedTime