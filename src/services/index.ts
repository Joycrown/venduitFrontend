export interface UserSignUp {
    full_name: string
    user_type: string
    email: string
    password: string
}
export interface CarrierSignUp {
    full_name: string
    type: string
    email: string
    country: string
    phone_no: string
    city: string
    street_address: string
    company_name: string
    service_offered: string
    company_url: string
    gender: string
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

export interface CreateOrder{
    order_title: string
    brand: string
    model:string
    equipment_Category: string
    equipment_type: string
    dimension_height:  string
    dimension_length: string
    dimension_width: string
    dimension_weight: string
    trailer_preference: string
    on_trailer: string
    collection_area: string
    collection_location: string
    loading_assistance: string
    date_of_collection: string
    delivery_area: string
    delivery_location: string
    off_loading_assistance: string
    date_of_delivery: string
    is_budget: boolean
    budget: string
}

export interface OrderOut{
    order_id: string
    order_title: string
    brand: string
    model:string
    equipment_Category: string
    equipment_type: string
    dimension_height:  string
    dimension_length: string
    dimension_width: string
    dimension_weight: string
    trailer_preference: string
    on_trailer: string
    collection_area: string
    collection_location: string
    loading_assistance: string
    date_of_collection: string
    delivery_area: string
    no_of_pieces: number
    delivery_location: string
    off_loading_assistance: string
    date_of_delivery: string
    is_budget: boolean
    budget: string
    is_assigned: boolean
    is_completed: boolean
    assigned_to: string
    client_id: string
    order_type: string
    quote_id: string
    client: UserOut
    carrier: UserOut
}

export interface OrderId{
    id: string
}


    
 
    