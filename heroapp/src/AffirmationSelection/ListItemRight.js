import React, {Component}  from 'react';
import GlobalVariables from '../createVariables';

class ListItemRight extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
  }

  render() {
    return (
      <div>
          <div className={`row minicontainer ${this.props.selected?'selected':''}`}>
              <div className="col-md-5 col-sm-12 d-sm-block d-md-none d-lg-none">
                  <div className="minititle">{this.props.name}</div>
              </div>
              <div className="col-md-7 col-sm-12 oh">
                  <img className="minipic 045" src={this.props.src}></img>
                  <img className="minipic 065" src={this.props.mini}></img>
              </div>
              <div className="col-md-5 col-sm-12 d-none d-md-block">
                  <div className="minititle">{this.props.name}</div>
              </div>
          </div>
      </div>
    )
  }
}

export default ListItemRight;