import React, { Fragment } from 'react';
import { selectCurrentRoutePayload } from 'state/modules/routing';
import AppBar from 'components/AppBar';
import SideBar from 'components/SideBar';
import { connect } from 'react-redux';
import Jobs from 'components/Jobs';
import Tasks from 'components/Tasks';
import Users from 'components/Users';
import DashBoard from 'components/DashBoard';
import { string } from 'prop-types';
import styles from './styles.scss';
class Home extends React.Component {
  static propTypes = {
    routeTab: string
  };
  render() {
    const TabComponent = {
      jobs: Jobs,
      tasks: Tasks,
      users: Users,
      home: DashBoard
    }[this.props.routeTab];
    return (
      <Fragment>
        <div className={styles['home']}>
          <AppBar />
          <SideBar>
            <TabComponent />
          </SideBar>
        </div>
      </Fragment>
    );
  }
}
export default connect(
  state => ({
    routeTab: selectCurrentRoutePayload(state).tabName
      ? selectCurrentRoutePayload(state).tabName
      : 'home'
  }),
  {}
)(Home);
