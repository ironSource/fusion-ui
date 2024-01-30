import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {FormControl} from '@angular/forms';
import {ChipFilterComponentConfigurations} from '@ironsource/fusion-ui/components/chip-filter/common/base';

export const STATUS_OPTIONS: DropdownOption[] = [
    {id: 'active', displayText: 'Active'},
    {id: 'inactive', displayText: 'Inactive'},
    {id: 'pending', displayText: 'Pending approval'},
    {id: 'archive', displayText: 'Archive'}
];

export const PLATFORM_OPTIONS: DropdownOption[] = [
    {id: 'android', displayText: 'Android'},
    {id: 'ios', displayText: 'iOS'}
];

export const AD_FORMAT_OPTIONS: DropdownOption[] = [
    {id: '1', displayText: 'Banner Ad'},
    {id: '2', displayText: 'Interstitial Ad'},
    {id: '3', displayText: 'Video Ad'},
    {id: '4', displayText: 'Native Ad'},
    {id: '5', displayText: 'Pop-up Ad'},
    {id: '6', displayText: 'Overlay Ad'},
    {id: '7', displayText: 'In-App Ad'},
    {id: '8', displayText: 'Social Media Ad'},
    {id: '9', displayText: 'Search Ad'},
    {id: '10', displayText: 'Email Ad'}
];

export const AD_TYPE_OPTIONS: DropdownOption[] = [
    {id: 'v', displayText: 'Video'},
    {id: 'p', displayText: 'Playable'},
    {id: 'i', displayText: 'Image'}
];

export const CATEGORY_OPTIONS = [
    {id: '1', displayText: 'Action'},
    {id: '2', displayText: 'Adventure'},
    {id: '3', displayText: 'Arcade'},
    {id: '4', displayText: 'Art & Design'},
    {id: '5', displayText: 'Beauty'}
];

export const DATERANGE_OPTIONS = [
    {id: '1', displayText: 'Last day vs. previous day'},
    {id: '2', displayText: 'Last 7 days vs. previous 7 days'},
    {id: '3', displayText: 'Last 30 days vs. previous 30 days'}
];

export const MOCK_USERS: DropdownOption[] = [
    {id: 1, displayText: 'Mario Speedwagon'},
    {id: 2, displayText: 'Petey Cruiser'},
    {id: 3, displayText: 'Anna Sthesia'},
    {id: 4, displayText: 'Paul Molive'},
    {id: 5, displayText: 'Anna Mull'},
    {id: 6, displayText: 'Gail Forcewind'},
    {id: 7, displayText: 'Paige Turner'},
    {id: 8, displayText: 'Bob Frapples'},
    {id: 9, displayText: 'Walter Melon'},
    {id: 10, displayText: 'Nick R. Bocker'},
    {id: 11, displayText: 'Barb Ackue'},
    {id: 12, displayText: 'Buck Kinnear'},
    {id: 13, displayText: 'Greta Life'},
    {id: 14, displayText: 'Ira Membrit'},
    {id: 15, displayText: 'Shonda Leer'},
    {id: 16, displayText: 'Brock Lee'},
    {id: 17, displayText: 'Maya Didas'},
    {id: 18, displayText: 'Rick O`Shea'},
    {id: 19, displayText: 'Pete Sariya'},
    {id: 20, displayText: 'Monty Carlo'}
];

export const MOCK_STATUS: DropdownOption[] = [
    {id: 1, displayText: 'Active'},
    {id: 2, displayText: 'Inactive'}
];

