import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Select, Row, Col } from 'antd';
import styles from './styles.scss';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import { func, node, objectOf, string } from 'prop-types';
import options from './options';
import { connect } from 'react-redux';
import { selectCurrentRoutePayload } from '../../state/modules/routing';
import { ON_CLICK_MENU } from '../../state/modules/sideBar';
const { Option } = Select;
class SideBar extends React.Component {
  static propTypes = {
    onClickMenu: func,
    children: node,
    routePayload: objectOf(string)
  };

  state = {
    collapsed: false
  };
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  handleClick = event => {
    const payload = {
      tabName: event.key
    };
    console.log(payload);
    this.props.onClickMenu(payload);
  };
  onClickBreadCrumb = event => {
    const tabName = event.currentTarget.getAttribute('data-name');
    const payload = {
      tabName
    };
    this.props.onClickMenu(payload);
  };
  render() {
    const getMenuItem = item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.leftIcon} />
                <span>{item.label}</span>
              </span>
            }
          >
            {item.children.map(sub => {
              return <Menu.Item key={sub.key}>{sub.label}</Menu.Item>;
            })}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key}>
          <Icon type={item.leftIcon} />
          <span>{item.label}</span>
        </Menu.Item>
      );
    };
    const { children, routePayload } = this.props;
    return (
      <Layout style={{ minHeight: `${window.innerHeight}px` }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          className={styles['sider']}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={['1000']}
            mode="inline"
            className={styles['menu']}
            onClick={this.handleClick}
          >
            {options.map(item => getMenuItem(item))}
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Row>
              <Col span={20}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item
                    onClick={this.onClickBreadCrumb}
                    data-name={'/'}
                  >{`Home`}</Breadcrumb.Item>
                  {routePayload.tabName && (
                    <Breadcrumb.Item
                      onClick={this.onClickBreadCrumb}
                      data-name={routePayload.tabName}
                    >
                      {routePayload.tabName}
                    </Breadcrumb.Item>
                  )}
                  {routePayload.id && (
                    <Breadcrumb.Item>{`${routePayload.tabName} detail: ${
                      routePayload.id
                    }`}</Breadcrumb.Item>
                  )}
                </Breadcrumb>
              </Col>

              <Col span={4}>
                <Select defaultValue="12h" style={{ width: '100%' }}>
                  <Option value="12h">12 hrs</Option>
                </Select>
              </Col>
            </Row>
            <Row>{children}</Row>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Veritone ©2019</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default connect(
  state => ({
    routePayload: selectCurrentRoutePayload(state)
  }),
  {
    onClickMenu: payload => ({
      type: ON_CLICK_MENU,
      payload: payload
    })
  }
)(SideBar);
