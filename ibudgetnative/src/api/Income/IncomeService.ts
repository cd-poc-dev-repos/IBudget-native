import { nanoid } from "nanoid";
import * as Type from "./IncomeService.type";
import * as Service from "../../services/FirebaseService";

const GetIncomes = async () : Promise<Type.IIncome[] | null> => {
  try {
    const response = await Service.Get('Income');

    return response as any;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

const UpdateIncome = async (income: Type.IIncome) => {
  try {
    console.log('income to update', income);
    const response = await Service.Put(income, 'Income');
    console.log('putResponse', response);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

const CreateIncome = async (income: Type.IIncome) => {
  try {
    const response = await Service.Post(income, 'Income');
 
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export { GetIncomes, UpdateIncome, CreateIncome };
