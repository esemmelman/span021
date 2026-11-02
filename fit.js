// Match crossword01: inspect the display silently and fit to the actual browser area.
(() => {
 const area = document.getElementById('fit-area');
 const workspace = document.getElementById('workspace');
 const keepVisible = () => {
  area.scrollTop = 0; area.scrollLeft = 0;
  if (document.scrollingElement) {
   document.scrollingElement.scrollTop = 0;
   document.scrollingElement.scrollLeft = 0;
  }
 };
 window.fitQuiz = () => {
  const availableWidth = Math.max(1, area.clientWidth);
  const availableHeight = Math.max(1, area.clientHeight);
  // Retain a usable two-column layout even in short or heavily zoomed windows.
  const width = Math.max(720, availableWidth);
  const height = Math.max(500, availableHeight);
  const scale = Math.min(1, availableWidth / width, availableHeight / height);
  workspace.style.width = width + 'px';
  workspace.style.height = height + 'px';
  workspace.style.transform = `scale(${scale})`;
  workspace.style.visibility = 'visible';
  window.quizDisplay = {
   screenWidth: window.screen.width,
   screenHeight: window.screen.height,
   scaling: window.devicePixelRatio || 1,
   viewportWidth: availableWidth,
   viewportHeight: availableHeight,
   fitScale: scale
  };
  keepVisible();
 };
 area.addEventListener('scroll', keepVisible, {passive: true});
 workspace.addEventListener('focusin', () => window.requestAnimationFrame(keepVisible));
 const refit = () => { window.fitQuiz(); scheduleFit(); };
 window.addEventListener('resize', refit);
 if (window.visualViewport) window.visualViewport.addEventListener('resize', refit);
 if (document.fonts) document.fonts.ready.then(refit);
 new ResizeObserver(refit).observe(area);
 refit();
})();
