import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import style from "./email.module.css"
import ContentBox from "./contentbox/box";
export default function EmailComponent() {
    return (
        <>


            <Box  className={style.frame}
            sx={{
                
                display: "flex", height: "331px",  borderRadius: "20px",
                justifyContent: "center", padding: "64px 368px 64px 385px", zIndex: "2",
            }}>


             <ContentBox />
            </Box>
        </>
    )
}





