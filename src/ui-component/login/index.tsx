import Grid from '@mui/material/Grid2';
import { Box, Typography, TextField, Button } from '@mui/material';
import bg from '../../assets/images/bg.png';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import ButtonWithIcon from '../button-with-icon';
import { GoogleIcon } from '../../assets/icons/login';
import { LOGIN_HERO_STRINGS } from './constants';
import { addNewUser, getUser } from '../../api/login';

const LoginHero = () => {
    const [isActive, setIsActive] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '', password: '' });

    const handleNameChange = (e: BaseSyntheticEvent) => {
        setName(e?.target?.value);
    };

    const handleEmailChange = (e: BaseSyntheticEvent) => {
        setEmail(e?.target?.value);
    };

    const handlePasswordChange = (e: BaseSyntheticEvent) => {
        setPassword(e?.target?.value);
    };

    const validateName = (name: string) => {
        if (isActive) return true;
        const regex = /^[A-Za-z\s]+$/; // Allow only alphabets and spaces
        return regex.test(name);
    };

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
        return regex.test(email);
    };

    const validatePassword = (password: string) => {
        // Password must have at least 8 characters, one uppercase, one lowercase, one number, and one special character
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    const handleReset = () => {
        setName('');
        setEmail('');
        setPassword('');
        setErrors({ name: '', email: '', password: '' });
    };

    const handleSubmit = async () => {
        try {
            let valid = true;
            const newErrors = { name: '', email: '', password: '' };

            if (!validateName(name)) {
                newErrors.name = 'Name must contain only alphabets.';
                valid = false;
            }

            if (!validateEmail(email)) {
                newErrors.email = 'Please enter a valid email address.';
                valid = false;
            }

            if (!validatePassword(password)) {
                newErrors.password =
                    'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.';
                valid = false;
            }

            setErrors(newErrors); // Set error messages

            if (valid) {
                if (!isActive) {
                    const response = await addNewUser({
                        name,
                        email,
                        password
                    });

                    if (response.status) {
                        handleReset();
                    } else {
                        throw new Error('Api status false');
                    }
                } else {
                    const response = await getUser({
                        email,
                        password
                    });

                    if (response.status) {
                        handleReset();
                    } else {
                        throw new Error('Api status false');
                    }
                }
            }
        } catch (error) {
            console.log('Submit error ', error);
        }
    };

    useEffect(() => {
        handleReset();
    }, [isActive]);
    return (
        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: '100vh' }}>
            <Box
                sx={{
                    height: '75%',
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    aspectRatio: '16/9',
                    display: 'flex',
                    justifyContent: 'content',
                    alignItems: 'center',
                    position: 'relative',
                    transition: 'ease-in-out'
                }}
            >
                <Grid
                    sx={{
                        border: '1px solid #262626',
                        background: 'radial-gradient(#6b9be0 -400%, black 100%)',
                        position: 'absolute',
                        left: '31%',
                        display: 'flex',
                        justifyContent: 'content',
                        alignItems: 'center',
                        flexDirection: 'column',
                        borderRadius: '20px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)'
                    }}
                >
                    <Grid
                        sx={{
                            display: 'flex',
                            justifyContent: 'content',
                            alignItems: 'center',
                            flexDirection: 'column',
                            padding: '30px',
                            width: '400px',
                            rowGap: '16px',
                            transition: 'ease-in-out'
                        }}
                    >
                        <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '24px', marginBottom: '15px' }}>
                            {isActive ? LOGIN_HERO_STRINGS.LOGIN_TITLE : LOGIN_HERO_STRINGS.CREATE_AN_ACCOUNT}
                        </Typography>
                        <ButtonWithIcon
                            icon={<GoogleIcon />}
                            buttonText={LOGIN_HERO_STRINGS.GOOGLE}
                            handleClick={() => {
                                alert('Icon button clicked!');
                            }}
                            sx={{
                                color: '#A0A0AB',
                                backgroundColor: '#26272B',
                                borderRadius: '8px',
                                height: '40px',
                                fontWeight: 'bold',
                                fontSize: '16px'
                            }}
                        />
                        <Typography sx={{ color: '#A0A0AB', fontSize: '14px', fontWeight: 500, letterSpacing: '1.5px' }}>
                            {LOGIN_HERO_STRINGS.OR}
                        </Typography>
                        {!isActive && (
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', rowGap: '12px' }}>
                                <Typography sx={{ fontSize: '16px', color: '#D1D1D6', width: '100%' }}>
                                    {LOGIN_HERO_STRINGS.NAME}
                                </Typography>
                                <TextField
                                    placeholder={LOGIN_HERO_STRINGS.ENTER_NAME}
                                    onChange={handleNameChange}
                                    value={name}
                                    sx={{
                                        width: '100%',
                                        fontSize: '14px',
                                        border: '1px solid #262626',
                                        borderRadius: '8px',
                                        height: '48px',
                                        color: '#D1D1D6',
                                        '& .MuiOutlinedInput-root': {
                                            color: '#D1D1D6'
                                        }
                                    }}
                                />
                                {errors.name && <span style={{ color: 'red', fontSize: '14px' }}>{errors.name}</span>}
                            </Box>
                        )}

                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', rowGap: '12px' }}>
                            <Typography sx={{ fontSize: '16px', color: '#D1D1D6', width: '100%' }}>{LOGIN_HERO_STRINGS.EMAIL}</Typography>
                            <TextField
                                placeholder={LOGIN_HERO_STRINGS.ENTER_EMAIL}
                                onChange={handleEmailChange}
                                type="email"
                                required
                                value={email}
                                sx={{
                                    width: '100%',
                                    fontSize: '14px',
                                    border: '1px solid #262626',
                                    borderRadius: '8px',
                                    height: '48px',
                                    color: '#D1D1D6',
                                    '& .MuiOutlinedInput-root': {
                                        color: '#D1D1D6'
                                    }
                                }}
                            />
                            {errors.email && <span style={{ color: 'red', fontSize: '14px' }}>{errors.email}</span>}
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', rowGap: '12px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <Typography sx={{ fontSize: '16px', color: '#D1D1D6' }}>{LOGIN_HERO_STRINGS.PASSWORD}</Typography>
                                <Typography
                                    sx={{
                                        fontSize: '16px',
                                        color: '#D1D1D6',
                                        cursor: 'pointer',
                                        transition: 'ease-in-out',
                                        userSelect: 'none',
                                        '&:active': {
                                            color: '#1570EF'
                                        },
                                        '&:hover': {
                                            textDecoration: 'underline'
                                        }
                                    }}
                                >
                                    {LOGIN_HERO_STRINGS.FORGOT}
                                </Typography>
                            </Box>
                            <TextField
                                placeholder={LOGIN_HERO_STRINGS.ENTER_PASSWORD}
                                onChange={handlePasswordChange}
                                value={password}
                                sx={{
                                    width: '100%',
                                    fontSize: '14px',
                                    border: '1px solid #262626',
                                    borderRadius: '8px',
                                    height: '48px',
                                    '& .MuiOutlinedInput-root': {
                                        color: '#D1D1D6'
                                    }
                                }}
                            />
                            {errors.password && <span style={{ color: 'red', fontSize: '14px' }}>{errors.password}</span>}
                        </Box>
                        <Button
                            onClick={handleSubmit}
                            sx={{ width: '100%', height: '48px', backgroundColor: '#1570EF', fontWeight: 'bold', color: '#D1D1D6' }}
                        >
                            {isActive ? LOGIN_HERO_STRINGS.LOGIN_TITLE : LOGIN_HERO_STRINGS.CREATE_ACCOUNT}
                        </Button>
                        <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'center', width: '100%' }}>
                            <Typography sx={{ color: '#70707B' }}>
                                {isActive ? LOGIN_HERO_STRINGS.DO_NT_HAVE_ACCOUNT : LOGIN_HERO_STRINGS.HAVE_ACCOUNT}
                            </Typography>
                            <Typography
                                onClick={() => setIsActive(!isActive)}
                                sx={{
                                    color: '#D1D1D6',
                                    cursor: 'pointer',
                                    transition: 'ease-in-out',
                                    userSelect: 'none',
                                    '&:active': {
                                        color: '#1570EF'
                                    },
                                    '&:hover': {
                                        textDecoration: 'underline'
                                    }
                                }}
                            >
                                {isActive ? LOGIN_HERO_STRINGS.CREATE_ACCOUNT : LOGIN_HERO_STRINGS.LOG_IN}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
};

export default LoginHero;
