<?php
require_once 'Mobile_Detect.php';
$detect = new Mobile_Detect;
?>
<!DOCTYPE html> 
<html lang="pl">
<head>
	<title>TPLserwis<?php echo $title;?></title>
	<meta name="Description" content="Serwis komputerowy w Warszawie. TPL serwis laptopów to: naprawa, serwis komputerów i laptopów. Warszawa (Ursynów) oraz Warszawa (Bemowo - Wola)." />
	<meta content="index,follow,all" name="robots" />
	<meta name="keywords" content="<?php echo $keywords;?>" />
	
	<base href="http://<?php echo $_SERVER['HTTP_HOST'];?>/serwislaptopow-ken.pl/" />
	
	<meta charset="UTF-8" />
	<meta name="theme-color" content="#202123" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="format-detection" content="telephone=no" />
	
	<script type="text/javascript" src="./jquery.min.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?key=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"></script>
	<script type="text/javascript" src="./script.js"></script>
	
	<link rel="icon" type="image/x-icon" href="./favicon.ico" />
	<link href="./css/style.css" rel="stylesheet" type="text/css" />
	<?php if($detect->isMobile()){?>
	<style>
		a>img.phone{display: inline-block;}
		a[href^=tel]{text-decoration: underline !important;}
		div.small_menu ul>li>a{padding: 12px;}
	</style>
	<?php }?>
	
</head>
<body>
	<header class="fixed">
		<div class="menu">
			<div class="logo">
				<img src="./images/logo.png" alt="TPL">
				<span class="text">serwis laptopów</span>
			</div>
			<nav>
			<ul class="big_menu">
				<li<?php if($_GET['link']=='o-firmie'){?> class="active"<?php }?>><a href="./">O firmie</a></li>
				<li<?php if($_GET['link']=='oferta'){?> class="active"<?php }?>><a href="./oferta/">Oferta</a></li>
				<li<?php if($_GET['link']=='wyslij-laptopa'){?> class="active"<?php }?>><a href="./wyslij-laptopa/">Wyślij do nas laptopa</a></li>
				<li<?php if($_GET['link']=='jak-dojechac'){?> class="active"<?php }?>><a href="./jak-dojechac/">Jak dojechać</a></li>
				<li<?php if($_GET['link']=='kontakt'){?> class="active"<?php }?>><a href="./kontakt/">Kontakt</a></li>
			</ul>
			<div class="small_menu">
				<div class="button active_hover"><div class="button_img"></div>
					<ul class="menu">
						<li<?php if($_GET['link']=='o-firmie'){?> class="active"<?php }?>><a href="./">O firmie</a></li>
						<li<?php if($_GET['link']=='oferta'){?> class="active"<?php }?>><a href="./oferta/">Oferta</a></li>
						<li<?php if($_GET['link']=='wyslij-laptopa'){?> class="active"<?php }?>><a href="./wyslij-laptopa/">Wyślij do nas laptopa</a></li>
						<li<?php if($_GET['link']=='jak-dojechac'){?> class="active"<?php }?>><a href="./jak-dojechac/">Jak dojechać</a></li>
						<li<?php if($_GET['link']=='kontakt'){?> class="active"<?php }?>><a href="./kontakt/">Kontakt</a></li>
					</ul>
				</div>
			</div>
			</nav>
		</div>
		<div class="info">
			W&nbsp;dniu 14.04.2000 serwis jest nieczynny.
		</div>
	</header>
	<div class="box">
		<div class="left">
			<div class="side">
				<h2>SERWIS&nbsp;LAPTOPÓW ZAPRASZAMY!</h2> 
				<div class="addres">
					<strong>TPL Serwis Ursynów</strong><br>
					Al. Komisji Edukacji Narodowej 83<br>
					lokal U-5 (<strong> Ursynów </strong>)<br><br>

					<div class="way_icon">
						<div>
							<img src="images/metro_logo.png" alt="Warszawskim metrem do serwisu laptopów" style="width: 32px; height: 32px;">
						</div>
						<div>
							20 metrów od stacji<br>
							metra Stokłosy
						</div>
					</div>
				</div>
				<div class="addres">
					<strong> TPL Serwis Bemowo-Wola </strong><br>
					ul. Powstańców Śląskich 45<br>
					lokal U-3 (<strong> Bemowo-Wola </strong>)<br /><br />
					<div class="way_icon">
						<div>
							<img src="images/ztm_logo.png" alt="Warszawską komunikacją miejską do serwisu laptopów" style="width: 32px; height: 32px;">
						</div>
						<div>
							Galeria JELONKI<br>
							przy HALI WOLA
						</div>
					</div>
				</div>
				<br />
				<br />
				<div class="gold">
					<br />
					Masz Wątpliwości? Zadzwoń!<br /><br />
					<strong>TPL Serwis Ursynów</strong><br /> <b><a href="tel://+48533601601"><img class="phone" src="./images/phone.png" alt="laptopy">533-601-601</a> lub <a href="tel://+48533602602"><img class="phone" src="./images/phone.png" alt="naprawa">533-602-602</a></b>
					<br/>
					<br/>
					<strong>TPL Serwis Bemowo-Wola</strong>  <br /><b><a href="tel://+48532606604"><img class="phone" src="./images/phone.png" alt="serwis">532-606-604</a> lub <a href="tel://+48532606605"><img class="phone" src="./images/phone.png" alt="profesjonalizm">532-606-605</a></b>
					<br />
					<br />
				</div>
				<div class="baner_small">
					<div class="contener">
						<img src="./images/baner/1.png" alt="naprawa laptopów" class="_1">
						<img src="./images/baner/3.png" alt="profesjonalny serwis" class="_3">
						<img src="./images/baner/2.png" alt="bezpłatna wycena w 10 minut" class="_2">
						<img src="./images/baner/4.png" alt="najlepsza skuteczność napraw" class="_4">
					</div>
				</div>
			</div>
		</div>
		<div class="right">
			<div class="body">
				<div class="baner_top"><img src="./images/baner/zdj4.jpg" alt="zapłacisz tylko za efekt" /><img src="./images/baner/zdj5.jpg" alt="2 lokalizacje w Warszawie" /><img src="./images/baner/zdj1.jpg" alt="jakość czas precyzja" /><img src="./images/baner/zdj2.jpg" class="oferta" alt="najlepsza skuteczność napraw" /><img src="./images/baner/zdj3.jpg" class="wycena" alt="wycena w 10 minut" /><img src="./images/baner/zdjkontakt.jpg" class="kontakt hide" alt="profesjonalny serwis laptopów" /><img src="./images/baner/zdjmapa.jpg" class="mapa hide" alt="bezpłatna diagnoza" /></div>
				<div id="tekst">
