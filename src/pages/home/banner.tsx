import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import '../../assets/style/banner.less'
class Banner extends Component {
state = {
    data: ['17_xingzuo_jxz_m', '18_youflower_m', '19_birthday_banner_m','20_graduation_m'],
    imgHeight: 176,
  }
componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['17_xingzuo_jxz_m', '18_youflower_m', '19_birthday_banner_m','20_graduation_m'],
      });
    }, 100);
  }
    render() {
        return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite={true}
          autoplayInterval={5000}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href=""
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://img02.hua.com/slider/${val}.jpg`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
        )
    }
}

export default Banner;