import React from "react";
import { List, ListItem, ListItemText, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { pink } from "@mui/material/colors";

const deleteTodo = (event) => {};

export const Todo = ({ text }) => {
  return (
    <div>
      {/* <li>{text}</li> */}
      {/* <button>Delete</button> */}
      <List className="TodoList">
        <Box
          className="Box"
          sx={{
            borderRadius: 8,
            width: 300,
            height: 40,
            backgroundColor: "#F6F5F5",
            "&:hover": {
              backgroundColor: "#EEEEEE",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <ListItem
            disablePadding
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input type="checkbox" className="Checkbx" />
            <ListItemText primary={text} />
            <IconButton edge="start" aria-label="delete">
              <DeleteIcon sx={{ color: pink[500] }} />
            </IconButton>
          </ListItem>
        </Box>
      </List>
    </div>
  );
};

export default Todo;
/*<List>
        <ListItem
          secondaryAction={
            <DeleteIcon className="DeleteIcon" sx={{ color: pink[500] }} />
          }
        >
          <ListItemText className="TodoList" primary={text} />
        </ListItem>
      </List>*/
