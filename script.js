!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var n={exports:{}};t(n.exports,n),e.autosize=n.exports}}(this,function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);p=t.overflowY,"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),c="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(c)&&(c=0),i()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,p=t,f&&(e.style.overflowY=t),o()}function o(){var t=window.pageYOffset,n=document.body.scrollTop,o=e.style.height;e.style.height="auto";var i=e.scrollHeight+c;return 0===e.scrollHeight?void(e.style.height=o):(e.style.height=i+"px",v=e.clientWidth,document.documentElement.scrollTop=t,void(document.body.scrollTop=n))}function i(){var t=e.style.height;o();var i=window.getComputedStyle(e,null);if(i.height!==e.style.height?"visible"!==p&&n("visible"):"hidden"!==p&&n("hidden"),t!==e.style.height){var r=d("autosize:resized");e.dispatchEvent(r)}}var s=void 0===arguments[1]?{}:arguments[1],a=s.setOverflowX,l=void 0===a?!0:a,u=s.setOverflowY,f=void 0===u?!0:u;if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!r.has(e)){var c=null,p=null,v=e.clientWidth,h=function(){e.clientWidth!==v&&i()},y=function(t){window.removeEventListener("resize",h,!1),e.removeEventListener("input",i,!1),e.removeEventListener("keyup",i,!1),e.removeEventListener("autosize:destroy",y,!1),e.removeEventListener("autosize:update",i,!1),r["delete"](e),Object.keys(t).forEach(function(n){e.style[n]=t[n]})}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",y,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",i,!1),window.addEventListener("resize",h,!1),e.addEventListener("input",i,!1),e.addEventListener("autosize:update",i,!1),r.add(e),l&&(e.style.overflowX="hidden",e.style.wordWrap="break-word"),t()}}function o(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=d("autosize:destroy");e.dispatchEvent(t)}}function i(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=d("autosize:update");e.dispatchEvent(t)}}var r="function"==typeof Set?new Set:function(){var e=[];return{has:function(t){return Boolean(e.indexOf(t)>-1)},add:function(t){e.push(t)},"delete":function(t){e.splice(e.indexOf(t),1)}}}(),d=function(e){return new Event(e)};try{new Event("test")}catch(s){d=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}var a=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(a=function(e){return e},a.destroy=function(e){return e},a.update=function(e){return e}):(a=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return n(e,t)}),e},a.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e},a.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e}),t.exports=a});
window_width = 635;

var request, request_form = {}, request_net, count, count_form, last_id;
var spin_count, spin_count_s;
var cookies_height = 0;
var tm_out, tm_out_form = {};
var map_u_center, map_b_center, mapu, mapb, resize_delay;
var start_scroll_baner = true;

newspinner=new Image();
newspinner.src='./images/sprites.png';
newspinners=new Image();
newspinners.src='./images/sprites_small.png';

