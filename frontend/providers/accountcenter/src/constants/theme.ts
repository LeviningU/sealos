import { extendTheme } from '@chakra-ui/react';
import { theme as SealosTheme } from '@sealos/ui';
import { cardAnatomy, checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  checkboxAnatomy.keys
);
const { defineMultiStyleConfig: defineCardMultiStyleConfig } = createMultiStyleConfigHelpers(
  cardAnatomy.keys
);
const checkbox = defineMultiStyleConfig({
  baseStyle: {
    control: {
      borderWidth: '1px',
      borderRadius: '4px',
      _checked: {
        bg: '#F0FBFF',
        borderColor: '#219BF4',
        boxShadow: ' 0px 0px 0px 2.4px rgba(33, 155, 244, 0.15)',
        _hover: {
          bg: '#F0FBFF',
          borderColor: '#219BF4'
        }
      },
      _hover: {
        bg: 'transparent'
      }
    },
    icon: {
      color: '#219BF4'
    }
  }
});

export const theme = extendTheme(SealosTheme, {
  styles: {
    global: {
      'html, body': {
        color: 'grayModern.900',
        fontSize: 'md',
        height: '100%',
        fontWeight: 400
        // overflowY: 'auto',
        // minWidth: '700px'
      }
    }
  },
  components: {
    Checkbox: checkbox,
    Card: defineCardMultiStyleConfig({
      baseStyle: {
        red: {},
        container: {
          borderRadius: '16px',
          boxShadow: '0px 1px 2px 0px #0000000D'
        },
        header: {
          padding: '20px 24px 0',
          fontSize: '18px',
          fontWeight: '600',
          lineHeight: '28px'
        },
        body: {
          padding: '14px 24px 24px'
        }
      }
    })
  }
});
