import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { VideoCard, ChannelCard, Loader } from "./";

const Root = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="flex-start"
      alignItems="flex-start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Root key={idx} sx={{ margin: "auto" }}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Root>
      ))}
    </Stack>
  );
};

export default Videos;
