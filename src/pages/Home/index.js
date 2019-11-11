import React, { Fragment } from 'react';
import {
  selectCurrentRoutePayload
} from 'state/modules/routing';
import AppBar from 'components/AppBar';
import SideBar from 'components/SideBar';
import { connect } from 'react-redux';
import Jobs from 'components/Jobs';
import Tasks from 'components/Tasks';
import DashBoard from 'components/DashBoard';
import { string } from 'prop-types';
class Home extends React.Component {
  static propTypes = {
    routeTab: string
  };
  render() {
    const TabComponent = {
      jobs: Jobs,
      tasks: Tasks,
      home: DashBoard
    }[this.props.routeTab]
    return (
      <Fragment>
        <AppBar />
        <SideBar>
         <TabComponent />
        </SideBar>
      </Fragment>
    );
  }
}
export default connect(
  state => ({
    routeTab : selectCurrentRoutePayload(state).tabName
    ? selectCurrentRoutePayload(state).tabName
    : 'home',
  }),
  {}
)(Home)