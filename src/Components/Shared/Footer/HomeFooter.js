import React from 'react';
import {Footer} from "flowbite-react";
// import logo from "../../../Assets/iconImage/logo.png" ;
const HomeFooter = () => {
  return (
    <div className='container  mx-auto px-5'>
      <Footer container={true}>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className='rounded-full'>
              <Footer.Brand
                href="https://Scholarnet.com"
                src="https://cdn.dribbble.com/users/2229852/screenshots/10163018/media/b259931291e7624e6902e29fef3bde4e.png?compress=1&resize=400x300"
                alt="Scholarnet Logo"
                name="SCHOLAR NET"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">
                    Flowbite
                  </Footer.Link>
                  <Footer.Link href="#">
                    Tailwind CSS
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">
                    Github
                  </Footer.Link>
                  <Footer.Link href="#">
                    Discord
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link href="#">
                    Terms & Conditions
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="#"
              year={2023}
              by="Copy right by Knight commandos team"

            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <i className="fa-brands fa-facebook-f text-2xl text-green-600"></i>
              <i className="fa-brands fa-twitter text-2xl text-green-600"></i>
              <i className="fa-brands fa-instagram text-2xl text-green-600"></i>
              <i className="fa-brands fa-discord text-2xl text-green-600"></i>
              <i className="fa-brands fa-linkedin text-2xl text-green-600"></i>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default HomeFooter;