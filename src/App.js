
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
    };
     handelData =(jok)=>{
      jok.id = Math.floor(Math.random()*10);
      let joks =[...this.state.jok,jok];
      this.setState({
        jok:joks
      })
    }
    deleteData =(id)=>{
      let delt=this.state.jok.filter(j=>{
        return id!==j.id
      })
      this.setState({
        jok:delt
      })
    }
  render() {
  return (
    <div className="App">
     <h2>First React App</h2>
     <Joker joker={this.state.jok} deleteData={this.deleteData}/>
     <AddJoks addData ={this.handelData}/>
    </div>
  )
  }
}
export default App
