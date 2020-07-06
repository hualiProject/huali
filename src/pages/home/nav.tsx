import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../assets/style/nav.less";
class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="conpany">
          <span className="conpany-margin">
            {" "}
            <i className="fa fa-check-circle" aria-hidden="true"></i>
            认证龙头企业
          </span>
          <span className="conpany-margin">
            <i className="fa fa-check-circle" aria-hidden="true"></i>15年品牌
          </span>
          <span className="conpany-margin">
            <i className="fa fa-check-circle" aria-hidden="true"></i>3小时送达
          </span>
          <span className="conpany-margin">
            <i className="fa fa-check-circle" aria-hidden="true"></i>
            最近333345条好评
          </span>
        </div>
        <div className="procate">
          <Link to="/category" className="">
            <img src="https://img02.hua.com/m/home/img/m_home_category_flower.png" alt="鲜花" />
            <p>鲜花</p>
          </Link>
          <Link to="" className="">
            <img src="https://img02.hua.com/m/home/img/m_home_category_ppf.png" alt="永生花" />
            <p>永生花</p>
          </Link>
          <Link to="" className="">
            <img src="https://img02.hua.com/m/home/img/m_home_category_cake.png" alt="蛋糕" />
            <p>蛋糕</p>
          </Link>
          <Link to="" className="">
            <img src="https://img02.hua.com/m/home/img/m_home_category_gift.png" alt="礼品" />
            <p>礼品</p>
          </Link>
          <Link to="" className="">
            <img src="https://img02.hua.com/m/home/img/m_home_category_chocolate.png" alt="巧克力" />
            <p>巧克力</p>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
