import React, { Component } from 'react';

const photos = [
  'https://firebasestorage.googleapis.com/v0/b/bestoftwogame.appspot.com/o/charminar.jpg?alt=media&token=27eaa3db-4a0c-44e3-9fe7-ed5b2264b5f0',
  'https://firebasestorage.googleapis.com/v0/b/bestoftwogame.appspot.com/o/gatewayofindia.jpg?alt=media&token=213a42d4-ff52-48ac-9015-9aa99393fdce',
  'https://firebasestorage.googleapis.com/v0/b/bestoftwogame.appspot.com/o/hawamahal.jpg?alt=media&token=99e651f2-435a-405b-b79d-e5c56983de49',
  'https://firebasestorage.googleapis.com/v0/b/bestoftwogame.appspot.com/o/howrah.jpg?alt=media&token=f7e207a6-596a-4d4d-ae4f-3c00debd8510',
  'https://firebasestorage.googleapis.com/v0/b/bestoftwogame.appspot.com/o/indiagate.jpg?alt=media&token=db77b102-0f39-45aa-a90b-811f331fc5fe',
  'https://firebasestorage.googleapis.com/v0/b/bestoftwogame.appspot.com/o/jamamasjid.jpg?alt=media&token=05d3e75f-beff-4754-b8b0-ecaee7a2ca5c',
  'https://firebasestorage.googleapis.com/v0/b/bestoftwogame.appspot.com/o/qutubmianr.jpg?alt=media&token=24a50f0d-9dfc-4d32-9a37-4bc3ab19d51e',
  'https://firebasestorage.googleapis.com/v0/b/bestoftwogame.appspot.com/o/redfort.jpg?alt=media&token=581fc6cc-3cdb-4630-b74e-66c1ac1a4e6c',
  'https://firebasestorage.googleapis.com/v0/b/bestoftwogame.appspot.com/o/statueofunity.jpg?alt=media&token=c06760b1-ec2c-49e9-bcb3-8dc8a5b7846e',
  'https://firebasestorage.googleapis.com/v0/b/bestoftwogame.appspot.com/o/tajmahal.jpg?alt=media&token=27e04725-3851-4ca1-b064-f446365cf0fd'
];


class TwoImages extends Component {

  incrementPoint() {
    this.props.onClick();
  }

  constructor(props) {
    super(props);
    this.state = {
    };
    this.incrementPoint = this.incrementPoint.bind(this);
  }
  

    render() {
      return (
        <div className="imgFlex">
          <img
            src={photos[0]}
            alt=""
            style={{
                width: "100%",
                cursor: "pointer",
                height: "100%",
                margin: '10px'
            }}
            onClick = {this.incrementPoint}
          />
          <img            
            src={photos[1]}
            alt="" 
            style={{
                width: "100%",
                cursor: "pointer",
                height: "100%",
                margin: '10px'
            }}
            // onClick = this.incrementPoint();
          />
        </div>
      );
    }
  }
  
  export default TwoImages;
  