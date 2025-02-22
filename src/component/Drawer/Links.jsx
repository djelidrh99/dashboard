import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink,useLocation } from "react-router-dom";
import {useTheme } from "@mui/material/styles";
import "./ActiveLink.css"
import Tooltip from "@mui/material/Tooltip";



export default function Links({link,isOpen}) {
    const theme = useTheme();
    const location = useLocation();

  return (
    
      <List>
        {link.map((element, index) => (
          <NavLink
          key={element.title}
          className={({isActive})=>isActive || (element.title === "Dashboard"&&location.pathname==="/") ? "activeLink":""}

          style={ 
            
               {
                  display:"block",
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                  
                }        
          }
            to={`/${element.title
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join("")}`}
          >
            <Tooltip  title={element.title} placement="right-start">
            <ListItem disablePadding sx={{ display: "block"}}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  isOpen
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    isOpen
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {element.icon}
                </ListItemIcon>

                <ListItemText
                  primary={element.title}
                  sx={[
                    isOpen
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            
            </ListItem>
            </Tooltip>
          </NavLink>
        ))}
      </List>
   
  );
}
