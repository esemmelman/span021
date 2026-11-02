const fs = require('node:fs'), vm = require('node:vm'), assert = require('node:assert/strict');
const source = fs.readFileSync('fit.js', 'utf8');
for (const [width,height,dpr] of [[1280,620,1.5],[1264,490,1.5],[1920,940,1],[1008,430,2],[640,360,3]]) {
 const events={}, area={clientWidth:width,clientHeight:height,addEventListener:(name,fn)=>events[name]=fn};
 const workspace={style:{},addEventListener:(name,fn)=>events[name]=fn};
 const page={scrollTop:99,scrollLeft:99}, listeners={};
 const window={screen:{width:1920/dpr,height:1080/dpr},devicePixelRatio:dpr,requestAnimationFrame:fn=>fn(),addEventListener:(name,fn)=>listeners[name]=fn,visualViewport:{addEventListener:(name,fn)=>listeners['visual'+name]=fn}};
 let fits=0;
 vm.runInNewContext(source,{window,document:{getElementById:id=>id==='fit-area'?area:workspace,scrollingElement:page},scheduleFit:()=>fits++,ResizeObserver:class {observe(){}}});
 function check(){const scale=window.quizDisplay.fitScale;assert.ok(parseFloat(workspace.style.width)*scale<=area.clientWidth+.01);assert.ok(parseFloat(workspace.style.height)*scale<=area.clientHeight+.01);assert.equal(window.quizDisplay.scaling,dpr);assert.equal(workspace.style.visibility,'visible');}
 check();assert.equal(page.scrollTop,0);assert.equal(page.scrollLeft,0);
 area.clientWidth/=2;area.clientHeight/=2;listeners.resize();check();
 listeners.visualresize();check();assert.ok(fits>=3);
 area.scrollTop=99;events.scroll();assert.equal(area.scrollTop,0);
}
console.log('PASS: display metrics, full activity fitting, resize/zoom refitting, and focus/scroll positioning across five viewport/scaling combinations.');
