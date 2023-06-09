
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate()
    return (
        navigate('/')
    );
};

export default Logout;