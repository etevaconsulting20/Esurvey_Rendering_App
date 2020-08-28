import styled from 'styled-components';
import defaultTheme from '../theme';
import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import { render } from '@testing-library/react';
var _ = require('lodash');




class SearchinList extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            _searchList: props.serachList,
            _inputText: '',
        }
    }

    componentDidMount() {
        this.setState({
            _searchList: this.props.serachList,
            _inputText: this.props.inputText,
            _filterList: [],
        })

    }


    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.inputText !== prevState.inputText) {

            var newList = _.filter(nextProps.serachList, (o) => (o.label.toLowerCase().includes(nextProps.inputText.toLowerCase())));
            //var newList = nextProps.searchList.filter(city => city.includes(nextProps.inputText));
            return { ...nextProps, _filterList: newList }
        }
        else return null;
    }

    render() {
        return (
            this.state.inputText != "" ?
                <div class="ui card" style={{ zIndex:1000,margin: 5, padding: 5, position: 'absolute', bottom: 50, overflow: 'scroll', width: '95%',maxHeight:'80%' }}>
                    
                    <div class="ui middle aligned selection list">
                        {this.state._filterList.map((o, index) => (
                            <div onClick={()=>this.props.selectFromSearchList(o)} class="item" key={index}>
                                {/* <div class="content"> */}
                                    <div  style={{alignSelf:'center',padding:12}}> {o.label}</div>
                                {/* </div> */}

                            </div>
                        ))}

                    </div>

                </div>
                : null
        )
    }

}

export default SearchinList;