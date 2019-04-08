import React from 'react'
import ContentLayout from './ContentLayout'

const MainContentRoute = (props) => {
  return (
    <ContentLayout>
      {props.match.params.slug}
    </ContentLayout>
  )
}


export default MainContentRoute