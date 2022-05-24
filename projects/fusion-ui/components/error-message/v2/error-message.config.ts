export const ERROR_MESSAGES = {
    required: '{NAME} is a mandatory field',
    min: 'Minimum {INNER-NAME} is {minValue}',
    max: 'Maximum {INNER-NAME} is {maxValue}',
    minlength: '{NAME} min length is {minlength} characters',
    maxlength: '{NAME} max length is {maxlength} characters',
    email: 'Please verify the email is in a valid format',
    decimalMax: 'Maximum number of decimal digits is {decimalMaxValue}',
    noDecimal: '{NAME} should be a whole number',
    url: '{NAME} is invalid - Not a valid url',
    invalidCharacters: `The following characters ( '  "  <  >  ; ) are not allowed`,
    invalidPattern: `Invalid {PATTERN_TYPE}`,
    // --- file uploader
    fileType: 'invalid file type',
    fileExtension: 'Wrong file extension',
    fileSizeMax: 'maximum file size is {SIZE_LIMIT}MB',
    imageSizeNoDetermine: `Can't determine image size`,
    imageResolutionLow: 'minimum dimension is {MIN_RES_LIMIT}px',
    imageResolutionHigh: 'maximum dimension is {MAX_RES_LIMIT}px',
    imageRatioLow: 'Invalid image ratio',
    imageRatioHigh: 'Invalid image ratio',
    videoAspectRatioLow: 'Video ratio is too low',
    videoAspectRatioHigh: 'Video ratio is too high',
    videoDuration: 'maximum video length is {LIMIT} seconds',
    invalidTrackingUrl: 'Tracking URL is invalid',
    invalidImpressionUrl: 'Impression URL is invalid',
    commonUrlRegex: 'Not a valid url'
};

export enum FormControlStatus {
    Valid = 'VALID',
    Invalid = 'INVALID',
    Pending = 'PENDING'
}
