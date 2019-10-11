import React from 'react';
import PropTypes from 'prop-types';
import * as nativeBase from 'native-base';
import mediaAPI from '../hooks/ApiHooks';

const ListItem = (props) => {
  const {navigation, singleMedia} = props;
  const {getThumbnail} = mediaAPI();
  const tn = getThumbnail(singleMedia.file_id);
  console.log('thumbnails', tn);
  return (
    <nativeBase.ListItem thumbnail>
      <nativeBase.Left>
        {tn && <nativeBase.Thumbnail circular large source={{uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + tn.w160}} />
        }
      </nativeBase.Left>
      <nativeBase.Body>
        <nativeBase.H2>{singleMedia.title}</nativeBase.H2>
      </nativeBase.Body>
      <nativeBase.Right>
        <nativeBase.Button
          onPress={
            () => {
              console.log('klik');
              navigation.push('Single', {file: singleMedia});
            }
          }>
          <nativeBase.Icon name = 'arrow-forward'/>
        </nativeBase.Button>
      </nativeBase.Right>
    </nativeBase.ListItem>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
