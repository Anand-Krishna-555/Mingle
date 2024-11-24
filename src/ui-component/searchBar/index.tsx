import Grid from '@mui/material/Grid2';
import { Hamburger, SearchIcon } from '../../assets/icons/Chat';
import { InputAdornment, TextField } from '@mui/material';

const SearchBar = () => {
    return (
        <>
            <Grid
                sx={{
                    padding: '15px 18px 0px 18px',
                    display: 'flex',
                    gap: '20px',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Grid>
                    <Hamburger />
                </Grid>
                <Grid>
                    <TextField
                        variant="outlined"
                        placeholder="Search"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment
                                    position="start"
                                    sx={{
                                        marginRight: '15px' // Add margin to create the gap
                                    }}
                                >
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '100px',
                                width: '276px',
                                height: '40px',
                                color: '#707991',
                                fontWeight: 500,
                                fontSize: '18px',
                                backgroundColor: '#F5F5F5',
                                paddingLeft: '20px'
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none' // Remove the border
                            }
                        }}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default SearchBar;
