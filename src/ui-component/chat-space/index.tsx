import Grid from '@mui/material/Grid2';
import ChatHeader from '../chat-header';
import ChatIllustration from '../../assets/images/Chats.png';
import ChatContainer from '../chat-container';

const ChatSpace = () => {
    return (
        <>
            <Grid sx={{ width: '1179px', height: '100%', position: 'relative' }}>
                <img
                    style={{ width: '1179px', zIndex: -1000, position: 'absolute', top: 0, left: 0, objectFit: 'cover' }}
                    src={ChatIllustration}
                    alt="Chat Illustration"
                />
                <ChatHeader name={'Krishna'} lastSeen="5 min ago" />
                <ChatContainer />
            </Grid>
        </>
    );
};

export default ChatSpace;
