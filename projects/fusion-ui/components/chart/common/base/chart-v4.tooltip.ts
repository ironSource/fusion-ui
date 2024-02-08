const FLAG_BASE_URL = 'https://fusion.ironsrc.net/assets/flags/v4/';

const COUNTRIES = {
    Afghanistan: 'af',
    'Aland Islands': 'ax',
    Albania: 'al',
    Algeria: 'dz',
    'American Samoa': 'as',
    Andorra: 'ad',
    Angola: 'ao',
    Anguilla: 'ai',
    Antarctica: 'aq',
    'Antigua and Barbuda': 'ag',
    Argentina: 'ar',
    Armenia: 'am',
    Aruba: 'aw',
    Australia: 'au',
    Austria: 'at',
    Azerbaijan: 'az',
    Bahamas: 'bs',
    Bahrain: 'bh',
    Bangladesh: 'bd',
    Barbados: 'bb',
    Belarus: 'by',
    Belgium: 'be',
    Belize: 'bz',
    Benin: 'bj',
    Bermuda: 'bm',
    Bhutan: 'bt',
    Bolivia: 'bo',
    'Bosnia and Herzegovina': 'ba',
    Botswana: 'bw',
    'Bouvet Island': 'bv',
    Brazil: 'br',
    'British Indian Ocean Territory': 'io',
    'Brunei Darussalam': 'bn',
    Bulgaria: 'bg',
    'Burkina Faso': 'bf',
    Burundi: 'bi',
    Cambodia: 'kh',
    Cameroon: 'cm',
    Canada: 'ca',
    'Cape Verde': 'cv',
    'Caribbean Netherlands': 'bq',
    'Cayman Islands': 'ky',
    'Central African Republic': 'cf',
    Chad: 'td',
    Chile: 'cl',
    China: 'cn',
    'Christmas Island': 'cx',
    'Cocos (Keeling) Islands': 'cc',
    Colombia: 'co',
    Comoros: 'km',
    Congo: 'cg',
    'Congo, The Democratic Republic of the': 'cd',
    'Cook Islands': 'ck',
    'Costa Rica': 'cr',
    'Cote D`Ivoire': 'ci',
    Croatia: 'hr',
    Cuba: 'cu',
    Curacao: 'cw',
    Cyprus: 'cy',
    'Czech Republic': 'cz',
    Denmark: 'dk',
    Djibouti: 'dj',
    Dominica: 'dm',
    'Dominican Republic': 'do',
    'East Timor': 'tl',
    Ecuador: 'ec',
    Egypt: 'eg',
    'El Salvador': 'sv',
    'Equatorial Guinea': 'gq',
    Eritrea: 'er',
    Estonia: 'ee',
    Ethiopia: 'et',
    'Falkland Islands (Malvinas)': 'fk',
    'Faroe Islands': 'fo',
    Fiji: 'fj',
    Finland: 'fi',
    France: 'fr',
    'French Guiana': 'gf',
    'French Polynesia': 'pf',
    'French Southern Territories': 'tf',
    Gabon: 'ga',
    Gambia: 'gm',
    Georgia: 'ge',
    Germany: 'de',
    Ghana: 'gh',
    Gibraltar: 'gi',
    Greece: 'gr',
    Greenland: 'gl',
    Grenada: 'gd',
    Guadeloupe: 'gp',
    Guam: 'gu',
    Guatemala: 'gt',
    Guernsey: 'gg',
    Guinea: 'gn',
    'Guinea-Bissau': 'gw',
    Guyana: 'gy',
    Haiti: 'ht',
    'Heard Island and McDonald Islands': 'hm',
    'Holy See (Vatican City State)': 'va',
    Honduras: 'hn',
    'Hong Kong': 'hk',
    Hungary: 'hu',
    Iceland: 'is',
    India: 'in',
    Indonesia: 'id',
    'Iran, Islamic Republic of': 'ir',
    Iraq: 'iq',
    Ireland: 'ie',
    'Isle of Man': 'im',
    Israel: 'il',
    Italy: 'it',
    Jamaica: 'jm',
    Japan: 'jp',
    Jersey: 'je',
    Jordan: 'jo',
    Kazakhstan: 'kz',
    Kenya: 'ke',
    Kiribati: 'ki',
    'Korea, Democratic People`s Republic of': 'kp',
    'Korea, Republic of': 'kr',
    Kosovo: 'xk',
    Kuwait: 'kw',
    Kyrgyzstan: 'kg',
    'Lao People`s Democratic Republic': 'la',
    Latvia: 'lv',
    Lebanon: 'lb',
    Lesotho: 'ls',
    Liberia: 'lr',
    Libya: 'ly',
    Liechtenstein: 'li',
    Lithuania: 'lt',
    Luxembourg: 'lu',
    Macau: 'mo',
    Macedonia: 'mk',
    Madagascar: 'mg',
    Malawi: 'mw',
    Malaysia: 'my',
    Maldives: 'mv',
    Mali: 'ml',
    Malta: 'mt',
    'Marshall Islands': 'mh',
    Martinique: 'mq',
    Mauritania: 'mr',
    Mauritius: 'mu',
    Mayotte: 'yt',
    Mexico: 'mx',
    'Micronesia, Federated States of': 'fm',
    'Moldova, Republic of': 'md',
    Monaco: 'mc',
    Mongolia: 'mn',
    Montenegro: 'me',
    Montserrat: 'ms',
    Morocco: 'ma',
    Mozambique: 'mz',
    Myanmar: 'mm',
    Namibia: 'na',
    Nauru: 'nr',
    Nepal: 'np',
    Netherlands: 'nl',
    'New Caledonia': 'nc',
    'New Zealand': 'nz',
    Nicaragua: 'ni',
    Niger: 'ne',
    Nigeria: 'ng',
    Niue: 'nu',
    'Norfolk Island': 'nf',
    'Northern Mariana Islands': 'mp',
    Norway: 'no',
    Oman: 'om',
    Pakistan: 'pk',
    Palau: 'pw',
    'Palestine, State of': 'ps',
    Panama: 'pa',
    'Papua New Guinea': 'pg',
    Paraguay: 'py',
    Peru: 'pe',
    Philippines: 'ph',
    Pitcairn: 'pn',
    Poland: 'pl',
    Portugal: 'pt',
    'Puerto Rico': 'pr',
    Qatar: 'qa',
    Reunion: 're',
    Romania: 'ro',
    'Russian Federation': 'ru',
    Rwanda: 'rw',
    'Saint Barthelemy': 'bl',
    'Saint Helena': 'sh',
    'Saint Kitts and Nevis': 'kn',
    'Saint Lucia': 'lc',
    'Saint Martin': 'mf',
    'Saint Pierre and Miquelon': 'pm',
    'Saint Vincent and the Grenadines': 'vc',
    Samoa: 'ws',
    'San Marino': 'sm',
    'Sao Tome and Principe': 'st',
    'Saudi Arabia': 'sa',
    Senegal: 'sn',
    Serbia: 'rs',
    Seychelles: 'sc',
    'Sierra Leone': 'sl',
    Singapore: 'sg',
    'Sint Maarten': 'sx',
    Slovakia: 'sk',
    Slovenia: 'si',
    'Solomon Islands': 'sb',
    Somalia: 'so',
    'South Africa': 'za',
    'South Georgia and the South Sandwich Islands': 'gs',
    'South Sudan': 'ss',
    Spain: 'es',
    'Sri Lanka': 'lk',
    Sudan: 'sd',
    Suriname: 'sr',
    'Svalbard and Jan Mayen': 'sj',
    Swaziland: 'sz',
    Sweden: 'se',
    Switzerland: 'ch',
    'Syrian Arab Republic': 'sy',
    Taiwan: 'tw',
    Tajikistan: 'tj',
    'Tanzania, United Republic of': 'tz',
    Thailand: 'th',
    Togo: 'tg',
    Tokelau: 'tk',
    Tonga: 'to',
    'Trinidad and Tobago': 'tt',
    Tunisia: 'tn',
    Turkey: 'tr',
    Turkmenistan: 'tm',
    'Turks and Caicos Islands': 'tc',
    Tuvalu: 'tv',
    Uganda: 'ug',
    Ukraine: 'ua',
    'United Arab Emirates': 'ae',
    'United Kingdom': 'gb',
    'United States Minor Outlying Islands': 'um',
    'United States': 'us',
    Uruguay: 'uy',
    Uzbekistan: 'uz',
    Vanuatu: 'vu',
    Venezuela: 've',
    Vietnam: 'vn',
    'Virgin Islands, British': 'vg',
    'Virgin Islands, U.S.': 'vi',
    'Wallis and Futuna': 'wf',
    'Western Sahara': 'eh',
    Yemen: 'ye',
    Zambia: 'zm',
    Zimbabwe: 'zw'
};

