
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddModeratorIcon from '@mui/icons-material/AddModerator';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function DrugCare() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="medium"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <AddModeratorIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        Welcome to drughelp.care
                    </Typography>
                    <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/Drughelp.careApp/" title="Facebook" >
                    <IconButton
                        size="medium"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                         <FacebookIcon fontSize="large" /> 
                    </IconButton> </a>

                    <a target='_blank' rel="noopener noreferrer" href="https://twitter.com/DrughelpC" title="Twitter" >  <IconButton
                        size="medium"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <TwitterIcon fontSize="large" /> 
                    </IconButton> </a>
                    <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/company/drughelp-care" title="LinkedIn" > <IconButton
                        size="medium"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <LinkedInIcon fontSize="large" /> 
                    </IconButton> </a>
                </Toolbar>
            </AppBar>

        </Box>
    );
}