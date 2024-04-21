import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  amount: string;
  product_desc: string;
  product_img: File | null;
  product_name: string;
}

interface ProductState {
  vendor_id: string;
  products: Product[];
}

const initialState: ProductState = {
  vendor_id: '',
  products: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setVendorId: (state, action: PayloadAction<string>) => {
      state.vendor_id = action.payload;
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setVendorId, setProducts } = productSlice.actions;
export default productSlice.reducer;
