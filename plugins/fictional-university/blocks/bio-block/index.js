// Import WordPress block dependencies.
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import attributes from './attributes.json';
import edit from './edit';

// Enqueue styles.
import './editor.scss';

/* eslint-disable quotes */

registerBlockType(
  'fictional-university/bio-block',
  {
    attributes,
    apiVersion: 2,
    category: 'widgets',
    description: __(
      'A basic Bio block for users.',
      'fictional-university',
    ),
    edit,
    icon: 'admin-users',
    keywords: [
      __('bio-block', 'fictional-university'),
      __('user bio', 'fictional-university'),
    ],
    title: __('Bio Block', 'fictional-university'),
  },
);
