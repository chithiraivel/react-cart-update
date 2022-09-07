import React from "react";
import Display from "./Display";

const FormVal = () => {
  const [product, setProduct] = React.useState("");
  const [rate, setRate] = React.useState(null);
  const [feature, setFeature] = React.useState("");
  const [array, setArray] = React.useState([]);
  let [updateVal, setUpdateVal] = React.useState([]);
  const [btn ,setBtn] = React.useState(false);
  const [msg,setMsg] = React.useState('');
  

  const handleUserInput = (event) => {
    if (event.target.name === "product") {
      setProduct(event.target.value);
    }
    if (event.target.name === "rate") {
      if(isNaN(event.target.value)){
        setMsg('valid input')
      }else{
        setMsg('')
      }
      setRate(event.target.value);
    }
    if (event.target.name === "feature") {
      setFeature(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setArray([...array, { id :array.length+1 ,product, rate, feature }]);
    
    setProduct('')
    setFeature('')
    setRate('')

  };

  const handleUpdate = () => {
    var data = updateVal
    var isExist = array.some( (prod) => prod.id === data.id)

    if(isExist){
        let b = array.map ( (ele) => {
          if(ele.id === data.id ){
            return {...ele,product:product,rate:rate,feature:feature}
          }
          else{
            return{
              ...ele
            }
          }
        })
        setArray(b)
    }
    setProduct('')
    setFeature('')
    setRate('')
    setBtn(false)
  }

  const RemoveBtn = (data) => {
    let ele = array.filter((f) => {
      return data !== f;
    });
    setArray([...ele]);
  };

const edit = (data) => {
 
  setBtn(true);

  setProduct(data.product);
  setRate(data.rate);
  setFeature(data.feature);

  setUpdateVal(data);
 

}
  return (
    <div className="one">
      <p>
        Enter your product :
        <input name="product" value={product} onChange={handleUserInput} />
      </p>

      <p>
        Enter rate :
        <input name="rate" value={rate} onChange={handleUserInput} />
      </p><p style={{color:'red'}}>{msg}</p>

      <p>
        Feature :
        <input name="feature" value={feature} onChange={handleUserInput} />
      </p>

      {!btn ? <button onClick={handleSubmit}>Submit</button> : <button onClick={handleUpdate}>Update</button>}

      {array.map((data, index) => (
        <Display product1={data} key={index} RemoveBtn={RemoveBtn} edit={edit}/>
      ))}
    </div>
  );
};

export default FormVal;
