const FLAG_BASE_URL = 'https://fusion.ironsrc.net/assets/flags/v4/';
const ICONS_BASE_URL = 'https://fusion.ironsrc.net/assets/icons/';

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
  min-width: var(--chart-tooltip-min-width, 120px);
  max-width: var(--chart-tooltip-max-width);
  background:white;
  opacity:1;
  pointer-events:none;
  position:absolute;
  padding: 8px;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.12);
  border: 1px solid #e4e4e4;
  border-radius: 6px;
  transform: translate(-50%, 0);
  transition: all .1s ease;
`;

const WRAPPER_STYLE = `
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px
`;

const HEADER_ROW_STYLE = `
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    overflow: hidden;
    color: var(--text-primary, #202020);
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const BODY_ROWS_WRAPPER = `
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const BODY_ROW_STYLE = `
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.039px;
`;

const ROUND_INDICATOR_ELEMENT_STYLE = `
    height:12px;
    width:12px;
    display:block;
    border-radius:2px
`;

const BODY_ROW_ICON_STYLE = `
width: 16px;
height: 16px;
background-color: var(--action-active, #808080);
`;
const TITLE_ROW_ICON_STYLE = `
width: 16px;
height: 16px;
background-color: var(--action-active, #808080);
`;
const BODY_ROW_LABEL_STYLE = `
    display: block;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary, #646464);
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 4px;
`;

const BODY_ROW_VALUE_STYLE = `
margin-left: auto;
color: var(--text-secondary, #646464);
`;

const FOOTER_ROW_STYLE = `
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    color: var(--text-primary, #202020);
    display: flex;
    gap: 4px;
`;

function getOrCreateTooltip(chart) {
    let tooltipEl = chart.canvas.parentNode.querySelector('div');

    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.className = 'fu-chart-tooltip';
        tooltipEl.style.cssText = TOOLTIP_ELEMENT_STYLE;

        const table = document.createElement('div');
        table.style.cssText = WRAPPER_STYLE;
        table.classList.add('fu-chart-tooltip-wrapper');

        tooltipEl.appendChild(table);
        chart.canvas.parentNode.appendChild(tooltipEl);
    }

    return tooltipEl;
}

function generateTooltipHeaderElement(title) {
    const headerRowEl = document.createElement('div');
    headerRowEl.style.cssText = HEADER_ROW_STYLE;
    const countryCode = COUNTRIES[title];
    if (countryCode) {
        const flagImage = document.createElement('img');
        flagImage.style.width = '16px';
        flagImage.style.height = '16px';
        flagImage.style.borderRadius = '50%';
        flagImage.src = FLAG_BASE_URL + countryCode + '.svg';
        headerRowEl.appendChild(flagImage);
    } else if (title.includes(',(')) {
        const tileSplit = title.split(',(');
        title = tileSplit[0];
        const icon = tileSplit[1].replace(')', '');
        if (!!icon) {
            const iconImg = document.createElement('div');
            iconImg.style.cssText = TITLE_ROW_ICON_STYLE;
            iconImg.style.mask = `url(${ICONS_BASE_URL + 'v4/branded/' + icon.toLowerCase() + '.svg'}) no-repeat center`;
            headerRowEl.appendChild(iconImg);
        }
    }
    const text = document.createTextNode(title);
    headerRowEl.appendChild(text);
    return headerRowEl;
}

function generateTooltipFooterElement(footer) {
    const parsedBody = splitLastOccurrence(footer, ':');
    const label = parsedBody[0];
    const val = parsedBody[1];

    const footerRow = document.createElement('div');
    footerRow.style.cssText = FOOTER_ROW_STYLE;
    footerRow.innerHTML = `<div>${label}</div><div style="margin-left: auto">${val}</div>`;
    return footerRow;
}

function generateTooltipBodyRow({tooltip, i, body}) {
    const bodyRow = document.createElement('div');
    bodyRow.style.cssText = BODY_ROW_STYLE;
    const colors = tooltip.labelColors[i];
    const colorDiv = document.createElement('div');
    colorDiv.style.cssText = `
    background:${colors.backgroundColor};
    border-color:${colors.borderColor};
    ${ROUND_INDICATOR_ELEMENT_STYLE}
  `;

    const parsedBody = splitLastOccurrence(body[0], ':');
    const label = parsedBody[0];
    const val = parsedBody[1];

    const labelDiv = document.createElement('div');
    labelDiv.style.cssText = BODY_ROW_LABEL_STYLE;
    labelDiv.innerText = label;

    const valueDiv = document.createElement('div');
    valueDiv.style.cssText = BODY_ROW_VALUE_STYLE;
    valueDiv.innerText = val;

    bodyRow.appendChild(colorDiv);

    const icon = tooltip.dataPoints.map(d => d.dataset.icon ?? null).filter(Boolean)[i];
    if (!!icon) {
        const iconImg = document.createElement('div');
        iconImg.style.cssText = BODY_ROW_ICON_STYLE;
        iconImg.style.mask = `url(${ICONS_BASE_URL + icon + '.svg'}) no-repeat center`;
        bodyRow.appendChild(iconImg);
    }

    bodyRow.appendChild(labelDiv);
    bodyRow.appendChild(valueDiv);
    return bodyRow;
}

export function externalV4TooltipHandler(context) {
    const {chart, tooltip} = context;
    const tooltipEl = getOrCreateTooltip(chart);
    const bodySortReverse = chart?.config?._config?.options?.plugins?.tooltip?.sortReverse ?? false;

    if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
    }

    if (tooltip.body) {
        const titleLines = tooltip.title || [];
        const bodyLines = tooltip.body.map(b => b.lines);
        const footerLine = tooltip.footer || [];

        const tooltipHead = document.createElement('div');
        tooltipHead.style.cssText = HEADER_ROW_STYLE;
        const tooltipBody = document.createElement('div');
        tooltipBody.style.cssText = BODY_ROWS_WRAPPER;
        const tooltipRoot = tooltipEl.querySelector('div.fu-chart-tooltip-wrapper');
        titleLines.forEach((title: string | HTMLElement) => {
            if (typeof title !== 'string' && title.tagName === 'IMG') {
                tooltipHead.appendChild(title);
            } else {
                const tr = generateTooltipHeaderElement(title);
                tooltipHead.appendChild(tr);
            }
        });
        bodyLines.forEach((body, i) => {
            if (bodyLines.length > 1 && bodySortReverse) {
                tooltipBody.prepend(generateTooltipBodyRow({tooltip, i, body}));
            } else {
                tooltipBody.appendChild(generateTooltipBodyRow({tooltip, i, body}));
            }
        });

        while (tooltipRoot.firstChild) {
            tooltipRoot.firstChild.remove();
        }

        if (tooltipHead.textContent.trim().length) {
            tooltipRoot.appendChild(tooltipHead);
        }
        tooltipRoot.appendChild(tooltipBody);

        if (footerLine?.length && bodyLines?.length > 1) {
            tooltipRoot.appendChild(generateTooltipFooterElement(footerLine[0]));
        }
    }

    const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;
    const maxBottomPoint = chart.canvas.clientHeight + 90;
    const tooltipYPosition = tooltip.caretY + tooltipEl.clientHeight;

    const yPositionAdjustment = maxBottomPoint < tooltipYPosition ? -15 : 0;

    const chartRect = chart.canvas.getBoundingClientRect();
    const tooltipOffset = positionX + 30 + tooltip.width / 2;
    const isOnTheRight =
        chart.width - (tooltip.caretX + tooltipOffset) < tooltip.width / 2 &&
        chartRect.left > tooltip.width / 2 &&
        chart.config?._config?.type !== 'doughnut';
    const tooltipLeft = tooltip.caretX + (positionX + 30 + tooltip.width / 2) * (isOnTheRight ? -1 : 1);

    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = tooltipLeft + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + yPositionAdjustment + 'px';
}

function splitLastOccurrence(str, substring) {
    const lastIndex = str.lastIndexOf(substring);
    const before = str.slice(0, lastIndex);
    const after = str.slice(lastIndex + 1);

    return [before, after];
}
