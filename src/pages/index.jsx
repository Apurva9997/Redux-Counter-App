import React, { Component } from 'react';
import { connect } from 'react-redux';
import { INCREASE_COUNTER, DECREASE_COUNTER } from '../actionTypes';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleCounterChange = (props) => (event, target, value) => {
        console.log(props)
        switch (props) {
            case 'increase':
                this.props.dispatch({
                    type: INCREASE_COUNTER
                })
                break;
            case 'decrease':
                this.props.dispatch({
                    type: DECREASE_COUNTER
                })
                break;
            default: break;
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h3><span>Count:</span>{this.props.count}</h3>
                <button style={{ cursor: 'pointer', padding: '9px' }} onClick={this.handleCounterChange('increase')}>
                    Increase Counter
                </button>
                <button style={{ cursor: 'pointer', padding: '9px' }} onClick={this.handleCounterChange('decrease')}>
                    Decrease Counter
                </button>
                {/* {this.props} */}
            </div>
        );
    }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(HomePage);