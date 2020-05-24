# FileUpload

## Docker

>Para a criação do container, instale o **docker**
Após instalação rode o comando: 
```docker run --name filemongo -p 27017:27017 -d mongo```

- O atributo **name** especifica o nome do container a ser gerado (*filemongo*);
- O atributo **-p** permite configurar a porta no Ubuntu (27017) em que acontecerá a comunicação com o MongoDB, a qual será mapeada para a porta default (27017) deste NoSQL dentro do container;
- Quanto ao atributo **-d**, este parâmetro fará com que o container em questão seja executado como um serviço em background;
- Temos indicada ainda a imagem utilizada como base para a geração do container (mongo).
> Pode-se criar um volume utilizando o atributo **-v**.

## Tecnologias

- express;
- morgan;
- mongoose;
- multan.

## Startup
> ``` yarn dev ```

## Rotas

| URL                |  Método             | Operação                     |
| ------------------ | ------------------- | ---------------------------- |
|  /users            |  GET                | Lista todos os usuários      |
|  /users            |  POST               | Cria um novo usuário         |
