import React from 'react'

const Form = () => {

    const [user,setuser] = React.useState('React')
    const [age,setAge] = React.useState(34)
    const [errorMsg,setErrorMsg] = React.useState('')


   const handleUserName = (event) => {
    console.log(event.target.value);
        
    setuser(event.target.value)
    }

    const handleUserAge = (event) => {
        console.log(event.target.value);
    setAge(event.target.value)

        }

   const handleSubmit =(e) => {
    e.preventDefault();

    console.log(user,age);
    }

    const handleUserInput = (e) =>{

        if(e.target.name === 'userName'){
            setuser(e.target.value)
        }

        if(e.target.name === 'age'){
            if(isNaN(e.target.value)){
                setErrorMsg('not valid')
            }else{
                setErrorMsg('')
            }
            setAge(e.target.value)
        }
    }
  return (
    <div>

        <form onSubmit={handleSubmit}>
            <input name='userName' value={user} onChange={handleUserInput}/>
            <input name='age' value={age} onChange={handleUserInput}/>
            <p>{errorMsg}</p>
            <input type={'submit'}/>
        </form>
    </div>
  )
}

export default Form