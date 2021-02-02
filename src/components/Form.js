import React from "react"
import './styles/style.css'

class Form extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name : 'ivysaur',
            img : 'https://pokeapi.co/api/v2/pokemon/pikachu'
        }
    }

    // async componentDidMount(){
    //     await this.apiFetch()
    // }

    apiFetch = async () => {
        let resultado = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name.toLowerCase()}`)
        // let resultado = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        let data = await resultado.json()
        
        this.setState({
            img : data.sprites.front_default
        })
        }

    handleName = event =>{
        this.setState({
            name: event.target.value
        })
    }
    handleSubmit = event =>{
        let name = this.state.name
        console.log(name)
        this.apiFetch()
        event.preventDefault()
    }


  render(){
    return (
      <div >
          <div className="card">
            <div className='card-info'>
                Practica con ReactJS y Fetch con el api de Pokemon
                </div>
              <div className="card">
               <form onSubmit={this.handleSubmit}>
                   <label> Ingresa el pokemon para ver su foto </label>
                   <br/>
                   <input
                        type='text'
                        placeholder='Pokemon'
                        value={this.state.name}
                        onChange={this.handleName}

                   /><br/><br/>
                   <button type='submit' className='btn '>Buscar</button>
               </form>
              </div>
                <div className='imgContainer'>
                    <img className='img' src={this.state.img}/>
                </div>
            </div>
      </div>
    );
  }
}

export default Form;
