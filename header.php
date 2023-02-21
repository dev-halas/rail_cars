<!DOCTYPE html>
<html <?php language_attributes();?>>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<?php if(is_search()):?>
			<meta name="robots" content="noindex, nofollow" />
		<?php endif;?>
		
		<?php wp_head() ?>
		<title><?php echo bloginfo('name'); echo ' - '; bloginfo('description');?></title> 

		<meta charset="<?php bloginfo('charset')?>" />

		<!-- Stylesheets-->
		<link rel="stylesheet" href="<?php echo THEME_URL ?>public/main.css">
	</head>
	

	<body <?php body_class()?>>
		<h1> Header </h1>

		<h1>test Kryu push</h1>
		<h2>test2</h2>
		<h2>test kamil</h2>
		<h2>test kamil</h2>
		<h3>sdf</h3>
		
		<!-- LOGO URL -->
		<h1><a href="<?php echo esc_url(home_url('/')) ?>"> LOGO URL</a></h1>