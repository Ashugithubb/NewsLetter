import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
    const [course, setCourses] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setCourses(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            
                <Select
                    value={course}
                    onChange={handleChange}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: "none"
                        },
                    }}
                >
                    <MenuItem value="">Courses</MenuItem>
                    <MenuItem value={10}>HTML</MenuItem>
                    <MenuItem value={20}>CSS</MenuItem>
                    <MenuItem value={30}>JavaScript</MenuItem>
                </Select>
            
        </Box>
    );
}
