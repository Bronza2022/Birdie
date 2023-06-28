import secondStyles from'./second.module.css'

const myFunctionSecond = () => {  
     };


export const Second = () => {  // вывод компонента Second на страницу 

const today = new Date(); // вывод текущего времени и компонента Second на страницу.

    function toLocaleTimeString() {   // вывод текущего времени
        return today.toLocaleTimeString('en-US');
    }

    return (  // вывод текущего времени и компонента Second на страницу.
    <>
     <div className={secondStyles.wr}>2</div>  
     <div>{toLocaleTimeString('en-US')}</div>  

     </>
    )
}

export default myFunctionSecond;

