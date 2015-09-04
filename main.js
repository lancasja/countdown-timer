var module,countdown=function(e){"use strict";function n(e,n){var s=e.getTime();return e.setMonth(e.getMonth()+n),Math.round((e.getTime()-s)/U)}function s(e){var n=e.getTime(),s=new Date(n);return s.setMonth(e.getMonth()+1),Math.round((s.getTime()-n)/U)}function t(e){var n=e.getTime(),s=new Date(n);return s.setFullYear(e.getFullYear()+1),Math.round((s.getTime()-n)/U)}function r(e,n){if(n=n instanceof Date||null!==n&&isFinite(n)?new Date(+n):new Date,!e)return n;var s=+e.value||0;return s?(n.setTime(n.getTime()+s),n):(s=+e.milliseconds||0,s&&n.setMilliseconds(n.getMilliseconds()+s),s=+e.seconds||0,s&&n.setSeconds(n.getSeconds()+s),s=+e.minutes||0,s&&n.setMinutes(n.getMinutes()+s),s=+e.hours||0,s&&n.setHours(n.getHours()+s),s=+e.weeks||0,s&&(s*=R),s+=+e.days||0,s&&n.setDate(n.getDate()+s),s=+e.months||0,s&&n.setMonth(n.getMonth()+s),s=+e.millennia||0,s&&(s*=B),s+=+e.centuries||0,s&&(s*=z),s+=+e.decades||0,s&&(s*=W),s+=+e.years||0,s&&n.setFullYear(n.getFullYear()+s),n)}function i(e,n){return N(e)+(1===e?y[n]:p[n])}function o(){}function u(e,n){switch(n){case"seconds":if(e.seconds!==q||isNaN(e.minutes))return;e.minutes++,e.seconds=0;case"minutes":if(e.minutes!==j||isNaN(e.hours))return;e.hours++,e.minutes=0;case"hours":if(e.hours!==x||isNaN(e.days))return;e.days++,e.hours=0;case"days":if(e.days!==R||isNaN(e.weeks))return;e.weeks++,e.days=0;case"weeks":if(e.weeks!==s(e.refMonth)/R||isNaN(e.months))return;e.months++,e.weeks=0;case"months":if(e.months!==K||isNaN(e.years))return;e.years++,e.months=0;case"years":if(e.years!==W||isNaN(e.decades))return;e.decades++,e.years=0;case"decades":if(e.decades!==z||isNaN(e.centuries))return;e.centuries++,e.decades=0;case"centuries":if(e.centuries!==B||isNaN(e.millennia))return;e.millennia++,e.centuries=0}}function a(e,n,s,t,r,i){return e[s]>=0&&(n+=e[s],delete e[s]),n/=r,1>=n+1?0:e[t]>=0?(e[t]=+(e[t]+n).toFixed(i),u(e,t),0):n}function d(e,n){var r=a(e,0,"milliseconds","seconds",C,n);if(r&&(r=a(e,r,"seconds","minutes",q,n),r&&(r=a(e,r,"minutes","hours",j,n),r&&(r=a(e,r,"hours","days",x,n),r&&(r=a(e,r,"days","weeks",R,n),r&&(r=a(e,r,"weeks","months",s(e.refMonth)/R,n),r&&(r=a(e,r,"months","years",t(e.refMonth)/s(e.refMonth),n),r&&(r=a(e,r,"years","decades",W,n),r&&(r=a(e,r,"decades","centuries",z,n),r&&(r=a(e,r,"centuries","millennia",B,n)))))))))))throw new Error("Fractional unit overflow")}function c(e){var s;for(e.milliseconds<0?(s=G(-e.milliseconds/C),e.seconds-=s,e.milliseconds+=s*C):e.milliseconds>=C&&(e.seconds+=J(e.milliseconds/C),e.milliseconds%=C),e.seconds<0?(s=G(-e.seconds/q),e.minutes-=s,e.seconds+=s*q):e.seconds>=q&&(e.minutes+=J(e.seconds/q),e.seconds%=q),e.minutes<0?(s=G(-e.minutes/j),e.hours-=s,e.minutes+=s*j):e.minutes>=j&&(e.hours+=J(e.minutes/j),e.minutes%=j),e.hours<0?(s=G(-e.hours/x),e.days-=s,e.hours+=s*x):e.hours>=x&&(e.days+=J(e.hours/x),e.hours%=x);e.days<0;)e.months--,e.days+=n(e.refMonth,1);e.days>=R&&(e.weeks+=J(e.days/R),e.days%=R),e.months<0?(s=G(-e.months/K),e.years-=s,e.months+=s*K):e.months>=K&&(e.years+=J(e.months/K),e.months%=K),e.years>=W&&(e.decades+=J(e.years/W),e.years%=W,e.decades>=z&&(e.centuries+=J(e.decades/z),e.decades%=z,e.centuries>=B&&(e.millennia+=J(e.centuries/B),e.centuries%=B)))}function l(e,s,t,r){var i=0;!(s&O)||i>=t?(e.centuries+=e.millennia*B,delete e.millennia):e.millennia&&i++,!(s&b)||i>=t?(e.decades+=e.centuries*z,delete e.centuries):e.centuries&&i++,!(s&Y)||i>=t?(e.years+=e.decades*W,delete e.decades):e.decades&&i++,!(s&H)||i>=t?(e.months+=e.years*K,delete e.years):e.years&&i++,!(s&I)||i>=t?(e.months&&(e.days+=n(e.refMonth,e.months)),delete e.months,e.days>=R&&(e.weeks+=J(e.days/R),e.days%=R)):e.months&&i++,!(s&F)||i>=t?(e.days+=e.weeks*R,delete e.weeks):e.weeks&&i++,!(s&L)||i>=t?(e.hours+=e.days*x,delete e.days):e.days&&i++,!(s&E)||i>=t?(e.minutes+=e.hours*j,delete e.hours):e.hours&&i++,!(s&k)||i>=t?(e.seconds+=e.minutes*q,delete e.minutes):e.minutes&&i++,!(s&D)||i>=t?(e.milliseconds+=e.seconds*C,delete e.seconds):e.seconds&&i++,(!(s&T)||i>=t)&&d(e,r)}function m(e,n,s,t,r,i){var o=new Date;if(e.start=n=n||o,e.end=s=s||o,e.units=t,e.value=s.getTime()-n.getTime(),e.value<0){var u=s;s=n,n=u}e.refMonth=new Date(n.getFullYear(),n.getMonth(),15,12,0,0);try{e.millennia=0,e.centuries=0,e.decades=0,e.years=s.getFullYear()-n.getFullYear(),e.months=s.getMonth()-n.getMonth(),e.weeks=0,e.days=s.getDate()-n.getDate(),e.hours=s.getHours()-n.getHours(),e.minutes=s.getMinutes()-n.getMinutes(),e.seconds=s.getSeconds()-n.getSeconds(),e.milliseconds=s.getMilliseconds()-n.getMilliseconds(),c(e),l(e,t,r,i)}finally{delete e.refMonth}return e}function h(e){return e&T?C/30:e&D?C:e&k?C*q:e&E?C*q*j:e&L?C*q*j*x:C*q*j*x*R}function f(e,n,s,t,i){var u;s=+s||A,t=t>0?t:0/0,i=i>0?20>i?Math.round(i):20:0;var a=null;"function"==typeof e?(u=e,e=null):e instanceof Date||(null!==e&&isFinite(e)?e=new Date(+e):("object"==typeof a&&(a=e),e=null));var d=null;if("function"==typeof n?(u=n,n=null):n instanceof Date||(null!==n&&isFinite(n)?n=new Date(+n):("object"==typeof n&&(d=n),n=null)),a&&(e=r(a,n)),d&&(n=r(d,e)),!e&&!n)return new o;if(!u)return m(new o,e,n,s,t,i);var c,l=h(s),f=function(){u(m(new o,e,n,s,t,i),c)};return f(),c=setInterval(f,l)}var y,p,g,w,M,v,N,S,T=1,D=2,k=4,E=8,L=16,F=32,I=64,H=128,Y=256,b=512,O=1024,A=H|I|L|E|k|D,C=1e3,q=60,j=60,x=24,U=x*j*q*C,R=7,K=12,W=10,z=10,B=10,G=Math.ceil,J=Math.floor,P=0,Q=1,V=2,X=3,Z=4,$=5,_=6,en=7,nn=8,sn=9,tn=10;o.prototype.toString=function(e){var n=S(this),s=n.length;if(!s)return e?""+e:M;if(1===s)return n[0];var t=g+n.pop();return n.join(w)+t},o.prototype.toHTML=function(e,n){e=e||"span";var s=S(this),t=s.length;if(!t)return n=n||M,n?"<"+e+">"+n+"</"+e+">":n;for(var r=0;t>r;r++)s[r]="<"+e+">"+s[r]+"</"+e+">";if(1===t)return s[0];var i=g+s.pop();return s.join(w)+i},o.prototype.addTo=function(e){return r(this,e)},S=function(e){var n=[],s=e.millennia;return s&&n.push(v(s,tn)),s=e.centuries,s&&n.push(v(s,sn)),s=e.decades,s&&n.push(v(s,nn)),s=e.years,s&&n.push(v(s,en)),s=e.months,s&&n.push(v(s,_)),s=e.weeks,s&&n.push(v(s,$)),s=e.days,s&&n.push(v(s,Z)),s=e.hours,s&&n.push(v(s,X)),s=e.minutes,s&&n.push(v(s,V)),s=e.seconds,s&&n.push(v(s,Q)),s=e.milliseconds,s&&n.push(v(s,P)),n},f.MILLISECONDS=T,f.SECONDS=D,f.MINUTES=k,f.HOURS=E,f.DAYS=L,f.WEEKS=F,f.MONTHS=I,f.YEARS=H,f.DECADES=Y,f.CENTURIES=b,f.MILLENNIA=O,f.DEFAULTS=A,f.ALL=O|b|Y|H|I|F|L|E|k|D|T;var rn=f.setFormat=function(e){if(e){if("singular"in e||"plural"in e){var n=e.singular||[];n.split&&(n=n.split("|"));var s=e.plural||[];s.split&&(s=s.split("|"));for(var t=P;tn>=t;t++)y[t]=n[t]||y[t],p[t]=s[t]||p[t]}"string"==typeof e.last&&(g=e.last),"string"==typeof e.delim&&(w=e.delim),"string"==typeof e.empty&&(M=e.empty),"function"==typeof e.formatNumber&&(N=e.formatNumber),"function"==typeof e.formatter&&(v=e.formatter)}},on=f.resetFormat=function(){y=" millisecond| second| minute| hour| day| week| month| year| decade| century| millennium".split("|"),p=" milliseconds| seconds| minutes| hours| days| weeks| months| years| decades| centuries| millennia".split("|"),g=" and ",w=", ",M="",N=function(e){return e},v=i};return f.setLabels=function(e,n,s,t,r,i,o){rn({singular:e,plural:n,last:s,delim:t,empty:r,formatNumber:i,formatter:o})},f.resetLabels=on,on(),e&&e.exports?e.exports=f:"function"==typeof window.define&&"undefined"!=typeof window.define.amd&&window.define("countdown",[],function(){return f}),f}(module);!function(){countdown(new Date(2016,0,1),function(e){for(var n=[],s=[],t=(document.querySelector("#pageTimer"),document.querySelector("#pageTimer .months")),r=document.querySelector("#pageTimer .days"),i=document.querySelector("#pageTimer .hours"),o=document.querySelector("#pageTimer .minutes"),u=e.toString().split(","),a=u[u.length-1].split("and"),d=0;d<u.length;d++){var c=u[d];c.indexOf("and")<0&&n.push(c)}s=n.concat(a),t.innerHTML=parseInt(s[0]),r.innerHTML=parseInt(s[1]),i.innerHTML=parseInt(s[2]),o.innerHTML=parseInt(s[3])},~(countdown.WEEKS|countdown.SECONDS|countdown.MILLISECONDS))}();