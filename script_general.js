(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","backgroundColor":["#FFFFFF"],"scripts":{"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showWindow":TDV.Tour.Script.showWindow,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"quizFinish":TDV.Tour.Script.quizFinish,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setMapLocation":TDV.Tour.Script.setMapLocation,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"historyGoBack":TDV.Tour.Script.historyGoBack,"showPopupImage":TDV.Tour.Script.showPopupImage,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"existsKey":TDV.Tour.Script.existsKey,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"createTween":TDV.Tour.Script.createTween,"initQuiz":TDV.Tour.Script.initQuiz,"shareSocial":TDV.Tour.Script.shareSocial,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"init":TDV.Tour.Script.init,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"cloneBindings":TDV.Tour.Script.cloneBindings,"translate":TDV.Tour.Script.translate,"setLocale":TDV.Tour.Script.setLocale,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizShowScore":TDV.Tour.Script.quizShowScore,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"clone":TDV.Tour.Script.clone,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"unregisterKey":TDV.Tour.Script.unregisterKey,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getKey":TDV.Tour.Script.getKey,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"resumePlayers":TDV.Tour.Script.resumePlayers,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"textToSpeech":TDV.Tour.Script.textToSpeech,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"quizStart":TDV.Tour.Script.quizStart,"setValue":TDV.Tour.Script.setValue,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"executeJS":TDV.Tour.Script.executeJS,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"registerKey":TDV.Tour.Script.registerKey,"mixObject":TDV.Tour.Script.mixObject,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"openLink":TDV.Tour.Script.openLink,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getOverlays":TDV.Tour.Script.getOverlays,"startMeasurement":TDV.Tour.Script.startMeasurement,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"initAnalytics":TDV.Tour.Script.initAnalytics,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPixels":TDV.Tour.Script.getPixels,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getComponentByName":TDV.Tour.Script.getComponentByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"downloadFile":TDV.Tour.Script.downloadFile},"start":"this.init()","data":{"locales":{"es":"locale/es.txt"},"textToSpeechConfig":{"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1,"stopBackgroundAudio":false,"pitch":1},"defaultLocale":"es","name":"Player560","history":{}},"children":["this.MainViewer"],"propagateClick":false,"class":"Player","backgroundColorRatios":[0],"defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","scrollBarMargin":2,"layout":"absolute","gap":10,"hash": "eae2c89ec626c4d07d649b29d71f917cb7e8aafc0faacc6bcea3c40b869b8f91", "definitions": [{"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate","class":"PanoramaPlayer"},{"id":"MainViewer","toolTipBorderColor":"#767676","playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColorRatios":[0],"playbackBarBackgroundColor":["#FFFFFF"],"progressRight":"33%","toolTipFontColor":"#606060","subtitlesFontColor":"#FFFFFF","progressBarBackgroundColorDirection":"horizontal","vrPointerColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","progressBarBorderColor":"#000000","toolTipPaddingBottom":4,"progressBarBackgroundColorRatios":[0],"progressOpacity":0.7,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingRight":6,"playbackBarHeight":10,"playbackBarHeadBackgroundColorRatios":[0,1],"data":{"name":"Main Viewer"},"subtitlesBottom":50,"playbackBarProgressBorderSize":0,"firstTransitionDuration":0,"playbackBarHeadBorderSize":0,"progressBorderColor":"#000000","playbackBarBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"subtitlesTextShadowColor":"#000000","width":"100%","toolTipFontSize":"1.11vmin","subtitlesTop":0,"subtitlesFontSize":"3vmin","minHeight":50,"progressBottom":10,"playbackBarBottom":5,"height":"100%","toolTipShadowColor":"#333138","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","minWidth":100,"toolTipFontFamily":"Arial","progressBorderSize":0,"progressBarBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","progressBarBorderRadius":2,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"toolTipPaddingTop":4,"progressHeight":2,"subtitlesTextShadowVerticalLength":1,"subtitlesBackgroundOpacity":0.2,"playbackBarBackgroundOpacity":1,"progressBorderRadius":2,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadow":true,"propagateClick":false,"progressLeft":"33%","class":"ViewerArea","subtitlesBorderColor":"#FFFFFF","toolTipPaddingLeft":6,"subtitlesFontFamily":"Arial","playbackBarHeadBorderColor":"#000000","playbackBarRight":0,"playbackBarBorderColor":"#FFFFFF","playbackBarLeft":0,"playbackBarHeadWidth":6,"vrPointerSelectionColor":"#FF6600","playbackBarBorderRadius":0,"subtitlesGap":0,"playbackBarProgressBorderRadius":0,"vrPointerSelectionTime":2000,"toolTipBackgroundColor":"#F6F6F6","subtitlesBackgroundColor":"#000000","playbackBarProgressBorderColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadHeight":15},{"id":"mainPlayList","items":[{"end":"this.trigger('tourEnded')","camera":"this.panorama_EFD9C97D_E347_D666_41EB_21E864FB581F_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_EFD9C97D_E347_D666_41EB_21E864FB581F","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"id":"panorama_EFD9C97D_E347_D666_41EB_21E864FB581F","label":trans('panorama_EFD9C97D_E347_D666_41EB_21E864FB581F.label'),"hfovMax":130,"thumbnailUrl":"media/panorama_EFD9C97D_E347_D666_41EB_21E864FB581F_t.jpg","data":{"label":"image (48)"},"frames":[{"thumbnailUrl":"media/panorama_EFD9C97D_E347_D666_41EB_21E864FB581F_t.jpg","cube":{"class":"ImageResource","levels":[{"height":1024,"colCount":12,"rowCount":2,"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_EFD9C97D_E347_D666_41EB_21E864FB581F_0/{face}/0/{row}_{column}.jpg","width":6144},{"height":512,"colCount":6,"rowCount":1,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"url":"media/panorama_EFD9C97D_E347_D666_41EB_21E864FB581F_0/{face}/1/{row}_{column}.jpg","width":3072}]},"class":"CubicPanoramaFrame"}],"vfov":121.01,"hfovMin":"150%","hfov":360,"class":"Panorama"},{"id":"panorama_EFD9C97D_E347_D666_41EB_21E864FB581F_camera","enterPointingToHorizon":true,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_E99B9F9D_E347_CAA6_41AD_4C14D98D1FE6","class":"PanoramaCamera"},{"id":"sequence_E99B9F9D_E347_CAA6_41AD_4C14D98D1FE6","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}]}],"width":"100%","watermark":false,"height":"100%","minHeight":0,"minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.11.js.map
})();
//Generated with v2023.0.11, Thu Jun 22 2023