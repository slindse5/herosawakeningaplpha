import React, {Component}  from 'react';
import GlobalVariables from '../createVariables';

class ListItemLeft extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
  }

  render() {
    return (
        <div>
          <div className={`row minicontainer ${this.props.selected?'selected':''}`}>
            <div className="col-md-5 col-sm-12">
              <div className="minititle p-sm-3">{this.props.name}</div>
            </div>
            <div className="col-md-7 col-sm-12 oh">
            <img className="minipic 045" src={this.props.src}></img>
              
            </div>
          </div>
        </div>
     
   
    )
  }
}

export default ListItemLeft;