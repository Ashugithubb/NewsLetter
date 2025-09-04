import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/component/navbar/navbar";
import Box from "@mui/material/Box";
import EmailComponent from "@/component/email/email";
import FooterComponent from "@/component/footer/footer";
import BottomBox from "@/component/bottomBox/bottomBox";

export default function Home() {
  return (

    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "120px", justifyContent: "center", align: "center" }}>
        <Navbar />
        <BottomBox />
      </Box>

    </>
  );
}
