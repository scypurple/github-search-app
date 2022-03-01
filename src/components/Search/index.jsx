import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
export default class Search extends Component {
    keyWordContainer = React.createRef()

    search = () => {
        const {value} = this.keyWordContainer.current;
        if (!value.trim()) return alert("输入不能为空");
        this.props.updateState({isFirst: false, isLoading: true})
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                this.props.updateState({users:response.data.items, isLoading: false})},
            
            error => {this.props.updateState({error: error.message, isLoading: false})},
        )
    }

    handleEnter = (e) => {
        if (e.keyCode === 13) {
           this.search();
        }
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">github用户搜索</h3>
                <div>
                    <input type="text" 
                    ref={this.keyWordContainer} 
                    placeholder="请输入搜索关键词" 
                    onKeyUp={this.handleEnter}/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
