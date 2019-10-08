/* eslint-disable max-len */
import React from 'react';
import List from '../components/List';
import PropTypes from 'prop-types';
import mediaAPI from '../hooks/ApiHooks';
import {Container, Content} from 'native-base';
/*uploadista mallia tokenin käyttöön*/
/*
<Button onPress={() => {
   deleteFile(file.file_id);
 }}><Text>Delete</Text></Button>

 delete metodi api hooksiin

 listat pitää päivittää postamisen jälkeen

 viimeinen kohta, ei uploadata mitään, kun painetaan sendia, ei uploadata vaan put metodi
 */


const Myfiles = (props) => {
  const {navigation} = props;
  const {userToContext} = mediaAPI();
  userToContext();
  return (
    <Container>
      <Content>
        <List navigation={navigation}></List>
      </Content>
    </Container>
  );
};´

const getAllMyMedia = () => {
  const {Mymedia, setMedia} = useContext(MediaContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchGetUrl(apiUrl + 'media').then((json) => {
      setMyMedia(json);
      setLoading(false);
    });
  }, []);
  return [Mymedia, loading];
};

const MediaContext = React.createContext({});
const MediaProvider = (props) => {
  const {
    Mymedia: initialMedia,
    user: initialUser,
    children,
  } = props;
  const [Mymedia, setMedia] = useState(initialMedia);
  const [user, setUser] = useState(initialUser);

  const appContext = {
    user,
    setUser,
    Mymedia,
    setMyMedia,
  };
