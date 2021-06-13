import { getCookie } from '../../Cookie/index';

// -----------------------  Send GET Request to DeviceType endpoint  -------------------------------
export async function getDeviceType() {
    const app_token = getCookie('app_token') ? getCookie('app_token') : null;
  
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `${app_token}`
        }
    };
  
    try {
        let response = await fetch(`/devicetype?limit=40&page=1`, requestOptions);
        let data = await response.json();
        if (data) return data[0];
        else return null;
  
    } catch (error) {
        console.error(error);
    }
}