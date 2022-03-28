/*
 * Created on 2020.4.7 By Andy Kononenko (andyk@ironsrc.com)
 */

/* eslint-disable max-len */
export const BASE_CHECKED_IMAGE = {
    style_v1: {
        checked: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15">
    <defs>
        <rect id="a" width="15" height="15" rx="2"/>
    </defs>
    <g fill="none" fill-rule="evenodd">
        <use fill="{backgroundColor}" xlink:href="#a"/>
        <path fill="#FFF"
              d="M12.395 5.852l-4.47 4.47-.84.84a.57.57 0 0 1-.42.172.57.57 0 0 1-.418-.173l-.84-.84-2.234-2.233A.57.57 0 0 1 3 7.667c0-.165.058-.305.173-.42l.84-.84a.57.57 0 0 1 .42-.172c.164 0 .304.057.42.172L6.666 8.23l4.05-4.056a.57.57 0 0 1 .42-.173.58.58 0 0 1 .42.174l.84.84a.57.57 0 0 1 .17.42.57.57 0 0 1-.172.42z"/>
    </g>
</svg>`,
        indeterminate: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
    <g fill="none" fill-rule="evenodd">
        <rect width="14" height="14" x=".5" y=".5" stroke="#3091F6" rx="2"/>
        <path fill="{backgroundColor}" d="M4 6h7v3H4z"/>
    </g>
</svg>
`
    },
    style_v2: {
        checked: `<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <path d="M6.283 9.882l4.6-4.626a.404.404 0 000-.57l-.566-.568a.398.398 0 00-.566 0L6 7.89 4.249 6.129a.398.398 0 00-.566 0l-.566.57a.404.404 0 000 .568l2.6 2.615c.156.157.41.157.566 0z" id="a"/>
  </defs>
  <g fill="none" fill-rule="evenodd">
    <rect fill="{backgroundColor}" width="14" height="14" rx="3"/>
    <use fill="#FFF" xlink:href="#a"/>
  </g>
</svg>`,
        indeterminate: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
    <g fill="none" fill-rule="evenodd" transform="translate(-1 -1)">
        <rect width="14" height="14" x="1" y="1" fill="{backgroundColor}" rx="3"></rect>
        <path fill="#FFF" d="M5 7h6v2H5z"></path>
    </g>
</svg>`
    }
};
