import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
// https://dummyjson.com/products
export default function AlignItemsList({ queryText, products }) {
    const FilterData = products.filter((element) => {
        return element.title.toLowerCase().indexOf(queryText.searchField.toLowerCase()) !== -1;
    })
    return (

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                FilterData.map((element) => {
                    return (
                        <Box key={element.id}>

                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={element.thumbnail} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={element.title}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Description:
                                            </Typography>
                                            {element.description}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </Box>

                    )


                })
            }
        </List>
    );
}
