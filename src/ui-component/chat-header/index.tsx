import Grid from '@mui/material/Grid2';
import { AvatarIcon, CallIcon, MoreIcon, SearchIcon } from '../../assets/icons/Chat';
import { Box, Typography } from '@mui/material';

interface ChatHeaderProps {
    icon?: string;
    name: string;
    lastSeen: string;
}

const ChatHeader = ({ icon, name, lastSeen }: ChatHeaderProps) => {
    return (
        <>
            <Grid
                container
                sx={{
                    borderLeft: '1px solid #707991',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px 30px 0px 15px',
                    width: '100%',
                    justifyContent: 'space-between',
                    zIndex: 10,
                    backgroundColor: 'white'
                }}
            >
                <Grid sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    {icon ? <img /> : <AvatarIcon width="40" height="40" />}
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>{name}</Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: '300', color: '#707991' }}>{'last seen ' + lastSeen}</Typography>
                    </Box>
                </Grid>
                <Grid sx={{ display: 'flex', gap: '20px' }}>
                    <SearchIcon />
                    <CallIcon />
                    <MoreIcon />
                </Grid>
            </Grid>
        </>
    );
};

export default ChatHeader;
