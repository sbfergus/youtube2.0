import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromApi";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight="bold"
        ml={{ sm: "100px" }}
        mb={3}
        color="white"
      >
        Search Results for:{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex" width="80%" sx={{ margin: "auto" }}>
        {/* <Box sx={{ mr: { sm: "100px" } }} /> */}
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;

// sx={{ overflowY: "auto", height: "90vh", flex: 2 }}