function supports_history_api() {
  return !!(window.history && history.pushState);
}
function preloadimages(arr){
    var newimages=[], loadedimages=0
    var postaction=function(){}
    var arr=(typeof arr!="object")? [arr] : arr
    function imageloadpost(){
        loadedimages++
        if (loadedimages==arr.length){
            postaction(newimages) //call postaction and pass in newimages array as parameter
        }
    }
    for (var i=0; i<arr.length; i++){
        newimages[i]=new Image()
        newimages[i].src=arr[i]
        newimages[i].onload=function(){
            imageloadpost()
        }
        newimages[i].onerror=function(){
            imageloadpost()
        }
    }
    return { //return blank object with done() method
        done:function(f){
            postaction=f || postaction //remember user defined callback functions to be called when images load
        }
    }
}
function load_img_complete(data){
	count = 0;
	document.title = data.title;
	$('div#tekst').html(data.body);
	$('div.loader').css('display','none');
	$('#load_text').html('Ładowanie...');
	on_load();
}
function load_page(link){
	// window.applicationCache.status
	request = $.ajax({
		type: 'GET',
		url: './',
		data: {u:link},
		timeout : 3000,
		dataType: 'json',
		cache: true,
		success: function(data) {
			files = new Array();
			$(data).find('img').each(function(){files.push($(this).attr('src'));});
			if(files.length>0){
				preloadimages(files).done(function(){
					load_img_complete(data);
				});
			}
			else
			load_img_complete(data);
		},
		error: function() { // if error occured
			count++;
			if(count>6){
				request_net = $.ajax({
					type: 'GET',
					url: 'http://google.com',
					timeout : 3000,
					cache: false,
					error: function() { // if error occured
						$('#load_text').html('Brak połączenia internetowego...');
						tm_out = setTimeout(function(){load_page(link);}, 1000);
					}
				});
			}
			else
			{
				$('#load_text').html('Ponawianie...');
				tm_out = setTimeout(function(){load_page(link);}, 1000);
			}
		}
	});
}
function on_load(){
	if($("#sendformu").length > 0 && $("#sendformb").length > 0){
		$("#sendformu").css("width",$("#sendformb").width()+"px");
		
		$("#sendformu form div.loaders,#sendformb form div.loaders").each(function(){
			$(this).css('bottom',($(this).closest('form').find('input[type="submit"]').outerHeight()+3)+'px');
		});
		
		$("#sendformu form input[type=\"submit\"],#sendformb form input[type=\"submit\"]").click(function(e){
			$form = $(this).closest('form');
			$name = $form.find('input[type="submit"]').attr('name');
			if($(this).val().toLowerCase()!='anuluj'){
				$form.find('div.loaders').css('display','block');
				spin_count_s = 0;
				generate_small_spinner();
				$form.find('input[type!="submit"],textarea').blur();
				$form.find('input[type="submit"]').val('Anuluj');
				var formData = $(this).closest('form').serializeArray();
				formData.push({ name: this.name, value: this.value });
				formData.push({ name: 'd', value: '' });
				count_form = 0;
				send_message(formData,$form,$name);
			}
			else
			{
				clearTimeout(tm_out_form[$name]);
				request_form[$name].abort();
				$form.find('input[type="submit"]').val('Wyślij pytanie');
				$form.find('div.loaders').css('display','none');
			}
			return false;
		});
		$("#sendformu form input,#sendformb form input,#sendformu form textarea,#sendformb form textarea").focus(function(){
			$(this).removeClass('error');
		});
	}
	
	if (!(typeof remove_numbers == "undefined" || remove_numbers == null)){
		remove_numbers();
	}
	if($('textarea[name=tresc]').length > 0){
		autosize($('textarea[name=tresc]'));
	}
}
function send_message(formData,form,name){
	request_form[name] = $.ajax({
		url: './kontakt/',
		method : 'POST',
		data: $.param(formData),
		dataType: 'json',
		timeout : 3000,
		success: function(data) {
			form.find('div.loaders').css('display','none');
			if(data.firma=='err')
				form.find('input[name="firma"]').addClass('error');
			else
				form.find('input[name="firma"]').removeClass('error');
			
			if(data.email=='err')
				form.find('input[name="email"]').addClass('error');
			else
				form.find('input[name="email"]').removeClass('error');
			
			if(data.tresc=='err')
				form.find('textarea[name="tresc"]').addClass('error');
			else
				form.find('textarea[name="tresc"]').removeClass('error');
			
			if(data.sendmessage!='')
				$('#formmessage').html(data.sendmessage);
			if(data.send=='ok')
				form[0].reset();
			
			form.find('input[type="submit"]').val('Wyślij pytanie');
		},
		error: function() { // if error occured
			count_form++;
			if(count_form>6){
				request_net = $.ajax({
					type: 'GET',
					url: 'http://google.com',
					timeout : 3000,
					cache: false,
					error: function() { // if error occured
						form.find('div.info').html('Brak połączenia internetowego...');
						tm_out_form[name] = setTimeout(function(){send_message(formData,form,name);}, 1000);
					}
				});
			}
			else
			{
				form.find('div.info').html('Ponawianie...');
				tm_out_form[name] = setTimeout(function(){send_message(formData,form,name);}, 1000);
			}
		}
	});
}
function generate_spinner(){
	$("div.spinner").css('backgroundPosition','-'+spin_count*128+'px 0');
	spin_count++;
	if(spin_count>=16){
		spin_count = 0;
	}
	if($('div.loader').css('display')=='block'){
		setTimeout(generate_spinner, 70);
	}
}
function generate_small_spinner(){
	$("div.sprit").css('backgroundPosition','-'+spin_count_s*64+'px 0');
	spin_count_s++;
	if(spin_count_s>=16){
		spin_count_s = 0;
	}
	$('div.loaders').each(function(){
		if($(this).css('display')=='block'){
			setTimeout(generate_small_spinner, 70);
			return false;
		}
	});
}
function calculate_loader(){
	if($(window).height()>$('div.side').outerHeight()){
		
	}
	
	//$("div.loader>div").css('top',(tops-($("div.loader>div").height()/2))+'px').css('left',($('div.body').offset().left+($('div.body').outerWidth()/2)-($("div.loader>div").outerWidth()/2))+'px');
}
function calculate_left_panel(){
	if($('div.body').outerHeight()>$('div.side').outerHeight() && $(window).width()>window_width){//jeśli lewy panel > od treści
		if($('div.side').outerHeight()>($(window).height()-($('header').outerHeight()+40+cookies_height))){//jeśli lewy panel > widocznej treści
			bottom_body = ($(document).scrollTop()+$(window).height()-$('body')[0].scrollHeight-cookies_height)+($(document).height()-($('div.body').outerHeight()+$('div.body').offset().top));
			if(bottom_body>=20) //dolna krawędź terści i lewy panel
			{
				$('div.left').css({'width':$('div.side').outerWidth()+'px','position':'relative'});
				$('div.side').css({'top':'','position':'absolute','bottom':'20px'});
			}
			else if($(window).height()-($('header').outerHeight()+40+cookies_height+$('div.side').outerHeight())+$(document).scrollTop()<0){//górna krawędź treści
				$('div.left').css({'width':$('div.side').outerWidth()+'px','position':''});
				$('div.side').css({'top':$('header').outerHeight()+20+'px','position':'absolute','bottom':''});
			}
			else
			{
				$('div.left').css({'width':$('div.side').outerWidth()+'px','position':''});
				$('div.side').css({'top':'','position':'fixed','bottom':cookies_height+20+'px'});
			}
		}
		else if($('div.body').outerHeight()-$('div.side').outerHeight()-$(document).scrollTop()<0){
			$('div.left').css({'width':$('div.side').outerWidth()+'px','position':'relative'});
			$('div.side').css({'top':'','position':'absolute','bottom':'20px'});
		}
		else 
		{
			$('div.left').css({'width':$('div.side').outerWidth()+'px','position':''});
			$('div.side').css({'top':$('header').outerHeight()+20+'px','position':'fixed','bottom':''});
		}
	}
	else
	{
		$('div.side').css({'top':'','position':'static','bottom':''});
	}
}
function calculate_cookies_height(){
	if($('div.info_cookies').css('display')!='none' && $("div.info_cookies").length > 0){
		cookies_height = $('div.info_cookies').outerHeight();
	}
	else
	{
		cookies_height = 0;
	}
}
function change_baner(index){
	if(index==0){
				start_scroll_baner = true;
				$(".baner_top img.kontakt,.baner_top img.mapa").addClass('hide');
				$(".baner_top").append($(".baner_top img.kontakt"));
				$(".baner_top").append($(".baner_top img.mapa"));
				baner_align();
			}
			else
			{
				start_scroll_baner = false;
				if(index == 1){
					$(".baner_top img.kontakt,.baner_top img.mapa").addClass('hide');
					$(".baner_top").append($(".baner_top img.kontakt"));
					$(".baner_top").append($(".baner_top img.mapa"));
					$(".baner_top img:nth-child(3)").before($(".baner_top img.oferta"));
					baner_align();
				}
				if(index == 2){
					$(".baner_top img.kontakt,.baner_top img.mapa").addClass('hide');
					$(".baner_top").append($(".baner_top img.kontakt"));
					$(".baner_top").append($(".baner_top img.mapa"));
					$(".baner_top img:nth-child(3)").before($(".baner_top img.wycena"));
					baner_align();
				}
				if(index == 3){
					$(".baner_top img.kontakt").addClass('hide');
					$(".baner_top").append($(".baner_top img.kontakt"));
					$(".baner_top img.mapa").removeClass('hide');
					$(".baner_top img:nth-child(3)").before($(".baner_top img.mapa"));
					baner_align();
				}
				if(index == 4){
					$(".baner_top img.mapa").addClass('hide');
					$(".baner_top").append($(".baner_top img.mapa"));
					$(".baner_top img.kontakt").removeClass('hide');
					$(".baner_top img:nth-child(3)").before($(".baner_top img.kontakt"));
					baner_align();
				}
			}
}

