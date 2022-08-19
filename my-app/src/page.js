
import React from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
//import Box from '@mui//Box';
import Radio from '@mui/material/Radio';
import WorkIcon from '@mui/icons-material/Work';
import Avatar from '@mui/material/Avatar';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import SaveIcon from '@mui/icons-material/Save';
//import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
//import Container from '@mui/material/Container';
//import CssBaseline from '@mui/material/CssBaseline';
import Switch from '@mui/material/Switch';
// import { width } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
import { AppBar, Button, FormControlLabel, FormGroup, Hidden, Stack, Toolbar } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function App() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [alignment, setAlignment] = React.useState('left');
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [checked, setChecked] = React.useState(true);

  const handleChange1 = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <AppBar style={{ backgroundColor: 'grey' }}>
        <Toolbar>
          <div style={{ display: "flex", paddingLeft: "20px" }}>
            <div>
              <InputLabel margin='0 '>Jobs</InputLabel>
              <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} />
              </FormGroup>
            </div>

            <div>
              <InputLabel style={{ padding: "5px" }}>Internship</InputLabel>
              <FormGroup>
                <FormControlLabel control={<Switch />} />
              </FormGroup>
            </div><br></br>

            <div style={{ padding: "5px" }}>
              <InputLabel>Projects</InputLabel>
              <FormGroup>
                <FormControlLabel control={<Switch />} />
              </FormGroup>
            </div>

            <TextField
              id="filled-textarea"
              label="Job Title key Skills"
              placeholder=""
              multiline
              variant="outlined"
              style={{
                //  padding: "10px",
                width: "100vh"
              }}
            />
            &nbsp;
            <TextField
              id="filled-textarea"
              label="Job Title key Skills"
              placeholder=""
              multiline
              variant="outlined"
              style={{
                //  padding: "10px",
                width: "50vh"
              }}
            />

            &nbsp;
            <Button size='small' style={{ backgroundColor: 'blue' }} variant="contained"><SaveIcon disabel>SAVE</SaveIcon></Button>
          </div>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ paddingLeft: "165px" }}>
        <Button variant='contained' >RESET</Button>
        <FormControl sx={{ minWidth: 120, paddingLeft: "590px" }} size="small">
          <InputLabel id="demo-select-small"></InputLabel>
          <label>Sort</label>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>popular jobs</MenuItem>
            <MenuItem value={20}>Newest first</MenuItem>

          </Select>
        </FormControl>
      </div>
      <div style={{ display: "flex" }}>


        <div style={{ width: "250px" }}>
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>APPLY FILTER<br></br>
                SALARY
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="1Lakh" />
                    <FormControlLabel value="male" control={<Radio />} label="1-2LAkh" />
                    <FormControlLabel value="other" control={<Radio />} label="2-3Lakh" />
                    <FormControlLabel value="other" control={<Radio />} label="3-4Lakh" />
                    <FormControlLabel value="other" control={<Radio />} label="4-5Lakh" />
                    <FormControlLabel value="other" control={<Radio />} label="5-6Lakh" />
                    <FormControlLabel value="other" control={<Radio />} label="6-7Lakh" />
                    <FormControlLabel value="other" control={<Radio />} label="Above 7Lakh" />
                  </RadioGroup>
                </FormControl>




              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <Box
          sx={{
            display: 'flex',
            // flexDirection:'coloumn',
            // flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 700,
              height: 300,

            },
          }}
        >

          <Paper elevation={3}>
            <Stack direction='row' spacing={2}>
              <Avatar sx={{ margin: '0', width: "75px", height: '75px' }}>H</Avatar><b > MBA (HR EXPERIENCE CANDIDATE )&nbsp; sk Enterprises</b></Stack>

            <br></br>
            <br></br>
            <Box sx={{ display: "flex" }}>
              <AccountCircleIcon> </AccountCircleIcon> 3:opening
              <WorkIcon sx={{ marginLeft: "200px" }}></WorkIcon> fresher
              <CurrencyRupeeIcon sx={{ marginLeft: "100px" }}></CurrencyRupeeIcon> 1,00,000-2,00,000PA
              <br></br>



            </Box>
            <p >JOB POST :HR MANAGER,ROLES AND RESPONSIBILITES  BASIC CONTORL ,LEGAL<br></br>
              DOCUMENTATION LABOUR LAW, ALL KIND OF WORKHANLE THEM INTERVIEW TIMING:10;30AM TO 5:30PM INTERVIEW DATE 11.7.22 TO 16.7.22...
            </p>
            <div sx={{ display: 'flex' }}>
              <LocationOnIcon></LocationOnIcon> Chennai,Trichy,Thiruvananthapuram
            </div>
            <div style={{ display: 'flex' }}>
              <Checkbox>
                checked={checked}
                onChange={handleChange1}
                inputProps={{ 'aria-label': 'controlled' }}
              </Checkbox>
              <ArrowForwardRoundedIcon sx={{ marginLeft: "400px" }}></ArrowForwardRoundedIcon> View Job
              <StarBorderRoundedIcon sx={{ marginLeft: "50px" }}></StarBorderRoundedIcon> Save job
            </div>
          </Paper>

        </Box>
        <Box
          sx={{
            display: 'flex',
            // flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 250,
              height: 175,

            },
          }}
        >
          <Paper elevation={3}>
            <center>
              <h3>RELATED SEARCHES</h3>
            </center>
            <ul>
              <li>DJANGO</li>
              <li>PHP</li>
              <li>JAVA SCRIPt</li>
              <li>MBA fresher</li>
            </ul>
          </Paper>
        </Box>
      </div>
    </div>
  );
}

export default App;
