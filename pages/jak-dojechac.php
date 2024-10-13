<?php
$title = 'Jak dojechać? - Komunikacja tramajowa i autobusowa';
$keywords = 'laptopów warszawa ursynów bemowo komunikacją autobusy tramwaje';
?>
<h2 class="color">Jak do nas trafić?</h2>
<br />
<h3>Serwis laptopów na Ursynowie</h3>
<p>
	<strong>TPL Serwis Ursynów</strong> - 20 metrów od stacji metra Stokłosy<br />
	Al. KEN 83 lok. U-5<br />
	02-777 Warszawa
	<br />
	<div class="map_prew">
		<div id="mapu" class="gogl_m"></div>
		<div class="img_m">
			<a href="./images/mapa.jpg">
				<img src="./images/mapa-min.jpg" alt="Tpl Serwis Ursynów - serwis laptopów">
			</a>
		</div>
	</div>
	<?php if($detect->isMobile()){?>
	<a class="link_map color" href="geo:52.1548443939847,21.03474911302328?q=52.1548443939847,21.03474911302328">Otwórz w mapie</a>
	<?php }else{?>
	<a class="link_map color" href="https://maps.google.com/?q=52.1548443939847,21.03474911302328">Otwórz w większej mapie</a>
	<?php }?>
</p>
<br />
<p>
	<h3>Serwis laptopów Bemowo-Wola</h3>
	<strong>TPL Serwis Bemowo-Wola</strong> - Galeria JELONKI (budynek STOKROTKA przy HALI WOLA)<br />
	ul. Powstańców Śląskich 45 lok. U-3<br />
	01-355 Warszawa
	<br /><br />
	Dojazd komunikacją miejską:<br />
	<strong>Autobusy</strong>: 112, 184, 189, 190, 422<br />
	<strong>Tramwaje</strong>: 8, 10, 26
	<br />
	<div class="map_prew">
		<div id="mapb" class="gogl_m"></div>
		<div class="img_m">
			<a href="./images/mapa-stokrotka.jpg">
				<img src="./images/mapa-stokrotka-min.jpg" style="display: table-cell; vertical-align: middle;" alt="Tpl Serwis Bemowo - serwis laptopów">
			</a>
		</div>
	</div>
	<?php if($detect->isMobile()){?>
	<a class="link_map color" href="geo:52.22996390837969,20.914590507745743?q=52.22996390837969,20.914590507745743">Otwórz w mapie</a>
	<?php }else{?>
	<a class="link_map color" href="https://maps.google.com/?q=52.22996390837969,20.914590507745743">Otwórz w większej mapie</a>
	<?php }?>
</p>
<script type="text/javascript">
	function initMap() {
		if (typeof google === 'object' && typeof google.maps === 'object') {
			var myLatLngU = {lat: 52.1548443939847, lng: 21.03474911302328};
			var myLatLngB = {lat: 52.22996390837969, lng: 20.914590507745743};
			
			mapu = new google.maps.Map(document.getElementById('mapu'), {
				center: myLatLngU,
				zoom: 15,
				scrollwheel: false,
				mapTypeControl: true
			});
			mapb = new google.maps.Map(document.getElementById('mapb'), {
				center: myLatLngB,
				zoom: 15,
				scrollwheel: false,
				mapTypeControl: true
			});
			
			var marker = new google.maps.Marker({
				map: mapu,
				position: myLatLngU,
				title: 'TPL Serwis Ursynów'
			});
			var marker = new google.maps.Marker({
				map: mapb,
				position: myLatLngB,
				title: 'TPL Serwis Bemowo-Wola'
			});
			google.maps.event.addListener(mapu, 'dragend', function () {
				map_u_center = mapu.getCenter();
			});
			google.maps.event.addListener(mapb, 'dragend', function () {
				map_b_center = mapb.getCenter();
			});
			map_u_center = mapu.getCenter();
			map_b_center = mapb.getCenter();
		}
	}
	initMap();
</script>