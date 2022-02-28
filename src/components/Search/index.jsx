import React, { Component } from 'react';
import './index.css';
export default class Search extends Component {
    keyWordContainer = React.createRef()
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">github用户搜索</h3>
                <div>
                    <input type="text" ref={this.keyWordContainer} placeholder="请输入搜索关键词" />&nbsp;
                    <button>搜索</button>
                </div>
            </section>
        )
    }
}
