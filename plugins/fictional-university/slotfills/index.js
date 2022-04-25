import { registerPlugin } from '@wordpress/plugins';

// Sections.
import OpenGraph from './sections/open-graph';

registerPlugin('fictional-university-open-graph', { render: OpenGraph });
