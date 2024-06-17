import Dropdown from "../Dropdown.library";
import withProviders from "../../../../../cypress/utils";

describe("Dropdown.tsx", () => {
  const selectedDropdown = "[data-cy=dropdown]";
  const selectedDropdownItem = "[data-cy=dropdown-item]";

  it("1. should render the title", () => {
    const menuItems = [1, 2, 3];
    const title = "Select Item";
    const selection = 1;
    const mockMakeSelection = cy.stub().as("makeSelection");

    withProviders(
      <Dropdown
        menuItems={menuItems}
        title={title}
        makeSelection={mockMakeSelection}
        activeItem={selection}
        data-cy="dropdown"
      />,
    );
    cy.get(selectedDropdown).find(".dropdown-toggle").should("contain", title);
  });

  it("2. should allow item selection", () => {
    const menuItems = [1, 2, 3];
    const title = "Select Item";
    const selection = 1;
    const mockMakeSelection = cy.stub().as("makeSelection");

    withProviders(
      <Dropdown
        menuItems={menuItems}
        title={title}
        makeSelection={mockMakeSelection}
        activeItem={selection}
        data-cy="dropdown"
      />,
    );

    cy.contains("Select Item").click();
    cy.contains(selection).click();
    cy.get("@makeSelection").should("have.been.calledWith", selection);
  });

  it("3. should list all menu items", () => {
    const menuItems = [1, 2, 3];
    const title = "Select Item";
    const selection = 1;
    const mockMakeSelection = cy.stub().as("makeSelection");

    withProviders(
      <Dropdown
        menuItems={menuItems}
        title={title}
        makeSelection={mockMakeSelection}
        activeItem={selection}
        data-cy="dropdown"
      />,
    );
    cy.contains("Select Item").click();
    cy.get(selectedDropdownItem).should("have.length", 3);
    cy.contains(menuItems[0]).should("exist");
    cy.contains(menuItems[1]).should("exist");
    cy.contains(menuItems[2]).should("exist");
  });
});
