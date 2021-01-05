import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    state = {
      count: 0
    };
    
    handleClick = () => {
      // Use updater function when new state is derived from old
      this.setState(prev => ({ count: prev.count + 1 }));
    };
  
    render() {
      return (
         
            <button className="block" onClick={this.handleClick}>
            <div className="counter">{this.state.count}</div>
            </button>
        
      );
    }
  }
  
  // Now you can use it dynamically like this:
  class Block extends React.Component {
    render() {
        this.state = {
            'blockname':['AWARDS','CLIENTS','TEAM','PROJECT']
        }
      return (
        <div>
          <div><h4 style={{textAlign : 'center'}}>Counter</h4></div>
          <div className="tab-block">
             {[1,2,3,4].map(v => <Counter />)}
             <div className="title skills">

                <ul>
                    {this.state.blockname.map((value) =>{
                        return <li>{value}</li>
                    })}
                </ul>
                
                {/* <div>AWARDS</div> 
                <div>CLIENTS</div> 
                <div>TEAM</div> 
                <div>PROJECT</div>  */}
            </div>
          </div>  
        </div>
      );
    }
  }
  
  ReactDOM.render(<Block />, document.getElementById('root'));

  export default Block;