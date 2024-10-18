import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo  from './Todo'
import Actor from './actor'
import Singer from './Singer'


function App() {
   const actors = ['sakib khan' , 'salman shah', 'alomgir' ,'jasim']

   const singers = [{name : 'Dr. Mahfuzur' , age :68 },
                    {name : 'Eva Rhaman' , age :38 },
                    {name : 'Suvro dev' , age :58 }
   ]

  return (
    <>
      
      <h1>Vite + React</h1>


    {
      singers.map(singer => <Singer singer={singer}></Singer>)
    }



      <Actor name = {"Bappa Raz"}></Actor>
      {
       actors.map( actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo task="Learn react"  isDone={true}></Todo>
      <Todo task="learn core concepts" isDone={false}></Todo>
      <Todo task="learn jsx more" isDone={true}>learn jsx</Todo> */}
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="mobile" price="17"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="85"></Student>
      <Student></Student>
      <Developer></Developer>
       */}
      
    </>
  )
}


function Device(props){
  // console.log(props);
  return <h3>this device: {props.name} with price:{props.price}</h3>
}




function Person(){

const age = 20;
const money = 40;
const person = {name:'sakib khan' , age:20}
  return <h3>i am a {person.name} with age: {age + money}  </h3>
}


const {grade, score} ={grade:'7', score: '99'}
function Student({grade=1, score=0}){
  console.log(grade, score);
  return <div className='student'>
    <h3>this is a Student</h3>
    <p>class: {grade}</p>
    <p>score: {score}</p>
  </div>
    
}

function Developer(){

const developerStyle = {
  margin: '20px',
  padding : '20px',
  border: '2px solid red',
  borderRadius : '10px',

}


  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>coading:</p>
    </div>
  )
}



export default App
