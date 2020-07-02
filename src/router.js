import React,{Fragment} from 'react'
import { Router } from 'dva/router'
import Test from './routes/Test'
function RouterConfig({ history }) {
  return <Fragment>
    <Router history={history}>
      <Test/>
    </Router>
  </Fragment>
}

export default RouterConfig;
