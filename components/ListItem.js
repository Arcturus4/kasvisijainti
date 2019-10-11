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
  Icon
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
        {tn && <Thumbnail circular large source={{uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + tn.w160}} />
        }
      </Left>
      <Body>
        <H2>{singleMedia.title}</H2>
      </Body>
      <Right>
        <Button
          onPress={
            () => {
              console.log('klik');
              navigation.push('Single', {file: singleMedia});
            }
          }>
          <Icon name = 'arrow-forward'/>
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
