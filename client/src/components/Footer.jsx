import { Container } from "@mantine/core";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <Container size={"xl"}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6 items-center my-8  border-t border-[#1E1C41]">
          <p className="text-base text-center sm:text-start text-gray-500">
            @ 2024 Powered By{" "}
            <Link to="/" className="text-green-500 font-semibold ">
              ProEd<span className="text-rose-400">.</span>{" "}
            </Link>
            All Rights Reserved
          </p>
          <div className="lg:col-start-10 lg:col-span-3">
            <ul className="relative flex justify-end items-center gap-4">
              <li className="">
                <Link
                  to="/"
                  className="text-base text-gray-500 pr-4 border-r leading-3  border-[#1E1C41]"
                >
                  Terms of Use
                </Link>
              </li>
              <li className="">
                <Link to="/" className="text-base text-gray-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
