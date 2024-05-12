/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {UserSignUp,UserOut, ResponseData, Login, ForgotPassword, SetPassword, RefreshToken, PaymentMadeOut} from  './index'
import { PaymentData } from '../components/modals/dashboardModals/PaymentProcess';

const url = import.meta.env.VITE_PROD_ENV === 'true' ? import.meta.env.VITE_SERVER_HOST : import.meta.env.VITE_DEV_SERVER_HOST;

export const VenduitApi = createApi({
  reducerPath: 'VenduitApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: url,
    prepareHeaders: (headers) => {
      // Get the token from localStorage
      const token = localStorage.getItem('access_token');
      // If token is found, add it to the headers
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }), // Replace '/api' with your actual API base URL
    
    endpoints: (builder) => ({
    userSignup: builder.mutation<UserSignUp, void>({
      query: (body:any) =>  ({
        url:  '/signup',
        method: 'POST',
        body
      })
    }),
    login: builder.mutation<ResponseData, Login>({
      query: (values:Login) =>  ({
        url:  '/login',
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify(
          `grant_type=&username=${values.email}&password=${values.password}&scope=&client_id=&client_secret=`
        ),
      })
    }),
    forgotpassword:builder.mutation<void, ForgotPassword>({
      query:(body:ForgotPassword) => ({
        url: "/forgot_password",
        method: 'POST',
        body
      })
    }),
    setpassword:builder.mutation<void, SetPassword>({
      query:(body:SetPassword) => ({
          url:`/set_password/?token=${body.token}`,
          method: 'PUT',
          body
      })
    }),
    refreshToken:builder.mutation<ResponseData,RefreshToken>({
      query:(body:RefreshToken) => ({
        url:'/token/refresh',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        method: 'POST',
        body: JSON.stringify(
          `grant_type=&refresh_token=${body.token}&scope=&client_id=&client_secret=`
        ),
      })
    }),
    currentUser: builder.query<UserOut, void>({
      query: () => "/current_user"
    }),
    getVendor: builder.query<UserOut, string>({
      query: (id) => `/vendor/${id}`
    }),
    makePayment: builder.mutation<PaymentMadeOut, PaymentData>({
      query: (paymentData: PaymentData) => {
        const formData = new FormData();
        formData.append('vendor_id', paymentData.vendor_id);
        formData.append('product_name', paymentData.product_name);
        formData.append('product_desc', paymentData.product_desc);
        formData.append('amount', paymentData.amount);
        // Append product images if available
        if (paymentData.product_images) {
          for (const image of paymentData.product_images) {
            // Ensure 'image' is a Blob object before appending
            if (image instanceof Blob) {
              formData.append('product_images', image, image.name);
            } else {
              console.error('Invalid file format:', image);
            }
          }
        }
        return {
          url: '/create_order',
          method: 'POST',
          body: formData,
        };
      },
    }),
    
    
    
  }),
  
});

export const { useUserSignupMutation,
  useLoginMutation, 
  useForgotpasswordMutation,
  useSetpasswordMutation,
  useRefreshTokenMutation,
  useCurrentUserQuery,
  useGetVendorQuery,
  useMakePaymentMutation



} = VenduitApi;
