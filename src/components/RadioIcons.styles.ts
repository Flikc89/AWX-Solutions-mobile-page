import { tokens } from '../tokens';

export const styles = {
  radioIcon: {
    borderRadius: '50%',
    width: 20,
    height: 20,
    backgroundColor: tokens.colors.white,
    display: 'inline-block',
    position: 'relative',
  },

  radioCheckedIcon: {
    borderRadius: '50%',
    width: 20,
    height: 20,
    backgroundColor: tokens.colors.warning,
    display: 'inline-block',
    position: 'relative',
  },

  radioCheckedIconDot: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: tokens.colors.black,
  },
};

