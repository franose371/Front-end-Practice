document.addEventListener("DOMContentLoaded", function() {
	function B() {
		option.comment_open && location.href.match(/[?&]?c_open=1/);
		if (option.bookmark_disp) {
			var b = novel ? "https://www.pixiv.net/novel/bookmark_detail.php?id=" + dlmat[1] : "https://www.pixiv.net/bookmark_detail.php?illust_id=" + dlmat[1];
			$.get(b, function(e) {
				(e = e.match(/<a[^<>]+?bookmark-count _ui-tooltip.+?<\/a>/)) && $(".meta:first").append('&nbsp;<a href="' + b + '">' + e + "</a>")
			})
		}
		x(".tabs:first", location.href, 1);
		$("#pxvdwn_menu").css({
			position: "absolute",
			right: 12,
			bottom: 7,
			"margin-right": -6,
			"margin-top": -4
		});
		$("#pxvdwn_menu").wrap("<div id='ilustpage-wrap' style='margin-right:10px;display:inline-block'></div>");
		y();
		"true" == update && $(window).load(function() {
			$("body").append('<span id="update_popup"><img title="\u65b0\u3057\u3044\u6a5f\u80fd\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3057\u305f" src="' + chrome.extension.getURL("update_icon.png") + '"></span>');
			$("#update_popup").css({
				left: $(".pxvdwn_l:first").offset().left + 85,
				top: $(".pxvdwn_l:first").offset().top -
					20
			});
			$("#update_popup").hide().fadeIn(500);
			chrome.extension.sendRequest({
				mode: "up"
			});
			setTimeout(function() {
				$("#update_popup").fadeOut(500)
			}, 1E4)
		})
	}

	function x(b, e, c) {
		$(b).append('<ul id="pxvdwn_menu">\x3c!--<li><a class="pxvdwn_ex" href="javascript:void(0);" title="Pixiv Downloader EX\u306b\u3064\u3044\u3066"></a></li>--\x3e<li><a  id="pxvdwn_r" class="pxvdwn_r" href="javascript:void(0);" title="setting" target="_blank"><div class="pxvdwn_setting_icon"></div></a></li><li><a id="pxvdwn_l" class="pxvdwn_l" href="javascript:void(0);"><div class="pxvdwn_download_icon"></div></li></ul>');
		$(".pxvdwn_ex:first").click(function() {
			q()
		});
		$(".pxvdwn_r:first").bind("click", function() {
			window.open(chrome.extension.getURL("options.html"), "", "width=700,height=750,left=" + (window.screen.width - 700) / 2 + ",top=" + (window.screen.height - 750 - 100) / 2)
		});
		if (1 == c)
			if (html.match(/<li class=\"current\">\u65e5\u672c\u8a9e<\/li>/)) $(".pxvdwn_l:first").bind("click", function() {
				z(html, location.href)
			});
			else {
				var g = location.href.replace(/[&?]lang=.*?(&|$)/, "") + "&lang=ja";
				$(".pxvdwn_l:first").bind("click", function() {
					A(g)
				})
			}
		else $(".pxvdwn_l:first").bind("click",
			function() {
				A(e + "&lang=ja")
			});
		option.iine_dl && $("._nice-button:first").click(function() {
			$(this).hasClass("rated") || $("#pxvdwn_l").click()
		})
	}

	function A(b) {
		v(!1);
		$.ajax({
			url: b,
			cache: !1,
			success: function(e) {
				z(e, b);
				v(!0)
			},
			error: function(b, c, g) {
				alert("\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u3057\u3070\u3089\u304f\u3057\u3066\u304b\u3089\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002");
				v(!0)
			}
		})
	}

	function v(b) {
		var e = $(".pxvdwn_l:first");
		b ? e.attr("style", "") : e.css({
			"pointer-events": "none",
			opacity: .7
		})
	}

	function z(b, e) {
		C(option.filename, b, e, function(c) {
			if ("undefined" != typeof c && (!option.dl_alert || -1 == gdata.indexOf("," + dlmat[1] + ",") || confirm("\u65e2\u306b\u4fdd\u5b58\u6e08\u307f\u306e\u753b\u50cf\u3067\u3059\u3002\u518d\u5ea6\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3092\u884c\u3044\u307e\u3059\u304b\uff1f"))) {
				if (option.server_dl) {
					option.debug && console.log("ServerDL");
					if ("ugoira" === c[0].type) {
						q();
						return
					}
					var b = "";
					if (novel) b += '<form method="post" action="http://datasvc2.jpn.org/chrome/pd/pd_novel.php' +
						c[0].result + "&version=" + encodeURIComponent(version) + '" target="pxvdwn_novel" name="pddwn" id="pddwn"><input type="hidden" name="c" value="' + c[0].text + '"></form>', b = b + '<iframe src="about:blank" width="10" height="10" style="opacity:0;" name="pxvdwn_novel"></iframe>' + ('<iframe src="http://datasvc2.jpn.org/chrome/pd/pd_novel.php' + c[0].result + "&m=1&version=" + encodeURIComponent(version) + '" width="10" height="10" style="opacity:0;" name="pxvdwn_novel"></iframe>'), $("#_pxvdwnfr").html(b), $("#pddwn").submit();
					else {
						for (a = 0; a < c.length; a++) option.big_img && (c[a].result += "&o=1"), b += '<iframe src="http://datasvc2.jpn.org/chrome/pd/pd.php' + c[a].result + "&version=" + encodeURIComponent(version) + '" width="10" height="10" style="opacity:0;"></iframe>';
						$("#_pxvdwnfr").html(b)
					}
				} else {
					var e = function(c, b) {
							var a = new Blob([c]),
								m = URL.createObjectURL(a);
							a = document.createElement("a");
							a.download = b;
							a.href = m;
							m = document.createEvent("MouseEvent");
							m.initEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
							a.dispatchEvent(m)
						},
						d =
						function(c, a, b, m) {
							var d = new XMLHttpRequest;
							d.open("GET", c, !0);
							d.responseType = "arraybuffer";
							d.timeout = 3E5;
							d.addEventListener("loadend", function() {
								200 === d.status ? (option.debug && console.log("byteTransfer:" + c), "function" === typeof a && a(d.response, m)) : (option.debug && console.log("ERROR(" + d.status + " " + d.statusText + "):" + c), "function" === typeof b && b(m))
							});
							d.send()
						},
						n = function() {
							alert("\u4e00\u90e8\u306e\u753b\u50cf\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u518d\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044");
							l()
						};
					option.debug && console.log("ClientDL");
					if (novel) d(c[0].b + "." + c[0].t, function(a, b) {
						e(a, c[0].n + "\u3000\u8868\u7d19." + c[0].t)
					}, n, a), e(c[0].text, c[0].n + ".txt");
					else
						for (var p = 0, a = 0; a < c.length; a++) {
							if ("ugoira" === c[a].type) {
								q();
								return
							}
							if (c[a].m) {
								var k = function(a) {
									p++ < c.length - 1 ? l("\u30a4\u30e9\u30b9\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u3044\u307e\u3059\t" + Math.round(p / c.length * 100) + "%", !0) : (l("\u30a4\u30e9\u30b9\u30c8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f", !0), setTimeout(function() {
										l()
									}, 3E3))
								};
								l("\u30a4\u30e9\u30b9\u30c8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3092\u958b\u59cb\u3057\u307e\u3057\u305f", !0);
								c[a].newIllustFlag ? option.big_img ? d(c[a].s + "/img-original/img/" + c[a].f + "_" + c[a].m + "." + c[a].fileType, function(a, b) {
									e(a, c[b].n + "." + c[b].fileType);
									k(b)
								}, function(a) {
									d(c[a].s + "/c/1200x1200/img-master/img/" + c[a].f + "_" + c[a].m + "_master1200.jpg", function(a, b) {
										e(a, c[b].n + ".jpg");
										k(b)
									}, n, a)
								}, a) : d(c[a].s + "/c/1200x1200/img-master/img/" + c[a].f + "_" + c[a].m + "_master1200.jpg",
									function(a, b) {
										e(a, c[b].n + ".jpg");
										k(b)
									}, n, a) : option.big_img ? d(c[a].s + "/img" + c[a].s2 + "/img/" + c[a].f + "_big_" + c[a].m + "." + c[a].t, function(a, b) {
									e(a, c[b].n + "." + c[b].t);
									k(b)
								}, function(a) {
									d(c[a].s + "/img" + c[a].s2 + "/img/" + c[a].f + "_" + c[a].m + "." + c[a].t, function(a, b) {
										e(a, c[b].n + "." + c[b].t);
										k(b)
									}, n, a)
								}, a) : d(c[a].s + "/img" + c[a].s2 + "/img/" + c[a].f + "_" + c[a].m + "." + c[a].t, function(a, b) {
									e(a, c[b].n + "." + c[b].t);
									k(b)
								}, n, a)
							} else {
								var r = setTimeout(function() {
									l("\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u306e\u5fdc\u7b54\u3092\u5f85\u3063\u3066\u3044\u307e\u3059\u2026", !0)
								}, 3E3);
								c[a].newIllustFlag ? d(c[a].s + "/img-original/img/" + c[a].f + "_p0." + c[a].fileType, function(a, b) {
									e(a, c[b].n + "." + c[b].fileType);
									clearTimeout(r);
									l()
								}, n, a) : d(c[a].s + "/img" + c[a].s2 + "/img/" + c[a].f + "." + c[a].t, function(a, b) {
									e(a, c[b].n + "." + c[b].t);
									clearTimeout(r);
									l()
								}, n, a)
							}
						}
				} - 1 == gdata.indexOf("," + dlmat[1] + ",") && option.dl_history && (chrome.extension.sendRequest({
					mode: "id",
					data: dlmat[1] + ","
				}), gdata += dlmat[1] + ",", y())
			}
		})
	}

	function y() {
		option.dl_message && -1 != gdata.indexOf("," + dlmat[1] + ",") && runFlag && ($(".tabs:first").append('\u3000\u3000<span id="_pxvlabel"><font color="FF0#"><b>\u25a0\u65e2\u306b\u4fdd\u5b58\u6e08\u307f</b></font><a href="javascript:void(0);" id="_pxvseal">[\u00d7]</a></span>'),
			$("#_pxvseal").bind("click", function() {
				chrome.extension.sendRequest({
					mode: "wr",
					data: dlmat[1]
				});
				gdata = gdata.replace(new RegExp("," + dlmat[1] + ","), ",");
				$("#_pxvlabel").remove()
			}))
	}

	function q() {
		$("body").append('<iframe id="pxvdwn_ex" src="https://secure261.sakura.ne.jp/datasvc2.jpn.org/chrome/pd/html/update.html" style="width: 800px;height: 600px;position: fixed;z-index: 1000000005;top: 50%;left: 50%;background: #fff;margin-top: -300px;margin-left: -400px;box-shadow: rgba(0, 0, 0, 0.65098) 0px 0px 10px 3px;   -webkit-box-shadow: rgba(0, 0, 0, 0.65098) 0px 0px 10px 3px;display:none;"></iframe>');
		$("#pxvdwn_ex").fadeIn(500);
		$("body").append('<div id="pxvdwn_cls" style="width:100%;height:100%;position:fixed;top:0px;left:0px;z-index: 1000000004"></div>');
		$("#pxvdwn_cls").css({
			width: window.innerWidth,
			height: window.innerHeight
		});
		$("#pxvdwn_cls").click(function() {
			$("#pxvdwn_ex").fadeOut(500, function() {
				$("#pxvdwn_cls").remove()
			})
		})
	}

	function l(b, e) {
		b ? (0 === $("#pxvdwn_making").size() && ($("body").append('<div id="pxvdwn_making" style="display:none;position: fixed;top: 0px;left: 0px;width: 100%;height: 30px;background: rgba(0,0,0,0.5);color: #fff;z-index: 9999;text-align: center;padding-top: 5px;padding-bottom: 5px;font-size: 15px;"><span id="pxvdwn_loader"></span><span id="pxvdwn_message" style="display: inline-block;margin-top:5px;"></span></div>'),
			$("#pxvdwn_making").slideDown(300)), $("#pxvdwn_message").html(b), e ? $("#pxvdwn_loader").show() : $("#pxvdwn_loader").hide()) : 0 < $("#pxvdwn_making").size() && $("#pxvdwn_making").slideUp(300, function() {
			$(this).remove()
		})
	}

	function C(b, e, c, g) {
		function l(a, b, c, d) {
			function e(a, b) {
				try {
					f = m("(<li>|.| |:)([0-9]{1,})", a, 2);
					if (f[2].match(/\d{4}/)) {
						var c = f[0],
							d = f[1];
						f[0] = f[2];
						f[1] = c;
						f[2] = d
					}
					return f[b]
				} catch (G) {
					return ""
				}
			}

			function m(a, b, c) {
				var d = [];
				a = new RegExp(a, "gi");
				var e = 0;
				do {
					var f = a.exec(b);
					0 != a.lastIndex && (d[e++] =
						f[c])
				} while (0 != a.lastIndex);
				return d
			}
			var f = [];
			switch (a) {
				case 0:
					return f = b.match(/(<\/ul>|<\/div>)<h1 class="title">([\S\s]*?)<\/h1>/i), f[2];
				case 1:
					return f = b.match(/<ul class=\"tabs\"><li><a href=\"\/member.php\?id=(\d+?)\"/i), f[1];
				case 2:
					try {
						return f = b.match(/<h1 class=\"user\">(.*?)<\/h1>/i), f[1]
					} catch (E) {
						return f = b.match(/class=\"user-name\"\s*?title=\"([^"]+?)\">/i), f[1]
					}
				case 3:
					try {
						return f = b.match(/<h1 class=\"user\">(.*?)<\/h1>/i), f[1]
					} catch (E) {
						return f = b.match(/class=\"user-name\"\s*?title=\"([^"]+?)\">/i),
							f[1]
					}
				case 4:
					f = b.match(/<section class=\"work-tags\">([\S\s]+?)template-work-tags/i)[1];
					f = m('<a href="(/search.php?|/novel/tags.php?).*?">(.*?)</a>', f, 2);
					a = [];
					for (b = 0; b < f.length; b++) a += f[b] + " ";
					return a;
				case 5:
					f = b.match(/<section class=\"work-tags\">([\S\s]+?)template-work-tags/i)[1];
					f = m('<a href="(/search.php?|/novel/tags.php?).*?">(.*?)</a>', f, 2);
					a = [];
					for (b = 0; b < f.length; b++) 10 > f[b].length && (a += f[b] + " ");
					return a;
				case 6:
					if (novel) return "\u5c0f\u8aac";
					f = m('<ul class="tools">(.*)$', d[1], 1);
					a = "";
					f[0] &&
						(a = f[0], a = a.replace(/&nbsp;/gi, " "), a = a.replace(/\u3000/gi, ""), a = a.replace(/<li>/gi, ""), a = a.replace(/<\/li>/gi, " "), a = a.replace(/\s+$/, ""));
					return a;
				case 7:
					return (f = b.match(/<nav>[\s\S]+?<a href=\"\/stacc\/([^\"]+?)\"/i)) ? f[1] : "";
				case 8:
					return f = novel ? c.match(/show\.php\?id=(\d+)/i) : c.match(/illust_id=([0-9]{1,})/i), f[1];
				case 9:
					return e(d[1], 0);
				case 10:
					return e(d[1], 1);
				case 11:
					return e(d[1], 2);
				case 12:
					return e(d[1], 3);
				case 13:
					return e(d[1], 4);
				case 14:
					return myD = new Date, a = myD.getYear(), 2E3 > a ? a + 1900 :
						a;
				case 15:
					return myD = new Date, myD.getMonth() + 1;
				case 16:
					return myD = new Date, myD.getDate();
				case 17:
					return myD = new Date, myD.getHours();
				case 18:
					return myD = new Date, myD.getMinutes();
				case 19:
					return myD = new Date, myD.getSeconds();
				case 20:
					return myD = new Date, myTbl = "\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f".split(""), myTbl[myD.getDay()];
				case 21:
					return p[1] ? p[1] : ""
			}
		}
		var d;
		var n = e.match(/<ul class=\"meta\">([\s\S]*?)<\/ul>/m);
		var p = [, ""];
		novel || n[1].match(/\d+?P<\/li>/) && (p = n[1].match(/(\d+?)P<\/li>/i));
		for (var a =
				"title member-id member-name memoized-name tags short-tags tools pixiv-id illust-id illust-year illust-month illust-day illust-hour illust-minute saved-year saved-month saved-day saved-hour saved-minute saved-second saved-week page-all".split(" "), k = 0; k < a.length; k++) try {
			mat = new RegExp("\\?" + a[k] + "\\?", "g"), b.match(mat) && (b = b.replace(mat, l(k, e, c, n)))
		} catch (m) {
			console.log("error skip ")
		}
		b = b.replace(/([/:?*"<>\\|']|&lt;|&gt;|&amp;|&quot;|&#039;)/g, function(a, b) {
			switch (b) {
				case "/":
					return "\uff0f";
				case ":":
					return "\uff1a";
				case "?":
					return "\uff1f";
				case "*":
					return "\uff0a";
				case '"':
					return "\u201d";
				case "<":
					return "\uff1c";
				case ">":
					return "\uff1e";
				case "\\":
					return "\uffe5";
				case "|":
					return "\uff5c";
				case "&lt;":
					return "\uff1c";
				case "&gt;":
					return "\uff1e";
				case "&amp;":
					return "&";
				case "&quot;":
					return "\u201d";
				case "'":
					return "'";
				case "&#039;":
					return "'"
			}
			return ""
		});
		b = b.replace(/\uff1fpage\uff1f/g, "?page?");
		b = b.replace(/\uff1fpage-original\uff1f/g, "?page-original?");
		b = b.replace(/\uff1f\[(.+?)\]\uff1f/g, "?[$1]?");
		if (option.debug) try {
			for (k =
				0; k < a.length; k++) console.log(l(k, e, c, n));
			console.log("complete")
		} catch (m) {
			console.log("error"), console.log(m.stack)
		}
		if (novel) {
			var r = function() {
				var a = e.match(/<textarea.*?name="novel_text".*?>([\S\s]*?)<\/textarea>/im);
				a[1] = a[1].replace(/(\r\n|\r|\n)/g, "\r\n");
				a[1] = a[1].replace(/<\/?[^>]+>/gi, "");
				a[1] = a[1].replace(/(\[newpage\]|&lt;|&gt;|&amp;|&quot;|&#039;)/g, function(a, b) {
					switch (b) {
						case "[newpage]":
							return "\r\n";
						case "&lt;":
							return "<";
						case "&gt;":
							return ">";
						case "&amp;":
							return "&";
						case "&quot;":
							return '"';
						case "'":
							return "'";
						case "&#039;":
							return "'"
					}
					return ""
				});
				var c = b.replace(/(\?page\?|\?page-original\?)/g, "").replace(/\?\[(.+?)\]\?/g, ""),
					k = [];
				k[0] = {
					b: d[1],
					n: c,
					t: d[2],
					text: a[1],
					result: "?b=" + encodeURIComponent(d[1]) + "&n=" + encodeURIComponent(c) + "&t=" + encodeURIComponent(d[2])
				};
				return k
			};
			(d = e.match(/<div class="area_title">[\S\s]*?<\/div>[\S\s]*?(https?:\/\/[\S\s]*?)_s\.([^?"'>]+)/i)) ? "function" === typeof g && g(r()): (d = e.match(/<div class="area_title">[\S\s]*?<\/div>[\S\s]*?(https?:\/\/[\S\s]*?)_master1200\.([^?"'>]+)/i),
				d[1] = d[1].replace(/\/c\/[^\/]+?\/novel-cover-master\//, "/novel-cover-original/"), chrome.extension.sendRequest({
					mode: "headerWriteFlagOn",
					headerData: [{
						name: "Referer",
						value: location.href
					}]
				}, function() {
					function a() {
						chrome.extension.sendRequest({
							mode: "headerWriteFlagOff"
						})
					}
					$.ajax({
						url: location.href.replace(/#\d+?$/, "") + "&mode=cover",
						cache: !1,
						timeout: 3E4,
						success: function(b) {
							try {
								d[1] = d[1].replace(/\.([a-zA-Z0-9]+?)(\?.+|$|#.+)/, ""), d[2] = b.match(/novel-cover-original.+?\.([a-zA-Z0-9]+?)(\"|'|\?)/)[1], a(),
									"function" === typeof g && g(r())
							} catch (D) {
								alert("\u62e1\u5f35\u5b50\u304c\u8aad\u307f\u8fbc\u3081\u307e\u305b\u3093\u3067\u3057\u305fPixiv\u304c\u4ed5\u69d8\u5909\u66f4\u3092\u3057\u305f\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"), a()
							}
						},
						error: function(b, c, d) {
							alert("\u753b\u50cf\u30c7\u30fc\u30bf\u304c\u8aad\u307f\u8fbc\u3081\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u3057\u3070\u3089\u304f\u6642\u9593\u3092\u304a\u3044\u3066\u518d\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002");
							a();
							return !1
						}
					})
				}))
		} else {
			var t = function() {
					if (p[1]) {
						for (var a = [], c = 0; c < p[1]; c++) {
							var k = "";
							b.match(/(\?page\?|\?page-original\?)/g) && (k = "&w=1");
							var g = b.replace(/(\?page\?|\?page-original\?)/g, function(a, b) {
								return "?page?" === b ? c + 1 : c
							});
							g = g.replace(/\?\[(.+?)\]\?/g, "$1");
							a[c] = {
								type: "manga",
								s: d[1],
								s2: d[2],
								f: d[3],
								t: d[4],
								n: g,
								m: "p" + c,
								result: "?s=" + encodeURIComponent(d[1]) + "&s2=" + encodeURIComponent(d[2]) + "&f=" + encodeURIComponent(d[3]) + "&t=" + encodeURIComponent(d[4]) + "&n=" + encodeURIComponent(g) + "&m=p" + c + k,
								newIllustFlag: q,
								fileType: u
							}
						}
						return a
					}
					k = e.match(/type=ugoira/) ? "ugoira" : "illust";
					g = b.replace(/(\?page\?|\?page-original\?)/g, "").replace(/\?\[(.+?)\]\?/g, "");
					a = {
						type: k
					};
					"ugoira" !== k && $.extend(a, {
						s: d[1],
						s2: d[2],
						f: d[3],
						t: d[4],
						n: g,
						result: "?s=" + encodeURIComponent(d[1]) + "&s2=" + encodeURIComponent(d[2]) + "&f=" + encodeURIComponent(d[3]) + "&t=" + encodeURIComponent(d[4]) + "&n=" + encodeURIComponent(g),
						newIllustFlag: q,
						fileType: u
					});
					g = [];
					g[0] = a;
					return g
				},
				u = "";
			if (e.match(/type=ugoira/)) "function" === typeof g && g(t());
			else {
				d = e.match(/<img.+?src=\"(http:\/\/i[0-9]{1,}\.pixiv\.net)\/img([0-9]{1,})\/img\/(.*?)_m\.([a-zA-Z]{1,})/i);
				var q = !1;
				d ? "function" === typeof g && g(t()) : (d = e.match(/<img.+?src=\"(https?:\/\/i\d*?\.p[a-z]+?\.net)\/c\/(\d+?x\d+?)\/img-master\/img\/(\d+?\/\d+?\/\d+?\/\d+?\/\d+?\/\d+?\/\d+?(-[a-zA-Z0-9]+)?)_p\d+?_master\d*?\.([a-zA-Z]{1,})/i), q = !0, chrome.extension.sendRequest({
					mode: "headerWriteFlagOn",
					headerData: [{
						name: "Referer",
						value: "https://www.pixiv.net/member_illust.php?mode=medium&illust_id=" + dlmat[1]
					}]
				}, function() {
					function a() {
						chrome.extension.sendRequest({
							mode: "headerWriteFlagOff"
						})
					}
					$.ajax({
						url: "https://www.pixiv.net/member_illust.php?mode=big&illust_id=" +
							dlmat[1],
						cache: !1,
						timeout: 3E4,
						success: function(b) {
							try {
								u = b.match(/_p0\.([A-Za-z]+)/)[1], a(), "function" === typeof g && g(t())
							} catch (D) {
								alert("\u62e1\u5f35\u5b50\u304c\u8aad\u307f\u8fbc\u3081\u307e\u305b\u3093\u3067\u3057\u305fPixiv\u304c\u4ed5\u69d8\u5909\u66f4\u3092\u3057\u305f\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"), a()
							}
						},
						error: function(b, c, d) {
							alert("\u753b\u50cf\u30c7\u30fc\u30bf\u304c\u8aad\u307f\u8fbc\u3081\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u3057\u3070\u3089\u304f\u6642\u9593\u3092\u304a\u3044\u3066\u518d\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002");
							a();
							return !1
						}
					})
				}))
			}
		}
	}

	function F() {
		$(document).on("mouseenter", "._work", function(b) {
			function e(b) {
				if (d_l - d_w_s / 2 - 1 > b.pageX || d_l + d_w < b.pageX || d_t - d_h_s / 2 > b.pageY || d_t + d_h < b.pageY) $("body").unbind("mousemove", e), $("#pxv_bigicon").unbind("click", c), $("#pxv_bigicon").remove()
			}

			function c(b) {
				var c = $(l).closest("a").attr("href"),
					d = $(l).find("img").attr("src");
				0 == $("#pxvdwn_bigimage").size() && $("body").append('<img id="pxvdwn_bigimage" src="' + d + '" />');
				$.ajax({
					url: c,
					cache: !0,
					success: function(a) {
						try {
							var b =
								a.match(/<img src=\"(http:\/\/i\d+?\.pixiv\.net\/img\d+?\/img\/.+?\/\d+?_m\.[a-z]+?)[\"\?]/)[1];
							$("#pxvdwn_bigimage").attr("src", b);
							$("#pxvdwn_bigimage").load(function() {
								$("#pxvdwn_loading").remove()
							})
						} catch (t) {
							try {
								b = a.match(/<img src=\"(https?:\/\/i\d*?\.p[a-z]+?\.net\/c\/\d+?x\d+?\/img-master\/img\/\d+?\/\d+?\/\d+?\/\d+?\/\d+?\/\d+?\/\d+?_p\d+?_master\d*?\.[a-zA-Z]{1,})/i)[1], b = b.replace(/150x150/, "600x600"), $("#pxvdwn_bigimage").attr("src", b), $("#pxvdwn_bigimage").load(function() {
									$("#pxvdwn_loading").remove()
								})
							} catch (u) {}
						}
					},
					error: function(a, b, c) {}
				});
				$img = $(l).find("img");
				max_width = window.innerWidth - 200;
				max_height = window.innerHeight - 200;
				d_w = $img.width();
				d_h = $img.height();
				d_l = $img.offset().left - document.body.scrollLeft;
				d_t = $img.offset().top - document.body.scrollTop;
				$("body").append('<div id="pxv_del"></div>');
				$("#pxv_del").show();
				$("#pxv_del").css({
					opacity: 0
				});
				$("#pxv_del").bind("click", function() {
					$("#pxvdwn_bigimage").attr("src", d);
					0 < $("#pxvdwn_loading").size() && (clearInterval(a), $("#pxvdwn_loading").remove());
					$("#pxvdwn_bigimage").is(":animated") ||
						($("#menu_container").remove(), $("#pxvdwn_bigimage").animate({
							width: d_w,
							height: d_h,
							left: d_l,
							top: d_t,
							opacity: 0
						}, 300, "swing", function() {
							$("#pxv_del").unbind();
							$("#pxv_del").remove();
							$("#pxvdwn_bigimage").remove()
						}))
				});
				$("#pxv_bigicon").remove();
				d_w / max_width > d_h / max_height ? (w = max_width, h = Math.round(w / d_w * d_h)) : (h = max_height, w = Math.round(h / d_h * d_w));
				$("body").append('<div id="pxvdwn_loading">\u8aad\u307f\u8fbc\u307f\u4e2d</div>');
				$(l).hasClass("ugoku-illust") && $("#pxvdwn_loading").html("\u3046\u3054\u304f\u30a4\u30e9\u30b9\u30c8\u306e\u30d7\u30ec\u30d3\u30e5\u30fc\u306f\u3067\u304d\u307e\u305b\u3093");
				$("#pxvdwn_loading").css({
					position: "absolute",
					"z-index": "1000000002",
					backgroundColor: "#000",
					color: "#fff",
					padding: 5,
					opacity: .7
				});
				var a = setInterval(function() {
					var a = $("#pxvdwn_bigimage").offset();
					$("#pxvdwn_loading").css({
						left: a.left,
						top: a.top
					})
				}, 1);
				$("#pxvdwn_bigimage").css({
					position: "fixed",
					left: d_l,
					top: d_t,
					"z-index": "1000000000",
					"max-height": "none",
					"max-width": "none",
					opacity: 0,
					"box-shadow": "3px 3px 10px 0px rgba(0,0,0,0.3)"
				});
				$("#pxvdwn_bigimage").animate({
					width: w,
					height: h,
					left: window.innerWidth /
						2 - w / 2,
					top: window.innerHeight / 2 - h / 2,
					opacity: 1
				}, 300, "swing", function() {
					clearInterval(a);
					var b = $(g).closest("a").attr("href"),
						c = b.replace(/^.*?illust_id=(\d+).*$/, "bookmark_add.php?type=illust&illust_id=$1");
					dlmat = b.match(/illust_id=([0-9]{1,})/i);
					null != dlmat && ($("body").append('<div id="menu_container"></div>'), $("#menu_container").css({
						position: "fixed",
						"z-index": "1000000003"
					}), x("#menu_container", b, 0), $("#menu_container").prepend('<span class="pxvpopup_menu"><a href="' + c + '" target="_blank">' + chrome.i18n.getMessage("bookmark_illust_button") +
						'</a>\u3000<a href="' + b + '">' + chrome.i18n.getMessage("jump_illust_button") + "</a></span>"), $("#menu_container").css({
						left: $("#pxvdwn_bigimage").offset().left - document.body.scrollLeft + $("#pxvdwn_bigimage").width() - $("#pxvdwn_menu").outerWidth() - 11,
						top: $("#pxvdwn_bigimage").offset().top - document.body.scrollTop - $("#pxvdwn_menu").outerHeight() - 25 - 6
					}))
				});
				b.stopPropagation();
				b.preventDefault()
			}
			if ($(this).find("img[src*='.pximg.net/c']").attr("src").match(/https?:\/\/(i\d+?\.pixiv\.net\/img\d+?\/img\/|img\d+?\.pixiv\.net\/img\/|i\d+?\.pixiv\.net\/img-inf\/img\/|i\d*?\.p[a-z]+?\.net\/c\/)/) &&
				!$("#pxv_bigicon").length) {
				$("body").append('<div id="pxv_bigicon" title="\u62e1\u5927"></div>');
				$("#pxv_bigicon").hide().fadeIn(100);
				d_w = $(b.currentTarget).outerWidth();
				d_h = $(b.currentTarget).outerHeight();
				d_w_s = d_w - $(b.currentTarget).width();
				d_h_s = d_h - $(b.currentTarget).height();
				d_l = $(b.currentTarget).offset().left;
				d_t = $(b.currentTarget).offset().top;
				$("#pxv_bigicon").css({
					left: d_l + d_w - 30,
					top: d_t
				});
				$("body").bind("mousemove", e);
				var g = b.target,
					l = b.currentTarget;
				$("#pxv_bigicon").bind("click", c)
			}
		})
	}
	novel = !1;
	location.href.match(/member_illust.php.*?[?&]?mode=manga/i) || (dlmat = location.href.match(/\/member_illust.php.*?illust_id=([0-9]{1,})/i), null == dlmat && (dlmat = location.href.match(/show.php.*?\?id=([0-9]{1,})/i), null != dlmat && (novel = !0)));
	null != dlmat ? (runFlag = !0, html = $("html").html()) : runFlag = !1;
	chrome.extension.sendRequest({
		mode: "fn"
	}, function(b) {
		b.pxvdwnDisable || (option = JSON.parse(b.option), version = b.version, update = b.update, gdata = "," + b.gdata, runFlag || (option.illust_popup && F(), option.illust_downloaded &&
			$(window).load(function() {
				downloadedStart()
			})), $("head:first").append('<link rel="stylesheet" type="text/css" href="' + chrome.extension.getURL("style.css") + '" />'), $("body").append('<span id="_pxvdwnfr"></span>'), runFlag && B())
	})
});


//bg.js
if (localStorage.data) try {
	data = JSON.parse(localStorage.data)
} catch (a) {
	window.confirm("Pixiv Downloader EX\u306e\u8a2d\u5b9a\u30c7\u30fc\u30bf\u304c\u58ca\u308c\u3066\u3044\u307e\u3059\n\u8a2d\u5b9a\u306e\u521d\u671f\u5316\u3092\u884c\u3044\u307e\u3059\u304b\uff1f") ? (alert("\u8a2d\u5b9a\u3092\u521d\u671f\u5316\u3057\u307e\u3057\u305f"), data = {}) : alert("\u521d\u671f\u5316\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u307e\u3057\u305f\n\u6b63\u5e38\u306b\u52d5\u4f5c\u3057\u306a\u3044\u5834\u5408\u306f\u518d\u8d77\u52d5\u3092\u884c\u3063\u3066\u304f\u3060\u3055\u3044")
} else {
	var data = {};
	chrome.tabs.create({
		url: "welcome.html"
	})
}
if (localStorage.favorite_filename) {
	data.filename = localStorage.favorite_filename;
	data.star = localStorage.favorite_star;
	var splitdata = localStorage.option.split(",");
	data.dl_history = splitdata[0];
	data.dl_alert = splitdata[1];
	data.dl_message = splitdata[2];
	data.comment_open = splitdata[3];
	data.bookmark_disp = splitdata[4];
	data.illust_popup = splitdata[5];
	localStorage.data = JSON.stringify(data);
	delete localStorage.favorite_filename;
	delete localStorage.favorite_star;
	delete localStorage.option
}
data.server_dl && delete data.server_dl;
var list = {
		filename: "?member-name? - ?title? (?illust-id?) ?page??[\u30da\u30fc\u30b8]?",
		star: "0",
		dl_history: !0,
		dl_alert: !0,
		dl_message: !0,
		comment_open: !1,
		bookmark_disp: !0,
		illust_popup: !0,
		big_img: !0,
		debug: !1,
		server_dl: !1,
		iine_dl: !1,
		dl_history_erase: !0
	},
	newdata = !1,
	i;
for (i in list) data.hasOwnProperty(i) || (data[i] = list[i], newdata = !0);
newdata && (localStorage.data = JSON.stringify(data), data = JSON.parse(localStorage.data), newdata = !1);
localStorage.illustid || (localStorage.illustid = "");
get_manifest(function(a) {
	localStorage.version && localStorage.version == a.version || (localStorage.version && localStorage.version.replace(/(\d+?\.\d+?\.\d+?)\.\d+/, "$1") != a.version.replace(/(\d+?\.\d+?\.\d+?)\.\d+/, "$1") && (localStorage.update = "true"), localStorage.version = a.version)
});

function get_manifest(a) {
	var b = new XMLHttpRequest;
	b.onload = function() {
		a(JSON.parse(b.responseText))
	};
	b.open("GET", "./manifest.json", !0);
	b.send(null)
}
var pxvdwnExID = "mpeoelpkgbnhobojpafdpopjkmeodpaj",
	pxvdwnDisable = !1;
chrome.extension.sendRequest(pxvdwnExID, {
	mode: "pxvdwnfree"
}, function(a) {
	a && (pxvdwnDisable = !0)
});
chrome.extension.onRequestExternal.addListener(function(a, b, c) {
	"pxvdwnex" === a.mode && (alert("Pixiv Downloader EX\u304c\u8d77\u52d5\u3055\u308c\u307e\u3057\u305f\u3002\u540c\u6642\u8d77\u52d5\u306f\u51fa\u6765\u306a\u3044\u306e\u3067Pixiv Downloader\u3092\u7121\u52b9\u306b\u3057\u3066\u4e0b\u3055\u3044"), pxvdwnDisable = !0)
});
chrome.extension.onRequest.addListener(function(a, b, c) {
	"fn" == a.mode && (pxvdwnDisable && chrome.extension.sendRequest(pxvdwnExID, {
		mode: "pxvdwnfree"
	}, function(a) {
		a || (pxvdwnDisable = !1)
	}), c({
		option: localStorage.data,
		gdata: localStorage.illustid,
		version: localStorage.version,
		update: localStorage.update,
		debug: localStorage.debug,
		pxvdwnDisable: pxvdwnDisable
	}));
	"id" == a.mode && (localStorage.illustid += a.data, data.dl_history_erase && (b = localStorage.illustid.length, 1E5 < b && (illustLengthErase = b - 1E5, illustLengthErase += 1E3,
		localStorage.illustid = localStorage.illustid.substr(illustLengthErase), localStorage.illustid = localStorage.illustid.replace(/^[^,]*?,(.+$)/, "$1"))));
	"wr" == a.mode && (localStorage.illustid || (localStorage.illustid = ""), localStorage.illustid = localStorage.illustid.replace(new RegExp("(^|,)" + a.data + ","), "$1"));
	"up" == a.mode && (localStorage.update = "false");
	"c_dl" == a.mode && (illust = a.illust, c({}));
	"reset" == a.mode && (data = list, localStorage.data = JSON.stringify(data), c({}));
	"new_load" == a.mode && (data = JSON.parse(localStorage.data),
		c({}));
	"headerWriteFlagOn" === a.mode && (headerWriteFlag = !0, headerData = a.headerData, c({}));
	"headerWriteFlagOff" === a.mode && (headerWriteFlag = !1, c({}))
});
var headerWriteFlag = !1,
	headerData = {};
chrome.webRequest.onBeforeSendHeaders.addListener(function(a) {
	if (headerWriteFlag) {
		for (var b = 0; b < a.requestHeaders.length; ++b)
			for (var c = 0; c < headerData.length; c++)
				if (a.requestHeaders[b].name === headerData[c].name) {
					a.requestHeaders[b].value = headerData[c].value;
					break
				}
		return {
			requestHeaders: a.requestHeaders
		}
	}
}, {
	urls: ["http://www.pixiv.net/*", "https://www.pixiv.net/*"]
}, ["blocking", "requestHeaders"]);