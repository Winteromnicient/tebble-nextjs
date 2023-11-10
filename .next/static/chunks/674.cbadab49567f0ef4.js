(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[674],{8437:function(e,t,r){!function(e){"use strict";var t,r=(e=e&&"default"in e?e.default:e)(window);function isPercentage(e){return"%"==e[e.length-1]}function createImageData(e,t){try{return new ImageData(e,t)}catch(r){return document.createElement("canvas").getContext("2d").createImageData(e,t)}}function translateBackgroundPosition(e){var t=e.split(" ");if(1!==t.length)return t.map(function(t){switch(e){case"center":return"50%";case"top":case"left":return"0";case"right":case"bottom":return"100%";default:return t}});switch(e){case"center":return["50%","50%"];case"top":return["50%","0"];case"bottom":return["50%","100%"];case"left":return["0","50%"];case"right":return["100%","50%"];default:return[e,"50%"]}}function createProgram(e,r,i){function compileSource(e,r){var i=t.createShader(e);if(t.shaderSource(i,r),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS))throw Error("compile error: "+t.getShaderInfoLog(i));return i}var n={};if(n.id=t.createProgram(),t.attachShader(n.id,compileSource(t.VERTEX_SHADER,e)),t.attachShader(n.id,compileSource(t.FRAGMENT_SHADER,r)),t.linkProgram(n.id),!t.getProgramParameter(n.id,t.LINK_STATUS))throw Error("link error: "+t.getProgramInfoLog(n.id));n.uniforms={},n.locations={},t.useProgram(n.id),t.enableVertexAttribArray(0);for(var o,a,s=/uniform (\w+) (\w+)/g,u=e+r;null!=(o=s.exec(u));)a=o[2],n.locations[a]=t.getUniformLocation(n.id,a);return n}function bindTexture(e,r){t.activeTexture(t.TEXTURE0+(r||0)),t.bindTexture(t.TEXTURE_2D,e)}function extractUrl(e){var t=/url\(["']?([^"']*)["']?\)/.exec(e);return null==t?null:t[1]}function isDataUri(e){return e.match(/^data:/)}var i=function(){var e=document.createElement("canvas");if(!(t=e.getContext("webgl")||e.getContext("experimental-webgl")))return null;var r={};if(["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear"].forEach(function(e){var i=t.getExtension(e);i&&(r[e]=i)}),!r.OES_texture_float)return null;var i=[];function createConfig(e,t,i){var n="OES_texture_"+e,o=n+"_linear",a=o in r,s=[n];return a&&s.push(o),{type:t,arrayType:i,linearSupport:a,extensions:s}}i.push(createConfig("float",t.FLOAT,Float32Array)),r.OES_texture_half_float&&i.push(createConfig("half_float",r.OES_texture_half_float.HALF_FLOAT_OES,null));var n=t.createTexture(),o=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,o),t.bindTexture(t.TEXTURE_2D,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE);for(var a=null,s=0;s<i.length;s++)if(t.texImage2D(t.TEXTURE_2D,0,t.RGBA,32,32,0,t.RGBA,i[s].type,null),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0),t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE){a=i[s];break}return a}(),n=createImageData(32,32);e("head").prepend("<style>.jquery-ripples { position: relative; z-index: 0; }</style>");var Ripples=function(r,n){var o=this;this.$el=e(r),this.interactive=n.interactive,this.resolution=n.resolution,this.textureDelta=new Float32Array([1/this.resolution,1/this.resolution]),this.perturbance=n.perturbance,this.dropRadius=n.dropRadius,this.crossOrigin=n.crossOrigin,this.imageUrl=n.imageUrl;var a=document.createElement("canvas");a.width=this.$el.innerWidth(),a.height=this.$el.innerHeight(),this.canvas=a,this.$canvas=e(a),this.$canvas.css({position:"absolute",left:0,top:0,right:0,bottom:0,zIndex:-1}),this.$el.addClass("jquery-ripples").append(a),this.context=t=a.getContext("webgl")||a.getContext("experimental-webgl"),i.extensions.forEach(function(e){t.getExtension(e)}),this.updateSize=this.updateSize.bind(this),e(window).on("resize",this.updateSize),this.textures=[],this.framebuffers=[],this.bufferWriteIndex=0,this.bufferReadIndex=1;for(var s=i.arrayType,u=s?new s(this.resolution*this.resolution*4):null,c=0;c<2;c++){var h=t.createTexture(),d=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,d),t.bindTexture(t.TEXTURE_2D,h),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,i.linearSupport?t.LINEAR:t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,i.linearSupport?t.LINEAR:t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,this.resolution,this.resolution,0,t.RGBA,i.type,u),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,h,0),this.textures.push(h),this.framebuffers.push(d)}function step(){o.destroyed||(o.step(),requestAnimationFrame(step))}this.quad=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.quad),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,1,1,-1,1]),t.STATIC_DRAW),this.initShaders(),this.initTexture(),this.setTransparentTexture(),this.loadImage(),t.clearColor(0,0,0,0),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),this.visible=!0,this.running=!0,this.inited=!0,this.destroyed=!1,this.setupPointerEvents(),requestAnimationFrame(step)};Ripples.DEFAULTS={imageUrl:null,resolution:256,dropRadius:20,perturbance:.03,interactive:!0,crossOrigin:""},Ripples.prototype={setupPointerEvents:function(){var e=this;function pointerEventsEnabled(){return e.visible&&e.running&&e.interactive}function dropAtPointer(t,r){pointerEventsEnabled()&&e.dropAtPointer(t,e.dropRadius*(r?1.5:1),r?.14:.01)}this.$el.on("mousemove.ripples",function(e){dropAtPointer(e)}).on("touchmove.ripples touchstart.ripples",function(e){for(var t=e.originalEvent.changedTouches,r=0;r<t.length;r++)dropAtPointer(t[r])}).on("mousedown.ripples",function(e){dropAtPointer(e,!0)})},loadImage:function(){var e=this;t=this.context;var r=this.imageUrl||extractUrl(this.originalCssBackgroundImage)||extractUrl(this.$el.css("backgroundImage"));if(r!=this.imageSource){if(this.imageSource=r,!this.imageSource){this.setTransparentTexture();return}var i=new Image;i.onload=function(){t=e.context;var r,n,o=((r=i.width)&r-1)==0&&((n=i.height)&n-1)==0?t.REPEAT:t.CLAMP_TO_EDGE;t.bindTexture(t.TEXTURE_2D,e.backgroundTexture),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,o),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i),e.backgroundWidth=i.width,e.backgroundHeight=i.height,e.hideCssBackground()},i.onerror=function(){t=e.context,e.setTransparentTexture()},i.crossOrigin=isDataUri(this.imageSource)?null:this.crossOrigin,i.src=this.imageSource}},step:function(){t=this.context,this.visible&&(this.computeTextureBoundaries(),this.running&&this.update(),this.render())},drawQuad:function(){t.bindBuffer(t.ARRAY_BUFFER,this.quad),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.drawArrays(t.TRIANGLE_FAN,0,4)},render:function(){t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,this.canvas.width,this.canvas.height),t.enable(t.BLEND),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.useProgram(this.renderProgram.id),bindTexture(this.backgroundTexture,0),bindTexture(this.textures[0],1),t.uniform1f(this.renderProgram.locations.perturbance,this.perturbance),t.uniform2fv(this.renderProgram.locations.topLeft,this.renderProgram.uniforms.topLeft),t.uniform2fv(this.renderProgram.locations.bottomRight,this.renderProgram.uniforms.bottomRight),t.uniform2fv(this.renderProgram.locations.containerRatio,this.renderProgram.uniforms.containerRatio),t.uniform1i(this.renderProgram.locations.samplerBackground,0),t.uniform1i(this.renderProgram.locations.samplerRipples,1),this.drawQuad(),t.disable(t.BLEND)},update:function(){t.viewport(0,0,this.resolution,this.resolution),t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffers[this.bufferWriteIndex]),bindTexture(this.textures[this.bufferReadIndex]),t.useProgram(this.updateProgram.id),this.drawQuad(),this.swapBufferIndices()},swapBufferIndices:function(){this.bufferWriteIndex=1-this.bufferWriteIndex,this.bufferReadIndex=1-this.bufferReadIndex},computeTextureBoundaries:function(){var e,t=this.$el.css("background-size"),i=this.$el.css("background-attachment"),n=translateBackgroundPosition(this.$el.css("background-position"));if("fixed"==i?((e={left:window.pageXOffset,top:window.pageYOffset}).width=r.width(),e.height=r.height()):((e=this.$el.offset()).width=this.$el.innerWidth(),e.height=this.$el.innerHeight()),"cover"==t)var o=Math.max(e.width/this.backgroundWidth,e.height/this.backgroundHeight),a=this.backgroundWidth*o,s=this.backgroundHeight*o;else if("contain"==t)var o=Math.min(e.width/this.backgroundWidth,e.height/this.backgroundHeight),a=this.backgroundWidth*o,s=this.backgroundHeight*o;else{var a=(t=t.split(" "))[0]||"",s=t[1]||a;isPercentage(a)?a=e.width*parseFloat(a)/100:"auto"!=a&&(a=parseFloat(a)),isPercentage(s)?s=e.height*parseFloat(s)/100:"auto"!=s&&(s=parseFloat(s)),"auto"==a&&"auto"==s?(a=this.backgroundWidth,s=this.backgroundHeight):("auto"==a&&(a=this.backgroundWidth*(s/this.backgroundHeight)),"auto"==s&&(s=this.backgroundHeight*(a/this.backgroundWidth)))}var u=n[0],c=n[1];u=isPercentage(u)?e.left+(e.width-a)*parseFloat(u)/100:e.left+parseFloat(u),c=isPercentage(c)?e.top+(e.height-s)*parseFloat(c)/100:e.top+parseFloat(c);var h=this.$el.offset();this.renderProgram.uniforms.topLeft=new Float32Array([(h.left-u)/a,(h.top-c)/s]),this.renderProgram.uniforms.bottomRight=new Float32Array([this.renderProgram.uniforms.topLeft[0]+this.$el.innerWidth()/a,this.renderProgram.uniforms.topLeft[1]+this.$el.innerHeight()/s]);var d=Math.max(this.canvas.width,this.canvas.height);this.renderProgram.uniforms.containerRatio=new Float32Array([this.canvas.width/d,this.canvas.height/d])},initShaders:function(){var e="attribute vec2 vertex;\nvarying vec2 coord;\nvoid main() {\ncoord = vertex * 0.5 + 0.5;\ngl_Position = vec4(vertex, 0.0, 1.0);\n}";this.dropProgram=createProgram(e,"precision highp float;\nconst float PI = 3.141592653589793;\nuniform sampler2D texture;\nuniform vec2 center;\nuniform float radius;\nuniform float strength;\nvarying vec2 coord;\nvoid main() {\nvec4 info = texture2D(texture, coord);\nfloat drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);\ndrop = 0.5 - cos(drop * PI) * 0.5;\ninfo.r += drop * strength;\ngl_FragColor = info;\n}"),this.updateProgram=createProgram(e,"precision highp float;\nuniform sampler2D texture;\nuniform vec2 delta;\nvarying vec2 coord;\nvoid main() {\nvec4 info = texture2D(texture, coord);\nvec2 dx = vec2(delta.x, 0.0);\nvec2 dy = vec2(0.0, delta.y);\nfloat average = (\ntexture2D(texture, coord - dx).r +\ntexture2D(texture, coord - dy).r +\ntexture2D(texture, coord + dx).r +\ntexture2D(texture, coord + dy).r\n) * 0.25;\ninfo.g += (average - info.r) * 2.0;\ninfo.g *= 0.995;\ninfo.r += info.g;\ngl_FragColor = info;\n}"),t.uniform2fv(this.updateProgram.locations.delta,this.textureDelta),this.renderProgram=createProgram("precision highp float;\nattribute vec2 vertex;\nuniform vec2 topLeft;\nuniform vec2 bottomRight;\nuniform vec2 containerRatio;\nvarying vec2 ripplesCoord;\nvarying vec2 backgroundCoord;\nvoid main() {\nbackgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);\nbackgroundCoord.y = 1.0 - backgroundCoord.y;\nripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;\ngl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);\n}","precision highp float;\nuniform sampler2D samplerBackground;\nuniform sampler2D samplerRipples;\nuniform vec2 delta;\nuniform float perturbance;\nvarying vec2 ripplesCoord;\nvarying vec2 backgroundCoord;\nvoid main() {\nfloat height = texture2D(samplerRipples, ripplesCoord).r;\nfloat heightX = texture2D(samplerRipples, vec2(ripplesCoord.x + delta.x, ripplesCoord.y)).r;\nfloat heightY = texture2D(samplerRipples, vec2(ripplesCoord.x, ripplesCoord.y + delta.y)).r;\nvec3 dx = vec3(delta.x, heightX - height, 0.0);\nvec3 dy = vec3(0.0, heightY - height, delta.y);\nvec2 offset = -normalize(cross(dy, dx)).xz;\nfloat specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);\ngl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;\n}"),t.uniform2fv(this.renderProgram.locations.delta,this.textureDelta)},initTexture:function(){this.backgroundTexture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.backgroundTexture),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR)},setTransparentTexture:function(){t.bindTexture(t.TEXTURE_2D,this.backgroundTexture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n)},hideCssBackground:function(){var e=this.$el[0].style.backgroundImage;"none"!=e&&(this.originalInlineCss=e,this.originalCssBackgroundImage=this.$el.css("backgroundImage"),this.$el.css("backgroundImage","none"))},restoreCssBackground:function(){this.$el.css("backgroundImage",this.originalInlineCss||"")},dropAtPointer:function(e,t,r){var i=parseInt(this.$el.css("border-left-width"))||0,n=parseInt(this.$el.css("border-top-width"))||0;this.drop(e.pageX-this.$el.offset().left-i,e.pageY-this.$el.offset().top-n,t,r)},drop:function(e,r,i,n){t=this.context;var o=this.$el.innerWidth(),a=this.$el.innerHeight(),s=Math.max(o,a);i/=s;var u=new Float32Array([(2*e-o)/s,(a-2*r)/s]);t.viewport(0,0,this.resolution,this.resolution),t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffers[this.bufferWriteIndex]),bindTexture(this.textures[this.bufferReadIndex]),t.useProgram(this.dropProgram.id),t.uniform2fv(this.dropProgram.locations.center,u),t.uniform1f(this.dropProgram.locations.radius,i),t.uniform1f(this.dropProgram.locations.strength,n),this.drawQuad(),this.swapBufferIndices()},updateSize:function(){var e=this.$el.innerWidth(),t=this.$el.innerHeight();(e!=this.canvas.width||t!=this.canvas.height)&&(this.canvas.width=e,this.canvas.height=t)},destroy:function(){this.$el.off(".ripples").removeClass("jquery-ripples").removeData("ripples"),t=null,e(window).off("resize",this.updateSize),this.$canvas.remove(),this.restoreCssBackground(),this.destroyed=!0},show:function(){this.visible=!0,this.$canvas.show(),this.hideCssBackground()},hide:function(){this.visible=!1,this.$canvas.hide(),this.restoreCssBackground()},pause:function(){this.running=!1},play:function(){this.running=!0},set:function(e,t){switch(e){case"dropRadius":case"perturbance":case"interactive":case"crossOrigin":this[e]=t;break;case"imageUrl":this.imageUrl=t,this.loadImage()}}};var o=e.fn.ripples;e.fn.ripples=function(t){if(!i)throw Error("Your browser does not support WebGL, the OES_texture_float extension or rendering to floating point textures.");var r=arguments.length>1?Array.prototype.slice.call(arguments,1):void 0;return this.each(function(){var i=e(this),n=i.data("ripples"),o=e.extend({},Ripples.DEFAULTS,i.data(),"object"==typeof t&&t);(n||"string"!=typeof t)&&(n?"string"==typeof t&&Ripples.prototype[t].apply(n,r):i.data("ripples",n=new Ripples(this,o)))})},e.fn.ripples.Constructor=Ripples,e.fn.ripples.noConflict=function(){return e.fn.ripples=o,this}}(r(9755))},7674:function(e,t,r){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__rest||function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]]);return r};Object.defineProperty(t,"__esModule",{value:!0}),t.useRipples=void 0;var o=r(5893),a=r(7294),s=r(9755);function WaterEffect(e){var r=e.imageUrl,s=e.dropRadius,u=e.perturbance,c=e.resolution,h=e.interactive,d=e.crossOrigin,l=e.children,f=n(e,["imageUrl","dropRadius","perturbance","resolution","interactive","crossOrigin","children"]),p=(0,a.useRef)(null),g=(0,t.useRipples)({imageUrl:void 0===r?"":r,dropRadius:void 0===s?20:s,perturbance:void 0===u?.03:u,resolution:void 0===c?256:c,interactive:void 0===h||h,crossOrigin:void 0===d?"":d,rippleRef:p}),m=g.destroy,E=g.pause,v=g.play,T=g.hide,x=g.show,R=g.drop,b=g.set,_=g.updateSize;return(0,o.jsx)("div",i({ref:p},f,{children:l({destroy:m,pause:E,play:v,hide:T,show:x,drop:R,set:b,updateSize:_})}))}r(8437),t.useRipples=function(e){var t=e.imageUrl,r=e.dropRadius,i=e.perturbance,n=e.resolution,o=e.interactive,u=e.crossOrigin,c=e.rippleRef,h=(0,a.useRef)({ripples:function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r]}});return(0,a.useEffect)(function(){return h.current=s(c.current),h.current.ripples({imageUrl:t,dropRadius:r,perturbance:i,resolution:n,interactive:o,crossOrigin:u}),function(){h.current.ripples("destroy")}},[u,r,t,o,i,n,c]),{destroy:function(){h.current.ripples("destroy")},pause:function(){h.current.ripples("pause")},play:function(){h.current.ripples("play")},hide:function(){h.current.ripples("hide")},show:function(){h.current.ripples("show")},drop:function(e){var t=e.x,r=e.y,i=e.radius,n=e.strength;h.current.ripples("drop",t,r,i,n)},set:function(e){var t=e.property,r=e.value;h.current.ripples("set",t,r)},updateSize:function(){h.current.ripples("updateSize")}}},t.default=WaterEffect}}]);