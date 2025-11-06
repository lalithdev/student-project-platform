import axios from 'axios';

// Example dummy fetch - replace URL with real API if available
export async function fetchDummyProjects() {
  try {
    // Example public placeholder data
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
    // Map data to your project structure
    return response.data.map(item => ({
      name: item.title
    }));
  } catch (error) {
    throw error;
  }
}
