import { Component } from '@angular/core';
declare var $:any;
declare var Instafeed: any;
declare var _gauges: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  feed:any;
  constructor(){
    this.feed = new Instafeed({
      get: 'user',
      userId: 267996551,//94764
      accessToken: '267996551.1677ed0.d5a6a2bb0699495e911466b3d12b9b98',
      target: 'instagram',
      resolution: 'standard_resolution',
      limit: 6,
      after: function() {
        var el = document.getElementById('instagram');
        if (el.classList)
          el.classList.add('show');
        else
          el.className += ' ' + 'show';
      }
    });
  }
  ngAfterViewInit()
  {
    this.feed.run();
    var _gauges = _gauges || [];

    $(document).ready(() => {
      var t   = document.createElement('script');
      t.type  = 'text/javascript';
      t.async = true;
      t.id    = 'gauges-tracker';
      t.setAttribute('data-site-id', '4d5aa2a95ffe1f587b000001');
      t.src = '//secure.gaug.es/track.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(t, s);
    });
  }
}
