import Image from "next/image"

export default function Page() {

  const DATA_URL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

  
  return (
    <div className="p-4 bg-yellow-300">
      <header>
        <h1>welcome to my product page</h1>
        <button 
          className="border-neutral-200 bg-black px-6"
          //onClick={}
        >
            Fetch products!
        </button>
      </header>
        Hello welcome to my APi page
    </div>
  );
}