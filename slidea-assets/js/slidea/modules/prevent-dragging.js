(function(){!function(n,t,i){"use strict";return n.fn.slidea.preventDragging=function(){this.settings=!0,this.initialize=function(){n("img",this.element).on("dragstart",function(n){return function(n){n.preventDefault()}}(this))}},n.slidea.register_module("preventDragging",n.fn.slidea.preventDragging)}(window.jQuery,window,document)}).call(this);