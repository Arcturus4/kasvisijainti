import React, {useContext} from 'react';
import {AsyncStorage} from 'react-native';
import PropTypes from 'prop-types';
import Geolocation from '../components/Geolocation'
import {
  Icon,
  Container,
  Content,
  Text,
  Button,
  Card,
  CardItem,
  Left,
  H2,
  Body,
  Right,
  Header,
  Title,
} from 'native-base';
import mediaAPI from '../hooks/ApiHooks';
import AImage from '../components/AsyncImage';
import {MediaContext} from '../contexts/MediaContext';

const Profile = (props) => {
  const {user} = useContext(MediaContext);
  console.log('ret user', user);
  const {getAvatar} = mediaAPI();
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };
  return (
    <Container>
      <Header>
      <Left />
        <Body>
          <Title>Profile</Title>
        </Body>
        <Right/>
      </Header>
      <Content>
        {user &&
        <Card>
          <CardItem>
            <Left>
              <Icon name='person' />
              <Body>
                <H2>{user.username}</H2>
                <Text>{user.full_name}</Text>
                <Text note>{user.email}</Text>
              </Body>
            </Left>
            <Right>
              <Button
                iconRight
                onPress={signOutAsync}
              >
                <Text>Sign out</Text>
                <Icon name='log-out' />
              </Button>
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Body>
              <AImage
                source={{uri: getAvatar(user)}}
                style={{
                  borderRadius: 50,
                  width: '100%',
                  height: 200,
                }}
                spinnerColor='#b3e5fc'
              />
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button
                iconRight
              >
                <Text>Add avatar</Text>
                <Icon name='add' />
              </Button>
            </Left>
            <Right>
              <Button
                iconRight
                onPress={() => {
                  props.navigation.navigate('MyFiles');
                }}
              >
                <Text>My files</Text>
                <Icon name='document' />
              </Button>
            </Right>
          </CardItem>
        </Card>
        }
        <Geolocation/>
      </Content>
    </Container>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
