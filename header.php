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
		<link rel="preconnect" href="https://use.typekit.net/ujt8ljn.css" rel="stylesheet">
		<link rel="stylesheet" href="<?php echo THEME_URL ?>public/main.css">
	</head>
	

	<body <?php body_class()?>>
		<div id="scroll_top"></div>
		<header class="header">
			<div class="headerInner">
				
				<div class="headerLeft">
					<a class="headerLogo" href="<?php echo esc_url(home_url('/')) ?>">
						<img src="<?php echo THEME_URL; ?>_dev/img/logo-white.png" alt="logo">
					</a>
					<div class="headerContact">
						<a href="#">+48 570 752 520</a>
						<a href="#">rail-cars@wp.pl</a>
					</div>
				</div>
				<div class="hamburger">
					<div class="hamburgerLines">
						<span class="hamburger__line1"></span>
						<span class="hamburger__line2"></span>
						<span class="hamburger__line3"></span>
					</div>
				</div>
				
			</div>
			<nav class="headerLinks">
				<?php wp_nav_menu(['theme_location' => 'main_nav']); ?>
			</nav>

			<div class="headerCircle"></div>
		</header>

		