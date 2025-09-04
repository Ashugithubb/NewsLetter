"use client"
import Box from '@mui/material/Box';
import BasicSelect from './select';
import Link from '@mui/material/Link';

export default function Navbar() {
    return (
        <>
            <Box sx={{dipslay:"flex",alignItems:"center",justifyContent:"center",padding:"27px 316px 27px 316px",height:"110px"}}>
                <Box sx={{ display: "flex", width: "100%", height: "56px", gap: "303px", justifyContent: "center", alignItems: "center" }}  >
                    <Box>
                        <Box sx={{ height: "80px", width: "61.83px" }}> <img src="./Group2.svg" alt="logo" /></Box>
                    </Box>
                    <Box sx={{ display: "flex", gap: "56px" }}>
                        <BasicSelect />
                        <Link sx={{ color: "black", marginTop: "16.5px" }} href="https://example.com" underline="none">Teacher</Link>
                        <Link sx={{ color: "black", marginTop: "16.5px" }} href="https://example.com" underline="none">How to use</Link>
                        <Link sx={{ color: "black", marginTop: "16.5px" }} href="https://example.com" underline="none">About Us</Link>
                    </Box>

                </Box>
            </Box>
        </>
    )
}