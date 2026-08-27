import { test, expect } from '@playwright/test';


test('deve abrir página inicial', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await expect(page.getByText('Cadastrar Atleta')).toBeVisible();

  });

  test('deve cadastrar um atleta e inscrever o atleta que acabou de criar', async ({ page }) => {
    await page.goto('http:/localhost:4200/');
    await expect(page.getByText('Cadastrar Atleta').click())
;
    await page.getByLabel('nome')
    .fill('El Tabosaz');

    await page.getByLabel('cpf')
    .fill('123456789-09');


    await page.locator('#bday').type('11/01/2005');

    /*await page.getByLabel('Data de nascimento')
    .fill('2006-07-07');
*/
    await page.getByLabel('sexo')
    .selectOption('Masculino');

    await page.getByLabel('cep')
    .fill('49032-466');
    
    await page.getByLabel('rua')
    .fill('C');

    await page.getByLabel('bairro')
    .fill('Farolândia');

    await page.getByLabel('cidade')
    .fill('Las Marias');

    await page.getByLabel('uf')
    .fill('LM');

    await Promise.all([
      page.waitForResponse(response => 
        response.url().includes('6a8387bacb486d243403bb3b.mockapi.io/apiPitanga/AtletaM') &&
        response.request().method() === 'POST'
      ),
      page.getByRole('button', { name: 'Cadastrar Atleta' }).click()
    ]);

    await expect(page.getByText('Inscrição').click())

    await page.getByLabel('Atleta Cadastrado')
    .selectOption('tabos fodase');

    await page.getByLabel('Corrida escolhida')
    .selectOption('2')

    await page.getByLabel('Tamanho da Camiseta')
    .selectOption('G')

   
    await Promise.all([
      page.waitForResponse(response => 
        response.url().includes('6a87994270fbbd308f990dc5.mockapi.io/inscricao') &&
        response.request().method() === 'POST'
      ),
      page.getByRole('button', { name: 'Inscrever-se' }).click()
    ]);
    });

    
      
