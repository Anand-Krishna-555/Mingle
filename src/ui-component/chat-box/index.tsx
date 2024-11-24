import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

interface ChatBoxProps {
    content: string;
    reaction?: string;
    timeStamp: string;
}

const ChatBox = ({ content, reaction, timeStamp }: ChatBoxProps) => {
    return (
        <>
            <Grid
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    maxWidth: '50%',
                    borderRadius: '12px',
                    padding: '5px 15px'
                }}
            >
                <Typography sx={{ textAlign: 'left', fontSize: '16px' }}>{content}</Typography>
                <Typography sx={{ textAlign: 'right', fontSize: '12px' }}>{reaction ? reaction + ' ' + timeStamp : timeStamp}</Typography>
            </Grid>
        </>
    );
};

export default ChatBox;
