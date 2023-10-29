import { Hourglass } from "react-loader-spinner";
import { LoaderWrap } from "./Loader.styled";

export const Loader = () => {
    return (
        <LoaderWrap>
            <Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
/>
        </LoaderWrap>
        
    )
}