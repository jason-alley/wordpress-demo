<?php
/**
 * Template part for block for Bio Block
 *
 * phpcs:disable VariableAnalysis.CodeAnalysis.VariableAnalysis.UndefinedVariable
 *
 * @global array  $attributes Block attributes passed to the render callback.
 * @global string $content    Block content from InnerBlocks passed to the render callback.
 *
 * @package Fictional_University
 */

 $bio_block_name = $attributes['userName'] ? $attributes['userName'] : '';
 $bio_block_title = $attributes['userTitle'] ? $attributes['userTitle'] : '';
 $bio_block_desc = $attributes['description'] ? $attributes['description'] : '';
 $bio_block_img = $attributes['image'];

?>

<section>
	<div>
		<img src="<?php echo wp_get_attachment_url( $bio_block_img ); ?>" alt="">
		<h3>
			<?php echo esc_html( $bio_block_name ); ?>
		</h3>
		<p>
			<?php echo esc_html( $bio_block_title ) ?>
		</p>
		<p>
			<?php echo esc_html( $bio_block_desc ) ?>
		</p>
	</div>
</section>

<?php  ?>
