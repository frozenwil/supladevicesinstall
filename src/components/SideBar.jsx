import React, {useState} from 'react'
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom'
import history from '../history'

const SubMenu = Menu.SubMenu

const SideBar = () => {
  const currentSlug = history.location.pathname.split('/')[1] || 'welcome'
  const [current, setCurrent] = useState(currentSlug)
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
        {/* Render Menu z API i inteligentne uzywanie slugow */}
        <Menu.Item key="basic-r1"><Link to="/basic-r1">Sonoff Basic R1</Link></Menu.Item>
        <Menu.Item key="dual-r2"><Link to="/dual-r2" >Sonoff Dual R2</Link></Menu.Item>
        <Menu.Item key="4ch"><Link to="/4ch" >Sonoff 4CH</Link></Menu.Item>
    </Menu>
  )
}

export default SideBar
