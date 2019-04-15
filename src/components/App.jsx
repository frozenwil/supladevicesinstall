import React from 'react'
import { Layout } from 'antd'
import SideBar from './SideBar'
import HeaderStyled from './HeaderStyled'
import {Router, Route} from 'react-router-dom'

import FooterDetails from './FooterDetails'
import history from '../history'
import MainContentRoute from './MainContentRoute'

const { Header, Footer, Sider, Content} = Layout

const App = () => {
  return (
    <Router history={history}>
      <Layout>
        <Header style={{borderBottom: '1px solid #0e2549'}}>
          <HeaderStyled />
        </Header>
        <Layout>
          <Sider collapsedWidth={0} breakpoint="md" width="250px">
            <SideBar />
          </Sider>
          <Content>
            <Route path="/:slug" exact component={MainContentRoute}/>
          </Content>
        </Layout>
        <Footer style={{textAlign: 'center', background: "#ddd"}}>
          <FooterDetails />
        </Footer>

      </Layout>
    </Router>
  )
}

export default App
