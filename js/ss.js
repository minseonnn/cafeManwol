var g_interval;
new fullpage('#fullpage', {
  licenseKey: 'YOUR KEY HERE',
  sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],  
  afterLoad: function (origin, destination, direction) {
    clearInterval(g_interval);
    
    // 1000 milliseconds lapse
    const lapse = 1000;
    
    if(destination.item.querySelectorAll('.fp-slides').length){
      g_interval = setInterval(function () {
        fullpage_api.moveSlideRight();
      }, lapse);
    }
  }
});