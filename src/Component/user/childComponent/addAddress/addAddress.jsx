import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import Prompt from '../../../common/prompt/prompt';
import './addAddress.less';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonActive: false
    }
    this.rightInput = [];
    this.dealInput = (ev, variety) => {
      let value = ev.target.value;
      let threshold = variety === 'name' ? 0 : 2;
      if (value.length > threshold) {
        if (this.rightInput.indexOf(variety) == -1) {
          this.rightInput.push(variety);
          ev.target.classList.remove('error');
          ev.target.nextElementSibling.style.display = 'none';
          this.judgeRight();
        }
      }
      else {
        ev.target.classList.add('error');
        ev.target.nextElementSibling.style.display = 'block';
        let index = this.rightInput.indexOf(variety);
        if (index != -1) {
          this.rightInput.splice(index, 1);
        }
      }
    }
    this.dealPhone = (ev) => {
      let value = ev.target.value;
      let pattern = /(^1[3|4|5|7|8][0-9]{9}$)/;
      if (pattern.test(value)) {
        if (this.rightInput.indexOf('phone') == -1) {
          this.rightInput.push('phone');
          ev.target.classList.remove('error');
          ev.target.nextElementSibling.style.display = 'none';
          this.judgeRight();
        }
      }
      else {
        ev.target.classList.add('error');
        ev.target.nextElementSibling.style.display = 'block';
        let index = this.rightInput.indexOf('phone');
        if (index != -1) {
          this.rightInput.splice(index, 1);
        }
      }
    }
    this.judgeRight = () => {
      if (this.rightInput.length == 4) {
        this.setState({isButtonActive: true});
      }
      else {
        this.setState({isButtonActive: false});
      }
    }
    this.addAddress = (ev) => {
      let target = ev.target;
      if (target.classList.contains('active')) {

      }
      else {
        this.props.changePromptContent({ isShow: true, content: '请完善所有信息'});
      }
    }
  }

  render() {
    return(
      <div id="addAddress">
        <TopBar route={this.props.route}></TopBar>
        { this.props.promptContent.isShow && <Prompt></Prompt> }
        <div className="addAddress-container">
          <div className="input-group">
            <div className="input-new">
              <input type="text" placeholder="请填写您的姓名" onBlur={(ev) => this.dealInput(ev, 'name')} />
              <p>请填写您的姓名</p>
            </div>
            <div className="input-new">
              <input type="text" placeholder="请输入小区/写字楼/学校等" onBlur={(ev) => this.dealInput(ev, 'address')} />
              <p>请填写您的详细地址</p>
            </div>
            <div className="input-new">
              <input type="text" placeholder="请填写详细送餐地址" onBlur={(ev) => this.dealInput(ev, 'detailAddress')} />
              <p>送餐地址太短了，不能识别</p>
            </div>
            <div className="input-new">
              <input type="text" placeholder="请填写能够联系到您的手机号" onBlur = {this.dealPhone}/>
              <p>请输入正确的手机号</p>
            </div>
            <div className="input-new">
              <input type="text" placeholder="备用联系电话（选填）" />
            </div>
          </div>
          <div className={'submit-button' + (this.state.isButtonActive ? ' active' : '')} onClick={this.addAddress}>新增地址</div>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'addAddress',
  component: Main
});