import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// Components.
import MediaPicker from '@/components/media-picker';

// Styled components.
const PreviewContainer = styled.div`
  height: auto;
  width: 100%;
`;

// Create a component to represent the audio preview.
const Preview = ({ src }) => (
  <PreviewContainer>
    <audio // eslint-disable-line jsx-a11y/media-has-caption
      className="edit-audio-preview"
      controls
      src={src}
    />
  </PreviewContainer>
);

Preview.propTypes = {
  src: PropTypes.string.isRequired,
};

const AudioPicker = ({
  className,
  onReset,
  onUpdate,
  onUpdateURL,
  value,
  valueURL,
}) => (
  <MediaPicker
    allowedTypes={['audio']}
    className={className}
    icon="format-audio"
    onReset={onReset}
    onUpdate={onUpdate}
    onUpdateURL={onUpdateURL}
    preview={Preview}
    value={value}
    valueURL={valueURL}
  />
);

AudioPicker.defaultProps = {
  className: '',
  onUpdateURL: null,
  valueURL: '',
};

AudioPicker.propTypes = {
  className: PropTypes.string,
  onReset: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onUpdateURL: PropTypes.func,
  value: PropTypes.number.isRequired,
  valueURL: PropTypes.string,
};

export default AudioPicker;
