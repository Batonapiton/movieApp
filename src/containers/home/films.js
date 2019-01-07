import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Col, Row, Spin } from 'antd'
import {Link} from 'react-router-dom'
import {saveFilm} from '../../actions/filmSearch'
import './films.css'
const { Meta } = Card

class Films extends Component {
  handleFilmClick =(film)=>{
    this.props.saveFilm(film);
  }
  render() {
    if (this.props.filmsLoading === true) {
      return <div className='loader-spin'><Spin size="large"/></div>
    } else if (this.props.filmsList.length > 0) {

      return (
        <Row type="flex" className='film-deck'>

            {this.props.filmsList.map(film => {
              let image = film.show.image;
              let imageURl = "";
              if (image){
                imageURl = image.medium;
              }
              return (
                <Card
                  className="film-card"
                  key={film.show.id}
                  hoverable
                  cover={<img alt={film.show.name} src={imageURl}/>}
                >
                  <Meta
                    title={<Link to="/filminfo" onClick={()=>(this.handleFilmClick(film))}>{film.show.name}</Link>}
                    description={film.show.genres.join(", ")}
                  />
                </Card>)

            })}
          </Row>)
    } else {
      return (

        <Row>
          <Col span={20} offset={2}><p>{this.props.filmsLoadingError}</p></Col>
        </Row>

      )
    }
  }
}

const mapStateToProps = (state) => ({
  filmsLoading: state.filmSearch.filmsLoading,
  filmsList: state.filmSearch.filmsList,
  filmsLoadingError: state.filmSearch.filmsLoadingError
})
const mapDispatchToProps = {
        saveFilm
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Films)