<?php
	echo $tresc_strony;
?>
				</div>
				<div class="logos">
					<img src="./images/loga/toshiba.png" alt="Toshiba">
					<img src="./images/loga/msi.png" alt="Msi">
					<img src="./images/loga/maxdata.png" alt="Maxdata">
					<img src="./images/loga/acer.png" alt="Acer">
					<img src="./images/loga/asus.png" alt="Asus">
					<img src="./images/loga/lenovo.png" alt="Lenovo">
					<img src="./images/loga/dell.png" alt="Dell">
					<img src="./images/loga/gericom.png" alt="Gericom">
					<img src="./images/loga/packardbell.png" alt="Packardbell">
					<img src="./images/loga/actina.png" alt="actina">
					<img src="./images/loga/compaq.png" alt="Comapq">
					<img src="./images/loga/twinhead.png" alt="Twinhead">
					<img src="./images/loga/ibm.png" alt="Ibm">
					<img src="./images/loga/fujitsu.png" alt="Fujitsu">
					<img src="./images/loga/apple.png" alt="Apple">
					<img src="./images/loga/lg.png" alt="Lg">
					<img src="./images/loga/microsoft.png" alt="Microsoft">
					<img src="./images/loga/samsung.png" alt="Samsung">
					<img src="./images/loga/gateway.png" alt="Gateway">
					<img src="./images/loga/vaio.png" alt="Vaio">
					<img src="./images/loga/hp.png" alt="Hp">
				</div>
			</div>
			<div class="loader"><div><div class="spinner"></div><br /><span id="load_text">Ładowanie...</span><br /><br /><input value="Anuluj" id="cancel_load" type="button"></div></div>
		</div>
	</div>
	<?php if($_COOKIE['cookieAlert']!='1'){ ?>
	<div class="info_cookies" style="display: table;">
		<div class="c_left">
			Wykorzystujemy pliki Cookies, aby nasza strona lepiej spełniała Państwa wymagania. Można zablokować zapisywanie plików Cookies zmieniając ustawienia przeglądarki.
		</div>
		<div class="c_right">
			<form id="cookies" method="post" action="/serwislaptopow-ken.pl">
				<input name="close" type="submit" class="close" value="×" />
			</form>
		</div>
	</div>
	<?php }?>
	<footer>
		TPL Serwis Laptopów Warszawa | Naprawa Laptopów Warszawa © <? echo date("Y");?> wszystkie prawa zastrzeżone.<br />
		TPL Serwis oświadcza, że wszystkie użyte nazwy, jak: Acer, Dell, HP, Sony Vaio i inne są własnością odpowiednich firm i zostały wykorzystane tylko w celach informacyjnych.<br />
		Wykonanie strony: <a href="mailto:strony.piotr.siekierzynski@gmail.com" target="_blank"><img src="./images/mail.png" alt="mail">Piotr Siekierzyński</a>
	</footer>
<?php if(!$detect->isMobile()){?>
<script>
function remove_numbers(){
	$('a[href^=tel]').each(function(){
		$(this).replaceWith($(this).text());
	});
}
remove_numbers();
</script>
<?php }?>
</body>
</html>
