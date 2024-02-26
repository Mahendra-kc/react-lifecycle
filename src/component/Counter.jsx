import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: false
        }   
        //method binding
        this.addValue = this.addValue.bind(this)   
    }
    // mounting component
    addValue(){
        ReactDOM.render(        
            <React.StrictMode>
                <Counter num={this.props.num + 1}/>                  
            </React.StrictMode>,
            document.getElementById('block')
    )
  }
  // mount method
  // common method for mount and update
  static getDerivedStateFromProps(p, s) {
    console.log(`get derived state from props`)
    console.log(`props =`, p)
    console.log(`state =`, s)
  }

  componentDidMount() {
    console.log(`component did mount`)
  }

  // update methods
  shouldComponentUpdate(nP,nS) {
    console.log(`should component update or not`)
    console.log(`newProps =`, nP)
    console.log(`newState =`, nS)
    return true
  }

  getSnapshotBeforeUpdate(oP, oS) {
    console.log(`get snapshot before update`)
    console.log(`oldProps =`, oP)
    console.log(`oldState =`, oS)

  }

  componentDidUpdate(oP, oS) {
    console.log(`component did update`)
    console.log(`oldProps =`, oP)
    console.log(`oldState =`, oS)
    if(oP.num === 9) {
        this.setState({
            view: true
        })
      }
  }

  // unmount method
  componentWillUnmount() {
    console.log(`component unmounted successfully`)
  }

    render() {
        console.log(`component rendered`)
        return (
            <div className="container">
                <h1>Counter</h1>
                <div className="first">
                    {
                        this.state.view ? (
                            <h1>Welcome to Lifecycle</h1>
                        ) : (
                            <div>
                                <h1> Number = { this.props.num }</h1>
                                <h2 className='info'>Need More Counts</h2>
                                <button onClick={() => this.addValue()} className='btn-success'>Add+1</button>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Counter