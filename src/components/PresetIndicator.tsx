import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from './PresetIndicator.styles';

interface PresetIndicatorProps {
  label: string;
  filled: boolean;
}

const PresetIndicator: React.FC<PresetIndicatorProps> = ({ label, filled }) => {
  return (
    <Box sx={styles.presetContainer}>
      <Box
        sx={[
          styles.presetIndicator,
          filled ? styles.presetIndicatorFilled : styles.presetIndicatorEmpty,
        ]}
      />
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </Box>
  );
};

export default PresetIndicator;

