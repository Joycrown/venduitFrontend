import { Box, Text, VStack } from '@chakra-ui/react'
import DashboardGif from '../extras/DashboardGif'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../services/store';
import { useCurrentUserQuery } from '../../services/api';
import { RoutePaths } from '../../utils/routes/routePaths';
import { setUser } from '../../services/currentUserSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LandingHeader from '../../components/LandingComponents/landingHeader';

const DashboardPage = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const id = user ? (user?.vendor_id  || user?.buyer_id) : null;
  const {isError, error, isSuccess, data} = useCurrentUserQuery()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data)); // Update user data in the Redux store upon successful query
    } else if (isError && error) {
      navigate(RoutePaths.LOGIN)
      }
      
  },[isSuccess, data, isError, error, dispatch,navigate]);


  return (
   <Box pt={10}>
    <LandingHeader/>
    <VStack pb={4}>
      <Text color="blue"> Hello!</Text>
      <Text color="blue"> {user?.full_name} ({user?.user_type})</Text>
      <Text color="blue"> with the id: {id} </Text>
    </VStack>
    <DashboardGif/>
   </Box>
  )
}

export default DashboardPage