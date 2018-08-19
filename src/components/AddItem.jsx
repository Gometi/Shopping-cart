import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/index";
import itemList from "../items";

const mapStateToProps = state => {
    return { todos: state };
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (item, id) => dispatch(addToCart(item, id))
    };
};


  class items extends Component{
      constructor(props){
          super(props);
          this.addTodo = this.addTodo.bind(this);
      }
      addTodo(){
         this.props.addToCart({id: 1, text: "fdfdgfgfgf"}, 1)
     }
     componentDidMount(){
        //  console.log(this.props.todos)
        //  this.addTodo();
     }

       render(){
           return (
               <div>
                   Add Todo <br />
                   {/* <ul>
                       {this.props.todos.map((t, index) => (
                           <li key={index}>{this.props.todos.text}</li>
                       ))}
                   </ul> */}
                   <button onClick={this.addTodo}>Add Todo</button>
               </div>
           )
       }
        
    }


const EditItem = connect(mapStateToProps, mapDispatchToProps)(items);
export default EditItem;