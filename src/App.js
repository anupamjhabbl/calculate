import './App.css';
import {useState} from 'react';


function App() {

  const [value, setValue] = useState('0');
  const [prevalue, setPrevalue] = useState('');
  const [counter, setCounter] = useState('0');
  let [decimal,setDecimal] = useState(false);
  let [last, setLast] = useState(false);

  function clear(){
    setValue('0');
    setPrevalue('');
    setDecimal(false);
    setCounter('0');
    setLast(false);
  }

  const number = async (e) => {
    let clicked_number = e.target.textContent;
    if (clicked_number==='.' && !decimal){
      let temp = (last ? '0' : value) + clicked_number;
      setLast(false);
      if (temp[0]==='0'){
        temp = temp.substring(1);
      }
      setValue(temp);
      setDecimal(true);
    }
    else if(clicked_number!=='.'){
      let temp = (last ? '0' : value) + clicked_number;
      setLast(false);
      if (temp[0]==='0'){
        temp = temp.substring(1);
      }
      setValue(temp);
      setCounter('1');
    }
  }

  const operation = (e) => {
    let clicked_opr = e.target.textContent;
    setDecimal(false);
    switch (clicked_opr){
      case '+':
        counter==0 ? setPrevalue(prevalue+"+") : setPrevalue(prevalue+value+"+");
        setValue(0);
        setCounter(0);
        break;
      case '-':
        counter==0 ? setPrevalue(prevalue+"-") : setPrevalue(prevalue+value+"-");
        setValue(0);
        setCounter(0);
        break;
      case '*':
        counter==0 ? setPrevalue(prevalue+"*") :setPrevalue(prevalue+value+"*");
        setValue(0);
        setCounter(0);
        break;
      case '/':
        counter==0 ? setPrevalue(prevalue+"/") : setPrevalue(prevalue+value+"/");
        setValue(0);
        setCounter(0);
        break;
      default:
        alert("Please refresh the page");
        break;     
    }
  }

  const process = (value) => {
    let i = 0;
    while(i<value.length){
      if (value[i]=='+' || value[i]=='-' || value[i]=='*' || value[i]=='/'){
        let j = i+1;
        while(j<value.length){
          if ((value[j]>='0' && value[j]<='9') || value[j]=='.'){
            break;
          }
          j++;
        }
        if (value[j-1]=='-'){
          if (i!=j-1){
            value = value.substring(0,i)+value.substring(j-2);
          }
        }
        else{
          value = value.substring(0,i)+value.substring(j-1);
        }
        i = j;
      }
      else{
        i++;
      }
    }
    return value;
  }

  const result = () => {
    let temp = prevalue + value;
    temp = process(temp);
    let ans = eval(temp);
    console.log(temp+" "+ans);
    setValue(`${ans}`);
    setPrevalue('');
    setLast(true);
  }

  return (
    <div className="App">
      <p className="mx-auto text-2xl my-10">Calculate Anything</p>
      <div id="main" className="w-[500px] mx-auto border-2 border-grey-700  shadow-black shadow-lg">
        <div className="w-[100%] h-[100px]  border-2 border-black bg-grey-300 mb-2 text-3xl flex relative items-center">
          <p className="absolute right-5" id="display">{value}</p>
        </div>
        <div id="buttons">
          <div id="clear" onClick={clear} className=" border-2 h-[50px] border-black bg-green-300 m-[0.2px] text-center flex justify-center items-center">AC</div>
          <div id="divide" onClick={operation} className="border-2 h-[50px] border-black bg-green-300 m-[0.8px] text-center flex justify-center items-center">/</div>
          <div id="multiply" onClick={operation} className="border-2 h-[50px] border-black bg-green-300 m-[0.8px] text-center flex justify-center items-center">*</div>
          <div id="seven" onClick={number} className="border-2 h-[50px] border-black bg-green-300 m-[0.8px] text-center flex justify-center items-center">7</div>
          <div id="eight" onClick={number} className="border-2 h-[50px] border-black bg-green-300 m-[0.8px] text-center flex justify-center items-center">8</div>
          <div id="nine" onClick={number} className="border-2 h-[50px] border-black bg-green-300 m-[0.8px] text-center flex justify-center items-center">9</div>
          <div id="subtract" onClick={operation} className="border-2 h-[50px] border-black bg-green-300 m-[0.8px] text-center flex justify-center items-center">-</div>
          <div id="four" onClick={number} className="border-2 h-[50px] border-black bg-green-300 m-[0.8px] text-center flex justify-center items-center">4</div>
          <div id="five" onClick={number} className="border-2 h-[50px] border-black bg-green-300 m-[0.8px] text-center flex justify-center items-center">5</div>
          <div id="six" onClick={number} className="border-2 h-[50px] border-black bg-green-300 m-[0.8px] text-center flex justify-center items-center">6</div>
          <div id="add" onClick={operation} className="border-2 h-[50px] border-black bg-green-300 m-[0.8px] text-center flex justify-center items-center">+</div>
          <div id="one" onClick={number} className="border-2 h-[50px] border-black bg-green-300 m-[0.8px] text-center flex justify-center items-center">1</div>
          <div id="two" onClick={number} className="border-2 h-[50px] border-black bg-green-300 m-[0.8px] text-center flex justify-center items-center">2</div>
          <div id="three" onClick={number} className="border-2 h-[50px] border-black bg-green-300 m-[0.8px] text-center flex justify-center items-center">3</div>
          <div id="equals" onClick={result} className="border-2  border-black bg-green-300 m-[0.8px] text-center flex justify-center items-center">=</div>
          <div id="zero" onClick={number} className="border-2 h-[50px] border-black bg-green-300 m-[0.8px] text-center flex justify-center items-center">0</div>
          <div id="decimal" onClick={number} className="border-2 h-[50px] border-black bg-green-300 m-[0.8px] text-center flex justify-center items-center">.</div>
        </div>
      </div>
    </div>
  );
}

export default App;
