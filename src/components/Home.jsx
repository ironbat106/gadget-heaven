import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Gadgets from "./Gadgets/Gadgets";
import Category from "./Gadgets/Category";


const Home = () => {
    const categories = useLoaderData()
    // console.log(categories);
    return (
        <div className="rounded-3xl">
            <Banner></Banner>

            <div className="flex justify-center">
                <h1 className="text-3xl font-bold my-6">Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className="flex gap-5 w-10/12 mx-auto">
                <div className="shadow-lg w-3/12 h-fit rounded-lg ">
                    {
                        categories.map(category => <Category key={category.id} category={category}></Category>)
                    }
                </div>
                <div className="border-2  w-9/12 ">
                    <Outlet></Outlet>
                </div>

            </div>


        </div>
    );
};

export default Home;