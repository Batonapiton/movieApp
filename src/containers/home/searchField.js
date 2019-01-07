import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Input } from 'antd'
import { getFilms } from '../../actions/filmSearch'
import "./searchField.css"

class SearchField extends Component {
  handleSearch = (filmName) => {
    this.props.getFilms(filmName);

  }
  render() {
    return (
      <Row className="search">
        <Col span={20} offset={2}>
          <Input.Search
            placeholder="Type film name"
            onSearch={value => this.handleSearch(value)}
            enterButton
          />
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {}
}
const mapDispatchToProps={
  getFilms
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchField)
