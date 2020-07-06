import { connect } from "dva";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../assets/style/homeLover.less'
class HomeLover extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "home/getDate",
    });
  }
  render() {
    const { LoverData } = this.props.home;
    console.log("LoverData", LoverData);
    return (
      <div className="lover">
          <h3>送恋人/爱情鲜花</h3>
        <ul>
          {LoverData.map((item) => (
            <li key={item.id}>
              <Link to="">
                <div className="pic">
                  <img src={item.img} />
                </div>
                <div className="character">
                    <p className="text">
                        {item.text}
                    </p>
                    <p className="name">
                    {item.name}
                    </p>
                    <p className="promo">
                    {item.promo}
                    </p>
                    <p className="notice">
                    {item.notice}
                    </p>
                    <div className="botton"> 
                        <div className="botton_lf">
                            <p className="pic">
                            <strong>{item.newprice}</strong>
                            <s>{item.price}</s>
                            </p>
                            <p className="num">已销售{item.num}件</p>
                        </div>
                        <div className="botton_rg">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect((state) => state)(HomeLover);
