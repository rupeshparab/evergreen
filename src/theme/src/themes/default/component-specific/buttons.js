import { tokens } from '../foundational-styles'

const buttons = {
  // TODO flatten these in tokens?
  default: {
    default: {
      background: 'white',
      border: `1px solid ${tokens.colors.gray500}`,
      color: tokens.colors.gray800
    },
    disabled: {
      border: `1px solid ${tokens.colors.gray300}`,
      boxShadow: 'none',
      color: tokens.colors.gray500
    },
    hover: {
      border: `1px solid ${tokens.colors.gray600}`
    },
    focus: {
      boxShadow: `0 0 0 2px ${tokens.colors.blue100}`
    },
    active: {
      background: tokens.colors.gray100
    }
  }
}

export default buttons
