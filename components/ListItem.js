import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem as BaseListItem,
  Button,
  Left,
  Thumbnail,
  Body,
  Right,
  H2,
  Text,
} from 'native-base';
import mediaAPI from '../hooks/ApiHooks';

const ListItem = (props) => {
  const {navigation, singleMedia} = props;
  const {getThumbnail} = mediaAPI();
  const tn = getThumbnail(singleMedia.file_id);
  console.log('thumbnails', tn);
  return (
    <BaseListItem thumbnail>
      <Left>
        {tn && <Thumbnail square large source={{uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + tn.w160}} />
        }
      </Left>
      <Body>
        <H2>{singleMedia.title}</H2>
        <Text numberOfLines={2}>{singleMedia.description}</Text>
      </Body>
      <Right>
        <Button
          onPress={
            () => {
              console.log('klik');
              navigation.push('Single', {file: singleMedia});
            }
          }
        >
          <Text>View</Text>
        </Button>
      </Right>
    </BaseListItem>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
