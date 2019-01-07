import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFilmEpisodes } from '../../actions/filmSearch'
import { Row, Col, Spin, Table } from 'antd'
import "./filminfo.css"
let stripHtmlTags = (str) => {
  if ((str === null) || (str === ''))
    return false
  else
    str = str.toString()
  return str.replace(/<[^>]*>/g, '')
}

class Filminfo extends Component {
  columns = [{
    title: '№',
    dataIndex: 'number',
    key: 'number'
  }, {
    title: 'Title',
    dataIndex: 'title',
    key: 'title'
  }, {
    title: 'Air Date',
    dataIndex: 'airDate',
    key: 'airDate'
  }]
  episodesData = []

  componentDidMount() {
    this.props.getFilmEpisodes(this.props.selectedFilm.show.id)
    if (this.props.filmEpisodes) {
      this.episodesData = this.props.filmEpisodes.map(episode => ({
        number: episode.season + 'x' + episode.number,
        title: episode.name,
        airDate: episode.airdate + ' ' + episode.airtime
      }))
    }
  }

  render() {

    if (Object.keys( this.props.selectedFilm).length === 0){
      this.props.history.push('/');
      window.location.reload();
    }

    if (this.props.filmEpisodesLoading) {
      return (<Spin size="large"/>)
    } else if (this.props.filmEpisodesError) {
      return (
        <Row>
          <Col span={20} offset={2}><p>{this.props.filmEpisodesError}</p></Col>
        </Row>
      )
    } else {
      let image = this.props.selectedFilm.show.image
      let imageURl = ''
      if (image) {
        imageURl = image.medium
      }
      let episodesContent;
      if (this.episodesData.length===0){
        episodesContent = <h3 className="film-episodes__title">Episodes not found</h3>;
      }
      else{
        episodesContent= <Table columns={this.columns} dataSource={this.episodesData}/>;
      }
      return (
        <div className="film">
          <div className="film-info">
            <h2 className="film-info__title">{this.props.selectedFilm.show.name}</h2>
            <div className="film-info__content">
              <img className="film_info__poster" src={imageURl} alt={this.props.selectedFilm.show.name}/>
              <div className="film-info__description"> <p className="film-info__summary">
                <strong>Summary:</strong> {stripHtmlTags(this.props.selectedFilm.show.summary)}</p>
                <p className="film-info__genres">
                  <strong>Genres:</strong> {this.props.selectedFilm.show.genres.join(', ')}</p>
              </div>            </div>
          </div>
          <div className="film-episodes">
            {episodesContent}
          </div>
        </div>
      )
    }

  }
}

const mapStateToProps = (state) => ({
  filmEpisodesLoading: state.filmSearch.filmEpisodesLoading,
  filmEpisodes: state.filmSearch.filmEpisodes,
  filmEpisodesError: state.filmSearch.filmEpisodesError,
  selectedFilm: state.filmSearch.selectedFilm
})
const mapDispatchToProps = {
  getFilmEpisodes
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filminfo)
