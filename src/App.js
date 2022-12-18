import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Stack from '@mui/material/Stack';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import WidgetsIcon from '@mui/icons-material/Widgets';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #502a71 30%, #502a71 90%)',
    boxShadow: '0px 0px 0px 0px',
    height: 40,
    padding: '0 30px ',
  },
});

const useStyles2 = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #fff 30%, #fff 90%)', 
    // boxShadow: '0px 0px 0px 0px',
    height: 100,
    padding: '0 30px ',
  },
});


const App=()=>{

  const classes = useStyles();
  const classes2 = useStyles2();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.root} >
        <Toolbar  sx={{ mr: 10, ml:10 }}>
        <Divider orientation="vertical" flexItem color="grey" sx={{mb:3, ml:1, mr:1}}/>
        <IconButton sx={{ "&:hover": { color: "#fff", backgroundColor: "transparent"} }}>
          <TwitterIcon sx={{mb:3}}/>
        </IconButton>
        <Divider orientation="vertical" flexItem color="grey" sx={{mb:3, ml:1, mr:1}}/>
        <IconButton sx={{ "&:hover": { color: "#fff", backgroundColor: "transparent"} }}>
          <FacebookOutlinedIcon  sx={{mb:3}}/>
        </IconButton>
        <Divider orientation="vertical" flexItem color="grey" sx={{mb:3, ml:1, mr:1}}/>
        <IconButton sx={{ "&:hover": { color: "#fff", backgroundColor: "transparent"} }}>
          <LinkedInIcon  sx={{mb:3}}/>
        </IconButton>
        <Divider orientation="vertical" flexItem color="grey" sx={{mb:3, ml:1, mr:1}}/>
        <IconButton sx={{ "&:hover": { color: "#fff", backgroundColor: "transparent"} }}>
          <InstagramIcon  sx={{mb:3}}/>
        </IconButton>
        <Divider orientation="vertical" flexItem color="grey" sx={{mb:3, ml:1, mr:1}}/>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        </Typography>
          <CallIcon  sx={{mb:3}}/>
          <IconButton sx={{ "&:hover": { color: "#fff", backgroundColor: "transparent"} }}>
          <Typography variant="body2" sx={{mb:3, ml:1}}>
            +91 9104241907
          </Typography> 
          </IconButton>
          <Divider orientation="vertical" flexItem color="grey" sx={{mb:3, ml:1, mr:1}}/>
          <CallIcon  sx={{mb:3}}/>
          <IconButton sx={{ "&:hover": { color: "#fff", backgroundColor: "transparent"} }}>
          <Typography variant="body2" sx={{mb:3, ml:1}}>
            +91 9548857801
          </Typography>
          </IconButton>
          <Divider orientation="vertical" flexItem color="grey" sx={{mb:3, ml:1, mr:1}}/> 
          <MailIcon  sx={{mb:3}}/>
          <IconButton sx={{ "&:hover": { color: "#fff", backgroundColor: "transparent"} }}>
          <Typography variant="body2" sx={{mb:3, ml:1}}>
            support@techgeekz.in
          </Typography> 
          </IconButton>
          <Divider orientation="vertical" flexItem color="grey" sx={{mb:3, ml:1, mr:1}}/>
        </Toolbar>
      </AppBar>
    </Box>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes2.root} color="transparent">
        <Toolbar sx={{ mr: 10, ml:10 }}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            TECHGEEKZ
          </Typography>
          <Stack spacing={2} direction="row">
            <IconButton sx={{ "&:hover": { color: "#BE4EF5", backgroundColor: "transparent" } }}>
              <Button variant="text" color="inherit">Home</Button>
            </IconButton>
            <IconButton sx={{ "&:hover": { color: "#BE4EF5", backgroundColor: "transparent"  } }}>
            <Button
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              color="inherit"
            >
              Company
              <ArrowDropDownIcon/>
            </Button>
            </IconButton>
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>ABOUT US</MenuItem>
              <MenuItem onClick={handleClose}>WHY CHOOSE US</MenuItem>
            </Menu>
            <IconButton sx={{ "&:hover": { color: "#BE4EF5", backgroundColor: "transparent" } }}>
            <Button
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              color="inherit"
            >
              Services
              <ArrowDropDownIcon/>
            </Button>
            </IconButton>
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>IT SERVICES</MenuItem>
              <MenuItem onClick={handleClose}>DIGITAL MARKETING</MenuItem>
              <MenuItem onClick={handleClose}>WEB DEVELOPMENT</MenuItem>
              <MenuItem onClick={handleClose}>MOBILE DEVELOPMENT</MenuItem>
            </Menu>
            <IconButton sx={{ "&:hover": { color: "#BE4EF5", backgroundColor: "transparent" } }}>
              <Button variant="text" color="inherit" >Projects</Button>
            </IconButton>
            <IconButton sx={{ "&:hover": { color: "#BE4EF5", backgroundColor: "transparent" } }}>
              <Button variant="text" color="inherit" sx={{ borderRadius: "0px" }}>Blog</Button>
            </IconButton>
            <IconButton sx={{ "&:hover": { color: "#BE4EF5", backgroundColor: "transparent" } }}>
              <Button variant="text" color="inherit">Contact Us</Button>
            </IconButton>
          </Stack>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <SearchIcon sx={{mr:3}}/>
          <WidgetsIcon/>
        </Toolbar>
    </AppBar>
  </Box>
  </>
  )
}
export default App;