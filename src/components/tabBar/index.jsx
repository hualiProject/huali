import React from 'react'
import { NavLink } from 'dva/router'
import './index.less'
export default function TabBar() {
    const navs = [{
        id: 1,
        path: '/home',
        text: '首页',
        iconName: 'fa-home'
    }, {
        id: 2,
        path: '/category',
        text: '分类',
        iconName:'fa-search'
    }, {
        id: 3,
        path: '/shopCar',
        text: '购物车',
        iconName: 'fa-shopping-cart'
    }, {
        id: 4,
        path: 'mine',
        text: '我的',
        iconName: 'fa-user-o'
    }]
    return (
        <ul className='footer'>
            {navs.map(item =><li key={item.id}>
                <NavLink to={item.path} activeClassName='active' >
                    <i className={'fa ' + item.iconName} ></i>
                    <span> {item.text} </span>
                </NavLink>
            </li>)}
        </ul>
    )
}
