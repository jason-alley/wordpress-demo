<?php

add_filter('upload_mimes', 'add_yaml_mime_type');
function add_yaml_mime_type($mime_types)
{
	$mime_types['yaml'] = 'application/x-yaml';
	$mime_types['yml'] = 'text/yaml';
	return $mime_types;
}
