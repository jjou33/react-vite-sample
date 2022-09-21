const palette = {
  /* teal */
  teal0: '#F3FFFB',
  teal1: '#C3FAE8',
  teal2: '#96F2D7',
  teal3: '#63E6BE',
  teal4: '#38D9A9',
  teal5: '#20C997',
  teal6: '#12B886',
  teal7: '#OCA678',
  teal8: '#099268',
  teal9: '#087F5B',
  /* gray */
  grayO: '#F8F9FA',
  grayl: '#F1F3F5',
  gray2: '#E9ECEF',
  gray3: '#DEE2E6',
  gray4: '#CED4DA',
  gray5: '#ADB5BD',
  gray6: '#868E96',
  gray7: '#495057',
  gray8: '#212529',

  /* red */
  redO: '#F8F9FA',
  redl: '#F1F3F5',
  red2: '#E9ECEF',
  red3: '#DEE2E6',
  red4: '#CED4DA',
  red5: '#ADB5BD',
  red6: '#868E96',
  red7: '#495057',
  red8: '#212529'
}
const theme = {
  teal: {
    background: palette.teal6,
    color: 'white',
    hoverBackground: palette.teal5
  },
  lightGray: {
    background: palette.gray2,
    color: palette.gray7,
    hoverBackground: palette.grayl
  },
  gray: {
    background: palette.gray6,
    color: 'white',
    hoverBackground: palette.gray5
  },
  darkGray: {
    background: palette.gray8,
    color: 'white',
    hoverBackground: palette.gray6
  },
  transparent: {
    background: 'none',
    color: palette.teal6,
    hoverBackground: palette.teal1
  },
  red: {
    background: palette.red5,
    color: 'white',
    hoverBackground: palette.red4
  }
}
export default theme
