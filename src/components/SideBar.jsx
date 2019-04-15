import React, {useState} from 'react'
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom'
import history from '../history'
import { connect } from 'react-redux'

const SubMenu = Menu.SubMenu

const SideBar = (props) => {
  const currentSlug = history.location.pathname.split('/')[1] || 'welcome'
  const [current, setCurrent] = useState(currentSlug)

  const renderMenu = () => {
    return props.menu.map((menuItem) => {
      return <Menu.Item key={menuItem.slug}><Link to={`/${menuItem.slug}`}>{menuItem.title}</Link></Menu.Item>
    })
  }
  return (
    <Menu
      theme="dark"
      onClick={(e) => setCurrent(e.key)}
      selectedKeys={[current]}
      mode="inline"
      defaultOpenKeys={['other']}   
    >
      <SubMenu key="other" title={<span><Icon type="home" /><span>Ogólne</span></span>}>
        <Menu.Item key="welcome"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="software">Wstęp (ważne)</Menu.Item>
      </SubMenu>
        {/* Render Menu z API i inteligentne uzywanie slugow */ }
        {renderMenu()}
        
    </Menu>
  )
}

const mapStateToProps = (state) => ({
  menu: state.menu
})

export default connect(mapStateToProps)(SideBar)
