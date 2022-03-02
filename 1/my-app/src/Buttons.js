import React,{Component} from 'react';

class Buttons extends Component{
  
   render(){
       return(

          <div>
            <button onClick={this.props.clickHandler}  className="btn-component"><p>{this.props.title}</p></button>
            </div>
      
       )
   }
    
}
export default Buttons