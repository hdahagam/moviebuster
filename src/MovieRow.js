import React from 'react'

class MovieRow extends React.Component {
  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    return <table key={this.props.movie.id}>
    <tbody>
      <tr>
        <td width="150" height="150">
          <img alt="poster" width="150" src={this.props.movie.poster_src}/>
        </td>
        <td>
          <h2 className="h2">{this.props.movie.title}</h2>
          <p className="p">{this.props.movie.overview}</p>
          <input className="grow button1"type="button" onClick={this.viewMovie.bind(this)} value="View"/>
        </td>
      </tr>
    </tbody>
  </table>
  }
}

export default MovieRow