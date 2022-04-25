<?php
/**
 * Reusable extensions for the Fictional University site.
 *
 * Plugin Name: Fictional University Extensions
 * Plugin URI: https://github.com/alleyinteractive/fictional-university
 * Description: Extensions to the Fictional University site.
 * Version: 1.0.0
 * Author: Alley
 *
 * @package Fictional_University
 */

namespace Fictional_University;

// Include functions for working with assets (primarily JavaScript).
require_once __DIR__ . '/inc/assets.php';
require_once __DIR__ . '/inc/asset-loader-bridge.php';

// Include functions for working with meta.
require_once __DIR__ . '/inc/meta.php';

// Include functions.php for registering custom post types, etc.
require_once __DIR__ . '/functions.php';
