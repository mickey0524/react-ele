import React, { Component, PropTypes } from 'react';
import template from '../common/template';
import mockData from './mockData.json';
import TopBar from '../topBar/topBar';
import BottomBar from '../bottomBar/bottomBar';
import ShopList from '../shopList/shopList';
import './search.less';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isClearShow: false,
      shopList: mockData.shopList,
      hasSearchHistory: false,
      isExist: true,
      isSearch: false,
      searchList: [],
      suitableShopList: []
    };
    /**
     * [处理商家或者食物的输入]
     */
    this.handleInputChange = (ev) => {
      console.log('1');
      let target = ev.target;
      if (target.value !== '') {
        this.setState({ isClearShow: true });
      }
      else {
        this.setState({
          isClearShow: false,
          isSearch: false
        });
      }
    }
    /**
     * [处理输入框的X按钮的点击]
     */
    this.handleClearClick = (ev) => {
      console.log('2');
      this.refs.searchContent.value = '';
      this.refs.searchContent.focus();
      this.setState({
        isClearShow: false,
        isExist: true,
        isSearch: false
      });
    }
    /**
     * [处理提交按钮的点击]
     */
    this.handleSearch = () => {
      console.log('3');
      let searchContent = this.refs.searchContent.value;
      let shopArray = [];
      this.state.shopList.forEach((item) => {
        if (item.shopName.indexOf(searchContent) !== -1) {
          shopArray.push(item);
        }
      });
      let searchArray = this.state.searchList.slice();
      if (searchArray.indexOf(searchContent) === -1) {
        searchArray.push(searchContent);
      }
      if (shopArray.length > 0) {
        this.setState({
          suitableShopList: shopArray,
          isExist: true,
          searchList: searchArray,
          hasSearchHistory: true,
          isSearch: true,
        });
        this.props.changeShopList(shopArray);
      }
      else {
        this.setState({
          hasSearchHistory: true,
          searchList: searchArray,
          isExist: false,
          suitableShopList: [],
          isSearch: true,
        });
      }
    }
    /**
     * [处理清空搜索记录的点击]
     */
    this.clearSearchHistory = (ev) => {
      console.log('4');
      this.setState({
        hasSearchHistory: false,
        searchList: [],
      });
    }
    /**
     * [删除一项搜索记录]
     */
    this.deleteShopItem = (index) => {
      console.log('5');
      let array = this.state.searchList.slice();
      array.splice(index, 1);
      this.setState({ searchList: array });
    }
    /**
     * [用搜索记录中搜索]
     */
    this.searchFromRecord = (shopName) => {
      this.refs.searchContent.value = shopName;
      this.refs.searchContent.focus();
      this.setState({ isClearShow: true });
      this.handleSearch();
    }
  }

  render() {
    return (
      <div id="search">
        <TopBar></TopBar>
        <div className="search-container">
          <div className="search-input">
            <input type="text" placeholder="请输入商家或美食名称" onChange={this.handleInputChange} ref="searchContent" autoFocus />
            { this.state.isClearShow && <span onClick={this.handleClearClick}>X</span> }
            <button onClick={this.handleSearch}>提交</button>
          </div>
          { this.state.isSearch && !this.state.isExist && <div className="no-result">很抱歉！无搜索结果</div> }
          { !this.state.isClearShow && this.state.hasSearchHistory && this.state.searchList.length > 0 &&
            <div className="search-history">
              <p>搜索历史</p>
              <ul>
                {
                  this.state.searchList.map((item, index) => {
                    return (
                      <li key={index}>
                        <span onClick={() => this.searchFromRecord(item)}>{ item }</span>
                        <span onClick={() => this.deleteShopItem(index)}>X</span>
                      </li>
                    );
                  })
                }
              </ul>
              <button onClick={this.clearSearchHistory}>清空搜索历史</button>
            </div>
          }
          { this.state.isSearch && this.state.isExist && this.state.isClearShow &&
            <div className="suitable-shop">
              <p>商家</p>
              <ShopList></ShopList>
            </div>
          }
        </div>
        <BottomBar></BottomBar>
      </div>
    );
  }
}

export default template({
  id: 'search',
  component: Main
});