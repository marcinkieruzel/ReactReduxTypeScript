import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

     state = {
       time: new Date(),
       city: "London",
       gmt: 0,
       zones: [{city: "Paris", gmt: 0}, {city: "New York", gmt: -4}, { city: "Warsaw", gmt: 1}, {city: "Tokyo", gmt: 9 },{city: "Moscow", gmt: 3}]
     }

     handleZone = (e) => {
       this.setState({
         gmt: e.currentTarget.dataset.gmt,
         city: e.currentTarget.innerText
       })
     }

   render(){

     let timeZones = this.state.zones.map((e,i) => {
       return <button onClick={this.handleZone} key={i} data-gmt={e.gmt}>{e.city}</button>
     })

     return (
       <>
       <h1>{this.state.city}</h1>
       {timeZones}
       <Clock time={this.state.time} gmt={this.state.gmt} />
       </>
     )
   }

   componentDidMount() {
     setInterval(() => {
       this.setState({
         time: new Date()
       })
     }, 1000)
   }
 }

class Clock extends React.Component {



   render(){

     let {gmt, time} = this.props; //Destukturyzacja

     return (
       <h1>
       {(new Date(time.getTime()+(3600000*gmt))).toLocaleString()}
       </h1>
     )
   }
 }

 document.addEventListener("DOMContentLoaded", function(){

    ReactDOM.render(
      <App />,
      document.querySelector("#app")
    )
  })
