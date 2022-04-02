import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
      super(props)

      this.state = {
          dude: "Marcela the Elf",
          characters: [
              {
                  id:1,
                  who:"Finn the Human",
                  what:"A silly kid who wants to become a hero",
                  cool: 12
              },
              {
                  id:2,
                  who:"Jake the Dog",
                  what:"Finn's best friend who wants to kill me",
                  cool:42
              }
          ]
      }
  }

  handleChange = e =>{
      this.setState({
          dude: e.target.value
      })
      
  }

  handleSubmit = event =>{
      event.preventDefault()

      const newDude = {
        id:999,
        who:this.state.dude,
        what:this.state.dude,
        cool: 15

      }

    //   this.setState({
    //       characters: [...this.state.characters, newDude]
    //   })

      this.setState(state => {
           return {
                characters:[...state.characters, newDude] 
            }})

    //   console.log([
    //       ...this.state.characters, newDude

    //   ]);
    
    //   alert(this.state.dude)
      
    
}

  listOfDudes = () => {
      return this.state.characters.map(dude => <li className={dude.who.split(" ").length < 3 ? "strong" : "gold"} key={dude.id}>{dude.who}

      {dude.who.split(" ").length < 3 &&(
        <small>
          <em> lol, short name</em>
        </small>

      )}
      
      </li>)
  }

//   handleChange(e){
//       this.setState({
//           dude: e.target.value
//       })
//   }

  render(){


      return(
          <div>
              <ul>{this.listOfDudes()}</ul>


              <form className='add-new' onSubmit={this.handleSubmit}>
                  <input type="text" value={this.state.dude} onChange={this.handleChange}></input>

              </form>

              <p className='preview'>{this.state.dude}</p>
              
              
          </div>
      )
  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
