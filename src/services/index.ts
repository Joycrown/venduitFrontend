export interface UserSignUp {
    full_name: string
    user_type: string
    email: string
    password: string
}

export interface UserOut {
    vendor_id: string
    buyer_id: string
    full_name: string
    email: string
    user_type: string
   
}

export interface Login {
    email: string
    password: string
}

export interface ResponseData {
    access_token: string;
    refresh_token: string;
    current_user: string;
    token_type: string;
  }

export interface ForgotPassword{
    email: string
}
export interface SetPassword{
    new_password: string
    token: string
}
export interface RefreshToken{
    token: string
}


export interface OrderId{
    id: string
}

export interface VendorOut{
  vendor_id: string
  full_name: string
  username: string
  email: string
  city : string
  country: string
  gender: string
  date_of_birth: string
  is_scammed: string
  use_venduit: string
  phone_no: string
  user_type: string
  is_verified: boolean
  business_name: string
  business_category: string
  business_reach: string
  business_social_links: [string]
  profile_picture: string
  business_startDate: string
  created_at : string
}

export interface OrderItemOut{
    order_id : string
    product_name : string
    product_desc :string
    price :string
    product_image : string
}

export interface PaymentMadeOut{
    order_id : string
    status: string
    is_dispute: boolean
    buyer_id : string
    vendor_id: string
    ordered: [OrderItemOut]
    vendor: VendorOut
    created_at: string
}

export interface PaymentMade{
    vendor_id:string
    product_name: string
    product_Desc: string
    amount: string
    product_images:string

}
 
    