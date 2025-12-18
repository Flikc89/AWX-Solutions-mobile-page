import React from 'react';
import { Paper, IconButton, Stack, Typography } from '@mui/material';
import { Remove, Add } from '@mui/icons-material';
import { styles } from './AmountInputCard.styles';

interface AmountInputCardProps {
  label: string;
  value: string;
  focused?: boolean;
}

const AmountInputCard: React.FC<AmountInputCardProps> = ({ label, value, focused = false }) => {
  return (
    <Paper
      sx={[
        styles.amountCard,
        focused ? styles.amountCardFocused : styles.amountCardDefault,
      ]}
    >
      <IconButton sx={styles.amountButton}>
        <Remove />
      </IconButton>
      <Stack alignItems="center" spacing={0.5}>
        <Typography variant="caption" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="h6" sx={styles.amountValue}>
          {value}
        </Typography>
      </Stack>
      <IconButton sx={styles.amountButton}>
        <Add />
      </IconButton>
    </Paper>
  );
};

export default AmountInputCard;

