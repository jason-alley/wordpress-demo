import { TextareaControl, TextControl } from '@wordpress/components';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';
import React from 'react';

// Components.
import ImagePicker from '@/components/image-picker';

// Services.
import usePostMetaValue from '@/hooks/use-post-meta-value';

const OpenGraph = () => {
  const [description, setDescription] = usePostMetaValue('fictional_university_open_graph_description');
  const [image, setImage] = usePostMetaValue('fictional_university_open_graph_image');
  const [title, setTitle] = usePostMetaValue('fictional_university_open_graph_title');

  return (
    <PluginDocumentSettingPanel
      icon="share"
      name="opengraph"
      title={__('Open Graph', 'fictional-university')}
    >
      <ImagePicker
        onReset={() => setImage(0)}
        onUpdate={({ id: next }) => setImage(next)}
        value={image}
      />
      <TextControl
        label={__('Title', 'fictional-university')}
        onChange={(next) => setTitle(next)}
        value={title}
      />
      <TextareaControl
        label={__('Description', 'fictional-university')}
        onChange={(next) => setDescription(next)}
        value={description}
      />
    </PluginDocumentSettingPanel>
  );
};

export default OpenGraph;
