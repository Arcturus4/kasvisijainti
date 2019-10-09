import React, {useState} from 'react';
import PropTypes from 'prop-types';

const MediaContext = React.createContext({});
const MediaProvider = (props) => {
  const {
    media: initialMedia,
    user: initialUser,
    where: initialWhere,
    children,
  } = props;
  const [media, setMedia] = useState(initialMedia);
  const [user, setUser] = useState(initialUser);
  const [where, setWhere] = useState(initialWhere);


  const appContext = {
    user,
    setUser,
    media,
    setMedia,
    where,
    setWhere,
  };

  return (
    <MediaContext.Provider value={appContext}>
      {children}
    </MediaContext.Provider>
  );
};

MediaProvider.propTypes = {
  media: PropTypes.array,
  user: PropTypes.object,
  children: PropTypes.node,
  where: PropTypes.object,
};

MediaProvider.defaultProps = {
  media: [],
  user: {},
  where: {lat: null, lng: null},
};

export {MediaContext, MediaProvider};
