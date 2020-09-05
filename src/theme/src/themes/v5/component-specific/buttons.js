import { defaultControlStyles } from '../shared'

const buttons = {
  // TODO flatten these in tokens?
  default: {
    default: {
      background: defaultControlStyles.base.backgroundImage,
      boxShadow: defaultControlStyles.base.boxShadow
    },
    disabled: {
      background: defaultControlStyles.disabled.backgroundColor,
      boxShadow: 'none',
      color: defaultControlStyles.disabled.color
    },
    hover: {
      background: defaultControlStyles.hover.backgroundImage
    },
    focus: {
      boxShadow: defaultControlStyles.focus.boxShadow
    },
    active: {
      background: defaultControlStyles.active.backgroundColor,
      boxShadow: defaultControlStyles.active.boxShadow
    },
    focusAndActive: {
      boxShadow: defaultControlStyles.focusAndActive.boxShadow
    }
  }
}

export default buttons
