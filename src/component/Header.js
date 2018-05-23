import React,{Component} from 'react';
import TodoTextInput from "./TodoTextInput";
import MainSection from "./MainSection"
class Header extends Component{
    render(){
        return(
            <header className="header">
            <h1>todos</h1>
            <TodoTextInput 
            onSave={this.props.onSave}
            />
            </header>
            
        )
    }
}
export default Header;