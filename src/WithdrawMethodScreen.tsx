import React from 'react';
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Checkbox,
  Container,
} from '@mui/material';
import AmountInputCard from './components/AmountInputCard';
import RequisiteInputField from './components/RequisiteInputField';
import PresetIndicator from './components/PresetIndicator';
import BankCard from './components/BankCard';
import { styles } from './WithdrawMethodScreen.styles';

const WithdrawMethodScreen: React.FC = () => {
  return (
    <Box sx={styles.screen}>
      <Container>
        <Typography variant="h6" sx={styles.sectionTitle}>
          Способ вывода
        </Typography>

        <Box sx={styles.tabsContainer}>
          <ToggleButtonGroup value="banks" exclusive>
            <ToggleButton value="banks">Банки</ToggleButton>
            <ToggleButton value="cash">Наличные</ToggleButton>
            <ToggleButton value="courier">Курьер</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <BankCard />

        <Typography variant="h6" sx={styles.volumesTitle}>
          Объемы
        </Typography>

        <Box sx={styles.columnsLabels}>
          <Box sx={styles.columnLabel}>
            <Typography variant="body2" color="text.secondary">
              Отдаете (лот 1000)
            </Typography>
          </Box>
          <Box sx={styles.columnLabelRight}>
            <Typography variant="body2" color="text.secondary">
              Получаете (лот 1000)
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.amountCardsContainer}>
          <AmountInputCard
            label="Ethereum, ETH"
            value="1 300.00000"
            focused
          />
          <AmountInputCard
            label="Рубль, RUR"
            value="1 200.00"
          />
        </Box>

        <Box sx={styles.presetsContainer}>
          <PresetIndicator label="min" filled />
          <PresetIndicator label="50%" filled />
          <PresetIndicator label="75%" filled={false} />
          <PresetIndicator label="max" filled={false} />
        </Box>

        <Box sx={styles.requisitesHeader}>
          <Typography variant="h6">
            Реквизиты
          </Typography>
          <Box sx={styles.checkboxContainer}>
            <Typography variant="body1" color="text.secondary">
              Сохранить реквизиты
            </Typography>
            <Checkbox checked sx={styles.checkbox} color="primary" />
          </Box>
        </Box>

        <Box sx={styles.requisitesFields}>
          <RequisiteInputField label="Номер карты" showRadio />
          <RequisiteInputField label="Номер договора" />
          <RequisiteInputField label="Адрес" />
        </Box>
      </Container>
    </Box>
  );
};

export default WithdrawMethodScreen;
