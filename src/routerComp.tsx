// 创建路由表
import React,{lazy, Suspense, useState, Fragment} from 'react'
import {Route, Switch ,Redirect} from "dva/router"
const Home = lazy(() => import('./pages/home'))
const ShopCar = lazy(() => import('./pages/shopCar'))
const Category = lazy(() => import('./pages/category'))
const Mine = lazy(() => import('./pages/mine'))
const NoFind = lazy(() => import('./pages/noFind'))

function RouterComp() {
    const [routes] = useState([
        {path:'/home',component:Home},
        {path:'/shopCar',component:ShopCar},
        {path:'/category',component:Category},
        {path:'/mine',component:Mine},
        {path:'*',component:NoFind}
    ])
    return (
        <Fragment>
            <Suspense fallback={() => <div>Loading...</div>}>
                <Switch>
                <Redirect from="/" exact to="/home" /> 
                {routes.map((item,index)=>(
                    <Route
                        key={index}
                        path={item.path}
                        exact
                        component={item.component}
                    />
                ))}
                </Switch>
                
            </Suspense>            
        </Fragment>
    )
}
export default  RouterComp