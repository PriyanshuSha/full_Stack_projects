
import {AppBar, Toolbar, styled} from '@mui/material';
import { Link } from 'react-router-dom';
import { routePath } from '../routes/route';

const StyledAppBar = styled(AppBar)({
    background: '#2d2d2d',
    height: 64,

    '& > div *':{
        textDecoration: 'none',
        color: 'inherit',
        marginRight: 20,
        fontSize: 15
    }
})
const Header =()=> {
    const logo ="https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png";
    return (
       
       <StyledAppBar style={{ position: 'static'}}>
        <Toolbar>
        <Link to={routePath.home}>
        <img src={logo} alt="logo" style={{ width: 95, marginBottom: 6 }} />
        </Link>
        <Link to={routePath.create}> Post a job </Link>
        <Link to ={routePath.posts}>Find jobs</Link>
        </Toolbar>
       </StyledAppBar>
    )
;
}

export default Header;