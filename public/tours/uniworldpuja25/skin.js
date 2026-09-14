// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: puja pan6.ggsk
// Generated 2025-09-30T17:13:51

function pano2vrSkin(player,base) {
	player.addVariable('vis_auto_hide_controller', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_image_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_loader', 2, true, { ignoreInState: 0  });
	player.addVariable('opt_3d_preview', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_thumbnail_menu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnail_menu_phone', 2, false, { ignoreInState: 0  });
	player.addVariable('node_cloner_hasUp', 2, true, { ignoreInState: 0  });
	player.addVariable('node_cloner_hasDown', 2, true, { ignoreInState: 0  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_desc_in_maps', 2, true, { ignoreInState: 1  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._button_auto_rotate=document.createElement('div');
		el.ggId="button_auto_rotate";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_auto_rotate.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_auto_rotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._button_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._stop_rotate_image=document.createElement('div');
		els=me._stop_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6ICAgIE0tMTk2LjEsMzcwLjRjNS44LTQuNiwxMy4xLTcuNCwyMS4xLTcuNGM3LjcsMCwxNC45LDIuNiwyMC42LDdsLTYuNCw2LjRjLTQtMi44LTguOS00LjQtMTQuMi00LjRjLTUuOCwwLTExLjEsMi0xNS4zLDUuMyAgIGMtMC42LDAuNS0xLjQsMC40LTItMC4yYy0wLjUtMC41LTMuMS0zLjUtNC00LjRDLTE5Ni45LDM3Mi0xOTYuOCwzNzEtMTk2LjEsMzcw'+
			'LjR6IE0tMjE3LjIsMzk3Yy0wLjUsMC0wLjgtMC4yLTEuMS0wLjcgICBjLTAuMy0wLjUtMC4yLTEsMC4xLTEuM2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZjMC40LDAsMC43LDAuMiwxLDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjMgICBjLTAuMywwLjUtMC42LDAuNy0xLjEsMC43aC03LjZoLTAuNmMwLDUuMiwxLjcsMTAuMSw0LjUsMTQuMWwtNi40LDYuNGMtNC40LTUuNy03LTEyLjgtNy4xLTIwLjVoLTAuNUgtMjE3LjJ6IE0tMjA3LjIsNDMyLjMgICBjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LT'+
			'Y2YzAuMy0wLjMsMC43LTAuNCwxLjEtMC40czAuOCwwLjEsMS4xLDAuNGwxLjcsMS43ICAgYzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjZDLTIwNi40LDQzMi4yLTIwNi44LDQzMi4zLTIwNy4yLDQzMi4zeiBNLTE1My45LDQyMy4zYy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40ICAgYy03LjcsMC0xNC44LTIuNi0yMC41LTYuOWw2LjQtNi40YzQsMi43LDguOCw0LjMsMTQsNC4zYzUuOCwwLDExLjEtMiwxNS4zLTUuM2MwLjYtMC41LDEuNC0wLjQsMiwwLjJjMC41LDAuNSwzLjEsMy41LDQsNC40ICAgQy0xNTMuMSw0MjEuOC0xNTMuMiw0MjIuOC0xNTMuOSw0MjMuM3ogTS0xNDQuNSw0MTYu'+
			'OWMtMC4zLDAuNC0wLjYsMC42LTEuMSwwLjZjLTAuNCwwLTAuNy0wLjItMS0wLjZsLTEyLjgtMTcuOCAgIGMtMC4zLTAuNC0wLjQtMC45LTAuMS0xLjNjMC4zLTAuNSwwLjYtMC43LDEuMS0wLjdoNy42aDAuN2MwLTUuMy0xLjYtMTAuMS00LjQtMTQuMmw2LjQtNi40YzQuNCw1LjcsNywxMi45LDcsMjAuNmgwLjVoNy43ICAgYzAuNSwwLDAuOCwwLjIsMS4xLDAuN2MwLjMsMC41LDAuMiwxLTAuMSwxLjNMLTE0NC41LDQxNi45eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQyLjgsMzYxLjdjMC40LDAsMC44LDAuMSwxLjEsMC40bDEuNywxLj'+
			'djMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NmMtMC4zLDAuMy0wLjcsMC40LTEuMSwwLjQgICBjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LTY2Qy0xNDMuNiwzNjEuOC0xNDMuMiwzNjEuNy0xNDIuOCwzNjEuNyIvPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Mi4zLDM3Ny4xYzAuNiwwLjYsMS40LDAuNiwyLDAuMmM0LjItMy4zLDkuNS01LjMsMTUuMy01LjNjNS4zLDAsMTAuMSwxLjYsMTQuMiw0LjRsNi40LTYuNCAgICBjLTUuNy00LjQtMTIuOS03LTIwLjYtN2MtOCwwLTE1LjMsMi44LTIxLjEsNy40Yy0w'+
			'LjcsMC41LTAuOCwxLjYtMC4xLDIuM0MtMTk1LjQsMzczLjctMTkyLjgsMzc2LjYtMTkyLjMsMzc3LjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTMxLjcsMzk3LjdjLTAuMy0wLjUtMC42LTAuNy0xLjEtMC43aC03LjdoLTAuNWMwLTcuNy0yLjYtMTQuOS03LTIwLjZsLTYuNCw2LjRjMi44LDQsNC40LDguOSw0LjQsMTQuMiAgICBoLTAuN2gtNy42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LTE3LjggICAgQy0xMzEuNSwzOTguNi0xMz'+
			'EuNCwzOTguMi0xMzEuNywzOTcuN3oiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMjA5LDM5N2MwLjEsNy43LDIuNywxNC44LDcuMSwyMC41bDYuNC02LjRjLTIuOC00LTQuNS04LjgtNC41LTE0LjFoMC42aDcuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjcgICAgYzAuMy0wLjUsMC4yLTEtMC4xLTEuM2wtMTIuOC0xNy44Yy0wLjMtMC40LTAuNi0wLjYtMS0wLjZjLTAuNSwwLTAuOCwwLjItMS4xLDAuNmwtMTIuNywxNy44Yy0wLjMsMC40LTAuNCwwLjktMC4xLDEuMyAgICBjMC4zLDAuNSwwLjYsMC43LDEuMSwwLjdoNy43SC0yMDl6Ii8+CiAgIDxwYXRoIGZpbGw9'+
			'IiNGRkZGRkYiIGQ9Ik0tMTU3LjcsNDE2LjZjLTAuNi0wLjYtMS40LTAuNi0yLTAuMmMtNC4yLDMuMy05LjUsNS4zLTE1LjMsNS4zYy01LjIsMC0xMC0xLjYtMTQtNC4zbC02LjQsNi40ICAgIGM1LjcsNC4zLDEyLjgsNi45LDIwLjUsNi45YzgsMCwxNS4zLTIuOCwyMS4xLTcuNGMwLjctMC41LDAuOC0xLjYsMC4xLTIuM0MtMTU0LjYsNDIwLjEtMTU3LjIsNDE3LjEtMTU3LjcsNDE2LjZ6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._stop_rotate_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stop_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiAgICBNLTE5OC41LDM2Ny41YzYuNC01LjEsMTQuNi04LjIsMjMuNS04LjJjOC42LDAsMTYuNSwyLjksMjIuOSw3LjhsLTcuMiw3LjJjLTQuNS0zLjEtOS45LTQuOS0xNS43LTQuOWMtNi40LDAtMTIuMywyLjItMTcsNS45ICAgYy0wLjcsMC41LTEuNiwwLjQtMi4yLTAuMmMtMC42LTAuNi0zLjUtMy44LTQuNC00LjlDLTE5OS4zLDM2OS4yLTE5OS4z'+
			'LDM2OC4xLTE5OC41LDM2Ny41eiBNLTIyMS45LDM5N2MtMC41LDAtMC45LTAuMi0xLjItMC43ICAgYy0wLjMtMC41LTAuMi0xLjEsMC4xLTEuNWwxNC4xLTE5LjhjMC4zLTAuNCwwLjYtMC42LDEuMi0wLjZjMC40LDAsMC43LDAuMiwxLjEsMC42bDE0LjIsMTkuOGMwLjMsMC40LDAuNCwxLDAuMSwxLjUgICBjLTAuMywwLjUtMC42LDAuNy0xLjIsMC43aC04LjVoLTAuN2MwLjEsNS44LDEuOSwxMS4yLDUsMTUuNmwtNy4xLDcuMWMtNC45LTYuMy03LjgtMTQuMi03LjktMjIuOGgtMC42SC0yMjEuOXogTS0yMTAuNyw0MzYuMyAgIGMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC'+
			'43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zYzAuMy0wLjMsMC44LTAuNSwxLjItMC41czAuOSwwLjIsMS4yLDAuNWwxLjgsMS44ICAgYzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zQy0yMDkuOSw0MzYuMS0yMTAuMyw0MzYuMy0yMTAuNyw0MzYuM3ogTS0xNTEuNSw0MjYuM2MtNi40LDUuMS0xNC42LDguMi0yMy41LDguMiAgIGMtOC41LDAtMTYuNC0yLjktMjIuOC03LjdsNy4yLTcuMmM0LjQsMyw5LjgsNC44LDE1LjYsNC44YzYuNCwwLDEyLjMtMi4yLDE3LTUuOWMwLjctMC41LDEuNi0wLjQsMi4yLDAuMmMwLjYsMC42LDMuNSwzLjgsNC40LDQuOSAgIEMtMTUwLjcsNDI0LjUtMTUw'+
			'LjcsNDI1LjctMTUxLjUsNDI2LjN6IE0tMTQxLjEsNDE5LjFjLTAuMywwLjQtMC42LDAuNi0xLjIsMC42Yy0wLjQsMC0wLjctMC4yLTEuMS0wLjZsLTE0LjItMTkuOCAgIGMtMC4zLTAuNC0wLjQtMS0wLjEtMS41YzAuMy0wLjUsMC42LTAuNywxLjItMC43aDguNGgwLjdjMC01LjgtMS44LTExLjMtNC45LTE1LjdsNy4yLTcuMmM0LjksNi40LDcuOCwxNC4zLDcuOCwyMi45aDAuNmg4LjYgICBjMC41LDAsMC45LDAuMiwxLjIsMC43YzAuMywwLjUsMC4yLDEuMS0wLjEsMS41TC0xNDEuMSw0MTkuMXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLT'+
			'EzOS4zLDM1Ny43YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNSAgIHMtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zQy0xNDAuMSwzNTcuOS0xMzkuNywzNTcuNy0xMzkuMywzNTcuNyIvPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5NC4yLDM3NC45YzAuNiwwLjYsMS41LDAuNywyLjIsMC4yYzQuNy0zLjcsMTAuNi01LjksMTctNS45YzUuOCwwLDExLjMsMS44LDE1LjcsNC45bDcuMi03LjIgICAgYy02LjQt'+
			'NC45LTE0LjMtNy44LTIyLjktNy44Yy04LjksMC0xNywzLjEtMjMuNSw4LjJjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42Qy0xOTcuNywzNzEuMS0xOTQuOCwzNzQuNC0xOTQuMiwzNzQuOXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMjYuOSwzOTcuN2MtMC4zLTAuNS0wLjYtMC43LTEuMi0wLjdoLTguNmgtMC42YzAtOC42LTIuOS0xNi41LTcuOC0yMi45bC03LjIsNy4yICAgIGMzLjEsNC41LDQuOSw5LjksNC45LDE1LjdoLTAuN2gtOC40Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjdjLTAuMywwLjUtMC4yLDEuMSwwLjEsMS41bDE0LjIsMTkuOGMwLjMsMC40LDAuNiwwLjYsMS4xLD'+
			'AuNiAgICBjMC41LDAsMC45LTAuMiwxLjItMC42bDE0LjEtMTkuOEMtMTI2LjcsMzk4LjgtMTI2LjYsMzk4LjMtMTI2LjksMzk3Ljd6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTIxMi43LDM5N2MwLjEsOC42LDMsMTYuNSw3LjksMjIuOGw3LjEtNy4xYy0zLjEtNC40LTUtOS44LTUtMTUuNmgwLjdoOC41YzAuNSwwLDAuOS0wLjIsMS4yLTAuNyAgICBjMC4zLTAuNSwwLjItMS4xLTAuMS0xLjVsLTE0LjItMTkuOGMtMC4zLTAuNC0wLjYtMC42LTEuMS0wLjZjLTAuNSwwLTAuOSwwLjItMS4yLDAuNmwtMTQuMSwxOS44Yy0wLjMsMC40LTAuNCwxLTAuMSwxLjUg'+
			'ICAgYzAuMywwLjUsMC42LDAuNywxLjIsMC43aDguNkgtMjEyLjd6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTU1LjgsNDE4LjhjLTAuNi0wLjYtMS41LTAuNy0yLjItMC4yYy00LjcsMy43LTEwLjYsNS45LTE3LDUuOWMtNS44LDAtMTEuMS0xLjgtMTUuNi00LjhsLTcuMiw3LjIgICAgYzYuMyw0LjgsMTQuMiw3LjcsMjIuOCw3LjdjOC45LDAsMTctMy4xLDIzLjUtOC4yYzAuOC0wLjYsMC44LTEuOCwwLjItMi42Qy0xNTIuMyw0MjIuNi0xNTUuMiw0MTkuNC0xNTUuOCw0MTguOHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._stop_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="stop_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -47px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._stop_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stop_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stop_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stop_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stop_rotate_image.style.transition='';
				if (me._stop_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._stop_rotate_image.style.visibility=(Number(me._stop_rotate_image.style.opacity)>0||!me._stop_rotate_image.style.opacity)?'inherit':'hidden';
					me._stop_rotate_image.ggVisible=true;
				}
				else {
					me._stop_rotate_image.style.visibility="hidden";
					me._stop_rotate_image.ggVisible=false;
				}
			}
		}
		me._stop_rotate_image.logicBlock_visible();
		me._stop_rotate_image.onmouseenter=function (e) {
			me._stop_rotate_image__img.style.visibility='hidden';
			me._stop_rotate_image__imgo.style.visibility='inherit';
			me.elementMouseOver['stop_rotate_image']=true;
		}
		me._stop_rotate_image.onmouseleave=function (e) {
			me._stop_rotate_image__img.style.visibility='inherit';
			me._stop_rotate_image__imgo.style.visibility='hidden';
			me.elementMouseOver['stop_rotate_image']=false;
		}
		me._stop_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._stop_rotate_image);
		el=me._start_rotate_image=document.createElement('div');
		els=me._start_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0xNTMuOSw0MjMuNmMtNS44LDQuNi0xMy4xLDcuNC0yMS4xLDcuNGgwYy0xOC43LDAtMzQtMTUuMi0zNC0zNGgtMC41aC03LjdjLTAuNSwwLTAuOC0wLjItMS4xLTAuN2MtMC4zLTAuNS0wLjItMSwwLjEtMS4zICAgbDEyLjctMTcuOGMwLjMtMC40LDAuNi0wLjYsMS4xLTAuNmMwLjQsMCwwLjcsMC4yLDEsMC42bDEyLjgsMTcuOGMwLjMs'+
			'MC40LDAuNCwwLjksMC4xLDEuM2MtMC4zLDAuNS0wLjYsMC43LTEuMSwwLjdoLTcuNmgtMC43ICAgYzAsMTMuOCwxMS4yLDI1LDI1LDI1aDBjNS44LDAsMTEuMS0yLDE1LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjRDLTE1My4xLDQyMi0xNTMuMiw0MjMuMS0xNTMuOSw0MjMuNnogICAgTS0xNzksMzk3YzAtMi4yLDEuOC00LDQtNGMyLjIsMCw0LDEuOCw0LDRjMCwyLjItMS44LDQtNCw0Qy0xNzcuMiw0MDEtMTc5LDM5OS4yLTE3OSwzOTd6IE0tMTQ0LjUsNDE2LjkgICBjLTAuMywwLjQtMC42LDAuNi0xLjEsMC42Yy0wLjQsMC0wLjctMC4yLTEtMC42bC'+
			'0xMi44LTE3LjhjLTAuMy0wLjQtMC40LTAuOS0wLjEtMS4zYzAuMy0wLjUsMC42LTAuNywxLjEtMC43aDcuNmgwLjcgICBjMC0xMy44LTExLjItMjUtMjUtMjVoMGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zYy0wLjYsMC41LTEuNCwwLjQtMi0wLjJjLTAuNS0wLjUtMy4xLTMuNS00LTQuNGMtMC42LTAuNy0wLjYtMS44LDAuMS0yLjMgICBjNS44LTQuNiwxMy4xLTcuNCwyMS4xLTcuNGgwYzE4LjcsMCwzNCwxNS4yLDM0LDM0aDAuNWg3LjdjMC41LDAsMC44LDAuMiwxLjEsMC43YzAuMywwLjUsMC4yLDEtMC4xLDEuM0wtMTQ0LjUsNDE2Ljl6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBh'+
			'dGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTMuNyw0MjEuM2MtMC44LTAuOS0zLjUtMy45LTQtNC40Yy0wLjYtMC42LTEuNC0wLjYtMi0wLjJjLTQuMiwzLjMtOS41LDUuMy0xNS4zLDUuM2gwICAgYy0xMy44LDAtMjUtMTEuMi0yNS0yNWgwLjdoNy42YzAuNSwwLDAuOC0wLjIsMS4xLTAuN2MwLjMtMC41LDAuMi0xLTAuMS0xLjNsLTEyLjgtMTcuOGMtMC4zLTAuNC0wLjYtMC42LTEtMC42ICAgYy0wLjUsMC0wLjgsMC4yLTEuMSwwLjZsLTEyLjcsMTcuOGMtMC4zLDAuNC0wLjQsMC45LTAuMSwxLjNjMC4zLDAuNSwwLjYsMC43LDEuMSwwLjdoNy43aDAuNWMwLDE4LjcsMTUuMiwzNCwzNCwzNGgwIC'+
			'AgYzgsMCwxNS4zLTIuOCwyMS4xLTcuNEMtMTUzLjIsNDIzLjEtMTUzLjEsNDIyLTE1My43LDQyMS4zeiIvPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTMxLjcsMzk3LjdjLTAuMy0wLjUtMC42LTAuNy0xLjEtMC43aC03LjdoLTAuNWMwLTE4LjctMTUuMi0zNC0zNC0zNGgwYy04LDAtMTUuMywyLjgtMjEuMSw3LjQgICBjLTAuNywwLjUtMC44LDEuNi0wLjEsMi4zYzAuOCwwLjksMy41LDMuOSw0LDQuNGMwLjYsMC42LDEuNCwwLjYsMiwwLjJjNC4yLTMuMyw5LjUtNS4zLDE1LjMtNS4zaDBjMTMuOCwwLDI1LDExLjIsMjUsMjVoLTAuNyAgIGgtNy42Yy0wLjUsMC0wLjgsMC4yLTEuMSww'+
			'LjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LTE3LjggICBDLTEzMS41LDM5OC43LTEzMS40LDM5OC4yLTEzMS43LDM5Ny43eiIvPgogIDxjaXJjbGUgY3g9Ii0xNzUiIGN5PSIzOTciIGZpbGw9IiNGRkZGRkYiIHI9IjQiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._start_rotate_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._start_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC43LTE3NSwzMzQuN3ogTS0xNTEuNSw0MjYuNmMtNi40LDUuMS0xNC42LDguMi0yMy41LDguMmgwYy0yMC44LDAtMzcuNy0xNi45LTM3LjctMzcuN2gtMC42aC04LjYgICBjLTAuNSwwLTAuOS0wLjItMS4yLTAuN2MtMC4zLTAuNS0wLjItMS4xLDAuMS0xLjVsMTQuMS0xOS44YzAuMy0wLjQsMC42LTAuNiwxLjItMC42YzAuNCwwLDAuNywwLjIsMS4xLDAu'+
			'NmwxNC4yLDE5LjggICBjMC4zLDAuNCwwLjQsMSwwLjEsMS41Yy0wLjMsMC41LTAuNiwwLjctMS4yLDAuN2gtOC40aC0wLjdjMCwxNS4zLDEyLjQsMjcuNywyNy43LDI3LjdoMGM2LjQsMCwxMi4zLTIuMiwxNy01LjkgICBjMC43LTAuNSwxLjYtMC40LDIuMiwwLjJjMC42LDAuNiwzLjUsMy44LDQuNCw0LjlDLTE1MC43LDQyNC44LTE1MC43LDQyNi0xNTEuNSw0MjYuNnogTS0xNzkuNCwzOTdjMC0yLjQsMi00LjQsNC40LTQuNCAgIGMyLjQsMCw0LjQsMiw0LjQsNC40YzAsMi40LTIsNC40LTQuNCw0LjRDLTE3Ny40LDQwMS40LTE3OS40LDM5OS41LTE3OS40LDM5N3ogTS0xNDEuMSw0MTkuMWMtMC'+
			'4zLDAuNC0wLjYsMC42LTEuMiwwLjYgICBjLTAuNCwwLTAuNy0wLjItMS4xLTAuNmwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNC0xLTAuMS0xLjVjMC4zLTAuNSwwLjYtMC43LDEuMi0wLjdoOC40aDAuN2MwLTE1LjMtMTIuNC0yNy43LTI3LjctMjcuN2gwICAgYy02LjQsMC0xMi4zLDIuMi0xNyw1LjljLTAuNywwLjUtMS42LDAuNC0yLjItMC4yYy0wLjYtMC42LTMuNS0zLjgtNC40LTQuOWMtMC43LTAuOC0wLjYtMiwwLjItMi42YzYuNC01LjEsMTQuNi04LjIsMjMuNS04LjJoMCAgIGMyMC44LDAsMzcuNywxNi45LDM3LjcsMzcuN2gwLjZoOC42YzAuNSwwLDAuOSwwLjIsMS4yLDAuN2MwLjMsMC41'+
			'LDAuMiwxLjEtMC4xLDEuNUwtMTQxLjEsNDE5LjF6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTEuNCw0MjRjLTAuOS0xLTMuOS00LjMtNC40LTQuOWMtMC42LTAuNi0xLjUtMC43LTIuMi0wLjJjLTQuNywzLjctMTAuNiw1LjktMTcsNS45aDAgICBjLTE1LjMsMC0yNy43LTEyLjQtMjcuNy0yNy43aDAuN2g4LjRjMC41LDAsMC45LTAuMiwxLjItMC43czAuMi0xLjEtMC4xLTEuNWwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNi0wLjYtMS4xLTAuNiAgIGMtMC41LDAtMC45LDAuMi0xLjIsMC42bC0xNC4xLDE5LjhjLTAuMywwLjQtMC40LDEtMC'+
			'4xLDEuNWMwLjMsMC41LDAuNiwwLjcsMS4yLDAuN2g4LjZoMC42YzAsMjAuOCwxNi45LDM3LjcsMzcuNywzNy43aDAgICBjOC45LDAsMTctMy4xLDIzLjUtOC4yQy0xNTAuNyw0MjYtMTUwLjcsNDI0LjgtMTUxLjQsNDI0eiIvPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTI2LjksMzk3LjhjLTAuMy0wLjUtMC42LTAuNy0xLjItMC43aC04LjZoLTAuNmMwLTIwLjgtMTYuOS0zNy43LTM3LjctMzcuN2gwYy04LjksMC0xNywzLjEtMjMuNSw4LjIgICBjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42YzAuOSwxLDMuOSw0LjMsNC40LDQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43'+
			'LDEwLjYtNS45LDE3LTUuOWgwYzE1LjMsMCwyNy43LDEyLjQsMjcuNywyNy43ICAgaC0wLjdoLTguNGMtMC41LDAtMC45LDAuMi0xLjIsMC43Yy0wLjMsMC41LTAuMiwxLjEsMC4xLDEuNWwxNC4yLDE5LjhjMC4zLDAuNCwwLjYsMC42LDEuMSwwLjZjMC41LDAsMC45LTAuMiwxLjItMC42bDE0LjEtMTkuOCAgIEMtMTI2LjcsMzk4LjktMTI2LjYsMzk4LjMtMTI2LjksMzk3Ljh6Ii8+CiAgPGNpcmNsZSBjeD0iLTE3NSIgY3k9IjM5NyIgZmlsbD0iI0ZGRkZGRiIgcj0iNC40Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._start_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="start_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -47px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._start_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start_rotate_image.style.transition='';
				if (me._start_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._start_rotate_image.style.visibility="hidden";
					me._start_rotate_image.ggVisible=false;
				}
				else {
					me._start_rotate_image.style.visibility=(Number(me._start_rotate_image.style.opacity)>0||!me._start_rotate_image.style.opacity)?'inherit':'hidden';
					me._start_rotate_image.ggVisible=true;
				}
			}
		}
		me._start_rotate_image.logicBlock_visible();
		me._start_rotate_image.onmouseenter=function (e) {
			me._start_rotate_image__img.style.visibility='hidden';
			me._start_rotate_image__imgo.style.visibility='inherit';
			me.elementMouseOver['start_rotate_image']=true;
		}
		me._start_rotate_image.onmouseleave=function (e) {
			me._start_rotate_image__img.style.visibility='inherit';
			me._start_rotate_image__imgo.style.visibility='hidden';
			me.elementMouseOver['start_rotate_image']=false;
		}
		me._start_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._start_rotate_image);
		me.divSkin.appendChild(me._button_auto_rotate);
		el=me._button_direction=document.createElement('div');
		el.ggId="button_direction";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 8px;';
		hs+='height : 62px;';
		hs+='left : calc(50% - ((82px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 82px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_direction.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_direction.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_right=document.createElement('div');
		els=me._button_image_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSAgIEMtMTE4LjksMzY2LTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTQ5LDM5OC4xbC0zMC4xLDMwLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMTEuMy0xMS4zYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMTcuNy0xNy43ICAgbC0xNy43LTE3LjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwxMS4zLTExLjNjMC42LTAuNiwxLjYtMC42LDIuMiwwbDMwLjEsMzBjMC4zLDAuMywwLjQsMC43'+
			'LDAuNCwxLjEgICBDLTE0OC41LDM5Ny40LTE0OC42LDM5Ny44LTE0OSwzOTguMXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Mi41LDM3OS4zbDE3LjcsMTcuN2wtMTcuNywxNy43Yy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMTEuMywxMS4zYzAuNiwwLjYsMS42LDAuNiwyLjIsMGwzMC4xLTMwLjEgICBjMC4zLTAuMywwLjUtMC43LDAuNC0xLjFjMC0wLjQtMC4xLTAuOC0wLjQtMS4xbC0zMC4xLTMwYy0wLjYtMC42LTEuNi0wLjYtMi4yLDBsLTExLjMsMTEuM0MtMTkzLjEsMzc3LjctMTkzLjEsMzc4LjctMTkyLjUsMzc5LjMgICB6Ii8+Ci'+
			'A8L2c+Cjwvc3ZnPgo=';
		me._button_image_right__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQgICBDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNDYuMSwzOTguMmwtMzMuNSwzMy40Yy0wLjcsMC43LTEuNywwLjctMi40LDBsLTEyLjUtMTIuNWMtMC43LTAuNy0wLjctMS43LDAtMi40ICAgbDE5LjctMTkuN2wtMTkuNy0xOS43Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwzMy41LDMzLjRjMC4z'+
			'LDAuMywwLjUsMC44LDAuNSwxLjIgICBDLTE0NS42LDM5Ny40LTE0NS43LDM5Ny45LTE0Ni4xLDM5OC4yeiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTk0LjQsMzc3LjNsMTkuNywxOS43bC0xOS43LDE5LjdjLTAuNywwLjctMC43LDEuNywwLDIuNGwxMi41LDEyLjVjMC43LDAuNywxLjcsMC43LDIuNCwwbDMzLjUtMzMuNCAgIGMwLjMtMC4zLDAuNS0wLjgsMC41LTEuM2MwLTAuNC0wLjItMC45LTAuNS0xLjJsLTMzLjUtMzMuNGMtMC43LTAuNy0xLjctMC43LTIuNCwwbC0xMi41LDEyLjUgICBDLTE5NS4xLDM3NS42LTE5NS4xLDM3Ni42LT'+
			'E5NC40LDM3Ny4zeiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_image_right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_image_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -57px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Right');
		el.style.transformOrigin='50% 50%';
		me._button_image_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_right.onmouseenter=function (e) {
			me._button_image_right__img.style.visibility='hidden';
			me._button_image_right__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_right']=true;
		}
		me._button_image_right.onmousedown=function (e) {
			me.elementMouseDown['button_image_right']=true;
		}
		me._button_image_right.onmouseup=function (e) {
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.onmouseleave=function (e) {
			me._button_image_right__img.style.visibility='inherit';
			me._button_image_right__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_right']=false;
			me.elementMouseOver['button_image_right']=false;
		}
		me._button_image_right.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['button_image_right']) {
				player.changePanLog(-0.5,true);
			}
		}
		me._button_image_right.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_right);
		el=me._button_image_left=document.createElement('div');
		els=me._button_image_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjhjLTMxLDAtNTYuMiwyNS4xLTU2LjIsNTYuMnMyNS4xLDU2LjIsNTYuMiw1Ni4yczU2LjItMjUuMSw1Ni4yLTU2LjIgICBDLTExOC44LDM2Ni0xNDQsMzQwLjgtMTc1LDM0MC44eiBNLTE1Ny41LDQxNi45bC0xMS4zLDExLjNjLTAuNiwwLjYtMS41LDAuNi0yLjIsMGwtMzAuMi0zMC4xYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuMSAgIGMwLTAuNSwwLjEtMC44LDAuNC0xLjJsMzAuMi0zMC4xYzAuNi0wLjYsMS41LTAuNiwyLjIsMGwxMS4zLDExLjNjMC42LDAuNiwwLjYsMS41LDAsMi4ybC0xNy43LDE3LjdsMTcu'+
			'NywxNy43ICAgQy0xNTYuOSw0MTUuNC0xNTYuOSw0MTYuMy0xNTcuNSw0MTYuOXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1Ny41LDQxNC43bC0xNy43LTE3LjdsMTcuNy0xNy43YzAuNi0wLjYsMC42LTEuNSwwLTIuMmwtMTEuMy0xMS4zYy0wLjYtMC42LTEuNS0wLjYtMi4yLDBsLTMwLjIsMzAuMSAgIGMtMC4zLDAuMy0wLjQsMC43LTAuNCwxLjJjMCwwLjQsMC4yLDAuOCwwLjQsMS4xbDMwLjIsMzAuMWMwLjYsMC42LDEuNSwwLjYsMi4yLDBsMTEuMy0xMS4zQy0xNTYuOSw0MTYuMy0xNTYuOSw0MTUuNC0xNTcuNSw0MTQuNyAgIHoiLz'+
			'4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_left__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNCAgIEMtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE1NS42LDQxOS4xbC0xMi41LDEyLjVjLTAuNywwLjctMS43LDAuNy0yLjQsMGwtMzMuNS0zMy40Yy0wLjMtMC4zLTAuNS0wLjgtMC41LTEuMiAgIGMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMzMuNS0zMy40YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjVjMC43LDAuNywwLjcsMS43LDAsMi40bC0xOS43LDE5'+
			'LjdsMTkuNywxOS43ICAgQy0xNTQuOSw0MTcuNC0xNTQuOSw0MTguNC0xNTUuNiw0MTkuMXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1NS42LDQxNi43bC0xOS43LTE5LjdsMTkuNy0xOS43YzAuNy0wLjcsMC43LTEuNywwLTIuNGwtMTIuNS0xMi41Yy0wLjctMC43LTEuNy0wLjctMi40LDBsLTMzLjUsMzMuNCAgIGMtMC4zLDAuMy0wLjUsMC44LTAuNSwxLjNjMCwwLjQsMC4yLDAuOSwwLjUsMS4ybDMzLjUsMzMuNGMwLjcsMC43LDEuNywwLjcsMi40LDBsMTIuNS0xMi41Qy0xNTQuOSw0MTguNC0xNTQuOSw0MTcuNC0xNTUuNiw0MTYuNy'+
			'AgIHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_image_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -109px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Left');
		el.style.transformOrigin='50% 50%';
		me._button_image_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_left.onmouseenter=function (e) {
			me._button_image_left__img.style.visibility='hidden';
			me._button_image_left__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_left']=true;
		}
		me._button_image_left.onmousedown=function (e) {
			me.elementMouseDown['button_image_left']=true;
		}
		me._button_image_left.onmouseup=function (e) {
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.onmouseleave=function (e) {
			me._button_image_left__img.style.visibility='inherit';
			me._button_image_left__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_left']=false;
			me.elementMouseOver['button_image_left']=false;
		}
		me._button_image_left.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['button_image_left']) {
				player.changePanLog(0.5,true);
			}
		}
		me._button_image_left.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_left);
		el=me._button_image_down=document.createElement('div');
		els=me._button_image_down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0xNDMuOCwzOTIuOWwtMzAsMzAuMWMtMC4zLDAuMy0wLjcsMC40LTEuMSwwLjRjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMzAuMS0zMC4xYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMTEuMy0xMS4zICAgYzAuNi0wLjYsMS42LTAuNiwyLjIsMGwxNy43LDE3LjdsMTcuNy0xNy43YzAuNi0wLjYsMS42LTAuNiwyLjIsMGwxMS4zLDExLjND'+
			'LTE0My4yLDM5MS40LTE0My4yLDM5Mi4zLTE0My44LDM5Mi45eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTU3LjMsMzc5LjVsLTE3LjcsMTcuN2wtMTcuNy0xNy43Yy0wLjYtMC42LTEuNi0wLjYtMi4yLDBsLTExLjMsMTEuM2MtMC42LDAuNi0wLjYsMS42LDAsMi4ybDMwLjEsMzAuMSAgIGMwLjMsMC4zLDAuNywwLjUsMS4xLDAuNGMwLjQsMCwwLjgtMC4xLDEuMS0wLjRsMzAtMzAuMWMwLjYtMC42LDAuNi0xLjYsMC0yLjJsLTExLjMtMTEuM0MtMTU1LjcsMzc4LjktMTU2LjcsMzc4LjktMTU3LjMsMzc5LjV6Ii8+CiA8L2c+Cjwvc3ZnPg'+
			'o=';
		me._button_image_down__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNDAuNCwzOTIuNWwtMzMuNCwzMy41Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMy40LTMzLjUgICBjLTAuNy0wLjctMC43LTEuNywwLTIuNGwxMi41LTEyLjVjMC43LTAuNywxLjctMC43LDIuNCwwbDE5LjcsMTkuN2wxOS43LTE5LjdjMC43LTAuNywxLjctMC43LDIuNCwwbDEy'+
			'LjUsMTIuNSAgIEMtMTM5LjcsMzkwLjctMTM5LjcsMzkxLjgtMTQwLjQsMzkyLjV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTUuMywzNzcuNmwtMTkuNywxOS43bC0xOS43LTE5LjdjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzMuNCwzMy41ICAgYzAuMywwLjMsMC44LDAuNSwxLjMsMC41YzAuNCwwLDAuOS0wLjIsMS4yLTAuNWwzMy40LTMzLjVjMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE1My42LDM3Ni45LTE1NC42LDM3Ni45LTE1NS4zLDM3Ny42ICAgei'+
			'IvPgogPC9nPgo8L3N2Zz4K';
		me._button_image_down__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_image_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -83px;';
		hs+='position : absolute;';
		hs+='top : 26px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Down');
		el.style.transformOrigin='50% 50%';
		me._button_image_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_down.onmouseenter=function (e) {
			me._button_image_down__img.style.visibility='hidden';
			me._button_image_down__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_down']=true;
		}
		me._button_image_down.onmousedown=function (e) {
			me.elementMouseDown['button_image_down']=true;
		}
		me._button_image_down.onmouseup=function (e) {
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.onmouseleave=function (e) {
			me._button_image_down__img.style.visibility='inherit';
			me._button_image_down__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_down']=false;
			me.elementMouseOver['button_image_down']=false;
		}
		me._button_image_down.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['button_image_down']) {
				player.changeTiltLog(-0.5,true);
			}
		}
		me._button_image_down.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_down);
		el=me._button_image_up=document.createElement('div');
		els=me._button_image_up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0xNDMuOCw0MDMuMmwtMTEuMywxMS4zYy0wLjYsMC42LTEuNiwwLjYtMi4yLDBsLTE3LjctMTcuN2wtMTcuNywxNy43Yy0wLjYsMC42LTEuNiwwLjYtMi4yLDBsLTExLjMtMTEuMyAgIGMtMC42LTAuNi0wLjYtMS42LDAtMi4ybDMwLTMwLjFjMC4zLTAuMywwLjctMC40LDEuMS0wLjRjMC40LDAsMC44LDAuMSwxLjEsMC40bDMwLjEsMzAu'+
			'MUMtMTQzLjIsNDAxLjctMTQzLjIsNDAyLjYtMTQzLjgsNDAzLjJ6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xOTIuNyw0MTQuNWwxNy43LTE3LjdsMTcuNywxNy43YzAuNiwwLjYsMS42LDAuNiwyLjIsMGwxMS4zLTExLjNjMC42LTAuNiwwLjYtMS42LDAtMi4ybC0zMC4xLTMwLjEgICBjLTAuMy0wLjMtMC43LTAuNS0xLjEtMC40Yy0wLjQsMC0wLjgsMC4xLTEuMSwwLjRsLTMwLDMwLjFjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwxMS4zLDExLjMgICBDLTE5NC4zLDQxNS4xLTE5My4zLDQxNS4xLTE5Mi43LDQxNC41eiIvPgogPC9nPgo8L3'+
			'N2Zz4K';
		me._button_image_up__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICBTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNDAuNCw0MDMuOWwtMTIuNSwxMi41Yy0wLjcsMC43LTEuNywwLjctMi40LDBsLTE5LjctMTkuN2wtMTkuNywxOS43Yy0wLjcsMC43LTEuNywwLjctMi40LDAgICBsLTEyLjUtMTIuNWMtMC43LTAuNy0wLjctMS43LDAtMi40bDMzLjQtMzMuNWMwLjMtMC4zLDAuOC0wLjUsMS4yLTAuNWMwLjUsMCwwLjksMC4xLDEuMywwLjVs'+
			'MzMuNCwzMy41ICAgQy0xMzkuNyw0MDIuMi0xMzkuNyw0MDMuMy0xNDAuNCw0MDMuOXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5NC43LDQxNi40bDE5LjctMTkuN2wxOS43LDE5LjdjMC43LDAuNywxLjcsMC43LDIuNCwwbDEyLjUtMTIuNWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTMzLjQtMzMuNSAgIGMtMC4zLTAuMy0wLjgtMC41LTEuMy0wLjVjLTAuNCwwLTAuOSwwLjItMS4yLDAuNWwtMzMuNCwzMy41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMTIuNSwxMi41ICAgQy0xOTYuNCw0MTcuMS0xOTUuNCw0MTcuMS0xOTQuNyw0MTYuNH'+
			'oiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_up__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_image_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -83px;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Up');
		el.style.transformOrigin='50% 50%';
		me._button_image_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_up.onmouseenter=function (e) {
			me._button_image_up__img.style.visibility='hidden';
			me._button_image_up__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_up']=true;
		}
		me._button_image_up.onmousedown=function (e) {
			me.elementMouseDown['button_image_up']=true;
		}
		me._button_image_up.onmouseup=function (e) {
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.onmouseleave=function (e) {
			me._button_image_up__img.style.visibility='inherit';
			me._button_image_up__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_up']=false;
			me.elementMouseOver['button_image_up']=false;
		}
		me._button_image_up.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['button_image_up']) {
				player.changeTiltLog(0.5,true);
			}
		}
		me._button_image_up.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_up);
		me.divSkin.appendChild(me._button_direction);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IHk9IjM5NyIgZmlsbD0iIzAwMDAwMCIgeD0iLTIwNi4yIiBoZWlnaHQ9IjIyLjIiIHdpZHRoPSIzMi4xIi8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSAgICBDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE2OC42LDQyMC4zYzAsMi4zLTEuOSw0LjItNC4yLDQuMmgtMzQuNWMtMi4zLDAtNC4yLTEuOS00LjItNC4ydi0yNC41YzAtMi4zLDEuOS00LjIsNC4yLTQuMiAgICBo'+
			'MzQuNWMyLjMsMCw0LjIsMS45LDQuMiw0LjJMLTE2OC42LDQyMC4zTC0xNjguNiw0MjAuM3ogTS0xMzYuOCwzNzIuNmwtMTcuNSwxMi42Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsMC43LDAuOWwzLjMsNC43ICAgIGMwLjIsMC4zLDAuMiwwLjUsMC4xLDAuOWMtMC4yLDAuNC0wLjUsMC41LTAuOCwwLjVsLTE2LjIsMC4xYy0wLjQsMC0wLjYtMC4xLTAuOC0wLjRjLTAuMi0wLjItMC4yLTAuNS0wLjEtMC44bDUuMi0xNS40ICAgIGMwLjEtMC4zLDAuNC0wLjYsMC44LTAuNmMwLjQsMCwwLjcsMC4xLDAuOSwwLjNsMy4zLDQuNmwwLjYsMC44YzAsMCwwLjEtMC4xLDAuMS0wLjFsMTcuNS0xMi42YzAuNy'+
			'0wLjUsMS42LTAuMywyLjEsMC40bDEuNCwxLjkgICAgQy0xMzUuOSwzNzEuMi0xMzYuMSwzNzIuMS0xMzYuOCwzNzIuNnoiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM2LjQsMzcwLjVsLTEuNC0xLjljLTAuNS0wLjctMS41LTAuOC0yLjEtMC40bC0xNy41LDEyLjZjLTAuMSwwLTAuMSwwLjEtMC4xLDAuMWwtMC42LTAuOGwtMy4zLTQuNiAgICBjLTAuMi0wLjMtMC40LTAuNC0wLjktMC4zYy0wLjQsMC0wLjcsMC4zLTAuOCwwLjZsLTUuMiwxNS40Yy0wLjEsMC4zLTAuMSwwLjYsMC4xLDAuOGMwLjIsMC4zLDAuNCww'+
			'LjQsMC44LDAuNGwxNi4yLTAuMSAgICBjMC40LDAsMC43LTAuMSwwLjgtMC41YzAuMi0wLjQsMC4yLTAuNi0wLjEtMC45bC0zLjMtNC43bC0wLjctMC45YzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxNy41LTEyLjYgICAgQy0xMzYuMSwzNzIuMS0xMzUuOSwzNzEuMi0xMzYuNCwzNzAuNXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzIuOCwzOTEuNmgtMzQuNWMtMi4zLDAtNC4yLDEuOS00LjIsNC4ydjI0LjVjMCwyLjMsMS45LDQuMiw0LjIsNC4yaDM0LjVjMi4zLDAsNC4yLTEuOSw0LjItNC4ydi0yNC41ICAgIEMtMTY4LjYsMzkzLjUtMTcwLjUsMzkxLjYtMTcyLjgsMzkxLjZ6IE'+
			'0tMTc0LDQxOS4yaC0zMi4xVjM5N2gzMi4xVjQxOS4yeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IHk9IjM5NyIgZmlsbD0iIzAwMDAwMCIgeD0iLTIwOS42IiBoZWlnaHQ9IjI0LjYiIHdpZHRoPSIzNS43Ii8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCAgICBDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNjcuOSw0MjIuOWMwLDIuNi0yLjEsNC43LTQuNyw0LjdoLTM4LjNjLTIuNiwwLTQuNy0yLjEtNC43LTQuN3YtMjcuMiAgICBjMC0yLjYsMi4xLTQu'+
			'Nyw0LjctNC43aDM4LjNjMi42LDAsNC43LDIuMSw0LjcsNC43TC0xNjcuOSw0MjIuOUwtMTY3LjksNDIyLjl6IE0tMTMyLjUsMzY5LjlsLTE5LjUsMTRjLTAuMSwwLTAuMSwwLjEtMC4yLDAuMSAgICBsMC43LDFsMy43LDUuMmMwLjIsMC4zLDAuMiwwLjYsMC4xLDFjLTAuMiwwLjQtMC41LDAuNi0wLjksMC42bC0xOCwwLjFjLTAuNCwwLTAuNy0wLjEtMC45LTAuNGMtMC4yLTAuMy0wLjItMC41LTAuMS0wLjkgICAgbDUuOC0xNy4xYzAuMS0wLjQsMC40LTAuNywwLjgtMC43YzAuNSwwLDAuNywwLjEsMSwwLjRsMy42LDUuMWwwLjcsMC45YzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxOS41LTE0YzAuOC'+
			'0wLjUsMS44LTAuNCwyLjQsMC40ICAgIGwxLjUsMi4xQy0xMzEuNiwzNjguMy0xMzEuOCwzNjkuNC0xMzIuNSwzNjkuOXoiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTMyLjEsMzY3LjVsLTEuNS0yLjFjLTAuNS0wLjgtMS42LTAuOS0yLjQtMC40bC0xOS41LDE0Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsLTAuNy0wLjlsLTMuNi01LjEgICAgYy0wLjItMC4zLTAuNS0wLjQtMS0wLjRjLTAuNSwwLTAuNywwLjMtMC44LDAuN2wtNS44LDE3LjFjLTAuMSwwLjQtMC4xLDAuNywwLjEsMC45YzAuMiwwLjMsMC41LDAuNCww'+
			'LjksMC40bDE4LTAuMSAgICBjMC40LDAsMC44LTAuMiwwLjktMC42YzAuMi0wLjQsMC4yLTAuNy0wLjEtMWwtMy43LTUuMmwtMC43LTFjMC4xLDAsMC4xLTAuMSwwLjItMC4xbDE5LjUtMTQgICAgQy0xMzEuOCwzNjkuNC0xMzEuNiwzNjguMy0xMzIuMSwzNjcuNXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzIuNiwzOTFoLTM4LjNjLTIuNiwwLTQuNywyLjEtNC43LDQuN3YyNy4yYzAsMi42LDIuMSw0LjcsNC43LDQuN2gzOC4zYzIuNiwwLDQuNy0yLjEsNC43LTQuN3YtMjcuMiAgICBDLTE2Ny45LDM5My4xLTE3MCwzOTEtMTcyLjYsMzkxeiBNLTE3My45LDQyMS42aC0zNS43Vj'+
			'M5N2gzNS43VjQyMS42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 31px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style.transition='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.logicBlock_visible();
		me._button_image_normalscreen.onmouseenter=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_normalscreen']=true;
		}
		me._button_image_normalscreen.onmouseleave=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['button_image_normalscreen']=false;
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMjA2LjIsNDE5LjJoNjIuM3YtNDQuM2gtNjIuM1Y0MTkuMnogTS0xNzguOSwzOTcuM2MwLDAsMTcuNy0xMi43LDE3LjctMTIuN2wtNC01LjYgICAgYy0wLjItMC4zLTAuMi0wLjUtMC4xLTAuOWMwLjItMC40LDAuNS0wLjUsMC44LTAuNWwxNi4yLTAuMWMwLjQsMCwwLjYsMC4xLDAuOCwwLjRjMC4yLDAuMiwwLjIsMC41LDAuMSwwLjhsLTUuMiwxNS40ICAgIGMtMC4xLDAuMy0wLjQsMC42LTAuOCwwLjZjLTAuNCwwLTAuNy0wLjEtMC45LTAuM2wtMy45LTUuNGMwLDAtMTcuNywxMi43LTE3LjcsMTIuN2MtMC43LDAu'+
			'NS0xLjYsMC4zLTIuMS0wLjRsLTEuNC0xLjkgICAgQy0xNzkuNywzOTguOC0xNzkuNSwzOTcuOC0xNzguOSwzOTcuM3oiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSAgICBTLTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTM4LjQsNDIwLjNjMCwyLjMtMS45LDQuMi00LjIsNC4yaC02NC43Yy0yLjMsMC00LjItMS45LTQuMi00LjJ2LTQ2LjdjMC0yLjMsMS45LTQuMiw0LjItNC4yaDY0LjcgICAgYzIuMywwLDQuMiwxLjksNC4yLDQuMlY0MjAuM3'+
			'oiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDcuNCwzNzcuOWMtMC4yLTAuMy0wLjQtMC40LTAuOC0wLjRsLTE2LjIsMC4xYy0wLjQsMC0wLjcsMC4xLTAuOCwwLjVjLTAuMiwwLjQtMC4yLDAuNiwwLjEsMC45bDQsNS42ICAgYy0wLjEsMC0xNy43LDEyLjctMTcuNywxMi43Yy0wLjcsMC41LTAuOCwxLjUtMC40LDIuMWwxLjQsMS45YzAuNSwwLjcsMS41LDAuOCwyLjEsMC40YzAsMCwxNy42LTEyLjcsMTcuNy0xMi43bDMuOSw1LjQgICBjMC4yLDAuMywwLjQsMC40LDAuOSwwLjNjMC40LDAsMC43LTAuMywwLjgtMC42bDUuMi0x'+
			'NS40Qy0xNDcuMiwzNzguNC0xNDcuMiwzNzguMS0xNDcuNCwzNzcuOXoiLz4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0Mi43LDQyNC42aC02NC43Yy0yLjMsMC00LjItMS45LTQuMi00LjJ2LTQ2LjdjMC0yLjMsMS45LTQuMiw0LjItNC4yaDY0LjdjMi4zLDAsNC4yLDEuOSw0LjIsNC4ydjQ2LjcgICBDLTEzOC40LDQyMi43LTE0MC4zLDQyNC42LTE0Mi43LDQyNC42eiBNLTIwNi4yLDQxOS4yaDYyLjN2LTQ0LjNoLTYyLjNWNDE5LjJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnogTS0xNzkuMywzOTcuNGMwLDAsMTkuNi0xNC4xLDE5LjctMTQuMWwtNC41LTYuMiAgICBjLTAuMi0wLjMtMC4yLTAuNi0wLjEtMWMwLjItMC40LDAuNS0wLjYsMC45LTAuNmwxOC0wLjFjMC40LDAsMC43LDAuMSwwLjksMC40YzAuMiwwLjMsMC4yLDAuNSwwLjEsMC45bC01LjgsMTcuMSAgICBjLTAuMSwwLjQtMC40LDAuNy0wLjgsMC43Yy0wLjUsMC0wLjctMC4xLTEtMC40bC00LjMtNmMtMC4xLDAuMS0xOS43LDE0LjEtMTkuNywxNC4xYy0wLjgsMC41'+
			'LTEuOCwwLjQtMi40LTAuNGwtMS41LTIuMSAgICBDLTE4MC4yLDM5OS0xODAsMzk3LjktMTc5LjMsMzk3LjR6Ii8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40YzM0LjQsMCw2Mi40LTI3LjksNjIuNC02Mi40ICAgIFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTEzNC40LDQyMi45YzAsMi42LTIuMSw0LjctNC43LDQuN2gtNzEuOGMtMi42LDAtNC43LTIuMS00LjctNC43di01MS44YzAtMi42LDIuMS00LjcsNC43LTQuN2g3MS44ICAgIGMyLjYsMCw0LjcsMi4xLDQuNyw0LjdWNDIyLj'+
			'l6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQ0LjMsMzc1LjhjLTAuMi0wLjMtMC41LTAuNC0wLjktMC40bC0xOCwwLjFjLTAuNCwwLTAuOCwwLjItMC45LDAuNmMtMC4yLDAuNC0wLjIsMC43LDAuMSwxbDQuNSw2LjIgICBjLTAuMSwwLTE5LjcsMTQuMS0xOS43LDE0LjFjLTAuOCwwLjUtMC45LDEuNi0wLjQsMi40bDEuNSwyLjFjMC41LDAuOCwxLjYsMC45LDIuNCwwLjRjMCwwLDE5LjYtMTQuMSwxOS43LTE0LjFsNC4zLDYgICBjMC4yLDAuMywwLjUsMC40LDEsMC40YzAuNSwwLDAuNy0wLjMsMC44LTAuN2w1LjgtMTcuMUMt'+
			'MTQ0LjEsMzc2LjMtMTQ0LjEsMzc2LTE0NC4zLDM3NS44eiIvPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM5LjEsNDI3LjZoLTcxLjhjLTIuNiwwLTQuNy0yLjEtNC43LTQuN3YtNTEuOGMwLTIuNiwyLjEtNC43LDQuNy00LjdoNzEuOGMyLjYsMCw0LjcsMi4xLDQuNyw0Ljd2NTEuOCAgIEMtMTM0LjQsNDI1LjUtMTM2LjUsNDI3LjYtMTM5LjEsNDI3LjZ6IE0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 31px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style.transition='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.logicBlock_visible();
		me._button_image_fullscreen.onmouseenter=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_fullscreen']=true;
		}
		me._button_image_fullscreen.onmouseleave=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['button_image_fullscreen']=false;
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		me.divSkin.appendChild(me._button_fullscreen);
		el=me._enter_vr=document.createElement('div');
		els=me._enter_vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMwIDEzMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPGcgaWQ9IkViZW5lXzEiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNODcuNSw0NC44SDQyLjVjLTYuNywwLTEwLjQsMS4yLTEyLjQsNGMtMi4zLDMuMi0yLjQsOC40LTIuNCwxNi41YzAsMTEuMSwyLDE2LjYsMy45LDE4LjFjMi44LDIuMSwzLjUsMi41LDgsMi41ICAgIGM0LDAsNS44LTAuOCw4LjEtMS43YzMuMi0xLjMsNy4yLTMsMTcuNC0zYzEwLjQsMCwxNC4zLDEuNywxNy41LDNjMi4yLDAuOSw0LDEuNyw3LjksMS43YzQuNSwwLDUuMi0wLjMsOC0yLjUgICAgYzEuOS0xLjQsMy45LTYuOSwzLjktMTguMWMwLTguMi0wLjItMTMuNC0yLjQtMTYuNUM5Ny45'+
			'LDQ2LDk0LjIsNDQuOCw4Ny41LDQ0Ljh6IE00Ni45LDczLjNjLTUuMywwLTkuNi00LjMtOS42LTkuNiAgICBjMC01LjMsNC4zLTkuNiw5LjYtOS42YzUuMywwLDkuNiw0LjMsOS42LDkuNlM1Mi4xLDczLjMsNDYuOSw3My4zeiBNODAuOCw3My4zYy01LjMsMC05LjYtNC4zLTkuNi05LjZjMC01LjMsNC4zLTkuNiw5LjYtOS42ICAgIGM1LjMsMCw5LjYsNC4zLDkuNiw5LjZTODYuMSw3My4zLDgwLjgsNzMuM3oiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTY1LDlDMzQsOSw4LjksMzQuMSw4LjksNjUuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMUMxMj'+
			'EuMSwzNC4xLDk2LDksNjUsOXogTTU2LjksMjUuNyAgICBjMC0wLjQsMC4yLTAuOCwwLjYtMS4yYzAuNC0wLjQsMC44LTAuNiwxLjQtMC42aDEyLjNjMS40LDAsMiwwLjYsMiwxLjh2MTJINTYuOVYyNS43eiBNMTAxLjgsODcuN2MtMy45LDMtNS44LDMuNi0xMS4zLDMuNiAgICBjLTUsMC03LjYtMS4xLTEwLTIuMWMtMi45LTEuMi02LjEtMi42LTE1LjQtMi42Yy05LjEsMC0xMi40LDEuNC0xNS4zLDIuNmMtMi41LDEtNS4xLDIuMS0xMC4yLDIuMWMtNS42LDAtNy41LTAuNi0xMS4zLTMuNiAgICBjLTQuOS0zLjgtNi0xNC4yLTYtMjIuM2MwLTkuMywwLjItMTUuMiwzLjQtMTkuN2MzLjktNS41LDEx'+
			'LTYuMiwxNi44LTYuMmg0NS4xYzUuNywwLDEyLjgsMC43LDE2LjgsNi4yICAgIGMzLjIsNC41LDMuNSwxMC40LDMuNSwxOS43QzEwNy43LDczLjQsMTA2LjcsODMuOSwxMDEuOCw4Ny43eiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEwNC4zLDQ1LjZjLTMuOS01LjUtMTEtNi4yLTE2LjgtNi4ySDQyLjVjLTUuNywwLTEyLjgsMC43LTE2LjgsNi4yYy0zLjIsNC41LTMuNCwxMC40LTMuNCwxOS43ICAgIGMwLDguMSwxLDE4LjUsNiwyMi4zYzMuOSwzLDUuOCwzLjYsMTEuMywzLjZjNS4xLDAsNy42LTEuMSwxMC4yLTIuMWMyLjktMS4yLDYuMi0yLjYsMTUuMy0yLj'+
			'ZjOS4zLDAsMTIuNSwxLjQsMTUuNCwyLjYgICAgYzIuNSwxLDUsMi4xLDEwLDIuMWM1LjYsMCw3LjUtMC42LDExLjMtMy42YzQuOS0zLjgsNi0xNC4yLDYtMjIuM0MxMDcuNyw1Ni4xLDEwNy41LDUwLjEsMTA0LjMsNDUuNnogTTk4LjUsODMuNCAgICBjLTIuOCwyLjEtMy41LDIuNS04LDIuNWMtMy45LDAtNS43LTAuNy03LjktMS43Yy0zLjItMS4zLTcuMS0zLTE3LjUtM2MtMTAuMSwwLTE0LjEsMS43LTE3LjQsM2MtMi4zLDEtNC4xLDEuNy04LjEsMS43ICAgIGMtNC41LDAtNS4yLTAuMy04LTIuNWMtMS45LTEuNC0zLjktNi45LTMuOS0xOC4xYzAtOC4yLDAuMi0xMy40LDIuNC0xNi41YzItMi44'+
			'LDUuNy00LDEyLjQtNGg0NS4xYzYuNywwLDEwLjQsMS4yLDEyLjQsNCAgICBjMi4zLDMuMiwyLjQsOC40LDIuNCwxNi41QzEwMi4zLDc2LjQsMTAwLjMsODEuOSw5OC41LDgzLjR6Ii8+CiAgIDxjaXJjbGUgY3g9IjQ2LjkiIGN5PSI2My44IiBmaWxsPSIjRkZGRkZGIiByPSI5LjYiLz4KICAgPGNpcmNsZSBjeD0iODAuOCIgY3k9IjYzLjgiIGZpbGw9IiNGRkZGRkYiIHI9IjkuNiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNzMuMSwyNS43YzAtMS4yLTAuNi0xLjgtMi0xLjhINTguOWMtMC42LDAtMSwwLjItMS40LDAuNmMtMC40LDAuNC0wLjYsMC44LTAuNiwxLjJ2MTJoMTYuMkw3My'+
			'4xLDI1LjcgICAgTDczLjEsMjUuN3oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._enter_vr__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._enter_vr__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHhtbDpzcGFjZT0icHJlc2VydmUiIGhlaWdodD0iMTMwcHgiIGVuYWJsZS'+
			'1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEzMCAxMzAiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgdmlld0JveD0iMCAwIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHdpZHRoPSIxMzBweCIgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxnIGlkPSJMYXll'+
			'cl8xIi8+CiA8ZyBpZD0iTGF5ZXJfMiIvPgogPGcgaWQ9IkViZW5lXzEiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNOTAuMDI4LDQyLjU3MUgzOS45NzFjLTcuNDM1LDAtMTEuNTQ3LDEuMzE2LTEzLjc1Myw0LjRjLTIuNTI4LDMuNTM0LTIuNzExLDkuMzAyLTIuNzExLDE4LjM4MiAgICBjMCwxMi4zNTUsMi4yMjQsMTguNDY5LDQuMzA1LDIwLjA3YzMuMDk3LDIuMzg0LDMuODc0LDIuNzI3LDguOTE3LDIuNzI3YzQuNDE2LDAsNi40MzEtMC44MzcsOC45ODEtMS44OTggICAgYzMuNTczLTEuNDg2LDguMDIxLTMuMzM1LDE5LjI5LTMuMzM1YzExLjUyOCwwLDE1LjkzLDEuODYzLD'+
			'E5LjQ2NiwzLjM2MWMyLjQ3MiwxLjA0Niw0LjQyMywxLjg3Myw4LjgwMiwxLjg3MyAgICBjNS4wNDQsMCw1LjgyMS0wLjM0Myw4LjkxOS0yLjcyN2MyLjA4Mi0xLjYwMiw0LjMwNy03LjcxNiw0LjMwNy0yMC4wN2MwLTkuMDc4LTAuMTgzLTE0Ljg0NC0yLjcxNC0xOC4zODEgICAgQzEwMS41NzIsNDMuODg3LDk3LjQ2LDQyLjU3MSw5MC4wMjgsNDIuNTcxeiBNNDQuODQsNzQuMjQ2Yy01Ljg3MSwwLTEwLjYyNy00Ljc1Ni0xMC42MjctMTAuNjI2ICAgIGMwLTUuODY5LDQuNzU2LTEwLjYyNiwxMC42MjctMTAuNjI2YzUuODY5LDAsMTAuNjI1LDQuNzU3LDEwLjYyNSwxMC42MjZDNTUuNDY1LDY5LjQ4'+
			'OSw1MC43MDksNzQuMjQ2LDQ0Ljg0LDc0LjI0NnogICAgIE04Mi41NTEsNzQuMjQ2Yy01Ljg3LDAtMTAuNjI2LTQuNzU2LTEwLjYyNi0xMC42MjZjMC01Ljg2OSw0Ljc1Ni0xMC42MjYsMTAuNjI2LTEwLjYyNmM1Ljg2OSwwLDEwLjYyNiw0Ljc1NywxMC42MjYsMTAuNjI2ICAgIEM5My4xNzcsNjkuNDg5LDg4LjQyLDc0LjI0Niw4Mi41NTEsNzQuMjQ2eiIvPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNjQuOTk5LDIuNzM3QzMwLjU1OCwyLjczNywyLjYzOCwzMC42NTYsMi42MzgsNjUuMWMwLDM0LjQ0MSwyNy45Miw2Mi4zNjIsNjIuMzYxLDYyLjM2MnM2Mi4zNjMtMjcuOTIsNjIuMzYzLT'+
			'YyLjM2MiAgICBDMTI3LjM2MiwzMC42NTYsOTkuNDQsMi43MzcsNjQuOTk5LDIuNzM3eiBNNTUuOTc0LDIxLjI4NWMwLTAuNDQsMC4yMi0wLjg4LDAuNjU5LTEuMzIxYzAuNDQxLTAuNDQsMC44ODItMC42NiwxLjU0MS0wLjY2aDEzLjY1ICAgIGMxLjU0LDAsMi4yMDEsMC42NiwyLjIwMSwxLjk4djEzLjI4Nkg1NS45NzRWMjEuMjg1eiBNMTA1Ljg0Niw5MC4xNzhjLTQuMjkyLDMuMzA0LTYuNDA4LDMuOTcyLTEyLjU3OCwzLjk3MiAgICBjLTUuNTk3LDAtOC40MTUtMS4xOTMtMTEuMTQxLTIuMzQ3Qzc4LjkzMiw5MC40NSw3NS4zMSw4OC45MTcsNjUsODguOTE3Yy0xMC4wNzEsMC0xMy43NDUsMS41'+
			'MjgtMTYuOTg2LDIuODc1ICAgIGMtMi43ODgsMS4xNTktNS42NzEsMi4zNTgtMTEuMjg1LDIuMzU4Yy02LjE3LDAtOC4yODUtMC42NjgtMTIuNTc3LTMuOTczYy01LjQ5Mi00LjIyNy02LjY0NS0xNS44MzMtNi42NDUtMjQuODI1ICAgIGMwLTEwLjI3OCwwLjI1OC0xNi44NzksMy44MzEtMjEuODczYzQuMzgtNi4xMjQsMTIuMjU5LTYuOTA5LDE4LjYzMy02LjkwOWg1MC4wNThjNi4zNzIsMCwxNC4yNDgsMC43ODUsMTguNjMsNi45MDkgICAgYzMuNTc3LDQuOTk4LDMuODM1LDExLjU5NywzLjgzNSwyMS44NzNDMTEyLjQ5Myw3NC4zNDUsMTExLjM0LDg1Ljk1MSwxMDUuODQ2LDkwLjE3OHoiLz4KIC'+
			'A8L2c+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMDguNjU4LDQzLjQ4Yy00LjM4Mi02LjEyNC0xMi4yNTgtNi45MDktMTguNjMtNi45MDlIMzkuOTcxYy02LjM3NCwwLTE0LjI1MywwLjc4NS0xOC42MzMsNi45MDkgICAgYy0zLjU3Myw0Ljk5NC0zLjgzMSwxMS41OTUtMy44MzEsMjEuODczYzAsOC45OTIsMS4xNTIsMjAuNTk4LDYuNjQ1LDI0LjgyNWM0LjI5MiwzLjMwNCw2LjQwNywzLjk3MywxMi41NzcsMy45NzMgICAgYzUuNjE0LDAsOC40OTctMS4xOTksMTEuMjg1LTIuMzU4YzMuMjQxLTEuMzQ4LDYuOTE1LTIuODc1LDE2Ljk4Ni0yLjg3NWMxMC4zMSwwLDEzLjkzMiwx'+
			'LjUzMywxNy4xMjcsMi44ODYgICAgYzIuNzI2LDEuMTU0LDUuNTQ0LDIuMzQ3LDExLjE0MSwyLjM0N2M2LjE3LDAsOC4yODYtMC42NjgsMTIuNTc4LTMuOTcyYzUuNDk0LTQuMjI4LDYuNjQ3LTE1LjgzMyw2LjY0Ny0yNC44MjUgICAgQzExMi40OTMsNTUuMDc3LDExMi4yMzUsNDguNDc4LDEwOC42NTgsNDMuNDh6IE0xMDIuMTg3LDg1LjQyM2MtMy4wOTgsMi4zODQtMy44NzUsMi43MjctOC45MTksMi43MjcgICAgYy00LjM3OSwwLTYuMzMtMC44MjYtOC44MDItMS44NzNDODAuOTMsODQuNzgsNzYuNTI4LDgyLjkxNyw2NSw4Mi45MTdjLTExLjI3LDAtMTUuNzE3LDEuODUtMTkuMjksMy4zMzUgIC'+
			'AgYy0yLjU1MSwxLjA2MS00LjU2NSwxLjg5OC04Ljk4MSwxLjg5OGMtNS4wNDMsMC01LjgyLTAuMzQzLTguOTE3LTIuNzI3Yy0yLjA4MS0xLjYwMi00LjMwNS03LjcxNS00LjMwNS0yMC4wNyAgICBjMC05LjA4LDAuMTgzLTE0Ljg0OCwyLjcxMS0xOC4zODJjMi4yMDYtMy4wODQsNi4zMTgtNC40LDEzLjc1My00LjRoNTAuMDU4YzcuNDMyLDAsMTEuNTQ0LDEuMzE2LDEzLjc1MSw0LjQgICAgYzIuNTMxLDMuNTM3LDIuNzE0LDkuMzA0LDIuNzE0LDE4LjM4MUMxMDYuNDkzLDc3LjcwOCwxMDQuMjY5LDgzLjgyMSwxMDIuMTg3LDg1LjQyM3oiLz4KICAgPGNpcmNsZSBjeD0iNDQuODQiIGN5PSI2My42'+
			'MTkiIGZpbGw9IiNGRkZGRkYiIHI9IjEwLjYyNiIvPgogICA8Y2lyY2xlIGN4PSI4Mi41NTEiIGN5PSI2My42MTkiIGZpbGw9IiNGRkZGRkYiIHI9IjEwLjYyNiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNzQuMDI1LDIxLjI4NWMwLTEuMzIxLTAuNjYxLTEuOTgtMi4yMDEtMS45OGgtMTMuNjVjLTAuNjU5LDAtMS4xLDAuMjE5LTEuNTQxLDAuNjYgICAgYy0wLjQzOSwwLjQ0MS0wLjY1OSwwLjg4LTAuNjU5LDEuMzIxdjEzLjI4NmgxOC4wNTJWMjEuMjg1eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._enter_vr__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="enter_vr";
		el.ggDx=-129;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 78px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) - 129px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._enter_vr.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._enter_vr.style.transition='';
				if (me._enter_vr.ggCurrentLogicStateVisible == 0) {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
				else {
					me._enter_vr.style.visibility="hidden";
					me._enter_vr.ggVisible=false;
				}
			}
		}
		me._enter_vr.logicBlock_visible();
		me._enter_vr.onclick=function (e) {
			player.enterVR();
		}
		me._enter_vr.onmouseenter=function (e) {
			me._enter_vr__img.style.visibility='hidden';
			me._enter_vr__imgo.style.visibility='inherit';
			me.elementMouseOver['enter_vr']=true;
		}
		me._enter_vr.onmouseleave=function (e) {
			me._enter_vr__img.style.visibility='inherit';
			me._enter_vr__imgo.style.visibility='hidden';
			me.elementMouseOver['enter_vr']=false;
		}
		me._enter_vr.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._enter_vr);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((210px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading.onclick=function (e) {
			me._loading.style.transition='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 58px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 208px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var params = [];
			params.push(player._(String((player.getPercentLoaded()*100.0).toFixed(0))));
			var hs = player._("Loading... %1%", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loadingtext.ggUpdateText();
		});
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #808080;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 12px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 181px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbar);
		me.divSkin.appendChild(me._loading);
		el=me._thumbnail_menu_phone=document.createElement('div');
		el.ggId="thumbnail_menu_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 95.8333%;';
		hs+='left : 3px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : 96.875%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(3px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu_phone') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu_phone.style.transition='opacity 300ms ease 0ms';
				if (me._thumbnail_menu_phone.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu_phone.style.visibility=me._thumbnail_menu_phone.ggVisible?'inherit':'hidden';
					me._thumbnail_menu_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_menu_phone.style.opacity == 0.0) { me._thumbnail_menu_phone.style.visibility="hidden"; } }, 305);
					me._thumbnail_menu_phone.style.opacity=0;
				}
			}
		}
		me._thumbnail_menu_phone.logicBlock_alpha();
		me._thumbnail_menu_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu_phone', false);
		}
		me._close_popup_phone.onmouseenter=function (e) {
			me.elementMouseOver['close_popup_phone']=true;
			me._btn_close_popup_phone.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone.onmouseleave=function (e) {
			me.elementMouseOver['close_popup_phone']=false;
			me._btn_close_popup_phone.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone=document.createElement('div');
		els=me._btn_close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5Mj0iMjQiIHgyPSI4IiB5MT0iOCIgeDE9IjI0IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB5Mj0iMjQiIHgyPSIyNCIgeTE9IjgiIHgxPSI4IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone.style.transition='';
				if (me._btn_close_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone.style.visibility="hidden";
					me._btn_close_popup_phone.ggVisible=false;
				}
				else {
					me._btn_close_popup_phone.style.visibility=(Number(me._btn_close_popup_phone.style.opacity)>0||!me._btn_close_popup_phone.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone.ggVisible=true;
				}
			}
		}
		me._btn_close_popup_phone.logicBlock_visible();
		me._btn_close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone);
		el=me._btn_close_popup_phone_active=document.createElement('div');
		els=me._btn_close_popup_phone_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5Mj0iMjQiIHgyPSI4IiB5MT0iOCIgY2xhc3M9InN0MCIgeDE9IjI0Ii8+CiA8bGluZSB5Mj0iMjQiIHgyPSIyNCIgeTE9IjgiIGNsYXNzPSJzdDAiIHgxPSI4Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone_active.style.transition='';
				if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone_active.style.visibility=(Number(me._btn_close_popup_phone_active.style.opacity)>0||!me._btn_close_popup_phone_active.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone_active.ggVisible=true;
				}
				else {
					me._btn_close_popup_phone_active.style.visibility="hidden";
					me._btn_close_popup_phone_active.ggVisible=false;
				}
			}
		}
		me._btn_close_popup_phone_active.logicBlock_visible();
		me._btn_close_popup_phone_active.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone_active);
		me._thumbnail_menu_phone.appendChild(me._close_popup_phone);
		el=me._thumbnail_scroller_phone=document.createElement('div');
		els=me._thumbnail_scroller_phone__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 129px;';
		hs+='left : 50%;';
		hs+='margin-left : -59.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 119px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_scroller_phone.ggScrollByX = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosX = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft + diffX);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
		}
		me._thumbnail_scroller_phone.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_scroller_phone.ggScrollPosX >= me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_scroller_phone.ggScrollPosX <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollByY = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosY = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop + diffY);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
		}
		me._thumbnail_scroller_phone.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_scroller_phone.ggScrollPosY >= me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_scroller_phone.ggScrollPosY <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_scroller_phone.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_scroller_phone__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_scroller_phone.ggDragInertiaX *= 0.96;
				me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
				me._thumbnail_scroller_phone.ggScrollByX(me._thumbnail_scroller_phone.ggDragInertiaX);
				me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
				if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_scroller_phone__content.onmouseup = null;
			me._thumbnail_scroller_phone__content.onmousemove = null;
			me._thumbnail_scroller_phone__content.ontouchend = null;
			me._thumbnail_scroller_phone__content.ontouchmove = null;
			me._thumbnail_scroller_phone__content.onpointerup = null;
			me._thumbnail_scroller_phone__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_scroller_phone.ggIsDragging = false; }, 100);
		}
		me._thumbnail_scroller_phone__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_scroller_phone.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_scroller_phone.ggDragStartY) > 10) me._thumbnail_scroller_phone.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_scroller_phone.ggDragLastX) * me._thumbnail_scroller_phone.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_scroller_phone.ggDragLastY) * me._thumbnail_scroller_phone.ggVPercentVisible;
			me._thumbnail_scroller_phone.ggDragInertiaX = -diffX;
			me._thumbnail_scroller_phone.ggDragInertiaY = -diffY;
			me._thumbnail_scroller_phone.ggDragLastX = eventX;
			me._thumbnail_scroller_phone.ggDragLastY = eventY;
			me._thumbnail_scroller_phone.ggScrollByX(-diffX);
			me._thumbnail_scroller_phone.ggScrollByY(-diffY);
		}
		me._thumbnail_scroller_phone__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastX = me._thumbnail_scroller_phone.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller_phone.ggDragLastY = me._thumbnail_scroller_phone.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller_phone__content.onmouseup = me._thumbnail_scroller_phone__content.mousetouchend;
			me._thumbnail_scroller_phone__content.ontouchend = me._thumbnail_scroller_phone__content.mousetouchend;
			me._thumbnail_scroller_phone__content.onmousemove = me._thumbnail_scroller_phone__content.mousetouchmove;
			me._thumbnail_scroller_phone__content.ontouchmove = me._thumbnail_scroller_phone__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_scroller_phone__content.onpointerup = me._thumbnail_scroller_phone__content.ontouchend;
				me._thumbnail_scroller_phone__content.onpointermove = me._thumbnail_scroller_phone__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_scroller_phone__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_scroller_phone__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_scroller_phone__content.mousetouchstart;
		}
		elVertScrollBg = me._thumbnail_scroller_phone__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 381.417px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_scroller_phone__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 381.417px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_scroller_phone.ggScrollPosY = 0;
		me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if (e.offsetY < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_scroller_phone.ggScrollByYSmooth(30 * me._thumbnail_scroller_phone.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_scroller_phone__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_scroller_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 82.9167%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_phone.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 8;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (8/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_scroller_phone.ggScrollPosY / me._thumbnail_scroller_phone.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight - 8) || (!me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone.ggVertScrollVisible = true;
				} else {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone.ggVertScrollVisible = false;
				}
				if(me._thumbnail_scroller_phone.ggVertScrollVisible) {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth - 8;
					if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight - 8;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height - me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_scroller_phone__vertScrollBg.style.height = me._thumbnail_scroller_phone.ggAvailableHeight + 'px';
					me._thumbnail_scroller_phone.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_scroller_phone.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_scroller_phone.ggVPercentVisible > 1.0) me._thumbnail_scroller_phone.ggVPercentVisible = 1.0;
					me._thumbnail_scroller_phone.ggScrollHeight =  Math.round(me._thumbnail_scroller_phone__vertScrollBg.offsetHeight * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone__vertScrollFg.style.height = me._thumbnail_scroller_phone.ggScrollHeight + 'px';
					me._thumbnail_scroller_phone.ggScrollPosY = me._thumbnail_scroller_phone.ggScrollPosYPercent * me._thumbnail_scroller_phone.ggAvailableHeight;
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
					if (me._thumbnail_scroller_phone.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
						me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth;
					me._thumbnail_scroller_phone.ggScrollPosY = 0;
					me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
					me._thumbnail_scroller_phone__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_scroller_phone.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_scroller_phone.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_scroller_phone);
					me._thumbnail_scroller_phone.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 120;
		el.ggHeight = 130;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_phone.ggUpdating == true) return;
			me._node_cloner_phone.ggUpdating = true;
			var el=me._node_cloner_phone;
			var curNumCols = 0;
			var parentWidth = me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner_phone.parentNode.parentNode.ggAvailableWidth : me._node_cloner_phone.parentNode.parentNode.clientWidth) : me._node_cloner_phone.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner_phone.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner_phone.offsetLeft) * me._node_cloner_phone.ggNumRepeat / 100.0) / me._node_cloner_phone.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_phone.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_phone.getFilteredNodes(tourNodes, filter);
			me._node_cloner_phone.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_phone.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_phone.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_phone.ggWidth) + 'px';
				parameter.width=me._node_cloner_phone.ggWidth + 'px';
				parameter.height=me._node_cloner_phone.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_phone_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner_phone.ggNodeCount = me._node_cloner_phone.ggNumFilterPassed;
			me._node_cloner_phone.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_phone.parentNode && me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_phone.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 130px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner_phone.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_phone.childNodes.length; i++) {
				var child=me._node_cloner_phone.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_phone.ggUpdatePosition=function (useTransition) {
			me._node_cloner_phone.ggUpdate();
		}
		me._thumbnail_scroller_phone__content.appendChild(me._node_cloner_phone);
		me._thumbnail_menu_phone.appendChild(me._thumbnail_scroller_phone);
		me.divSkin.appendChild(me._thumbnail_menu_phone);
		el=me._button_zoom=document.createElement('div');
		el.ggId="button_zoom";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_zoom.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_zoom.ggUpdatePosition=function (useTransition) {
		}
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8cGF0aCBmaW'+
			'xsPSIjRkZGRkZGIiBkPSJNLTE0My4yLDM4Ny41YzEuMSwwLDEuNiwwLjUsMS42LDEuOHYxNS41YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTYzLjUgIGMtMC40LDAtMC43LTAuMi0xLjEtMC41Yy0wLjQtMC40LTAuNS0wLjctMC41LTEuM3YtMTUuNWMwLTEuMywwLjUtMS44LDEuNi0xLjhILTE0My4yeiIvPgogPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6ICAgTS0xNDEuNiw0MDQu'+
			'N2MwLDAuNS0wLjIsMC45LTAuNSwxLjNjLTAuNCwwLjQtMC43LDAuNS0xLjEsMC41aC02My41Yy0wLjQsMC0wLjctMC4yLTEuMS0wLjVjLTAuNC0wLjQtMC41LTAuNy0wLjUtMS4zdi0xNS41ICBjMC0xLjMsMC41LTEuOCwxLjYtMS44aDYzLjVjMS4xLDAsMS42LDAuNSwxLjYsMS44VjQwNC43eiIvPgo8L3N2Zz4K';
		me._zoomout__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8cGF0aCBmaW'+
			'xsPSIjRkZGRkZGIiBkPSJNLTEzOS43LDM4Ni40YzEuMiwwLDEuOCwwLjYsMS44LDJ2MTcuMmMwLDAuNi0wLjIsMS0wLjYsMS40Yy0wLjQsMC40LTAuOCwwLjYtMS4yLDAuNmgtNzAuNiAgYy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZjLTAuNC0wLjQtMC42LTAuOC0wLjYtMS40di0xNy4yYzAtMS40LDAuNi0yLDEuOC0ySC0xMzkuN3oiLz4KIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjRTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogICBNLTEzNy45LDQwNS42YzAs'+
			'MC42LTAuMiwxLTAuNiwxLjRjLTAuNCwwLjQtMC44LDAuNi0xLjIsMC42aC03MC42Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZzLTAuNi0wLjgtMC42LTEuNHYtMTcuMiAgYzAtMS40LDAuNi0yLDEuOC0yaDcwLjZjMS4yLDAsMS44LDAuNiwxLjgsMlY0MDUuNnoiLz4KPC9zdmc+Cg==';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 143px;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.onmouseenter=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomout']=true;
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.onmouseleave=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
		}
		me._zoomout.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['zoomout']) {
				player.changeFovLog(0.5,true);
			}
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
		}
		me._button_zoom.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6ICAgIE0tMTQxLjYsNDA0LjdjMCwwLjUtMC4yLDAuOS0wLjUsMS4zYy0wLjQsMC40LTAuNywwLjUtMS4xLDAuNWgtMjIuM3YyMi4xYzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTE1LjcgICBjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTIyLjFoLTIyLjNjLTAuNCwwLTAu'+
			'Ny0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjUgICBjMC0xLjMsMC41LTEuOCwxLjYtMS44aDIyLjN2LTIyLjFjMC0xLjMsMC41LTEuOCwxLjYtMS44aDE1LjdjMS4xLDAsMS42LDAuNSwxLjYsMS44djIyLjFoMjIuM2MxLjEsMCwxLjYsMC41LDEuNiwxLjggICBDLTE0MS42LDM4OS4zLTE0MS42LDQwNC43LTE0MS42LDQwNC43eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTY1LjUsMzg3LjVoMjIuM2MxLjEsMCwxLjYsMC41LDEuNiwxLjh2MTUuNWMwLDAuNS0wLjIsMC45LTAuNSwxLjNjLTAuNCwwLjQtMC43LD'+
			'AuNS0xLjEsMC41aC0yMi4zdjIyLjEgICBjMCwwLjUtMC4yLDAuOS0wLjUsMS4zYy0wLjQsMC40LTAuNywwLjUtMS4xLDAuNWgtMTUuN2MtMC40LDAtMC43LTAuMi0xLjEtMC41Yy0wLjQtMC40LTAuNS0wLjctMC41LTEuM3YtMjIuMWgtMjIuMyAgIGMtMC40LDAtMC43LTAuMi0xLjEtMC41Yy0wLjQtMC40LTAuNS0wLjctMC41LTEuM3YtMTUuNWMwLTEuMywwLjUtMS44LDEuNi0xLjhoMjIuM3YtMjIuMWMwLTEuMywwLjUtMS44LDEuNi0xLjhoMTUuNyAgIGMxLjEsMCwxLjYsMC41LDEuNiwxLjhWMzg3LjV6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._zoomin__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiAgICBNLTEzNy45LDQwNS42YzAsMC42LTAuMiwxLTAuNiwxLjRjLTAuNCwwLjQtMC44LDAuNi0xLjIsMC42aC0yNC44djI0LjZjMCwwLjYtMC4yLDEtMC42LDEuNHMtMC44LDAuNi0xLjIsMC42aC0xNy40ICAgYy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZjLTAuNC0wLjQtMC42LTAuOC0wLjYtMS40di0yNC42aC0yNC44Yy0wLjQsMC0wLjgtMC4yLTEu'+
			'Mi0wLjZzLTAuNi0wLjgtMC42LTEuNHYtMTcuMmMwLTEuNCwwLjYtMiwxLjgtMiAgIGgyNC44di0yNC42YzAtMS40LDAuNi0yLDEuOC0yaDE3LjRjMS4yLDAsMS44LDAuNiwxLjgsMnYyNC42aDI0LjhjMS4yLDAsMS44LDAuNiwxLjgsMkMtMTM3LjksMzg4LjQtMTM3LjksNDA1LjYtMTM3LjksNDA1LjZ6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjQuNSwzODYuNGgyNC44YzEuMiwwLDEuOCwwLjYsMS44LDJ2MTcuMmMwLDAuNi0wLjIsMS0wLjYsMS40Yy0wLjQsMC40LTAuOCwwLjYtMS4yLDAuNmgtMjQuOHYyNC42ICAgYzAsMC42LTAuMi'+
			'wxLTAuNiwxLjRzLTAuOCwwLjYtMS4yLDAuNmgtMTcuNGMtMC40LDAtMC44LTAuMi0xLjItMC42Yy0wLjQtMC40LTAuNi0wLjgtMC42LTEuNHYtMjQuNmgtMjQuOGMtMC40LDAtMC44LTAuMi0xLjItMC42ICAgcy0wLjYtMC44LTAuNi0xLjR2LTE3LjJjMC0xLjQsMC42LTIsMS44LTJoMjQuOHYtMjQuNmMwLTEuNCwwLjYtMiwxLjgtMmgxNy40YzEuMiwwLDEuOCwwLjYsMS44LDJWMzg2LjR6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 111px;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.onmouseenter=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomin']=true;
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.onmouseleave=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
		}
		me._zoomin.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['zoomin']) {
				player.changeFovLog(-0.5,true);
			}
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
		}
		me._button_zoom.appendChild(me._zoomin);
		me.divSkin.appendChild(me._button_zoom);
		el=me._gyro=document.createElement('div');
		el.ggId="gyro";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gyro.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._gyro.ggUpdatePosition=function (useTransition) {
		}
		el=me._gyro_on=document.createElement('div');
		els=me._gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMwIDEzMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPGcgaWQ9IkxheWVyXzFfMV8iLz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTEwMy41LDU5LjRjLTEuOS0xLjktNC45LTMuOC04LjYtNS40Yy00LjEtMS44LTkuMi0zLjItMTQuOS00LjFjMS4yLDMuNiwyLjMsNy41LDMuMSwxMS42YzEuMSw1LjYsMS42LDExLDEuNywxNS45ICAgIGMtMC41LDAuMS0wLjksMC4yLTEuNCwwLjNjLTEsMC4yLTIsMC40LTMuMSwwLjZjMC0wLjEsMC0wLjMsMC0wLjRjMC00LjgtMC41LTEwLjEtMS42LTE1LjVjLTAuOS00LjctMi4yLTkuMS0zLjctMTMuMSAgICBjLTMuMi0wLjMtNi41LTAuNS0x'+
			'MC0wLjVsLTAuOS00LjVjMC4zLDAsMC42LDAsMC45LDBjMi43LDAsNS40LDAuMSw4LDAuM2MtMi4xLTQuNC00LjQtOC4xLTYuOC0xMC42Yy0xLjctMS44LTMuNC0zLTQuOC0zLjYgICAgYy0wLjctMC4zLTEuMy0wLjQtMS45LTAuNWw2LjksMzQuOWwyLjksMTQuN2MtMC45LDAtMS44LDAuMS0yLjcsMC4xbC0yLjgtMTQuMmwtNi45LTM0LjljLTAuNiwwLjMtMS4yLDAuNy0xLjgsMS40ICAgIGMtMSwxLTEuOSwyLjYtMi43LDQuNWMtMS42LDMuOS0yLjUsOS41LTIuNSwxNS45YzAsNC44LDAuNSwxMC4xLDEuNiwxNS41bDAsMGMwLjksNC43LDIuMiw5LjEsMy43LDEzLjFjMy4yLDAuMyw2LjUsMC41LD'+
			'EwLDAuNSAgICBjNy43LDAsMTQuOS0wLjksMjEuMS0yLjRjNi4yLTEuNSwxMS4zLTMuNywxNC44LTYuMWMyLjMtMS42LDMuOS0zLjQsNC43LTVjMC40LTAuOSwwLjctMS44LDAuNy0yLjhjMC0wLjktMC4yLTEuOC0wLjctMi44ICAgIEMxMDUuMSw2MS4zLDEwNC40LDYwLjMsMTAzLjUsNTkuNHogTTUxLjYsNDkuNmMwLjEtMS42LDAuMi0zLjEsMC40LTQuNmMxLjktMC4yLDMuOC0wLjQsNS44LTAuNmwwLjksNC41ICAgIEM1Ni4yLDQ5LjEsNTMuOCw0OS4zLDUxLjYsNDkuNnoiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTY1LDguOUMzNCw4LjksOC45LDM0LDguOSw2NWMwLDMxLDI1LjEs'+
			'NTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xQzEyMS4xLDM0LDk2LDguOSw2NSw4Ljl6IE0xMDYuNyw3My44ICAgIGMtMi41LDIuNS01LjksNC42LTEwLDYuNGMtOC4yLDMuNS0xOS40LDUuNi0zMS42LDUuNmMtMi43LDAtNS40LTAuMS04LTAuM2MyLjEsNC40LDQuNCw4LjEsNi44LDEwLjZjMS43LDEuOCwzLjQsMyw0LjgsMy42ICAgIGMwLjcsMC4zLDEuNCwwLjQsMiwwLjVsLTIuNS0xMi42YzAuOSwwLDEuOC0wLjEsMi43LTAuMWwyLjQsMTIuMmMwLjYtMC4zLDEuMi0wLjcsMS44LTEuM2MxLTEsMS45LTIuNiwyLjctNC41ICAgIGMwLjgtMiwxLjQtNC40LDEuOS03LjJjMS'+
			'0wLjEsMi0wLjMsMy0wLjVjMC42LTAuMSwxLjEtMC4yLDEuNi0wLjNjLTAuMywyLjEtMC42LDQuMS0xLjEsNS45Yy0xLjEsNC0yLjYsNy4zLTQuOSw5LjcgICAgYy0xLjUsMS42LTMuNCwyLjctNS41LDMuMWwwLDBjLTAuNiwwLjEtMS4yLDAuMi0xLjgsMC4yYy0xLjQsMC0yLjgtMC4zLTQuMS0wLjhjLTEuMy0wLjUtMi42LTEuMy0zLjgtMi4zICAgIGMtMi40LTEuOS00LjctNC41LTYuNy03LjhjLTEuNy0yLjYtMy4yLTUuNi00LjYtOC45Yy0zLjItMC40LTYuMi0xLTktMS43Yy02LjYtMS42LTEyLjItMy45LTE2LjMtNi44Yy0yLjgtMS45LTQuOS00LjItNi4yLTYuNyAgICBjLTAuNy0xLjUtMS4x'+
			'LTMuMS0xLjEtNC43YzAtMS42LDAuNC0zLjIsMS4xLTQuN2MwLjctMS41LDEuNy0yLjgsMy00LjFjMi41LTIuNSw1LjktNC42LDEwLTYuNGMzLjEtMS4zLDYuNS0yLjQsMTAuMy0zLjMgICAgYy0wLjEsMS41LTAuMiwzLjEtMC4yLDQuN2MtNiwxLjUtMTEsMy42LTE0LjQsNmMtMi4zLDEuNi0zLjksMy40LTQuNyw1Yy0wLjQsMC45LTAuNywxLjgtMC43LDIuOGgwYzAsMC45LDAuMiwxLjgsMC43LDIuOCAgICBjMC41LDAuOSwxLjEsMS45LDIuMSwyLjljMS45LDEuOSw0LjksMy44LDguNiw1LjRjNC4xLDEuOCw5LjIsMy4yLDE0LjksNC4xYy0xLjItMy42LTIuMy03LjUtMy4xLTExLjYgICAgYy0xLj'+
			'EtNS43LTEuNy0xMS4zLTEuNy0xNi40YzAtNS4xLDAuNS05LjgsMS42LTEzLjhjMS4xLTQsMi42LTcuMyw0LjktOS43YzEuNS0xLjYsMy40LTIuNyw1LjUtMy4xdjBjMC42LTAuMSwxLjItMC4yLDEuOC0wLjIgICAgYzEuNCwwLDIuOCwwLjMsNC4xLDAuOGMxLjMsMC41LDIuNiwxLjMsMy44LDIuM2MyLjQsMS45LDQuNyw0LjUsNi43LDcuOGMxLjcsMi42LDMuMiw1LjYsNC42LDguOWMzLjIsMC40LDYuMiwxLDksMS43ICAgIGM2LjYsMS42LDEyLjIsMy45LDE2LjMsNi44YzIuOCwxLjksNC45LDQuMiw2LjEsNi43YzAuNywxLjUsMS4xLDMuMSwxLjEsNC43YzAsMS42LTAuNCwzLjItMS4xLDQuNyAg'+
			'ICBDMTA4LjksNzEuMiwxMDcuOSw3Mi42LDEwNi43LDczLjh6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNTIsNDVjLTAuMiwxLjQtMC4zLDMtMC40LDQuNmMyLjMtMC4zLDQuNi0wLjYsNy0wLjdsLTAuOS00LjVDNTUuOCw0NC42LDUzLjgsNDQuOCw1Miw0NXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEwOS42LDYwLjNjLTEuMi0yLjYtMy40LTQuOC02LjEtNi43Yy00LjEtMi45LTkuNy01LjItMTYuMy02LjhjLTIuOC0wLjctNS45LTEuMi05LTEuNyAgICBjLTEuNC0zLjMtMi45LTYuMy00LjYtOC45Yy0yLjEtMy4yLTQuMy01LjktNi43LTcuOG'+
			'MtMS4yLTEtMi41LTEuNy0zLjgtMi4zYy0xLjMtMC41LTIuNy0wLjgtNC4xLTAuOGMtMC42LDAtMS4yLDAuMS0xLjgsMC4ydjAgICAgYy0yLjEsMC40LTQsMS42LTUuNSwzLjFjLTIuMywyLjQtMy44LDUuNy00LjksOS43Yy0xLjEsNC0xLjYsOC43LTEuNiwxMy44YzAsNS4xLDAuNSwxMC43LDEuNywxNi40YzAuOCw0LjEsMS45LDgsMy4xLDExLjYgICAgYy01LjctMC45LTEwLjgtMi4zLTE0LjktNC4xYy0zLjctMS42LTYuNy0zLjUtOC42LTUuNGMtMS0xLTEuNy0xLjktMi4xLTIuOWMtMC40LTAuOS0wLjctMS44LTAuNy0yLjhoMGMwLTAuOSwwLjItMS44LDAuNy0yLjggICAgYzAuOC0xLjYsMi4z'+
			'LTMuNCw0LjctNWMzLjQtMi40LDguNC00LjUsMTQuNC02YzAtMS42LDAuMS0zLjIsMC4yLTQuN2MtMy44LDAuOS03LjIsMi0xMC4zLDMuM2MtNC4xLDEuOC03LjUsMy45LTEwLDYuNCAgICBjLTEuMiwxLjMtMi4zLDIuNi0zLDQuMWMtMC43LDEuNS0xLjEsMy4xLTEuMSw0LjdjMCwxLjYsMC40LDMuMiwxLjEsNC43YzEuMiwyLjYsMy40LDQuOCw2LjIsNi43YzQuMSwyLjksOS43LDUuMiwxNi4zLDYuOCAgICBjMi44LDAuNyw1LjksMS4zLDksMS43YzEuNCwzLjMsMi45LDYuMyw0LjYsOC45YzIuMSwzLjIsNC4zLDUuOSw2LjcsNy44YzEuMiwxLDIuNSwxLjcsMy44LDIuM2MxLjMsMC41LDIuNywwLj'+
			'gsNC4xLDAuOCAgICBjMC42LDAsMS4yLTAuMSwxLjgtMC4ybDAsMGMyLjEtMC40LDQtMS42LDUuNS0zLjFjMi4zLTIuNCwzLjgtNS43LDQuOS05LjdjMC41LTEuOCwwLjktMy44LDEuMS01LjljLTAuNSwwLjEtMS4xLDAuMi0xLjYsMC4zICAgIGMtMSwwLjItMiwwLjMtMywwLjVjLTAuNCwyLjctMS4xLDUuMi0xLjksNy4yYy0wLjgsMi0xLjcsMy41LTIuNyw0LjVjLTAuNiwwLjYtMS4yLDEtMS44LDEuM2wtMi40LTEyLjJjLTAuOSwwLTEuOCwwLjEtMi43LDAuMSAgICBsMi41LDEyLjZjLTAuNiwwLTEuMy0wLjItMi0wLjVjLTEuNS0wLjYtMy4yLTEuOC00LjgtMy42Yy0yLjQtMi41LTQuNy02LjEt'+
			'Ni44LTEwLjZjMi42LDAuMiw1LjMsMC4zLDgsMC4zICAgIGMxMi4zLDAsMjMuNC0yLjEsMzEuNi01LjZjNC4xLTEuOCw3LjUtMy45LDEwLTYuNGMxLjItMS4zLDIuMy0yLjYsMy00LjFjMC43LTEuNSwxLjEtMy4xLDEuMS00LjcgICAgQzExMC44LDYzLjQsMTEwLjQsNjEuOCwxMDkuNiw2MC4zeiBNMTA1LjYsNjcuOGMtMC44LDEuNi0yLjMsMy40LTQuNyw1Yy0zLjUsMi41LTguNiw0LjYtMTQuOCw2LjFjLTYuMiwxLjUtMTMuNCwyLjQtMjEuMSwyLjQgICAgYy0zLjQsMC02LjgtMC4yLTEwLTAuNWMtMS41LTQtMi44LTguNC0zLjctMTMuMWwwLDBjLTEuMS01LjUtMS42LTEwLjctMS42LTE1LjVjMC'+
			'02LjQsMC45LTEyLDIuNS0xNS45YzAuOC0yLDEuNy0zLjUsMi43LTQuNSAgICBjMC42LTAuNiwxLjItMS4xLDEuOC0xLjRsNi45LDM0LjlsMi44LDE0LjJjMC45LDAsMS44LDAsMi43LTAuMWwtMi45LTE0LjdsLTYuOS0zNC45YzAuNiwwLDEuMywwLjIsMS45LDAuNSAgICBjMS41LDAuNiwzLjIsMS44LDQuOCwzLjZjMi40LDIuNSw0LjcsNi4xLDYuOCwxMC42Yy0yLjYtMC4yLTUuMy0wLjMtOC0wLjNjLTAuMywwLTAuNiwwLTAuOSwwbDAuOSw0LjVjMy40LDAsNi44LDAuMiwxMCwwLjUgICAgYzEuNSw0LDIuOCw4LjQsMy43LDEzLjFjMS4xLDUuNSwxLjYsMTAuNywxLjYsMTUuNWMwLDAuMiwwLDAu'+
			'MywwLDAuNGMxLjEtMC4yLDIuMS0wLjQsMy4xLTAuNmMwLjUtMC4xLDAuOS0wLjIsMS40LTAuMyAgICBjMC01LTAuNi0xMC40LTEuNy0xNS45Yy0wLjgtNC4xLTEuOS04LTMuMS0xMS42YzUuNywwLjksMTAuNywyLjMsMTQuOSw0LjFjMy43LDEuNiw2LjcsMy41LDguNiw1LjRjMSwxLDEuNywxLjksMi4xLDIuOSAgICBjMC40LDAuOSwwLjcsMS44LDAuNywyLjhDMTA2LjIsNjUuOSwxMDYsNjYuOCwxMDUuNiw2Ny44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMwIDEzMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPGcgaWQ9IkxheWVyXzFfMV8iLz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTEwNy44LDU4LjdjLTIuMS0yLjEtNS40LTQuMi05LjYtNmMtNC42LTItMTAuMi0zLjUtMTYuNS00LjVjMS40LDQsMi41LDguMywzLjQsMTIuOGMxLjIsNi4yLDEuOCwxMi4yLDEuOSwxNy43ICAgIGMtMC41LDAuMS0xLDAuMi0xLjYsMC4zYy0xLjEsMC4yLTIuMywwLjQtMy40LDAuNmMwLTAuMiwwLTAuMywwLTAuNWMwLTUuMy0wLjYtMTEuMi0xLjgtMTcuM2MtMS01LjItMi40LTEwLjEtNC4xLTE0LjUgICAgYy0zLjYtMC40LTcuMy0wLjYtMTEu'+
			'MS0wLjZsLTEtNWMwLjMsMCwwLjcsMCwxLDBjMywwLDYsMC4xLDguOSwwLjRjLTIuMy00LjktNC45LTktNy41LTExLjdjLTEuOS0yLTMuNy0zLjMtNS40LTQgICAgYy0wLjgtMC4zLTEuNS0wLjUtMi4yLTAuNWw3LjcsMzguOEw2OS43LDgxYy0xLDAtMiwwLjEtMywwLjFsLTMuMS0xNS44bC03LjctMzguN2MtMC43LDAuMy0xLjMsMC44LTIsMS41Yy0xLjEsMS4yLTIuMiwyLjktMyw1ICAgIEM0OS4xLDM3LjUsNDgsNDMuNiw0OCw1MC44YzAsNS4zLDAuNiwxMS4yLDEuOCwxNy4ybDAsMGMxLDUuMiwyLjQsMTAuMSw0LjEsMTQuNWMzLjYsMC40LDcuMywwLjYsMTEuMSwwLjZjOC42LDAsMTYuNi0xLD'+
			'IzLjUtMi43ICAgIGM2LjktMS43LDEyLjYtNC4xLDE2LjQtNi44YzIuNi0xLjgsNC4zLTMuNyw1LjItNS42YzAuNS0xLDAuNy0yLDAuNy0zLjFjMC0xLTAuMi0yLTAuNy0zLjFDMTA5LjYsNjAuOSwxMDguOCw1OS44LDEwNy44LDU4Ljd6ICAgICBNNTAuMSw0Ny45YzAuMS0xLjgsMC4yLTMuNSwwLjQtNS4xYzIuMS0wLjMsNC4yLTAuNSw2LjQtMC42bDEsNC45QzU1LjIsNDcuMyw1Mi42LDQ3LjYsNTAuMSw0Ny45eiIvPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNjUsMi42QzMwLjYsMi42LDIuNiwzMC42LDIuNiw2NWMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0y'+
			'Ny45LDYyLjQtNjIuNEMxMjcuNCwzMC42LDk5LjQsMi42LDY1LDIuNnogICAgIE0xMTEuMyw3NC44Yy0yLjgsMi44LTYuNiw1LjEtMTEuMiw3LjFDOTEsODUuOCw3OC42LDg4LjEsNjUsODguMWMtMywwLTYtMC4xLTguOS0wLjNjMi4zLDQuOSw0LjksOSw3LjUsMTEuNyAgICBjMS45LDIsMy43LDMuMyw1LjQsNGMwLjgsMC4zLDEuNSwwLjUsMi4yLDAuNWwtMi44LTE0YzEsMCwyLTAuMSwzLTAuMWwyLjcsMTMuNWMwLjctMC4zLDEuMy0wLjgsMi0xLjVjMS4xLTEuMiwyLjItMi45LDMtNSAgICBjMC45LTIuMiwxLjYtNC45LDIuMS04YzEuMS0wLjIsMi4zLTAuMywzLjMtMC41YzAuNi0wLjEsMS4yLT'+
			'AuMiwxLjgtMC40Yy0wLjMsMi4zLTAuNyw0LjUtMS4yLDYuNWMtMS4yLDQuNC0yLjksOC4xLTUuNCwxMC44ICAgIGMtMS43LDEuOC0zLjcsMy02LjEsMy41bDAsMGMtMC43LDAuMS0xLjMsMC4yLTIsMC4yYy0xLjUsMC0zLjEtMC4zLTQuNS0wLjljLTEuNS0wLjYtMi45LTEuNC00LjItMi41Yy0yLjctMi4xLTUuMi01LTcuNS04LjYgICAgYy0xLjgtMi45LTMuNi02LjItNS4xLTkuOWMtMy41LTAuNS02LjktMS4xLTEwLTEuOUMzMyw4My41LDI2LjgsODEsMjIuMiw3Ny43Yy0zLjEtMi4yLTUuNC00LjYtNi44LTcuNWMtMC44LTEuNi0xLjItMy40LTEuMi01LjIgICAgYzAtMS44LDAuNC0zLjYsMS4y'+
			'LTUuMmMwLjgtMS42LDEuOS0zLjIsMy4zLTQuNWMyLjgtMi44LDYuNi01LjEsMTEuMi03LjFjMy40LTEuNSw3LjMtMi43LDExLjUtMy43Yy0wLjEsMS43LTAuMiwzLjQtMC4zLDUuMiAgICBjLTYuNiwxLjctMTIuMiw0LTE2LDYuN2MtMi42LDEuOC00LjMsMy43LTUuMiw1LjZjLTAuNSwxLTAuNywyLTAuNywzLjFoMGMwLDEsMC4yLDIsMC43LDMuMWMwLjUsMSwxLjMsMi4xLDIuMywzLjIgICAgYzIuMSwyLjEsNS40LDQuMiw5LjYsNmM0LjYsMiwxMC4yLDMuNSwxNi41LDQuNWMtMS40LTQtMi41LTguMy0zLjQtMTIuOEM0My42LDYyLjYsNDMsNTYuNCw0Myw1MC44YzAtNS43LDAuNi0xMC45LDEuOC'+
			'0xNS4zICAgIGMxLjItNC40LDIuOS04LjEsNS40LTEwLjhjMS43LTEuOCwzLjctMyw2LjEtMy41djBjMC43LTAuMSwxLjMtMC4yLDItMC4yYzEuNSwwLDMuMSwwLjMsNC41LDAuOWMxLjUsMC42LDIuOSwxLjQsNC4yLDIuNSAgICBjMi43LDIuMSw1LjIsNSw3LjUsOC42YzEuOCwyLjksMy42LDYuMiw1LjEsOS45YzMuNSwwLjUsNi45LDEuMSwxMCwxLjljNy4zLDEuOCwxMy41LDQuNCwxOC4xLDcuNmMzLjEsMi4yLDUuNCw0LjYsNi44LDcuNSAgICBjMC44LDEuNiwxLjIsMy40LDEuMiw1LjJjMCwxLjgtMC40LDMuNi0xLjIsNS4yQzExMy44LDcxLjksMTEyLjcsNzMuNCwxMTEuMyw3NC44eiIvPgog'+
			'IDwvZz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTUwLjUsNDIuOGMtMC4yLDEuNi0wLjQsMy4zLTAuNCw1LjFjMi41LTAuNCw1LjEtMC42LDcuOC0wLjhsLTEtNC45QzU0LjcsNDIuMyw1Mi42LDQyLjUsNTAuNSw0Mi44eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTE0LjYsNTkuOGMtMS40LTIuOS0zLjgtNS4zLTYuOC03LjVjLTQuNi0zLjItMTAuOC01LjgtMTguMS03LjZjLTMuMS0wLjgtNi41LTEuNC0xMC0xLjkgICAgYy0xLjUtMy43LTMuMy03LTUuMS05LjljLTIuMy0zLjYtNC44LTYuNS03LjUtOC42Yy0xLjMtMS4xLTIuNy0xLjktNC4yLTIuNWMtMS41LT'+
			'AuNi0zLTAuOS00LjUtMC45Yy0wLjcsMC0xLjQsMC4xLTIsMC4ydjAgICAgYy0yLjQsMC41LTQuNCwxLjctNi4xLDMuNWMtMi41LDIuNy00LjIsNi40LTUuNCwxMC44Yy0xLjIsNC40LTEuOCw5LjYtMS44LDE1LjNjMCw1LjcsMC42LDExLjgsMS45LDE4LjIgICAgYzAuOSw0LjUsMi4xLDguOCwzLjQsMTIuOGMtNi4zLTEtMTEuOS0yLjYtMTYuNS00LjVjLTQuMi0xLjgtNy40LTMuOS05LjYtNmMtMS4xLTEuMS0xLjgtMi4xLTIuMy0zLjJjLTAuNS0xLTAuNy0yLTAuNy0zLjFoMCAgICBjMC0xLDAuMi0yLDAuNy0zLjFjMC45LTEuOCwyLjYtMy44LDUuMi01LjZjMy44LTIuNyw5LjMtNSwxNS45LTYu'+
			'N2MwLTEuOCwwLjEtMy41LDAuMy01LjJjLTQuMiwxLTgsMi4yLTExLjUsMy43ICAgIGMtNC42LDItOC40LDQuMy0xMS4yLDcuMWMtMS40LDEuNC0yLjUsMi45LTMuMyw0LjVjLTAuOCwxLjYtMS4yLDMuNC0xLjIsNS4yYzAsMS44LDAuNCwzLjYsMS4yLDUuMmMxLjQsMi45LDMuOCw1LjMsNi44LDcuNSAgICBjNC42LDMuMiwxMC44LDUuOCwxOC4xLDcuNmMzLjEsMC44LDYuNSwxLjQsMTAsMS45YzEuNSwzLjcsMy4zLDcsNS4xLDkuOWMyLjMsMy42LDQuOCw2LjUsNy41LDguNmMxLjMsMS4xLDIuNywxLjksNC4yLDIuNSAgICBjMS41LDAuNiwzLDAuOSw0LjUsMC45YzAuNywwLDEuMy0wLjEsMi0wLj'+
			'JsMCwwYzIuNC0wLjUsNC40LTEuNyw2LjEtMy41YzIuNS0yLjcsNC4yLTYuNCw1LjQtMTAuOGMwLjUtMiwwLjktNC4yLDEuMi02LjUgICAgYy0wLjYsMC4xLTEuMiwwLjMtMS44LDAuNGMtMS4xLDAuMi0yLjIsMC40LTMuMywwLjVjLTAuNSwzLTEuMiw1LjctMi4xLDhjLTAuOSwyLjItMS45LDMuOS0zLDVjLTAuNiwwLjctMS4zLDEuMi0yLDEuNWwtMi43LTEzLjUgICAgYy0xLDAuMS0yLDAuMS0zLDAuMWwyLjgsMTRjLTAuNy0wLjEtMS40LTAuMi0yLjItMC41Yy0xLjctMC43LTMuNS0yLTUuNC00Yy0yLjYtMi44LTUuMi02LjgtNy41LTExLjdDNTksODgsNjIsODguMSw2NSw4OC4xICAgIGMxMy42'+
			'LDAsMjYtMi4zLDM1LjItNi4yYzQuNi0yLDguNC00LjMsMTEuMi03LjFjMS40LTEuNCwyLjUtMi45LDMuMy00LjVjMC44LTEuNiwxLjItMy40LDEuMi01LjIgICAgQzExNS44LDYzLjIsMTE1LjQsNjEuNCwxMTQuNiw1OS44eiBNMTEwLjEsNjguMWMtMC45LDEuOC0yLjYsMy44LTUuMiw1LjZjLTMuOSwyLjctOS42LDUuMS0xNi40LDYuOGMtNi45LDEuNy0xNC45LDIuNy0yMy41LDIuNyAgICBjLTMuOCwwLTcuNS0wLjItMTEuMS0wLjZjLTEuNy00LjQtMy4xLTkuMy00LjEtMTQuNWwwLDBDNDguNiw2MS45LDQ4LDU2LjEsNDgsNTAuOGMwLTcuMSwxLTEzLjMsMi44LTE3LjdjMC45LTIuMiwxLjktMy'+
			'45LDMtNSAgICBjMC43LTAuNywxLjMtMS4yLDItMS41bDcuNywzOC43bDMuMSwxNS44YzEsMCwyLDAsMy0wLjFsLTMuMi0xNi4zTDU4LjgsMjZjMC43LDAuMSwxLjQsMC4yLDIuMiwwLjVjMS42LDAuNywzLjUsMiw1LjQsNCAgICBjMi42LDIuOCw1LjIsNi44LDcuNSwxMS43QzcxLDQyLDY4LDQxLjksNjUsNDEuOWMtMC4zLDAtMC43LDAtMSwwbDEsNWMzLjgsMCw3LjUsMC4yLDExLjEsMC42YzEuNyw0LjQsMy4xLDkuMyw0LjEsMTQuNSAgICBjMS4yLDYuMSwxLjgsMTEuOSwxLjgsMTcuM2MwLDAuMiwwLDAuMywwLDAuNWMxLjItMC4yLDIuMy0wLjQsMy40LTAuNmMwLjUtMC4xLDEtMC4yLDEuNi0w'+
			'LjNjMC01LjUtMC42LTExLjUtMS45LTE3LjcgICAgYy0wLjktNC41LTIuMS04LjgtMy40LTEyLjhjNi4zLDEsMTEuOSwyLjYsMTYuNSw0LjVjNC4yLDEuOCw3LjQsMy45LDkuNiw2YzEuMSwxLjEsMS44LDIuMSwyLjMsMy4yYzAuNSwxLDAuNywyLDAuNywzLjEgICAgQzExMC44LDY2LDExMC42LDY3LDExMC4xLDY4LjF6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._gyro_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gyro_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 64px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -7px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_on.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_on.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_on.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_on.style.transition='opacity 0s';
				if (me._gyro_on.ggCurrentLogicStateAlpha == 0) {
					me._gyro_on.style.visibility=me._gyro_on.ggVisible?'inherit':'hidden';
					me._gyro_on.style.opacity=1;
				}
				else {
					me._gyro_on.style.visibility="hidden";
					me._gyro_on.style.opacity=0;
				}
			}
		}
		me._gyro_on.logicBlock_alpha();
		me._gyro_on.onmouseenter=function (e) {
			me._gyro_on__img.style.visibility='hidden';
			me._gyro_on__imgo.style.visibility='inherit';
			me.elementMouseOver['gyro_on']=true;
		}
		me._gyro_on.onmouseleave=function (e) {
			me._gyro_on__img.style.visibility='inherit';
			me._gyro_on__imgo.style.visibility='hidden';
			me.elementMouseOver['gyro_on']=false;
		}
		me._gyro_on.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_on);
		el=me._gyro_off=document.createElement('div');
		els=me._gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMwIDEzMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPGcgaWQ9IkxheWVyXzFfMV8iLz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNjUsOC45QzM0LDguOSw4LjksMzQsOC45LDY1YzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMWMzMSwwLDU2LjEtMjUuMSw1Ni4xLTU2LjFDMTIxLjEsMzQsOTYsOC45LDY1LDguOXogTTQ2LjgsMzguNCAgIGMxLjEtNCwyLjYtNy4zLDQuOS05LjdjMS41LTEuNiwzLjQtMi43LDUuNS0zLjF2MGMwLjYtMC4xLDEuMi0wLjIsMS44LTAuMmMxLjQsMCwyLjgsMC4zLDQuMSwwLjhjMS4zLDAuNSwyLjYsMS4zLDMuOCwyLjMgICBjMi40LDEuOSw0LjcsNC41LDYuNyw3'+
			'LjhjMS43LDIuNiwzLjIsNS42LDQuNiw4LjljMC4xLDAsMC4yLDAsMC4zLDAuMWwtNC4xLDQuMWMtMy0wLjMtNi4yLTAuNS05LjUtMC41bC0wLjktNC41ICAgYzAuMywwLDAuNiwwLDAuOSwwYzIuNywwLDUuNCwwLjEsOCwwLjNjLTIuMS00LjQtNC40LTguMS02LjgtMTAuNmMtMS43LTEuOC0zLjQtMy00LjgtMy42Yy0wLjctMC4zLTEuMy0wLjQtMS45LTAuNWw1LjcsMjguNyAgIGwtMi4zLDIuM2wtNi0zMC40Yy0wLjYsMC4zLTEuMiwwLjctMS44LDEuNGMtMSwxLTEuOSwyLjYtMi43LDQuNWMtMS42LDMuOS0yLjUsOS41LTIuNSwxNS45YzAsNC44LDAuNSwxMC4xLDEuNiwxNS41bDAsMCAgIGMwLj'+
			'MsMS4zLDAuNSwyLjUsMC44LDMuOGwtMy43LDMuN2MtMC42LTIuMS0xLjEtNC4zLTEuNi02LjZjLTEuMS01LjctMS43LTExLjMtMS43LTE2LjRDNDUuMiw0Nyw0NS44LDQyLjQsNDYuOCwzOC40eiBNNTguNiw0OC45ICAgYy0yLjQsMC4yLTQuOCwwLjQtNywwLjdjMC4xLTEuNiwwLjItMy4xLDAuNC00LjZjMS45LTAuMiwzLjgtMC40LDUuOC0wLjZMNTguNiw0OC45eiBNMjAuNCw2OS43Yy0wLjctMS41LTEuMS0zLjEtMS4xLTQuNyAgIGMwLTEuNiwwLjQtMy4yLDEuMS00LjdjMC43LTEuNSwxLjctMi44LDMtNC4xYzIuNS0yLjUsNS45LTQuNiwxMC02LjRjMy4xLTEuMyw2LjUtMi40LDEwLjMtMy4z'+
			'Yy0wLjEsMS41LTAuMiwzLjEtMC4yLDQuNyAgIGMtNiwxLjUtMTEsMy42LTE0LjQsNmMtMi4zLDEuNi0zLjksMy40LTQuNyw1Yy0wLjQsMC45LTAuNywxLjgtMC43LDIuOGgwYzAsMC45LDAuMiwxLjgsMC43LDIuOGMwLjUsMC45LDEuMSwxLjksMi4xLDIuOSAgIGMxLjksMS45LDQuOSwzLjgsOC42LDUuNGMyLjgsMS4yLDUuOSwyLjIsOS40LDNsLTMuNywzLjdjLTUuNy0xLjYtMTAuNi0zLjctMTQuNC02LjNDMjMuOCw3NC41LDIxLjYsNzIuMywyMC40LDY5Ljd6IE0zMi44LDEwMC4zICAgYy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02Nm'+
			'MwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuNyAgIGMwLjYsMC42LDAuNiwxLjYsMCwyLjJsLTY2LDY2QzMzLjYsMTAwLjIsMzMuMiwxMDAuMywzMi44LDEwMC4zeiBNNzguNyw2Mi4zYy0wLjMtMS4zLTAuNS0yLjUtMC44LTMuOGwzLjctMy43ICAgYzAuNiwyLjEsMS4xLDQuMywxLjYsNi42YzEuMSw1LjYsMS42LDExLDEuNywxNS45Yy0wLjUsMC4xLTAuOSwwLjItMS40LDAuM2MtMSwwLjItMiwwLjQtMy4xLDAuNmMwLTAuMSwwLTAuMywwLTAuNCAgIEM4MC4zLDczLDc5LjgsNjcuOCw3OC43LDYyLjN6IE02OS4zLDc5LjRjLTAuOSwwLTEuOCwwLjEtMi43LDAu'+
			'MWwtMS42LTguMWwyLjMtMi4zTDY5LjMsNzkuNHogTTEwNi43LDczLjggICBjLTIuNSwyLjUtNS45LDQuNi0xMCw2LjRjLTguMiwzLjUtMTkuNCw1LjYtMzEuNiw1LjZjLTIuNywwLTUuNC0wLjEtOC0wLjNjMi4xLDQuNCw0LjQsOC4xLDYuOCwxMC42YzEuNywxLjgsMy40LDMsNC44LDMuNiAgIGMwLjcsMC4zLDEuNCwwLjQsMiwwLjVsLTIuNS0xMi42YzAuOSwwLDEuOC0wLjEsMi43LTAuMWwyLjQsMTIuMmMwLjYtMC4zLDEuMi0wLjcsMS44LTEuM2MxLTEsMS45LTIuNiwyLjctNC41ICAgYzAuOC0yLDEuNC00LjQsMS45LTcuMmMxLTAuMSwyLTAuMywzLTAuNWMwLjYtMC4xLDEuMS0wLjIsMS42LT'+
			'AuM2MtMC4zLDIuMS0wLjYsNC4xLTEuMSw1LjljLTEuMSw0LTIuNiw3LjMtNC45LDkuNyAgIGMtMS41LDEuNi0zLjQsMi43LTUuNSwzLjFsMCwwYy0wLjYsMC4xLTEuMiwwLjItMS44LDAuMmMtMS40LDAtMi44LTAuMy00LjEtMC44Yy0xLjMtMC41LTIuNi0xLjMtMy44LTIuMyAgIGMtMi40LTEuOS00LjctNC41LTYuNy03LjhjLTEuNy0yLjYtMy4yLTUuNi00LjYtOC45Yy0wLjEsMC0wLjIsMC0wLjQtMC4xbDQuMS00LjFjMywwLjMsNi4yLDAuNSw5LjUsMC41YzcuNywwLDE0LjktMC45LDIxLjEtMi40ICAgYzYuMi0xLjUsMTEuMy0zLjcsMTQuOC02LjFjMi4zLTEuNiwzLjktMy40LDQuNy01YzAu'+
			'NC0wLjksMC43LTEuOCwwLjctMi44YzAtMC45LTAuMi0xLjgtMC43LTIuOGMtMC40LTAuOS0xLjEtMS45LTIuMS0yLjkgICBjLTEuOS0xLjktNC45LTMuOC04LjYtNS40Yy0yLjgtMS4yLTYtMi4yLTkuNS0zbDMuNy0zLjdjNS43LDEuNiwxMC42LDMuNywxNC40LDYuM2MyLjgsMS45LDQuOSw0LjIsNi4xLDYuNyAgIGMwLjcsMS41LDEuMSwzLjEsMS4xLDQuN2MwLDEuNi0wLjQsMy4yLTEuMSw0LjdDMTA4LjksNzEuMiwxMDcuOSw3Mi42LDEwNi43LDczLjh6Ii8+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01MS42LDQ5LjZjMi4zLTAuMyw0LjYtMC42LDctMC43bC0wLjktNC41Yy'+
			'0yLDAuMS0zLjksMC4zLTUuOCwwLjZDNTEuOCw0Ni41LDUxLjcsNDgsNTEuNiw0OS42eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNOTkuOSwzMS44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNHMtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4ybDEuNywxLjcgICAgYzAuMywwLjMsMC43LDAuNCwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGw2Ni02NkMxMDAuNSwzMy4zLDEwMC41LDMyLjQsOTkuOSwzMS44eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjYuNSw3OS41YzAuOSwwLDEuOCwwLDIuNy0wLjFsLTItMTAu'+
			'M2wtMi4zLDIuM0w2Ni41LDc5LjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik04My40LDc3LjdjMC41LTAuMSwwLjktMC4yLDEuNC0wLjNjMC01LTAuNi0xMC40LTEuNy0xNS45Yy0wLjQtMi4zLTEtNC41LTEuNi02LjZsLTMuNywzLjcgICAgYzAuMywxLjIsMC42LDIuNSwwLjgsMy44YzEuMSw1LjUsMS42LDEwLjcsMS42LDE1LjVjMCwwLjIsMCwwLjMsMCwwLjRDODEuMyw3OC4xLDgyLjQsNzcuOSw4My40LDc3Ljd6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik00OC41LDc1LjJsMy43LTMuN2MtMC4zLTEuMi0wLjYtMi41LTAuOC0zLjhsMCwwYy0xLjEtNS41LTEuNi0xMC'+
			'43LTEuNi0xNS41YzAtNi40LDAuOS0xMiwyLjUtMTUuOSAgICBjMC44LTIsMS43LTMuNSwyLjctNC41YzAuNi0wLjYsMS4yLTEuMSwxLjgtMS40bDYsMzAuNGwyLjMtMi4zbC01LjctMjguN2MwLjYsMCwxLjMsMC4yLDEuOSwwLjVjMS41LDAuNiwzLjIsMS44LDQuOCwzLjYgICAgYzIuNCwyLjUsNC43LDYuMSw2LjgsMTAuNmMtMi42LTAuMi01LjMtMC4zLTgtMC4zYy0wLjMsMC0wLjYsMC0wLjksMGwwLjksNC41YzMuMywwLDYuNCwwLjIsOS41LDAuNWw0LjEtNC4xICAgIGMtMC4xLDAtMC4yLDAtMC4zLTAuMWMtMS40LTMuMy0yLjktNi4zLTQuNi04LjljLTIuMS0zLjItNC4zLTUuOS02LjctNy44'+
			'Yy0xLjItMS0yLjUtMS43LTMuOC0yLjNjLTEuMy0wLjUtMi43LTAuOC00LjEtMC44ICAgIGMtMC42LDAtMS4yLDAuMS0xLjgsMC4ydjBjLTIuMSwwLjQtNCwxLjYtNS41LDMuMWMtMi4zLDIuNC0zLjgsNS43LTQuOSw5LjdjLTEuMSw0LTEuNiw4LjctMS42LDEzLjhjMCw1LjEsMC41LDEwLjcsMS43LDE2LjQgICAgQzQ3LjQsNzAuOCw0Ny45LDczLDQ4LjUsNzUuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0LjYsNzkuMWMtMy41LTAuOC02LjctMS44LTkuNC0zYy0zLjctMS42LTYuNy0zLjUtOC42LTUuNGMtMS0xLTEuNy0xLjktMi4xLTIuOWMtMC40LTAuOS0wLjctMS44LTAuNy'+
			'0yLjggICAgaDBjMC0wLjksMC4yLTEuOCwwLjctMi44YzAuOC0xLjYsMi4zLTMuNCw0LjctNWMzLjQtMi40LDguNC00LjUsMTQuNC02YzAtMS42LDAuMS0zLjIsMC4yLTQuN2MtMy44LDAuOS03LjIsMi0xMC4zLDMuMyAgICBjLTQuMSwxLjgtNy41LDMuOS0xMCw2LjRjLTEuMiwxLjMtMi4zLDIuNi0zLDQuMWMtMC43LDEuNS0xLjEsMy4xLTEuMSw0LjdjMCwxLjYsMC40LDMuMiwxLjEsNC43YzEuMiwyLjYsMy40LDQuOCw2LjIsNi43ICAgIGMzLjcsMi42LDguNiw0LjcsMTQuNCw2LjNMNDQuNiw3OS4xeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTA5LjcsNjAuM2MtMS4yLTIuNi0z'+
			'LjQtNC44LTYuMS02LjdjLTMuNy0yLjYtOC42LTQuNy0xNC40LTYuM2wtMy43LDMuN2MzLjUsMC44LDYuNywxLjgsOS41LDMgICAgYzMuNywxLjYsNi43LDMuNSw4LjYsNS40YzEsMSwxLjcsMS45LDIuMSwyLjljMC40LDAuOSwwLjcsMS44LDAuNywyLjhjMCwwLjktMC4yLDEuOC0wLjcsMi44Yy0wLjgsMS42LTIuMywzLjQtNC43LDUgICAgYy0zLjUsMi41LTguNiw0LjYtMTQuOCw2LjFjLTYuMiwxLjUtMTMuNCwyLjQtMjEuMSwyLjRjLTMuMywwLTYuNC0wLjItOS41LTAuNWwtNC4xLDQuMWMwLjEsMCwwLjIsMCwwLjQsMC4xICAgIGMxLjQsMy4zLDIuOSw2LjMsNC42LDguOWMyLjEsMy4yLDQuMy'+
			'w1LjksNi43LDcuOGMxLjIsMSwyLjUsMS43LDMuOCwyLjNjMS4zLDAuNSwyLjcsMC44LDQuMSwwLjhjMC42LDAsMS4yLTAuMSwxLjgtMC4ybDAsMCAgICBjMi4xLTAuNCw0LTEuNiw1LjUtMy4xYzIuMy0yLjQsMy44LTUuNyw0LjktOS43YzAuNS0xLjgsMC45LTMuOCwxLjEtNS45Yy0wLjUsMC4xLTEuMSwwLjItMS42LDAuM2MtMSwwLjItMiwwLjMtMywwLjUgICAgYy0wLjQsMi43LTEuMSw1LjItMS45LDcuMmMtMC44LDItMS43LDMuNS0yLjcsNC41Yy0wLjYsMC42LTEuMiwxLTEuOCwxLjNsLTIuNC0xMi4yYy0wLjksMC0xLjgsMC4xLTIuNywwLjFsMi41LDEyLjYgICAgYy0wLjYsMC0xLjMtMC4y'+
			'LTItMC41Yy0xLjUtMC42LTMuMi0xLjgtNC44LTMuNmMtMi40LTIuNS00LjctNi4xLTYuOC0xMC42YzIuNiwwLjIsNS4zLDAuMyw4LDAuM2MxMi4zLDAsMjMuNC0yLjEsMzEuNi01LjYgICAgYzQuMS0xLjgsNy41LTMuOSwxMC02LjRjMS4yLTEuMywyLjMtMi42LDMtNC4xYzAuNy0xLjUsMS4xLTMuMSwxLjEtNC43QzExMC44LDYzLjQsMTEwLjQsNjEuOCwxMDkuNyw2MC4zeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMwIDEzMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KIDxnIGlkPSJMYXllcl8xXzFfIi8+CiA8ZyBpZD0iTGF5ZXJfMl8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTY1LDIuNkMzMC42LDIuNiwyLjYsMzAuNiwyLjYsNjVjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjRDMTI3LjQsMzAuNiw5OS41LDIuNiw2NSwyLjZ6ICAgIE00NC44LDM1LjRjMS4yLTQuNCwyLjktOC4xLDUuNC0xMC44YzEuNy0xLjgsMy43LTMsNi4xLTMuNXYwYzAuNy0wLjEsMS4zLTAuMiwyLTAuMmMxLjUs'+
			'MCwzLjEsMC4zLDQuNSwwLjkgICBjMS41LDAuNiwyLjksMS40LDQuMiwyLjVjMi43LDIuMSw1LjIsNSw3LjUsOC42YzEuOCwyLjksMy42LDYuMiw1LjEsOS45YzAuMSwwLDAuMywwLDAuNCwwLjFsLTQuNSw0LjVjLTMuNC0wLjMtNi45LTAuNS0xMC41LTAuNSAgIGwtMS01YzAuMywwLDAuNywwLDEsMGMzLDAsNiwwLjEsOC45LDAuNGMtMi4zLTQuOS00LjktOS03LjUtMTEuN2MtMS45LTItMy43LTMuMy01LjQtNGMtMC44LTAuMy0xLjUtMC41LTIuMi0wLjVsNi4zLDMxLjggICBsLTIuNiwyLjZsLTYuNy0zMy44Yy0wLjcsMC4zLTEuMywwLjgtMiwxLjVjLTEuMSwxLjItMi4yLDIuOS0zLDVDNDkuMS'+
			'wzNy41LDQ4LDQzLjYsNDgsNTAuOGMwLDUuMywwLjYsMTEuMiwxLjgsMTcuMmwwLDAgICBjMC4zLDEuNCwwLjYsMi44LDAuOSw0LjJsLTQuMSw0LjFjLTAuNy0yLjQtMS4yLTQuOC0xLjctNy4zQzQzLjYsNjIuNiw0Myw1Ni40LDQzLDUwLjhDNDMsNDUuMSw0My42LDM5LjksNDQuOCwzNS40eiBNNTcuOSw0Ny4xICAgYy0yLjcsMC4yLTUuMywwLjQtNy44LDAuOGMwLjEtMS44LDAuMi0zLjUsMC40LTUuMWMyLjEtMC4zLDQuMi0wLjUsNi40LTAuNkw1Ny45LDQ3LjF6IE0xNS40LDcwLjJjLTAuOC0xLjYtMS4yLTMuNC0xLjItNS4yICAgYzAtMS44LDAuNC0zLjYsMS4yLTUuMmMwLjgtMS42LDEuOS0z'+
			'LjIsMy4zLTQuNWMyLjgtMi44LDYuNi01LjEsMTEuMi03LjFjMy40LTEuNSw3LjMtMi43LDExLjUtMy43Yy0wLjEsMS43LTAuMiwzLjQtMC4zLDUuMiAgIGMtNi42LDEuNy0xMi4yLDQtMTYsNi43Yy0yLjYsMS44LTQuMywzLjctNS4yLDUuNmMtMC41LDEtMC43LDItMC43LDMuMWgwYzAsMSwwLjIsMiwwLjcsMy4xYzAuNSwxLDEuMywyLjEsMi4zLDMuMiAgIGMyLjEsMi4xLDUuNCw0LjIsOS42LDZjMy4xLDEuMyw2LjYsMi40LDEwLjUsMy4zbC00LjEsNC4xYy02LjQtMS44LTExLjgtNC4xLTE2LTdDMTkuMiw3NS42LDE2LjgsNzMuMSwxNS40LDcwLjJ6IE0yOS4zLDEwNC4zICAgYy0wLjQsMC0wLj'+
			'ktMC4yLTEuMi0wLjVsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIuNGw3My4zLTczLjNjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41bDEuOCwxLjggICBjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjNDMzAuMSwxMDQuMSwyOS43LDEwNC4zLDI5LjMsMTA0LjN6IE04MC4yLDYyYy0wLjMtMS40LTAuNi0yLjgtMC45LTQuMmw0LjEtNC4xICAgYzAuNywyLjQsMS4yLDQuOCwxLjcsNy4zYzEuMiw2LjIsMS44LDEyLjIsMS45LDE3LjdjLTAuNSwwLjEtMSwwLjItMS42LDAuM2MtMS4xLDAuMi0yLjMsMC40LTMuNCwwLjZjMC0wLjIsMC0wLjMsMC0wLjUgICBD'+
			'ODIsNzMuOSw4MS40LDY4LjEsODAuMiw2MnogTTY5LjcsODFjLTEsMC0yLDAuMS0zLDAuMWwtMS44LTguOWwyLjYtMi42TDY5LjcsODF6IE0xMTEuMyw3NC44Yy0yLjgsMi44LTYuNiw1LjEtMTEuMiw3LjEgICBDOTEsODUuOCw3OC42LDg4LjEsNjUsODguMWMtMywwLTYtMC4xLTguOS0wLjNjMi4zLDQuOSw0LjksOSw3LjUsMTEuN2MxLjksMiwzLjcsMy4zLDUuNCw0YzAuOCwwLjMsMS41LDAuNSwyLjIsMC41bC0yLjgtMTQgICBjMSwwLDItMC4xLDMtMC4xbDIuNywxMy41YzAuNy0wLjMsMS4zLTAuOCwyLTEuNWMxLjEtMS4yLDIuMi0yLjksMy01YzAuOS0yLjIsMS42LTQuOSwyLjEtOGMxLjEtMC'+
			'4yLDIuMy0wLjMsMy4zLTAuNSAgIGMwLjYtMC4xLDEuMi0wLjIsMS44LTAuNGMtMC4zLDIuMy0wLjcsNC41LTEuMiw2LjVjLTEuMiw0LjQtMi45LDguMS01LjQsMTAuOGMtMS43LDEuOC0zLjcsMy02LjEsMy41bDAsMGMtMC43LDAuMS0xLjMsMC4yLTIsMC4yICAgYy0xLjUsMC0zLjEtMC4zLTQuNS0wLjljLTEuNS0wLjYtMi45LTEuNC00LjItMi41Yy0yLjctMi4xLTUuMi01LTcuNS04LjZjLTEuOC0yLjktMy42LTYuMi01LjEtOS45Yy0wLjEsMC0wLjMsMC0wLjQtMC4xbDQuNS00LjUgICBjMy40LDAuMyw2LjksMC41LDEwLjUsMC41YzguNiwwLDE2LjYtMSwyMy41LTIuN2M2LjktMS43LDEyLjYt'+
			'NC4xLDE2LjQtNi44YzIuNi0xLjgsNC4zLTMuNyw1LjItNS42YzAuNS0xLDAuNy0yLDAuNy0zLjEgICBjMC0xLTAuMi0yLTAuNy0zLjFjLTAuNS0xLTEuMy0yLjEtMi4zLTMuMmMtMi4xLTIuMS01LjQtNC4yLTkuNi02Yy0zLjEtMS4zLTYuNi0yLjQtMTAuNS0zLjRsNC4xLTQuMWM2LjQsMS44LDExLjgsNC4xLDE2LDcgICBjMy4xLDIuMiw1LjQsNC42LDYuOCw3LjVjMC44LDEuNiwxLjIsMy40LDEuMiw1LjJjMCwxLjgtMC40LDMuNi0xLjIsNS4yQzExMy44LDcxLjksMTEyLjcsNzMuNCwxMTEuMyw3NC44eiIvPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNTAuMSw0Ny45YzIuNS'+
			'0wLjQsNS4xLTAuNiw3LjgtMC44bC0xLTQuOWMtMi4yLDAuMi00LjMsMC40LTYuNCwwLjZDNTAuMyw0NC40LDUwLjIsNDYuMSw1MC4xLDQ3Ljl6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMDMuOCwyOC4xbC0xLjgtMS44Yy0wLjMtMC4zLTAuOC0wLjUtMS4yLTAuNXMtMC45LDAuMi0xLjIsMC41TDI2LjIsOTkuNWMtMC43LDAuNy0wLjcsMS43LDAsMi40bDEuOCwxLjggICAgYzAuMywwLjMsMC44LDAuNSwxLjIsMC41czAuOS0wLjIsMS4yLTAuNWw3My4zLTczLjNDMTA0LjQsMjkuOCwxMDQuNCwyOC43LDEwMy44LDI4LjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik02'+
			'Ni43LDgxLjFjMSwwLDIsMCwzLTAuMWwtMi4zLTExLjRsLTIuNiwyLjZMNjYuNyw4MS4xeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNODUuNCw3OS4xYzAuNS0wLjEsMS0wLjIsMS42LTAuM2MwLTUuNS0wLjYtMTEuNS0xLjktMTcuN2MtMC41LTIuNS0xLjEtNS0xLjctNy4zbC00LjEsNC4xICAgIGMwLjMsMS40LDAuNywyLjgsMC45LDQuMmMxLjIsNi4xLDEuOCwxMS45LDEuOCwxNy4zYzAsMC4yLDAsMC4zLDAsMC41QzgzLjIsNzkuNSw4NC4zLDc5LjMsODUuNCw3OS4xeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNDYuNiw3Ni4zbDQuMS00LjFjLTAuMy0xLjQtMC42LT'+
			'IuOC0wLjktNC4ybDAsMEM0OC42LDYxLjksNDgsNTYuMSw0OCw1MC44YzAtNy4xLDEtMTMuMywyLjgtMTcuNyAgICBjMC45LTIuMiwxLjktMy45LDMtNWMwLjctMC43LDEuMy0xLjIsMi0xLjVsNi43LDMzLjhsMi42LTIuNkw1OC44LDI2YzAuNywwLjEsMS40LDAuMiwyLjIsMC41YzEuNiwwLjcsMy41LDIsNS40LDQgICAgYzIuNiwyLjgsNS4yLDYuOCw3LjUsMTEuN0M3MSw0Miw2OC4xLDQxLjksNjUsNDEuOWMtMC4zLDAtMC43LDAtMSwwbDEsNWMzLjYsMCw3LjEsMC4yLDEwLjUsMC41bDQuNS00LjVjLTAuMSwwLTAuMywwLTAuNC0wLjEgICAgYy0xLjUtMy43LTMuMy03LTUuMS05LjljLTIuMy0z'+
			'LjYtNC44LTYuNS03LjUtOC42Yy0xLjMtMS4xLTIuNy0xLjktNC4yLTIuNWMtMS41LTAuNi0zLTAuOS00LjUtMC45Yy0wLjcsMC0xLjQsMC4xLTIsMC4ydjAgICAgYy0yLjQsMC41LTQuNCwxLjctNi4xLDMuNWMtMi41LDIuNy00LjIsNi40LTUuNCwxMC44Yy0xLjIsNC40LTEuOCw5LjYtMS44LDE1LjNjMCw1LjcsMC42LDExLjgsMS45LDE4LjIgICAgQzQ1LjQsNzEuNSw0Niw3My45LDQ2LjYsNzYuM3oiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQyLjMsODAuNmMtMy45LTAuOS03LjQtMi0xMC41LTMuM2MtNC4yLTEuOC03LjQtMy45LTkuNi02Yy0xLjEtMS4xLTEuOC0yLjEtMi4zLT'+
			'MuMmMtMC41LTEtMC43LTItMC43LTMuMWgwICAgIGMwLTEsMC4yLTIsMC43LTMuMWMwLjktMS44LDIuNi0zLjgsNS4yLTUuNmMzLjgtMi43LDkuMy01LDE1LjktNi43YzAtMS44LDAuMS0zLjUsMC4zLTUuMmMtNC4yLDEtOCwyLjItMTEuNSwzLjcgICAgYy00LjYsMi04LjQsNC4zLTExLjIsNy4xYy0xLjQsMS40LTIuNSwyLjktMy4zLDQuNWMtMC44LDEuNi0xLjIsMy40LTEuMiw1LjJjMCwxLjgsMC40LDMuNiwxLjIsNS4yYzEuNCwyLjksMy44LDUuMyw2LjgsNy41ICAgIGM0LjEsMi45LDkuNiw1LjMsMTYsN0w0Mi4zLDgwLjZ6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMTQuNiw1'+
			'OS44Yy0xLjQtMi45LTMuOC01LjMtNi44LTcuNWMtNC4xLTIuOS05LjYtNS4zLTE2LTdsLTQuMSw0LjFjMy45LDAuOSw3LjQsMiwxMC41LDMuNCAgICBjNC4yLDEuOCw3LjQsMy45LDkuNiw2YzEuMSwxLjEsMS44LDIuMSwyLjMsMy4yYzAuNSwxLDAuNywyLDAuNywzLjFjMCwxLTAuMiwyLTAuNywzLjFjLTAuOSwxLjgtMi42LDMuOC01LjIsNS42ICAgIGMtMy45LDIuNy05LjYsNS4xLTE2LjQsNi44Yy02LjksMS43LTE0LjksMi43LTIzLjUsMi43Yy0zLjYsMC03LjItMC4yLTEwLjUtMC41TDUwLDg3LjFjMC4xLDAsMC4zLDAsMC40LDAuMSAgICBjMS41LDMuNywzLjMsNyw1LjEsOS45YzIuMywzLj'+
			'YsNC44LDYuNSw3LjUsOC42YzEuMywxLjEsMi43LDEuOSw0LjIsMi41YzEuNSwwLjYsMywwLjksNC41LDAuOWMwLjcsMCwxLjMtMC4xLDItMC4ybDAsMCAgICBjMi40LTAuNSw0LjQtMS43LDYuMS0zLjVjMi41LTIuNyw0LjItNi40LDUuNC0xMC44YzAuNS0yLDAuOS00LjIsMS4yLTYuNWMtMC42LDAuMS0xLjIsMC4zLTEuOCwwLjRjLTEuMSwwLjItMi4yLDAuNC0zLjMsMC41ICAgIGMtMC41LDMtMS4yLDUuNy0yLjEsOGMtMC45LDIuMi0xLjksMy45LTMsNWMtMC42LDAuNy0xLjMsMS4yLTIsMS41bC0yLjctMTMuNWMtMSwwLjEtMiwwLjEtMywwLjFsMi44LDE0ICAgIGMtMC43LTAuMS0xLjQtMC4y'+
			'LTIuMi0wLjVjLTEuNy0wLjctMy41LTItNS40LTRjLTIuNi0yLjgtNS4yLTYuOC03LjUtMTEuN0M1OSw4OCw2Miw4OC4xLDY1LDg4LjFjMTMuNiwwLDI2LTIuMywzNS4yLTYuMiAgICBjNC42LTIsOC40LTQuMywxMS4yLTcuMWMxLjQtMS40LDIuNS0yLjksMy4zLTQuNWMwLjgtMS42LDEuMi0zLjQsMS4yLTUuMkMxMTUuOCw2My4yLDExNS40LDYxLjQsMTE0LjYsNTkuOHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._gyro_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gyro_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 64px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -7px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_off.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_off.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_off.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_off.style.transition='opacity 0s';
				if (me._gyro_off.ggCurrentLogicStateAlpha == 0) {
					me._gyro_off.style.visibility=me._gyro_off.ggVisible?'inherit':'hidden';
					me._gyro_off.style.opacity=1;
				}
				else {
					me._gyro_off.style.visibility="hidden";
					me._gyro_off.style.opacity=0;
				}
			}
		}
		me._gyro_off.logicBlock_alpha();
		me._gyro_off.onmouseenter=function (e) {
			me._gyro_off__img.style.visibility='hidden';
			me._gyro_off__imgo.style.visibility='inherit';
			me.elementMouseOver['gyro_off']=true;
		}
		me._gyro_off.onmouseleave=function (e) {
			me._gyro_off__img.style.visibility='inherit';
			me._gyro_off__imgo.style.visibility='hidden';
			me.elementMouseOver['gyro_off']=false;
		}
		me._gyro_off.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_off);
		me.divSkin.appendChild(me._gyro);
		el=me._thumbnail_menu_toggle=document.createElement('div');
		el.ggId="thumbnail_menu_toggle";
		el.ggDx=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 26px;';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((35px + 0px) / 2) - 7px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_toggle.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_toggle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu_phone') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu_toggle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu_toggle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu_toggle.style.transition='opacity 300ms ease 0ms';
				if (me._thumbnail_menu_toggle.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._thumbnail_menu_toggle.style.opacity == 0.0) { me._thumbnail_menu_toggle.style.visibility="hidden"; } }, 305);
					me._thumbnail_menu_toggle.style.opacity=0;
				}
				else {
					me._thumbnail_menu_toggle.style.visibility=me._thumbnail_menu_toggle.ggVisible?'inherit':'hidden';
					me._thumbnail_menu_toggle.style.opacity=1;
				}
			}
		}
		me._thumbnail_menu_toggle.logicBlock_alpha();
		me._thumbnail_menu_toggle.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_thumbnail_menu_phone', !player.getVariableValue('vis_thumbnail_menu_phone'));
			}
		}
		me._thumbnail_menu_toggle.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_menu_toggle']=true;
			me._menu_icon.logicBlock_visible();
			me._menu_icon_active.logicBlock_visible();
		}
		me._thumbnail_menu_toggle.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_menu_toggle']=false;
			me._menu_icon.logicBlock_visible();
			me._menu_icon_active.logicBlock_visible();
		}
		me._thumbnail_menu_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_icon=document.createElement('div');
		els=me._menu_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgY2xhc3M9InN0MCIgcj0iMS43Ii8+CiA8Y2lyY2xlIGN4PSIzMS43IiBjeT0iMjAiIGNsYXNzPSJzdDAiIHI9IjEuNyIvPgogPGNpcmNsZSBjeD0iOC4zIiBjeT0iMjAiIGNsYXNzPSJzdDAiIHI9IjEuNyIvPgo8L3N2Zz4K';
		me._menu_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_icon";
		el.ggDx=-1;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail_menu_toggle'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_icon.style.transition='';
				if (me._menu_icon.ggCurrentLogicStateVisible == 0) {
					me._menu_icon.style.visibility="hidden";
					me._menu_icon.ggVisible=false;
				}
				else {
					me._menu_icon.style.visibility=(Number(me._menu_icon.style.opacity)>0||!me._menu_icon.style.opacity)?'inherit':'hidden';
					me._menu_icon.ggVisible=true;
				}
			}
		}
		me._menu_icon.logicBlock_visible();
		me._menu_icon.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_menu_toggle.appendChild(me._menu_icon);
		el=me._menu_icon_active=document.createElement('div');
		els=me._menu_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAgNDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgY2xhc3M9InN0MCIgcj0iMS43Ii8+CiA8Y2lyY2xlIGN4PSIzMS43IiBjeT0iMjAiIGNsYXNzPSJzdDAiIHI9IjEuNyIvPgogPGNpcmNsZSBjeD0iOC4zIiBjeT0iMjAiIGNsYXNzPSJzdDAiIHI9IjEuNyIvPgo8L3N2Zz4K';
		me._menu_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_icon_active";
		el.ggDx=-1;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 1px);';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail_menu_toggle'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_icon_active.style.transition='';
				if (me._menu_icon_active.ggCurrentLogicStateVisible == 0) {
					me._menu_icon_active.style.visibility=(Number(me._menu_icon_active.style.opacity)>0||!me._menu_icon_active.style.opacity)?'inherit':'hidden';
					me._menu_icon_active.ggVisible=true;
				}
				else {
					me._menu_icon_active.style.visibility="hidden";
					me._menu_icon_active.ggVisible=false;
				}
			}
		}
		me._menu_icon_active.logicBlock_visible();
		me._menu_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_menu_toggle.appendChild(me._menu_icon_active);
		me.divSkin.appendChild(me._thumbnail_menu_toggle);
		el=me._thumbnail_menu=document.createElement('div');
		el.ggId="thumbnail_menu";
		el.ggDx=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 96px;';
		hs+='height : 114px;';
		hs+='left : calc(50% - ((57.3438% + 0px) / 2) - 7px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 57.3438%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu.style.transition='opacity 300ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
					me._thumbnail_menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_menu.style.opacity == 0.0) { me._thumbnail_menu.style.visibility="hidden"; } }, 305);
					me._thumbnail_menu.style.opacity=0;
				}
			}
		}
		me._thumbnail_menu.logicBlock_alpha();
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbs_bg=document.createElement('div');
		el.ggId="thumbs_bg";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(3px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbs_bg.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_menu.appendChild(me._thumbs_bg);
		el=me._node_cloner=document.createElement('div');
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 130;
		el.ggHeight = 130;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggGoUp = function() {
			if (me._node_cloner.ggCloneOffset + me._node_cloner.ggNumCols <= me._node_cloner.ggNumFilterPassed) {
				me._node_cloner.ggCloneOffset += me._node_cloner.ggNumCols;
				me._node_cloner.ggCloneOffsetChanged = true;
				me._node_cloner.ggUpdate();
			}
		}
		el.ggGoDown = function() {
			if (me._node_cloner.ggCloneOffset > 0) {
				me._node_cloner.ggCloneOffset -= me._node_cloner.ggNumCols;
				me._node_cloner.ggCloneOffset = Math.max(me._node_cloner.ggCloneOffset, 0);
				me._node_cloner.ggCloneOffsetChanged = true;
				me._node_cloner.ggUpdate();
			}
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			var parentWidth = me._node_cloner.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner.parentNode.parentNode.ggAvailableWidth : me._node_cloner.parentNode.parentNode.clientWidth) : me._node_cloner.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner.offsetLeft) * me._node_cloner.ggNumRepeat / 100.0) / me._node_cloner.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) ) && false) {
				me._node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
			centerOffsetHor = ((parentWidth - me._node_cloner.offsetLeft) % me._node_cloner.offsetWidth) / 2;
				me._node_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner.getFilteredNodes(tourNodes, filter);
			numNodes = tourNodes.length;
			if ((parentWidth - me._node_cloner.offsetLeft) > (me._node_cloner.offsetWidth * numNodes)) {
				centerOffsetHor = ((parentWidth - me._node_cloner.offsetLeft) - (me._node_cloner.offsetWidth * numNodes)) / 2;
			}
			me._node_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner.ggWidth) + 'px';
				parameter.width=me._node_cloner.ggWidth + 'px';
				parameter.height=me._node_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					keepCloning = false;
				}
			}
			player.setVariableValue('node_cloner_hasDown', me._node_cloner.ggCloneOffset > 0);
			player.setVariableValue('node_cloner_hasUp', me._node_cloner.ggCloneOffset + me._node_cloner.ggNumCols < me._node_cloner.ggNumFilterPassed);
			me._node_cloner.ggNodeCount = me._node_cloner.ggNumFilterPassed;
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode && me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 130px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_cloner.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_cloner.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_cloner.style.transition='';
				if (me._node_cloner.ggCurrentLogicStateVisible == 0) {
					me._node_cloner.style.visibility="hidden";
					me._node_cloner.ggVisible=false;
				}
				else {
					me._node_cloner.style.visibility=(Number(me._node_cloner.style.opacity)>0||!me._node_cloner.style.opacity)?'inherit':'hidden';
					me._node_cloner.ggVisible=true;
				}
			}
		}
		me._node_cloner.logicBlock_visible();
		me._node_cloner.ggCurrentLogicStateVisible = -1;
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner.ggUpdatePosition=function (useTransition) {
			me._node_cloner.ggUpdate();
		}
		me._thumbnail_menu.appendChild(me._node_cloner);
		el=me._thumbs_right=document.createElement('div');
		els=me._thumbs_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYgMzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWxpbmUgcG9pbnRzPSIxMy41LDI3IDIyLjUsMTggMTMuNSw5ICIgY2xhc3M9InN0MCIvPgo8L3N2Zz4K';
		me._thumbs_right__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbs_right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYgMzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWxpbmUgcG9pbnRzPSIxMy41LDI3IDIyLjUsMTggMTMuNSw5ICIgY2xhc3M9InN0MCIvPgo8L3N2Zz4K';
		me._thumbs_right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbs_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg shadow";
		el.ggType='svg';
		hs ='';
		hs+='height : 70px;';
		hs+='position : absolute;';
		hs+='right : -60px;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbs_right.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('node_cloner_hasUp') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbs_right.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbs_right.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbs_right.style.transition='';
				if (me._thumbs_right.ggCurrentLogicStateVisible == 0) {
					me._thumbs_right.style.visibility="hidden";
					me._thumbs_right.ggVisible=false;
				}
				else {
					me._thumbs_right.style.visibility=(Number(me._thumbs_right.style.opacity)>0||!me._thumbs_right.style.opacity)?'inherit':'hidden';
					me._thumbs_right.ggVisible=true;
				}
			}
		}
		me._thumbs_right.logicBlock_visible();
		me._thumbs_right.onclick=function (e) {
			skin.findElements('node_cloner')[0].ggGoUp();
		}
		me._thumbs_right.onmouseenter=function (e) {
			me._thumbs_right__img.style.visibility='hidden';
			me._thumbs_right__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbs_right']=true;
		}
		me._thumbs_right.onmouseleave=function (e) {
			me._thumbs_right__img.style.visibility='inherit';
			me._thumbs_right__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbs_right']=false;
		}
		me._thumbs_right.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_menu.appendChild(me._thumbs_right);
		el=me._thumbs_left=document.createElement('div');
		els=me._thumbs_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYgMzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWxpbmUgcG9pbnRzPSIyMi41LDI3IDEzLjUsMTggMjIuNSw5ICIgY2xhc3M9InN0MCIvPgo8L3N2Zz4K';
		me._thumbs_left__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbs_left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYgMzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWxpbmUgcG9pbnRzPSIyMi41LDI3IDEzLjUsMTggMjIuNSw5ICIgY2xhc3M9InN0MCIvPgo8L3N2Zz4K';
		me._thumbs_left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbs_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg shadow";
		el.ggType='svg';
		hs ='';
		hs+='height : 70px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbs_left.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('node_cloner_hasDown') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbs_left.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbs_left.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbs_left.style.transition='';
				if (me._thumbs_left.ggCurrentLogicStateVisible == 0) {
					me._thumbs_left.style.visibility="hidden";
					me._thumbs_left.ggVisible=false;
				}
				else {
					me._thumbs_left.style.visibility=(Number(me._thumbs_left.style.opacity)>0||!me._thumbs_left.style.opacity)?'inherit':'hidden';
					me._thumbs_left.ggVisible=true;
				}
			}
		}
		me._thumbs_left.logicBlock_visible();
		me._thumbs_left.onclick=function (e) {
			skin.findElements('node_cloner')[0].ggGoDown();
		}
		me._thumbs_left.onmouseenter=function (e) {
			me._thumbs_left__img.style.visibility='hidden';
			me._thumbs_left__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbs_left']=true;
		}
		me._thumbs_left.onmouseleave=function (e) {
			me._thumbs_left__img.style.visibility='inherit';
			me._thumbs_left__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbs_left']=false;
		}
		me._thumbs_left.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_menu.appendChild(me._thumbs_left);
		me.divSkin.appendChild(me._thumbnail_menu);
		el=me._thumbnail_menu_phone_1=document.createElement('div');
		el.ggId="thumbnail_menu_phone_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 96.6667%;';
		hs+='left : 2px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 97.3438%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(3px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_phone_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_phone_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu_phone') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu_phone_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu_phone_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu_phone_1.style.transition='opacity 300ms ease 0ms';
				if (me._thumbnail_menu_phone_1.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu_phone_1.style.visibility=me._thumbnail_menu_phone_1.ggVisible?'inherit':'hidden';
					me._thumbnail_menu_phone_1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_menu_phone_1.style.opacity == 0.0) { me._thumbnail_menu_phone_1.style.visibility="hidden"; } }, 305);
					me._thumbnail_menu_phone_1.style.opacity=0;
				}
			}
		}
		me._thumbnail_menu_phone_1.logicBlock_alpha();
		me._thumbnail_menu_phone_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._thumbnail_menu_phone_1);
		el=me._thumbnail_menu_code=document.createElement('div');
		el.ggId="thumbnail_menu_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 83px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_code.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_code.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._thumbnail_menu_code);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADYCAYAAACJIC3tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm'+
			'91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA4LTE4VDE5OjE1OjI5'+
			'KzA1OjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA4LTE4VDE5OjE1OjI5KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wOC0xOFQxOToxNToyOSswNTozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjMGRjNDhiMi1jOWYyLWY0NGItOGQ2ZC1lZDg5YjJlNDM1MzkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4YjIxMzFlYy02NTgxLTgyNGItYjA4Ni1iZGE1MGQ5ZTA2NjIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NTUxYTg2Ni1hY2JiLWM4NDMtYjMzNi1iODQ2MDFiYjJlY2MiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3'+
			'Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NTUxYTg2Ni1hY2JiLWM4NDMtYjMzNi1iODQ2MDFiYjJlY2MiIHN0RXZ0OndoZW49IjIwMjItMDgtMThUMTk6MTU6MjkrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzBkYzQ4YjItYzlmMi1mNDRiLThkNmQtZWQ4OWIyZTQzNTM5IiBzdEV2dDp3aGVu'+
			'PSIyMDIyLTA4LTE4VDE5OjE1OjI5KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3D7yWwAAHEpJREFUeJzt3XmcXGWd7/HP2aqq16TTnXRWwBAGZREEAYErFwUUMoAXR0ZxBkVI9I6Aguh1m1FnQVDnjno1qCgwCOogRhgWByQgjF4Q2WTfAwRCEpJ0Or1Udy3nPPPH71T3qVNV3ZXlSffg7/165UX3qbNWn+95nvM8zzk4xhiUUna4U70DSr2eac'+
			'CUskgDppRFGjClLNKAKWWRBkwpizRgSlmkAVPKIg2YUhZpwJSySAOmlEUaMKUs0oApZZEGTCmLNGBKWaQBU8oiDZhSFmnAlLJIA6aURRowpSzSgCllkQZMKYs0YEpZpAFTyiINmFIWacCUskgDppRFGjClLNKAKWWRBkwpizRgSlmkAVPKIg2YUhZpwJSySAOmlEUaMKUs0oApZZEGTCmLNGBKWaQBU8oiDZhSFmnAlLJIA6aURRowpSzSgCllkQZMKYs0YEpZpAFTyiINmFIWacCUskgDppRFGjClLNKAKWWRBkwpizRgSlmkAVPKIg2YUhZpwJSySAOmlEUaMKUs0oApZZEGTCmLNGBKWaQBU8oiDZhSFmnAlLJIA6aURRowpSzSgCllkQZMKYs0YEpZpAFTyiINmFIWacCUskgDppRFGjClLNKAKWWRBkwpizRg'+
			'SlmkAVPKIg2YUhZpwJSySAOmlEUaMKUs0oApZZEGTCmL/KnYaOlyR35wgBEwQ/HPKZ4BL4IP7XMuVy16D5QGtnVTHwK+BCwim7mf/pEP8ukLX+b+Py4F9gUeBY4AVgGnAl8BNk60woM6W7nu4MV0BT6jUbSt+6Om0OzbHt7l23w9l2BnApcCewIZCuUj2uebE1oOXRQBzwLPA6sBDzgOGKZuzKst362H3VoyGi7VlCkpwXaBs4AVQFZ+9cFx2K3w264R5wlegBFgAxKq+4EOoA8oT7TSo2a18965Mxksa7hUc16PAUuFywUnS0/5YbpHngpHDp/F2p+9sqbYV1iDlFgvp1ewT3uOjOsQmfFpC3MBF71xAZ2+x0A5nLyoU4qpDdh8pHpWc4LvgDrhytFdfpQlxduISiVy+82he+l81l39AoHrmBm+hwuEBvbtyLF8UQ'+
			'9Hd3fINMYT1uK6tHiuhkttk6kK2FnA5wAfl38F/gkId3CdZ1I3XI+zV/FWfAqUTRavGNF+ygKOf2KET5Va6erMEBlDCOyWyzA/F5APo6rSCyDCkA8jDZfaJlMVsK8B3QAEfAWfHsqch7PdITsTuISxcAFOEIfrFnxToOzkAMNQKeTPWnN8Y5+FvGltmULWwSB1xUIUsak44W2YUttkqgI2E2DszHY5J55+PpM0NNSRqhYCTpaWaNOti0t3LA7MyF4lpwUwGAdKvsOhT4yy+KUCmzNOS1TmLGAWEMV7EwI/BV5s8jjOAtoSyw8DPwIm61PYE/gA0pJbKS+vAx5vYrtpS4BD430AqXpvQLofmnEAsB/jtQgfeAH4/3XmnQccD4wy/heMgN8Ar02wjQXA2+P5DRAAJeAmYCg1bwAcg1yEQ8Zbd39Hc7cUAfDnyN+lsnwZ'+
			'uLaJZXeqqQpYCTkJkiohO4/mq4u14QIguGxWuPrLLdGW64tO69hUJz6NN3e4DAcOrjHFyHEOA/46td7ZSNgn85fAP6emXQ98t4ll/xY4IzXtUOB/MR6UZr27zjZHgNOBlZMsu1c8z56p6ddTP2Al4H3A0tT064DTgEKdZdqBy4F3paZ/I95OWivyve6bmr4KOIXaQKZ9Hvj71LSIKQjYdOsHOwf4Fs0Fv364HP8az/R/vDt8ZmOI35Hu2gpCw7PzAzZ0eWRKhEh1dWtq3e8H9phk+63AstS0PHAhUJxk2cPibaQtpfYkbIapM60F+S7fNMFyrUgw0+GCxiHfBCwHHkxNPwXpqK/n69Qe10+Bv0NKwjTTYPvHIvfrE3kP8MU606ekb2W6BQwkZBdSKeEMBKam1tig5OIaCJb1lJ8udkZruyInU3PiZULDxhkuL8zxCU'+
			'ID8BhwdWq2edSWamlLgUNS01Yi/WqT+RQSgDQPuACp4myLRifPQuTetKPB539P40BPVIt4FSl916Sm/x9k9EzSucDfpKbdCZxN/dKuotGtwieADzf4bG/g20BmG9Zn1XQMGMAngX2cuIb/WjCDxEU61Vo45hoIlvlmYKg3fAyMMaZOm58XQj7r8vSCgMgZK9++B2xJzfphoKfB/nnIVTwpH+/XZI5GqoGNHAOc1MR6mnU09a/6H0SCvr0eBT5GdXXNBf4FeFv8+3HAxanlnkJK/v7t3K6DVC3fmpreBnwH2H0712vFdAjYCHJDnZR1IOeW4PrZB/ObnkMgHIF6rYXiGmAZjj/UXX6azmgdoZOepdozCwKGcg6eXKcfR6osSUuQe416/ifwjtS0XwL3TrhR+b4voPoK+1uq73UcGpdw2+tcqq/6BwD/lx3/+9+CHE+y'+
			'ptCNhOxEpDRpTXy2CQnX8zu43dnIxaw7Me3LSKCnlakPmIshw+eRUiSM//0gKPLo0529fG7JWQz7HRCVJg4XwZAfDdBbfhyMoV7pVRGUDS/N9nltpk9QHjs3vkftvdgy5MqYtozqalye5ho2jgdOSPxugC9Qe+9yJPAXTayvkRLVVaLKVf+NyH5fAsxNfF5m8oaDRi6ltpQ6HGlQSN7/FZGg12s4aUa6OnkocFH883uRoCcNsON9qzts6gNmaHWyrMXn4xiOd+D4TIlzn+noHT1t/8/xdOefQXnoTHAahWs5vj9EroVZ5pmmSq+gLPdhL87xyYRjAXsc+Hlq1oOR5t6kg4CTU9OuY/LSK0BOgmTr6R1I0/PtwN2p+c9HWt+2xyDSCrcuMW02EqxLkScIKkKkCrk93QMVXwZ+lpqWS/3+d8C/7cA2VgFXpqYtQ0rJi6'+
			'k+l38DfHMHtrXTTIeAgUsHreDCqqDAqqfbe0sf2P9zPNR1AJQG65dchmtwnOW0tw1iPDr61zInegyYuPQCeQSm6j5svIKzgtr+q+VUt2pW+r0qRmmu9DoZeGfi9whp5ZOjGf+54iDkPml7tCMXn/NS099BbdfA14GvsmNdNiXgo8BtDT7/l3g7O2IAuUDdlZjmII0eeyWmbUQaVf5IbVfQLjf1AQMwGDcLfgZu7D2YvzjgSzw0c38obj0TTG2DhjHX4HvL6Wwf3O/hJ7nyMxfxq49+kTc/+QL9ne3JwNRViZ/ch7n4421wDyMnZtLRjN9vLUH6vpL+Hfj9JEfYQm2Dwkqkk7XiWmr7hD4JdE2y7np8JGQ/pza4Sbcg1VPDjt/zjSBV5Xp2RgveDGAz0rCSbr1Mbudc4Gmq78+mzLQZTe+X4a7eN3Ha4s8ynOmG0tYG'+
			'JZf5NwJ/OR3tQ++75iYu+uYV7NnXjwO8tDLi0QN7CH0HN5w4ZZnQ8NJsjw0zPfZ4rUzJGyv1vov0UXVWdg0ptW5DRl4kWxZHkZaryZxKdbUMJOfnJY6vQG1z+z5IibOt1R3DeBXtC8iF4cTUPE8iV/oiMpJlksvSpL6N9EHV8xmkuvqtHVh/Zf+eRvb7WqobUAD+kfEL5JSXXjBNSjAPCB2Xy7qPZTg7B0pb30/DcAXL6Wwfet/PbmTFP3yXRX39bEDa2I+66zX2f6iP4TZ/0tPFLxs2dvq8ON4fVvEItaXYMciN9Cmp6Tcw+U17B7VVNZAWym8i9w8Xxz+/t8585wC9k2yjnspBjSB9To8lPutDqnQvpubdXp+Ot9GIgzRIpL+/7fUrajuTr0b6Tyt29Jh2imkRMDeCLUELf2jZC8LiDOTLaxyun97AigtX0FYq0S'+
			'dVhz0L4PTky5y4cg3Z0ZDQn+Q+LIR81uHZBQHGSY/34PvImMKKHiTwb05MGwX+XxOH99fAW5qYr5HF1Pa5bas1SKAqx/QppHFlZzgVuYdLuh3Z5+T9bA75DtP9V9vrW0jLL8AfkEahKW81TJs2VcSS4zLs5gDTioykGGfMNQTBR+lsk3D90yW0l0pshVMcGXe2ELi1BOcfcN/m/t71I7y6sJWWfOPve+w+bH58HxZCabxS8SDwC6r7jtKlyE1MXnp1IzfhSYPAehpf3CLk+JMtiB9DWtB25Nm5e5BGgkXUtsZtryOQhqFkl8WryL3j48h9XfIiNBcZk3gije+jtsXfIt/jlUgf27QzLUow48CMcoE3jb4Cjv8a8EOkajOEMZcSBMvobBuUcK2ohOs0B36MDFeaB5xh4BgcKRGbEYSGF+f4bJjpJfvDKr5DdSmWVKK5'+
			'URtnIH1PY4eKVKXePsm/dIPIQmqHG22PHyAn5c6wGLgMaf6vKCDHV2ny/w5SaiXtj9QQtrcLIqkP+N/IxWNamhYBKzvQWi5yTt/NuOFwiON/ETgWY44hCD5GR9vQ+35yAysuvCQZrkup/SONyH+aq34HIWPjEv3aRpEHkFKsnpupbi6uZy7w8dS024GrkEdJ1jX4twG5yqdLx2VIY8V00IVcBN+Ymv4laltCP4scd9IJyEiS171pETAA48EJAw/xzsH7wWs1GHM3uewfmNHOqT+9gRVfvYT2YuNwGbjWhztdHMq+21TG/NAwknV5dkEA1f1hFd+hfhPzt5l4Cy7yxPbiOss1I6S2dXI20qFbr1qf7tT12LYBwy5yL5vUaIBwD3KReGdq+uXIaJG0IaSK+1xq+keRvrH0voPU4Jvdn0bS6623HeumzT1Y2YGgHPGJTT'+
			'exasah0N0Do3lOv2IlX//GpbSNh+uHpIYvGbi5Dc7OQv72d81l47xWMoXm7neNgacWBAxnXbzQUK5uHHkAGXH+NuTeyEU6MO+cZLUzkIcxVyWWewLpd2rWvyNVqSWMP8yZRYK2LjXvc0g3QuUByBApCZtVBP4DeENif9MjSyoORS5ule25wEtIU3yji87zSKA+jQTfIBeB/ZBO4kdT85eBW+PPKvsz2UiZtNVUfycTjdy3xjFm17dmli53Rqi+opwA3OJHEPouJy75Ai+sX8z5V/yY0351Z+Ux4UYl182dcMaQ72z62klz+Mlf7c78eV20lcycEHMX1dWYz5IaUVD0HVoKhot/3MchzxYYaG2+UHeANs8lhPT7OnzkBColZg2Ty7mOzB04DhGGUmTwHYeyMemz1GP8xA2QE65UPQsOte90jIgX9Bzo9D2MSbTdhxGl'+
			'6r+9PFte/ZRyvZOjjeqxjlXHBpBzHVo8l5HQ1Ht/ZPILrgx6rvdMWMP9MUDGcWjzXUIjx5cPI4pRzfFUfSezb3t4lz8TNm1KMICyD0EQ8e3vr6BwY8TeA1sZBgqThCvvO5vOXbaIa5fOhqEC2Y2DtM/qwIlqTtYambJhc6fLzYe0cuALRbzIELoTN/E7QM5zyTgOTw6P0uq5LMplGCqHOA5EhjINRi+0eC4516EQGVygrxSScR1mBh6D5YhO36MQRYxEYwO+kidvASDjOrR6LqOhYSSKcOScqzpUg4R3ZuBRiAw3bthKi+dK0DDs19FCd+AzVA4ZlW2Z1LakyHQdXEdeYVeIIkydhp9KcdTme+Q8h2eHCjwwkOfIrnbmZwMGyiGl8YeHkif5aGU7ruPQ5rkUo6pjCtPbaXVd2gOP9aNFbls/wMJchldGixzW1cZuLR'+
			'mKoWEojCgbY5xp0Bc2rQLmtMDoalhw7RbC4tgDWo2qhTe1wxlDgbP5nLMW8Yuls2E49CiZua8O5td2tWUHO7MZyk28gbe1aPjPfXKc+IYMb322wNZWZ+zSZ5ATOus4lA0UTUSL65IPI27cNMjnn17Lbi0Z/vXNu7O4LUshbiwZjSICxyE04DrjJ/yGQolfrO/noYE8vuPw6OAIPYHPW2a08sjgCEfNaueshd10xcFwgMiA78iZ2eK5bCqWuXvLIHu3ZZmXCxgqR7R6UjCUjSFwHALXYagc8bu+IX69aZCvPb+ejOuQiS8eR3S1c1xPB++f10VPxmdLKRzbx5wrxxq4DpuLZfJhRM5z6A58IuKi2YyXuJULzh8H8ty6cZBfbxrgd31DHN7Vxnl7zOHk3pnyUox43mJccla+n5wnF5w/9A+zMJdhUUtAKS6NTOWYXIcW'+
			'z+O54VGe6hvkl+v7uWptH12Bx5ZSyDu623nrjDbePqudo2e1U4qjFcQ1hcIU1NRgOlURHW5xW2HoRzC8aqwecRp1wgXclIEPG8/pO/sjC7nm5F4YKu9F2fwzDgcQRnf2dratWNLTeUkUmbcmjrCmiljR3+bynnvz/OMvB3A8h3I8dCrjOGwplVlXKNHpe+zWluXG9f38w7PreGxwdKwKdPCMVg6a0Upk4ITZnRzX08Ha0RKt8VW5zXd5eaTIJ594hXv7G7X+i3f3dHLh3vOZmwvIlyOyrsNgGNHpudw/kOcHazZx1+Yhju3p4PI3787sbMBzw6NEBroCj75SmdDAN194jZ+82sdI2Pgic0x3BxfuPZ/DutqJIsNAOWRtoURvxueWjQN896WNbC6V6fI9Ltx7AQd2trChUKIr8NlaDunJ+AQOfGP1a1y5djOvjlbXXj'+
			'Ouwyf2mMPyRT2UjSEyht5sQGSgr1RmZuDxk7V93L81z22bBtmvI8fX3riA7sCnEEU4jkN34LGhUOaxoRF++PJm7to82PB42jyXc/eYw1f2mseWUnnsLWFzswE9U/Bu+mkTMKeNW8rPw9avQjQMjoSrXlP8TQbOmA2brz6ok498cQmUDRSiS3HiEQ/GkPG9J/fvndWZC7wF4XjdvGHACr5DewTnX7aRvR/Pk8/K1X51vsAVr2zmwa155mUDjpvdyVWv9PHyaOPXbrT7Lkd2tfPMUIGujMdwOaLFcxgoR6zON3evvbg1S4cv1cAO32V9oUxX4PHU0GjVvdN7emdy6MxWrl7bR2hgUUvA88MFRiPD+kL6Vq2+Ja1Zvr//bnjA99Zs4p4twyzIBTw+NMpgebyWtiiXYW7WZ12hxMJchnWFEru1ZMg4DrdPcNIDzM8FeI6D'+
			'MYa923KUjeHFkSLzsgG/T11wugKPTt8jNAbHcVgUVwPXjEz2qpNxp83v4tXREs/H3/dbOlu5YUN/08vvLNMjYC4nuC3ckii9GpVcNwNnZGFTPuvylxe8gbsPmwkD5cpn8qYjY/A9l317Z9Ge8WkmYF7OY2SwxJoLHsR9cpDIkard5mJIOEXVi12p1XMxMGFp99/dVJzr0+IezG3BKa2G0XuqSq664QI2tQG37tXGPft1wMjYCfEzEq8Sq9esNvE+ePSvXMOmR9Kv5vjTkH8dB2sqTX1HswvGUCzcAeEwH2gwQuMmZFzgpngRtrZ7GN+Vl8qLq5Fxidu+C1mXwroR1q/cGcPjmjJRp2e9VxQkJf9m23INqbd8+nGPHVXpnqi3LZD9rffGp2bX18w86e82qLMfu8zUlmAG3FbC0gsMjN7D8XFrYTpclZJrc2IxGdoUmf'+
			'QpdjEyJT26e0JuzqN/1Xryqxu+lqIVGcO3Eul8PhAZyXAVcBTSoVx5n0dlbOQNyLi8B5Amex/ppP4QMhriLmQ41GnAfcijI6cjb0V6CblgHIgMmL0XeZTleuTJ6KOQt+j+CFgbb/cgpKN4JfLQ4cPIWL0OpKP37MR2fx6v53Bk4PGVjL/lqRV5H8h1yPsSj0ce3zk93qcwPoarkefmbkM60c9FuhEeQkbq/xXyNt/heN5W5MkCg7wgaF18TNchg38fiOdZgDzy/zdIw+kj8e+fjNfrxdMfjY8pjI/1P5Hn0faN9+c65CmGk5AL87VM/OZhK6auBDPIKeeTH72Ds8JhrnDqh+vDJMLVhIuQhwzrXd5rLyhxXXKCcIE8YnEc48ODZiEnwEeQP2KyJNgTeZcHwP9A3hW4FAldgATwDYwPBToSGdt3JPKA5a3IaI0MMvL9'+
			'bGQU/MnIiXUvMAd5E1eyPrsnMsoCZMDwZ5A3/u6JPDayBgnYvcjLaE4CroinJZ/TysXLtyAvX12OXOCWIU8UzI5/Pz0+/t2RUSsnxZ9X3tp8XLz8EfH0WfH32Iv8nduQp8VBHm5dGi/jxL//eTxvpT/xWGQkyLuQcZ7tyACFuYyPdDkICVgPcm4vQQYX97DzS+umTE3A4nC57TC6irbRu/iYU/2WI5Bq4RlsW7gqLoqM+XyYejOiMWZrGDcVj/1zoDxcJv9iw4AFyJPMa5BXB/QiQ4tuQJ4PexuNH5V/BHgGKaUq3/Xvkav64cTPmiLfSBYpAVzkRJkbb2eE8c5dg5R0LyEj1tPbrdSXn4i3fToSlNF4/sqylWrTxnib6dcFVIZADSGl37uRJ4lDJEBPMP7IyQBy4SohJcRW5GTPIxeJPFJKFpHScyZyUarc9PlIyX'+
			'w88jq525EwlOL964+/m4eQi8oHE8sW4232x99l5fs+HLkIrUFqCXshF69dbmqqiJVw3QGDl+OaQk1pczNyddy+Z3wchzCMLt46Uow6s5kvgWkDfuc4zg3pCr2X9Rh5Jc/wUw3/Xw2zkJPyUuR9iLsjJ9GvkRP/VKpflb2W8TC9hJQYpXiZCDl5Csgj+wZ50ngYOWn3RUqTJ+P5+5DGm98iV/LK1/QsY08OVG23cv+2GjmxSoyXcvl4OeJt/RYZZ7mZ6hHwReRELcTb/494n4eQZ9lKSLWwK57WF09/EAnqAuQkvw8J1NFI6T3K+Hs1not//2O8zY3IQ5Ovxdsdjj/LJdb3THxMleAPI1XDXLz+J+LPgvg7HYy/3xnx97HLbrCTpqSZvnytM1K4k9zgZdAgXGcwQbi6gR8fMoNlFyyW+7B6798II+bNaGdxd+cRYRT1'+
			'IidUzTr9zoD++zbz+Dn3YUp1W9J8xksZkD9g5WSvLOAkPncSn/mMV3EqpVUmPoTKgN1KGCvrWoQ8tBimPnMT81TG6CUPPLndyraS201+XrEAOanTHWaVbSUHtKRr3Cb1eRa5GOWRi0NyHzJIcGcg31/l75A8prQsEuJRxkuoyvoqy6XnAfkfO65PrHdOvE9DfzLN9IW7oUG4dqRaWCMeJdNoVLgw4LgOjudg6vfLpscUVuZK/rXSP1d+Ty5bOTmKVI+GT59gLzf4rNHP9babHMMX1vm8Yi31Vdbf6BjrTStQfVzJfaiU8FupNlHfQAEJSr31RQ3mAbk4Je3yho2kKbkHy1+LGzUuuXZKuJSaDqYkYOEGnNSGNVzqdWlqWhHLXA+Ejk/RaeEXTHLPpdR/V1PSyKHUn4qpHyql1OuYBkwpizRgSlmkAVPKIg2YUhZpwJ'+
			'SySAOmlEUaMKUs0oApZZEGTCmLNGBKWaQBU8oiDZhSFmnAlLJIA6aURRowpSzSgCllkQZMKYs0YEpZpAFTyiINmFIWacCUskgDppRFGjClLNKAKWWRBkwpizRgSlmkAVPKIg2YUhZpwJSySAOmlEUaMKUs0oApZZEGTCmLNGBKWaQBU8oiDZhSFmnAlLJIA6aURRowpSzSgCllkQZMKYs0YEpZpAFTyiINmFIWacCUskgDppRFGjClLNKAKWWRBkwpizRgSlmkAVPKIg2YUhZpwJSySAOmlEUaMKUs0oApZZEGTCmLNGBKWaQBU8oiDZhSFmnAlLJIA6aURRowpSzSgCllkQZMKYs0YEpZpAFTyiINmFIWacCUskgDppRFGjClLNKAKWWRBkwpizRgSlmkAVPKIg2YUhZpwJSySAOmlEUaMKUs0oApZZEGTCmLNGBK'+
			'WaQBU8oiDZhSFmnAlLLovwAxXa/VuubPewAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 216px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -79px;';
		hs+='visibility : inherit;';
		hs+='width : 216px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.onclick=function (e) {
			player.openUrl("https:\/\/www.vamxm.com","_self");
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs=basePath + 'images/image_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 122px;';
		hs+='position : absolute;';
		hs+='right : 11px;';
		hs+='top : -34px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_2.onclick=function (e) {
			player.openUrl("https:\/\/www.venkateshmotors.net","_self");
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_2);
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'googleroadmap';
		el.ggId="Map 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 1px solid #000000;';
		hs+='bottom : 9px;';
		hs+='height : 205px;';
		hs+='left : 7px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 261px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._map_1);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs=basePath + 'images/image_3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 19px;';
		hs+='cursor : pointer;';
		hs+='height : 61px;';
		hs+='position : absolute;';
		hs+='right : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 63px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_3.onclick=function (e) {
			me._map_1.ggVisible = !me._map_1.ggVisible;
			var flag=me._map_1.ggVisible;
			if (me._map_1.ggVisible) {
				if (me._map_1.ggMapNotLoaded && me._map_1.ggInitMap) {
					me._map_1.ggInitMap(false);
					me._map_1.ggInitMapMarkers(true);
				}
			} else {
				if (me._map_1.ggClearMap) me._map_1.ggClearMap();
			}
			me._map_1.style.transition='none';
			me._map_1.style.visibility=((flag)&&(Number(me._map_1.style.opacity)>0||!me._map_1.style.opacity))?'inherit':'hidden';
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_3);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs=basePath + 'images/image_4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 118px;';
		hs+='left : 162px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 163px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_4);
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs=basePath + 'images/image_5.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 104px;';
		hs+='position : absolute;';
		hs+='right : 179px;';
		hs+='top : -34px;';
		hs+='visibility : inherit;';
		hs+='width : 155px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_5.onclick=function (e) {
			player.openUrl("https:\/\/www.corporatenesst.com","_self");
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_5);
		me._stop_rotate_image.logicBlock_visible();
		me.elementMouseOver['stop_rotate_image']=false;
		me._start_rotate_image.logicBlock_visible();
		me.elementMouseOver['start_rotate_image']=false;
		me.elementMouseOver['button_image_right']=false;
		me.elementMouseOver['button_image_left']=false;
		me.elementMouseOver['button_image_down']=false;
		me.elementMouseOver['button_image_up']=false;
		me._button_image_normalscreen.logicBlock_visible();
		me.elementMouseOver['button_image_normalscreen']=false;
		me._button_image_fullscreen.logicBlock_visible();
		me.elementMouseOver['button_image_fullscreen']=false;
		me._enter_vr.logicBlock_visible();
		me.elementMouseOver['enter_vr']=false;
		me._thumbnail_menu_phone.logicBlock_alpha();
		me.elementMouseOver['close_popup_phone']=false;
		me._btn_close_popup_phone.logicBlock_visible();
		me._btn_close_popup_phone_active.logicBlock_visible();
		me.elementMouseOver['zoomout']=false;
		me.elementMouseOver['zoomin']=false;
		me._gyro_on.logicBlock_alpha();
		me.elementMouseOver['gyro_on']=false;
		me._gyro_off.logicBlock_alpha();
		me.elementMouseOver['gyro_off']=false;
		me._thumbnail_menu_toggle.logicBlock_alpha();
		me.elementMouseOver['thumbnail_menu_toggle']=false;
		me._menu_icon.logicBlock_visible();
		me._menu_icon_active.logicBlock_visible();
		me._thumbnail_menu.logicBlock_alpha();
		me._node_cloner.logicBlock_visible();
		me._thumbs_right.logicBlock_visible();
		me.elementMouseOver['thumbs_right']=false;
		me._thumbs_left.logicBlock_visible();
		me.elementMouseOver['thumbs_left']=false;
		me._thumbnail_menu_phone_1.logicBlock_alpha();
		el = me._thumbnail_menu_code;
		;
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggLastNodeId=null;
		me._map_1.ggMarkerArray=[];
		me._map_1.ggGoogleMarkerArray=[];
		me._map_1.ggLastZoom = -1;
		me._map_1.ggLastLat = 0.0;
		me._map_1.ggLastLng = 0.0;
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._map_1.ggRadar.update=function() {
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var radar=me._map_1.ggRadar;
			var map=me._map_1.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_1.ggMapId);
				pan -= me._map_1.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat()) && (gps[1]==radar.activeNodeLatLng.lng())) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.976563;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat() * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=8;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng();
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat();
					radar_path.push(new google.maps.LatLng(y, x));
				}
				if (radar.poly) {
					radar.poly.setMap(null);
					radar.poly = null;
				}
				radar.poly = new google.maps.Polygon({
					paths: radar_path,
					strokeColor: '#ff0000',
					strokeOpacity: 0.8,
					strokeWeight: 1,
					fillColor: '#ff0000',
					fillOpacity: 0.35
				});
				radar.poly.setMap(map);
			} else {
				if (radar) {
					activeNodeLatLng = new google.maps.LatLng(0,0);
					if (radar.poly) {
						radar.poly.setMap(null);
						radar.poly = null;
					}
				}
			}
		}
		me._map_1.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map_1.ggSetLayer=function(layerIndex) {
			if (Array.isArray(me._map_1.ggMapLayers) && layerIndex >= 0 && layerIndex < me._map_1.ggMapLayers.length) {
				me._map_1.ggMap.setMapTypeId(me._map_1.ggMapLayers[layerIndex]);
			}
		}
		me._map_1.ggInitMap=function(keepZoom) {
			var mapType = player.getMapType(me._map_1.ggMapId);
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (!me._map_1.ggMapId) return;
			if (!me._map_1.ggMapId.startsWith('google') && Object.keys(mapDetails).length === 0) return;
			if (mapType == 'file') {
				me._map_1.style.backgroundColor = mapDetails['bgcolor'];
				me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map_1.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_1.ggMapId);
			}
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = new google.maps.LatLng(me._map_1.ggLastLat, me._map_1.ggLastLng);
			}
			if (mapType == 'web') {
				var mapTypeId;
				if (me._map_1.ggMapId == 'googleroadmap') {
					mapTypeId = google.maps.MapTypeId.ROADMAP;
				} else if (me._map_1.ggMapId == 'googlehybrid') {
					mapTypeId = google.maps.MapTypeId.HYBRID;
				} else if (me._map_1.ggMapId == 'googlesatellite') {
					mapTypeId = google.maps.MapTypeId.SATELLITE;
				} else if (me._map_1.ggMapId == 'googleterrain') {
					mapTypeId = google.maps.MapTypeId.TERRAIN;
				} else {
					mapTypeId = mapDetails['mapprovider'];
				}
				if (me._map_1.ggLastZoom == -1) me._map_1.ggLastZoom = 14;
				var initZoom = keepZoom ? me._map_1.ggLastZoom : 14;
				var mapOptions = {
					zoom: initZoom,
					center: activeNodeLatLng,
					mapTypeId: mapTypeId,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false,
					gestureHandling: 'greedy'
				};
				if (mapDetails.hasOwnProperty('maplimits') && (mapDetails['maplimits'].length == 4)) {
					mapOptions.restriction = {
						strictBounds: false,
						latLngBounds: {
							north: parseFloat(mapDetails['maplimits'][0]),
							east: parseFloat(mapDetails['maplimits'][1]),
							south: parseFloat(mapDetails['maplimits'][2]),
							west: parseFloat(mapDetails['maplimits'][3]),
						}
					}
				}
				me._map_1.ggMap = new google.maps.Map(me._map_1, mapOptions);
				if (mapTypeId == 'googlecustomstyle') {
					var styledMapType = new google.maps.StyledMapType(JSON.parse(mapDetails['googlecustomstylecode']), {name: 'Styled Map'});
					me._map_1.ggMap.mapTypes.set('styled_map', styledMapType);
					me._map_1.ggMap.setMapTypeId('styled_map');
				}
				if (mapTypeId == 'googlemap') {
					if (mapDetails.hasOwnProperty('googlelayerstyles')) {
						me._map_1.ggMapLayers = [];
						for (let layerIndex = 0; layerIndex < mapDetails['googlelayerstyles'].length; layerIndex++) {
							let layerStyle = mapDetails['googlelayerstyles'][layerIndex];
							if (layerStyle.indexOf('/') != -1) {
								var mapTypeId = 'custom' + layerIndex;
								me._map_1.ggMapLayers.push(mapTypeId);
								me._map_1.ggMap.mapTypes.set(mapTypeId, new google.maps.ImageMapType({
								getTileUrl: function(coord, zoom) {
									var urlString = layerStyle;
									urlString = urlString.replace('{s}', 'a');
									urlString = urlString.replace('{z}', zoom);
									urlString = urlString.replace('{x}', coord.x);
									urlString = urlString.replace('{y}', coord.y);
									return urlString;
								},
								maxZoom: 19,
								tileSize: new google.maps.Size(256, 256),
								name: mapDetails['googlelayernames'][layerIndex]
								})) ;
							} else {
								me._map_1.ggMapLayers.push(layerStyle);
							}
						}
						me._map_1.ggMap.setOptions({
							mapTypeControl: true,
							mapTypeControlOptions: {
								style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
								mapTypeIds: me._map_1.ggMapLayers
							}
						});
						me._map_1.ggMap.setMapTypeId(me._map_1.ggMapLayers[0]);
					} else {
						me._map_1.ggMap.setMapTypeId(mapDetails['mapstyle']);
					}
				}
				if (mapTypeId == 'openstreetmap') {
					me._map_1.ggMap.mapTypes.set('openstreetmap', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['mapstyle'] == 'streets') {
								return 'https://tile.openstreetmap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							} else if (mapDetails['mapstyle'] == 'outdoors') {
								return 'https://a.tile.opentopomap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapstyle'] == 'outdoors' ? 17 : 18
					}));
				}
				if (mapTypeId == 'mapbox') {
					if (mapDetails.hasOwnProperty('mapboxlayerstyleurls')) {
						me._map_1.ggMapLayers = [];
						for (let layerIndex = 0; layerIndex < mapDetails['mapboxlayerstyleurls'].length; layerIndex++) {
							var mapTypeId = 'mapbox' + layerIndex;
							me._map_1.ggMapLayers.push(mapTypeId);
							me._map_1.ggMap.mapTypes.set(mapTypeId, new google.maps.ImageMapType({
								getTileUrl: function(coord, zoom) {
									var layerStyle = mapDetails['mapboxlayerstyleurls'][layerIndex];
									if (!layerStyle.startsWith('mapbox:')) {
											if (layerStyle == 'satellite') {
												var urlString = 'https://api.mapbox.com/v4/mapbox.' + layerStyle +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails["mapkey"];
											} else {
												var urlString = 'https://api.mapbox.com/styles/v1/mapbox/' + layerStyle +  '-v11/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
											}
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
									} else {
										layerStyle = layerStyle.slice(layerStyle.indexOf('styles/') + 7)
										var urlString = 'https://api.mapbox.com/styles/v1/' + layerStyle + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
									} 
								},
								maxZoom: 18,
								tileSize: new google.maps.Size(256, 256),
								name: mapDetails['mapboxlayernames'][layerIndex]
							}));
						}
						me._map_1.ggMap.setOptions({
							mapTypeControl: true,
							mapTypeControlOptions: {
								style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
								mapTypeIds: me._map_1.ggMapLayers
							}
						});
						me._map_1.ggMap.setMapTypeId(me._map_1.ggMapLayers[0]);
					} else {
						me._map_1.ggMap.mapTypes.set('mapbox', new google.maps.ImageMapType({
							getTileUrl: function(coord, zoom) {
								if (mapDetails['styleurl'] == '') {
									if (mapDetails['mapstyle'] == 'satellite') {
										var urlString = 'https://api.mapbox.com/v4/mapbox.' + mapDetails["mapstyle"] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails["mapkey"];
									} else {
										var urlString = 'https://api.mapbox.com/styles/v1/mapbox/' + mapDetails["mapstyle"] +  '-v11/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
									}
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
								} else {
									var styleurlstring = mapDetails['styleurl'];
									styleurlstring = styleurlstring.slice(styleurlstring.indexOf('styles/') + 7);
									var urlString = 'https://api.mapbox.com/styles/v1/' + styleurlstring + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
								}
							},
							tileSize: new google.maps.Size(256, 256),
							name: mapDetails['title'],
							maxZoom: 18
						}));
					}
				}
				if (mapTypeId == 'custom') {
					if (mapDetails.hasOwnProperty('customlayerurltemplates')) {
						me._map_1.ggMapLayers = [];
						for (let layerIndex = 0; layerIndex < mapDetails['customlayerurltemplates'].length; layerIndex++) {
							var mapTypeId = 'custom' + layerIndex;
							me._map_1.ggMapLayers.push(mapTypeId);
							me._map_1.ggMap.mapTypes.set(mapTypeId, new google.maps.ImageMapType({
								getTileUrl: function(coord, zoom) {
									var urlString = mapDetails['customlayerurltemplates'][layerIndex];
									urlString = urlString.replace('{s}', 'a');
									urlString = urlString.replace('{z}', zoom);
									urlString = urlString.replace('{x}', coord.x);
									urlString = urlString.replace('{y}', coord.y);
									return urlString;
								},
								maxZoom: parseInt(mapDetails['customlayermaxzooms'][layerIndex]),
								tileSize: new google.maps.Size(256, 256),
								name: mapDetails['customlayernames'][layerIndex]
							}));
						}
						me._map_1.ggMap.setOptions({
							mapTypeControl: true,
							mapTypeControlOptions: {
								style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
								mapTypeIds: me._map_1.ggMapLayers
							}
						});
						me._map_1.ggMap.setMapTypeId(me._map_1.ggMapLayers[0]);
					} else {
						me._map_1.ggMap.mapTypes.set('custom', new google.maps.ImageMapType({
							getTileUrl: function(coord, zoom) {
								var urlString = mapDetails['mapurltemplate'];
								urlString = urlString.replace('{s}', 'a');
								urlString = urlString.replace('{z}', zoom);
								urlString = urlString.replace('{x}', coord.x);
								urlString = urlString.replace('{y}', coord.y);
								return urlString;
							},
							tileSize: new google.maps.Size(256, 256),
							name: mapDetails['title'],
							maxZoom: mapDetails['mapmaxzoom']
						}));
					}
				}
				google.maps.event.addListener(me._map_1.ggMap, 'zoom_changed', function(){
					me._map_1.ggRadar.update();
				});
			} else if (mapType == 'file') {
				if (me._map_1.ggLastZoom == -1) me._map_1.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map_1.ggLastZoom : 7;
				var mapOptions = {
				  backgroundColor: mapDetails['bgcolor'],
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: activeNodeLatLng,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false,
					gestureHandling: 'greedy'
				};
				me._map_1.ggMap = new google.maps.Map(me._map_1, mapOptions);
				var customMapType = new google.maps.ImageMapType({
					getTileUrl: function(coord, zoom) {
						if (me._map_1.ggTileAvailable(coord.x, coord.y, zoom)) {
							return basePath + 'images/maptiles/' + me._map_1.ggMapId + '/' + zoom + '/' + coord.x + '_' + coord.y + '.' + mapDetails['tileformat'];
						} else {
							return null;
						}
					},
					tileSize: new google.maps.Size(256, 256),
					minZoom: 7,
					maxZoom: 7 + mapDetails['zoomlevels'],
					name: mapDetails['title'],
				});
				me._map_1.ggMap.mapTypes.set(me._map_1.ggMapId, customMapType);
				me._map_1.ggMap.setMapTypeId(me._map_1.ggMapId);
				me._map_1.ggCalculateFloorplanDimInDeg(mapDetails);
				google.maps.event.addListener(me._map_1.ggMap, 'center_changed', function() {
					me._map_1.ggCheckBounds(mapDetails);
				});
				google.maps.event.addListener(me._map_1.ggMap, 'zoom_changed', function() {
					me._map_1.ggCheckBounds(mapDetails);
					me._map_1.ggRadar.update();
				});
			}
			me._map_1.ggMapNotLoaded = false;
		}
		me._map_1.ggClearMap=function() {
		me._map_1.ggClearMapMarkers();
		me._map_1.ggMap = null;
		me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggClearMapMarkers=function() {
			me._map_1.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map_1.ggGoogleMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.setMap(null);
				}
			}
			me._map_1.ggGoogleMarkerArray=[];
		}
		me._map_1.ggCenterNode=function(nodeId) {
			if (!me._map_1.ggMap) return;
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng(nodeId);
			} else {
				gps=player.getNodeMapCoords(nodeId, me._map_1.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = new google.maps.LatLng(gps[0], gps[1]);
				me._map_1.ggMap.panTo(markerLocation);
			}
		}
		me._map_1.ggFitBounds=function(force) {
			if (me._map_1.ggMapNotLoaded) return;
			if (!me._map_1.ggMap) return;
			if (!me._map_1.ggMarkerBounds.isEmpty()) {
				if (me._map_1.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map_1.ggGoogleMarkerArray).length > 1) {
					me._map_1.ggMap.fitBounds(me._map_1.ggMarkerBounds, 30);
				} else {
					me._map_1.ggMap.setCenter(me._map_1.ggMarkerBounds.getCenter());
					if (player.getMapType(me._map_1.ggMapId) == 'web') {
						me._map_1.ggMap.setZoom(18);
					} else {
						me._map_1.ggMap.setZoom(7);
					}
				}
			}
		}
		me._map_1.ggInitMapMarkers=function(updateMapBounds) {
			if (!me._map_1.ggMap) return;
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map_1.ggMarkerBounds = new google.maps.LatLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map_1.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map_1.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = new google.maps.LatLng(gps[0], gps[1]);
					marker = new google.maps.Marker({position: markerLocation,map: me._map_1.ggMap});
					marker.setTitle(player.getNodeTitle(id));
					marker.setClickable(true);
					marker.ggId=id;
					google.maps.event.addListener(marker, 'click', function() {
						player.openNext('{' + this.ggId + '}');
						activeNodeLatLng=me.position;
						lastFov=-1; // force radar update
					});
					me._map_1.ggGoogleMarkerArray[id] = marker;
					me._map_1.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && !me._map_1.ggMarkerBounds.isEmpty() && updateMapBounds) {
				me._map_1.ggFitBounds(false);
			}
			skin.updateSize(me._map_1);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
			this.ggRadar.update();
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'file') {
				return;
			}
			me._map_1.ggMapId = mapId;
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggLastZoom = me._map_1.ggMap.getZoom();
				me._map_1.ggLastLat = me._map_1.ggMap.getCenter().lat();
				me._map_1.ggLastLng = me._map_1.ggMap.getCenter().lng();
				me._map_1.ggClearMap();
				me._map_1.ggInitMap(true);
				me._map_1.ggInitMapMarkers(false);
			}
		}
		me._map_1.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._map_1.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._map_1.mapHeightInDeg = me._map_1.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._map_1.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._map_1.mapWidthInDeg = me._map_1.mapHeightInDeg * mapAR;
			}
		}
		me._map_1.ggInCheckBounds=false;
		me._map_1.ggCheckBounds=function(mapDetails) {
			if (me._map_1.ggInCheckBounds) return;
			me._map_1.ggInCheckBounds = true;
			var mapCenter = me._map_1.ggMap.getCenter();
			var currentZoom = me._map_1.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map_1.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map_1.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng();
			var y = mapCenter.lat();
			var xTemp = x;
			var yTemp = y;
			if (me._map_1.mapWidthInDeg < me._map_1.clientWidth * pixelInDeg) {
				var xMargin = (me._map_1.clientWidth * pixelInDeg - me._map_1.mapWidthInDeg) / 2;
				if (x < me._map_1.mapWidthInDeg / 2 - xMargin) x = me._map_1.mapWidthInDeg / 2 - xMargin;
				if (x > me._map_1.mapWidthInDeg / 2 + xMargin) x = me._map_1.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._map_1.mapWidthInDeg - xOffset) x = me._map_1.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._map_1.mapHeightInDeg < me._map_1.clientHeight * pixelInDeg) {
				var yMargin = (me._map_1.clientHeight * pixelInDeg - me._map_1.mapHeightInDeg) / 2;
				if (y < -me._map_1.mapHeightInDeg / 2 - yMargin) y = -me._map_1.mapHeightInDeg / 2 - yMargin;
				if (y > -me._map_1.mapHeightInDeg / 2 + yMargin) y = -me._map_1.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._map_1.mapHeightInDeg + yOffset) y = -me._map_1.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				me._map_1.ggMap.setCenter(new google.maps.LatLng(y, x));
			}
			me._map_1.ggInCheckBounds = false;
		}
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('autorotatechanged', function(event) {
			me._stop_rotate_image.logicBlock_visible();
			me._start_rotate_image.logicBlock_visible();
		});
		player.addListener('beforechangenode', function(event) {
			if (
				(
					((player.getVariableValue('vis_loader') == true))
				)
			) {
				me._loading.style.transition='none';
				me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
				me._loading.ggVisible=true;
			}
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._node_cloner.ggInstances.length; i++) {
				me._node_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me._stop_rotate_image.logicBlock_visible();
			me._start_rotate_image.logicBlock_visible();
			me._thumbnail_menu_phone.logicBlock_alpha();
			me._node_cloner_phone.ggUpdateConditionNodeChange();
			me._gyro_on.logicBlock_alpha();
			me._gyro_off.logicBlock_alpha();
			me._thumbnail_menu_toggle.logicBlock_alpha();
			me._thumbnail_menu.logicBlock_alpha();
			me._node_cloner.ggUpdateConditionNodeChange();
			me._thumbs_right.logicBlock_visible();
			me._thumbs_left.logicBlock_visible();
			me._thumbnail_menu_phone_1.logicBlock_alpha();
			if (me._map_1.ggLastActivMarker) {
				if (me._map_1.ggLastActivMarker._div.ggDeactivate) me._map_1.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._map_1.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map_1.ggLastActivMarker=marker;
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
			me._map_1.ggRadar.update();
		});
		player.addListener('changevisitednodes', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._node_cloner.ggInstances.length; i++) {
				me._node_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changevisitednodes();
				}
			}
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me._thumbnail_menu_phone.logicBlock_alpha();
			me._thumbnail_scroller_phone.ggUpdatePosition();
			me._thumbnail_menu_toggle.logicBlock_alpha();
			me._thumbnail_menu.logicBlock_alpha();
			me._node_cloner.logicBlock_visible();
			me._thumbs_right.logicBlock_visible();
			me._thumbs_left.logicBlock_visible();
			me._thumbnail_menu_phone_1.logicBlock_alpha();
			if (me._map_1.ggVisible) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap(false);
				me._map_1.ggInitMapMarkers(true);
			}
		});
		player.addListener('fullscreenenter', function(event) {
			me._button_image_normalscreen.logicBlock_visible();
			me._button_image_fullscreen.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._button_image_normalscreen.logicBlock_visible();
			me._button_image_fullscreen.logicBlock_visible();
		});
		player.addListener('gyrochanged', function(event) {
			me._gyro_on.logicBlock_alpha();
			me._gyro_off.logicBlock_alpha();
		});
		player.addListener('imagesready', function(event) {
			me._loading.style.transition='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		});
		player.addListener('positionchanged', function(event) {
			me._map_1.ggRadar.update();
		});
		player.addListener('tilesrequested', function(event) {
			player.setVariableValue('vis_loader', false);
		});
		player.addListener('varchanged_node_cloner_hasDown', function(event) {
			me._thumbs_left.logicBlock_visible();
		});
		player.addListener('varchanged_node_cloner_hasUp', function(event) {
			me._thumbs_right.logicBlock_visible();
		});
		player.addListener('varchanged_opt_3d_preview', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_opt_3d_preview();
				}
			}
		});
		player.addListener('varchanged_vis_thumbnail_menu', function(event) {
			me._thumbnail_menu.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_thumbnail_menu_phone', function(event) {
			me._thumbnail_menu_phone.logicBlock_alpha();
			me._thumbnail_menu_toggle.logicBlock_alpha();
			me._thumbnail_menu_phone_1.logicBlock_alpha();
		});
		player.addListener('viewerinit', function(event) {
			me._node_cloner_phone.ggUpdate();
			me._node_cloner.ggUpdate();
		});
		player.addListener('vrchanged', function(event) {
			me._enter_vr.logicBlock_visible();
		});
	};
	function SkinCloner_node_cloner_phone_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_thumb_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_thumb_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="node_thumb_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_thumb_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_thumb_phone.onclick=function (e) {
			if (me._node_thumb_phone.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_thumbnail_menu_phone', false);
		}
		me._node_thumb_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumb_img_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_img_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumb_img_phone__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumb_img_phone_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumb_img_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumb_img_phone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumb_img_phone.onmouseenter=function (e) {
			me.elementMouseOver['thumb_img_phone']=true;
			me._thumb_img_border_phone.logicBlock_alpha();
		}
		me._thumb_img_phone.onmouseleave=function (e) {
			me.elementMouseOver['thumb_img_phone']=false;
			me._thumb_img_border_phone.logicBlock_alpha();
		}
		me._thumb_img_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumb_img_border_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_img_border_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumb_img_border_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 88px;';
		hs+='left : calc(50% - ((88px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((88px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 88px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumb_img_border_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumb_img_border_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumb_img_phone'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumb_img_border_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumb_img_border_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumb_img_border_phone.style.transition='opacity 200ms ease 0ms';
				if (me._thumb_img_border_phone.ggCurrentLogicStateAlpha == 0) {
					me._thumb_img_border_phone.style.visibility=me._thumb_img_border_phone.ggVisible?'inherit':'hidden';
					me._thumb_img_border_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumb_img_border_phone.style.opacity == 0.0) { me._thumb_img_border_phone.style.visibility="hidden"; } }, 205);
					me._thumb_img_border_phone.style.opacity=0;
				}
			}
		}
		me._thumb_img_border_phone.logicBlock_alpha();
		me._thumb_img_border_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumb_img_phone.appendChild(me._thumb_img_border_phone);
		me._node_thumb_phone.appendChild(me._thumb_img_phone);
		el=me._thumb_title_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_title_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumb_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumb_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumb_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumb_title_phone.ggUpdateText();
		el.appendChild(els);
		me._thumb_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumb_title_phone.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.nodeVisited(me._thumb_title_phone.ggElementNodeId()) == true)) || 
				((me._thumb_title_phone.ggIsActive() == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._thumb_title_phone.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._thumb_title_phone.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._thumb_title_phone.style.transition='color 0s';
				if (me._thumb_title_phone.ggCurrentLogicStateTextColor == 0) {
					me._thumb_title_phone.style.color="rgba(255,255,255,0.588235)";
				}
				else {
					me._thumb_title_phone.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._thumb_title_phone.logicBlock_textcolor();
		me._thumb_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._node_thumb_phone.appendChild(me._thumb_title_phone);
		me.__div.appendChild(me._node_thumb_phone);
		me.elementMouseOver['thumb_img_phone']=false;
		me._thumb_img_border_phone.logicBlock_alpha();
		me._thumb_title_phone.logicBlock_textcolor();
			me.ggEvent_changenode=function(event) {
				me._thumb_title_phone.logicBlock_textcolor();
				me._thumb_title_phone.logicBlock_textcolor();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumb_title_phone.logicBlock_textcolor();
			};
	};
	function SkinCloner_node_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_thumb=document.createElement('div');
		el.ggId="node_thumb";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 130px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_thumb.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_thumb.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._node_thumb.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumb_img=document.createElement('div');
		els=me._thumb_img__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumb_img_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 50px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumb_img";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage outer-shadow";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumb_img.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumb_img.onmouseenter=function (e) {
			me.elementMouseOver['thumb_img']=true;
			me._thumb_img_border.logicBlock_alpha();
		}
		me._thumb_img.onmouseleave=function (e) {
			me.elementMouseOver['thumb_img']=false;
			me._thumb_img_border.logicBlock_alpha();
		}
		me._thumb_img.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumb_img_border=document.createElement('div');
		el.ggId="thumb_img_border";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 98px;';
		hs+='left : calc(50% - ((98px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((98px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumb_img_border.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumb_img_border.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumb_img'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumb_img_border.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumb_img_border.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumb_img_border.style.transition='opacity 200ms ease 0ms';
				if (me._thumb_img_border.ggCurrentLogicStateAlpha == 0) {
					me._thumb_img_border.style.visibility=me._thumb_img_border.ggVisible?'inherit':'hidden';
					me._thumb_img_border.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumb_img_border.style.opacity == 0.0) { me._thumb_img_border.style.visibility="hidden"; } }, 205);
					me._thumb_img_border.style.opacity=0;
				}
			}
		}
		me._thumb_img_border.logicBlock_alpha();
		me._thumb_img_border.ggUpdatePosition=function (useTransition) {
		}
		me._thumb_img.appendChild(me._thumb_img_border);
		me._node_thumb.appendChild(me._thumb_img);
		el=me._thumb_title=document.createElement('div');
		els=me._thumb_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumb_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._thumb_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumb_title.ggUpdateText();
		el.appendChild(els);
		me._thumb_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumb_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.nodeVisited(me._thumb_title.ggElementNodeId()) == true)) || 
				((me._thumb_title.ggIsActive() == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._thumb_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._thumb_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._thumb_title.style.transition='color 0s';
				if (me._thumb_title.ggCurrentLogicStateTextColor == 0) {
					me._thumb_title.style.color="rgba(255,255,255,0.588235)";
				}
				else {
					me._thumb_title.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._thumb_title.logicBlock_textcolor();
		me._thumb_title.ggUpdatePosition=function (useTransition) {
		}
		me._node_thumb.appendChild(me._thumb_title);
		me.__div.appendChild(me._node_thumb);
		me.elementMouseOver['thumb_img']=false;
		me._thumb_img_border.logicBlock_alpha();
		me._thumb_title.logicBlock_textcolor();
			me.ggEvent_changenode=function(event) {
				me._thumb_title.logicBlock_textcolor();
				me._thumb_title.logicBlock_textcolor();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumb_title.logicBlock_textcolor();
			};
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 71px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower=document.createElement('div');
		els=me._chevron_white_lower__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgdmVyc2lvbj0iMS4wIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy'+
			'8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I2ZmZmYwMDt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEgICBjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAgICBTMS43LDQ3MywzNC45LDQzOS43eiIvPgogPC9nPgo8L3N2Zz4K';
		me._chevron_white_lower__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white_lower.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white_lower.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateVisible == 0) {
					me._chevron_white_lower.style.visibility="hidden";
					me._chevron_white_lower.ggVisible=false;
				}
				else {
					me._chevron_white_lower.style.visibility=(Number(me._chevron_white_lower.style.opacity)>0||!me._chevron_white_lower.style.opacity)?'inherit':'hidden';
					me._chevron_white_lower.ggVisible=true;
				}
			}
		}
		me._chevron_white_lower.logicBlock_visible();
		me._chevron_white_lower.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=1;
				}
				else {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower.logicBlock_alpha();
		me._chevron_white_lower.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_white_lower);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgdmVyc2lvbj0iMS4wIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy'+
			'8xOTk5L3hsaW5rIj4KIDxnPgogIDxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcgICBjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._chevron_black__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_black.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_black.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateVisible == 0) {
					me._chevron_black.style.visibility="hidden";
					me._chevron_black.ggVisible=false;
				}
				else {
					me._chevron_black.style.visibility=(Number(me._chevron_black.style.opacity)>0||!me._chevron_black.style.opacity)?'inherit':'hidden';
					me._chevron_black.ggVisible=true;
				}
			}
		}
		me._chevron_black.logicBlock_visible();
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.logicBlock_alpha();
		me._chevron_black.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgdmVyc2lvbj0iMS4wIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy'+
			'8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I2ZmZmYwMDt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEgICBjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAgICBTMS43LDQ3MywzNC45LDQzOS43eiIvPgogPC9nPgo8L3N2Zz4K';
		me._chevron_white__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateVisible == 0) {
					me._chevron_white.style.visibility="hidden";
					me._chevron_white.ggVisible=false;
				}
				else {
					me._chevron_white.style.visibility=(Number(me._chevron_white.style.opacity)>0||!me._chevron_white.style.opacity)?'inherit':'hidden';
					me._chevron_white.ggVisible=true;
				}
			}
		}
		me._chevron_white.logicBlock_visible();
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.6;
				}
			}
		}
		me._chevron_white.logicBlock_alpha();
		me._chevron_white.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_white);
		el=me._hs_preview_image=document.createElement('div');
		els=me._hs_preview_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #000000; transform:translate3d(0px,0px,90px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_preview_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image.style.transition='opacity 500ms ease 0ms';
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.style.visibility=me._hs_preview_image.ggVisible?'inherit':'hidden';
					me._hs_preview_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image.style.opacity == 0.0) { me._hs_preview_image.style.visibility="hidden"; } }, 505);
					me._hs_preview_image.style.opacity=0;
				}
			}
		}
		me._hs_preview_image.logicBlock_alpha();
		me._hs_preview_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_tt=document.createElement('div');
		els=me._hs_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._hs_tt.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hs_tt.ggUpdateText();
		player.addListener('changenode', function() {
			me._hs_tt.ggUpdateText();
		});
		el.appendChild(els);
		me._hs_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt.style.transition='';
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
					me._hs_tt.style.visibility="hidden";
					me._hs_tt.ggVisible=false;
				}
				else {
					me._hs_tt.style.visibility=(Number(me._hs_tt.style.opacity)>0||!me._hs_tt.style.opacity)?'inherit':'hidden';
					me._hs_tt.ggVisible=true;
				}
			}
		}
		me._hs_tt.logicBlock_visible();
		me._hs_tt.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_tt);
		el=me._hs_visited=document.createElement('div');
		els=me._hs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3Ln'+
			'czLm9yZy8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAu'+
			'My0wLjgsMC41LTEuMiwwLjVjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNWwtMzEuNy0zMS44ICAgYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNSAgIEMtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44ICAgYzAuMywwLjMsMC44LD'+
			'AuNSwxLjMsMC41YzAuNCwwLDAuOS0wLjIsMS4yLTAuNWw1MC44LTUwLjljMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE0NS45LDM2Ni4xLTE0NywzNjYuMS0xNDcuNywzNjYuOHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._hs_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._hs_visited.ggIsActive() == true)) || 
				((player.nodeVisited(me._hs_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_visited.style.transition='';
				if (me._hs_visited.ggCurrentLogicStateVisible == 0) {
					me._hs_visited.style.visibility=(Number(me._hs_visited.style.opacity)>0||!me._hs_visited.style.opacity)?'inherit':'hidden';
					me._hs_visited.ggVisible=true;
				}
				else {
					me._hs_visited.style.visibility="hidden";
					me._hs_visited.ggVisible=false;
				}
			}
		}
		me._hs_visited.logicBlock_visible();
		me._hs_visited.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_visited);
		me._ht_node.appendChild(me._hs_preview_image);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 1px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_3d.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_3d.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_3d.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style.transition='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.logicBlock_visible();
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._tt_ht_3d);
		el=me.__3d_code=document.createElement('div');
		el.ggId="_3d_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3d_code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3d_code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__3d_code);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_customimage.ggSubElement.setAttribute('alt', player._(me._ht_node_customimage.ggAltText));
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_customimage.ggText_untranslated = img;
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_customimage.ggSubElement.style.width = '0px';
			me._ht_node_customimage.ggSubElement.style.height = '0px';
			me._ht_node_customimage.ggSubElement.src='';
			me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_customimage.ggText != player._(me._ht_node_customimage.ggText_untranslated)) {
				me._ht_node_customimage.ggText = player._(me._ht_node_customimage.ggText_untranslated);
				me._ht_node_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style.transition='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage.ggSubElement.src='';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.logicBlock_visible();
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentWidth < me._ht_node_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_customimage.scrollLeft=currentWidth / 2 - me._ht_node_customimage.clientWidth / 2;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentHeight < me._ht_node_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_customimage.scrollTop=currentHeight / 2 - me._ht_node_customimage.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		me.elementMouseOver['ht_node']=false;
		me._chevron_white_lower.logicBlock_visible();
		me._chevron_white_lower.logicBlock_alpha();
		me._chevron_black.logicBlock_visible();
		me._chevron_black.logicBlock_alpha();
		me._chevron_white.logicBlock_visible();
		me._chevron_white.logicBlock_alpha();
		me._hs_preview_image.logicBlock_alpha();
		me._hs_tt.logicBlock_visible();
		me._hs_visited.logicBlock_visible();
		me._tt_ht_3d.logicBlock_visible();
		el = me.__3d_code;
		javascript:"";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'translate3d(0px,0px,-1000px) perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_customimage.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._hs_tt.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._hs_preview_image.logicBlock_alpha();
				me._hs_tt.logicBlock_visible();
				me._hs_visited.logicBlock_visible();
				me._hs_visited.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._hs_visited.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._hs_preview_image.logicBlock_alpha();
				me._hs_tt.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_varchanged_opt_3d_preview=function() {
				me._hs_preview_image.logicBlock_alpha();
				me._tt_ht_3d.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._button_image_right.ggUpdateConditionTimer();
		me._button_image_left.ggUpdateConditionTimer();
		me._button_image_down.ggUpdateConditionTimer();
		me._button_image_up.ggUpdateConditionTimer();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style.transform=hs;
		me._zoomout.ggUpdateConditionTimer();
		me._zoomin.ggUpdateConditionTimer();
		if (!player.getLockedKeyboard()) {
			switch(me.skinKeyPressedText) {
			}
			switch(me.skinKeyPressedKey) {
				case 37:
					player.changePanLog(0.5,true);
					break;
				case 38:
					player.changeTiltLog(0.5,true);
					break;
				case 39:
					player.changePanLog(-0.5,true);
					break;
				case 40:
					player.changeTiltLog(-0.5,true);
					break;
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}@font-face { font-family: "Montserrat"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/montserrat-latin-regular.woff2") format("woff2"); } .montserrat_regular { font-family: "Montserrat", sans-serif; font-weight: 400; } .outer-shadow { -webkit-filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.3)); filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.3)); }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keydown', function(e) {
		var keyText = e.key;
		var keyCode = e.which || e.keyCode;
		me.skinKeyPressedKey = e.keyCode;
		me.skinKeyPressedText = e.key;
	});
	document.addEventListener('keyup', function(e) {
		var keyText = e.key;
		var keyCode = e.which || e.keyCode;
		me.skinKeyPressedKey = 0;
		me.skinKeyPressedText = '';
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};