const TOOLTIP_ELEMENT_STYLE = `
  min-width: 120px;
  background:white;
  opacity:1;
  pointer-events:none;
  position:absolute;
  padding: 8px;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.12);
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  transform:translate(-50%, 0);
  transition:all .1s ease;
`;

const TH_ELEMENT_STYLE = `
  display: flex;
  align-items: center;
  gap: 4px;
  border-width:0;
  overflow: hidden;
  color: #202020;
  text-overflow: ellipsis;
  text-align:left;
  line-height: 16px;
  font-size:13px;
  font-weight: 500;
  font-family:Inter;
`;

const ROUND_INDICATOR_ELEMENT_STYLE = `
  height:12px;
  width:12px;
  display:block;
  border-radius:2px
`;

const TR_ELEMENT_STYLE = `
  background-color:inherit;
  border-width:0;
  display:block;
  font-size:13px;
  color:#646464;
  font-weight: 400;
  font-family:Inter;  
  white-space: nowrap;
  height:20px;
`;

function transform(value: number): string {
    if (value < 10) {
        return value.toFixed(2);
    }
    const i = value === 0 ? 0 : Math.floor(Math.log(value) / Math.log(1000));
    const bigPart = value / Math.pow(1000, i);

    return `${bigPart.toFixed(Number.isInteger(bigPart) ? 0 : 1)}${['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'][i]}`.trim();
}

