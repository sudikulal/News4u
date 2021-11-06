import React, { Component } from "react";

export class Item extends Component {
  render() {
    let { title, description, imgurl, newsurl,author,date} = this.props;
    return (
      <div className="my-2">
        <div className="card">
          <img src={!imgurl?"https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png":imgurl} className="card-img-top" alt="..." style={{height:"250px",width:"414px"}}/>
          <div className="card-body">
            <h5 className="card-title"  >{title}....</h5>
            <p className="card-text" style = {{fontSize: '13px'}}>{description}....</p>
            <p class="card-text" ><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsurl} target="_blank"className="btn btn-sm btn-dark">
              readmore
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
