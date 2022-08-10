it('I execute select all query on pokemon DB',() => {
    cy.task("DATABASE", {
      dbConfig: Cypress.env("DB"),
      sql: `
      select * from pokemon    
      `
    }).then((result) => {
      console.log(result.rows)
    });
  });

  it('I execute selet query on pokemon DB, where name equals pikachu',() => {
    cy.task("DATABASE", {
      dbConfig: Cypress.env("DB"),
      sql: `
      select * from pokemon where Poke_Name = 'pikachu'   
      `
    }).then((result) => {
      console.log(result.rows[0]);
      expect(result.rows[0].Poke_Name).to.have.string(`pikachu`);
    });
  });

it.only('Excell to JSON',()=>{

    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    const excelFilePath =
      "C:\\Automation\\Cypress\\DB Testing\\MySql\\cypress\\fixtures\\logindetails.xlsx";
    const sheetName = "login";
    //Act
    // Replace cy.fixture with task to read dat from excel and convert that into json
    cy.task("generateJSONFromExcel", { excelFilePath, sheetName }).then(
      (user) => {
        cy.get("input[type=email]").type(user[0].email);
        cy.get("input[type=password]").type(user[0].password);
      }
    );

    cy.get("button[type=submit]").click();
    //Assert
    cy.contains("No articles are here... yet.").should("be.visible");
})