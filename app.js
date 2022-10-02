
/*Q11*/
function isOdd(num) {
    return num % 2 != 0 
  }
  
  console.log(isOdd(1));
  
  /*Q12*/
  function booleanInteger(num) {
      return num % 2 === 0 ? 1 : -1; 
    }

    console.log(booleanInteger(1));

    /*Q13/Q14*/
    function isLoggedInAndSubscribed(loggedIn, subscribed) {
        return (loggedIn === 'LOGGED_IN') && (subscribed === 'SUBSCRIBED') ? true : false;
    }
        console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));
    
    /*Q10*/
    function calcReminder(num1, num2) {
        return num1 % num2;
    } 

    console.log(calcReminder(4, 2))

    /*Q9*/
    function isNotZero(num) {
        return num !== 0
    }

    console.log(isNotZero(5))

