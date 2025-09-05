import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import style from "../email/email.module.css"
export default function FooterComponent() {
    return (
        <>
            <Box sx={{ display: "flex", padding: "80px", height: "411px" }}>

                <Box sx={{ display: "flex", gap: "100px", height: "251px", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                        <Box sx={{}}>  <img src="./Group2.svg" alt="logo" /></Box>
                        <Box className={style.typographyText} sx={{ display: "flex", gap: "5px", flexDirection: "column" }}>
                            <Typography>2020 Edudu.co</Typography>
                            <Typography>Edudu is a registered trademark of Edudu.co</Typography></Box>
                    </Box>

                    <Box>
                        <Typography className={style.typographyText} sx={{ fontSize: "24px" }}>Courses</Typography>
                        <Box sx={{ display: "flex", gap: "4px", flexDirection: "column" }}>
                            <Typography>Classroom courses</Typography>
                            <Typography>Virtual classroom courses</Typography>
                            <Typography> E-learning courses</Typography>
                            <Typography> Video Courses</Typography>
                            <Typography>Offline Courses</Typography></Box>

                    </Box>

                    <Box>  <Typography className={style.typographyText} sx={{ fontSize: "24px" }}>Community</Typography>
                        <Box sx={{ display: "flex", gap: "4px", flexDirection: "column" }}>
                            <Typography>Learners</Typography>
                            <Typography> Parteners</Typography>
                            <Typography>Developers</Typography>
                            <Typography> Transactions</Typography>
                            <Typography>Blog</Typography>
                            <Typography>Teaching Center</Typography>
                        </Box></Box>

                    <Box>  <Typography className={style.typographyText} sx={{ fontSize: "24px" }}>Quick links</Typography>
                        <Typography>Home</Typography>
                        <Typography>  Professional Education</Typography>
                        <Typography> Courses</Typography>
                        <Typography> Admissions</Typography>
                        <Typography>Testimonial</Typography>
                        <Typography>Programs</Typography>
                    </Box>

                    <Box>  <Typography className={style.typographyText} sx={{ fontSize: "24px" }}>More</Typography>
                        <Typography>Press</Typography>
                        <Typography>Investors</Typography>
                        <Typography> Terms</Typography>
                        <Typography> Privacy</Typography>
                        <Typography>Help</Typography>
                        <Typography>Contact</Typography>
                    </Box>
                </Box>

            </Box>
        </>
    )
}