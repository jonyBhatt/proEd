import { Link } from "react-router-dom";
import { Button, Container, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import { Divider } from "@mantine/core";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { FaInstagram, FaLinkedin, FaX } from "react-icons/fa6";

export const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <header>
      <div className="transition-all duration-500 sticky top-0 z-40 lg:border-b border-[#1E1C41]">
        <nav>
          <Container size={"xl"}>
            <div className="py-8 lg:py-0 px-8 relative">
              {/** Desktop Nav */}
              <div className="grid grid-cols-2 lg:grid-cols-12 items-center gap-6">
                <div className="lg:col-start-1 lg:col-span-1">
                  <Link to="/" className="text-green-500 lg:text-5xl text-2xl font-bold tracking-wide ">
                    ProEd<span className="text-rose-400">.</span>
                  </Link>
                </div>
                {/** Nav Links */}
                <div className="hidden lg:block lg:col-span-7 lg:col-start-3">
                  <ul className="flex justify-center">
                    <li className="group relative">
                      <Link
                        to="/"
                        className="px-5 lg:px-3 2xl:px-4 py-10 lg:py-5 2xl:py-8 leading-6 text-base lg:text-sm font-semibold block group-hover:text-green-400 transition-all duration-500"
                      >
                        Home
                      </Link>
                    </li>

                    <li className="group relative">
                      <Link
                        to="/about"
                        className="px-5 lg:px-3 2xl:px-4 py-10 lg:py-5 2xl:py-8 leading-6 text-base lg:text-sm font-semibold block group-hover:text-green-400 transition-all duration-500"
                      >
                        About
                      </Link>
                    </li>

                    <li className="group relative">
                      <Link
                        to="/course"
                        className="px-5 lg:px-3 2xl:px-4 py-10 lg:py-5 2xl:py-8 leading-6 text-base lg:text-sm font-semibold block group-hover:text-green-400 transition-all duration-500"
                      >
                        Course
                      </Link>
                    </li>

                    <li className="group relative">
                      <Link
                        to="/contact"
                        className="px-5 lg:px-3 2xl:px-4 py-10 lg:py-5 2xl:py-8 leading-6 text-base lg:text-sm font-semibold block group-hover:text-green-400 transition-all duration-500"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                {/** Buttons*/}
                <div className="lg:col-start-10 lg:col-span-3">
                  <ul className="relative flex justify-end items-center gap-4">
                    <li className="hidden lg:block">
                      <Link to="/" className="">
                        <Button
                          variant="outline"
                          size="md"
                          color="green"
                          c={"white"}
                        >
                          Login
                        </Button>
                      </Link>
                    </li>
                    <li className="hidden lg:block">
                      <Link to="/" className="">
                        <Button variant="filled" size="md" color="green">
                          Get Started Free
                        </Button>
                      </Link>
                    </li>
                    <li className="block lg:hidden">
                      <button onClick={open} className="bg-transparent">
                        <HiOutlineMenuAlt4 size={24} />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {/** Mobile nav */}
              <Drawer.Root
                opened={opened}
                onClose={close}
                closeButtonProps={{
                  icon: <IoCloseOutline size={20} stroke={1.5} />,
                }}
              >
                <Drawer.Overlay />
                <Drawer.Content>
                  <Drawer.Header>
                    <Drawer.Title>Logo</Drawer.Title>
                    <Drawer.CloseButton />
                  </Drawer.Header>
                  <Drawer.Body>
                    <Divider my={"lg"} />
                    <div className="flex flex-col  items-start">
                      <Link
                        to="/"
                        className="px-5 py-7 leading-6 text-base font-semibold block hover:text-green-400 transition-all duration-500"
                      >
                        Home
                      </Link>
                      <Link
                        to="/"
                        className="px-5 py-7 leading-6 text-base font-semibold block hover:text-green-400 transition-all duration-500"
                      >
                        About
                      </Link>
                      <Link
                        to="/"
                        className="px-5 py-7 leading-6 text-base font-semibold block hover:text-green-400 transition-all duration-500"
                      >
                        Features
                      </Link>
                      <Link
                        to="/"
                        className="px-5 py-7 leading-6 text-base font-semibold block hover:text-green-400 transition-all duration-500"
                      >
                        Contact
                      </Link>
                      <ul className="relative flex justify-end items-center gap-4 px-5">
                        <li className="block lg:hidden">
                          <Link to="/" className="">
                            <Button
                              variant="outline"
                              size="md"
                              color="green"
                              c={"white"}
                            >
                              Login
                            </Button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <Divider my={"xl"} />
                    <Flex
                      justify={"start"}
                      gap={"md"}
                      align={"center"}
                      style={{ paddingLeft: "1.25rem", paddingTop: ".5rem" }}
                    >
                      <h4 className="font-semibold text-2xl">Follow us:</h4>
                      <Link to="/instagram.com">
                        <FaInstagram size={24} />
                      </Link>
                      <Link to="/linkedin.com">
                        <FaLinkedin size={24} />
                      </Link>
                      <Link to="/x.com">
                        <FaX size={24} />
                      </Link>
                    </Flex>
                  </Drawer.Body>
                </Drawer.Content>
              </Drawer.Root>
            </div>
          </Container>
        </nav>
      </div>
    </header>
  );
};
