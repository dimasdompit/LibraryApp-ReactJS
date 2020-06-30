// import React, { useState } from "react";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Input,
//   InputGroup,
//   InputGroupAddon,
//   Button,
// } from "reactstrap";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

// import Styles from "../../../styles/pages/Home/Home.module.css";

// const TopNav = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   const homeDropdown = {
//     color: "black",
//     fontWeight: "600",
//   };

//   return (
//     <>
// <Navbar light expand="md" className={Styles.homeTopnav}>
//   <NavbarToggler onClick={toggle} />
//   <Collapse isOpen={isOpen} navbar>
//     <Nav className="mr-auto" navbar>
//       <UncontrolledDropdown nav inNavbar>
//         <DropdownToggle nav caret style={homeDropdown}>
//           All Categories
//         </DropdownToggle>
//         <DropdownMenu right>
//           <DropdownItem>Title</DropdownItem>
//           <DropdownItem>Genre</DropdownItem>
//           <DropdownItem>Author</DropdownItem>
//         </DropdownMenu>
//       </UncontrolledDropdown>
//       <UncontrolledDropdown nav inNavbar>
//         <DropdownToggle nav caret style={homeDropdown}>
//           All Time
//         </DropdownToggle>
//         <DropdownMenu right>
//           <DropdownItem>Newest Books</DropdownItem>
//           <DropdownItem>Old Books</DropdownItem>
//         </DropdownMenu>
//       </UncontrolledDropdown>
//       <InputGroup>
//         <InputGroupAddon addonType="prepend">
//           <Button className={Styles.homeSearchBtn}>
//             <FontAwesomeIcon icon={faSearch} />
//           </Button>
//         </InputGroupAddon>
//         <Input className={Styles.homeSearchInput} />
//       </InputGroup>
//       <NavbarBrand>Library</NavbarBrand>
//     </Nav>
//   </Collapse>
// </Navbar>
//     </>
//   );
// };

// export default TopNav;
