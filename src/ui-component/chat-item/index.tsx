import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { AvatarIcon } from '../../assets/icons/Chat';

interface ChatItemProps {
    icon?: string;
    name: string;
    description: string;
    timeStamp: string;
    seen: boolean;
    newMessageCount?: number;
}

const ChatItem = ({ icon, name, description, timeStamp, seen = true, newMessageCount = 0 }: ChatItemProps) => {
    return (
        <>
            <Grid
                sx={{
                    display: 'flex',
                    padding: '10px 20px',
                    gap: '16px',
                    cursor: 'pointer',
                    ':hover': {
                        backgroundColor: '#F5F5F5',
                        transition: 'ease-in-out'
                    }
                }}
            >
                <Grid>{icon ? <img src={icon} alt="user-icon" /> : <AvatarIcon />}</Grid>
                <Grid sx={{ display: 'flex', width: '253px', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '2px' }}>
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                maxWidth: '205px',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden'
                            }}
                        >
                            {name}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 300,
                                color: '#707991',
                                maxWidth: '205px',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden'
                            }}
                        >
                            {description}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '2px' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 300, color: '#707991' }}>{timeStamp}</Typography>
                        {!seen && (
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        textAlign: 'center',
                                        backgroundColor: '#78E378',
                                        color: 'white',
                                        width: '24px',
                                        borderRadius: '12px'
                                    }}
                                >
                                    {!!newMessageCount && newMessageCount <= 9 ? newMessageCount : '9+'}
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default ChatItem;
