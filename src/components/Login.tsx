import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import a from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HashRouter, Link } from "react-router-dom";
import { Router } from "../Router";

// const options = [
//   {
//     name: "Enable backdrop (default)",
//     scroll: false,
//     backdrop: true,
//   },
//   {
//     name: "Disable backdrop",
//     scroll: false,
//     backdrop: false,
//   },
//   {
//     name: "Enable body scrolling",
//     scroll: true,
//     backdrop: false,
//   },
//   {
//     name: "Enable both scrolling & backdrop",
//     scroll: true,
//     backdrop: true,
//   },
// ];

export default function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <img
        src="https://yt3.ggpht.com/rs6MPZZxmzc1EqXOiv1I2pzjm501qQOXrS3rr_mgz24U9vFBnfhp1LSuVbtj0P1kNawZRxWIZg=s176-c-k-c0x00ffffff-no-rj"
        onClick={toggleShow}
        className="rounded-circle"
        style={{
          width: "50px",
          cursor: "pointer",

        }}
      />
      {/* <Button variant="primary" onClick={toggleShow} className="me-2">
        Sprite
      </Button> */}
      <Offcanvas
        show={show}
        placement="end"
        onHide={handleClose}
        scroll={false}
        backDrop={true}
        className="size-sm bg-dark text-light"
        bg="dark"
        
      >
        <Offcanvas.Header closeButton className="fluid">
          <img
            src="https://yt3.ggpht.com/rs6MPZZxmzc1EqXOiv1I2pzjm501qQOXrS3rr_mgz24U9vFBnfhp1LSuVbtj0P1kNawZRxWIZg=s176-c-k-c0x00ffffff-no-rj"
            onClick={toggleShow}
            
            className="rounded-circle d-flex"
            style={{
                width: "50px",
                cursor: "pointer",
            }}
          />
            <Offcanvas.Title className="me-auto p-2"> User Name</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <HashRouter>
            <Link to={"Personal"}>Personal Info</Link>
            <br/>
            <Link to="LogOut">Log Out</Link>
          </HashRouter>
          {/* <br /> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

// function Example() {
//   return (
//     <>
//       {options.map((props, idx) => (
//         <OffCanvasExample key={idx} {...props} />
//       ))}
//     </>
//   );
// }

// render(<Example />);
