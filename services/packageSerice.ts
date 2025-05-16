import api from "./api";
import { PackageType } from "@/types/PackageType";

interface getAllpackageResponseType {
  message: string,
  packages: PackageType[]
}

export const getAllPackages = async () => {
  try {
    const response = await api.get('/packages');
    return response.data as getAllpackageResponseType;
  } catch (error) {
    console.log(error);
    return null;
  }
}