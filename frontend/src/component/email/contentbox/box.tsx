'use client'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import style from "../email.module.css"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAppDispatch } from "@/redux/hook/hook";
import { emailSchema } from "@/schema/email.schema";

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';
import { SubsriberThunk } from "@/redux/thunk/subscriber";
type emailFormData = z.infer<typeof emailSchema>;
export default function ContentBox() {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<emailFormData>({
        resolver: zodResolver(emailSchema),
    });

    const onSubmit = async (data: emailFormData) => {

        const res = await dispatch(SubsriberThunk(data));
        if (res.meta.requestStatus === 'fulfilled') {
            toast.success("Subscribed successfully!");

        } else {
            toast.error(res.payload || "Subscription failed");
        }
    };

    return (
        <>
            <ToastContainer />
            <Box  sx={{ display: "flex", gap: "20px", flexDirection: "column" }}>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "-8px" }}>

                    <Box sx={{ width: "100%" }}>
                        <Typography className={style.anyQuestion} sx={{ color: "white",}}>Do you have any question?</Typography>
                    </Box>
                    <Box sx={{ width: "100%", height: "48px" }}>
                        <Typography className={style.description} sx={{ color: "#FFFFFF" }}>Don't hesitate to leave us your phone number. We will contact you to discuss any questions you may have</Typography>
                    </Box>
                </Box>

                <Box>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <TextField
                            size="small"
                            {...register("email")}
                            InputLabelProps={{
                                sx: {
                                    color: 'white',
                                    '&.Mui-focused': {
                                        color: 'white',
                                    },
                                },
                            }}
                            sx={{
                                "& .MuiOutlinedInput-input": {
                                    height: "21px",
                                    color: "white",
                                    fontWeight: "400",
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: "10px 0px 0px 10px",
                                    background: "rgba(255, 255, 255, 0.10)"
                                },
                               
                            }}
                            id="outlined-basic"
                            placeholder="Enter your email"
                            variant="outlined"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                        <Button type="submit" variant="contained" sx={{ width: '100px' ,textTransform:"none" }} className={style.button}>
                            Subscribe
                        </Button>
                    </form>
                </Box>
            </Box >

        </>
    )
}



