export const styles = {
  requisiteField: {
    '& .MuiOutlinedInput-root': {
      height: 80,
      borderRadius: 1.5,
      paddingX: 2,
    },
    '& .MuiOutlinedInput-input': {
      display: 'none',
    },
    '& .MuiInputAdornment-positionEnd': {
      marginLeft: 'auto',
    },
  },

  requisiteFieldWithRadio: {
    '& .MuiOutlinedInput-root': {
      height: { xs: 140, sm: 110 },
      padding: { xs: '12px 16px', sm: '20px' },
      paddingTop: { xs: '12px', sm: '12px' },
    },
  },

  requisiteFieldContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 1, sm: 2 },
    width: '100%',
  },

  radioGroup: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    gap: { xs: 0.5, sm: 0 },
  },

  radioLabelSpacing: {
    marginLeft: { xs: 0, sm: 3 },
  },
};

