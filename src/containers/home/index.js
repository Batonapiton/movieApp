import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchField from './searchField'
import Films from './films'


class Home extends Component {
  render() {
    return (
      <div>
        <SearchField/>
        <Films/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
