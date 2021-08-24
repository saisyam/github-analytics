<script>
    import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
      Dropdown,
      DropdownToggle,
      DropdownMenu,
      DropdownItem,
    } from 'sveltestrap';
  
    let isOpen = false;
  
    function handleUpdate(event) {
      isOpen = event.detail.isOpen;
    }
  </script>

  <Navbar color="primary" light expand="md" fixed="top">
    <NavbarBrand href="/">Github Analytics</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar>
        <NavItem>
          <NavLink href="/">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/#repositories">Repos</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
  