function baner_align(){
	globalwidth = 0;
	$(".baner_top>img:not(.hide):lt(3)").each(function(i,v){
		if(i==2){
			globalwidth+=($(this).width()/2);
		}
		else{
			globalwidth+=$(this).width();
		} 
	});
	$(".baner_top").scrollLeft(globalwidth-($(".baner_top").width()/2));
}

$(window).load(function() {
	$('div.small_menu div.button').removeClass('active_hover');
	$('body').on('touchstart mouseover', function(e){
		if($(e.target).closest("div.button").length>0){	
			if(!$('div.small_menu div.button').hasClass('hover')){
				$('div.small_menu div.button').addClass('hover');
				e.preventDefault();
				e.stopPropagation();
				return false;
			}
			else
			{
				$('div.small_menu div.button').addClass('hover');
			}
		}
		else
		{
			$('div.small_menu div.button').removeClass('hover');
		}
	});
	
	if(supports_history_api()){
		if(window.history.state===null){
			index = $('ul li.active').index();
			link = $('ul li.active a').attr('href').replace(/[\.\/]/g,'');
			link = (link==''?'./':'./'+link+'/');
			window.history.replaceState(
				{page: link.replace(/[\.\/]/g,''), index: index},
				'',
				link
			);
		}
		$('ul li').on('click', 'a', function(e){
			last_id = $(this).closest("ul").find('li.active').index();
			$('div.small_menu div.button').removeClass('hover');
			
			if(typeof tm_out != 'undefined'){
				clearTimeout(tm_out);
			}
			if(typeof request_net != 'undefined'){
				request_net.abort();
			}
			if(typeof request != 'undefined'){
				request.abort();
			}
			
			index = $(this).parent().index();
			link = $(this).attr('href').replace(/[\.\/]/g,'');
			link = (link==''?'./':'./'+link+'/');

			$('ul.big_menu li').removeAttr('class').eq(index).addClass('active');
			$('ul.menu li').removeAttr('class').eq(index).addClass('active');
			
			change_baner(index);
			
			window.history.pushState(
				{page: link.replace(/[\.\/]/g,''), index: index},
				'',
				link
			);
			
			count = 0;
			
			$('div.loader').css('display','block');
			//calculate_loader();
			spin_count = 0;
			//$(window).scrollTop(0);
			generate_spinner();
			load_page(link);
			
			
			e.preventDefault();
			return false;
		});
	}
	
	$('#cancel_load').click(function(){
		request_net.abort();
		request.abort();
		count = 0;
		$('div.loader').css('display','none');
		$('#load_text').html('Ładowanie...');
		
		$('ul.big_menu li').removeAttr('class').eq(last_id).addClass('active');
		$('ul.menu li').removeAttr('class').eq(last_id).addClass('active');
	});

	calculate_left_panel();
	calculate_cookies_height();
    $('body').css({'padding-top':$('header').height()+"px",'padding-bottom':cookies_height+$('footer').outerHeight(true)+'px'});
    $('footer').css('padding-bottom',cookies_height+'px');
	
	if($("div.info_cookies").length > 0){
		$('#cookies').submit(function(e) {
			var exdate=new Date();
			exdate.setDate(exdate.getDate() + 4000);
			document.cookie='cookieAlert=1; expires='+exdate.toUTCString();
			
			$('div.info_cookies').remove();
			cookies_height = 0
			$('body').css({'padding-top':$('header').height()+"px",'padding-bottom':cookies_height+$('footer').outerHeight(true)+'px'});
			$('footer').css('padding-bottom',cookies_height+'px');
			calculate_left_panel();
			e.preventDefault();
			return false;
		});
	}
	on_load();
	
	change_baner($("ul").find('li.active').index());
	if($(".baner_top").width()<900){
		$(".baner_top,.baner_top>img").css("height", ((350*$(".baner_top").width())/900)+'px');
	}
	else{
		$(".baner_top,.baner_top>img").css("height", '350px');
	}
	$(".baner_top").scrollLeft(($(".baner_top>img:not(.hide):first").width()*2)-(($(".baner_top").width()-$(".baner_top>img:not(.hide):first").width())/2));
	
	setInterval(function(){
		$(".baner_small>.contener>img:not(.hide):first").appendTo(".baner_small>.contener");
	}, 4000);
	setInterval(function(){
		if(start_scroll_baner){
			if($(".baner_top").width()<900){
				$(".baner_top,.baner_top>img").css("height", ((350*$(".baner_top").width())/900)+'px');
			}
			else{
				$(".baner_top,.baner_top>img").css("height", '350px');
			}
				$(".baner_top").scrollLeft($(".baner_top>img:not(.hide):first").width()-(($(".baner_top").width()-$(".baner_top>img:not(.hide):first").width())/2));
				$(".baner_top>img:not(.kontakt,.mapa):first").insertBefore($(".baner_top>img.hide:first"));
				$(".baner_top").animate({scrollLeft:"+="+$(".baner_top>img:not(.hide):first").width()+"px"}, 1000, 'swing');
		}
	}, 10000);
	baner_align();
	
	$('<iframe />', {
		name: 'myFrame',
		id:   'myFrame',
		style: 'position:absolute;left:-1000px;top:-1000px;width:200px;height:200px;'
	}).appendTo('body');
});
$(window).on("resize scroll",function(){
	calculate_left_panel();
	
	//if($('div.loader').css('display')=='flex'){
	//	calculate_loader();
	//}
});
$(window).on('resize', function(){
	calculate_cookies_height();
    $('body').css({'padding-top':$('header').height()+"px",'padding-bottom':cookies_height+$('footer').outerHeight(true)+'px'});
    $('footer').css('padding-bottom',cookies_height+'px');
	 
	clearTimeout(resize_delay);
	resize_delay = setTimeout(function(){
		if(mapu!==undefined)
		mapu.setCenter(map_u_center);
		if(mapb!==undefined)
		mapb.setCenter(map_b_center);
	
	
		if($(".baner_top").width()<900){
			$(".baner_top,.baner_top>img").css("height", ((350*$(".baner_top").width())/900)+'px');
		}
		else{
			$(".baner_top,.baner_top>img").css("height", '350px');
		}
		baner_align();
	}, 100);
});
window.onpopstate = function(event) {
	$('ul.big_menu li').removeAttr('class').eq(event.state.index).addClass('active');
	$('ul.menu li').removeAttr('class').eq(event.state.index).addClass('active');
	$('div.loader').css('display','block');
	
	
	if(typeof tm_out != 'undefined'){
		clearTimeout(tm_out);
	}
	if(typeof request_net != 'undefined'){
		request_net.abort();
	}
	if(typeof request != 'undefined'){
		request.abort();
	}
	count = 0;
	
	change_baner(event.state.index);
	load_page(event.state.page);
};

var appCache = window.applicationCache;
if (appCache.status == window.applicationCache.UPDATEREADY) {
  appCache.swapCache();
}