import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <Container maxW={"1140px"}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{
          base: "column",
          sm: "row",
        }}
      >

        <Text
          fontSize={{ base: 22, sm: 28 }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          bgGradient={"linear(to-r, cyan.500, blue.500)"}
          bgClip={"text"}
        >
          <Link to="/">Task Manager</Link>
        </Text>

        {/* <HStack spacing={} alignItems={"center"}>
          <Link to="/create">Create Task</Link>
          <Button>
            <PlusSquareIcon />
          </Button>
        </HStack> */}
      </Flex>
    </Container>
  )
}

export default NavBar