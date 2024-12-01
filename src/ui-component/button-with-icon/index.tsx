import { Button, SxProps } from '@mui/material';
import { ReactNode } from 'react';

interface ButtonWithIconProps {
    icon: ReactNode;
    buttonText: string;
    handleClick: () => void;
    sx?: SxProps;
}

const ButtonWithIcon = ({ icon, buttonText, handleClick, sx }: ButtonWithIconProps) => {
    return (
        <Button
            onClick={handleClick}
            sx={{
                color: 'black',
                width: '100%',
                display: 'flex',
                gap: '9px',
                backgroundColor: 'white',
                textTransform: 'none',
                ...sx
            }}
        >
            {icon}
            {buttonText}
        </Button>
    );
};

export default ButtonWithIcon;
