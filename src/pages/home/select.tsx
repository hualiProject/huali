import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/style/select.less";
class select extends Component {
  render() {
    return (
      <div className="scene">
        <div className="modetitle">一秒选花</div>
        <div className="select_one">
          <Link to="" className="pic">
            <img
              src="https://img02.hua.com/m/home/img/m_home_use_lover.png"
              alt=""
            />
            <span>送恋人</span>
          </Link>
          <Link to="">
            <img
              src="https://img02.hua.com/m/home/img/m_home_use_elder.png"
              alt=""
            />
            <span>送长辈</span>
          </Link>
          <Link to="">
            <img
              src="https://img02.hua.com/m/home/img/m_home_use_friends.png"
              alt=""
            />
            <span>送朋友</span>
          </Link>
        </div>
        <div className="select_two">
          <Link to="">
            <img
              src="https://img02.hua.com/m/home/img/m_home_use_birthday2.png"
              alt=""
            />
            <span>生日祝福</span>
          </Link>
          <Link to="">
            <img
              src="https://img02.hua.com/m/home/img/m_home_use_profess2.png"
              alt=""
            />
            <span>表白求婚</span>
          </Link>
          <Link to="">
            <img
              src="https://img02.hua.com/m/home/img/m_home_use_business2.png"
              alt=""
            />
            <span>开业商务</span>
          </Link>
          <Link to="">
            <img
              src="https://img02.hua.com/m/home/img/m_home_use_anniversary2.png"
              alt=""
            />
            <span>周年纪念</span>
          </Link>
        </div>
        <div className="select_three">
          <Link to="" className="select_three_lf">
            <p className="title">热销榜</p>
            <p className="describe">集万千宠爱</p>
            <div className="buy">
              <span className="bg">大家都在买</span>
              <span>热销12.5万束</span>
            </div>
          </Link>
          <Link to="" className="select_three_rg">
            <p className="title">特价专区</p>
            <p className="describe">超值好货</p>
            <div className="buy">
              <span className="bg">大家都在买</span>
              <span>￥158<s>￥186</s></span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default select;
