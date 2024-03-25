import { nanoid } from "nanoid";
import * as Type from "./SavingsService.type";
import * as Service from "../../services/FirebaseService";

const GetSavings = async () : Promise<Type.ISavings[] | null> => {
  try {
    const response = await Service.Get('Savings');

    return response as any;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

const UpdateSavings = async (Savings: Type.ISavings) => {
  try {
    const response = await Service.Put(Savings, 'Savings');

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

const CreateSavings = async (Savings: Type.ISavings) => {
  try {
    const response = await Service.Post(Savings, 'Savings');
 
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export { GetSavings, UpdateSavings, CreateSavings };
