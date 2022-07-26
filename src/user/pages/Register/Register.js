import React from 'react'
import './Register.scss'
import design from '../../../assets/elder.jpg'
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export default function Register() {
  return (
    <div className='signuppage'>
      <div className=' ssign'>
        
        <img className='imagine1' src={design} alt ="somet" />
        <div className='signuppart'>
          <div className='row1'>
          <div className='signuptext1'> MED</div><div className='care'>CARE</div>
          </div>
          <br/>
          <div className='row2'>
            <div className='row21'>
            <TextField
            size="small"  className='row211'
            required label="email-id"
            variant="outlined"
            />
             <TextField className='row212'
              size="small" required
               label="Phone number"
                type="tel"
              />
            </div>
        
          </div>
        
          <div className='row3'>
            <div className='row31'>
           <TextField  className='row311'
              size="small"
              required label="First-Name"
              variant="outlined"
          />
          <TextField  className='row311'
              size="small"
              label="Middle-Name"
              variant="outlined"
          />
          <TextField  className='row311'
              size="small"
              required label="Last-Name"
              variant="outlined"
          />
          </div>
          </div>
          <div className='row4' >
            <TextField className='row41'
            size='small'
            required
            type='date'
            helperText='Enter date-of-birth'
            />
            <TextField className='row41'
             size="small"
              required
              label="Age"
              type="number"
            />
        
        
              <FormControl  className='row41' required
              size="small">
                  <InputLabel >Gender</InputLabel>
        
                  <Select
                    //value={age}
                    label="gender"
                    //onChange={handleChange}
                    >
        
                    <MenuItem >Male</MenuItem>
                    <MenuItem >Female</MenuItem>
                    <MenuItem >Other</MenuItem>
                  </Select>
              </FormControl>
          </div>
          <div className='row5' >
          <FormControl  className='row51' required
              size="small">
                  <InputLabel >District</InputLabel>
                  <Select
                  label="District"
                    //value={age}
        
                    //onChange={handleChange}
                    >
        
                    <MenuItem >Kasaragod</MenuItem>
                    <MenuItem >Kannur</MenuItem>
                    <MenuItem >Kozhikode</MenuItem>
                    <MenuItem >Wayanad</MenuItem>
                    <MenuItem >Malappuram</MenuItem>
                    <MenuItem >Palakkad</MenuItem>
                    <MenuItem >Thrissur</MenuItem>
                    <MenuItem >Ernakulam</MenuItem>
                    <MenuItem >Alappuzha</MenuItem>
                    <MenuItem >Kottayam</MenuItem>
                    <MenuItem >Pattanamthitta</MenuItem>
                    <MenuItem >Idukki</MenuItem>
                    <MenuItem >Kollam</MenuItem>
                    <MenuItem >Thiruvananthapuram</MenuItem>
                  </Select>
              </FormControl>
          <TextField  className='row51'
            size="small"
            required
            label="Address"
            multiline
           // value={value}
           // onChange={handleChange}
          />
           <TextField className='row51'
           required
            size='small'
            label="Occupation"
            type="text"
          />
          </div>
          <div className='row6'>
            <div  className='row61'>
            <TextField className='row611' size="small"
              label="Enter details"
              type="text"
              helperText="List of previously consulted doctors,if any"
              multiline
              // value={value}
              // onChange={handleChange}
            />
            <TextField className='row611' size="small"
           type="text"
           helperText="List of mentionable medical conditions,if any"
           multiline
           label='Enter details'
          // value={value}
          // onChange={handleChange}
         />
            </div>
          </div>
          <div className='row7'>
            <div className='row71'>
            <TextField className='row711'
              size='small' required
              label="Password"
              type="password"
            />
          <TextField className='row711'
            size='small' required
            label="Confirm Password"
            type="password"
          />
            </div>
          </div>
          <div className='row8'>
              <button className='buttons'>Register</button>
          </div>
        </div>
      </div>

    </div>
  )
}
