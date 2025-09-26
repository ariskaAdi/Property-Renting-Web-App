interface Window {
    snap: any
}

import { snap } from 'midtrans'
export interface SnapSuccessResult {
  status_code: string;
  status_message: string;
  transaction_id: string;
  order_id: string;
  gross_amount: string;
  payment_type: string;
  transaction_time: string;
  transaction_status: "capture" | "settlement" | "pending";
  fraud_status: "accept" | "deny" | "challenge";
  pdf_url?: string;
  finish_redirect_url?: string;
  // This allows for other payment-specific properties like va_numbers, etc.
  [key: string]: any;
}


export interface SnapErrorResult {
  status_code: string;
  status_message: string;
  [key: string]: any;
}


declare global {
  interface Window {
    snap: {
      pay: (
        token: string,
        options?: {
          onSuccess?: (result: SnapSuccessResult) => void;
          onPending?: (result: SnapSuccessResult) => void;
          onError?: (result: SnapErrorResult) => void;
          onClose?: () => void;
        }
      ) => void;
    };
  }
}