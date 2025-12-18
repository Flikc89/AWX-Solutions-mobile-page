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
      height: 110,
      padding: '20px',
      paddingTop: '12px',
    },
  },

  requisiteFieldContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },

  radioLabelSpacing: {
    marginLeft: 3,
  },
};

