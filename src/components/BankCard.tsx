import React from 'react';
import { Paper, Box, Typography, IconButton } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { styles } from './BankCard.styles';

const BankCard: React.FC = () => {
  return (
    <Paper sx={styles.bankCard}>
      <Box sx={styles.bankAvatar}>
        P
      </Box>
      <Box sx={styles.bankInfo}>
        <Typography variant="subtitle1">
          Альфа-банк cash-in
        </Typography>
        <Typography variant="body2" color="text.secondary">
          1 USDT = 61.55 RUR
        </Typography>
      </Box>
      <IconButton>
        <KeyboardArrowDown />
      </IconButton>
    </Paper>
  );
};

export default BankCard;

