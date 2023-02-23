<?php 
	get_template_part('/components/map'); 
	wp_footer(); 
?>
</body>
<footer class="footer">
	<div class="footerCopy">
		© Copyrights 2023 Rail-cars
	</div>
	<div class="footerInner">
		<div class="footerCol">
			<a href="#" class="footerLogo">
				<img src="<?php echo THEME_URL; ?>_dev/img/footer-logo.png" alt="footer_logo">
			</a>
			<p class="textYellow textUpper ls3 fontBold">Dane firmy</p>
			<div class="footerCol--text">
				Rail-Cars Sp. Z o.o.<br/>
				Ul. Sikorskiego 111/315<br/>
				66-400 Gorzów Wielkopolski
			</div>
			<div class="footerCol--text">
				t: +48 570 752 520<br/>
				e: rail-cars@wp.pl
			</div>
		</div>
		<div class="footerCol">
			<p class="textYellow textUpper ls3 fontBold">Oddział Krotoszyn</p>
			<div class="footerCol--text">
				Rail-Cars Sp. z o.o.<br/>
				Oddział Krotoszyn<br/>
				ul. Benicka 39<br/>
				63-700 Krotoszyn
			</div>
			<div class="footerCol--text">
				<strong>Kierownik Zakładu</strong><br/>
				Krzysztof Kuliński<br/>
				t: 535-600-118<br/>
				e: pwiksk@wp.pl
			</div>
			<div class="footerCol--text">
				<strong>Specjalista ds. utrzymania</strong><br/>
				Anna Kulińska<br/>
				t: +48 665-648-770<br/>
				e: a.kulinska@rail-cars.pl<br/>
			</div>
			<div class="footerCol--text">
				<strong>Kierownik Zakładu</strong><br/>
				Krzysztof Kuliński<br/>
				t: 535-600-118<br/>
				e: pwiksk@wp.pl
			</div>
		</div>
		<div class="footerCol">
			<p class="textYellow textUpper ls3 fontBold">Oddział Jaworzno</p>
			<div class="footerCol--text">
				Rail-Cars Sp. z o.o.<br/>
				Oddział Krotoszyn<br/>
				ul. Benicka 39<br/>
				63-700 Krotoszyn
			</div>
			<div class="footerCol--text">
				<strong>Kierownik Zakładu</strong><br/>
				Krzysztof Kuliński<br/>
				t: 535-600-118<br/>
				e: pwiksk@wp.pl
			</div>
			<div class="footerCol--text">
				<strong>Specjalista ds. utrzymania</strong><br/>
				Anna Kulińska<br/>
				t: +48 665-648-770<br/>
				e: a.kulinska@rail-cars.pl<br/>
			</div>
		</div>
	</div>
	<div class="footerRight">
		<a href="#scrollTop">
			<svg xmlns="http://www.w3.org/2000/svg" width="48.065" height="48.065" viewBox="0 0 48.065 48.065">
				<g id="arrow-right" transform="translate(0 48.065) rotate(-90)">
					<path id="Path_2" data-name="Path 2" d="M24.032,0A24.033,24.033,0,1,0,48.065,24.032,24.032,24.032,0,0,0,24.032,0Zm0,45.662A21.629,21.629,0,1,1,45.662,24.032,21.629,21.629,0,0,1,24.032,45.662Zm0,0" fill="#fdcc12"/>
					<path id="Path_3" data-name="Path 3" d="M172.655,128.3a1.2,1.2,0,1,0-1.582,1.809l8.579,7.506-8.58,7.507a1.2,1.2,0,1,0,1.582,1.809l9.613-8.412a1.2,1.2,0,0,0,0-1.809Zm0,0" transform="translate(-151.436 -113.58)" fill="#fdcc12"/>
				</g>
			</svg>
		</a>
		<div class="footerRight--text">
			Wykonane przez <a href="#" target="_blank">Sharing Design. Studio Graficzne</a>
		</div>
	</div>
</footer>
    
<!-- Javascript-->
<script src="<?php echo THEME_URL ?>public/bundle.js"></script>
<script src="<?php echo THEME_URL ?>_dev/js/map.js"></script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAaPiQlYXG53c8H0c9UxK_zT2WZxyPghe0&callback=initMap"></script>
