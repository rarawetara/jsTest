const city = prompt("enter  your city?" );
if (!city) alert('Its a shame that you didnt specify  city');
 let favoritesport = prompt('enter your favorite sport');
if (!favoritesport) alert('Its a shame that you didnt specify favorite sport');

  const  year = +prompt('enter your year of birth');
if (!year) alert('Its a shame that you didnt specify year of birth');
   let newYear = year ? `${'You age'} ${2023 - year}`:'' ;

 
 const newCity = city 
switch (newCity){
 case '':
    alert(`${newYear}`);
   break;

  case 'kiev':
    alert(`${newYear} ${'lucky you live in Ukraine'}`);
 
   break;
  case 'vien':
    alert( `${newYear} ${'lucky you live in Austria'}`);
    break;

  case 'warshawa':
    alert( `${newYear} ${'lucky you live in Poland'}` );
    break;
  
}



 switch (favoritesport) {
  case 'football':
    alert( 'You gonna be a great football player' );
    break;

  case 'basketball':
    alert( 'You gonna be a great basketball player' );
    break;

  case 'box':
    alert( 'You gonna be a great boxer' );
    break;
 
}