export const MOCK_CAMPAIGNS: DropdownOption[] = [
    {
        id: 8533227,
        displayText: 'COLO_T1_ADR_ALL',
        subText: {text: '8533227'},
        icon: 'ios',
        image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_81da9f477768eca08ad377ed2d8b33c0_transformed_142594.jpeg',
        title: 'Color Match'
    },
    {
        id: 8533223,
        displayText: 'COLO_T1_IOS_ALL',
        subText: {text: '8533223'},
        icon: 'android',
        image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_a8956b1da65da1ee252fcf3fa5d4965b_35559.jpeg',
        title: 'Coloring Match'
    },
    {
        id: 8533153,
        displayText: 'BRID_T1_ADR_All',
        subText: {text: '8533153'},
        icon: 'ios',
        image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_efd72a9df96c1cd8390bfe9572c3401b_transformed_228268.jpeg',
        title: 'Bridge Race'
    },
    {
        id: 8533061,
        displayText: 'MAKE_T1_IOS_ALL (Xpromo)',
        subText: {text: '8533061'},
        icon: 'android',
        image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_d19c29467b269358bd19b096cbc34562_49318.jpeg',
        title: 'Move People'
    },
    {
        id: 8533057,
        displayText: 'MYMI_US_ADR_PLA',
        subText: {text: '8533057'},
        icon: 'ios',
        image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_7c914d206b942e8baa4d045407b4f41d_transformed_330314.jpeg',
        title: 'My Mini Mart'
    },
    {
        id: 8533055,
        displayText: 'MYMI_T1_ADR_PLA',
        subText: {text: '8533055'},
        icon: 'ios',
        image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_7c914d206b942e8baa4d045407b4f41d_transformed_330314.jpeg',
        title: 'My Mini Mart'
    },
    {
        id: 8533045,
        displayText: 'MYMI_US_ADR_VID',
        subText: {text: '8533045'},
        icon: 'ios',
        image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_7c914d206b942e8baa4d045407b4f41d_transformed_330314.jpeg',
        title: 'My Mini Mart'
    },
    {
        id: 8533037,
        displayText: 'MYMI_T1_ADR_VID',
        subText: {text: '8533037'},
        icon: 'ios',
        image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_7c914d206b942e8baa4d045407b4f41d_transformed_330314.jpeg',
        title: 'My Mini Mart'
    },
    {
        id: 8532485,
        displayText: 'BRID_T1_ADR_All (Xpromo)',
        subText: {text: '8532485'},
        icon: 'ios',
        image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_efd72a9df96c1cd8390bfe9572c3401b_transformed_228268.jpeg',
        title: 'Bridge Race'
    },
    {
        id: 8531187,
        displayText: 'BSKT_T1_IOS_ALL',
        subText: {text: '8531187'},
        icon: 'android',
        image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_fffad63f59a2d325c9c9c91f7e67cfcb_61600.jpeg',
        title: 'Basket Battle'
    },
    {
        id: 8530611,
        displayText: 'COLO_T1_IOS_ALL (xpromo)',
        subText: {text: '8530611'},
        icon: 'android',
        image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_a8956b1da65da1ee252fcf3fa5d4965b_35559.jpeg',
        title: 'Coloring Match'
    },
    {
        id: 8527431,
        displayText: 'FIRS_US_ADR_ALL',
        subText: {text: '8527431'},
        icon: 'ios',
        image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_af30863e3c1198d27843924c247ac414_transformed_164458.jpeg',
        title: 'First To Life'
    },
    {
        id: 8527429,
        displayText: 'FIRS_US_IOS_ALL',
        subText: {text: '8527429'},
        icon: 'android',
        image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_3c690deb1961aa1c3698b14d00985aff_50552.jpeg',
        title: 'First To Life'
    },
    {
        id: 8526369,
        displayText: 'BRID_T1_IOS_ALL (Xpromo)',
        subText: {text: '8526369'},
        icon: 'android',
        image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_565bc88a61e6a38aaa34d39b4f87cdcd_55163.jpeg',
        title: 'Bridge Race'
    },
    {
        id: 8526353,
        displayText: 'BRID_US_IOS_ALL (Xpromo)',
        subText: {text: '8526353'},
        icon: 'android',
        image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_565bc88a61e6a38aaa34d39b4f87cdcd_55163.jpeg',
        title: 'Bridge Race'
    },
    {
        id: 8526105,
        displayText: 'BAZO_US_IOS_VID (RV)',
        subText: {text: '8526105'},
        icon: 'android',
        image: 'https://platform.ssacdn.com/demand-creatives/icons/icon_1d37c0a8e03cff1495f47de851225a64_44001.jpeg',
        title: 'Bazooka Boy'
    }
];

