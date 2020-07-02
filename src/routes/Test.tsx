import * as React from 'react'
// import { render } from 'react-dom'
import Tabbar from '../components/tabBar'
import Tab from '../components/tab'
import RouterComp from '../routerComp'
interface IAppProps {}
interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
  public render(): JSX.Element {
    return (
      <React.Fragment>
        <Tab/>
        <RouterComp />
        <Tabbar/>
      </React.Fragment>
    )
  }
}
export default App;