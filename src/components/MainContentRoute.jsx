import React from 'react'
import ContentLayout from './ContentLayout'
import { connect } from 'react-redux'

const MainContentRoute = (props) => {
  return (
    <ContentLayout>
      {props.site}
    </ContentLayout>
  )
}

const mapStateToProps = (state, ownProps) => ({
  site: state.sites[ownProps.match.params.slug]
})


export default connect(mapStateToProps)(MainContentRoute)