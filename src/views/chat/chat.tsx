import Grid from '@mui/material/Grid2';
import ChatList from '../../ui-component/chat-list';
import ChatSpace from '../../ui-component/chat-space';

const Chat = () => {
    return (
        <>
            <Grid container sx={{ display: 'flex', minHeight: '725px', minWidth: '100%' }}>
                <Grid>
                    <ChatList />
                </Grid>
                <Grid>
                    <ChatSpace />
                </Grid>
            </Grid>
        </>
    );
};

export default Chat;
