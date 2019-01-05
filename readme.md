Battling Page
=============
Demo for a Battling Page Design made in Vuejs. Best viewed on mobile devices.


### Commands and Set up
- Install dependencies `npm install`
- Run development server `npm run serve`
- Build templates for production `npm run build` and serve `dist/` folder over an HTTP server.


### Resources
1. Icons from https://iconfont.cn
1. Images from https://unsplash.com
1. Swiping Mechanics based on [Touch swipe detection in pure JavaScript by Gan Mahmud](https://codepen.io/ganmahmud/pen/RaoKZa)


### Notes
1. In the browsing page, every odd listed tournament leads to the `/open/` page. Every even leads to `/battling/` page.
1. Follow buttons, upvote and downvote buttons, +1 buttons change values when tapped/clicked.
1. View Matches button opens the Match Overlay.
1. In the Match Overlay:
    - Swipe up to vote the bottom entry
    - Swipe down to vote the top entry
    - Swipe left to see the next match
    - Swipe right to see the previous match

### Possible Improvements in the Future
- Allow match swipe mechanics to work on desktop with mouse drag.
