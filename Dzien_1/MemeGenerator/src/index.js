import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MemeGenerator extends React.Component {

  state = {
    memes: [],
    choosenMeme: null
  }

  //username: MarcinKieruzel pass: kazik

  handleClick(e, el){
    this.setState({
      choosenMeme: el
    })
  }



   render(){

     console.log(this.state.memes);

     let memes = this.state.memes.map((el,ix) => {
        return <div key={ix} style={{width: "25%", padding: "10px"}}>
            <img onClick={(e) => this.handleClick(e, el)} style={{maxWidth: "100%"}} src={el.url} />
        </div>
     })
     return (
       <div style={{display: "flex", flexWrap: "wrap", margin: "0 auto", width: "100%", maxWidth: "1200px"}}>
       {
         this.state.choosenMeme &&
         <div>
         <figure>
           ...Tutaj wgraj mema
         </figure>
          <figure>
            <img src={this.state.choosenMeme.url} />
            <figcaption>Wybrany meme</figcaption>
          </figure>
          <form>
            <input name="text0" />
            <input name="text1" />
            <button>Get meme</button>
          </form>
         </div>
       }


          {memes}
       </div>
     )
   }

   componentDidMount() {
      fetch('https://api.imgflip.com/get_memes')
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({memes: res.data.memes})
      })
      .catch(res => {
        console.log(res);
      })
   }

 }

 document.addEventListener("DOMContentLoaded", function(){

    ReactDOM.render(
      <MemeGenerator />,
      document.querySelector("#app")
    )

  })
