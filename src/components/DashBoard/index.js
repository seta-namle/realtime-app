
import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import { func, node } from 'prop-types';

class DashBoard extends React.Component {
  static propTypes = {
    onClickMenu: func,
    children: node
  };

  state = {
    collapsed: false,
  };

  render() {
    return (
       <div>
           DashBoard
       </div>
    );
  }
}
export default DashBoard