import { majorScale, minorScale } from '../../../scales'
import { controlStyles } from '../shared'

export default function getButtonStyles(theme) {
  const { tokens } = theme
  const disabled = controlStyles._disabled

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
        background: tokens.buttonPrimaryColor,
        borderColor: tokens.buttonPrimaryBorderColor,
        color: 'white',

        _disabled: {
          ...disabled,
          background: tokens.buttonPrimaryDisabledColor,
          borderColor: tokens.buttonPrimaryDisabledBorderColor
        },

        _hover: {
          background: tokens.buttonPrimaryHoverBackground
        },

        _focus: {
          background: tokens.buttonPrimaryFocusColor,
          boxShadow: `0 0 0 2px ${tokens.colors.blue100}`
        },

        _active: {
          background: tokens.buttonPrimaryActiveColor
        }
      },
      default: {
        background: 'white',
        border: `1px solid ${tokens.colors.gray500}`,
        color: tokens.colors.gray800,

        _disabled: {
          ...disabled,
          color: tokens.colors.gray500,
          borderColor: tokens.colors.gray300
        },

        _hover: {
          borderColor: tokens.colors.gray600,
          background: tokens.colors.gray50
        },

        _focus: {
          boxShadow: `0 0 0 2px ${tokens.colors.blue100}`
        },

        _active: {
          background: tokens.colors.gray100
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
      },
      ...theme.buttons.appearances
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
