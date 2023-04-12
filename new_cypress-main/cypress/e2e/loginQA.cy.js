describe('Тестирование формы логина и пароля', function () {

    it('Правильный логин, правильный пароль', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Авторизация прошла успешно').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })


   it('Проверка логики восстановления пароля', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#forgotEmailButton').click();
       cy.get('#mailForgot').type('dada@mail.ru')
       cy.get('#restoreEmailButton').click();
       cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })


    it('Правильный логин, НЕправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqa');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })


     it('НЕправильный логин, правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dol.ru');
        cy.get('#pass').type('Loveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })


     it('Неправильная валидация', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandol.ru');
        cy.get('#pass').type('Loveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })


     it('Проверка строчных букв', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('Loveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
















})