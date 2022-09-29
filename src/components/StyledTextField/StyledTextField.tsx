import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

interface IStyledTextFieldProps {
  light?: boolean;
}

export const StyledTextField = styled(TextField)<IStyledTextFieldProps>(
  ({ light = false }) => ({
    backgroundColor: light ? '#fff' : 'rgba(201, 201, 201, 0.19)',
    boxShadow: light ? '' : 'inset 8px 8px 20px -2px rgba(0, 0, 0, 0.1)',

    '& label.Mui-focused': {
      color: '#000',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
    },
  })
);
