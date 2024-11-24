import { Box } from '@mui/material';
import ChatItem from '../chat-item';
import SearchBar from '../searchBar';

const ChatList = () => {
    return (
        <>
            <SearchBar />
            <Box sx={{ height: '10px' }}></Box>
            <ChatItem name="Mingle" description="Hi brooo" timeStamp={'19:48'} seen={false} newMessageCount={3} />
            <ChatItem name="Jessica" description="Ok, see you later 😃" timeStamp={'19:48'} seen={false} newMessageCount={3} />
            <ChatItem
                name="David Moore"
                description="Yo, I dont remember anything 🙂‍↕️🙂‍↕️"
                timeStamp={'19:48'}
                seen={false}
                newMessageCount={10}
            />
            <ChatItem name="Greg james" description="I got a Job at spaceex 🚀" timeStamp={'19:48'} seen={true} newMessageCount={3} />
        </>
    );
};

export default ChatList;
