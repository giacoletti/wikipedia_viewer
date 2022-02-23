import React from "react";
import { useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Typography
} from "@mui/material";

const WikipediaResults = () => {
  const { searchResults } = useSelector((state) => state);

  const searchResultsList = searchResults.map((searchItem, index) => {
    return (
      <div key={searchItem.index}>
        <ListItem alignItems="flex-start">
          {searchItem.thumbnail && (
            <ListItemAvatar>
              <Avatar
                data-cy={`wikisearch-image-${index}`}
                src={searchItem.thumbnail?.source}
                alt={searchItem.title}
              />
            </ListItemAvatar>
          )}
          <ListItemText
            data-cy={`wikisearch-title-${index}`}
            primary={searchItem.title}
            secondary={
              <React.Fragment>
                <Typography
                  data-cy={`wikisearch-description-${index}`}
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
      </div>
    );
  });

  return (
    <List
      data-cy="wikisearch-list"
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {searchResultsList}
    </List>
  );
};

export default WikipediaResults;
