import Grid from '@mui/material/Grid2';
import ChatList from '../../ui-component/chat-list';
import ChatSpace from '../../ui-component/chat-space';
import useConfig from '../../hooks/useConfig';
import LoginHero from '../../ui-component/login';

const Chat = () => {
    const { apiPort } = useConfig();
    console.log('apiPort -> ', apiPort);
    const validate = true;

    return (
        <>
            {validate ? (
                <>
                    <LoginHero />
                </>
            ) : (
                <Grid container sx={{ display: 'flex', minHeight: '725px', minWidth: '100%' }}>
                    <Grid>
                        <ChatList />
                    </Grid>
                    <Grid>
                        <ChatSpace />
                    </Grid>
                </Grid>
            )}
        </>
    );
};

export default Chat;
