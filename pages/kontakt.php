<?php
$title = 'Kontakt - Telefon, mail i formluarz';
$keywords = 'naprawa laptopów komputerów warszawa ursynów bemowo kontaktowe formularz telefon';
?>
<h2 class="color">Dane kontaktowe</h2>

<p>
	<strong>TPL Serwis Ursynów</strong><br>
	Al. Ken 83 lok. U-5, 02-777 Warszawa<br>
	Telefon: <b><a href="tel://+48533601601"><img class="phone" src="./images/phone_white.png" alt="profesjonalizm">533-601-601</a> lub <a href="tel://+48533602602"><img class="phone" src="./images/phone_white.png" alt="komputerów">533-602-602</a></b><br>
	E-mail: <a href="mailto:tplserwis@gmail.com"><img src="./images/mail.png" alt="mail">tplserwis@gmail.com</a>
	<br><br>
	<b>Godziny otwarcia:</b><br>
	od poniedziałku do piątku w godz. <b>9.00 - 19.00</b>
	<br>oraz soboty w godz. <b>10.00 - 14.00</b>
</p>

<br>

<p>
	<strong> TPL Serwis Bemowo-Wola </strong><br>
	ul. Powstańców Śląskich 45 lok. U-3, 01-355 Warszawa<br>
	Telefon: <b><a href="tel://+48532606604"><img class="phone" src="./images/phone_white.png" alt="naprawa">532-606-604</a> lub <a href="tel://+48532606605"><img class="phone" src="./images/phone_white.png" alt="diagnoza">532-606-605</a></b><br>
	E-mail: <a href="mailto:tplserwis2@gmail.com"><img src="./images/mail.png">tplserwis2@gmail.com</a>
	<br><br>
	<b>Godziny otwarcia:</b><br>
	od poniedziałku do piątku w godz. <b>10.00 - 18.00</b>
	<?php /*?><br><span style="color: red; font-weight: bold;">W okresie wakacyjnym w soboty serwis na Bemowie nieczynny, zapraszamy na Ursynów.</span><php */?>
	<br>oraz soboty w godz. <b>10.00 - 14.00</b>
</p>
<br>
<h3 class="color_bold">Fachowy serwis laptopów w Warszawie</h3>
<br>
<span id="formmessage"><?php echo $send_message;?></span>
<div style="width: 100%; display: flex; justify-content: space-around; flex-wrap: wrap;">
	<div style="margin: 5px;" id="sendformu">
		<span class="color">Formularz kontaktowy</span> - <strong>TPL Serwis Ursynów</strong>
		<form method="post" action="./kontakt/">
			<input name="firma" value="<?php echo $_POST_FIRMA_U;?>" type="text" placeholder="Imię i Nazwisko" <?php echo $class_firma_u;?>><br />
			<input name="tel" value="<?php echo $_POST_TEL_U;?>" type="number" placeholder="Tel. kontaktowy" pattern="[-+]?\d*"><br />
			<input name="email" value="<?php echo $_POST_EMAIL_U;?>" type="email" placeholder="Adres e-mail" <?php echo $class_email_u;?>><br />
			<textarea name="tresc" rows="2" placeholder="Treść wiadomości:" <?php echo $class_tresc_u;?>><?php echo $_POST_TRESC_U;?></textarea><br />
			<input value="Wyślij pytanie" name="ursynow" type="submit">
			<div class="loaders">
				<div class="sprit"></div>
				<div class="info"></div>
			</div>
		</form>
	</div>
	<div style="margin: 5px;" id="sendformb">
		<span class="color">Formularz kontaktowy</span> - <strong>TPL Serwis Bemowo-Wola</strong>
		<form method="post" action="./kontakt/">
			<input name="firma" value="<?php echo $_POST_FIRMA_B;?>" type="text" placeholder="Imię i Nazwisko" <?php echo $class_firma_b;?>><br />
			<input name="tel" value="<?php echo $_POST_TEL_B;?>" type="number" placeholder="Tel. kontaktowy" pattern="[-+]?\d*"><br />
			<input name="email" value="<?php echo $_POST_EMAIL_B;?>" type="email" placeholder="Adres e-mail" <?php echo $class_email_b;?>><br />
			<textarea name="tresc" rows="2" placeholder="Treść wiadomości:" <?php echo $class_tresc_b;?>><?php echo $_POST_TRESC_B;?></textarea><br />
			<input value="Wyślij pytanie" name="bemowo" type="submit">
			<div class="loaders">
				<div class="sprit"></div>
				<div class="info"></div>
			</div>
		</form>
	</div>
</div>