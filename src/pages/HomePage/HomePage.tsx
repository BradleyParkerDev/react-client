import { Button } from "@/components/ui/button";

const HomePage = () => {

    // Make a GET request to fetch data from the FastAPI server
fetch("http://localhost:5001/")
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json(); // Parse JSON response
})
.then(data => {
  console.log("Response data:", data); // Handle response data
})
.catch(error => {
  console.error("Fetch error:", error); // Handle errors
});

    return (
        <div>
            
            HomePage
            <Button className="transform transition ease-out duration-200 hover:scale-110">
                Hover to Enlarge
            </Button>
        </div>
    )
}

export default HomePage;