import React from 'react';
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';
import { TextControl } from '@wordpress/components';
import { TextareaControl } from '@wordpress/components';
import ImagePicker from '../../components/image-picker';

const Edit = ({
  setAttributes, attributes: {
    userName, userTitle, description, image,
  },
}) => (
  <div className="bio-block__wrapper">
    <ImagePicker
      className="image-picker"
      imageSize="thumbnail"
      onReset={() => setAttributes({ image: 0 })}
      onUpdate={({ id }) => setAttributes({ image: id })}
      value={image}
    />
    <TextControl
      type=""
      label={__('Name', 'fictional-university')}
      value={userName}
      onChange={
        (value) => setAttributes({ userName: value })
      }
    />
    <TextControl
      label={__('Title', 'fictional-university')}
      value={userTitle}
      onChange={
        (value) => { setAttributes({ userTitle: value }); }
      }
    />
    <TextareaControl
      label={__('Description', 'fictional-university')}
      value={ description }
      rows="10"
      onChange={(value) => { setAttributes({ description: value }); }}
    />
  </div>
);

Edit.defaultProps = {
  attributes: {
    userName: '',
    userTitle: '',
    description: '',
    image: 0,
  },
};

Edit.propTypes = {
  setAttributes: PropTypes.func.isRequired,
  attributes: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    userTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.number.isRequired,
  }),
};

export default Edit;
