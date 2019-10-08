/* eslint-disable max-len */
/*import React from 'react';
import List from '../components/List';
import PropTypes from 'prop-types';
import mediaAPI from '../hooks/ApiHooks';
import {Container, Content, View} from 'native-base';



type Props = {};
  constructor(props) {
    super(props);

    this.state = {
      latitude: 0,
      londitude: 0
    };
  }


  componentDidMount() {
    this.watchid = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude

        });
      },
      (error) => {
        this.setState({error: error.message})
      },
      { enableHighAccuracy: false, timeout: 120, maximumAge: 120, distanceFilter: 1000 }
      )
  }


const Cooordinates = () => {
  const props = {watchid};

 return(
  <Text>your cordinates are: {watchid}</Text>

  );
}


 const CordsContext = React.createContext({});
const CordinateProvider = (props) => {
  const {
    usercord: watchid,
  } = props;

  const cordsContext = {
    watchid
  };

  return (
    <Text>{watchid}</Text>
  );
};

export default cordinates;


