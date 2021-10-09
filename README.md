# UTEx Toolkit v2

http://utex-toolkit.cf

Copyright © UTEx LMS. COST - HCMUTE. All rights reserved.

# Build & Serve to Github Pages

Thanks to Daniel [(Guide)](https://www.smashingmagazine.com/2016/08/sghpa-single-page-app-hack-github-pages)

## Dev. Build Notes

- Create 404.html in `src` folder
- Add its name to `angular.json`, path: <pj-name>.architect.build.options.assets
- Edit `<base href=...>` in `index.html`
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.14.
- Add this style to UTEX/FHQX custom stylesheet

```
.k-container {
  position: relative; overflow: hidden; width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */ }

.k-responsive-iframe {
  position: absolute; top: 0; left: 0; bottom: 0; right: 0;
  width: 100%; height: 100%; }
```
