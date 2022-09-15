import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const StyledTextField = styled(TextField)({
  backgroundColor: 'rgba(201, 201, 201, 0.19)',
  boxShadow: 'inset 8px 8px 20px -2px rgba(0, 0, 0, 0.1)',
  //   maxWidth: '10vw',

  '& label.Mui-focused': {
    color: '#000',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
  },
});

export { StyledTextField };
