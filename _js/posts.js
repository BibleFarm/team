///////////////////////////////////////////////////
/// BEGIN JS for ready post modal  ///////
///////////////////////////////////////////////////
$(document).ready(function() {

  var this_page_name = $("title").html().replace(/\ /g,"-").replace(":","-");
  console.log("title tag: " + this_page_name);

  var ref_for_this_page = $("title").text();
  console.log(ref_for_this_page);

  var v_for_this_page = $(".v").text();
  console.log(v_for_this_page);

  ///////////////////////////////////////////////////
  /// BEGIN inject everything in the head  ///////
  ///////////////////////////////////////////////////

	$('		<script>		/* get them and implement them here: https://developers.google.com/search/docs/data-types/article // test them here: https://search.google.com/structured-data/testing-tool // monitor them here: https://search.google.com/search-console/welcome */ (function() {		  var jsonData = [		    {		      "@context": "http://www.schema.org",		      "@type": "Organization",		      name: "BibleFarm.org",		      url: "https://www.biblefarm.org/",		      sameAs: [		        "https://www.instagram.com/biblefarm/",		        "https://www.facebook.com/BibleFarm.org/",		        "https://www.facebook.com/granjasolidaria/",		        "https://www.facebook.com/groups/BiblieFarm/",		        "https://twitter.com/biblefarm/",		        "https://www.youtube.com/channel/UCqu0sNEEhviHFa8VUd12HnA",		        "https://www.youtube.com/playlist?list=PL-SXzhnj1OgLUY7MqL-RW1FrJSXTpXltA",		        "https://www.pinterest.com/BibleFarm/",		        "https://www.linkedin.com/company/biblefarm-org",		        "https://www.paypal.me/biblefarm"		      ],		      logo:		        "https://www.biblefarm.org/BibleFarm_Facebook_Profile_Picture_tumblr.png",		      image:		        "https://biblefarm.github.io/posts-en/images/'+this_page_name+'.png",		      description:		        "Bible doers let\'s https://www.BibleFarm.org/donate & provide better nutrition for these kids. Fulfilling Mat 25:31-40 one visit at a time: The team delivers clothes, shoes & we teach these children to put all their trust in Jesus (John 1:12), share (1John 3:17), apologize (Mat. 5:24) & forgive (Mark 11:26). #biblefarm @biblefarm",		      address: {		        "@type": "PostalAddress",		        streetAddress: "Calle 132 # 777",		        addressLocality: "Posadas",		        addressRegion: "Misiones",		        postalCode: "3300",		        addressCountry: "Argentina"		      }		    },		    {		      "@context": "https://schema.org/",		      "@type": "WebPage",		      name: "Share every verse @ BiblFarm.org",		      speakable: {		        "@type": "SpeakableSpecification",		        xpath: [		          "/html/head/title",		          "/html/head/meta[@name=\'description\']/@content"		        ]		      },		      url: "https://www.biblefarm.org/"		    },		    {		      "@context": "https://schema.org",		      "@type": "SoftwareApplication",		      name: "Share every verse @ BibleFarm.org/app",		      applicationCategory: "Bible Software",		      downloadUrl: "https://www.biblefarm.org/app",		      thumbnailUrl:		        "https://www.biblefarm.org/BibleFarm_Facebook_Profile_Picture_tumblr.png",		      operatingSystem: "ALL",		      aggregateRating: {		        "@type": "AggregateRating",		        ratingValue: "5.0",		        ratingCount: "10"		      },		      offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD" }		    },				    {		      "@context": "https://schema.org",		      "@type": "DefinedTerm",		      name: "'+ref_for_this_page+'",		      description: "'+v_for_this_page+'",		      image:		        "https://biblefarm.github.io/posts-en/images/'+this_page_name+'.png",		      url: "https://team.biblefarm.org/demo/'+this_page_name+'.html"		    }		  ];		  var el = document.createElement("script");		  el.type = "application/ld+json";		  el.innerHTML = JSON.stringify(jsonData);		  document.head.appendChild(el);		})();						</script>		<link href="../_css/_o_v_0_6_14_perfect-scrollbar.min.css" rel="stylesheet" type="text/css">').prependTo("head");

  ///////////////////////////////////////////////////
  /// END inject everything in the head  ///////
  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////
  /// BEGIN inject everything in the body  ///////
  ///////////////////////////////////////////////////

	$('  <!-- -------------------------------------- -->  <!-- BEGIN post sharing modal ------------- -->  <!-- -------------------------------------- -->    <!-- BEGIN wrap_top    <div class="wrap_top_post_sharing_modal bgc-0001">      <span class="title_verse_sharing">your post is ready</span>    </div>   -->    <!-- BEGIN wrap_options_bar -->    <div class="wrap_options_bar">      <!-- wait_to_load_options-->      <div class="wait_to_load_options bgc-0001">        loading in <span class="countdown_loading_addthis_options">5</span> <span id="btn_countdown_start">Start countdown</span>      </div><!-- BEGIN options_bar -->      <div class="options_bar">        <!-- edit button-->        <span class="option_menu bgc-0001">team</span> <!-- share button-->         <span class="option_share bgc-0001">share</span> <!-- send button-->         <span class="option_send bgc-0001">send</span> <!-- save button-->         <span class="option_save bgc-0001">save</span> <!-- copy button-->         <span class="option_link bgc-0001"><a class="bf_links" target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YCUGUZHYX5Y2Q&source=url"><span class="">donate</span></a></span><!-- print button--><span class="option_print show_pure_chat">contact</span>      </div><!-- END options_bar -->    </div><!-- END wrap_options_bar -->    <!-- BEGIN wrap_show_options -->    <div class="wrap_show_options">      <div class="show_menu_options">        <div class="std_title_44_center">          <a class="bf_links" href="https://www.biblefarm.org#app"><span class="">get this app</span></a>        </div>        <div class="std_title_44_center">          <a class="bf_links" target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YCUGUZHYX5Y2Q&source=url"><span class="">donate via paypal</span></a>        </div>        <div class="std_title_44_center">          <span class="bf_links show_pure_chat">contact us</span>        </div>      </div>    </div>    <div class="wrap_show_options">      <div class="show_sharing_options">        <div class="addthis_inline_share_toolbox_ascx addthis_align"></div>      </div>    </div>    <div class="wrap_show_options">      <div class="show_sending_options">        <div class="addthis_inline_share_toolbox_z8ga addthis_align"></div>      </div>    </div>    <div class="wrap_show_options">      <div class="show_saving_options">        <div class="addthis_inline_share_toolbox_gotw addthis_align"></div>      </div>    </div><!-- END wrap_show_options -->').prependTo("body");

// image is static in the pages here in the middle

  $('<!-- BEGIN wrap_done_with_ready_post_next -->    <div class="wrap_done_with_ready_post_next bgc-0001">      <div class="done_with_ready_post_next">        <div class="done_with_ready_post_next_item_left bf_links" id="go_back_to_change_bg"><a class="bf_links" href="https://www.biblefarm.org">BibleFarm.org</a></div>        <div class="done_with_ready_post_next_item_center" id="">          <a class="bf_links" target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YCUGUZHYX5Y2Q&source=url" id="be_a_part_now">donate now</a>        </div>        <div class="done_with_ready_post_next_item_right bf_links show_pure_chat" id="all_done_sharing_post">get your own</div>      </div>    </div><!-- END wrap_done_with_ready_post_next -->    <!-- BEGIN wrap_ctr_post_sharing_modal -->    <div class="wrap_ctr_post_sharing_modal bgc-0001"></div><!-- END wrap_ctr_post_sharing_modal -->    <!-- BEGIN wrap_sponsors_show_time -->    <div class="wrap_sponsors_show_time bgc-0001">      <div class="sponsors_show_time">        <div class="sponsors_show_time_item_left" id="">          <a class="bf_links" href="https://www.biblefarm.org#intro" id="meet_the_team">meet the team</a>        </div>        <div class="sponsors_show_time_item_center">          <span class="countdown_while_showing_sponsors">10</span> <span id="btn_countdown_start">Start countdown</span>        </div>        <div class="sponsors_show_time_item_right" id="">          <a class="bf_links" target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YCUGUZHYX5Y2Q&source=url" id="be_a_part_now">be a part now</a>        </div>      </div>    </div><!-- END wrap_sponsors_show_time -->    <div class="wrap_sponsor_ads">      <!-- inject team members here -->    </div>    <!-- END wrap_sponsor_ads -->    <div class="paypal_button_donate_now">      <div class="wrap_the_paypal_button">        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">          <input name="cmd" type="hidden" value="_s-xclick"> <input name="hosted_button_id" type="hidden" value="YCUGUZHYX5Y2Q"> <input alt="Donate with PayPal button" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" title="PayPal - The safer, easier way to pay online!" type="image"> <img alt="" border="0" height="1" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1">        </form>      </div>    </div>  <!-- -------------------------------------- -->  <!-- END post sharing modal   ------------- -->  <!-- -------------------------------------- --><div class="wrap_bot bgc-0001"><!-- BEGIN made_with_love --><a class="bf_links" href="https://www.biblefarm.org"><span class="made_with_love bf_links">made with <span class="love">❤</span> at BibleFarm.org</span></a><!-- END made_with_love --></div><!-- BEGIN post_creation JS  dependencies --><!-- addthis for newly created page in firebase--><script src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-53f4628f4f316c50" type="text/javascript"></script>	<!-- perfect scrollbar js -->	<script src="../_js/_o_v_0_6_14_perfect-scrollbar.jquery.min.js" type="text/javascript">	</script>  	 <!-- END post_creation javascript dependencies -->').appendTo("body");

  ///////////////////////////////////////////////////
  /// END inject everything in the body  ///////
  ///////////////////////////////////////////////////




// add to the title tag

$("title").text(document.title + " - BibleFarm.org");









	///////////////////////////////////////////////////
	/// BEGIN wrap_sponsor_ads perfectScrollbar ///////
	///////////////////////////////////////////////////
	$('.wrap_sponsor_ads').perfectScrollbar({
		wheelPropagation: true,
		scrollXMarginOffset: 2,
		suppressScrollX: true
	});
	///////////////////////////////////////////////////
	/// END wrap_sponsor_ads perfectScrollbar ///////
	///////////////////////////////////////////////////
	///////////////////////////////////////////////////
	/// BEGIN inject team members ///////
	///////////////////////////////////////////////////
	$(".wrap_sponsor_ads").html("<div class='sponsor_ads'><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Lorenzo_Fragala.png'></div><div class='sponsor_item_desc'>Lorenzo Fragalá<br>Real Estate Developer<br>Azzurra Development Corp<br><a class='bf_links' href='http://azzurracorp.com/' target='_blank'>azzurracorp.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Mindy_Goldstein.png'></div><div class='sponsor_item_desc'>Mindy Viviers<br>Registered Nurse, BSN<br>Charge Nurse - Intake<br><a class='bf_links' href='http://www.fb.com/mindy.viviers.1' target='_blank'>fb.com/mindy.viviers.1</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Artur_Ewelina_Kawa.png'></div><div class='sponsor_item_desc'>Artur & Ewelina Kawa<br>Prayer Support<br>BibleFarm.org<br><a class='bf_links' href='https://www.facebook.com/ewelina.kawa.351' target='_blank'>fb.com/ewelina.kawa.351</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Davis_Knight.png'></div><div class='sponsor_item_desc'>Davis Knight<br>Healthy Products Specialist<br>Apple A Day Co-Op<br><a class='bf_links' href='https://appleadayco-op.com/' target='_blank'>appleadayco-op.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Sandy_Beach.png'></div><div class='sponsor_item_desc'>Sandy Beach<br>Prayer Support<br>BibleFarm.org<br><a class='bf_links' href='https://www.facebook.com/sandy.almquist1' target='_blank'>fb.com/sandy.almquist1</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/MPD.png'></div><div class='sponsor_item_desc'>Antonio Porter<br>MPD<br>Mounds Pastoring Devotionals<br><a class='bf_links' href='https://www.facebook.com/MoundsPastoringDevotionals/' target='_blank'>Click to Visit Facebook Page</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Nicolle_Marie.png'></div><div class='sponsor_item_desc'>Nicolle Marie<br>Prayer Support<br>BibleFarm.org<br><a class='bf_links' href='https://www.facebook.com/nicolle612' target='_blank'>fb.com/nicolle612</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Mike_Newhook.png'></div><div class='sponsor_item_desc'>Mike Newhook<br>Organic Aquaponic Developer<br>Highland Aquaponics<br><a class='bf_links' href='http://highlandaquaponics.com/' target='_blank'>highlandaquaponics.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Jan_Deborah_Imperato.png'></div><div class='sponsor_item_desc'>Jan Deborah Imperato<br>Luxury & Waterfront Realtor<br>Palm Beach Villas Real Estate<br><a class='bf_links' href='https://www.palmbeachvillas.net/' target='_blank'>palmbeachvillas.net</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Angela_Lucambio.png'></div><div class='sponsor_item_desc'>Angela Lucambio<br>Registered Nurse<br>Volunteer & Caretaker<br><a class='bf_links' href='https://www.facebook.com/angela.lucambio' target='_blank'>fb.com/angela.lucambio</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Ignacio_Di_Paola.png'></div><div class='sponsor_item_desc'>Ignacio Di Paola<br>Marketing Professional<br>NoLines Advertising Agency<br><a class='bf_links' href='http://nolines.com.ar/' target='_blank'>nolines.com.ar</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Dennis_Hamilton.png'></div><div class='sponsor_item_desc'>Dennis Hamilton<br>Organic Hydroponic Developer<br>Greenfund, LLC<br><a class='bf_links' href='https://greenfundsolutions.com/' target='_blank'>greenfundsolutions.com</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Samuel_Sardar.png'></div><div class='sponsor_item_desc'>Samuel Sardar<br>Prayer Support<br>BibleFarm.org<br><a class='bf_links' href='https://www.facebook.com/Samuel.sardar.one' target='_blank'>fb.com/Samuel.sardar.one</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Adrian_Varela.png'></div><div class='sponsor_item_desc'>Adrian Varela<br>Prayer Support<br>BibleFarm.org<br><a class='bf_links' href='https://www.facebook.com/adrian.varela.35' target='_blank'>fb.com/adrian.varela.35</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Jose_Eugenio_Martinez.png'></div><div class='sponsor_item_desc'>José Eugenio Martínez<br>Field Visitations Volunteer<br>BibleFarm.org<br><a class='bf_links' href='https://biblefarm.org/' target='_blank'>biblefarm.org</a></div></div><div class='sponsor_item'><div class='sponsor_item_image'><img src='https://www.biblefarm.org/sponsor_images/Alex_Smuglovsky.png'></div><div class='sponsor_item_desc'>Alex Smuglovsky<br>Field Visitations Volunteer<br>BibleFarm.org<br><a class='bf_links' href='https://biblefarm.org/' target='_blank'>biblefarm.org</a></div></div></div>");
	///////////////////////////////////////////////////
	/// BEGIN inject team members ///////
	///////////////////////////////////////////////////
	///////////////////////////////////////////////////
	/// BEGIN countdown_loading_addthis_options ///////
	///////////////////////////////////////////////////

	var timer1,
		clock = 5;
	$(startup);

	function startup() {
		$(start).trigger({
			type: "click",
			which: 1
		});
	}

	function start() {
		clock = 5;
		$(".countdown_loading_addthis_options").html("" + clock + "");
		timer1 = setInterval(countdown, 1000);
		$("#btnstart").prop("disabled", true);
	}

	function countdown() {
		clock -= 1;
		$(".countdown_loading_addthis_options").html("" + clock + "");
		if (clock == 0) {
			clearInterval(timer1);
			$("#btn_countdown_start").prop("disabled", false);
			$(".wait_to_load_options").hide("slow");
			$(".wrap_sponsor_ads").hide("slow");
		}
	}

	///////////////////////////////////////////////////
	/// END countdown_loading_addthis_options ///////
	///////////////////////////////////////////////////
	// BEGIN options toggle
	// lands with show_sharing_options displayed
	$(".show_sharing_options").show();

	$(".options_bar").on("click", ".option_menu", function(e) {
		// $(".show_sharing_options, .show_sending_options, .show_saving_options").hide("slow");
    // $(".show_menu_options").show("slow");
    $(".wrap_sponsor_ads").toggle("slow");
	});
	$(".options_bar").on("click", ".option_share", function(e) {
		$(".show_menu_options, .show_sending_options, .show_saving_options").hide("slow");
    $(".wrap_sponsor_ads").hide("slow");
		$(".show_sharing_options").show("slow");
	});
	$(".options_bar").on("click", ".option_send", function(e) {
		$(".show_menu_options, .show_sharing_options, .show_saving_options").hide("slow");
        $(".wrap_sponsor_ads").hide("slow");
		$(".show_sending_options").show("slow");
	});
	$(".options_bar").on("click", ".option_save", function(e) {
		$(".show_menu_options, .show_sharing_options, .show_sending_options").hide("slow");
        $(".wrap_sponsor_ads").hide("slow");
		$(".show_saving_options").show("slow");
	});
	$(".options_bar").on("click", ".option_link", function(e) {
		$(".show_menu_options, .show_sending_options, .show_saving_options").hide("slow");
        $(".wrap_sponsor_ads").hide("slow");
		$(".show_sharing_options").show("slow");
	});
	$(".options_bar").on("click", ".option_print", function(e) {
		$(".show_menu_options, .show_sending_options, .show_saving_options").hide("slow");
        $(".wrap_sponsor_ads").hide("slow");
		$(".show_sharing_options").show("slow");
	});
	// END options toggle
	// BEGIN done_with_ready_post_close_tab
	$("#done_with_ready_post_close_tab").on("click", function(e) {
			window.history.back();
	});
	// END done_with_ready_post_close_tab
	////////////////////////////////////////////////////
	// BEGIN PureChat hack
	////////////////////////////////////////////////////
	$(document).ready(function() {
		// initial hide
		var stopWaitingForPurechat = setInterval(function() {
			if ($("body").find('.purechat-widget-title-link:contains("Contact us")').length > 0) {
				console.log("found PureChat");
				// hide it
				$("#PureChatWidget").attr("style", "z-index: -1 !important");
				clearInterval(stopWaitingForPurechat);
			}
		}, 1000);
		////////////////////
		// show when needed
		$("#show_pure_chat, .show_pure_chat").on("click", function() {
			// show it
			$("#PureChatWidget").attr("style", "z-index: 2147483646 !important");
			// hack colors
			// header
			$("#PureChatWidget").find(".purechat-widget-header").attr("style", "background-color: #0c1400 !important");
			// content-wrapper
			$("#PureChatWidget").find(".purechat-content-wrapper").attr("style", "background-color: #172800 !important");
			// purechat-card
			$("#PureChatWidget").find(".purechat-card").attr("style", "background-color: #203700 !important");
			// purechat-btn
			$("#PureChatWidget").find(".purechat-btn").attr("style", "color: #d5ad6d !important");
			// purechat-widget-title-link
			$("#PureChatWidget").find(".purechat-widget-title-link").attr("style", "font-size: 20px !important;padding-left: 8px !important;font-family: PT_Sans-Narrow-Web-Regular !important;color: #d5ad6d !important;text-shadow: 2px 2px 1px black !important");
			// keep widget expanded
			$("#PureChatWidget").removeClass("purechat-widget-super-collapsed");
			$("#PureChatWidget").addClass("purechat-widget-collapsed");
			console.log("PureChat will keep widget expanded");
			setTimeout(function() {
				$("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 10px #b3ff00 !important");
			}, 1000);
			setTimeout(function() {
				$("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 50px #b3ff00 !important");
			}, 1500);
			setTimeout(function() {
				$("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 10px #b3ff00 !important");
			}, 2000);
			setTimeout(function() {
				$("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 50px #b3ff00 !important");
			}, 2500);
			setTimeout(function() {
				$("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 10px #b3ff00 !important");
			}, 3000);
			setTimeout(function() {
				$("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 50px #b3ff00 !important");
			}, 3500);
			setTimeout(function() {
				$("body").find("#PureChatWidget.purechat.purechat-widget-collapsed").attr("style", "box-shadow: 0px 0px 10px #b3ff00 !important");
			}, 4000);

// create dynamically the element
$("body").append('<div class="opacity_cover"></div>');
console.log("create dynamically opacity_cover element");
      // darken the page to emphasize chat
      $(".opacity_cover").show();



		});


    // hide when click outside
    $(".opacity_cover").click(function() {
      // hide it
      $("#PureChatWidget").attr("style", "z-index: -1 !important");
      // bring back to normal
      $(".opacity_cover").remopve();
      console.log("removed dynamically opacity_cover element");
    });



		// hide when click outside
		$(window).click(function() {
			// hide it
			$("#PureChatWidget").attr("style", "z-index: -1 !important");
		});
		// stopPropagation when clicking to show the widget and inside the widget itself
		$("#show_pure_chat, #PureChatWidget").click(function(event) {
			event.stopPropagation();
			console.log("PureChat hide when click outside event.stopPropagation");
		});
	});
	////////////////////////////////////////////////////
	// END PureChat hack
	////////////////////////////////////////////////////



	////////////////////////////////////////////////////
	// BEGIN PureChat load
	////////////////////////////////////////////////////
	window.purechatApi = {
		l: [],
		t: [],
		on: function() {
			this.l.push(arguments);
		}
	};
	(function() {
		var done = false;
		var script = document.createElement('script');
		script.async = true;
		script.type = 'text/javascript';
		script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript';
		document.getElementsByTagName('HEAD').item(0).appendChild(script);
		script.onreadystatechange = script.onload = function(e) {
			if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
				var w = new PCWidget({
					c: '7f1570e3-a978-430a-82a3-fccff55a8707',
					f: true
				});
				done = true;
			}
		};
	})();
	////////////////////////////////////////////////////
	// END PureChat load
	////////////////////////////////////////////////////





  $("#go_back_to_change_bg").on('click', function(e) {
  $(".wrap_post_sharing_modal").hide();
  $(".wrap_sharing_modal_browsing_mode").show("slow");
  });

  $("#all_done_sharing_post").on('click', function(e) {
  $(".wrap_post_sharing_modal").hide();
  });



  // addthis shadow hack to SHARING AND FOLLOW
  setTimeout(function() {
    $("body")
      .find(".at-icon-wrapper")
      .css("-webkit-filter", "drop-shadow( 3px 3px 2px rgba(0, 0, 0, 3.8))")
      .css("filter", "drop-shadow( 3px 3px 2px rgba(0, 0, 0, 3.8))");
    $("body")
      .find(".at-icon-wrapper")
      .css("border-radius", "10px");
    console.log("/////// applied addthis shadow SHARING hack @ + 1000");
  }, 6000);
  // addthis shadow hack to SHARING AND FOLLOW
  setTimeout(function() {
    $("body")
      .find(".at-icon-wrapper")
      .css("-webkit-filter", "drop-shadow( 3px 3px 2px rgba(0, 0, 0, 3.8))")
      .css("filter", "drop-shadow( 3px 3px 2px rgba(0, 0, 0, 3.8))");
    $("body")
      .find(".at-icon-wrapper")
      .css("border-radius", "70px");
    console.log("/////// applied addthis shadow SHARING hack @ + 1000");
  }, 7000);

  // addthis shadow hack to SHARING AND FOLLOW
  setTimeout(function() {
    $("body")
      .find(".at-icon-wrapper")
      .css("-webkit-filter", "drop-shadow( 3px 3px 2px rgba(0, 0, 0, 3.8))")
      .css("filter", "drop-shadow( 3px 3px 2px rgba(0, 0, 0, 3.8))");
    $("body")
      .find(".at-icon-wrapper")
      .css("border-radius", "4px");
    console.log("/////// applied addthis shadow SHARING hack @ + 1000");
  }, 8000);


  setTimeout(function() {
    $(".v").fadeOut("slow");
  }, 7000);


});
///////////////////////////////////////////////////
/// END JS for ready post modal  ///////
///////////////////////////////////////////////////
