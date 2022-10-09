
import React,{Component} from 'react';
import Joker from './Joker';
import AddJoks from './Addjoks'
class App extends Component {
    state ={
      jok :[
        {name:"abde",age:37,color:"blue",id:1}, 
        {name:"meryem",age:27,color:"brown",id:2},
        {name:"loujaine",age:1,color:"pink",id:3}
        ]
    }
  render() {
  return (
    <div className="App">
     <h2>First React App</h2>
     <Joker joker={this.state.jok}/>
     <AddJoks addjoks ={this.state.jok}/>
    </div>
  )
  }
}
export default App
