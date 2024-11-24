import Grid from '@mui/material/Grid2';
import ChatBox from '../chat-box';

const ChatContainer = () => {
    return (
        <>
            <Grid container sx={{ display: 'flex', height: '83%', justifyContent: 'center', alignItems: 'flex-end', overflowY: 'scroll' }}>
                <Grid
                    sx={{
                        width: '1000px',
                        height: '300px',
                        border: '1px solid black',
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '10px'
                    }}
                >
                    <ChatBox content="Hi mame" timeStamp="19:48" reaction="🙋‍♂️" />
                    <ChatBox content="epdi iruka" timeStamp="19:49" />
                </Grid>
            </Grid>
        </>
    );
};

export default ChatContainer;
