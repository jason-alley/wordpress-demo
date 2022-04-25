<?php
/**
 * Block definition for Sample Block
 *
 * @package Fictional_University
 */

/**
 * Class for the sample-block block.
 */
class Fictional_University_Block_Sample_Block extends Fictional_University_Block {
	
	/**
	 * Name of the custom block.
	 *
	 * @var string
	 */
	public $name = 'sample-block';

	/**
	 * Namespace of the custom block.
	 *
	 * @var string
	 */
	public $namespace = 'fictional-university';
	
}
$fictional_university_block_sample_block = new Fictional_University_Block_Sample_Block();
