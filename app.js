var _0x48c5bc=_0x59f2;function _0x59f2(_0x3522c2,_0x3ed85){var _0x1046c9=_0x1046();return _0x59f2=function(_0x59f2c0,_0x153520){_0x59f2c0=_0x59f2c0-0xe9;var _0x591498=_0x1046c9[_0x59f2c0];return _0x591498;},_0x59f2(_0x3522c2,_0x3ed85);}function _0x1046(){var _0x502a7b=['clearRect','name','pushState','strokeStyle','lighter','&client_secret=','abs','https://api.spotify.com/v1/audio-features/','firstChild','col','https://api.spotify.com/v1/me/player','innerWidth','style','tempo','fillRect','trackArtist','cos','search','parse','scale','shadowBlur','beats_times','Sections_times','onload','deviceSection','beginPath','fill','beats_string','https://accounts.spotify.com/api/token','getElementById','src','albumImage','instrumentalness','loudness','906348tZwAtn',',100%,5%,\x201)','length',',100%,','status','395937nnYTwF','fillStyle','hsla(','danceability','setTimeout','href','setItem','location','value','getContext','globalCompositeOperation','device','devices','rad','createRadialGradient','open','liveness','4098Fenlxe','mozRequestAnimationFrame','setRequestHeader','GET','segments_string','item','https://h4rsha.com/','createElement','lineWidth','Content-Type','&code=','forEach','3605kjxTLJ','getMyCurrentPlaybackState','&refresh_token=','Could\x20not\x20get\x20playback\x20state','?market=US','innerHTML','&scope=user-read-private\x20user-read-email\x20streaming\x20user-modify-playback-state\x20user-read-playback-position\x20user-library-read\x20streaming\x20user-read-playback-state\x20user-read-recently-played\x20playlist-read-private','responseText','shadowColor','Basic\x20',',95%,50%,.09)','valence','tokenSection','segments','acousticness','save','source-over','send','bars','arc',',90%,50%,.7)','start','resize','width','393abdfa1426465a94c5d7b88ea2c374','random','grant_type=refresh_token','Tantum_times','&redirect_uri=','Sections_string','sections','3160110YVdWzL','appendChild','application/x-www-form-urlencoded','https://api.spotify.com/v1/audio-analysis/','trackTitle','innerHeight','seg_times','pow','localStorage','https://api.spotify.com/v1/me/player/devices','option','progress_ms','seed','log','&client_id=','addColorStop','height','7016008YdIxnN','hsla(0,0%,0%,.4)','speechiness','getItem','bars_times','album','Authorization','&response_type=code','createLinearGradient','duration_ms','removeChild','application/json','201527eZJeQL','artists','1866XYajxx',',75%,50%,\x201)','energy','https://api.spotify.com/v1/me/player/play?device_id=','hsla(0,0%,0%,0)','stroke','history','hsl(','10014MJtOKd','stringify','translate','access_token','trackID','grant_type=authorization_code','refresh_token','beats','restore','images','sin','tatums','710SJxMXo','addEventListener','block','push','requestAnimationFrame','code'];_0x1046=function(){return _0x502a7b;};return _0x1046();}(function(_0x15223f,_0xbdd7e6){var _0x53c518=_0x59f2,_0x4dbd34=_0x15223f();while(!![]){try{var _0x168424=-parseInt(_0x53c518(0x176))/0x1+-parseInt(_0x53c518(0x178))/0x2*(parseInt(_0x53c518(0x12e))/0x3)+parseInt(_0x53c518(0x118))/0x4+parseInt(_0x53c518(0x159))/0x5+-parseInt(_0x53c518(0x180))/0x6*(parseInt(_0x53c518(0x13a))/0x7)+-parseInt(_0x53c518(0x16a))/0x8+-parseInt(_0x53c518(0x11d))/0x9*(-parseInt(_0x53c518(0xf0))/0xa);if(_0x168424===_0xbdd7e6)break;else _0x4dbd34['push'](_0x4dbd34['shift']());}catch(_0x4a7635){_0x4dbd34['push'](_0x4dbd34['shift']());}}}(_0x1046,0xbbe23));var redirect_url=_0x48c5bc(0x134),access_token=null,refresh_token=null,track_id=null,seg_times=[],bars_times=[],beats_times=[],Sections_times=[],Tantum_times=[],client_id='737b8942f0a04f0f87ce71a78f408ab8',client_secret=_0x48c5bc(0x152);const AUTHORIZE='https://accounts.spotify.com/authorize',TOKEN=_0x48c5bc(0x112),DEVICES=_0x48c5bc(0x162),PLAYER=_0x48c5bc(0x100),AUDIOFEATURES=_0x48c5bc(0xfd),AUDIOANALYSIS=_0x48c5bc(0x15c),PLAYERTIME=_0x48c5bc(0x17b);function onPageLoad(){var _0x20a0c2=_0x48c5bc;window[_0x20a0c2(0x124)][_0x20a0c2(0x107)][_0x20a0c2(0x11a)]>0x0?handleRedirect():(access_token=localStorage[_0x20a0c2(0x16d)](_0x20a0c2(0x183)),access_token==null?document[_0x20a0c2(0x113)](_0x20a0c2(0x146))[_0x20a0c2(0x102)]['display']=_0x20a0c2(0xf2):(document[_0x20a0c2(0x113)](_0x20a0c2(0x10e))['style']['display']=_0x20a0c2(0xf2),refreshDevices(),currentlyPlaying(),draw()));}function requestAuthorization(){var _0x2f857c=_0x48c5bc;let _0x29ea75=AUTHORIZE;_0x29ea75+='?client_id='+client_id,_0x29ea75+=_0x2f857c(0x171),_0x29ea75+=_0x2f857c(0x156)+encodeURI(redirect_url),_0x29ea75+='&show_dialog=true',_0x29ea75+=_0x2f857c(0x140),window['location'][_0x2f857c(0x122)]=_0x29ea75;}function handleRedirect(){var _0x2116fa=_0x48c5bc;let _0x43fa29=getCode();fetchAccessToken(_0x43fa29),window[_0x2116fa(0x17e)][_0x2116fa(0xf8)]('','',redirect_url);}function fetchAccessToken(_0x38e164){var _0x15d3b2=_0x48c5bc;let _0x503681=_0x15d3b2(0xe9);_0x503681+=_0x15d3b2(0x138)+_0x38e164,_0x503681+='&redirect_uri='+encodeURI(redirect_url),_0x503681+=_0x15d3b2(0x167)+client_id,_0x503681+=_0x15d3b2(0xfb)+client_secret,callAuthorizationApi(_0x503681);}function getCode(){var _0x5819b6=_0x48c5bc;let _0x35e0f6=null;const _0x52edd0=window[_0x5819b6(0x124)][_0x5819b6(0x107)];if(_0x52edd0[_0x5819b6(0x11a)]>0x0){const _0x57e752=new URLSearchParams(_0x52edd0);_0x35e0f6=_0x57e752['get'](_0x5819b6(0xf5));}return _0x35e0f6;}function callAuthorizationApi(_0x4cbfc6){var _0x2e1eb1=_0x48c5bc;let _0xe1e31a=new XMLHttpRequest();_0xe1e31a[_0x2e1eb1(0x12c)]('POST',TOKEN,!![]),_0xe1e31a[_0x2e1eb1(0x130)](_0x2e1eb1(0x137),_0x2e1eb1(0x15b)),_0xe1e31a[_0x2e1eb1(0x130)]('Authorization',_0x2e1eb1(0x143)+btoa(client_id+':'+client_secret)),_0xe1e31a['send'](_0x4cbfc6),_0xe1e31a[_0x2e1eb1(0x10d)]=handleAuthorizationResponse;}function handleAuthorizationResponse(){var _0x2047f7=_0x48c5bc;if(this[_0x2047f7(0x11c)]==0xc8){var _0x59060a=JSON[_0x2047f7(0x108)](this[_0x2047f7(0x141)]);console[_0x2047f7(0x166)](_0x59060a);var _0x59060a=JSON[_0x2047f7(0x108)](this[_0x2047f7(0x141)]);_0x59060a[_0x2047f7(0x183)]!=undefined&&(access_token=_0x59060a[_0x2047f7(0x183)],localStorage[_0x2047f7(0x123)]('access_token',access_token)),_0x59060a[_0x2047f7(0xea)]!=undefined&&(refresh_token=_0x59060a[_0x2047f7(0xea)],localStorage[_0x2047f7(0x123)](_0x2047f7(0xea),refresh_token)),onPageLoad();}else console[_0x2047f7(0x166)](this['responseText']),alert(this[_0x2047f7(0x141)]);}function callApi(_0x33c7e9,_0x113dcc,_0x305bad,_0x462240){var _0x25c0bc=_0x48c5bc;let _0x48343f=new XMLHttpRequest();_0x48343f[_0x25c0bc(0x12c)](_0x33c7e9,_0x113dcc,!![]),_0x48343f['setRequestHeader'](_0x25c0bc(0x137),_0x25c0bc(0x175)),_0x48343f[_0x25c0bc(0x130)](_0x25c0bc(0x170),'Bearer\x20'+access_token),_0x48343f[_0x25c0bc(0x14b)](_0x305bad),_0x48343f[_0x25c0bc(0x10d)]=_0x462240;}function refreshDevices(){var _0x29255f=_0x48c5bc;callApi(_0x29255f(0x131),DEVICES,null,handleDevicesResponse);}function handleDevicesResponse(){var _0x4bcc2d=_0x48c5bc;if(this[_0x4bcc2d(0x11c)]==0xc8){var _0x21e2c3=JSON[_0x4bcc2d(0x108)](this['responseText']);console[_0x4bcc2d(0x166)](_0x21e2c3),removeAllItems(_0x4bcc2d(0x129)),_0x21e2c3[_0x4bcc2d(0x129)][_0x4bcc2d(0x139)](_0x2dd613=>addDevice(_0x2dd613));}else this[_0x4bcc2d(0x11c)]==0x191?refreshAccessToken():(console[_0x4bcc2d(0x166)](this[_0x4bcc2d(0x141)]),alert(this['responseText']));}function addDevice(_0x5133a6){var _0x4b5176=_0x48c5bc;let _0x47c373=document[_0x4b5176(0x135)](_0x4b5176(0x163));_0x47c373['value']=_0x5133a6['id'],_0x47c373[_0x4b5176(0x13f)]=_0x5133a6[_0x4b5176(0xf7)],document['getElementById'](_0x4b5176(0x129))[_0x4b5176(0x15a)](_0x47c373);}function refreshAccessToken(){var _0x490a66=_0x48c5bc;refresh_token=localStorage[_0x490a66(0x16d)](_0x490a66(0xea));let _0x4bb6b9=_0x490a66(0x154);_0x4bb6b9+=_0x490a66(0x13c)+refresh_token,_0x4bb6b9+=_0x490a66(0x167)+client_id,callAuthorizationApi(_0x4bb6b9);}function removeAllItems(_0x2a3407){var _0x369347=_0x48c5bc;let _0x556e68=document[_0x369347(0x113)](_0x2a3407);while(_0x556e68['firstChild']){_0x556e68[_0x369347(0x174)](_0x556e68[_0x369347(0xfe)]);}}function currentlyPlaying(){var _0x267c3d=_0x48c5bc;callApi(_0x267c3d(0x131),PLAYER+_0x267c3d(0x13e),null,handleCurrentlyPlayingResponse);}function handleCurrentlyPlayingResponse(){var _0x331042=_0x48c5bc;if(this[_0x331042(0x11c)]==0xc8){var _0x55dc36=JSON[_0x331042(0x108)](this['responseText']);console[_0x331042(0x166)](_0x55dc36);if(_0x55dc36['item']!=null){document[_0x331042(0x113)](_0x331042(0x115))[_0x331042(0x114)]=_0x55dc36[_0x331042(0x133)][_0x331042(0x16f)][_0x331042(0xed)][0x0]['url'],document[_0x331042(0x113)](_0x331042(0x15d))[_0x331042(0x13f)]=_0x55dc36[_0x331042(0x133)]['name'],document['getElementById'](_0x331042(0x105))[_0x331042(0x13f)]=_0x55dc36[_0x331042(0x133)][_0x331042(0x177)][0x0]['name'],document[_0x331042(0x113)](_0x331042(0x184))[_0x331042(0x13f)]=_0x55dc36['item']['id'],track_id=_0x55dc36[_0x331042(0x133)]['id'],localStorage['setItem']('track_id',track_id),callApi(_0x331042(0x131),AUDIOFEATURES+track_id,null,DisplayAudioFeatures),document[_0x331042(0x113)](_0x331042(0x184))[_0x331042(0x13f)]=_0x55dc36[_0x331042(0x133)]['id'],progress_ms=_0x55dc36['progress_ms'],localStorage[_0x331042(0x123)](_0x331042(0x164),progress_ms),function(){window['requestAnimFrame']=function(){var _0x4419a8=_0x59f2;return window[_0x4419a8(0xf4)]||window['webkitRequestAnimationFrame']||window[_0x4419a8(0x12f)]||function(_0x32f843){var _0x703dc=_0x4419a8;window[_0x703dc(0x121)](_0x32f843,0x3e8/0x3c);};}();}();if(_0x55dc36['device']!=null)currentDevice=_0x55dc36[_0x331042(0x128)]['id'],document['getElementById'](_0x331042(0x129))[_0x331042(0x125)]=currentDevice,localStorage[_0x331042(0x123)]('currentDevice',currentDevice);else{if(this[_0x331042(0x11c)]==0xcc){}else this[_0x331042(0x11c)]==0x191?refreshAccessToken():(console[_0x331042(0x166)](this['responseText']),alert(this[_0x331042(0x141)]));}}}}function getPlaybackState(){var _0x2bfbcb=_0x48c5bc;spotifyApi[_0x2bfbcb(0x13b)]({})['then'](function(_0x20f199){return _0x20f199;},function(_0x507fdf){var _0x4452db=_0x2bfbcb;return console[_0x4452db(0x166)](_0x4452db(0x13d),_0x507fdf),null;});}function DisplayAudioFeatures(){var _0x49ff46=_0x48c5bc;if(this[_0x49ff46(0x11c)]==0xc8){var _0x12f736=JSON['parse'](this[_0x49ff46(0x141)]);console[_0x49ff46(0x166)](_0x12f736),_0x12f736!=null&&(document[_0x49ff46(0x113)]('danceability')[_0x49ff46(0x13f)]=_0x12f736[_0x49ff46(0x120)],danceability=_0x12f736[_0x49ff46(0x120)],localStorage[_0x49ff46(0x123)]('danceability',danceability),document[_0x49ff46(0x113)](_0x49ff46(0x148))[_0x49ff46(0x13f)]=_0x12f736[_0x49ff46(0x148)],acousticness=_0x12f736[_0x49ff46(0x148)],localStorage[_0x49ff46(0x123)](_0x49ff46(0x148),acousticness),document[_0x49ff46(0x113)](_0x49ff46(0x173))['innerHTML']=_0x12f736[_0x49ff46(0x173)],duration_ms=_0x12f736[_0x49ff46(0x173)],localStorage[_0x49ff46(0x123)](_0x49ff46(0x173),duration_ms),document['getElementById'](_0x49ff46(0x17a))[_0x49ff46(0x13f)]=_0x12f736[_0x49ff46(0x17a)],energy=_0x12f736[_0x49ff46(0x17a)],localStorage[_0x49ff46(0x123)](_0x49ff46(0x17a),energy),document[_0x49ff46(0x113)](_0x49ff46(0x116))[_0x49ff46(0x13f)]=_0x12f736[_0x49ff46(0x116)],instrumentalness=_0x12f736[_0x49ff46(0x116)],localStorage[_0x49ff46(0x123)](_0x49ff46(0x116),instrumentalness),document[_0x49ff46(0x113)](_0x49ff46(0x12d))['innerHTML']=_0x12f736[_0x49ff46(0x12d)],liveness=_0x12f736[_0x49ff46(0x12d)],localStorage[_0x49ff46(0x123)](_0x49ff46(0x12d),liveness),document[_0x49ff46(0x113)](_0x49ff46(0x117))['innerHTML']=_0x12f736[_0x49ff46(0x117)],loudness=_0x12f736[_0x49ff46(0x117)],localStorage[_0x49ff46(0x123)](_0x49ff46(0x117),loudness),document['getElementById'](_0x49ff46(0x16c))[_0x49ff46(0x13f)]=_0x12f736[_0x49ff46(0x16c)],speechiness=_0x12f736[_0x49ff46(0x16c)],localStorage[_0x49ff46(0x123)]('speechiness',speechiness),document[_0x49ff46(0x113)](_0x49ff46(0x103))['innerHTML']=_0x12f736[_0x49ff46(0x103)],tempo=_0x12f736['tempo'],localStorage['setItem'](_0x49ff46(0x103),tempo),document[_0x49ff46(0x113)](_0x49ff46(0x145))['innerHTML']=_0x12f736['valence'],valence=_0x12f736[_0x49ff46(0x145)],localStorage[_0x49ff46(0x123)](_0x49ff46(0x145),valence));}else{if(this[_0x49ff46(0x11c)]==0xcc){}else this['status']==0x191?refreshAccessToken():(console[_0x49ff46(0x166)](this['responseText']),alert(this[_0x49ff46(0x141)]));}}function AudioAnalysis(){var _0x3094cc=_0x48c5bc;callApi(_0x3094cc(0x131),AUDIOANALYSIS+track_id,null,DisplayAudioAnalysis);}function DisplayAudioAnalysis(){var _0x36e775=_0x48c5bc;if(this[_0x36e775(0x11c)]==0xc8){var _0x246319=JSON[_0x36e775(0x108)](this[_0x36e775(0x141)]);console['log'](_0x246319);}else{if(this['status']==0xcc){}else this[_0x36e775(0x11c)]==0x191?refreshAccessToken():(console[_0x36e775(0x166)](this['responseText']),alert(this[_0x36e775(0x141)]));}}function SegmentTimes(){var _0x501aed=_0x48c5bc;callApi(_0x501aed(0x131),AUDIOANALYSIS+track_id,null,SegmentStartTimes);}function SegmentStartTimes(){var _0x2d22cf=_0x48c5bc;if(this[_0x2d22cf(0x11c)]==0xc8){var _0x5e4d42=JSON[_0x2d22cf(0x108)](this[_0x2d22cf(0x141)]);if(_0x5e4d42!=null){document[_0x2d22cf(0x113)]('segments')[_0x2d22cf(0x114)]=_0x5e4d42['segments'];var _0x4e9d1d=JSON[_0x2d22cf(0x181)](_0x5e4d42[_0x2d22cf(0x147)]);localStorage[_0x2d22cf(0x123)](_0x2d22cf(0x132),_0x4e9d1d);var _0x2474a7=JSON[_0x2d22cf(0x108)](_0x4e9d1d);for(var _0x51c5b5=0x0;_0x51c5b5<_0x2474a7[_0x2d22cf(0x11a)];_0x51c5b5++){seg_times[_0x2d22cf(0xf3)](_0x2474a7[_0x51c5b5][_0x2d22cf(0x14f)]);}}localStorage['setItem'](_0x2d22cf(0x15f),seg_times),console[_0x2d22cf(0x166)](seg_times);const _0x3aba20=0x5dc;}else{if(this[_0x2d22cf(0x11c)]==0xcc){}else this[_0x2d22cf(0x11c)]==0x191?refreshAccessToken():(console['log'](this[_0x2d22cf(0x141)]),alert(this[_0x2d22cf(0x141)]));}}function BarTimes(){callApi('GET',AUDIOANALYSIS+track_id,null,BarStartTimes);}function BarStartTimes(){var _0x29f628=_0x48c5bc;if(this[_0x29f628(0x11c)]==0xc8){var _0x59a960=JSON['parse'](this['responseText']);if(_0x59a960!=null){document[_0x29f628(0x113)](_0x29f628(0x14c))[_0x29f628(0x114)]=_0x59a960[_0x29f628(0x14c)];var _0x52091d=JSON[_0x29f628(0x181)](_0x59a960[_0x29f628(0x14c)]);localStorage['setItem']('bars_string',_0x52091d);var _0x336cee=JSON[_0x29f628(0x108)](_0x52091d);for(var _0x3276f9=0x0;_0x3276f9<_0x336cee['length'];_0x3276f9++){bars_times[_0x29f628(0xf3)](_0x336cee[_0x3276f9]['start']);}}localStorage[_0x29f628(0x123)](_0x29f628(0x16e),bars_times),console[_0x29f628(0x166)](bars_times);}else{if(this[_0x29f628(0x11c)]==0xcc){}else this[_0x29f628(0x11c)]==0x191?refreshAccessToken():(console[_0x29f628(0x166)](this['responseText']),alert(this['responseText']));}}function BeatTimes(){var _0x2c2503=_0x48c5bc;callApi(_0x2c2503(0x131),AUDIOANALYSIS+track_id,null,BeatStartTimes);}function BeatStartTimes(){var _0x5b6ee3=_0x48c5bc;if(this[_0x5b6ee3(0x11c)]==0xc8){var _0x6bbc7f=JSON['parse'](this[_0x5b6ee3(0x141)]);if(_0x6bbc7f!=null){document[_0x5b6ee3(0x113)](_0x5b6ee3(0xeb))[_0x5b6ee3(0x114)]=_0x6bbc7f[_0x5b6ee3(0xeb)];var _0x1c461f=JSON[_0x5b6ee3(0x181)](_0x6bbc7f[_0x5b6ee3(0xeb)]);localStorage[_0x5b6ee3(0x123)](_0x5b6ee3(0x111),_0x1c461f);var _0x14f6a0=JSON[_0x5b6ee3(0x108)](_0x1c461f);for(var _0x30f462=0x0;_0x30f462<_0x14f6a0[_0x5b6ee3(0x11a)];_0x30f462++){beats_times[_0x5b6ee3(0xf3)](_0x14f6a0[_0x30f462][_0x5b6ee3(0x14f)]);}}localStorage['setItem'](_0x5b6ee3(0x10b),beats_times),console[_0x5b6ee3(0x166)](beats_times);}else{if(this[_0x5b6ee3(0x11c)]==0xcc){}else this[_0x5b6ee3(0x11c)]==0x191?refreshAccessToken():(console['log'](this[_0x5b6ee3(0x141)]),alert(this[_0x5b6ee3(0x141)]));}}function SectionsTimes(){var _0x1dd185=_0x48c5bc;callApi(_0x1dd185(0x131),AUDIOANALYSIS+track_id,null,SectionsStartTimes);}function SectionsStartTimes(){var _0x5c8ce9=_0x48c5bc;if(this[_0x5c8ce9(0x11c)]==0xc8){var _0x59081d=JSON['parse'](this[_0x5c8ce9(0x141)]);if(_0x59081d!=null){document['getElementById'](_0x5c8ce9(0x158))[_0x5c8ce9(0x114)]=_0x59081d[_0x5c8ce9(0x158)];var _0x4c1fc0=JSON['stringify'](_0x59081d[_0x5c8ce9(0x158)]);localStorage['setItem'](_0x5c8ce9(0x157),_0x4c1fc0);var _0x3ad98d=JSON[_0x5c8ce9(0x108)](_0x4c1fc0);for(var _0x5537b8=0x0;_0x5537b8<_0x3ad98d[_0x5c8ce9(0x11a)];_0x5537b8++){Sections_times[_0x5c8ce9(0xf3)](_0x3ad98d[_0x5537b8][_0x5c8ce9(0x14f)]);}}localStorage[_0x5c8ce9(0x123)](_0x5c8ce9(0x10c),Sections_times),console[_0x5c8ce9(0x166)](Sections_times);}else{if(this['status']==0xcc){}else this[_0x5c8ce9(0x11c)]==0x191?refreshAccessToken():(console[_0x5c8ce9(0x166)](this[_0x5c8ce9(0x141)]),alert(this[_0x5c8ce9(0x141)]));}}function TantumTimes(){callApi('GET',AUDIOANALYSIS+track_id,null,TantumStartTimes);}function TantumStartTimes(){var _0x7c8add=_0x48c5bc;if(this['status']==0xc8){var _0x5d97ca=JSON[_0x7c8add(0x108)](this[_0x7c8add(0x141)]);if(_0x5d97ca!=null){document[_0x7c8add(0x113)](_0x7c8add(0xef))[_0x7c8add(0x114)]=_0x5d97ca[_0x7c8add(0xef)];var _0x3bcbb6=JSON['stringify'](_0x5d97ca[_0x7c8add(0xef)]);localStorage['setItem']('Tantum_string',_0x3bcbb6);var _0x5644cf=JSON['parse'](_0x3bcbb6);for(var _0x2f5c57=0x0;_0x2f5c57<_0x5644cf['length'];_0x2f5c57++){Tantum_times[_0x7c8add(0xf3)](_0x5644cf[_0x2f5c57][_0x7c8add(0x14f)]);}}localStorage['setItem'](_0x7c8add(0x155),Tantum_times),console[_0x7c8add(0x166)](Tantum_times);}else{if(this[_0x7c8add(0x11c)]==0xcc){}else this[_0x7c8add(0x11c)]==0x191?refreshAccessToken():(console['log'](this[_0x7c8add(0x141)]),alert(this['responseText']));}}function draw(){var _0x227bb9=_0x48c5bc;const _0x28f08f=document[_0x227bb9(0x113)]('myCanvas'),_0x388c6e=_0x28f08f[_0x227bb9(0x126)]('2d');var _0x3bd5a9=parseFloat(window[_0x227bb9(0x161)][_0x227bb9(0x16d)]('danceability')),_0x4262ee=parseFloat(window[_0x227bb9(0x161)][_0x227bb9(0x16d)](_0x227bb9(0x103))),_0x359ac8=parseFloat(window[_0x227bb9(0x161)]['getItem'](_0x227bb9(0x17a))),_0x13615b=parseFloat(window['localStorage'][_0x227bb9(0x16d)](_0x227bb9(0x117))),_0x1e6e10=parseFloat(window['localStorage']['getItem'](_0x227bb9(0x145)));if(_0x28f08f[_0x227bb9(0x126)]){if(_0x1e6e10>=0.5&&_0x359ac8<0.75){var _0x390c1b=_0x28f08f[_0x227bb9(0x151)]=window['innerWidth'],_0x29c98=_0x28f08f[_0x227bb9(0x169)]=window[_0x227bb9(0x15e)],_0x1b7c2d=0x0,_0xf9cf0b=9655.7+(0.74-_0x359ac8/0xa)*0x64,_0x1b8f29=0x0,_0x4c8574,_0x55052b,_0x2ad049,_0x474132,_0x105176,_0x3a23bb,_0x36f3c6,_0x4722b3=0x1/(0x32/_0x4262ee),_0x2f98c6=function(){var _0x5ef67b=_0x227bb9;_0x388c6e['globalCompositeOperation']=_0x5ef67b(0x14a),_0x388c6e[_0x5ef67b(0x11e)]='hsla('+_0x4262ee**-0x5/0xf6568+_0x5ef67b(0x119),_0x388c6e['fillRect'](0x0,0x0,_0x390c1b,_0x29c98),_0x388c6e[_0x5ef67b(0x127)]=_0x5ef67b(0xfa);for(var _0x55c26f=0x0;_0x55c26f<0x2;_0x55c26f++){_0x474132=0x0,(_u=_0x1b8f29/((0x1-_0x3bd5a9)/0xa)+_0x55c26f,col=_0x1b8f29+_u/0x2),_0x388c6e[_0x5ef67b(0x10f)]();for(var _0x208898=0x0;_0x208898<_0xf9cf0b;_0x208898++){_0x474132+=0.55*Math[_0x5ef67b(0xee)](0x12),_0x105176=_0x474132*Math[_0x5ef67b(0xee)](_0x55c26f+0.9*_0x1b7c2d+_0x474132/0x28)/10.5,_0x3a23bb=_0x474132*Math[_0x5ef67b(0x106)](_0x2ad049)-_0x105176*Math[_0x5ef67b(0xee)](_0x55c26f),_0x36f3c6=_0x474132*Math[_0x5ef67b(0xee)](_0x2ad049)+_0x105176*Math[_0x5ef67b(0x106)](_0x55c26f),_0x2ad049=_0x208898*11.464*Math['PI']/3.9,_0x388c6e[_0x5ef67b(0x136)]=0.1,_0x388c6e[_0x5ef67b(0x14d)](_0x390c1b/0x2-_0x3a23bb,_0x29c98/0x2-_0x36f3c6,0x1,0x0,Math['PI']*0x2);}var _0x41c186=_0x388c6e[_0x5ef67b(0x172)](_0x390c1b/0x2+_0x3a23bb,_0x29c98/0x2+_0x36f3c6,0x1,_0x390c1b/0x2+_0x3a23bb,_0x29c98/0x2+_0x36f3c6);_0x41c186[_0x5ef67b(0x168)](0.1,_0x5ef67b(0x11f)+col*_0x55c26f+_0x5ef67b(0x14e)),_0x41c186[_0x5ef67b(0x168)](0x1,_0x5ef67b(0x11f)+_u*_0x55c26f+_0x5ef67b(0x144)),_0x388c6e[_0x5ef67b(0xf9)]=_0x41c186,_0x388c6e[_0x5ef67b(0x17d)]();}_0x1b7c2d+=_0x4722b3,_0x1b8f29-=0.2,window[_0x5ef67b(0xf4)](_0x2f98c6);};_0x2f98c6(),window[_0x227bb9(0xf1)](_0x227bb9(0x150),function(){var _0x3a6594=_0x227bb9;_0x28f08f[_0x3a6594(0x151)]=_0x390c1b=window[_0x3a6594(0x101)],_0x28f08f['height']=_0x29c98=window['innerHeight'];},![]);}else{if(_0x1e6e10>=0.5&&_0x359ac8>=0.75){var _0x390c1b=_0x28f08f[_0x227bb9(0x151)],_0x29c98=_0x28f08f[_0x227bb9(0x169)],_0x1f04e8=0.69,_0x124813=0x1/_0x4262ee*0xdac,_0x1b1ccd=_0x1f04e8*_0x124813,_0x52c3c6=~~(_0x390c1b/_0x124813),_0x2ce9b2=0.5*(_0x390c1b%_0x124813),_0x25630a=~~(_0x29c98/_0x124813),_0x59e2ad=0.5*(_0x29c98%_0x124813),_0x4b757f=[],_0x1662b1,_0x403ec1=function(_0x6d0984,_0x4592b7,_0x5b27d7){var _0x599570=_0x227bb9,_0x6d0984=_0x6d0984||_0x6d0984===0x0?_0x6d0984:0x1,_0x4592b7=_0x4592b7||0x0,_0x58bc9f=_0x4592b7+(_0x6d0984-_0x4592b7)*Math[_0x599570(0x153)]();return _0x5b27d7?Math['round'](_0x58bc9f):_0x58bc9f;},_0x3e6a6f=function(_0x4b6d56,_0x33f8cf){this['x']=_0x4b6d56,this['y']=_0x33f8cf,this['f']=_0x3bd5a9/0x6/(0x1+_0x403ec1())*Math['PI'],this['φ']=_0x403ec1(0x2*Math['PI']),this['update']=function(_0x4a65e6){var _0x73ea0c=_0x59f2,_0x14a31b=(this['x']/_0x390c1b*0x168+6.5*_0x4a65e6)%0x168,_0x432215=_0x1e6e10*0x32-0x1e*Math['cbrt'](Math[_0x73ea0c(0xee)](this['φ']+_0x4a65e6*this['f']));_0x388c6e[_0x73ea0c(0x142)]=_0x388c6e[_0x73ea0c(0x11e)]=_0x73ea0c(0x17f)+_0x14a31b+_0x73ea0c(0x11b)+_0x432215+'%)',_0x388c6e[_0x73ea0c(0x10a)]=~~((0x1-_0x1f04e8)*_0x124813*_0x432215/0x50),_0x388c6e[_0x73ea0c(0x104)](this['x'],this['y'],_0x1b1ccd,_0x1b1ccd);};};for(var _0x17a37f=0x0;_0x17a37f<_0x52c3c6;_0x17a37f++){for(var _0x3f3c70=0x0;_0x3f3c70<_0x25630a;_0x3f3c70++){_0x4b757f['push'](new _0x3e6a6f(_0x2ce9b2+(_0x17a37f+0.5*(0x1-_0x1f04e8))*_0x124813,_0x59e2ad+(_0x3f3c70+0.5*(0x1-_0x1f04e8))*_0x124813));}}_0x1662b1=_0x4b757f[_0x227bb9(0x11a)],function _0x894e3c(_0x252362){var _0x4f5232=_0x227bb9;_0x388c6e[_0x4f5232(0xf6)](0x0,0x0,_0x390c1b,_0x29c98);for(var _0x5e8388=0x0;_0x5e8388<_0x1662b1;_0x5e8388++){_0x4b757f[_0x5e8388]['update'](_0x252362);}requestAnimationFrame(_0x894e3c['bind'](this,++_0x252362));}(0x0);}else{if(_0x359ac8>=0.5&&_0x1e6e10<0.5){var _0x390c1b=_0x28f08f[_0x227bb9(0x151)]=window[_0x227bb9(0x101)],_0x29c98=_0x28f08f[_0x227bb9(0x169)]=window[_0x227bb9(0x15e)],_0x45a738=0x1/((1.5-_0x3bd5a9)*0x64),_0x1b7c2d=0x4;function _0x45a1d0(){var _0x12feb3=_0x227bb9;_0x388c6e[_0x12feb3(0x127)]=_0x12feb3(0x14a),_0x388c6e['fillStyle']='hsla(0,\x200%,\x200%,\x201)',_0x388c6e[_0x12feb3(0x104)](0x0,0x0,_0x390c1b,_0x29c98),_0x388c6e['globalCompositeOperation']='lighter',Math[_0x12feb3(0x165)]=0x4;for(var _0x57009d=0x0;_0x57009d<0xce4+(_0x13615b+0x5)*0x15e;_0x57009d++){var _0x4ae31e=0x4*_0x17d5b9()-0x2-Math[_0x12feb3(0x106)](3.14*(_0x4262ee/0x1e)*_0x1b7c2d),_0x344e60=0x4*_0x17d5b9()-0x2-Math[_0x12feb3(0xee)](3.14*_0x1b7c2d);if(_0x4ae31e*_0x4ae31e+_0x344e60*_0x344e60<0x1){var _0x3185b7=Math['pow'](_0x4ae31e*_0x4ae31e+_0x344e60*_0x344e60,0x1/0x4);_0x4ae31e/=_0x3185b7,_0x344e60/=_0x3185b7;var _0x47b14a=(0x2+Math['sin'](_0x1b7c2d*2.2))/0x3;_0x4ae31e*=_0x47b14a,_0x344e60*=_0x47b14a,_0x4ae31e=_0x4ae31e*(0x64+_0x359ac8*0x64)+_0x390c1b/0x2,_0x344e60=_0x344e60*(0x64+_0x359ac8*0x64)+_0x29c98/0x2,_0x388c6e[_0x12feb3(0x11e)]=_0x12feb3(0x11f)+_0x4262ee*0x14+_0x12feb3(0x179),_0x388c6e['beginPath'](),_0x388c6e[_0x12feb3(0x14d)](_0x4ae31e,_0x344e60,0x1,0x0,0x2*Math['PI']),_0x388c6e[_0x12feb3(0x110)]();}}var _0x45d627=(0.65-_0x1e6e10)**-0x1;for(var _0x4d4868=0x0;_0x4d4868<_0x45d627;_0x4d4868++){var _0x36d3c0=_0x45d627-0x1-_0x4d4868;_0x19aa8a(_0x388c6e,_0x28f08f,_0x390c1b,_0x29c98,Math[_0x12feb3(0x160)](0x9,0.2/Math[_0x12feb3(0x160)](0x1,_0x36d3c0/0x6)));}_0x1b7c2d+=_0x45a738,window[_0x12feb3(0xf4)](_0x45a1d0);;}_0x45a1d0();function _0x19aa8a(_0x3c00d3,_0x3e18b6,_0x13cd41,_0x5af1f1,_0x146ae3){var _0x448a3c=_0x227bb9;_0x388c6e[_0x448a3c(0x149)](),_0x388c6e[_0x448a3c(0x182)](_0x13cd41/0x2,_0x5af1f1/0x2),_0x388c6e[_0x448a3c(0x109)](_0x146ae3,_0x146ae3),_0x388c6e['translate'](-_0x13cd41/0x2,-_0x5af1f1/0x2),_0x388c6e['drawImage'](_0x3e18b6,0x0,0x0),_0x388c6e[_0x448a3c(0xec)]();}function _0x17d5b9(){var _0x59d074=_0x227bb9;return Math['seed']=Math[_0x59d074(0x165)]*0x1a5ed+0x269ec3&0xffffffff,Math[_0x59d074(0xfc)](Math[_0x59d074(0x165)]>>0x10)/0x8065;}window[_0x227bb9(0xf1)](_0x227bb9(0x150),function(){var _0x9e6d8c=_0x227bb9;_0x28f08f[_0x9e6d8c(0x151)]=_0x390c1b=window[_0x9e6d8c(0x101)],_0x28f08f[_0x9e6d8c(0x169)]=_0x29c98=window[_0x9e6d8c(0x15e)];});}else{if(_0x359ac8<0.5&&_0x1e6e10<0.5){var _0x390c1b=_0x28f08f[_0x227bb9(0x151)]=window[_0x227bb9(0x101)],_0x29c98=_0x28f08f[_0x227bb9(0x169)]=window[_0x227bb9(0x15e)],_0x48f9da=[],_0x474132=0x0,_0x105176=0x0;for(var _0x17a37f=0x0;_0x17a37f<_0x4262ee;_0x17a37f++)_0x48f9da[_0x227bb9(0xf3)](new _0x260e3a());function _0x260e3a(){var _0x52e75c=_0x227bb9;this['x']=Math[_0x52e75c(0x153)]()*_0x390c1b,this['y']=Math['random']()*_0x29c98,this['vx']=Math[_0x52e75c(0x153)](),this['vy']=Math['random'](),this[_0x52e75c(0xff)]=_0x52e75c(0x11f)+Math[_0x52e75c(0x153)]()*(_0x3bd5a9*0x320)+',\x2085%,\x2060%,\x201)',this['rad']=Math[_0x52e75c(0x153)]()*(_0x359ac8*0x12c);}function _0x3f1982(){var _0x59e2e4=_0x227bb9;_0x388c6e['globalCompositeOperation']=_0x59e2e4(0x14a),_0x388c6e[_0x59e2e4(0x11e)]='hsla(0,\x200%,\x200%,\x201)',_0x388c6e['fillRect'](0x0,0x0,_0x390c1b,_0x29c98),_0x388c6e['globalCompositeOperation']='lighter';for(var _0x4513ba=0x0;_0x4513ba<_0x48f9da[_0x59e2e4(0x11a)];_0x4513ba++){var _0xaa40c2=_0x48f9da[_0x4513ba];_0x388c6e[_0x59e2e4(0x10f)]();var _0x2de96e=_0x388c6e[_0x59e2e4(0x12b)](_0xaa40c2['x'],_0xaa40c2['y'],0x0,_0xaa40c2['x'],_0xaa40c2['y'],_0xaa40c2[_0x59e2e4(0x12a)]);_0x2de96e[_0x59e2e4(0x168)](0x0,_0x59e2e4(0x16b)),_0x2de96e['addColorStop'](_0x1e6e10,_0xaa40c2['col']),_0x2de96e[_0x59e2e4(0x168)](0x1,_0x59e2e4(0x17c)),_0x388c6e[_0x59e2e4(0x11e)]=_0x2de96e,_0x388c6e['arc'](_0xaa40c2['x'],_0xaa40c2['y'],_0xaa40c2['rad'],Math['PI']*0x2,![]),_0x388c6e[_0x59e2e4(0x110)](),_0xaa40c2['x']+=_0xaa40c2['vx'],_0xaa40c2['y']+=_0xaa40c2['vy'];if(_0xaa40c2['x']<-0x32)_0xaa40c2['x']=_0x390c1b+0x32;if(_0xaa40c2['y']<-0x32)_0xaa40c2['y']=_0x29c98+0x32;if(_0xaa40c2['x']>_0x390c1b+0x32)_0xaa40c2['x']=-0x32;if(_0xaa40c2['y']>_0x29c98+0x32)_0xaa40c2['y']=-0x32;}window[_0x59e2e4(0xf4)](_0x3f1982);}_0x3f1982(),window[_0x227bb9(0xf1)](_0x227bb9(0x150),function(){var _0x138a23=_0x227bb9;_0x28f08f[_0x138a23(0x151)]=_0x390c1b=window[_0x138a23(0x101)],_0x28f08f[_0x138a23(0x169)]=_0x29c98=window['innerHeight'];},![]);}}}}}}
