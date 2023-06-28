import firstStyles from "./first.module.css";

const myFunctionFirst = () => {  
 // return console.log(100);  // вывод в консоли числа 100
};

export const First = () => {  // вывод компонента First на страницу.

function getRandomInRange(min, max) {    // вывод генератора случайного числа
    return Math.floor(Math.random() * (max - min + 1)) + min;  // вывод генератора случайного числа
  }

 
  return (  // вывод генератора случайного числа от 0 до 5 и вывод компонента First на страницу.
    <> 
      <div className={firstStyles.wr}>1</div>
      <div>{getRandomInRange(111, 999)}</div>
    </>
  );
  };

export default myFunctionFirst;


