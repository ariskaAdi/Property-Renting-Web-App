export type TenantTypes = {
  id: string;
  user_id: string;
  company_name: string;
  address: string;
  phone_number: string;
  logo: string;
};

export type updateTenant = {
  company_name: string;
  address: string;
  phone_number: string;
  logo: string | null;
};
