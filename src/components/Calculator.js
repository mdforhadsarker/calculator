import React, {useState} from 'react'
import Keyboard from './Keyboard'
import Screen from './Screen'

export default() => {
    const [input, setInput] = useState('');



    //Add input


    const addInput = (char) => {
        var newInput = "";

        if (input.length === 0){
            if(isNaN(Number(char))){
                newInput = [...input];
                newInput += 0 + char ;
                setInput(newInput)
                return;
            
            }else{
                newInput = [...input];
                newInput += char ;
                setInput(newInput)
                return; 
            }
        }
        newInput = input;
        newInput += char ;
        setInput(newInput)
    };

    //Clear Input 

    const clearInput = () =>{
       setInput(""); 
    }

    //Calculate

    const calculate = () =>{

        try{
            setInput(evaluate(input))
        }catch (e){
console.log(e);
        }
      
    }

    function evaluate(fn) {
        // eslint-disable-next-line no-new-func
        return new Function('return ' + fn)();
      }
      
      //console.log( evaluate('12/5*9+9.4*2') ); // => 40.4


    return (
        <div className="calc">
            <div className="calcHeader">Calculator</div>
                <Screen input={input}/>
                <Keyboard addInput={addInput} calculate={calculate}/>
            <div className="clearButton" onClick={clearInput}>
                Clear
            </div>
        </div>
    )
}