function getOrCreateTooltip(chart) {
    let tooltipEl = chart.canvas.parentNode.querySelector('div');

    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.style.cssText = TOOLTIP_ELEMENT_STYLE;

        const table = document.createElement('table');
        table.style.margin = '0px';

        tooltipEl.appendChild(table);
        chart.canvas.parentNode.appendChild(tooltipEl);
    }

    return tooltipEl;
}

function generateTooltipHeaderElement(title) {
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const countryCode = COUNTRIES[title];

    if (countryCode) {
        const flagImage = document.createElement('img');
        flagImage.style.width = '16px';
        flagImage.style.height = '16px';
        flagImage.style.borderRadius = '50%';
        flagImage.src = FLAG_BASE_URL + countryCode + '.svg';
        th.appendChild(flagImage);
    }

    const text = document.createTextNode(title);

    tr.style.borderWidth = '0';
    th.style.cssText = TH_ELEMENT_STYLE;
    th.colSpan = 2;

    th.appendChild(text);
    tr.appendChild(th);
    return tr;
}

function generateTooltipFooterElement(footer) {
    const parsedBody = footer.split(': ');
    const label = parsedBody[0];
    const val = parsedBody[1];

    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const text = document.createTextNode(footer);

    th.style.cssText = TH_ELEMENT_STYLE;
    th.style.paddingTop = '8px';
    th.colSpan = 2;

    th.innerHTML = `<span>${label}</span><span style="margin-left: auto">${val}</span>`;
    tr.appendChild(th);
    return tr;
}

function round(number: number): number {
    try {
        return Math.round(number * 100) / 100;
    } catch {
        return number;
    }
}

function generateTooltipBodyRow({tooltip, i, bodyLines, body}) {
    const colors = tooltip.labelColors[i];
    const span = document.createElement('span');
    const tr = document.createElement('tr');
    const td = document.createElement('td');

    span.style.cssText = `
    background:${colors.backgroundColor};
    border-color:${colors.borderColor};
    ${ROUND_INDICATOR_ELEMENT_STYLE}
  `;

    tr.style.cssText = TR_ELEMENT_STYLE;
    td.style.borderWidth = '0';

    const parsedBody = body[0].split(': ');
    const label = parsedBody[0];

    const val = parsedBody[1];

    const labelTd = document.createElement('td');
    labelTd.innerText = label;
    labelTd.style.cssText = `
    border-width:0;
    min-width:120px;
    white-space: nowrap;
    height:26px;
  `;

    const valueTd = document.createElement('td');
    valueTd.innerText = val;
    valueTd.style.minWidth = '40px';
    valueTd.style.textAlign = 'right';
    valueTd.style.borderWidth = '0';

    td.appendChild(span);
    tr.appendChild(td);
    tr.appendChild(labelTd);
    tr.appendChild(valueTd);
    return tr;
}

export function externalV4TooltipHandler(context) {
    const {chart, tooltip} = context;
    const tooltipEl = getOrCreateTooltip(chart);

    if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
    }

    if (tooltip.body) {
        const titleLines = tooltip.title || [];
        const bodyLines = tooltip.body.map(b => b.lines);
        const footerLine = tooltip.footer || [];

        const tableHead = document.createElement('thead');
        const tableBody = document.createElement('tbody');
        const tableRoot = tooltipEl.querySelector('table');

        titleLines.forEach(title => {
            const tr = generateTooltipHeaderElement(title);
            tableHead.appendChild(tr);
        });

        bodyLines.forEach((body, i) => {
            const tr = generateTooltipBodyRow({tooltip, i, bodyLines, body});
            tableBody.appendChild(tr);
        });

        while (tableRoot.firstChild) {
            tableRoot.firstChild.remove();
        }
        tableRoot.appendChild(tableHead);
        tableRoot.appendChild(tableBody);

        if (footerLine?.length && bodyLines?.length > 1) {
            const tableFoot = document.createElement('tfoot');
            tableFoot.appendChild(generateTooltipFooterElement(footerLine[0]));
            tableRoot.appendChild(tableFoot);
        }
    }

    const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;

    const maxBottomPoint = chart.canvas.clientHeight + 90;
    const tooltipYPosition = tooltip.caretY + tooltipEl.clientHeight;

    const yPositionAdjustment = maxBottomPoint < tooltipYPosition ? -15 : 0;

    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + yPositionAdjustment + 'px';
    tooltipEl.style.font = tooltip.options.bodyFont.string;
    tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
}
