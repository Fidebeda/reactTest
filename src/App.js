import React from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './App.css';

class App extends React.Component {

  constructor(props){
      super(props)

      this.input = React.createRef()

      this.state = {
          newWho: "",
          newWhat: "",
          characters: []
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
          
        this.resetForm()
    }

      }
      

    componentDidMount = () => {
        fetch('https://myjson.dit.upm.es/api/bins/7vu3')
    .then(res => res.json())
    .then(json => this.setState({ characters: json }))
    }  

    //   this.setState({
    //       characters: [...this.state.characters, newDude]
    //   })

      

  listOfDudes = () => {
      return this.state.characters.map(dude => (
          <CSSTransition key={dude.id} timeout={200} classNames="dude">
       <li className="dude" key={dude.id}>
           <a href='#' className='ctrl' onClick={() =>{
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
      </CSSTransition>
      ))
  }

//   handleChange(e){
//       this.setState({
//           dude: e.target.value
//       })
//   }

//   reset form
  resetForm = () =>{
      this.setState({
          newWho: "",
          newWhat: ""
      })
      this.input.current.focus()
  }

  render(){


      return(
          <div>
              <TransitionGroup component="ul">
              {this.listOfDudes()}
              </TransitionGroup>
              


              <form className='add-new' onKeyPress={this.handleSubmit}>
                  <input autoFocus type="text" ref={this.input} value={this.state.newWho} onChange={this.handleWho}></input>
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
