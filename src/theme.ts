import { createTheme, ThemeOptions } from '@mui/material/styles';
import { tokens } from './tokens';
import { radioStyles } from './components/Radio.styles';

const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 520,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: tokens.colors.primary,
      contrastText: tokens.colors.white,
    },
    warning: {
      main: tokens.colors.warning,
      contrastText: tokens.colors.black,
    },
    text: {
      primary: tokens.colors.textPrimary,
      secondary: tokens.colors.textSecondary,
    },
    background: {
      default: tokens.colors.background,
      paper: tokens.colors.white,
    },
    divider: tokens.colors.divider,
    grey: tokens.colors.grey,
  },
  typography: {
    fontFamily: tokens.typography.fontFamily,
    h1: {
      fontSize: '32px',
      fontWeight: 600,
      lineHeight: 1.2,
      color: tokens.colors.textPrimary,
    },
    h2: {
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: 1.3,
      color: tokens.colors.textPrimary,
    },
    h3: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: 1.4,
      color: tokens.colors.textPrimary,
    },
    h6: {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: 1.4,
      color: tokens.colors.textPrimary,
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.5,
      color: tokens.colors.textPrimary,
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.5,
      color: tokens.colors.textSecondary,
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: 1.5,
      color: tokens.colors.textPrimary,
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 1.5,
      color: tokens.colors.textPrimary,
    },
    caption: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1.4,
      color: tokens.colors.textSecondary,
    },
  },
  shape: {
    borderRadius: tokens.radius.small,
  },
  shadows: [
    'none',
    tokens.shadows.soft,
    tokens.shadows.card,
    '0 4px 12px rgba(0, 0, 0, 0.08)',
    '0 6px 16px rgba(0, 0, 0, 0.1)',
    '0 8px 24px rgba(0, 0, 0, 0.12)',
    '0 12px 32px rgba(0, 0, 0, 0.14)',
    '0 16px 40px rgba(0, 0, 0, 0.16)',
    '0 20px 48px rgba(0, 0, 0, 0.18)',
    '0 24px 56px rgba(0, 0, 0, 0.2)',
    '0 28px 64px rgba(0, 0, 0, 0.22)',
    '0 32px 72px rgba(0, 0, 0, 0.24)',
    '0 36px 80px rgba(0, 0, 0, 0.26)',
    '0 40px 88px rgba(0, 0, 0, 0.28)',
    '0 44px 96px rgba(0, 0, 0, 0.3)',
    '0 48px 104px rgba(0, 0, 0, 0.32)',
    '0 52px 112px rgba(0, 0, 0, 0.34)',
    '0 56px 120px rgba(0, 0, 0, 0.36)',
    '0 60px 128px rgba(0, 0, 0, 0.38)',
    '0 64px 136px rgba(0, 0, 0, 0.4)',
    '0 68px 144px rgba(0, 0, 0, 0.42)',
    '0 72px 152px rgba(0, 0, 0, 0.44)',
    '0 76px 160px rgba(0, 0, 0, 0.46)',
    '0 80px 168px rgba(0, 0, 0, 0.48)',
    '0 84px 176px rgba(0, 0, 0, 0.5)',
  ],
  spacing: tokens.spacing.unit,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radius.pill,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 16px',
          minHeight: '40px',
          fontSize: '14px',
          lineHeight: 1.5,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
          '&.Mui-selected': {
            backgroundColor: tokens.colors.black,
            color: tokens.colors.white,
            '&:hover': {
              backgroundColor: tokens.colors.black,
            },
          },
        },
        outlined: {
          borderColor: tokens.colors.divider,
          color: tokens.colors.textPrimary,
          '&:hover': {
            borderColor: tokens.colors.divider,
            backgroundColor: tokens.colors.background,
          },
        },
        text: {
          color: tokens.colors.textPrimary,
          '&:hover': {
            backgroundColor: tokens.colors.background,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radius.card,
          boxShadow: tokens.shadows.card,
          backgroundColor: tokens.colors.white,
        },
        elevation0: {
          boxShadow: 'none',
        },
        elevation1: {
          boxShadow: tokens.shadows.card,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radius.card,
          boxShadow: tokens.shadows.card,
          backgroundColor: tokens.colors.white,
          padding: '16px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: tokens.radius.small,
            backgroundColor: tokens.colors.white,
            '& fieldset': {
              borderColor: tokens.colors.divider,
              borderWidth: '1px',
            },
            '&:hover fieldset': {
              borderColor: tokens.colors.divider,
            },
            '&.Mui-focused fieldset': {
              borderColor: tokens.colors.primary,
              borderWidth: '2px',
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radius.small,
          backgroundColor: tokens.colors.white,
          '& fieldset': {
            borderColor: tokens.colors.divider,
            borderWidth: '1px',
          },
          '&:hover fieldset': {
            borderColor: tokens.colors.divider,
          },
          '&.Mui-focused fieldset': {
            borderColor: tokens.colors.primary,
            borderWidth: '2px',
          },
        },
        input: {
          padding: '16px',
          fontSize: '16px',
          color: tokens.colors.textPrimary,
        },
      },
    },
    MuiRadio: radioStyles,
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: '8px',
          borderRadius: tokens.radius.border,
          backgroundColor: tokens.colors.black,
          borderColor: tokens.colors.warning,
          border: '4px solid',
          color: tokens.colors.warning,
          '&:hover': {
            backgroundColor: tokens.colors.black,
          },
          '&.Mui-checked': {
            color: tokens.colors.warning,
          }
        }
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-h1, &.MuiTypography-h2, &.MuiTypography-h3': {
            color: tokens.colors.textPrimary,
          },
          '&.MuiTypography-body2, &.MuiTypography-caption': {
            color: tokens.colors.textSecondary,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '8px',
          color: tokens.colors.textPrimary,
          '&:hover': {
            backgroundColor: tokens.colors.background,
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radius.pill,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 16px',
          minHeight: '42px',
          fontSize: '14px',
          lineHeight: 1.5,
          border: 'none',
          color: tokens.colors.textPrimary,
          backgroundColor: tokens.colors.white,
          '&:hover': {
            backgroundColor: tokens.colors.background,
          },
          '&.Mui-selected': {
            backgroundColor: tokens.colors.black,
            color: tokens.colors.white,
            '&:hover': {
              backgroundColor: tokens.colors.black,
            },
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          display: 'flex',
          gap: 12,
          '& .MuiToggleButton-root': {
            height: 42,
            borderRadius: tokens.radius.button,
            border: '1px solid',
            borderColor: tokens.colors.divider,
            backgroundColor: tokens.colors.white,
            '&.Mui-selected': {
              backgroundColor: tokens.colors.black,
              color: tokens.colors.white,
              borderColor: tokens.colors.black,
            },
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          margin: 0,
        },
        positionStart: {
          marginRight: 16,
        },
        positionEnd: {
          marginLeft: 0,
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);

