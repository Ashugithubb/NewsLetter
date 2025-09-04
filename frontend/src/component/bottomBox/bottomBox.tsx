import Box from "@mui/material/Box";
import EmailComponent from "../email/email";
import FooterComponent from "../footer/footer";

export default function BottomBox() {
    return (
        <>
            <Box sx={{display:"flex",flexDirection:"column",gap:"150px", justifyContent:"center",paddingLeft:"20%",paddingRight:"20%"}}>
                <EmailComponent />
                <FooterComponent/>
            </Box>
            
        </>
    )
}