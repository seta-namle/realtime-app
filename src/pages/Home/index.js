import React, { Fragment } from 'react';
import { selectCurrentRoutePayload } from 'state/modules/routing';
import AppBar from 'components/AppBar';
import SideBar from 'components/SideBar';
import { connect } from 'react-redux';
import Jobs from 'components/Jobs';
import Tasks from 'components/Tasks';
import DashBoard from 'components/DashBoard';
import { string } from 'prop-types';
import styles from './styles.scss';
import Login from 'components/Login';
class Home extends React.Component {
  static propTypes = {
    routeTab: string
  };
  state = {
    isLogin: true
  }

  handleLogin = () => {
    this.setState(prevState => ({ isLogin: !prevState.isLogin }))
  }

  render() {
    const TabComponent = {
      // loginPath: Login,
      jobs: Jobs,
      tasks: Tasks,
      home: DashBoard
    }[this.props.routeTab];
    return (
      <Fragment>
        <div className={styles['home']}>
          {
            this.state.isLogin && <Login onLogin={this.handleLogin} />
          }
          {
            !this.state.isLogin &&
            <Fragment>
              <AppBar />
              <SideBar>
                <TabComponent />
              </SideBar>
            </Fragment>
          }
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
