import React, { Component, PropTypes } from 'react';
import template from '../../../common/template';
import TopBar from '../../../common/topBar/topBar';
import Interval from '../../../common/interval/interval';
import { browserHistory, hashHistory } from 'react-router';
import './orderNote.less';
import data from './mockData.json';

class Main extends Component {
  constructor(props) {
    super(props);
    this.onClickNote = (ev) => {
      let target = ev.target;
      if (target.parentNode.children.length === 1) {
        target.classList.toggle('active');
      }
      else {
        Array.from(target.parentNode.children).forEach((item) => {
          item.classList.remove('active');
        })
        target.classList.add('active');
      }
    }
    this.changeOrderNote = () => {
      let note = '';
      let liList = this.refs.fastNote.getElementsByTagName('li');
      Array.from(liList).forEach((item) => {
        if (item.classList.contains('active')) {
          note += item.textContent + ' ';
        }
      });
      note = note.trim();
      let textareaValue = this.refs.otherNote.value.trim();
      if (textareaValue) {
        note += ' ' + textareaValue;
      }
      this.props.changeOrderNote(note);
      const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
      history.push('/order/confirmOrder');
    }
  }

  render() {
    return(
      <div id="orderNote">
        <TopBar route={this.props.route}></TopBar>
        <div className="container">
          <div className="fast-note">
            <header>快速备注</header>
            <div className="fast-note-container" ref="fastNote">
            {
              data.notes.map((item, index) => {
                return(
                  <ul key={index}>
                  {
                    item.map((noteItem, noteIndex) => {
                      return(
                        <li key={noteIndex} onClick={this.onClickNote}>{noteItem}</li>
                      );
                    })
                  }
                  </ul>
                );
              })
            }
            </div>
          </div>
          <Interval />
          <div className="other-note">
            <header>其他备注</header>
            <textarea placeholder="请输入备注内容(可不填)" ref="otherNote"></textarea>
          </div>
          <div className="submit-button" onClick={this.changeOrderNote}>
            确定
          </div>
        </div>
      </div>
    );
  }
}

export default template({
  id: 'orderNote',
  component: Main
})