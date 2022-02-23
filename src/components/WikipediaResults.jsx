import React from "react";
import { useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  // ImageListItem,
  Divider,
  Typography
} from "@mui/material";

const WikipediaResults = () => {
  const { searchResults } = useSelector((state) => state);

  const searchResultsList = searchResults.map((searchItem) => {
    return (
      <>
        <ListItem alignItems="flex-start">
          {/* <ImageListItem sx={{ width: 100 }}>
            <img src="" alt={searchItem.title} />
          </ImageListItem> */}
          <ListItemText
            primary={searchItem.title}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {searchItem.extract}
                </Typography>
              </React.Fragment>
            }
            sx={{ paddingLeft: 2 }}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    );
  });

  return (
    <List
      data-cy="wiki-search-list"
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {searchResultsList}
    </List>
  );
};

export default WikipediaResults;
