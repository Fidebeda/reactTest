import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
      super(props)

      this.state = {
          newWho: "Marcela the Elf",
          newWhat: "Best player on the world",
          characters: [
              {
                  id:1,
                  who:"Finn the Human",
                  what:"A silly kid who wants to become a hero",
                  cool: 69
              },
              {
                  id:2,
                  who:"Jake the Dog",
                  what:"Finn's best friend who wants to kill me",
                  cool:9
              }
          ]
      }
  }

  handleWho = e =>{
      this.setState({
          newWho: e.target.value
      })
      
  }

  handleWhat = e =>{
    this.setState({
        newWhat: e.target.value
    })
    
}

handleCool = dude => e =>{
   const cool = +e.target.value

   this.setState(state => { 
       return { 
           characters: state.characters.map(item =>
            item === dude ? {...dude, cool } : item
            )
        }})
    
}

removeDude = dude => {
    this.setState(state =>{
        return {
            characters: state.characters.filter(item => item !== dude)
        }
    })
}

  handleSubmit = event =>{
      if(event.key === 'Enter' && this.state.newWho && this.state.newWhat){
        this.setState(state => {
            const newDude = {
                id:Math.max(...state.characters.map(d=>d.id) +1),
                who:this.state.newWho,
                what:this.state.newWhat,
                cool: 15
        
              }
    
    
               return {
                    characters:[...state.characters, newDude] 
                }})
    
        //   console.log([
        //       ...this.state.characters, newDude
    
        //   ]);
        
        //   alert(this.state.dude)
          
        
    }

      }
      

      

    //   this.setState({
    //       characters: [...this.state.characters, newDude]
    //   })

      

  listOfDudes = () => {
      return this.state.characters.map(dude => (
       <li className="dude" key={dude.id}>
           <a className='ctrl' onClick={() =>{
               this.removeDude(dude)
           }}>x</a>

           <article className={
               dude.cool<10 ? 'faded' : dude.cool>50  ? 'gold' : ''
           }>
            {dude.who}
            <span>{dude.what}</span>
           </article>


           <input className='ctrl' type="number" value={dude.cool} onChange={this.handleCool(dude)}></input>
          

      {/* {dude.who.split(" ").length < 3 &&(
        <small>
          <em> lol, short name</em>
        </small>

      )} */}
      
      </li>
      ))
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


              <form className='add-new' onKeyPress={this.handleSubmit}>
                  <input type="text" value={this.state.newWho} onChange={this.handleWho}></input>
                  <input type="text" value={this.state.newWhat} onChange={this.handleWhat}></input>

              </form>

              <p className='preview'>
                  {this.state.newWho}
                  <br></br>
                  <small>{this.newWhat}</small>

              </p>
              
              
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
