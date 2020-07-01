// import React, { Component } from "react";
// import {
//   Col,
//   Collapse,
//   Nav,
//   Navbar,
//   NavbarBrand,
//   NavbarToggler,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Input,
//   InputGroup,
//   InputGroupAddon,
//   Button,
//   Form,
// } from "reactstrap";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

// import Styles from "../../styles/pages/Home/Home.module.css";

// class SearchBar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       search: "",
//     };
//   }

//   handleInputChange = (event) => {
//     event.preventDefault();
//     const search = this.props.search;
//     const params = new URLSearchParams(search);
//     console.log(params);
//     this.setState({
//       search: event.target.value,
//     });
//   };

//   render() {
//     return (
//       <>
//         <InputGroup className={Styles.homeSearch}>
//           <InputGroupAddon addonType="prepend">
//             <Button type="submit" className={Styles.homeSearchButton}>
//               <FontAwesomeIcon icon={faSearch} />
//             </Button>
//           </InputGroupAddon>
//           {/* <Form> */}
//           <Input
//             type="text"
//             className={Styles.homeSearchInput}
//             value={this.state.search}
//             onChange={this.props.onChange}
//             placeholder="Search Book"
//           />
//           {/* </Form> */}
//         </InputGroup>
//       </>
//     );
//   }
// }

// export default SearchBar;
