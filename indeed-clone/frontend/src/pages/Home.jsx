import Header from "../components/Header";
import { Box, Typography, Button, styled } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { routePath } from "../routes/route";

const Component = styled(Box)({
     display:'flex',
     height:'100vh',
     alignItems:'center',
     margin: '0 150px',
     '& > div':{
       width:'50%',
       display:'flex',
       justifyContent:'center',
       flexDirection:'column',

       '& > P':{
        fontSize: 56,
        linHeight: 1.25,
        letterSpacing: -1,
       },

        '& > button': {
            width: 220,
            height: 60,
            background:'rgb(37,87,167)',
        }
       
     }

})

const Home = () => {

    const navigate = useNavigate();
    const animatedImage = "https://recruiterguy.com/jjwp/wp-content/uploads/2021/07/Steps-in-Your-Career-Search.png";
    return (
        <div>
            <Header />
            <Component>
                <Box>
                  <Typography>Let's make your next hire fast</Typography>
                  <Button variant="contained" onClick={()=> navigate(routePath.create)}>Post Job</Button>
                </Box>
                    
                <Box>
                <img src={animatedImage} alt="home" style={{width:450, height: 350, borderRadius: 20}}/>
                </Box>
            </Component>
        </div>
    )
}

export default Home;