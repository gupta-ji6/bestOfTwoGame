import React, { Component } from 'react';

const photos = [
  '../monuments/charminar.jpg',
  '../monuments/gatewayofindia.jpg',
  '../monuments/hawamahal.jpg',
  '../monuments/howrah.jpg',
  '../monuments/indiagate.jpg',
  '../monuments/jamamasjid.jpg',
  '../monuments/qutubmianr.jpg',
  '../monuments/redfort.jpg',
  '../monuments/statueofunity.jpg',
  '../monuments/tajmahal.jpg'
];

class TwoImages extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

    render() {
      return (
        <div>
          <img
            src={photos[0]}
            alt=""
            style={{
                width: "100%",
                cursor: "pointer",
                height: "100%"
            }}
          />
          <img            
            src={photos[1]}
            alt="" 
            style={{
                width: "100%",
                cursor: "pointer",
                height: "100%"
            }}
          />
        </div>
      );
    }
  }
  
  export default TwoImages;
  