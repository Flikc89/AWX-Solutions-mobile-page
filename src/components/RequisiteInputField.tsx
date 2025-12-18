import React from 'react';
import { TextField, Typography, IconButton, InputAdornment, Box, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { EditOutlined } from '@mui/icons-material';
import { styles } from './RequisiteInputField.styles';

interface RequisiteInputFieldProps {
  label: string;
  value?: string;
  placeholder?: string;
  showRadio?: boolean;
}

const RequisiteInputField: React.FC<RequisiteInputFieldProps> = ({
  label,
  value = '',
  placeholder = '',
  showRadio = false,
}) => {
  return (
    <TextField
      fullWidth
      value={value}
      placeholder={placeholder}
      variant="outlined"
      InputProps={{
        readOnly: true,
        startAdornment: (
          <InputAdornment position="start">
            <Box sx={styles.requisiteFieldContent}>
              {showRadio && (
                <RadioGroup row value="card">
                  <FormControlLabel
                    value="card"
                    control={<Radio />}
                    label="Номер карты"
                  />
                  <FormControlLabel
                    value="contract"
                    control={<Radio />}
                    label="Номер договора"
                    sx={styles.radioLabelSpacing}
                  />
                </RadioGroup>
              )}
              <Typography variant="h3">{label}</Typography>
            </Box>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" size="small">
              <EditOutlined />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={[
        styles.requisiteField,
        showRadio && styles.requisiteFieldWithRadio,
      ]}
    />
  );
};

export default RequisiteInputField;

