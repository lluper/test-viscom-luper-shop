# Teste - Front end - Viscom
### Candidato - Leonardo Luper

----

## Descrição
Este teste tem a finalidade de avaliar a criatividade e capacidade técnica para profissionais front end em criar aplicações visualmente agradáveis , modernas e fáceis de usar. O usuário deverá criar um site de vendas de produtos de informática (computadores, notebook, periféricos ,etc). 


## O projeto 

O layout foi escolhido com base no site [mercado livre](https://www.mercadolivre.com.br/), por ter uma aparência agradável e extremamente funcional, este projeto foi uma reestruturação baseado neste site, tendo seus textos, produtos, menus, logos , idênticas ao mesmo . 

## Descrição tecnica

Projeto desenvolvido em React js ,  

A maior partes dos componentes da aplicação estão localizados no diretório “src/components”. Foi tomada a decisão de que cada componente teria seu próprio CSS em um arquivo separado, gerando uma maior quantidade de arquivos porem com uma manutenção dos mesmo de forma mais fácil e rápida . 

## Estrutura de arquivos
| /public         | Contem   os arquivos   públicos   do projeto   ex : index.html                                                  |
|-----------------|-----------------------------------------------------------------------------------------------------------------|
| /src            | Contem   os arquivos gerais da aplicação como suas   paginas   , componentes,   módulos   e   etc               |
| /src/components | Contem   os   componentes   de uso geral   ( menu , Header, Blocos Visuais ,   etc )                            |
| /src/images     | Contem  os todas as imagens da aplicação                                                                        |
| /src/routes     | Contem as Rotas da aplicação                                                                                    |
| /src/pages      | Contem os componentes de Pagina                                                                                 |
| /src/styles     | Contem os estilos globais da aplicação ( estilos que tem o escopo vazado para outros  componentes da aplicação) |
| index.js        | Arquivos raiz do projeto                                                                                        |



## Falhas ainda presentes 
Atualmente os formulários não estão realizando um submit com a validação global das informações. 

Temos  uma validação no próprio input , que apresenta um erro caso o campo for preenchido de for inadequada ex: 

* Input e-mail : leonardo@    (apresenta um erro de e-mail invalido) 

* Input e-mail : leonardo@gmai.com    (esta correto) 


## Notas 
Todas as mascaras nos inputs estão funcionando. 

Produtos apresentados de forma estática pois não foi encontrada um api publica que servisse produtos aleatórios. 

Todos as paginas estão responsivas para pc , tablet e smartphone. 

O campo de busca na pagina inicial  redireciona o usuário para a pagina de resultados independente da busca feita 


 
## Clonando repositorio
```git
git clone https://github.com/lluper/test-viscom-luper-shop.git
```

### Instalando as dependencias


```
npm install
```

### Rodando o projeto
```
npm start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
