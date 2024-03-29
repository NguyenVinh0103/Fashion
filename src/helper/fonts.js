import THEMES from './theme';
import {normalize} from './normalize';

export const fonts = {
  SFProDisplayRegular: 'SFProDisplay-Regular',
  SFProDisplayMedium: 'SFProDisplay-Medium',
  SFProDisplayBold: 'SFProDisplay-Bold',
  SFProDisplaySemiBold: 'SFProDisplay-SemiBold',
  BodoniModa: 'Bodoni-Moda',
  TenorSansRegular: 'TenorSans-Regular',
};

//  FONT SIZE
export const FONT_SIZE_12 = normalize(12);
export const FONT_SIZE_14 = normalize(14);
export const FONT_SIZE_15 = normalize(15);
export const FONT_SIZE_16 = normalize(16);
export const FONT_SIZE_18 = normalize(18);
export const FONT_SIZE_20 = normalize(20);
export const FONT_SIZE_40 = normalize(40);

//  Additional font family

export const FONT_SEMI_BOLD = {
  fontFamily: fonts.SFProDisplaySemiBold,
  color: THEMES.LIGHT.TEXT_COLOR,
};

export const FONT_SEMI_BOLD_12 = {
  ...FONT_SEMI_BOLD,
  fontSize: FONT_SIZE_12,
};

export const FONT_SEMI_BOLD_14 = {
  ...FONT_SEMI_BOLD,
  fontSize: FONT_SIZE_14,
};
export const FONT_SEMI_BOLD_16 = {
  ...FONT_SEMI_BOLD,
  fontSize: FONT_SIZE_16,
};
export const FONT_SEMI_BOLD_18 = {
  ...FONT_SEMI_BOLD,
  fontSize: FONT_SIZE_18,
};
export const FONT_SEMI_BOLD_20 = {
  ...FONT_SEMI_BOLD,
  fontSize: FONT_SIZE_20,
};

export const FONT_SEMI_BOLD_40 = {
  ...FONT_SEMI_BOLD,
  fontSize: FONT_SIZE_40,
};

//  Font Regular Style
export const FONT_REGULAR = {
  fontFamily: fonts.SFProDisplayRegular,
  color: THEMES.LIGHT.TEXT_COLOR,
};

export const FONT_REGULAR_12 = {
  ...FONT_REGULAR,
  fontSize: FONT_SIZE_12,
};

export const FONT_REGULAR_14 = {
  ...FONT_REGULAR,
  fontSize: FONT_SIZE_14,
};

export const FONT_REGULAR_15 = {
  ...FONT_REGULAR,
  fontSize: FONT_SIZE_15,
};

export const FONT_REGULAR_16 = {
  ...FONT_REGULAR,
  fontSize: FONT_SIZE_16,
};

export const FONT_REGULAR_18 = {
  ...FONT_REGULAR,
  fontSize: FONT_SIZE_18,
};

export const FONT_REGULAR_20 = {
  ...FONT_REGULAR,
  fontSize: FONT_SIZE_20,
};

export const FONT_REGULAR_40 = {
  ...FONT_REGULAR,
  fontSize: FONT_SIZE_40,
};

//  Font Medium Style
export const FONT_MEDIUM = {
  fontFamily: fonts.SFProDisplayMedium,
  color: THEMES.LIGHT.TEXT_COLOR,
};

export const FONT_MEDIUM_12 = {
  ...FONT_MEDIUM,
  fontSize: FONT_SIZE_12,
};

export const FONT_MEDIUM_14 = {
  ...FONT_MEDIUM,
  fontSize: FONT_SIZE_14,
};

export const FONT_MEDIUM_15 = {
  ...FONT_MEDIUM,
  fontSize: FONT_SIZE_15,
};

export const FONT_MEDIUM_16 = {
  ...FONT_MEDIUM,
  fontSize: FONT_SIZE_16,
};

export const FONT_MEDIUM_18 = {
  ...FONT_MEDIUM,
  fontSize: FONT_SIZE_18,
};

export const FONT_MEDIUM_20 = {
  ...FONT_MEDIUM,
  fontSize: FONT_SIZE_20,
};

export const FONT_MEDIUM_40 = {
  ...FONT_MEDIUM,
  fontSize: FONT_SIZE_40,
};

//  Font Bold Style
export const FONT_BOLD = {
  fontFamily: fonts.SFProDisplayBold,
  color: THEMES.LIGHT.TEXT_COLOR,
};

export const FONT_BOLD_12 = {
  ...FONT_BOLD,
  fontSize: FONT_SIZE_12,
};

export const FONT_BOLD_14 = {
  ...FONT_BOLD,
  fontSize: FONT_BOLD_14,
};

export const FONT_BOLD_16 = {
  ...FONT_BOLD,
  fontSize: FONT_SIZE_16,
};

export const FONT_BOLD_18 = {
  ...FONT_BOLD,
  fontSize: FONT_SIZE_18,
};

export const FONT_BOLD_20 = {
  ...FONT_BOLD,
  fontSize: FONT_SIZE_20,
};

export const FONT_BOLD_40 = {
  ...FONT_BOLD,
  fontSize: FONT_SIZE_40,
};
export const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
};
