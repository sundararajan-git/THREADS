import { useEffect, useState } from "react";
import Loader from "../../COMPS/Loader";
import { HStack, VStack } from "@chakra-ui/react";
import Navbar from "@/COMPS/NAVBAR/Navbar";
import TrendPage from "../TRENDPAGE/TrendPage";
import SideBar from "@/COMPS/SIDEBAR/SideBar";
import PostPage from "../POSTPAGE/PostPage";

const Home = () => {
  // CONTROL THE COMPONENTS
  const [control, setControl] = useState({
    postPage: false,
    pageLoading: true,
  });

  // GET PRODUCTS FROM THE GLOBALS STATE
  // const products = useSelector((state: RootState) => state.products);

  // DISPATH FOR PROFDUCTS
  // const dispatch = useDispatch();

  // GET ININITAL PRODUCTS
  useEffect(() => {
    setControl((prev) => {
      const clone = { ...prev };
      clone.pageLoading = false;
      return clone;
    });
  }, []);

  return (
    <>
      {control?.pageLoading ? (
        <div className="flex items-center justify-center w-full h-screen">
          <Loader />
        </div>
      ) : (
        <HStack
          w={"full"}
          h={"full"}
          overflow={"auto"}
          justify={"space-between"}
        >
          <SideBar />

          <VStack
            w={"full"}
            h={"full"}
            overflow={"auto"}
            justify={"space-between"}
          >
            <Navbar />
            {true ? <PostPage /> : <TrendPage />}
          </VStack>
        </HStack>
      )}
    </>
  );
};

export default Home;
