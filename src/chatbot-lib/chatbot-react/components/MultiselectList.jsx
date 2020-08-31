import styled from 'styled-components';
import defaultTheme from '../theme';
import React, { Component } from 'react';
import { Card ,Message,Icon} from 'semantic-ui-react'
import { render } from '@testing-library/react';
var _ = require('lodash');




class MultiselectList extends Component {
    constructor(props) {
        super(props);
        // let list = _.map(this.props.serachList,(o)=>(
        //     {...o,ischecked:false}
        // ))
        this.state = {
            _searchList:this.props.serachList,
            _inputText: '',
            _filterList: [],
            _selectedList:[],
        }
    }

    componentDidMount() {
        
        this.setState({
            _isError:false,
            _inputText: this.props.inputText,
            _filterList: [],
            _selectedList:[],
        })

    }


    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.inputText !== prevState.inputText) {  
            var newList = _.filter(prevState._searchList, function(o) {
                return (o.label.toLowerCase().includes(nextProps.inputText.toLowerCase()) 
                && !o.ischecked)
            });
            var newSelectedList = _.filter(prevState._searchList, function(o) {
                return (o.ischecked)
            });
            return { ...prevState, _filterList: newList,_inputText:nextProps.inputText,_selectedList:newSelectedList }
        }
        else return null;
    }
    toggleError(){
        this.setState({_isError:!this.state._isError})
    }

    selectItem(item){
        if(this.state._selectedList.length >=  this.state._searchList.length && !item.ischecked){
            this.toggleError();
        }else{
            _.find(this.state._searchList, function(o) { if(o.label==item.label){o.ischecked=!o.ischecked} });
            this.forceUpdate()

        }
        //item = {...item,ischecked:true}
        //let mList = this.state._selectedList;
        //mList.push(item);
    }

    render() {
        return (
            this.state._inputText !== "" || this.state._selectedList.length>0 ?
            <div>
                <Message style={{position:'absolute',zIndex:1001,width:'95%'}}  negative floating hidden={!this.state._isError}>
            <div style={{display:'flex',flex:1,flexDirection:'row'}}>
              <span  style={{flex:7}}>You reached limit</span> 
              <Icon onClick={()=>this.toggleError()} style={{flex:1}} link name='close' />

           </div>
            </Message>
                <div class="ui card" style={{ zIndex:1000,margin: 5, padding: 5, position: 'absolute', bottom: 50,overflow: 'scroll', width: '95%',maxHeight:'70%' }}>
                    
                    <div class="ui middle aligned selection list">
                    {this.state._selectedList.map((o, index) => (
                            <div style={{display:'flex',flexDirection:'row'}} onClick={()=>this.selectItem(o)} class="item" key={index}>
                            {/* <div style={{flex:5}} class="content"> */}
                                <div style={{alignSelf:'center',padding:12}}> {o.label}</div>
                            {/* </div> */}
                            <div style={{flex:1,padding:12,}}>
                                <Icon  style={{flex:1,float:'right'}} link name='check circle' />
                            </div>

                        </div>
                        ))}
                        {this.state._inputText !== "" && this.state._filterList.map((o, index) => (
                            <div style={{display:'flex',flexDirection:'row',}} onClick={()=>this.selectItem(o)} class="item" key={index}>
                                {/* <div style={{flex:5,}} class="content"> */}
                                    <div  style={{alignSelf:'center',padding:12}}> {o.label}</div>
                                {/* </div> */}
                                <div style={{flex:1,padding:12,}}>
                                    <Icon style={{flex:1,float:'right'}} link name='circle outline' />
                                </div>

                            </div>
                        ))}

                    </div>

                </div></div>
                : null
        )
    }

}

export default MultiselectList;