(function(){!function(e,n,t){"use strict";return e.fn.slidea.pauseOnHover=function(){this.settings=!1,this.load=function(){this.element.on("mouseenter",function(e){return function(){e.pause_timer()}}(this)),this.element.on("mouseleave",function(e){return function(){e.unpause_timer()}}(this)),this.log("Enabled pause on hover.")}},e.slidea.register_module("pauseOnHover",e.fn.slidea.pauseOnHover)}(window.jQuery,window,document)}).call(this);