export const MOCK_COUNTRIES = [
    {id: 'AD', flag: 'AD', displayText: 'Andorra'},
    {
        id: 'AE',
        flag: 'AE',
        displayText: 'United Arab Emirates'
    },
    {id: 'AF', flag: 'AF', displayText: 'Afghanistan'},
    {
        id: 'AG',
        flag: 'AG',
        displayText: 'Antigua and Barbuda'
    },
    {id: 'AI', flag: 'AI', displayText: 'Anguilla'},
    {
        id: 'AL',
        flag: 'AL',
        displayText: 'Albania'
    },
    {id: 'AM', flag: 'AM', displayText: 'Armenia'},
    {
        id: 'AO',
        flag: 'AO',
        displayText: 'Angola'
    },
    {id: 'AQ', flag: 'AQ', displayText: 'Antarctica'},
    {
        id: 'AR',
        flag: 'AR',
        displayText: 'Argentina'
    },
    {id: 'AS', flag: 'AS', displayText: 'American Samoa'},
    {
        id: 'AT',
        flag: 'AT',
        displayText: 'Austria'
    },
    {id: 'AU', flag: 'AU', displayText: 'Australia'},
    {
        id: 'AW',
        flag: 'AW',
        displayText: 'Aruba'
    },
    {id: 'AX', flag: 'AX', displayText: 'Aland Islands'},
    {
        id: 'AZ',
        flag: 'AZ',
        displayText: 'Azerbaijan'
    },
    {
        id: 'BA',
        flag: 'BA',
        displayText: 'Bosnia and Herzegovina'
    },
    {id: 'BB', flag: 'BB', displayText: 'Barbados'},
    {
        id: 'BD',
        flag: 'BD',
        displayText: 'Bangladesh'
    },
    {id: 'BE', flag: 'BE', displayText: 'Belgium'},
    {
        id: 'BF',
        flag: 'BF',
        displayText: 'Burkina Faso'
    },
    {id: 'BG', flag: 'BG', displayText: 'Bulgaria'},
    {
        id: 'BH',
        flag: 'BH',
        displayText: 'Bahrain'
    },
    {id: 'BI', flag: 'BI', displayText: 'Burundi'},
    {
        id: 'BJ',
        flag: 'BJ',
        displayText: 'Benin'
    },
    {id: 'BL', flag: 'BL', displayText: 'Saint Barthelemy'},
    {
        id: 'BM',
        flag: 'BM',
        displayText: 'Bermuda'
    },
    {id: 'BN', flag: 'BN', displayText: 'Brunei Darussalam'},
    {
        id: 'BO',
        flag: 'BO',
        displayText: 'Bolivia'
    },
    {
        id: 'BQ',
        flag: 'BQ',
        displayText: 'Caribbean Netherlands'
    },
    {id: 'BR', flag: 'BR', displayText: 'Brazil'},
    {
        id: 'BS',
        flag: 'BS',
        displayText: 'Bahamas'
    },
    {id: 'BT', flag: 'BT', displayText: 'Bhutan'},
    {
        id: 'BV',
        flag: 'BV',
        displayText: 'Bouvet Island'
    },
    {id: 'BW', flag: 'BW', displayText: 'Botswana'},
    {
        id: 'BY',
        flag: 'BY',
        displayText: 'Belarus'
    },
    {id: 'BZ', flag: 'BZ', displayText: 'Belize'},
    {
        id: 'CA',
        flag: 'CA',
        displayText: 'Canada'
    },
    {
        id: 'CC',
        flag: 'CC',
        displayText: 'Cocos (Keeling) Islands'
    },
    {
        id: 'CD',
        flag: 'CD',
        displayText: 'Congo, The Democratic Republic of the'
    },
    {
        id: 'CF',
        flag: 'CF',
        displayText: 'Central African Republic'
    },
    {id: 'CG', flag: 'CG', displayText: 'Congo'},
    {
        id: 'CH',
        flag: 'CH',
        displayText: 'Switzerland'
    },
    {id: 'CI', flag: 'CI', displayText: 'Cote D`Ivoire'},
    {
        id: 'CK',
        flag: 'CK',
        displayText: 'Cook Islands'
    },
    {id: 'CL', flag: 'CL', displayText: 'Chile'},
    {
        id: 'CM',
        flag: 'CM',
        displayText: 'Cameroon'
    },
    {id: 'CN', flag: 'CN', displayText: 'China'},
    {
        id: 'CO',
        flag: 'CO',
        displayText: 'Colombia'
    },
    {id: 'CR', flag: 'CR', displayText: 'Costa Rica'},
    {
        id: 'CU',
        flag: 'CU',
        displayText: 'Cuba'
    },
    {id: 'CV', flag: 'CV', displayText: 'Cape Verde'},
    {
        id: 'CW',
        flag: 'CW',
        displayText: 'Curacao'
    },
    {id: 'CX', flag: 'CX', displayText: 'Christmas Island'},
    {
        id: 'CY',
        flag: 'CY',
        displayText: 'Cyprus'
    },
    {id: 'CZ', flag: 'CZ', displayText: 'Czech Republic'},
    {
        id: 'DE',
        flag: 'DE',
        displayText: 'Germany'
    },
    {id: 'DJ', flag: 'DJ', displayText: 'Djibouti'},
    {
        id: 'DK',
        flag: 'DK',
        displayText: 'Denmark'
    },
    {id: 'DM', flag: 'DM', displayText: 'Dominica'},
    {
        id: 'DO',
        flag: 'DO',
        displayText: 'Dominican Republic'
    },
    {id: 'DZ', flag: 'DZ', displayText: 'Algeria'},
    {
        id: 'EC',
        flag: 'EC',
        displayText: 'Ecuador'
    },
    {id: 'EE', flag: 'EE', displayText: 'Estonia'},
    {
        id: 'EG',
        flag: 'EG',
        displayText: 'Egypt'
    },
    {id: 'EH', flag: 'EH', displayText: 'Western Sahara'},
    {
        id: 'ER',
        flag: 'ER',
        displayText: 'Eritrea'
    },
    {id: 'ES', flag: 'ES', displayText: 'Spain'},
    {
        id: 'ET',
        flag: 'ET',
        displayText: 'Ethiopia'
    },
    {id: 'FI', flag: 'FI', displayText: 'Finland'},
    {
        id: 'FJ',
        flag: 'FJ',
        displayText: 'Fiji'
    },
    {
        id: 'FK',
        flag: 'FK',
        displayText: 'Falkland Islands (Malvinas)'
    },
    {
        id: 'FM',
        flag: 'FM',
        displayText: 'Micronesia, Federated States of'
    },
    {id: 'FO', flag: 'FO', displayText: 'Faroe Islands'},
    {
        id: 'FR',
        flag: 'FR',
        displayText: 'France'
    },
    {id: 'GA', flag: 'GA', displayText: 'Gabon'},
    {
        id: 'GB',
        flag: 'GB',
        displayText: 'United Kingdom'
    },
    {id: 'GD', flag: 'GD', displayText: 'Grenada'},
    {
        id: 'GE',
        flag: 'GE',
        displayText: 'Georgia'
    },
    {id: 'GF', flag: 'GF', displayText: 'French Guiana'},
    {
        id: 'GG',
        flag: 'GG',
        displayText: 'Guernsey'
    },
    {id: 'GH', flag: 'GH', displayText: 'Ghana'},
    {
        id: 'GI',
        flag: 'GI',
        displayText: 'Gibraltar'
    },
    {id: 'GL', flag: 'GL', displayText: 'Greenland'},
    {
        id: 'GM',
        flag: 'GM',
        displayText: 'Gambia'
    },
    {id: 'GN', flag: 'GN', displayText: 'Guinea'},
    {
        id: 'GP',
        flag: 'GP',
        displayText: 'Guadeloupe'
    },
    {id: 'GQ', flag: 'GQ', displayText: 'Equatorial Guinea'},
    {
        id: 'GR',
        flag: 'GR',
        displayText: 'Greece'
    },
    {
        id: 'GS',
        flag: 'GS',
        displayText: 'South Georgia and the South Sandwich Islands'
    },
    {id: 'GT', flag: 'GT', displayText: 'Guatemala'},
    {
        id: 'GU',
        flag: 'GU',
        displayText: 'Guam'
    },
    {id: 'GW', flag: 'GW', displayText: 'Guinea-Bissau'},
    {
        id: 'GY',
        flag: 'GY',
        displayText: 'Guyana'
    },
    {id: 'HK', flag: 'HK', displayText: 'Hong Kong'},
    {
        id: 'HM',
        flag: 'HM',
        displayText: 'Heard Island and McDonald Islands'
    },
    {id: 'HN', flag: 'HN', displayText: 'Honduras'},
    {
        id: 'HR',
        flag: 'HR',
        displayText: 'Croatia'
    },
    {id: 'HT', flag: 'HT', displayText: 'Haiti'},
    {
        id: 'HU',
        flag: 'HU',
        displayText: 'Hungary'
    },
    {id: 'ID', flag: 'ID', displayText: 'Indonesia'},
    {
        id: 'IE',
        flag: 'IE',
        displayText: 'Ireland'
    },
    {id: 'IL', flag: 'IL', displayText: 'Israel'},
    {
        id: 'IM',
        flag: 'IM',
        displayText: 'Isle of Man'
    },
    {id: 'IN', flag: 'IN', displayText: 'India'},
    {
        id: 'IO',
        flag: 'IO',
        displayText: 'British Indian Ocean Territory'
    },
    {id: 'IQ', flag: 'IQ', displayText: 'Iraq'},
    {
        id: 'IR',
        flag: 'IR',
        displayText: 'Iran, Islamic Republic of'
    },
    {id: 'IS', flag: 'IS', displayText: 'Iceland'},
    {
        id: 'IT',
        flag: 'IT',
        displayText: 'Italy'
    },
    {id: 'JE', flag: 'JE', displayText: 'Jersey'},
    {
        id: 'JM',
        flag: 'JM',
        displayText: 'Jamaica'
    },
    {id: 'JO', flag: 'JO', displayText: 'Jordan'},
    {
        id: 'JP',
        flag: 'JP',
        displayText: 'Japan'
    },
    {id: 'KE', flag: 'KE', displayText: 'Kenya'},
    {
        id: 'KG',
        flag: 'KG',
        displayText: 'Kyrgyzstan'
    },
    {id: 'KH', flag: 'KH', displayText: 'Cambodia'},
    {
        id: 'KI',
        flag: 'KI',
        displayText: 'Kiribati'
    },
    {id: 'KM', flag: 'KM', displayText: 'Comoros'},
    {
        id: 'KN',
        flag: 'KN',
        displayText: 'Saint Kitts and Nevis'
    },
    {
        id: 'KP',
        flag: 'KP',
        displayText: 'Korea, Democratic People`s Republic of'
    },
    {id: 'KR', flag: 'KR', displayText: 'Korea, Republic of'},
    {
        id: 'KW',
        flag: 'KW',
        displayText: 'Kuwait'
    },
    {id: 'KY', flag: 'KY', displayText: 'Cayman Islands'},
    {
        id: 'KZ',
        flag: 'KZ',
        displayText: 'Kazakhstan'
    },
    {
        id: 'LA',
        flag: 'LA',
        displayText: 'Lao People`s Democratic Republic'
    },
    {id: 'LB', flag: 'LB', displayText: 'Lebanon'},
    {
        id: 'LC',
        flag: 'LC',
        displayText: 'Saint Lucia'
    },
    {id: 'LI', flag: 'LI', displayText: 'Liechtenstein'},
    {
        id: 'LK',
        flag: 'LK',
        displayText: 'Sri Lanka'
    },
    {id: 'LR', flag: 'LR', displayText: 'Liberia'},
    {
        id: 'LS',
        flag: 'LS',
        displayText: 'Lesotho'
    },
    {id: 'LT', flag: 'LT', displayText: 'Lithuania'},
    {
        id: 'LU',
        flag: 'LU',
        displayText: 'Luxembourg'
    },
    {id: 'LV', flag: 'LV', displayText: 'Latvia'},
    {
        id: 'LY',
        flag: 'LY',
        displayText: 'Libya'
    },
    {id: 'MA', flag: 'MA', displayText: 'Morocco'},
    {
        id: 'MC',
        flag: 'MC',
        displayText: 'Monaco'
    },
    {id: 'MD', flag: 'MD', displayText: 'Moldova, Republic of'},
    {
        id: 'ME',
        flag: 'ME',
        displayText: 'Montenegro'
    },
    {id: 'MF', flag: 'MF', displayText: 'Saint Martin'},
    {
        id: 'MG',
        flag: 'MG',
        displayText: 'Madagascar'
    },
    {id: 'MH', flag: 'MH', displayText: 'Marshall Islands'},
    {
        id: 'MK',
        flag: 'MK',
        displayText: 'Macedonia'
    },
    {id: 'ML', flag: 'ML', displayText: 'Mali'},
    {
        id: 'MM',
        flag: 'MM',
        displayText: 'Myanmar'
    },
    {id: 'MN', flag: 'MN', displayText: 'Mongolia'},
    {
        id: 'MO',
        flag: 'MO',
        displayText: 'Macau'
    },
    {
        id: 'MP',
        flag: 'MP',
        displayText: 'Northern Mariana Islands'
    },
    {id: 'MQ', flag: 'MQ', displayText: 'Martinique'},
    {
        id: 'MR',
        flag: 'MR',
        displayText: 'Mauritania'
    },
    {id: 'MS', flag: 'MS', displayText: 'Montserrat'},
    {
        id: 'MT',
        flag: 'MT',
        displayText: 'Malta'
    },
    {id: 'MU', flag: 'MU', displayText: 'Mauritius'},
    {
        id: 'MV',
        flag: 'MV',
        displayText: 'Maldives'
    },
    {id: 'MW', flag: 'MW', displayText: 'Malawi'},
    {
        id: 'MX',
        flag: 'MX',
        displayText: 'Mexico'
    },
    {id: 'MY', flag: 'MY', displayText: 'Malaysia'},
    {
        id: 'MZ',
        flag: 'MZ',
        displayText: 'Mozambique'
    },
    {id: 'NA', flag: 'NA', displayText: 'Namibia'},
    {
        id: 'NC',
        flag: 'NC',
        displayText: 'New Caledonia'
    },
    {id: 'NE', flag: 'NE', displayText: 'Niger'},
    {
        id: 'NF',
        flag: 'NF',
        displayText: 'Norfolk Island'
    },
    {id: 'NG', flag: 'NG', displayText: 'Nigeria'},
    {
        id: 'NI',
        flag: 'NI',
        displayText: 'Nicaragua'
    },
    {id: 'NL', flag: 'NL', displayText: 'Netherlands'},
    {
        id: 'NO',
        flag: 'NO',
        displayText: 'Norway'
    },
    {id: 'NP', flag: 'NP', displayText: 'Nepal'},
    {
        id: 'NR',
        flag: 'NR',
        displayText: 'Nauru'
    },
    {id: 'NU', flag: 'NU', displayText: 'Niue'},
    {
        id: 'NZ',
        flag: 'NZ',
        displayText: 'New Zealand'
    },
    {id: 'OM', flag: 'OM', displayText: 'Oman'},
    {
        id: 'PA',
        flag: 'PA',
        displayText: 'Panama'
    },
    {id: 'PE', flag: 'PE', displayText: 'Peru'},
    {
        id: 'PF',
        flag: 'PF',
        displayText: 'French Polynesia'
    },
    {id: 'PG', flag: 'PG', displayText: 'Papua New Guinea'},
    {
        id: 'PH',
        flag: 'PH',
        displayText: 'Philippines'
    },
    {id: 'PK', flag: 'PK', displayText: 'Pakistan'},
    {
        id: 'PL',
        flag: 'PL',
        displayText: 'Poland'
    },
    {
        id: 'PM',
        flag: 'PM',
        displayText: 'Saint Pierre and Miquelon'
    },
    {id: 'PN', flag: 'PN', displayText: 'Pitcairn'},
    {
        id: 'PR',
        flag: 'PR',
        displayText: 'Puerto Rico'
    },
    {id: 'PS', flag: 'PS', displayText: 'Palestine, State of'},
    {
        id: 'PT',
        flag: 'PT',
        displayText: 'Portugal'
    },
    {id: 'PW', flag: 'PW', displayText: 'Palau'},
    {
        id: 'PY',
        flag: 'PY',
        displayText: 'Paraguay'
    },
    {id: 'QA', flag: 'QA', displayText: 'Qatar'},
    {
        id: 'RE',
        flag: 'RE',
        displayText: 'Reunion'
    },
    {id: 'RO', flag: 'RO', displayText: 'Romania'},
    {
        id: 'RS',
        flag: 'RS',
        displayText: 'Serbia'
    },
    {id: 'RU', flag: 'RU', displayText: 'Russian Federation'},
    {
        id: 'RW',
        flag: 'RW',
        displayText: 'Rwanda'
    },
    {id: 'SA', flag: 'SA', displayText: 'Saudi Arabia'},
    {
        id: 'SB',
        flag: 'SB',
        displayText: 'Solomon Islands'
    },
    {id: 'SC', flag: 'SC', displayText: 'Seychelles'},
    {
        id: 'SD',
        flag: 'SD',
        displayText: 'Sudan'
    },
    {id: 'SE', flag: 'SE', displayText: 'Sweden'},
    {
        id: 'SG',
        flag: 'SG',
        displayText: 'Singapore'
    },
    {id: 'SH', flag: 'SH', displayText: 'Saint Helena'},
    {
        id: 'SI',
        flag: 'SI',
        displayText: 'Slovenia'
    },
    {
        id: 'SJ',
        flag: 'SJ',
        displayText: 'Svalbard and Jan Mayen'
    },
    {id: 'SK', flag: 'SK', displayText: 'Slovakia'},
    {
        id: 'SL',
        flag: 'SL',
        displayText: 'Sierra Leone'
    },
    {id: 'SM', flag: 'SM', displayText: 'San Marino'},
    {
        id: 'SN',
        flag: 'SN',
        displayText: 'Senegal'
    },
    {id: 'SO', flag: 'SO', displayText: 'Somalia'},
    {
        id: 'SR',
        flag: 'SR',
        displayText: 'Suriname'
    },
    {id: 'SS', flag: 'SS', displayText: 'South Sudan'},
    {
        id: 'ST',
        flag: 'ST',
        displayText: 'Sao Tome and Principe'
    },
    {id: 'SV', flag: 'SV', displayText: 'El Salvador'},
    {
        id: 'SX',
        flag: 'SX',
        displayText: 'Sint Maarten'
    },
    {id: 'SY', flag: 'SY', displayText: 'Syrian Arab Republic'},
    {
        id: 'SZ',
        flag: 'SZ',
        displayText: 'Swaziland'
    },
    {
        id: 'TC',
        flag: 'TC',
        displayText: 'Turks and Caicos Islands'
    },
    {id: 'TD', flag: 'TD', displayText: 'Chad'},
    {
        id: 'TF',
        flag: 'TF',
        displayText: 'French Southern Territories'
    },
    {id: 'TG', flag: 'TG', displayText: 'Togo'},
    {
        id: 'TH',
        flag: 'TH',
        displayText: 'Thailand'
    },
    {id: 'TJ', flag: 'TJ', displayText: 'Tajikistan'},
    {
        id: 'TK',
        flag: 'TK',
        displayText: 'Tokelau'
    },
    {id: 'TL', flag: 'TL', displayText: 'East Timor'},
    {
        id: 'TM',
        flag: 'TM',
        displayText: 'Turkmenistan'
    },
    {id: 'TN', flag: 'TN', displayText: 'Tunisia'},
    {
        id: 'TO',
        flag: 'TO',
        displayText: 'Tonga'
    },
    {id: 'TR', flag: 'TR', displayText: 'Turkey'},
    {
        id: 'TT',
        flag: 'TT',
        displayText: 'Trinidad and Tobago'
    },
    {id: 'TV', flag: 'TV', displayText: 'Tuvalu'},
    {
        id: 'TW',
        flag: 'TW',
        displayText: 'Taiwan'
    },
    {
        id: 'TZ',
        flag: 'TZ',
        displayText: 'Tanzania, United Republic of'
    },
    {id: 'UA', flag: 'UA', displayText: 'Ukraine'},
    {
        id: 'UG',
        flag: 'UG',
        displayText: 'Uganda'
    },
    {
        id: 'UM',
        flag: 'UM',
        displayText: 'United States Minor Outlying Islands'
    },
    {id: 'US', flag: 'US', displayText: 'United States'},
    {
        id: 'UY',
        flag: 'UY',
        displayText: 'Uruguay'
    },
    {id: 'UZ', flag: 'UZ', displayText: 'Uzbekistan'},
    {
        id: 'VA',
        flag: 'VA',
        displayText: 'Holy See (Vatican City State)'
    },
    {
        id: 'VC',
        flag: 'VC',
        displayText: 'Saint Vincent and the Grenadines'
    },
    {id: 'VE', flag: 'VE', displayText: 'Venezuela'},
    {
        id: 'VG',
        flag: 'VG',
        displayText: 'Virgin Islands, British'
    },
    {id: 'VI', flag: 'VI', displayText: 'Virgin Islands, U.S.'},
    {
        id: 'VN',
        flag: 'VN',
        displayText: 'Vietnam'
    },
    {id: 'VU', flag: 'VU', displayText: 'Vanuatu'},
    {
        id: 'WF',
        flag: 'WF',
        displayText: 'Wallis and Futuna'
    },
    {id: 'WS', flag: 'WS', displayText: 'Samoa'},
    {
        id: 'XK',
        flag: 'XK',
        displayText: 'Kosovo'
    },
    {id: 'YE', flag: 'YE', displayText: 'Yemen'},
    {
        id: 'YT',
        flag: 'YT',
        displayText: 'Mayotte'
    },
    {id: 'ZA', flag: 'ZA', displayText: 'South Africa'},
    {
        id: 'ZM',
        flag: 'ZM',
        displayText: 'Zambia'
    },
    {id: 'ZW', flag: 'ZW', displayText: 'Zimbabwe'}
];

