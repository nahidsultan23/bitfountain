import { getCookie } from '../../Cookie/index';
import { AddModelT } from '../../Components/CustomTypes';

// -----------------------  Send GET Request to ModelType endpoint  -------------------------------
export async function getModelType() {
    const app_token = getCookie('app_token') ? getCookie('app_token') : null;
  
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `${app_token}`
        }
    };
  
    try {
        let response = await fetch(`/overview/modeltype`, requestOptions);
        let data = await response.json();

        if (data) return data;
        else return null;
  
    } catch (error) {
        throw new Error();
    }
}

// -----------------------  Send GET Request to ModelData endpoint  -------------------------------
export async function getModelData(brand: string, model: string) {
    const app_token = getCookie('app_token') ? getCookie('app_token') : null;
  
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `${app_token}`
        }
    };
  
    try {
        let response = await fetch(`/overview/modeldata/${brand}/${model}`, requestOptions);
        let data = await response.json();
    
        if (data) return data;
        else return null;
  
    } catch (error) {
        throw new Error();
    }
}

// -----------------------  Send POST Request to AddModel endpoint  -------------------------------
export async function addNewModelReq(postData: AddModelT) {
    const app_token = getCookie('app_token') ? getCookie('app_token') : null;
  
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `${app_token}`
        },
        body: JSON.stringify(postData)
    };
  
    try {
        let response = await fetch(`/devicemodel`, requestOptions);
        let data = await response.json();
    
        if (data) return data;
        else return null;
    } catch (error) {
        throw new Error();
    }
}