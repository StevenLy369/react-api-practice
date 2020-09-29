import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions'


class FrontPage extends React.Component {
    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(makeApiCall());
    }
}