export const MOCK_DUMMY_OPTIONS = Array.from(Array(10).keys()).map(item => {
    const id = item + 1;
    return {
        id: id,
        displayText: 'Chip filter'
    };
});

export const MOCK_DYNAMIC_FILTERS = [
    {
        fcChip: new FormControl(),
        configChip: {id: 2, mode: 'dynamic', close: true} as ChipFilterComponentConfigurations,
        optionsChip: MOCK_COUNTRIES,
        placeholderChip: 'All',
        optionsTitleChip: 'Country'
    },
    {
        fcChip: new FormControl(),
        configChip: {id: 3, mode: 'dynamic', close: true} as ChipFilterComponentConfigurations,
        optionsChip: MOCK_CAMPAIGNS,
        placeholderChip: 'All',
        optionsTitleChip: 'Campaigns'
    }
];

export const MOCK_DYNAMIC_PRESELECT_FILTERS = [
    {
        fcChip: new FormControl(MOCK_COUNTRIES.slice(2, 5)),
        configChip: {id: 2, mode: 'dynamic', close: true} as ChipFilterComponentConfigurations,
        optionsChip: MOCK_COUNTRIES,
        placeholderChip: 'All',
        optionsTitleChip: 'Country'
    },
    {
        fcChip: new FormControl(),
        configChip: {id: 3, mode: 'dynamic', close: true} as ChipFilterComponentConfigurations,
        optionsChip: MOCK_CAMPAIGNS,
        placeholderChip: 'All',
        optionsTitleChip: 'Campaigns'
    }
];
