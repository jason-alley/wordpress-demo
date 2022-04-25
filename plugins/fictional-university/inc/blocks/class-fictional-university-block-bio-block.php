<?php
/**
 * Block definition for Bio Block
 *
 * @package Fictional_University
 */

/**
 * Class for the bio-block block.
 */
class Fictional_University_Block_Bio_Block extends Fictional_University_Block {
	
	/**
	 * Name of the custom block.
	 *
	 * @var string
	 */
	public $name = 'bio-block';

	/**
	 * Namespace of the custom block.
	 *
	 * @var string
	 */
	public $namespace = 'fictional-university';
	
}
$fictional_university_block_bio_block = new Fictional_University_Block_Bio_Block();
