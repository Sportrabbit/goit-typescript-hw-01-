import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

interface UserData {
    id: number;
    name: string;
    email: string;
}
  
async function main() {
    const url = 'https://example.com/user/1';
    try {
      const userData = await fetchData<UserData>(url);
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
}
  
main();