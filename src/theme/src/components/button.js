import { majorScale, minorScale } from '../../../scales'
import { controlStyles } from '../shared'
import { themeGet } from '../theme-get'

export default function getButtonStyles(theme) {
  const { tokens } = theme
  const disabled = controlStyles._disabled
  const get = themeGet.bind(null, theme)

  return {
    baseStyle: {
      WebkitFontSmoothing: 'antialiased',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      verticalAlign: 'middle',
      textDecoration: 'none',
      fontFamily: tokens.fontFamilies.ui,
      border: '1px solid transparent',
      borderRadius: tokens.borderRadius,
      outline: 'none',
      cursor: 'pointer',
      '&::-moz-focus-inner ': {
        border: 0
      }
    },

    appearances: {
      primary: {
        background: tokens.primary.base,
        borderColor: tokens.primary.base,
        color: 'white',

        _disabled: {
          ...disabled,
          background: tokens.primary.disabled,
          borderColor: tokens.primary.disabled
        },

        _hover: {
          background: tokens.primary.hover
        },

        _focus: {
          background: tokens.primary.hover,
          boxShadow: `0 0 0 2px ${tokens.colors.blue100}`
        },

        _active: {
          background: tokens.primary.active
        }
      },
      default: {
        background: get('buttons.default.default.background'),
        border: get('buttons.default.default.border', 'none'),
        color: get('buttons.default.default.color', get('colors.text.default')),
        boxShadow: get('buttons.default.default.boxShadow'),

        _disabled: {
          ...disabled,
          background: get('buttons.default.disabled.background'),
          border: get('buttons.default.disabled.border'),
          boxShadow: get('buttons.default.disabled.boxShadow'),
          color: get('buttons.default.disabled.color')
        },

        _hover: {
          background: get('buttons.default.hover.background'),
          border: get('buttons.default.hover.border'),
          boxShadow: get('buttons.default.hover.boxShadow'),
          color: get('buttons.default.hover.color')
        },

        _focus: {
          background: get('buttons.default.focus.background'),
          border: get('buttons.default.focus.border'),
          boxShadow: get('buttons.default.focus.boxShadow'),
          color: get('buttons.default.focus.color')
        },

        _active: {
          background: get('buttons.default.active.background'),
          border: get('buttons.default.active.border'),
          boxShadow: get('buttons.default.active.boxShadow'),
          color: get('buttons.default.active.color')
        },

        _focusAndActive: {
          background: get('buttons.default.focusAndActive.background'),
          border: get('buttons.default.focusAndActive.border'),
          boxShadow: get('buttons.default.focusAndActive.boxShadow'),
          color: get('buttons.default.focusAndActive.color')
        }
      },
      destructive: {
        background: tokens.colors.red500,
        borderColor: tokens.colors.red500,
        color: 'white',

        _disabled: {
          ...disabled,
          background: tokens.colors.red100,
          borderColor: tokens.colors.red100
        },

        _hover: {
          background: tokens.colors.red600
        },

        _focus: {
          background: tokens.colors.red600,
          boxShadow: `0 0 0 2px ${tokens.colors.red100}`
        },

        _active: {
          background: tokens.colors.red700
        }
      },
      minimal: {
        background: 'transparent',
        color: tokens.colors.gray800,

        _focus: {
          boxShadow: `0 0 0 2px ${tokens.colors.blue100}`
        },

        _disabled: {
          ...disabled,
          color: tokens.colors.gray500,
          borderColor: tokens.colors.gray300
        },

        _hover: {
          background: tokens.colors.gray100
        },

        _active: {
          background: tokens.colors.gray200
        }
      }
    },

    sizes: {
      small: {
        ...tokens.text[300],
        height: 24,
        minWidth: 24,
        lineHeight: '24px',
        paddingLeft: minorScale(3),
        paddingRight: minorScale(3)
      },
      medium: {
        ...tokens.text[300],
        height: 32,
        minWidth: 32,
        lineHeight: '32px',
        paddingLeft: majorScale(2),
        paddingRight: majorScale(2)
      },
      large: {
        ...tokens.text[400],
        height: 40,
        minWidth: 40,
        lineHeight: '40px',
        paddingLeft: minorScale(5),
        paddingRight: minorScale(5)
      }
    }
  }
}
