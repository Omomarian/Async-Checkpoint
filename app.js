//first task
//Iterate with Async/Await:
// function to create a delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Async function to iterate over an array and log each value with a delay
async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await delay(1000); // Wait for 1 second
  }
}

// Example usage:
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);

// second task
//Handling Errors with Async/Await
// function to simulate an API call
const apiCall = () => {
  return new Promise((resolve, reject) => {
    // Simulate a successful API call 70% of the time
    if (Math.random() > 0.3) {
      resolve("API call succeeded!");
    } else {
      reject(new Error("API call failed"));
    }
  });
};

// Async function to handle the API call with error handling
async function awaitCall() {
  try {
    const result = await apiCall();
    console.log(result);
  } catch (error) {
    console.error(
      "An error occurred while making the API call: ",
      error.message
    );
  }
}

// Example usage:
awaitCall();


// third task
//Awaiting Parallel Calls 
// Function to fetch data from a given URL
const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}: ${response.statusText}`);
  }
  return response.json(); // Assuming the response is in JSON format
};

// Async function to handle parallel calls to multiple URLs
async function parallelCalls(urls) {
  try {
    // Use Promise.all to fetch data from all URLs concurrently
    const responses = await Promise.all(urls.map(url => fetchData(url)));
    
    // Log the responses
    console.log('Responses:', responses);
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error('An error occurred:', error.message);
  }
}

// Example usage:
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3',
];

parallelCalls(urls);
