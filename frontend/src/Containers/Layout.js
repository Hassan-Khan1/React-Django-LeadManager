import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
  return (
    <div className='app-header'>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            {/* {new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return 
              <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })} */}
            <Menu.Item key={1}>Home</Menu.Item>
            <Menu.Item key={2}>Login </Menu.Item>
            <Menu.Item key={3}>Register </Menu.Item>

          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {props.children}
            {/* COntent */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>,
    </div >
  )
};
export default CustomLayout;
