import { Box } from "@chakra-ui/react";

const Footer = () => {
const currentYear = new Date().getFullYear()

  return(
    <Box
      textAlign="center"
      p="5"
      color="gray.600"
      borderTop="1px"
      borderColor="gray.100"
      fontFamily="Helvetica, sans-serif"
    >
     © {currentYear} RealStars, Inc.
    </Box>
  )
};

export default Footer;
