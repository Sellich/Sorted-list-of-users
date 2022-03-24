import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";

interface IPreloaderProps{
   width: string;
   height: string;
}

const Preloader: React.FC<IPreloaderProps> = ({width, height}) => {
   return(
      <Box >
            <Skeleton width={width} height={height}/>
            <Skeleton width={width} height={height}/>
            <Skeleton width={width} height={height}/>
            <Skeleton width={width} height={height}/>
            <Skeleton width={width} height={height}/>
            <Skeleton width={width} height={height}/>
      </Box>
   )
}

export default Preloader;