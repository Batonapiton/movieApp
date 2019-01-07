import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Filminfo from '../filminfo'
import 'antd/dist/antd.css'
import './app.css'
import { Layout, Menu } from 'antd'

const { Header, Content } = Layout


const App = () => (
  <Layout className="layout">
    <Header className="header">
      <Menu
        className="header__menu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
      </Menu>
    </Header>

    <Content className='main'>

      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/filminfo" component={Filminfo}/>

    </Content>
  </Layout>
)

export default App
