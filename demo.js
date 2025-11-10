import React, { useState, useEffect } from "react";
import Narrow from "../Components/Common/Narrow";

export default function Home2Content() {
  const isLargeScreen = () => window.innerWidth > 1024;
  const [isLarge, setIsLarge] = useState(isLargeScreen());

  useEffect(() => {
    // Function to handle resize event
    const handleResize = () => {
      setIsLarge(isLargeScreen());
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="bg-gray-50">
        <Narrow>
          <div className="pt-10 max-lg:text-center">
            <div className="home1para">OUR TEAM</div>
            <div className="flex justify-between max-md:flex-col my-2">
              <div className="text-5xl max-lg:text-3xl font-bold">
                Our team consists of
                <br />
                world class experts
              </div>
              <div className="w-6/12 text-xl max-md:my-10 max-lg:w-8/12 max-md:mx-auto">
                We are proud to introduce you to the talented individuals who
                make up our consultancy&apos;s backbone, each contributing their
                unique skills and wealth of experience to drive transformative
                results.
              </div>
            </div>
          </div>
  </Narrow>

  <Narrow className="pt-5">
          <div
            className={`flex max-lg:flex-col gap-5 ${
              isLarge ? " stickycard1" : " "
            } `}
          >
            <div className="w-5/12 p-3 bg-white rounded-2xl max-lg:w-10/12 max-lg:mx-auto">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/team-2.jpg"
                className="mx-auto"
                alt="image1"
              />
            </div>
            <div className="flex flex-col w-7/12 bg-white rounded-2xl p-4 max-lg:w-11/12 max-lg:mx-auto max-lg:p-1">
              <div className="flex ">
                <div
                  style={{ width: "12px", height: "12px" }}
                  className="bg-[#EC6B5E] rounded-full"
                ></div>
                <div
                  style={{ width: "12px", height: "12px" }}
                  className="bg-[#F4BE4F] mx-2 rounded-full"
                ></div>
                <div
                  style={{ width: "12px", height: "12px" }}
                  className="bg-[#61C554] rounded-full"
                ></div>
              </div>
              <div className="p-4 max-lg:p-1">
                <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-3 mt-2 mb-5">
                  <div className="flex items-center p-3 bg-blue-50 rounded-xl ">
                    <span className="p-2 bg-white rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        width="12.25"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="#1351d8"
                          d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
                        />
                      </svg>
                    </span>
                    <span className="pl-2">Annie Coral </span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-xl">
                    <span className="p-2 bg-white rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        width="12.25"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="#1351d8"
                          d="M368 80h32v32H368V80zM352 32c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32V160c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H352zM96 160c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32V160zM48 400H80v32H48V400zm320 32V400h32v32H368zM48 112V80H80v32H48z"
                        />
                      </svg>
                    </span>
                    <span className="pl-2">Web Designer</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-xl">
                    <span className="p-2 bg-white rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        width="10.5"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="#1351d8"
                          d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                        />
                      </svg>
                    </span>
                    <span className="pl-2">San francisco, USA</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-xl">
                    <span className="p-2 bg-white rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        width="15.75"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="#1351d8"
                          d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
                        />
                      </svg>
                    </span>
                    <span className="pl-2">5 Years Experience</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 max-lg:p-1 rounded-xl">
                  In the ever-evolving landscape of business, are in robust and
                  well defined strategies is the compassing that guides your
                  journey to success. At Strategic Business Solutions, we
                  specialize in crafting business strategies that go beyond mere
                  plans. They are blueprints for growth, innovation, solution
                  and enduring compassing that prosperity. At Strategic Business
                  Solutions.
                </div>
              </div>
            </div>
          </div>
          <div
            className={`flex max-lg:flex-col gap-5 my-4  ${
              isLarge ? " stickycard2" : " "
            } `}
          >
            <div className="w-5/12 p-3 bg-white rounded-2xl  max-lg:w-10/12 max-lg:mx-auto">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/team-1.jpg"
                className="mx-auto"
                alt="image2"
              />
            </div>
            <div className="flex flex-col w-7/12 bg-white rounded-2xl p-4 max-lg:w-11/12 max-lg:mx-auto max-lg:p-1">
              <div className="flex ">
                <div
                  style={{ width: "12px", height: "12px" }}
                  className="bg-[#EC6B5E] rounded-full"
                ></div>
                <div
                  style={{ width: "12px", height: "12px" }}
                  className="bg-[#F4BE4F] mx-2 rounded-full"
                ></div>
                <div
                  style={{ width: "12px", height: "12px" }}
                  className="bg-[#61C554] rounded-full"
                ></div>
              </div>
              <div className="p-4 max-lg:p-1">
                <div className="grid grid-cols-2 gap-3 mt-2 mb-5 max-lg:grid-cols-1">
                  <div className="flex items-center p-3 bg-blue-50 rounded-xl">
                    <span className="p-2 bg-white rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        width="12.25"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="#1351d8"
                          d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
                        />
                      </svg>
                    </span>
                    <span className="pl-2">Henderson Mario</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-xl">
                    <span className="p-2 bg-white rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        width="12.25"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="#1351d8"
                          d="M368 80h32v32H368V80zM352 32c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32V160c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H352zM96 160c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32V160zM48 400H80v32H48V400zm320 32V400h32v32H368zM48 112V80H80v32H48z"
                        />
                      </svg>
                    </span>
                    <span className="pl-2">Web Designer</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-xl">
                    <span className="p-2 bg-white rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        width="10.5"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="#1351d8"
                          d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                        />
                      </svg>
                    </span>
                    <span className="pl-2">Melbourne, AUS</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-xl">
                    <span className="p-2 bg-white rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        width="15.75"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="#1351d8"
                          d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
                        />
                      </svg>
                    </span>
                    <span className="pl-2">7 Years Experience</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl max-lg:p-1">
                  In the ever-evolving landscape of business, are in robust and
                  well defined strategies is the compassing that guides your
                  journey to success. At Strategic Business Solutions, we
                  specialize in crafting business strategies that go beyond mere
                  plans. They are blueprints for growth, innovation, solution
                  and enduring compassing that prosperity. At Strategic Business
                  Solutions.
                </div>
              </div>
            </div>
          </div>
          <div
            className={`flex max-lg:flex-col gap-5 mt-4  ${
              isLarge ? " stickycard3" : " "
            } `}
          >
            <div className="w-5/12  p-3 bg-white rounded-2xl max-lg:w-10/12 mx-auto">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/team-3.jpg"
                className="mx-auto"
                alt="image3"
              />
            </div>
            <div className="flex flex-col w-7/12 bg-white rounded-2xl p-4  max-lg:w-11/12 max-lg:mx-auto max-lg:p-1">
              <div className="flex ">
                <div
                  style={{ width: "12px", height: "12px" }}
                  className="bg-[#EC6B5E] rounded-full"
                ></div>
                <div
                  style={{ width: "12px", height: "12px" }}
                  className="bg-[#F4BE4F] mx-2 rounded-full"
                ></div>
                <div
                  style={{ width: "12px", height: "12px" }}
                  className="bg-[#61C554] rounded-full"
                ></div>
              </div>
              <div className="p-4 max-lg:p-0">
                <div className="grid grid-cols-2 gap-3 mt-2 mb-5 max-lg:grid-cols-1">
                  <div className="flex items-center p-3 bg-blue-50 rounded-xl">
                    <span className="p-2 bg-white rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        width="12.25"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="#1351d8"
                          d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
                        />
                      </svg>
                    </span>
                    <span className="pl-2">Elsa Hermione</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-xl">
                    <span className="p-2 bg-white rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        width="12.25"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="#1351d8"
                          d="M368 80h32v32H368V80zM352 32c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32V160c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H352zM96 160c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32V160zM48 400H80v32H48V400zm320 32V400h32v32H368zM48 112V80H80v32H48z"
                        />
                      </svg>
                    </span>
                    <span className="pl-2">Senior Developer</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-xl">
                    <span className="p-2 bg-white rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        width="10.5"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="#1351d8"
                          d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                        />
                      </svg>
                    </span>
                    <span className="pl-2">Edinburgh, UK</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-xl">
                    <span className="p-2 bg-white rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        width="15.75"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="#1351d8"
                          d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
                        />
                      </svg>
                    </span>
                    <span className="pl-2">3 Years Experience</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  In the ever-evolving landscape of business, are in robust and
                  well defined strategies is the compassing that guides your
                  journey to success. At Strategic Business Solutions, we
                  specialize in crafting business strategies that go beyond mere
                  plans. They are blueprints for growth, innovation, solution
                  and enduring compassing that prosperity. At Strategic Business
                  Solutions.
                </div>
              </div>
            </div>
          </div>
        </Narrow>
      </div>

      

  <Narrow className="max-md:p-3 py-10">
        <div className="home1para">CONTACT </div>
        <div className="flex justify-between max-md:flex-col my-2">
          <div className="text-5xl max-lg:text-3xl font-bold">
            We have branches all <br /> over the world
          </div>
          <div className="w-6/12 max-xl:w-full text-xl">
            Reach out to us through the contact form below, and a member of our
            dedicated team will respond promptly. We&apos;re here to listen, assist,
            and collaborate.
          </div>
        </div>
        <div className="bg-[#F3F6FD] p-2 rounded-lg my-5">
          <div className="bg-[#1351d80d] p-20 border-[#1351d81a] border-2 max-lg:p-10 max-md:p-5">
            <div className="flex flex-col bg-white p-3 rounded-xl">
              <div className="flex macicons ">
                <div
                  style={{ width: "12px", height: "12px" }}
                  className="bg-[#EC6B5E] rounded-full"
                ></div>
                <div
                  style={{ width: "12px", height: "12px" }}
                  className="bg-[#F4BE4F] mx-2 rounded-full"
                ></div>
                <div
                  style={{ width: "12px", height: "12px" }}
                  className="bg-[#61C554] rounded-full"
                ></div>
              </div>
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/map.svg"
                alt="map"
                className="mx-auto my-5"
              />
            </div>
            <div className="bg-white p-5 rounded-xl my-5 max-md:p-3">
              <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1">
                <div className="flex flex-col items-center">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/support-icon.svg"
                    alt=""
                    style={{ height: "50px", width: "50px" }}
                  />
                  <div className="font-semibold my-3">Contact Info</div>
                  +91-965-090-0190
                  <br />
                  bluebase@mail.com
                  <br />
                  mandro@mail.com
                  <br />
                </div>
                <div className="flex flex-col items-center text-center">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/map-icon.svg"
                    alt=""
                    style={{ height: "50px", width: "50px" }}
                  />
                  <span className="font-semibold text-center mt-3">
                    Visit our office
                  </span> <br />
                  246, Block-C4F, <br /> Janakpuri, Delhi-110058.
                </div>
                <div className="flex  flex-col justify-around ">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="40"
                      width="25"
                      viewBox="0 0 512 512"
                      className="mx-3"
                    >
                      {" "}
                      <path
                        fill="#1351D8"
                        d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                      />
                    </svg>{" "}
                    Facebook
                  </a>

                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="40"
                      width="25.75"
                      viewBox="0 0 576 512"
                      className="mx-3"
                    >
                      {" "}
                      <path
                        fill="#1351D8"
                        d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                      />
                    </svg>
                    Youtube
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/company/panacee-software-solutions/"
                    className="flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="40"
                      width="25.25"
                      viewBox="0 0 448 512"
                      className="mx-3"
                    >
                      {" "}
                      <path
                        fill="#1351D8"
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                      />
                    </svg>
                    Linked In
                  </a>

                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                    accordion
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="40"
                      width="25.25"
                      viewBox="0 0 448 512"
                      className="mx-3"
                    >
                      {" "}
                      <path
                        fill="#1351D8"
                        d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"
                      />
                    </svg>
                    Instagram
                  </a>
                </div>
                <div className="flex flex-col justify-between px-4 py-3 max-md:text-center">
                  <div className="">
                    <div className="text-xl">
                      <span className="text-3xl">22+ </span>Years
                    </div>
                    <div className="text-blue-600">Field Experience</div>
                  </div>
                  <hr className="my-3" />
                  <div className="">
                    <div className="text-xl">
                      <span className="text-3xl">950+ </span>Projects
                    </div>
                    <div className="text-blue-600">Done Around World</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Narrow>
    </>
  );
}