import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const StyledLogin = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.secondary.light,

  '& .Login-container': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: Number(theme.shape.borderRadius) * 3,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    padding: 60,
  },

  '@media (max-width: 768px)': {
    padding: '0px!important',

    '& .Login-container': {
      width: '100vw',
      boxShadow: 'none',
      padding: 30,
      borderRadius: 0,

      '& p': {
        maxWidth: 'inherit',
      },
    },
  },
}));

const StyledTextField = styled(TextField)({
  backgroundColor: 'rgba(201, 201, 201, 0.19)',
  boxShadow: 'inset 8px 8px 20px -2px rgba(0, 0, 0, 0.1)',

  '& label.Mui-focused': {
    color: '#000',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
  },
});

export { StyledLogin, StyledTextField };
